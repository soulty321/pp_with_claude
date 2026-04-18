#!/usr/bin/env python3
"""과거 채용 리포트 일괄 Notion 적재 (백필).

Usage:
    python scripts/backfill.py

daily_reports/jobs/ 디렉토리의 모든 YYYY-MM-DD.md 파일을
날짜순으로 Notion에 적재합니다.
"""

import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from scripts.notion_sync import sync_report


def main():
    jobs_dir = Path(__file__).resolve().parent.parent / "daily_reports" / "jobs"

    if not jobs_dir.exists():
        print(f"디렉토리 없음: {jobs_dir}", file=sys.stderr)
        sys.exit(1)

    # YYYY-MM-DD.md 패턴만 수집 (액션 플랜 등 제외)
    date_pattern = re.compile(r"^\d{4}-\d{2}-\d{2}\.md$")
    files = sorted(
        f for f in jobs_dir.iterdir()
        if f.is_file() and date_pattern.match(f.name)
    )

    if not files:
        print("적재할 리포트 파일이 없습니다.")
        return

    print(f"📦 백필 시작: {len(files)}개 파일")
    print(f"   범위: {files[0].stem} ~ {files[-1].stem}\n")

    for f in files:
        sync_report(str(f))

    print(f"🎉 백필 완료: {len(files)}개 리포트 처리됨")


if __name__ == "__main__":
    main()
