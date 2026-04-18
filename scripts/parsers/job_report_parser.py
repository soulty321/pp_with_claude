"""채용 리포트 마크다운 파서.

daily_reports/jobs/YYYY-MM-DD.md 파일을 파싱하여
Notion DB에 적재할 구조화된 데이터를 추출합니다.
"""

import re
from dataclasses import dataclass, field
from pathlib import Path


@dataclass
class JobPosting:
    company: str
    position: str
    fit_level: str  # "HIGH" or "MEDIUM"
    keywords: list[str] = field(default_factory=list)
    deadline: str = ""
    link: str = ""
    is_always_open: bool = False


@dataclass
class DailyJobReport:
    date: str  # YYYY-MM-DD
    high_postings: list[JobPosting] = field(default_factory=list)
    medium_postings: list[JobPosting] = field(default_factory=list)

    @property
    def all_postings(self) -> list[JobPosting]:
        return self.high_postings + self.medium_postings

    @property
    def high_count(self) -> int:
        return len(self.high_postings)

    @property
    def medium_count(self) -> int:
        return len(self.medium_postings)


def _extract_url(md_link: str) -> str:
    """마크다운 링크 [text](url) → url 추출."""
    m = re.search(r"\[.*?\]\((https?://[^\s)]+)\)", md_link)
    return m.group(1) if m else md_link.strip()


def _strip_bold(text: str) -> str:
    """**bold** 마커 제거."""
    return re.sub(r"\*\*(.*?)\*\*", r"\1", text).strip()


def _parse_keywords(raw: str) -> list[str]:
    """키워드 문자열 → 리스트. 쉼표/중점/세미콜론 구분."""
    if not raw.strip():
        return []
    # 쉼표, 중점(·), 세미콜론으로 분리
    parts = re.split(r"[,·;]", raw)
    return [p.strip() for p in parts if p.strip()]


def _is_always_open(deadline: str) -> bool:
    """상시채용 여부 판별."""
    keywords = ["상시", "수시", "상시채용", "수시채용"]
    return any(k in deadline for k in keywords)


def _parse_table(lines: list[str]) -> list[dict]:
    """마크다운 테이블 행 → 딕셔너리 리스트."""
    if len(lines) < 3:
        return []
    headers = [h.strip() for h in lines[0].strip().strip("|").split("|")]
    rows = []
    for line in lines[2:]:
        line = line.strip()
        if not line or not line.startswith("|"):
            break
        cells = [c.strip() for c in line.strip().strip("|").split("|")]
        row = {}
        for i, h in enumerate(headers):
            row[h] = cells[i] if i < len(cells) else ""
        rows.append(row)
    return rows


def parse_job_report(file_path: str | Path) -> DailyJobReport:
    """채용 리포트 마크다운 파일을 파싱하여 DailyJobReport 반환."""
    path = Path(file_path)
    date = path.stem  # YYYY-MM-DD

    content = path.read_text(encoding="utf-8")
    lines = content.split("\n")

    report = DailyJobReport(date=date)
    current_section = ""
    i = 0

    while i < len(lines):
        line = lines[i]

        # 섹션 헤더 감지
        if line.startswith("## "):
            if "높음" in line or "HIGH" in line.upper():
                current_section = "HIGH"
            elif "보통" in line or "MEDIUM" in line.upper():
                current_section = "MEDIUM"
            elif "팔로우업" in line or "전략" in line:
                current_section = ""  # 팔로우업/전략은 스킵
            i += 1
            continue

        # 테이블 감지
        if (
            current_section in ("HIGH", "MEDIUM")
            and line.strip().startswith("|")
            and i + 1 < len(lines)
        ):
            next_line = lines[i + 1].strip() if i + 1 < len(lines) else ""
            if re.match(r"\|[\s\-:|]+\|", next_line):
                # 테이블 전체 수집
                table_lines = []
                j = i
                while j < len(lines) and lines[j].strip().startswith("|"):
                    table_lines.append(lines[j])
                    j += 1

                rows = _parse_table(table_lines)
                for row in rows:
                    company = _strip_bold(row.get("기업", ""))
                    position = _strip_bold(row.get("포지션", ""))
                    deadline_raw = row.get("마감일", "")
                    keywords_raw = row.get("매칭 키워드", "")
                    link_raw = row.get("링크", "")

                    posting = JobPosting(
                        company=company,
                        position=position,
                        fit_level=current_section,
                        keywords=_parse_keywords(keywords_raw),
                        deadline=deadline_raw.strip(),
                        link=_extract_url(link_raw),
                        is_always_open=_is_always_open(deadline_raw),
                    )

                    if current_section == "HIGH":
                        report.high_postings.append(posting)
                    else:
                        report.medium_postings.append(posting)

                i = j
                continue

        i += 1

    return report


if __name__ == "__main__":
    import sys

    if len(sys.argv) < 2:
        print("Usage: python job_report_parser.py <file.md>")
        sys.exit(1)

    report = parse_job_report(sys.argv[1])
    print(f"Date: {report.date}")
    print(f"HIGH: {report.high_count}건, MEDIUM: {report.medium_count}건")
    print()
    for p in report.all_postings:
        kw = ", ".join(p.keywords) if p.keywords else "-"
        print(f"[{p.fit_level}] {p.company} — {p.position} | {kw} | {p.link}")
