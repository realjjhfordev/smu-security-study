import type { Lesson } from "./types";

export const section29: Lesson = {
  "sectionId": 29,
  "partTitle": "PART 5. 네트워크 보안",
  "title": "SECTION 29. VPN",
  "relatedQuestionIds": [
    "Q407",
    "Q408",
    "Q409",
    "Q410",
    "Q411",
    "Q412",
    "Q413",
    "Q414",
    "Q415",
    "Q416",
    "Q417"
  ],
  "blocks": [
    {
      "type": "heading",
      "text": "1. VPN의 개념과 기능",
      "level": 4
    },
    {
      "type": "paragraph",
      "text": "VPN(Virtual Private Network)은 인터넷 같은 공중망 위에 논리적인 사설 통신망을 구성하는 기술이다."
    },
    {
      "type": "paragraph",
      "text": "예를 들어 본사와 지사가 멀리 떨어져 있어도 VPN을 통해 내부망끼리 연결할 수 있다."
    },
    {
      "type": "code",
      "text": "본사 내부망 ─ VPN 장비 ═══ 인터넷상의 VPN 터널 ═══ VPN 장비 ─ 지사 내부망",
      "language": ""
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
          "데이터를 암호화하여 제3자가 내용을 읽지 못하게 함"
        ],
        [
          "무결성",
          "전송 중 데이터가 변경되었는지 검증"
        ],
        [
          "데이터 근원 인증",
          "데이터가 정당한 송신자로부터 왔는지 확인"
        ],
        [
          "접근 통제",
          "인증된 사용자에게 허용된 자원만 접근하도록 제한"
        ],
        [
          "재전송 공격 방지",
          "이미 수신한 패킷을 공격자가 다시 보내는 것을 탐지·거부"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "터널링은 원래 패킷을 다른 패킷 안에 넣어 운반하는 캡슐화 기술이다. 터널링 자체가 암호화를 의미하지는 않는다."
    },
    {
      "type": "heading",
      "text": "2. VPN 연결 형태",
      "level": 4
    },
    {
      "type": "table",
      "headers": [
        "형태",
        "연결 대상",
        "예시"
      ],
      "rows": [
        [
          "Site-to-Site",
          "네트워크 ↔ 네트워크",
          "본사와 지사 연결"
        ],
        [
          "Remote Access",
          "사용자 단말 ↔ 사내망",
          "재택근무자가 회사에 접속"
        ],
        [
          "Host-to-Host",
          "호스트 ↔ 호스트",
          "두 서버 사이의 통신 보호"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "Site-to-Site에서는 보통 양쪽 VPN 게이트웨이가 암호화·복호화를 처리한다. 따라서 내부 단말마다 VPN 기능을 구현할 필요가 없다."
    },
    {
      "type": "paragraph",
      "text": "단, 게이트웨이 사이만 보호한다면 단말에서 게이트웨이까지의 구간은 별도의 보호가 필요하다."
    },
    {
      "type": "heading",
      "text": "3. VPN 관련 기술 비교",
      "level": 4
    },
    {
      "type": "table",
      "headers": [
        "기술",
        "핵심 특징",
        "구분할 점"
      ],
      "rows": [
        [
          "PPTP",
          "PPP를 터널링하는 전통적인 기술",
          "보안상 취약한 구형 방식"
        ],
        [
          "L2TP",
          "PPP 프레임을 터널링",
          "자체 데이터 암호화 기능이 없어 IPsec과 결합"
        ],
        [
          "IPsec",
          "네트워크 계층에서 IP 패킷 보호",
          "응용프로그램과 독립적으로 적용 가능"
        ],
        [
          "SSL VPN",
          "TLS를 이용하여 원격접속 통신 보호",
          "웹 서비스 접근 또는 클라이언트 기반 터널 제공"
        ],
        [
          "MPLS VPN",
          "통신사업자 망에서 레이블과 논리적 분리로 VPN 구성",
          "자체적으로 데이터 암호화를 보장하지 않음"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "교재의 ‘SSL VPN’이라는 명칭은 일반적으로 TLS 기반 VPN까지 포함해 사용한다."
    },
    {
      "type": "paragraph",
      "text": "IPsec VPN과 SSL VPN의 차이:"
    },
    {
      "type": "table",
      "headers": [
        "구분",
        "IPsec VPN",
        "SSL VPN"
      ],
      "rows": [
        [
          "보호 기준",
          "IP 패킷",
          "TLS 연결을 통한 통신"
        ],
        [
          "대표 용도",
          "본사·지사 연결, 원격접속",
          "사용자 원격접속"
        ],
        [
          "접근 범위",
          "네트워크 단위 접근에 적합",
          "특정 애플리케이션 단위 접근에 적합"
        ],
        [
          "단말 지원",
          "OS 내장 기능 또는 VPN 클라이언트 사용",
          "웹 방식은 브라우저, 전체 터널은 클라이언트가 필요할 수 있음"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "‘IPsec은 무조건 별도 프로그램 필요’, ‘SSL VPN은 무조건 브라우저만으로 가능’으로 외우면 안 된다."
    },
    {
      "type": "heading",
      "text": "4. IPsec의 구성: AH·ESP·IKE·SA",
      "level": 4
    },
    {
      "type": "paragraph",
      "text": "IPsec은 IP 계층에서 통신을 보호하는 보안 프로토콜 모음이다."
    },
    {
      "type": "table",
      "headers": [
        "구성요소",
        "역할"
      ],
      "rows": [
        [
          "AH",
          "데이터 무결성·근원 인증, 재전송 공격 방지 지원"
        ],
        [
          "ESP",
          "데이터 암호화, 무결성·근원 인증, 재전송 공격 방지 지원"
        ],
        [
          "IKE",
          "통신 상대 인증, 키 교환, 보안 설정 협상"
        ],
        [
          "SA",
          "통신에 적용할 보안 설정을 정리한 단방향 보안 연결"
        ]
      ]
    },
    {
      "type": "code",
      "text": "IKE로 상대 인증·키 교환·보안 설정 협상\n                    ↓\n                   SA 생성\n                    ↓\n          AH 또는 ESP로 실제 패킷 보호",
      "language": ""
    },
    {
      "type": "paragraph",
      "text": "AH와 ESP는 함께 사용할 수도 있지만, 반드시 둘을 동시에 사용해야 하는 것은 아니다."
    },
    {
      "type": "heading",
      "text": "5. AH와 ESP 비교",
      "level": 4
    },
    {
      "type": "table",
      "headers": [
        "구분",
        "AH",
        "ESP"
      ],
      "rows": [
        [
          "암호화",
          "제공하지 않음",
          "제공 가능"
        ],
        [
          "무결성·근원 인증",
          "제공",
          "설정·알고리즘에 따라 제공"
        ],
        [
          "재전송 공격 방지",
          "순서번호로 지원",
          "순서번호로 지원"
        ],
        [
          "IP 헤더 보호",
          "변경되지 않는 필드 등을 인증 범위에 포함",
          "바깥쪽 IP 헤더는 보호하지 않음"
        ],
        [
          "핵심",
          "내용이 변조되었는지 확인",
          "내용을 숨기고 변조 여부도 확인 가능"
        ]
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "start": 1,
      "depth": 0,
      "items": [
        "AH는 암호화하지 않으므로 데이터 내용이 보인다.",
        "ESP는 암호화와 인증을 함께 제공하는 구성이 가능하다.",
        "AH는 IP 헤더도 인증하므로 주소를 변경하는 NAT와 충돌한다.",
        "ESP는 NAT-T를 이용해 NAT 환경을 통과할 수 있다."
      ]
    },
    {
      "type": "paragraph",
      "text": "재전송 공격 방지는 순서번호와 수신 윈도우를 이용해 이미 받은 패킷인지 확인하는 방식이다."
    },
    {
      "type": "heading",
      "text": "6. IPsec 전송 모드와 터널 모드",
      "level": 4
    },
    {
      "type": "table",
      "headers": [
        "구분",
        "전송 모드",
        "터널 모드"
      ],
      "rows": [
        [
          "캡슐화 대상",
          "원래 IP 패킷의 페이로드",
          "원래 IP 패킷 전체"
        ],
        [
          "원래 IP 헤더",
          "바깥쪽에 그대로 사용",
          "새 패킷 내부에 포함"
        ],
        [
          "새로운 IP 헤더",
          "추가하지 않음",
          "추가함"
        ],
        [
          "대표 용도",
          "호스트 ↔ 호스트",
          "게이트웨이 ↔ 게이트웨이, 원격접속"
        ],
        [
          "오버헤드",
          "상대적으로 작음",
          "새 IP 헤더 때문에 더 큼"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "ESP를 기준으로 보면 다음과 같다."
    },
    {
      "type": "code",
      "text": "원래 패킷\n[원래 IP 헤더][TCP/UDP 헤더 + 데이터]\n\nESP 전송 모드\n[원래 IP 헤더][ESP 헤더][암호화된 TCP/UDP 헤더 + 데이터 + 트레일러][인증값]\n\nESP 터널 모드\n[새 IP 헤더][ESP 헤더][암호화된 원래 IP 패킷 + 트레일러][인증값]",
      "language": ""
    },
    {
      "type": "paragraph",
      "text": "터널 모드에서는 주소의 역할도 구분해야 한다."
    },
    {
      "type": "list",
      "ordered": false,
      "start": 1,
      "depth": 0,
      "items": [
        "원래 IP 헤더: 실제 송신 단말과 수신 단말의 주소",
        "새 IP 헤더: VPN 터널 양 끝의 주소"
      ]
    },
    {
      "type": "code",
      "text": "본사 PC → 본사 VPN 장비 → 인터넷 → 지사 VPN 장비 → 지사 PC\n\n원래 IP: 본사 PC → 지사 PC\n새 IP:   본사 VPN 장비 → 지사 VPN 장비",
      "language": ""
    },
    {
      "type": "paragraph",
      "text": "터널 모드라도 AH만 사용하면 원래 패킷을 암호화하지 않는다. 원래 IP 주소까지 숨기는 것은 ESP 암호화를 적용했을 때다."
    },
    {
      "type": "heading",
      "text": "7. SA와 IKE",
      "level": 4
    },
    {
      "type": "paragraph",
      "text": "SA(Security Association)는 ‘어떤 방식으로 패킷을 보호할지’ 정한 보안 설정의 묶음이다."
    },
    {
      "type": "paragraph",
      "text": "주요 내용은 암호·인증 알고리즘, 키, 전송/터널 모드, 유효기간, 순서번호 등이다."
    },
    {
      "type": "list",
      "ordered": false,
      "start": 1,
      "depth": 0,
      "items": [
        "IPsec SA는 단방향이다. IKE SA는 양방향 협상 통로이므로 구분한다.",
        "양방향 통신에는 보통 송신용·수신용 SA가 각각 필요하다.",
        "AH와 ESP를 모두 적용하면 각각의 SA가 필요하다.",
        "SA 정보는 SAD(Security Association Database)에 저장한다."
      ]
    },
    {
      "type": "table",
      "headers": [
        "용어",
        "의미"
      ],
      "rows": [
        [
          "SPI",
          "패킷에 적용된 SA를 찾기 위한 식별값"
        ],
        [
          "SAD",
          "실제 SA의 키·알고리즘 등 보안 정보를 저장"
        ],
        [
          "SPD",
          "어떤 트래픽을 보호·통과·폐기할지 정하는 정책 저장"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "SPI는 암호키 자체가 아니다."
    },
    {
      "type": "paragraph",
      "text": "IKE(Internet Key Exchange)는 상대방을 인증하고 키와 보안 설정을 협상하여 SA를 생성·관리한다."
    },
    {
      "type": "paragraph",
      "text": "교재의 Phase 1·2는 IKEv1 기준이다."
    },
    {
      "type": "table",
      "headers": [
        "단계",
        "핵심"
      ],
      "rows": [
        [
          "Phase 1",
          "안전한 협상 통로인 IKE SA 생성"
        ],
        [
          "Phase 2",
          "실제 데이터를 보호할 IPsec SA 협상"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "IKEv2는 이와 다른 교환 절차를 사용하므로, 모든 IKE가 Phase 1·2로 동작한다고 일반화하지 않는다."
    }
  ]
};
