import type { Lesson } from "./types";

export const section24: Lesson = {
  "sectionId": 24,
  "partTitle": "PART 5. 네트워크 보안",
  "title": "SECTION 24. 네트워크 관리",
  "relatedQuestionIds": [
    "Q322",
    "Q323",
    "Q324",
    "Q325"
  ],
  "blocks": [
    {
      "type": "heading",
      "text": "1. 네트워크 5대 관리 기능 — FCAPS",
      "level": 4
    },
    {
      "type": "table",
      "headers": [
        "관리 기능",
        "핵심 역할",
        "예시"
      ],
      "rows": [
        [
          "장애 관리(Fault)",
          "장애를 탐지하고 원인을 분석하여 복구",
          "장비 다운 탐지, 회선 장애 알림"
        ],
        [
          "구성 관리(Configuration)",
          "장비 구성과 설정 정보를 관리",
          "네트워크 구성도, 설정 변경·백업"
        ],
        [
          "과금 관리(Accounting)",
          "자원 사용량을 측정하고 비용 산정",
          "사용자별 트래픽 집계, 요금 부과"
        ],
        [
          "성능 관리(Performance)",
          "성능을 측정하고 병목을 분석",
          "처리량, 응답시간, 회선 사용률"
        ],
        [
          "보안 관리(Security)",
          "비인가 접근을 통제하고 자원을 보호",
          "인증, 접근 권한, 보안 정책 관리"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "※ Accounting은 ‘계정 관리’로 번역되기도 하지만, 여기서는 사용자 계정 생성보다 사용량 집계·과금이 핵심이다."
    },
    {
      "type": "heading",
      "text": "2. SNMP — 네트워크 장비를 감시·관리하는 프로토콜",
      "level": 4
    },
    {
      "type": "paragraph",
      "text": "SNMP(Simple Network Management Protocol)는 관리 시스템이 라우터·스위치·서버 등의 상태를 조회하거나 설정을 변경하는 데 사용하는 프로토콜이다."
    },
    {
      "type": "table",
      "headers": [
        "구성요소",
        "역할",
        "쉽게 이해하기"
      ],
      "rows": [
        [
          "Manager",
          "관리 정보를 요청하고 장비를 감시·제어",
          "중앙 관리실"
        ],
        [
          "Agent",
          "관리 대상 장비에서 요청을 처리하고 상태를 보고",
          "장비에 설치된 관리 담당 프로그램"
        ],
        [
          "MIB",
          "관리할 객체의 이름·자료형·의미 등을 정의한 정보 체계",
          "관리 항목 목록"
        ],
        [
          "SMI",
          "관리 객체를 정의하고 표현하는 규칙",
          "관리 항목을 작성하는 문법"
        ],
        [
          "OID",
          "각 관리 객체를 구분하는 계층형 식별자",
          "관리 항목의 고유 번호"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "예를 들어 ‘스위치 포트의 송신 바이트 수’가 관리 객체이고, Manager는 해당 OID를 지정하여 Agent에 값을 요청한다."
    },
    {
      "type": "paragraph",
      "text": "SMI는 정의 규칙, MIB는 그 규칙으로 정의한 관리 항목, SNMP는 해당 값을 주고받는 통신 수단이다."
    },
    {
      "type": "table",
      "headers": [
        "메시지",
        "방향",
        "기능"
      ],
      "rows": [
        [
          "Get",
          "Manager → Agent",
          "특정 항목의 값 조회"
        ],
        [
          "GetNext",
          "Manager → Agent",
          "다음 관리 항목 조회"
        ],
        [
          "GetBulk",
          "Manager → Agent",
          "여러 항목을 효율적으로 조회"
        ],
        [
          "Set",
          "Manager → Agent",
          "변경 가능한 항목의 값 설정"
        ],
        [
          "Response",
          "Agent → Manager",
          "요청에 대한 결과 응답"
        ],
        [
          "Trap",
          "Agent → Manager",
          "요청 없이 장애·이벤트를 통보"
        ]
      ]
    },
    {
      "type": "code",
      "text": "일반적인 상태 조회\nManager ── Get 요청 ──→ Agent\nManager ←── Response ── Agent\n\n장애·이벤트 발생\nManager ←── Trap ────── Agent\n          사전 요청 없음",
      "language": ""
    },
    {
      "type": "list",
      "ordered": false,
      "start": 1,
      "depth": 0,
      "items": [
        "UDP 161: Agent가 조회·설정 요청을 받는 포트.",
        "UDP 162: Manager가 Trap 등의 알림을 받는 포트.",
        "Trap은 별도의 응답 확인이 없다. 응답 확인이 필요한 알림에는 Inform을 사용한다."
      ]
    },
    {
      "type": "heading",
      "text": "3. SSH — 암호화된 원격 접속",
      "level": 4
    },
    {
      "type": "paragraph",
      "text": "SSH(Secure Shell)는 다른 컴퓨터에 안전하게 접속하여 명령을 실행하거나 파일을 전송하는 프로토콜이다. 기본 포트는 TCP 22이다."
    },
    {
      "type": "table",
      "headers": [
        "기능",
        "설명"
      ],
      "rows": [
        [
          "원격 접속",
          "원격 서버에 로그인하여 명령 실행"
        ],
        [
          "인증",
          "서버의 신원과 접속 사용자의 신원 확인"
        ],
        [
          "기밀성",
          "통신 내용을 암호화하여 도청 방지"
        ],
        [
          "무결성",
          "전송 중 데이터 변조 탐지"
        ],
        [
          "파일 전송",
          "SFTP·SCP를 통한 안전한 파일 전송"
        ],
        [
          "포트 포워딩",
          "다른 서비스의 트래픽을 SSH 연결로 전달"
        ],
        [
          "다중화",
          "하나의 SSH 연결에서 여러 논리적 채널 사용"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "Telnet·rlogin·rsh처럼 평문 통신에 의존하는 원격 접속 방식의 문제를 해결한다."
    },
    {
      "type": "heading",
      "text": "4. SSH의 3가지 구성 프로토콜",
      "level": 4
    },
    {
      "type": "table",
      "headers": [
        "구성",
        "핵심 역할",
        "기억할 내용"
      ],
      "rows": [
        [
          "SSH-TRANS",
          "안전한 통신 기반 구성",
          "서버 인증, 키 교환, 암호화, 무결성 보호"
        ],
        [
          "SSH-AUTH",
          "접속 사용자 인증",
          "비밀번호·공개키 등의 방식으로 사용자 확인"
        ],
        [
          "SSH-CONN",
          "여러 논리적 채널 관리",
          "원격 셸, 파일 전송, 포트 포워딩"
        ]
      ]
    },
    {
      "type": "code",
      "text": "TCP 연결\n   ↓\nSSH-TRANS: 서버 확인 + 키 교환 + 암호화 통신 준비\n   ↓\nSSH-AUTH: 접속 사용자 인증\n   ↓\nSSH-CONN: 필요한 채널 생성\n   ├─ 원격 명령 실행\n   ├─ 파일 전송\n   └─ 포트 포워딩",
      "language": ""
    },
    {
      "type": "paragraph",
      "text": "구분할 점:"
    },
    {
      "type": "list",
      "ordered": false,
      "start": 1,
      "depth": 0,
      "items": [
        "서버 인증: ‘내가 접속한 서버가 진짜인가?’ → SSH-TRANS",
        "사용자 인증: ‘접속한 사용자가 허가된 사람인가?’ → SSH-AUTH",
        "SSH의 ‘전송 계층 프로토콜’이라는 이름을 TCP와 같은 OSI 4계층으로 혼동하지 않는다. SSH는 TCP 위에서 동작한다."
      ]
    },
    {
      "type": "heading",
      "text": "5. 헷갈리는 개념 비교",
      "level": 4
    },
    {
      "type": "table",
      "headers": [
        "비교",
        "차이"
      ],
      "rows": [
        [
          "SNMP / SSH",
          "SNMP는 장비 상태 조회·관리, SSH는 안전한 원격 접속·명령 실행"
        ],
        [
          "SFTP / FTPS",
          "SFTP는 SSH 기반 파일 전송, FTPS는 FTP에 TLS를 적용한 방식"
        ],
        [
          "SFTP / SCP",
          "둘 다 SSH를 이용하며, SFTP는 파일 관리 기능을 제공하고 SCP는 파일 복사에 초점"
        ],
        [
          "포트 포워딩 / 다중화",
          "포트 포워딩은 다른 통신을 SSH로 전달, 다중화는 하나의 SSH 연결을 여러 채널로 나눠 사용"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "SSH 포트 포워딩의 암호화 범위는 SSH 클라이언트와 SSH 서버 사이이다. SSH 서버에서 최종 목적지까지의 구간은 해당 서비스가 별도로 암호화하지 않으면 보호되지 않는다."
    }
  ]
};
