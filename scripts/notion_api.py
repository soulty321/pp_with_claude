"""Notion API 클라이언트 래퍼.

Rate limit 핸들링과 공통 CRUD 연산을 제공합니다.
"""

import os
import time
from datetime import datetime

from notion_client import Client
from notion_client.errors import APIResponseError


def get_client() -> Client:
    """환경변수에서 토큰을 읽어 Notion 클라이언트 반환."""
    token = os.environ.get("NOTION_TOKEN")
    if not token:
        raise RuntimeError("NOTION_TOKEN 환경변수가 설정되지 않았습니다.")
    return Client(auth=token)


def rate_limited_call(fn, *args, max_retries: int = 3, **kwargs):
    """Notion API 호출 + rate limit(429) 재시도."""
    for attempt in range(max_retries):
        try:
            result = fn(*args, **kwargs)
            time.sleep(0.35)  # 3 req/s 제한 준수
            return result
        except APIResponseError as e:
            if e.status == 429 and attempt < max_retries - 1:
                retry_after = float(e.headers.get("Retry-After", 1))
                print(f"  Rate limited. Waiting {retry_after}s...")
                time.sleep(retry_after)
            else:
                raise


def query_database(client: Client, database_id: str, filter_obj: dict, page_size: int = 1) -> dict:
    """Notion DB 쿼리 — httpx 직접 호출 (notion-client v2/v3 호환)."""
    def _query():
        resp = client.client.post(
            f"https://api.notion.com/v1/databases/{database_id}/query",
            json={"filter": filter_obj, "page_size": page_size},
            headers={
                "Authorization": f"Bearer {client.options.auth}",
                "Notion-Version": "2022-06-28",
                "Content-Type": "application/json",
            },
        )
        resp.raise_for_status()
        return resp.json()
    return rate_limited_call(_query)


def find_page_by_url(client: Client, database_id: str, url: str) -> str | None:
    """URL 속성으로 기존 페이지 검색. 있으면 page_id, 없으면 None."""
    response = query_database(
        client, database_id,
        filter_obj={"property": "링크", "url": {"equals": url}},
    )
    results = response.get("results", [])
    return results[0]["id"] if results else None


def find_log_by_date(client: Client, database_id: str, date_str: str) -> str | None:
    """날짜(Title)로 일일 수집 로그 검색."""
    response = query_database(
        client, database_id,
        filter_obj={"property": "날짜", "title": {"equals": date_str}},
    )
    results = response.get("results", [])
    return results[0]["id"] if results else None


def create_job_page(client: Client, database_id: str, posting, collected_date: str):
    """채용 공고 페이지 생성."""
    from scripts.parsers.job_report_parser import JobPosting

    title = f"{posting.company} — {posting.position}"

    properties = {
        "공고명": {"title": [{"text": {"content": title}}]},
        "회사명": {"select": {"name": posting.company}},
        "포지션": {"rich_text": [{"text": {"content": posting.position}}]},
        "적합도": {"select": {"name": f"{'🔴 HIGH' if posting.fit_level == 'HIGH' else '🟡 MEDIUM'}"}},
        "수집일": {"date": {"start": collected_date}},
        "최종 확인일": {"date": {"start": collected_date}},
        "상시채용": {"checkbox": posting.is_always_open},
        "상태": {"select": {"name": "🟢 진행중"}},
    }

    if posting.keywords:
        properties["매칭 키워드"] = {
            "multi_select": [{"name": kw} for kw in posting.keywords]
        }

    if posting.link and posting.link.startswith("http"):
        properties["링크"] = {"url": posting.link}

    if posting.deadline and not posting.is_always_open:
        # 날짜 형태 파싱 시도 (예: ~2026-07-31, 2026-07-31)
        deadline_clean = posting.deadline.lstrip("~").strip()
        try:
            datetime.strptime(deadline_clean, "%Y-%m-%d")
            properties["마감일"] = {"date": {"start": deadline_clean}}
        except ValueError:
            pass  # 파싱 불가 시 비워둠

    return rate_limited_call(
        client.pages.create,
        parent={"database_id": database_id},
        properties=properties,
    )


def update_job_page_last_seen(client: Client, page_id: str, date_str: str):
    """기존 공고의 최종 확인일 업데이트."""
    return rate_limited_call(
        client.pages.update,
        page_id=page_id,
        properties={
            "최종 확인일": {"date": {"start": date_str}},
        },
    )


def upsert_daily_log(
    client: Client,
    database_id: str,
    date_str: str,
    high_count: int,
    medium_count: int,
    new_count: int,
    github_url: str = "",
):
    """일일 수집 로그 upsert."""
    existing = find_log_by_date(client, database_id, date_str)

    properties = {
        "날짜": {"title": [{"text": {"content": date_str}}]},
        "HIGH 건수": {"number": high_count},
        "MEDIUM 건수": {"number": medium_count},
        "신규 공고 수": {"number": new_count},
    }

    if existing:
        return rate_limited_call(
            client.pages.update,
            page_id=existing,
            properties=properties,
        )
    else:
        return rate_limited_call(
            client.pages.create,
            parent={"database_id": database_id},
            properties=properties,
        )
