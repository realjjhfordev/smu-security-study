# 공용 개발 환경 기록

M00에서 실제 설정을 확인한 사람이 채운다. 값이 없는 항목은 미확인이다. 비밀값은 기록하지 않는다.

| 항목 | 현재 확인값 | 확인자·일자 |
| --- | --- | --- |
| 저장소 | https://github.com/realjjhfordev/smu-security-study | 기존 프로젝트 정보 |
| 배포 주소 | https://smu-security-study.vercel.app/ | 기존 주소, 최신 동작 확인 필요 |
| 팀원 로컬 폴더 예시 | C:\smu-security-study | Windows 예시 |
| 기준 커밋·브랜치 | main 433584c | 2026-11-16 |
| Node·패키지 관리 도구 버전 | Node.js 24.x(package.json engines), npm, package-lock.json 사용 | 2026-11-16 |
| 의존성 설치 명령 | `npm ci` (Windows PowerShell 실행 정책 오류 시 `npm.cmd ci`) | 2026-11-16 |
| 개발 실행 명령 | `npm run dev` → http://localhost:3000 | 2026-11-16 |
| 타입·빌드·자료 검사 명령 | `npm run typecheck`, `npm run test:content`, `npm run test:questions`, `npm run build` — 모두 통과 | 2026-11-16 |
| DB·인증 프로젝트와 관리 담당 | 확인 필요 | — |
| AI 모델·무료 한도·설정 담당 | 확인 필요 | — |

## 환경 변수 목록

| 변수 이름 | 사용 위치 | 필수 기능 | 설정하는 곳 | 누락 시 동작 |
| --- | --- | --- | --- | --- |
| 실제 이름 확인 후 기록 | 서버/공개 구분 | — | 로컬/배포 설정 | — |

## 재현 기록

설치 → 실행 → 연결 → 빌드를 확인한 환경과 결과를 적는다. 비밀번호·API 키는 적지 않는다.
