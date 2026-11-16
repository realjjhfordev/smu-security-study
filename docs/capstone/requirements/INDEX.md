# 기능 색인

작업할 ID를 찾았으면 해당 파일만 읽는다. 모든 기능의 상세를 연속으로 읽을 필요는 없다.

현재 상태는 2026-11-16에 main 433584c의 코드를 읽고 판정했다(이 커밋은 11/12 이후 바뀌지 않았다). 상태 용어는 다음과 같다.

| 상태 | 뜻 |
| --- | --- |
| 화면 완료 | 서버가 필요 없는 기능이고 A 기준을 코드에서 충족한다. 시험 기록만 남기면 된다 |
| 화면 완료·서버 미연결 | 화면 동작은 기준대로지만 기록이 브라우저(localStorage)에만 저장된다 |
| 화면 완료·정답 노출 | 화면은 완성됐지만 정답·해설이 브라우저로 전달된다 |
| 부분 | 기능의 일부만 있다 |
| 목업 | 화면만 있고 실제 처리(전송·저장·호출)가 없다 |
| 미구현 | 화면도 처리도 없다 |

'A 기준 충족'은 각 기능 파일 수용 기준 표의 A 등급 중 '충족' 판정 수다.

| ID | 기능 | 담당 | 작업 단계 | 현재 상태 | A 기준 충족 |
| --- | --- | --- | --- | --- | --- |
| [FR-AUTH-01](auth/FR-AUTH-01.md) | 이메일 회원가입 | 안재우 | [M01](../milestones/M01.md) | 목업 | 0/2 |
| [FR-AUTH-02](auth/FR-AUTH-02.md) | 로그인 | 안재우 | [M01](../milestones/M01.md) | 목업 | 0/2 |
| [FR-AUTH-03](auth/FR-AUTH-03.md) | 로그아웃 | 안재우 | [M01](../milestones/M01.md) | 미구현 | 0/1 |
| [FR-AUTH-04](auth/FR-AUTH-04.md) | 접근 권한과 로그인 상태 확인 | 안재우 | [M01](../milestones/M01.md) | 미구현 | 0/2 |
| [FR-LRN-01](lrn/FR-LRN-01.md) | 단원과 개념요약 조회 | 정재호 | [M02](../milestones/M02.md) | 화면 완료 | 1/1 |
| [FR-LRN-02](lrn/FR-LRN-02.md) | 개념 검색과 범위 필터 | 정재호 | [M02](../milestones/M02.md) | 화면 완료 | 2/2 |
| [FR-LRN-03](lrn/FR-LRN-03.md) | 관련 기출문제와 개념 연결 | 정재호 | [M02](../milestones/M02.md) | 화면 완료 | 2/2 |
| [FR-LRN-04](lrn/FR-LRN-04.md) | 학습 완료 표시 | 정재호 | [M03](../milestones/M03.md) | 화면 완료·서버 미연결 | 0/1 |
| [FR-QST-01](qst/FR-QST-01.md) | 문제 검색과 범위 선택 | 윤도경 | [M02](../milestones/M02.md) | 화면 완료 | 2/2 |
| [FR-QST-02](qst/FR-QST-02.md) | 공통 문제 화면과 답안 선택 | 윤도경 | [M02](../milestones/M02.md) | 화면 완료·정답 노출 | 1/2 |
| [FR-QST-03](qst/FR-QST-03.md) | 서버 채점과 답안 저장 | 윤도경 및 곽다인 | [M02](../milestones/M02.md) | 부분(브라우저 채점) | 0/2 |
| [FR-QST-04](qst/FR-QST-04.md) | 정답 해설과 재풀이 | 윤도경 | [M02](../milestones/M02.md) | 화면 완료·서버 미연결 | 0/1 |
| [FR-REV-01](rev/FR-REV-01.md) | 개인 풀이 기록과 복습 목록 | 곽다인 | [M03](../milestones/M03.md) | 화면 완료·서버 미연결 | 1/2 |
| [FR-REV-02](rev/FR-REV-02.md) | 개념별 첫 풀이 정답률과 취약 판정 | 곽다인 | [M03](../milestones/M03.md) | 미구현 | 0/2 |
| [FR-REV-03](rev/FR-REV-03.md) | 학습 대시보드 | 곽다인 및 정재호 | [M03](../milestones/M03.md) | 화면 완료·서버 미연결 | 0/1 |
| [FR-AI-01](ai/FR-AI-01.md) | 선택 답안에 대한 AI 추가 해설 | 정유민 | [M04](../milestones/M04.md) | 목업 | 0/2 |
| [FR-AI-02](ai/FR-AI-02.md) | 같은 출제포인트의 보완문제 생성 | 정유민 및 윤도경 | [M04](../milestones/M04.md) | 미구현 | 0/2 |
| [FR-AI-03](ai/FR-AI-03.md) | AI 요청 상태와 한도 관리 | 정유민 | [M04](../milestones/M04.md) | 미구현 | 0/1 |
| [FR-CHL-01](chl/FR-CHL-01.md) | 도전장 생성 | 이재윤 | [M05](../milestones/M05.md) | 목업 | 0/1 |
| [FR-CHL-02](chl/FR-CHL-02.md) | 초대 링크와 참가 | 이재윤 | [M05](../milestones/M05.md) | 미구현 | 0/2 |
| [FR-CHL-03](chl/FR-CHL-03.md) | 도전장 답안 최종 제출 | 이재윤 및 윤도경 | [M05](../milestones/M05.md) | 미구현 | 0/2 |
| [FR-CHL-04](chl/FR-CHL-04.md) | 도전장 결과와 내 목록 | 이재윤 | [M05](../milestones/M05.md) | 미구현 | 0/2 |
| [FR-COM-01](com/FR-COM-01.md) | 게시글 목록과 상세 조회 | 안재우 | [M06](../milestones/M06.md) | 부분(브라우저 저장) | 0/1 |
| [FR-COM-02](com/FR-COM-02.md) | 게시글 작성 | 안재우 | [M06](../milestones/M06.md) | 부분(브라우저 저장) | 0/1 |
| [FR-COM-03](com/FR-COM-03.md) | 게시글 수정과 삭제 | 안재우 | [M06](../milestones/M06.md) | 미구현 | 0/1 |
| [FR-COM-04](com/FR-COM-04.md) | 댓글 작성과 조회 | 안재우 | [M06](../milestones/M06.md) | 부분(브라우저 저장) | 0/1 |
| [FR-SYS-01](sys/FR-SYS-01.md) | 화면 이동과 주소 상태 복원 | 정재호 및 전원 | [M07](../milestones/M07.md) | 화면 완료 | 1/2 |
| [FR-SYS-02](sys/FR-SYS-02.md) | 학습 자료 등록과 연결 검증 | 정재호 | [M02](../milestones/M02.md) | 부분 | 1/2 |
