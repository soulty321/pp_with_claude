#!/usr/bin/env python3
"""채용 리포트 → Notion DB 동기화 메인 스크립트.

Usage:
    python scripts/notion_sync.py daily_reports/jobs/2026-04-17.md

환경변수:
    NOTION_TOKEN       - Notion Internal Integration 토큰
    NOTION_JOBS_DB_ID  - 채용 공고 아카이브 DB ID
    NOTION_LOG_DB_ID   - 일일 수집 로그 DB ID
"""

import os
import sys
from pathlib import Path

# 프로젝트 루트를 path에 추가
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from scripts.parsers.job_report_parser import parse_job_report
from scripts.notion_client import (
    get_client,
    find_page_by_url,
    create_job_page,
    update_job_page_last_seen,
    upsert_daily_log,
)


def sync_report(file_path: str):
    """단일 리포트 파일을 Notion에 동기화."""
    jobs_db_id = os.environ.get("NOTION_JOBS_DB_ID")
    log_db_id = os.environ.get("NOTION_LOG_DB_ID")

    if not jobs_db_id:
        print("ERROR: NOTION_JOBS_DB_ID 환경변수가 설정되지 않았습니다.", file=sys.stderr)
        sys.exit(1)

    client = get_client()
    report = parse_job_report(file_path)

    print(f"📋 {report.date} 리포트 동기화 시작")
    print(f"   HIGH: {report.high_count}건, MEDIUM: {report.medium_count}건")

    new_count = 0
    updated_count = 0

    for posting in report.all_postings:
        if not posting.link or not posting.link.startswith("http"):
            print(f"  ⚠️ 링크 없음, 스킵: {posting.company} — {posting.position}")
            continue

        existing_id = find_page_by_url(client, jobs_db_id, posting.link)

        if existing_id:
            update_job_page_last_seen(client, existing_id, report.date)
            updated_count += 1
            print(f"  🔄 업데이트: {posting.company} — {posting.position}")
        else:
            create_job_page(client, jobs_db_id, posting, report.date)
            new_count += 1
            print(f"  ✅ 신규: {posting.company} — {posting.position}")

    print(f"\n   결과: 신규 {new_count}건, 업데이트 {updated_count}건")

    # 일일 수집 로그
    if log_db_id:
        repo_url = os.environ.get("GITHUB_SERVER_URL", "https://github.com")
        repo_name = os.environ.get("GITHUB_REPOSITORY", "soulty321/pp_with_claude")
        github_url = f"{repo_url}/{repo_name}/blob/main/{file_path}"

        upsert_daily_log(
            client,
            log_db_id,
            report.date,
            report.high_count,
            report.medium_count,
            new_count,
            github_url,
        )
        print(f"   📊 일일 로그 기록 완료")
    else:
        print("   ℹ️ NOTION_LOG_DB_ID 미설정 — 일일 로그 스킵")

    print(f"✅ {report.date} 동기화 완료\n")


def main():
    if len(sys.argv) < 2:
        print("Usage: python notion_sync.py <report.md> [report2.md ...]", file=sys.stderr)
        sys.exit(1)

    for file_path in sys.argv[1:]:
        if not Path(file_path).exists():
            print(f"파일 없음: {file_path}", file=sys.stderr)
            continue
        sync_report(file_path)


if __name__ == "__main__":
    main()
