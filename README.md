# 정보보안기사 필기 학습 플랫폼

상명대학교 컴퓨터과학과 6인 캡스톤프로젝트입니다. 정보보안기사 필기를 **개념 학습 → 기출 풀이 → 오답·헷갈림 복습 → AI 보완 학습 → 도전장·게시판**으로 이어서 공부하는 웹 서비스를 만듭니다.

- 배포 주소: https://smu-security-study.vercel.app
- 제출 목표: 2027년 3월

## 문서

| 문서 | 내용 |
| --- | --- |
| [마일스톤](마일스톤.md) | 단계별 할 일과 진행 상태. 작업을 시작할 때 여기서 출발합니다 |
| [요구사항 분석서](docs/capstone/README.md) | 기능 28개·비기능·데이터·업무 규칙과 수용시험 20개 |
| [기능 색인](docs/capstone/requirements/INDEX.md) | 기능별 담당자와 현재 구현 상태 |
| [시험 색인](docs/capstone/tests/INDEX.md) | 수용시험 절차와 공통 준비 |
| [AI 작업 안내](docs/capstone/AI-작업안내.md) | Claude·Codex 등에 작업을 맡길 때 읽힐 규칙 |

수용 기준에는 A(시연 필수)·B(권장)·C(여유 시) 등급이 있습니다. 각 단계에서 A 기준부터 구현합니다.

## 현재 상태 (2026-11-16)

| 영역 | 상태 |
| --- | --- |
| 개념학습 | 7 PART·42 SECTION 개념요약, 검색·PART 필터, 관련 기출 양방향 연결 |
| 문제풀이 | 선별 기출 209문항(SECTION 01~20). 보기·확신도 선택, 제출, 해설, 다시 풀기 |
| 복습·분석 | 첫 풀이 정답률, 오답·헷갈림 복습 목록, 학습 완료 표시, 대시보드 |
| 회원 | 가입·로그인 화면 목업 |
| AI 학습 | 고정 샘플 문구 |
| 도전장·게시판 | 화면 체험용 |

지금은 모든 기록이 브라우저(localStorage)에만 저장되고 채점도 브라우저에서 합니다. 다음 단계는 실제 로그인, 서버 채점, 계정별 기록 저장입니다. 기능별 상세 판정은 [기능 색인](docs/capstone/requirements/INDEX.md)에 있습니다.

## 역할

| 담당 | 영역 |
| --- | --- |
| 정재호(팀장) | 공통 환경·배포, 개념 콘텐츠, 전체 연결 |
| 안재우 | 회원·접근 권한, 게시판 |
| 윤도경 | 문제 풀이 화면, 채점 |
| 곽다인 | 기록 저장, 복습·분석 |
| 정유민 | AI 추가 해설·보완문제 |
| 이재윤 | 도전장 |

## 개발

Node.js 24.x, npm, Git을 사용합니다. 설치 버전은 `package-lock.json`으로 통일합니다.

```sh
npm ci
npm run dev        # http://localhost:3000
```

| 명령 | 용도 |
| --- | --- |
| `npm run typecheck` | 타입 검사 |
| `npm run test:content` | 개념 자료 검사 |
| `npm run test:questions` | 문제 자료 검사(번호 중복, 보기 4개, 정답 범위, 개념 연결) |
| `npm run build` | 운영 빌드 |

Windows PowerShell에서 npm 실행 정책 오류가 나면 `npm.cmd`를 사용합니다. 자세한 환경 기록은 [공용 환경 기록](docs/capstone/working/setup.md)에 있습니다.

## 주요 파일

| 경로 | 내용 |
| --- | --- |
| `src/components/StudyApp.tsx` | 메뉴·대시보드·복습 등 전체 화면 |
| `src/components/QuestionPractice.tsx` | 문제 검색과 풀이 |
| `src/components/LessonContent.tsx` | 개념요약 본문 |
| `src/content/curriculum.ts` | PART·SECTION 목차 |
| `src/content/lessons/` | 단원별 개념요약 |
| `src/content/questions.ts` | 선별 기출 209문항 |
| `tests/` | 자료 검사 스크립트 |

## 규칙

- `main`에 직접 올리지 않고 개인 브랜치에서 작업한 뒤 PR로 합칩니다.
- 비밀번호, 인증 코드, API 키, `.env` 파일은 Git에 올리지 않습니다.
- 작업을 끝내면 해당 기능 파일의 수용 기준 판정과 마일스톤 작업 기록을 갱신합니다.
