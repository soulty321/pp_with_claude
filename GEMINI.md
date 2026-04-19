# GEMINI.md

이 파일은 이 저장소에서 작업할 때 Gemini CLI에게 제공하는 핵심 지침 문서입니다. 이 문서의 지침은 일반적인 워크플로우보다 우선합니다.

## 프로젝트 개요
이 저장소는 프로덕트 디자이너(UX/UI) **문호균(Moon Ho-kyun)**의 포트폴리오 웹사이트 콘텐츠 및 에셋 소스입니다.
- **Vite+React 기반의 웹 포트폴리오**에서 사용될 데이터와 자산을 관리합니다.
- **핵심 데이터 구조**: `projectData.js`(구조) + `key.json`(텍스트/번역)
- **자산**: `img_source/`(SVG/PNG)

## 핵심 지침 (Mandates)

### 1. 텍스트 및 i18n 관리
- **절대 원칙**: 사용자에게 노출되는 모든 텍스트는 `key.json`에 정의된 키를 사용합니다.
- `projectData.js` 내부에는 텍스트를 직접 하드코딩하지 말고 반드시 `key.json`의 키(예: `"P1_TITLE"`)를 참조하게 합니다.
- 새로운 텍스트 추가 시 한국어(`ko`)와 영어(`en`) 번역을 모두 `key.json`에 업데이트해야 합니다.

### 2. 콘텐츠 구조 및 흐름
- 각 프로젝트는 반드시 다음의 내러티브 흐름을 준수해야 합니다:
  `Overview` -> `Problem` -> `Strategy` -> `Solution A` -> `Solution B` (AS-IS/TO-BE) -> `Impact & Lesson`
- 프로젝트 추가/수정 시 `layoyt_composer.md`와 `portfolio_contents_maker.md`의 가이드라인을 확인하십시오.

### 3. 이미지 네이밍 컨벤션
- 기본 형식: `p{n}{Section}.svg` (예: `myKeyword_projectProblem.svg`)
- 프로젝트 4~7(디자인 시스템 등)은 하이픈을 포함한 이름 사용: `designSystem_projectSolution-A.svg`, `p5Impact-1.svg`
- 모든 소스 이미지는 `img_source/` 디렉토리에 위치해야 합니다.

### 4. 외부 도구 활용
- **NotebookLM**: 프로젝트의 배경이나 세부 맥락이 필요할 때 `CLAUDE.md`에 기재된 NotebookLM 링크를 참고하거나, 관련 정보를 요청하십시오.
- **Figma**: 디자인 레이아웃 및 이력서 데이터 수정 시 `CLAUDE.md`의 Figma 링크를 참조하십시오.

## 주요 파일 설명
- `key.json`: 200개 이상의 UI 문자열 및 프로젝트 콘텐츠 키/값 쌍 (i18n).
- `projectData.js`: 8개 프로젝트의 메타데이터 및 섹션 구성 정의.
- `img_source/`: 프로젝트별 이미지 에셋 저장소.
- `daily_reports/`: 작업 일지 및 액션 플랜.

## 기술 표준
- JSON 수정 시 구문 오류가 발생하지 않도록 주의하십시오 (특히 `key.json`).
- `projectData.js`는 JavaScript 객체 형식이므로 문법을 준수해야 합니다.
- 수정 사항이 발생하면 반드시 `key.json`과 `projectData.js` 간의 정합성을 확인하십시오.
