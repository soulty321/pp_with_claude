#!/usr/bin/env python3
"""마크다운 테이블 → Discord 이모지 불릿 리스트 변환기.

Usage:
    python scripts/md_to_discord.py daily_reports/jobs/2026-04-17.md
    python scripts/md_to_discord.py daily_reports/finance/2026-04-17.md
"""

import io
import re
import sys
from pathlib import Path

# Windows cp949 인코딩 문제 방지
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")


def parse_table_rows(lines: list[str]) -> list[dict]:
    """마크다운 테이블을 파싱하여 헤더-값 딕셔너리 리스트로 반환."""
    if len(lines) < 3:
        return []

    headers = [h.strip() for h in lines[0].strip().strip("|").split("|")]
    rows = []
    for line in lines[2:]:  # 헤더, 구분선 건너뜀
        line = line.strip()
        if not line or not line.startswith("|"):
            break
        cells = [c.strip() for c in line.strip().strip("|").split("|")]
        if len(cells) >= len(headers):
            rows.append(dict(zip(headers, cells)))
        elif cells:
            # 칼럼 수 불일치 시 가능한 만큼 매핑
            row = {}
            for i, h in enumerate(headers):
                row[h] = cells[i] if i < len(cells) else ""
            rows.append(row)
    return rows


def extract_url(md_link: str) -> str:
    """마크다운 링크 [text](url) → url 추출. 없으면 원본 반환."""
    m = re.search(r"\[.*?\]\((https?://[^\s)]+)\)", md_link)
    return m.group(1) if m else md_link.strip()


def strip_bold(text: str) -> str:
    """**bold** 마커 제거."""
    return re.sub(r"\*\*(.*?)\*\*", r"\1", text)


def convert_job_high_table(rows: list[dict]) -> str:
    """적합도 HIGH 테이블 → Discord 불릿 카드."""
    result = []
    for row in rows:
        company = strip_bold(row.get("기업", ""))
        position = strip_bold(row.get("포지션", ""))
        deadline = row.get("마감일", "")
        keywords = row.get("매칭 키워드", "")
        link_raw = row.get("링크", "")
        url = extract_url(link_raw)

        card = f"🏢 **{company}** — {position}"
        if deadline:
            card += f"\n├ 📅 마감: {deadline}"
        if keywords:
            card += f"\n├ 🏷️ {keywords}"
        if url and url.startswith("http"):
            card += f"\n└ 🔗 {url}"
        result.append(card)
    return "\n\n".join(result)


def convert_job_medium_table(rows: list[dict]) -> str:
    """적합도 MEDIUM 테이블 → Discord 불릿 카드."""
    result = []
    for row in rows:
        company = strip_bold(row.get("기업", ""))
        position = strip_bold(row.get("포지션", ""))
        link_raw = row.get("링크", "")
        deadline = row.get("마감일", "")
        url = extract_url(link_raw)

        card = f"🏢 **{company}** — {position}"
        if deadline:
            card += f"\n├ 📅 마감: {deadline}"
        if url and url.startswith("http"):
            card += f"\n└ 🔗 {url}"
        result.append(card)
    return "\n\n".join(result)


def convert_followup_table(rows: list[dict]) -> str:
    """팔로우업 테이블 → Discord 불릿."""
    result = []
    for row in rows:
        company = strip_bold(row.get("기업", ""))
        last_date = row.get("마지막 공고", "")
        status = row.get("상태", "")
        next_check = row.get("다음 체크일", "")

        card = f"• **{company}**"
        if status:
            card += f" — {status}"
        parts = []
        if last_date:
            parts.append(f"최근: {last_date}")
        if next_check:
            parts.append(f"다음: {next_check}")
        if parts:
            card += f"\n  {' | '.join(parts)}"
        result.append(card)
    return "\n".join(result)


def convert_strategy_table(rows: list[dict]) -> str:
    """칵테일 전략 배합 비율 테이블 → 불릿."""
    result = []
    for row in rows:
        element = row.get("요소", "")
        ratio = row.get("비율", "")
        point = row.get("포인트", "")
        result.append(f"• **{element}** ({ratio}) — {point}")
    return "\n".join(result)


def convert_finance_kv_table(rows: list[dict]) -> str:
    """재정 리포트 항목|내용 테이블 → key: value 불릿."""
    result = []
    for row in rows:
        key = row.get("항목", "")
        value = row.get("내용", "")
        result.append(f"• {key}: {value}")
    return "\n".join(result)


def convert_finance_expense_table(rows: list[dict]) -> str:
    """재정 지출 내역 테이블 → 불릿."""
    result = []
    for row in rows:
        date = row.get("날짜", "")
        amount = row.get("지출", "")
        items = row.get("주요 항목", "")
        result.append(f"• {date}: {amount} — {items}")
    return "\n".join(result)


def detect_table_type(headers: list[str], section_context: str) -> str:
    """테이블 헤더와 섹션 컨텍스트로 테이블 유형 판별."""
    h_set = set(h.strip() for h in headers)

    if "매칭 키워드" in h_set:
        return "job_high"
    if "마지막 공고" in h_set or "다음 체크일" in h_set:
        return "followup"
    if "요소" in h_set and "비율" in h_set:
        return "strategy"
    if "항목" in h_set and "내용" in h_set:
        return "finance_kv"
    if "주요 항목" in h_set and "날짜" in h_set:
        return "finance_expense"

    # 섹션 컨텍스트로 추가 판별
    ctx_lower = section_context.lower()
    if "높음" in ctx_lower or "high" in ctx_lower:
        return "job_high"
    if "보통" in ctx_lower or "medium" in ctx_lower:
        return "job_medium"
    if "팔로우업" in ctx_lower or "followup" in ctx_lower:
        return "followup"

    # 기업/포지션/링크 패턴 → MEDIUM
    if "기업" in h_set and "포지션" in h_set:
        return "job_medium"

    return "generic"


def convert_generic_table(rows: list[dict]) -> str:
    """알 수 없는 테이블 → 간단한 불릿 변환."""
    result = []
    for row in rows:
        parts = [f"{k}: {v}" for k, v in row.items() if v.strip()]
        result.append(f"• {' | '.join(parts)}")
    return "\n".join(result)


TABLE_CONVERTERS = {
    "job_high": convert_job_high_table,
    "job_medium": convert_job_medium_table,
    "followup": convert_followup_table,
    "strategy": convert_strategy_table,
    "finance_kv": convert_finance_kv_table,
    "finance_expense": convert_finance_expense_table,
    "generic": convert_generic_table,
}


def transform_markdown(content: str) -> str:
    """마크다운 콘텐츠의 테이블을 Discord 불릿 리스트로 변환."""
    lines = content.split("\n")
    result = []
    i = 0
    section_context = ""

    while i < len(lines):
        line = lines[i]

        # 섹션 헤더 추적 (## 또는 ###)
        if line.startswith("#"):
            section_context = line

        # 테이블 시작 감지: | 로 시작하는 행
        if line.strip().startswith("|") and i + 1 < len(lines):
            # 다음 줄이 구분선(|---|---|)인지 확인
            next_line = lines[i + 1].strip() if i + 1 < len(lines) else ""
            if re.match(r"\|[\s\-:|]+\|", next_line):
                # 테이블 전체 수집
                table_lines = []
                j = i
                while j < len(lines) and lines[j].strip().startswith("|"):
                    table_lines.append(lines[j])
                    j += 1

                # 헤더 파싱
                headers = [h.strip() for h in table_lines[0].strip().strip("|").split("|")]
                table_type = detect_table_type(headers, section_context)
                rows = parse_table_rows(table_lines)

                if rows:
                    converter = TABLE_CONVERTERS.get(table_type, convert_generic_table)
                    result.append(converter(rows))
                else:
                    # 빈 테이블은 그대로
                    result.extend(table_lines)

                i = j
                continue

        result.append(line)
        i += 1

    return "\n".join(result)


def main():
    if len(sys.argv) < 2:
        print("Usage: python md_to_discord.py <file.md>", file=sys.stderr)
        sys.exit(1)

    file_path = Path(sys.argv[1])
    if not file_path.exists():
        print(f"File not found: {file_path}", file=sys.stderr)
        sys.exit(1)

    content = file_path.read_text(encoding="utf-8")
    transformed = transform_markdown(content)
    print(transformed)


if __name__ == "__main__":
    main()
