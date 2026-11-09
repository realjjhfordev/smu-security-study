import type { Lesson } from "./types";

export const section33: Lesson = {
  "sectionId": 33,
  "partTitle": "PART 6. 애플리케이션 보안",
  "title": "SECTION 33. 웹 보안(Web Security)",
  "relatedQuestionIds": [
    "Q453",
    "Q454",
    "Q455",
    "Q456",
    "Q457",
    "Q458",
    "Q459",
    "Q460",
    "Q461",
    "Q462",
    "Q463",
    "Q464",
    "Q465",
    "Q466",
    "Q467",
    "Q468",
    "Q469",
    "Q470",
    "Q471",
    "Q472",
    "Q473",
    "Q474",
    "Q475",
    "Q476",
    "Q477",
    "Q478",
    "Q479",
    "Q480",
    "Q481",
    "Q482",
    "Q483",
    "Q484",
    "Q485",
    "Q486",
    "Q487"
  ],
  "blocks": [
    {
      "type": "heading",
      "text": "웹 보안 핵심 정리",
      "level": 3
    },
    {
      "type": "heading",
      "text": "1. SSL/TLS: 통신 내용을 보호하는 기술",
      "level": 3
    },
    {
      "type": "paragraph",
      "text": "HTTP만 사용하면 통신 내용을 중간에서 읽거나 바꿀 수 있습니다. TLS는 클라이언트와 서버 사이에 안전한 통신 경로를 만들어 이를 막습니다. HTTPS는 HTTP를 TLS로 보호하는 방식입니다."
    },
    {
      "type": "code",
      "text": "HTTP 메시지\n    ↓\nTLS가 암호화·무결성 보호\n    ↓\nTCP를 통해 전송",
      "language": ""
    },
    {
      "type": "paragraph",
      "text": "TLS가 제공하는 핵심은 세 가지입니다."
    },
    {
      "type": "table",
      "headers": [
        "기능",
        "의미"
      ],
      "rows": [
        [
          "기밀성",
          "중간에서 데이터를 읽지 못하도록 암호화"
        ],
        [
          "무결성",
          "전송 중 데이터가 바뀌었는지 확인"
        ],
        [
          "인증",
          "인증서 등을 통해 접속한 서버가 누구인지 확인"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "TLS는 크게 두 과정으로 이해하면 됩니다."
    },
    {
      "type": "list",
      "ordered": true,
      "start": 1,
      "depth": 0,
      "items": [
        "핸드셰이크: 서로 사용할 암호 방식에 합의하고, 서버 인증서를 검증하며, 통신에 쓸 키를 만듭니다.",
        "레코드 전송: 만들어진 키로 실제 데이터를 보호하여 주고받습니다."
      ]
    },
    {
      "type": "paragraph",
      "text": "다음 Handshake, Alert, Record 등의 관계도 이 틀로 보면 됩니다. Handshake는 보안 연결을 준비하고, Record는 실제 메시지를 실어 나르며, Alert는 오류나 종료 같은 상태를 알립니다. 자료의 ChangeCipherSpec은 주로 과거 TLS 버전의 절차를 설명할 때 등장합니다."
    },
    {
      "type": "paragraph",
      "text": "주의할 점은 TLS가 적용되어도 웹 서버 자체의 SQL Injection이나 CSRF 취약점까지 해결되지는 않는다는 것입니다."
    },
    {
      "type": "heading",
      "text": "2. SQL Injection: 입력값이 SQL 명령으로 실행되는 공격",
      "level": 3
    },
    {
      "type": "paragraph",
      "text": "애플리케이션이 사용자 입력을 SQL 문장에 그대로 이어 붙이면, 공격자가 입력한 글자가 데이터가 아닌 SQL 명령의 일부로 해석될 수 있습니다."
    },
    {
      "type": "code",
      "text": "사용자 입력\n    ↓\n서버가 SQL 문장에 그대로 결합\n    ↓\nDB가 공격자가 의도한 SQL까지 실행",
      "language": ""
    },
    {
      "type": "paragraph",
      "text": "그 결과 인증 우회, 데이터 조회·변경·삭제 등이 발생할 수 있습니다."
    },
    {
      "type": "paragraph",
      "text": "다음 유형은 다음처럼 구분하면 됩니다."
    },
    {
      "type": "table",
      "headers": [
        "유형",
        "핵심"
      ],
      "rows": [
        [
          "일반적인 SQL Injection",
          "입력값으로 원래 SQL의 조건이나 동작을 바꿈"
        ],
        [
          "UNION 방식",
          "다른 조회 결과를 기존 조회 결과에 붙여 데이터를 빼냄"
        ],
        [
          "오류 기반",
          "DB 오류 메시지에 드러나는 정보를 이용"
        ],
        [
          "Blind SQL Injection",
          "화면에 결과가 직접 나오지 않아도 참·거짓 반응이나 응답 시간 차이로 정보를 추론"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "핵심 방어책은 준비된 SQL 문장과 매개변수 바인딩입니다. 이렇게 하면 입력값이 SQL 명령과 분리되어 데이터로 처리됩니다. 입력 검증, DB 계정의 최소 권한, 상세 오류 메시지 숨기기는 추가 방어책입니다."
    },
    {
      "type": "heading",
      "text": "3. SSRF: 서버를 대신 요청하게 만드는 공격",
      "level": 3
    },
    {
      "type": "paragraph",
      "text": "SSRF(Server-Side Request Forgery)는 공격자가 웹 서버에 URL을 입력시키고, 웹 서버가 그 주소로 요청을 보내게 하는 공격입니다."
    },
    {
      "type": "code",
      "text": "공격자 → 웹 서버에 URL 전달\n              ↓\n         웹 서버가 해당 URL에 접속\n              ↓\n       내부 서버·내부 자원에 접근 가능",
      "language": ""
    },
    {
      "type": "paragraph",
      "text": "예를 들어 “URL을 입력하면 이미지를 가져오는 기능”이 있다고 해 봅시다. 서버가 주소를 제한 없이 받아들이면, 공격자는 외부에서 직접 접근할 수 없는 내부 주소를 서버가 대신 방문하게 만들 수 있습니다. 그래서 SSRF의 핵심은 공격자가 서버의 네트워크 접근 권한을 빌려 쓰는 것입니다."
    },
    {
      "type": "paragraph",
      "text": "주요 대응책은 다음과 같습니다."
    },
    {
      "type": "list",
      "ordered": false,
      "start": 1,
      "depth": 0,
      "items": [
        "서버가 접속할 수 있는 목적지를 허용 목록으로 제한",
        "사설 IP, 루프백 주소, 내부 관리 주소 등으로의 요청 차단",
        "주소가 다른 곳으로 바뀌는 리다이렉트와 DNS 재해석까지 검사",
        "서버 자체의 내부망 접근 권한을 최소화"
      ]
    },
    {
      "type": "heading",
      "text": "4. CSRF와 XSS: 헷갈리기 쉬운 웹 공격",
      "level": 3
    },
    {
      "type": "paragraph",
      "text": "자료의 웹 공격을 구분할 때는 “누구의 무엇을 악용하는가”를 보면 편합니다."
    },
    {
      "type": "table",
      "headers": [
        "공격",
        "악용하는 것",
        "핵심 결과"
      ],
      "rows": [
        [
          "CSRF",
          "로그인된 사용자의 브라우저와 인증 상태",
          "사용자가 의도하지 않은 요청을 서버에 보냄"
        ],
        [
          "XSS",
          "웹페이지에 삽입된 악성 스크립트",
          "다른 사용자의 브라우저에서 스크립트가 실행됨"
        ],
        [
          "SSRF",
          "웹 서버의 요청 기능과 네트워크 접근 권한",
          "서버가 공격자가 지정한 주소로 요청함"
        ],
        [
          "SQL Injection",
          "SQL 문장에 섞인 사용자 입력",
          "DB가 의도하지 않은 SQL을 실행함"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "CSRF는 “로그인된 사용자를 속여 요청시키는 것”, SSRF는 “서버를 속여 요청시키는 것”으로 기억하면 구분하기 쉽습니다."
    },
    {
      "type": "paragraph",
      "text": "CSRF 방어에는 CSRF 토큰, SameSite 쿠키, 중요한 작업의 재인증 등이 쓰입니다. XSS 방어에는 출력 시 문맥에 맞는 인코딩과 안전한 DOM 처리 등이 중요합니다."
    },
    {
      "type": "heading",
      "text": "5. WAF: 웹 요청을 검사하는 방어 장치",
      "level": 3
    },
    {
      "type": "paragraph",
      "text": "WAF(Web Application Firewall)는 웹 애플리케이션 앞에서 HTTP 요청과 응답을 살펴보고, 설정된 규칙에 따라 의심스러운 요청을 차단하는 장치입니다."
    },
    {
      "type": "code",
      "text": "사용자 → WAF → 웹 서버 → DB\n          검사",
      "language": ""
    },
    {
      "type": "paragraph",
      "text": "일반 방화벽이 주로 IP, 포트, 프로토콜 등을 기준으로 통신을 제어한다면, WAF는 URL, 요청 매개변수, HTTP 본문처럼 웹 애플리케이션의 내용을 살펴볼 수 있습니다. SQL Injection이나 XSS 패턴을 탐지하는 데 사용됩니다."
    },
    {
      "type": "paragraph",
      "text": "다만 WAF 규칙만으로 애플리케이션의 취약점이 없어지는 것은 아닙니다. SQL Injection은 서버 코드에서 매개변수 바인딩으로 고치고, WAF는 그 위에 추가하는 방어 수단으로 이해하면 됩니다."
    },
    {
      "type": "heading",
      "text": "한 번에 연결하기",
      "level": 3
    },
    {
      "type": "code",
      "text": "사용자 ── TLS/HTTPS ── WAF ── 웹 애플리케이션 ── DB\n          통신 보호       요청 검사       입력 처리         데이터 저장\n                                        │\n                                        └─ 외부·내부 URL 요청 기능\n                                             → SSRF 주의",
      "language": ""
    },
    {
      "type": "paragraph",
      "text": "시험용으로는 이렇게 잡으면 됩니다: TLS는 전송 구간 보호, WAF는 웹 요청 검사, SQL Injection은 DB 명령 오염, CSRF는 사용자 브라우저 악용, SSRF는 서버의 요청 기능 악용입니다."
    }
  ]
};
