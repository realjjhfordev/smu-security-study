// 팀이 직접 작성한 첫 배포용 예시 요약입니다.
// 개념학습 담당자는 이 파일에서 단원명, 설명, 예시를 수정합니다.
export const sampleUnit = {
  title: "보안의 3요소",
  category: "정보보안 일반",
  introduction:
    "정보를 안전하게 지킨다는 것은 무엇일까요? 기밀성, 무결성, 가용성이라는 세 가지 기준으로 살펴봅니다.",
  concepts: [
    {
      letter: "C",
      name: "기밀성",
      english: "Confidentiality",
      description: "허가받은 사람만 정보에 접근할 수 있도록 보호하는 성질입니다.",
      example: "성적표를 본인과 권한이 있는 교직원만 열람할 수 있도록 합니다.",
      keyword: "누가 볼 수 있는가",
    },
    {
      letter: "I",
      name: "무결성",
      english: "Integrity",
      description: "정보가 허가 없이 변경되거나 훼손되지 않도록 보호하는 성질입니다.",
      example: "저장된 성적이 권한 없는 사용자에 의해 바뀌지 않도록 보호합니다.",
      keyword: "정보가 올바르게 유지되는가",
    },
    {
      letter: "A",
      name: "가용성",
      english: "Availability",
      description: "허가받은 사용자가 필요할 때 정보와 서비스를 이용할 수 있는 성질입니다.",
      example: "수강 신청 시간에 학생들이 시스템에 접속할 수 있도록 장애에 대비합니다.",
      keyword: "필요할 때 이용할 수 있는가",
    },
  ],
};
