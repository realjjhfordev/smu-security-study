import type { Lesson } from "./types";

export const section08: Lesson = {
  "sectionId": 8,
  "partTitle": "PART 3. 접근통제",
  "title": "SECTION 08. 접근통제 개요",
  "relatedQuestionIds": [
    "Q114",
    "Q115",
    "Q116"
  ],
  "blocks": [
    {
      "type": "heading",
      "text": "접근통제(Access Control)",
      "level": 4
    },
    {
      "type": "paragraph",
      "text": "**누가(주체) 어떤 자원에(객체) 어떤 행동을 할 수 있는지 제한하는 것**이다. 예를 들어 학생은 자기 성적을 **조회**할 수 있고, 담당 교수는 성적을 **수정**할 수 있다."
    },
    {
      "type": "table",
      "headers": [
        "구성 요소",
        "의미",
        "예시"
      ],
      "rows": [
        [
          "**주체(Subject)**",
          "접근을 요청하는 사람·프로그램·프로세스",
          "학생"
        ],
        [
          "**객체(Object)**",
          "접근 대상이 되는 자원",
          "성적 기록"
        ],
        [
          "**접근(Access)**",
          "주체가 객체에 수행하는 행동",
          "읽기·쓰기·실행"
        ]
      ]
    },
    {
      "type": "heading",
      "text": "접근통제 3단계",
      "level": 4
    },
    {
      "type": "table",
      "headers": [
        "단계",
        "확인할 질문",
        "성적 조회 예시"
      ],
      "rows": [
        [
          "**① 식별**",
          "누구라고 밝히는가?",
          "학생이 **학번(ID)** 입력"
        ],
        [
          "**② 인증**",
          "정말 그 학생인가?",
          "**비밀번호**로 신원 확인"
        ],
        [
          "**③ 인가**",
          "무엇을 할 수 있는가?",
          "**본인 성적 조회는 허용**, 성적 수정은 거부"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "**AAA**는 **인증(Authentication) · 인가(Authorization) · 사용 기록·정산(Accounting)**을 묶은 말이다. 위 예시에서 “누가 언제 성적을 조회했는지” 남기는 일이 Accounting에 해당한다."
    }
  ]
};
