# CLAUDE.md

이 파일은 이 저장소에서 작업할 때 Claude Code(claude.ai/code)에게 제공하는 안내 문서입니다.

## 이 저장소의 목적

이 저장소는 프로덕트 디자이너(UX/UI) **포트폴리오 웹사이트의 콘텐츠 및 에셋 소스**입니다. 실행 가능한 애플리케이션이 아니며 — 데이터, 번역 텍스트, 이미지, 전략 문서를 담고 있으며, 이는 별도의 Vite+React 앱(형제 디렉토리 `pp (1)/`)에서 사용됩니다.

- **포트폴리오 주인**: 문호균(Moon Ho-kyun)
- **프로젝트 수**: 7개 (ListeningMind, Dangen 등)
- **언어**: 한국어/영어 이중 지원 (i18n)

## 주요 파일

- **`projectData.js`** — 7개 프로젝트의 구조화된 데이터. 각 프로젝트는 overview, problem, strategy, solutionA, solutionB, impact 섹션으로 구성됩니다. 모든 텍스트 값은 `key.json`을 통해 해석되는 i18n 키(예: `"myKeyword_project_HEADLINE"`)입니다. 이미지 경로는 앱에서 사용하는 `/stitch_source/`를 참조하며, 소스 SVG는 `img_source/`에 위치합니다.
- **`key.json`** — 한국어/영어 UI 문자열(200개 이상의 키). 키 네이밍 규칙: 프로젝트 콘텐츠는 `P{n}_*`, 내비게이션은 `NAV_*`, 히어로 섹션은 `HERO_*`, 성과는 `ACH_*`, 인덱스 페이지는 `INDEX_*`.
- **`img_source/`** — 프로젝트 번호(`myKeyword_project`~`aiAgent_project`)별로 정리된 SVG/PNG 에셋. 각 프로젝트에는 Problem, Strategy, SolutionA, SolutionB, Impact(1~3) 이미지와 `img_source/img/`의 커버 이미지가 포함됩니다.

## 전략 문서

포트폴리오의 디자인 철학과 콘텐츠 전략을 정의하는 4개의 마크다운 파일:

- `portfolio_analysis.md` — 사용자 중심 포트폴리오 전략; 평가자 니즈 분석
- `job_crawler.md` — 채용 공고 분석 및 지원 기업 타게팅 방법론
- `layoyt_composer.md` — 레이아웃 구성 가이드라인 (커버, 문제, 솔루션, 임팩트 섹션)
- `portfolio_contents_maker.md` — 콘텐츠 구조: 문제 정의 -> 목표 -> 솔루션 -> 결과; 2~3개 프로젝트, 최대 약 40슬라이드 권장

## 콘텐츠 규칙

- 사용자에게 노출되는 모든 텍스트는 `key.json`에 작성하며, `projectData.js`에 직접 하드코딩하지 않음
- 프로젝트 섹션은 엄격한 내러티브 흐름을 따름: Overview -> Problem -> Strategy -> Solution A -> Solution B (AS-IS/TO-BE 포함) -> Impact & Lesson
- 이미지 네이밍: `p{n}{Section}.svg` (예: `myKeyword_projectProblem.svg`, `pathDual_projectSolutionA.svg`)
- 프로젝트 4~7은 하이픈이 포함된 이미지 이름 사용 (예: `designSystem_projectSolution-A.svg`, `p5Impact-1.svg`)
- 사이드 프로젝트는 `projectData.js`에서 `isdangen_projectProject: true`로 표시

# 피그마 링크

- 프로젝트 링크: https://www.figma.com/design/yC4yaCpntjTfgvpaRrn8WT/portfolio_with_claude?m=dev

## mcp 기능을 통해 파일 수정 요청 시, 아래 링크에 접속하여 수정합니다.

1. Cover: https://www.figma.com/design/yC4yaCpntjTfgvpaRrn8WT/portfolio_with_claude?node-id=5-2&m=dev
2. Index: https://www.figma.com/design/yC4yaCpntjTfgvpaRrn8WT/portfolio_with_claude?node-id=5-16&m=dev
3. Achievement: https://www.figma.com/design/yC4yaCpntjTfgvpaRrn8WT/portfolio_with_claude?node-id=5-40&m=dev
4. myKeyword_project: https://www.figma.com/design/yC4yaCpntjTfgvpaRrn8WT/portfolio_with_claude?node-id=30-1511&m=dev
5. myKeywordFilter_project: https://www.figma.com/design/yC4yaCpntjTfgvpaRrn8WT/portfolio_with_claude?node-id=30-1512&m=dev
6. pathDual_project: https://www.figma.com/design/yC4yaCpntjTfgvpaRrn8WT/portfolio_with_claude?node-id=30-1513&m=dev
7. designSystem_project: https://www.figma.com/design/yC4yaCpntjTfgvpaRrn8WT/portfolio_with_claude?node-id=30-1514&m=dev
8. munoArt_project: https://www.figma.com/design/yC4yaCpntjTfgvpaRrn8WT/portfolio_with_claude?node-id=30-1515&m=dev
9. aiAgent_project: https://www.figma.com/design/yC4yaCpntjTfgvpaRrn8WT/portfolio_with_claude?node-id=30-1516&m=dev
10. dangen_project: https://www.figma.com/design/yC4yaCpntjTfgvpaRrn8WT/portfolio_with_claude?node-id=30-1517&m=dev

## 각 페이지의 레이아웃 및 디자인을 수정할 경우, 아래 링크에 접속하여 수정합니다.

1. 01_Overview: https://www.figma.com/design/yC4yaCpntjTfgvpaRrn8WT/portfolio_with_claude?node-id=30-29&m=dev
2. 02_Problem: https://www.figma.com/design/yC4yaCpntjTfgvpaRrn8WT/portfolio_with_claude?node-id=30-339&m=dev
3. 03_Strategy: https://www.figma.com/design/yC4yaCpntjTfgvpaRrn8WT/portfolio_with_claude?node-id=30-734&m=dev
4. 04_SolutionA: https://www.figma.com/design/yC4yaCpntjTfgvpaRrn8WT/portfolio_with_claude?node-id=30-921&m=dev
5. 05_SolutionB: https://www.figma.com/design/yC4yaCpntjTfgvpaRrn8WT/portfolio_with_claude?node-id=30-1201&m=dev
6. 06_Impact: https://www.figma.com/design/yC4yaCpntjTfgvpaRrn8WT/portfolio_with_claude?node-id=30-1299&m=dev
