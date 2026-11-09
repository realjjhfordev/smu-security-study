import type { Lesson } from "./types";

// 사용자가 제공한 Notion 내용을 바탕으로 하며, 확인된 표 배치 오류를 수정했습니다.
// Q001~Q006은 기존 샘플 문제의 번호가 아니라 별도로 연결할 기출 문항 ID입니다.
export const section01: Lesson = {
  sectionId: 1,
  partTitle: "PART 1. 정보보호 개요",
  title: "SECTION 01. 정보보호관리의 개념",
  relatedQuestionIds: ["Q001", "Q002", "Q003", "Q004", "Q005", "Q006"],
  blocks: [
    { type: "paragraph", text: "정보보호란?", strong: true },
    { type: "paragraph", text: "→ 자산(Assets)을 공격자의 위협(Threat)으로부터 방어하는 것" },
    {
      type: "table",
      headers: ["이름", "의미"],
      rows: [
        ["위협(Threat)", "자산에 손실을 초래할 수 있는 사건의 잠재적 원인, 또는 행위자"],
        ["위험(Risk)", "원치않는 사건이 발생하여, 자산의 손실이나 자산에 악영향을 미칠 가능성"],
        ["취약점(Vulnerability)", "자산의 잠재적 속성, 위협의 대상"],
        ["자산(Assets)", "공격 대상이 되는 것 (ex: SW, HW, Data 등…)"],
      ],
    },
    { type: "heading", text: "정보보호의 목표" },
    { type: "paragraph", text: "기밀성 무결성 가용성은 정보보호의 3대 목표이다." },
    {
      type: "table",
      headers: ["목표", "의미", "예시"],
      rows: [
        ["기밀성(Confidentiality)", "인가된 주체만 정보를 볼 수 있게 하는 것", "접근통제, 암호화"],
        ["무결성(Integrity)", "승인되지 않은 생성·변경·삭제를 막는 것", "해시함수, 바이러스 검사"],
        ["가용성(Availability)", "정당한 사용자가 필요한 때 자원에 접근할 수 있게 하는 것", "이중화, 백업, 용량 관리"],
        ["인증(Authentication)", "접근 주체의 신원, 혹은 객체의 출처(송신자)를 확인하는 것", "MAC, 공개키 인증서"],
        ["인가(Authorization)", "인증된 접근 주체에게 객체로의 접근 권한을 부여하는 것", ""],
        ["책임추적성(Accountability)", "보안을 목적으로 사용자의 이용을 추적, 기록하는 것", "로깅"],
        ["부인방지(Non-Repudiation)", "행위의 부인을 어렵게 하는 것", "전자서명"],
      ],
    },
    { type: "heading", text: "소극적 공격과 적극적 공격" },
    {
      type: "table",
      headers: ["구분", "차이", "예", "중점 대응"],
      rows: [
        ["소극적(수동)", "시스템 자원에는 영향을 주지 않고 통신 내용을 관찰·수집", "도청, 스니핑, 트래픽 분석\n= 기밀성 공격", "암호화"],
        ["적극적(능동)", "메시지나 시스템 자원에 직접적으로 영향을 줌", "위조·변조, 재전송, 가장, 서비스 거부\n= 무결성, 인증성, 가용성 공격", "인증, 무결성 검증, 재전송 방지, 가용성 대책"],
      ],
    },
  ],
};
