# Notion 채용 데이터 파이프라인 셋업 가이���

## 1. Notion Internal Integration 생성

1. https://www.notion.so/profile/integrations 접속
2. `+ New integration` 클릭
3. 설정:
   - **Name**: `Daily Job Report Bot`
   - **Associated workspace**: 본인 워크스페이스 선택
   - **Capabilities**: Read content, Insert content, Update content 체크
4. `Submit` 후 **Internal Integration Secret** 복사 (`ntn_xxx...` 형태)

---

## 2. Notion Database 생성

### DB 1: 채용 공고 아카이브

새 페이지 → `/database` → **Full page database** 선택 → 이름: `채용 공고 아카이브`

아래 Property를 순서대로 추가:

| Property 이름 | Type | 설정값 |
|---------------|------|--------|
| 공고명 | Title | (기본 생성됨) |
| 회사명 | Select | 옵션 자동 추가됨 |
| 포지션 | Rich Text | |
| 적합도 | Select | 옵션: `🔴 HIGH`, `🟡 MEDIUM` |
| 매칭 키워드 | Multi-select | 옵션 자동 추가됨 |
| 마감일 | Date | |
| 수집일 | Date | |
| 최종 확��일 | Date | |
| 링크 | URL | |
| 상태 | Select | 옵션: `🟢 진행중`, `🟡 대기`, `🔴 마감`, `✅ 지원완료`, `📝 서류통과` |
| 상시채용 | Checkbox | |
| 칵테일 전략 | Rich Text | |
| 메모 | Rich Text | |

### DB 2: 일일 수집 로그

새 페이지 → `/database` → **Full page database** → 이름: `일일 수집 로그`

| Property 이름 | Type | 설정값 |
|---------------|------|--------|
| 날짜 | Title | YYYY-MM-DD 형식 |
| HIGH 건수 | Number | |
| MEDIUM 건수 | Number | |
| 신규 공고 수 | Number | |
| 주요 발견 | Rich Text | |
| 리포트 원문 | URL | GitHub permalink |

---

## 3. Database에 Integration 연결

각 DB 페이지에서:
1. 우상단 `···` 메뉴 클릭
2. `Connections` → `Daily Job Report Bot` 선택
3. `Confirm` 클릭

**두 DB 모두** 연결해야 합니다.

---

## 4. DB ID 확인

각 DB를 브라우저에서 열면 URL이 다음 형태입니다:
```
https://www.notion.so/{workspace}/{DB_ID}?v={view_id}
```

`{DB_ID}` 부분 (32자리 hex)을 복사합니다.

---

## 5. GitHub Secrets 등록

Repository → Settings → Secrets and variables → Actions → `New repository secret`:

| Secret 이름 | 값 |
|-------------|-----|
| `NOTION_TOKEN` | Integration Secret (`ntn_xxx...`) |
| `NOTION_JOBS_DB_ID` | 채용 ���고 아카이��� DB ID |
| `NOTION_LOG_DB_ID` | 일일 수집 로그 DB ID |

---

## 6. 백필 실행 (과거 데이터 일괄 적재)

Secrets 등록 후, 로컬에서 한 번 실행:

```bash
# 환경변수 설정
export NOTION_TOKEN="ntn_xxx..."
export NOTION_JOBS_DB_ID="your_jobs_db_id"
export NOTION_LOG_DB_ID="your_log_db_id"

# 의존성 설치
pip install -r scripts/requirements.txt

# 백필 실행 (4/10~4/17, 8개 파일)
python scripts/backfill.py
```

---

## 7. 추천 Notion 뷰 구성

### 채용 공고 아카이브

| 뷰 이름 | 뷰 타입 | 설정 |
|----------|---------|------|
| 📋 전체 목록 | Table | 수집일 역순 정렬 |
| 📊 적합도별 | Board | Group by: 적합도 |
| 🏢 회사별 | Board | Group by: 회사명 |
| 📅 마감일 타임라인 | Calendar | Date: 마감일 (상시채용=체크박스 필터 제외) |
| 🟢 진행중만 | Table | Filter: 상태 = 🟢 진행중 |

### 일일 수집 로그

| 뷰 이름 | 뷰 타입 | 설정 |
|----------|---------|------|
| 📈 타임라인 | Table | 날짜순 정렬 |
| 📊 차트 | Chart | X: 날짜, Y: HIGH 건수 + MEDIUM 건수 |

---

## 8. 대시보드 페이지 구성 (선택)

새 페이지 `📊 채용 시장 대시보드` 생성 후:

1. **링크드 뷰**: 채용 공고 아카이브 → 🟢 진행중만 뷰
2. **링��드 뷰**: 채용 공고 아카이브 → 최근 30일 신규 (수집일 필터)
3. **링크드 ���**: 일일 수집 로그 → 📊 차트 뷰
4. **링크드 뷰**: 채용 공고 아카이브 → 🏢 회사별 보드 뷰
5. **콜아웃 블록**: 분기별 시장 메모 (수동 기록)

### 분기별 리뷰 체크리스트

- [ ] 가장 자주 등장하는 키워드 변화 추적 (AI, 데이터 기반 등)
- [ ] 새로 등장/사라진 회사 확인
- [ ] 적합도 HIGH 비율 변화 → 역량-시장 수요 갭 분석
- [ ] 칵테일 전략 배합 비율 조정 필요 여부 검토
- [ ] 포트폴리오 프로젝트 순서 재배치 검토
