import type { Lesson } from "./types";

export const section20: Lesson = {
  "sectionId": 20,
  "partTitle": "PART 5. 네트워크 보안",
  "title": "SECTION 20. TCP/IP",
  "relatedQuestionIds": [
    "Q277",
    "Q278",
    "Q279",
    "Q280",
    "Q281",
    "Q282",
    "Q283",
    "Q284",
    "Q285",
    "Q286",
    "Q287",
    "Q288",
    "Q289",
    "Q290",
    "Q291"
  ],
  "blocks": [
    {
      "type": "heading",
      "text": "1. TCP/IP 계층별 역할",
      "level": 4
    },
    {
      "type": "table",
      "headers": [
        "계층",
        "핵심 역할",
        "대표 프로토콜"
      ],
      "rows": [
        [
          "응용",
          "웹·메일·파일 전송 등 서비스 제공",
          "HTTP, DNS, SMTP, FTP"
        ],
        [
          "전송",
          "호스트 내부의 프로세스 간 통신, 포트로 구분",
          "TCP, UDP"
        ],
        [
          "인터넷",
          "IP 주소를 이용한 패킷 전달과 라우팅",
          "IP, ICMP, IGMP"
        ],
        [
          "네트워크 접근",
          "같은 링크에서 프레임 송수신",
          "Ethernet, ARP"
        ]
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "start": 1,
      "depth": 0,
      "items": [
        "IP: 비연결형·최선형 전달. 도착 여부, 순서, 재전송을 보장하지 않음.",
        "TCP: IP 위에서 순서 제어·재전송 등을 수행하여 신뢰성을 제공.",
        "UDP: 연결 설정 없이 데이터그램을 전송."
      ]
    },
    {
      "type": "heading",
      "text": "2. 패킷 전송 방식",
      "level": 4
    },
    {
      "type": "table",
      "headers": [
        "방식",
        "전달 대상",
        "기억할 내용"
      ],
      "rows": [
        [
          "유니캐스트",
          "특정 수신자 한 명",
          "1:1"
        ],
        [
          "멀티캐스트",
          "특정 그룹의 수신자들",
          "1:그룹"
        ],
        [
          "브로드캐스트",
          "같은 브로드캐스트 영역의 모든 장치",
          "1:전체"
        ],
        [
          "애니캐스트",
          "같은 주소를 사용하는 여러 장치 중 하나",
          "1:가장 적절한 한 곳"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "애니캐스트의 ‘가까운 장치’는 물리적 거리가 아니라 라우팅 기준으로 선택된 장치를 의미한다."
    },
    {
      "type": "list",
      "ordered": false,
      "start": 1,
      "depth": 0,
      "items": [
        "IPv6에는 브로드캐스트가 없으며, 필요한 기능을 멀티캐스트로 처리한다.",
        "애니캐스트는 IPv4에서도 구현할 수 있다."
      ]
    },
    {
      "type": "heading",
      "text": "3. IPv4 주소와 클래스",
      "level": 4
    },
    {
      "type": "paragraph",
      "text": "IPv4 주소는 32비트이며, 네트워크 부분과 호스트 부분으로 나뉜다."
    },
    {
      "type": "code",
      "text": "192.168.1.10/24\n\n/24 = 앞의 24비트가 네트워크 부분\n나머지 8비트 = 호스트 부분",
      "language": ""
    },
    {
      "type": "table",
      "headers": [
        "클래스",
        "첫 번째 옥텟",
        "기본 프리픽스",
        "용도"
      ],
      "rows": [
        [
          "A",
          "일반 사용 범위 1~126",
          "/8",
          "대규모 네트워크"
        ],
        [
          "B",
          "128~191",
          "/16",
          "중규모 네트워크"
        ],
        [
          "C",
          "192~223",
          "/24",
          "소규모 네트워크"
        ],
        [
          "D",
          "224~239",
          "해당 없음",
          "멀티캐스트"
        ],
        [
          "E",
          "240~255",
          "해당 없음",
          "예약 영역"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "클래스는 과거의 주소 분류 방식이다. CIDR에서는 클래스 대신 `/프리픽스 길이`로 네트워크 범위를 판단한다."
    },
    {
      "type": "paragraph",
      "text": "사설 주소는 다음 세 범위를 구분해서 기억한다."
    },
    {
      "type": "table",
      "headers": [
        "사설 주소",
        "범위"
      ],
      "rows": [
        [
          "10.0.0.0/8",
          "10.0.0.0~10.255.255.255"
        ],
        [
          "172.16.0.0/12",
          "172.16.0.0~172.31.255.255"
        ],
        [
          "192.168.0.0/16",
          "192.168.0.0~192.168.255.255"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "사설 주소는 내부망에서 사용하며, 공용 인터넷에서 직접 라우팅되지 않는다."
    },
    {
      "type": "table",
      "headers": [
        "특수 주소",
        "의미"
      ],
      "rows": [
        [
          "0.0.0.0",
          "아직 주소가 정해지지 않은 상태 등에서 사용"
        ],
        [
          "0.0.0.0/0",
          "모든 IPv4 목적지에 대응하는 기본 경로"
        ],
        [
          "127.0.0.0/8",
          "자기 자신으로 돌아오는 루프백 영역"
        ],
        [
          "127.0.0.1",
          "대표적인 루프백 주소"
        ],
        [
          "255.255.255.255",
          "현재 링크에 대한 제한적 브로드캐스트"
        ]
      ]
    },
    {
      "type": "heading",
      "text": "4. 서브네팅·슈퍼네팅·CIDR",
      "level": 4
    },
    {
      "type": "table",
      "headers": [
        "구분",
        "의미",
        "프리픽스 변화"
      ],
      "rows": [
        [
          "서브네팅",
          "하나의 네트워크를 작은 네트워크 여러 개로 분할",
          "길어짐"
        ],
        [
          "슈퍼네팅",
          "여러 네트워크를 큰 주소 블록으로 집약",
          "짧아짐"
        ],
        [
          "CIDR",
          "클래스에 의존하지 않고 프리픽스 길이로 주소 범위 표현",
          "`/n` 사용"
        ]
      ]
    },
    {
      "type": "code",
      "text": "/24 → /27 : 네트워크를 더 작게 나눔\n/24 → /21 : 더 큰 주소 범위로 묶음",
      "language": ""
    },
    {
      "type": "paragraph",
      "text": "계산할 때 필요한 핵심:"
    },
    {
      "type": "code",
      "text": "호스트 비트 수 = 32 - 프리픽스 길이\n전체 주소 수 = 2^(호스트 비트 수)\n\n일반적인 IPv4 서브넷의 사용 가능한 호스트 수\n= 전체 주소 수 - 2\n\n제외하는 주소:\n호스트 부분이 모두 0 → 네트워크 주소\n호스트 부분이 모두 1 → 브로드캐스트 주소",
      "language": ""
    },
    {
      "type": "list",
      "ordered": false,
      "start": 1,
      "depth": 0,
      "items": [
        "`2`는 일반적인 서브넷 기준이며, `/31` 점대점 링크와 `/32`는 별도로 해석한다."
      ]
    },
    {
      "type": "table",
      "headers": [
        "프리픽스",
        "서브넷 마스크",
        "전체 주소 수",
        "일반적인 호스트 수"
      ],
      "rows": [
        [
          "/24",
          "255.255.255.0",
          "256",
          "254"
        ],
        [
          "/25",
          "255.255.255.128",
          "128",
          "126"
        ],
        [
          "/26",
          "255.255.255.192",
          "64",
          "62"
        ],
        [
          "/27",
          "255.255.255.224",
          "32",
          "30"
        ],
        [
          "/28",
          "255.255.255.240",
          "16",
          "14"
        ],
        [
          "/29",
          "255.255.255.248",
          "8",
          "6"
        ],
        [
          "/30",
          "255.255.255.252",
          "4",
          "2"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "예시 ① `/20` 네트워크를 동일한 크기 8개로 분할"
    },
    {
      "type": "code",
      "text": "8개 = 2^3\n호스트 비트 3개를 네트워크 비트로 전환\n\n새 프리픽스 = /20 + 3 = /23\n서브넷 마스크 = 255.255.254.0",
      "language": ""
    },
    {
      "type": "paragraph",
      "text": "`28.23.16.0/20`을 나누면:"
    },
    {
      "type": "code",
      "text": "28.23.16.0/23\n28.23.18.0/23\n28.23.20.0/23\n...\n28.23.30.0/23",
      "language": ""
    },
    {
      "type": "paragraph",
      "text": "예시 ② `/24` 네트워크에서 동일 크기 서브넷을 최소 30개 확보"
    },
    {
      "type": "code",
      "text": "2^4 = 16 → 부족\n2^5 = 32 → 충족\n\n새 프리픽스 = /29\n서브넷 마스크 = 255.255.255.248\n각 서브넷의 사용 가능한 호스트 = 6개",
      "language": ""
    },
    {
      "type": "paragraph",
      "text": "주의: ‘서브넷 30개’와 ‘서브넷당 호스트 30개’는 다르다. 호스트 30개가 필요하면 호스트 비트 5개가 필요하므로 `/27`이다."
    },
    {
      "type": "heading",
      "text": "5. IPv4 헤더와 단편화",
      "level": 4
    },
    {
      "type": "paragraph",
      "text": "IPv4 패킷은 `IP 헤더 + 데이터`로 구성된다."
    },
    {
      "type": "list",
      "ordered": false,
      "start": 1,
      "depth": 0,
      "items": [
        "헤더 길이: 20~60바이트",
        "전체 패킷 길이: 최대 65,535바이트",
        "IHL은 헤더 길이를 4바이트 단위로 표시 → IHL이 5이면 20바이트"
      ]
    },
    {
      "type": "table",
      "headers": [
        "주요 필드",
        "역할"
      ],
      "rows": [
        [
          "Version",
          "IP 버전, IPv4는 4"
        ],
        [
          "IHL",
          "IP 헤더 길이"
        ],
        [
          "Total Length",
          "헤더를 포함한 전체 패킷 길이"
        ],
        [
          "TTL",
          "패킷이 무한히 순환하지 않도록 수명 제한"
        ],
        [
          "Protocol",
          "IP 데이터 부분에 담긴 프로토콜 식별"
        ],
        [
          "Header Checksum",
          "IPv4 헤더의 오류 검출"
        ],
        [
          "Source / Destination Address",
          "출발지·목적지 IP 주소"
        ],
        [
          "Identification",
          "같은 원본 패킷에서 나온 단편들을 식별"
        ],
        [
          "Flags",
          "단편화 허용 여부와 추가 단편 존재 여부"
        ],
        [
          "Fragment Offset",
          "원본 데이터에서 해당 단편의 위치"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "Protocol 번호와 포트 번호는 구분해야 한다."
    },
    {
      "type": "code",
      "text": "IP Protocol = 6  → TCP\nIP Protocol = 17 → UDP\nIP Protocol = 1  → ICMP\n\nTCP 목적지 Port = 80 → 일반적인 HTTP 서비스",
      "language": ""
    },
    {
      "type": "paragraph",
      "text": "TTL은 라우터를 지날 때 감소한다. 전달 과정에서 0이 되면 패킷을 폐기하고, 일반적으로 ICMP Time Exceeded로 알린다."
    },
    {
      "type": "paragraph",
      "text": "단편화는 IP 패킷이 다음 링크의 MTU보다 클 때 패킷을 나누는 것이다."
    },
    {
      "type": "table",
      "headers": [
        "항목",
        "의미"
      ],
      "rows": [
        [
          "DF = 1",
          "단편화 금지"
        ],
        [
          "MF = 1",
          "뒤에 단편이 더 있음"
        ],
        [
          "MF = 0",
          "마지막 단편 또는 단편화하지 않은 패킷"
        ],
        [
          "Fragment Offset",
          "8바이트 단위의 위치"
        ],
        [
          "재조립",
          "최종 목적지에서 수행"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "예를 들어 데이터 4,000바이트, IP 헤더 20바이트, MTU 1,500바이트라면:"
    },
    {
      "type": "table",
      "headers": [
        "단편",
        "데이터 길이",
        "IP 헤더 포함 길이",
        "Offset",
        "MF"
      ],
      "rows": [
        [
          "1",
          "1,480",
          "1,500",
          "0",
          "1"
        ],
        [
          "2",
          "1,480",
          "1,500",
          "185",
          "1"
        ],
        [
          "3",
          "1,040",
          "1,060",
          "370",
          "0"
        ]
      ]
    },
    {
      "type": "code",
      "text": "두 번째 Offset = 1480 / 8 = 185\n세 번째 Offset = 2960 / 8 = 370",
      "language": ""
    },
    {
      "type": "paragraph",
      "text": "각 단편에는 IP 헤더가 붙으며, 마지막 단편을 제외한 데이터 길이는 8의 배수로 맞춘다."
    },
    {
      "type": "heading",
      "text": "6. IPv4와 IPv6 비교",
      "level": 4
    },
    {
      "type": "table",
      "headers": [
        "항목",
        "IPv4",
        "IPv6"
      ],
      "rows": [
        [
          "주소 길이",
          "32비트",
          "128비트"
        ],
        [
          "표기",
          "점으로 구분한 10진수",
          "콜론으로 구분한 16진수"
        ],
        [
          "기본 헤더",
          "20~60바이트",
          "40바이트 고정"
        ],
        [
          "헤더 체크섬",
          "있음",
          "없음"
        ],
        [
          "수명 제한",
          "TTL",
          "Hop Limit"
        ],
        [
          "다음 프로토콜 식별",
          "Protocol",
          "Next Header"
        ],
        [
          "단편화",
          "송신 호스트·라우터에서 가능",
          "송신 호스트에서만 수행"
        ],
        [
          "브로드캐스트",
          "있음",
          "없음"
        ],
        [
          "이웃의 링크 계층 주소 확인",
          "ARP",
          "ICMPv6 기반 NDP"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "IPv6 주요 필드:"
    },
    {
      "type": "table",
      "headers": [
        "필드",
        "핵심 역할"
      ],
      "rows": [
        [
          "Traffic Class",
          "트래픽의 우선 처리 등에 사용"
        ],
        [
          "Flow Label",
          "같은 흐름의 패킷을 식별"
        ],
        [
          "Payload Length",
          "기본 헤더 40바이트를 제외한 길이"
        ],
        [
          "Next Header",
          "다음 확장 헤더 또는 TCP·UDP 등의 종류"
        ],
        [
          "Hop Limit",
          "전달 가능한 홉 수 제한"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "IPv6의 단편화 정보는 기본 헤더가 아닌 Fragment 확장 헤더에 들어간다."
    },
    {
      "type": "paragraph",
      "text": "헷갈리기 쉬운 점:"
    },
    {
      "type": "list",
      "ordered": false,
      "start": 1,
      "depth": 0,
      "items": [
        "IPv6라고 통신이 자동으로 암호화되는 것은 아니다. IPsec은 별도 설정과 사용이 필요하다.",
        "IPv6 주소 자동 설정이 반드시 MAC 주소를 이용하는 것은 아니다.",
        "Flow Label이 있다고 대역폭이나 지연 시간이 자동으로 보장되는 것은 아니다."
      ]
    },
    {
      "type": "heading",
      "text": "7. IPv4 ↔ IPv6 전환 기술",
      "level": 4
    },
    {
      "type": "table",
      "headers": [
        "기술",
        "동작 방식",
        "핵심"
      ],
      "rows": [
        [
          "듀얼 스택",
          "IPv4와 IPv6를 모두 지원",
          "둘 다 사용"
        ],
        [
          "터널링",
          "한 IP 패킷을 다른 IP 패킷 안에 넣어 전달",
          "감싸서 통과"
        ],
        [
          "헤더 변환",
          "IPv4와 IPv6의 헤더·주소 등을 변환",
          "서로 번역"
        ]
      ]
    },
    {
      "type": "code",
      "text": "듀얼 스택\n장치가 IPv4도 처리하고 IPv6도 처리\n\n터널링\nIPv6 패킷 → [IPv4 헤더 | IPv6 패킷] → IPv6 패킷\n\n헤더 변환\nIPv6 패킷 → 변환 장치 → IPv4 패킷",
      "language": ""
    },
    {
      "type": "paragraph",
      "text": "터널링은 내부 패킷을 유지하며 바깥 헤더를 추가하고, 헤더 변환은 서로 다른 IP 버전 사이의 통신을 위해 패킷 형식을 변환한다."
    },
    {
      "type": "heading",
      "text": "8. ARP·RARP·ICMP·IGMP",
      "level": 4
    },
    {
      "type": "table",
      "headers": [
        "프로토콜",
        "핵심 역할"
      ],
      "rows": [
        [
          "ARP",
          "같은 링크에서 IPv4 주소에 대응하는 MAC 주소 확인"
        ],
        [
          "RARP",
          "MAC 주소를 바탕으로 자신의 IP 주소를 알아내는 과거 방식"
        ],
        [
          "ICMP",
          "IP 통신의 오류 보고·진단·제어"
        ],
        [
          "IGMP",
          "IPv4 멀티캐스트 그룹 가입 정보를 관리"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "ARP 동작:"
    },
    {
      "type": "code",
      "text": "① ARP 캐시 확인\n        ↓ 정보 없음\n② 요청을 브로드캐스트\n   “이 IP를 가진 장치의 MAC 주소는?”\n        ↓\n③ 해당 장치가 보통 유니캐스트로 응답\n   “내 MAC 주소는 이것”\n        ↓\n④ ARP 캐시에 저장하고 프레임 전송",
      "language": ""
    },
    {
      "type": "list",
      "ordered": false,
      "start": 1,
      "depth": 0,
      "items": [
        "같은 서브넷 목적지 → 목적지의 MAC 주소를 확인.",
        "다른 서브넷 목적지 → 다음 홉인 게이트웨이의 MAC 주소를 확인.",
        "ARP 요청은 라우터를 넘어 원격 목적지까지 전달되지 않는다.",
        "ARP에는 기본적인 인증 기능이 없어 거짓 매핑을 주입하는 ARP 스푸핑에 취약하다."
      ]
    },
    {
      "type": "code",
      "text": "ARP 캐시: IP 주소 ↔ MAC 주소\n스위치 MAC 테이블: MAC 주소 ↔ 스위치 포트",
      "language": ""
    },
    {
      "type": "heading",
      "text": "9. ICMP와 진단 도구",
      "level": 4
    },
    {
      "type": "paragraph",
      "text": "ICMP는 문제를 알려주는 프로토콜이며, 손실된 데이터를 직접 재전송하여 복구하지는 않는다."
    },
    {
      "type": "table",
      "headers": [
        "ICMPv4 메시지",
        "Type",
        "의미"
      ],
      "rows": [
        [
          "Echo Request",
          "8",
          "응답 요청"
        ],
        [
          "Echo Reply",
          "0",
          "요청에 대한 응답"
        ],
        [
          "Destination Unreachable",
          "3",
          "목적지·포트 등에 도달 불가"
        ],
        [
          "Redirect",
          "5",
          "더 적절한 다음 홉 안내"
        ],
        [
          "Time Exceeded",
          "11",
          "TTL 만료 또는 단편 재조립 시간 초과"
        ]
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "start": 1,
      "depth": 0,
      "items": [
        "ping: Echo Request / Echo Reply로 응답 여부와 왕복 시간 확인.",
        "traceroute: TTL을 단계적으로 증가시키고, 중간 라우터의 Time Exceeded 응답으로 경로 확인.",
        "Source Quench는 과거의 혼잡 통보 메시지로, 폐기된 기능이다."
      ]
    },
    {
      "type": "paragraph",
      "text": "ICMP는 TCP·UDP를 사용하지 않고 IP 안에 직접 실리므로 포트 번호가 없다."
    },
    {
      "type": "heading",
      "text": "10. TCP와 UDP 비교",
      "level": 4
    },
    {
      "type": "table",
      "headers": [
        "항목",
        "TCP",
        "UDP"
      ],
      "rows": [
        [
          "연결",
          "연결 지향",
          "비연결형"
        ],
        [
          "전달 형태",
          "바이트 스트림",
          "데이터그램"
        ],
        [
          "신뢰성",
          "순서 제어·ACK·재전송 제공",
          "자체적으로 제공하지 않음"
        ],
        [
          "메시지 경계",
          "보존하지 않음",
          "보존"
        ],
        [
          "흐름 제어",
          "있음",
          "자체 기능 없음"
        ],
        [
          "혼잡 제어",
          "있음",
          "자체 기능 없음"
        ],
        [
          "헤더 길이",
          "20~60바이트",
          "8바이트"
        ],
        [
          "특징",
          "신뢰성 있는 전송",
          "구조가 단순하고 오버헤드가 작음"
        ]
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "start": 1,
      "depth": 0,
      "items": [
        "흐름 제어: 수신자의 처리 능력을 넘지 않도록 조절.",
        "혼잡 제어: 네트워크가 감당할 수 있는 수준으로 전송량 조절.",
        "UDP를 사용하는 응용 프로그램도 필요하면 재전송·순서 제어를 직접 구현할 수 있다.",
        "UDP가 모든 상황에서 TCP보다 빠르다고 단정할 수는 없다."
      ]
    },
    {
      "type": "heading",
      "text": "11. TCP·UDP 헤더 핵심",
      "level": 4
    },
    {
      "type": "paragraph",
      "text": "UDP 헤더는 네 필드로 구성되며, 각각 16비트이다."
    },
    {
      "type": "code",
      "text": "출발지 포트 | 목적지 포트 | 길이 | 체크섬",
      "language": ""
    },
    {
      "type": "paragraph",
      "text": "UDP의 Length는 `UDP 헤더 8바이트 + 데이터 길이`이다."
    },
    {
      "type": "paragraph",
      "text": "TCP는 다음 필드가 중요하다."
    },
    {
      "type": "table",
      "headers": [
        "필드",
        "의미"
      ],
      "rows": [
        [
          "Source / Destination Port",
          "송신·수신 측 통신 종단점 식별"
        ],
        [
          "Sequence Number",
          "해당 세그먼트의 첫 데이터 바이트 번호"
        ],
        [
          "Acknowledgment Number",
          "다음에 받기를 기대하는 바이트 번호"
        ],
        [
          "Data Offset",
          "TCP 헤더 길이, 4바이트 단위"
        ],
        [
          "Window Size",
          "수신 측이 받아들일 수 있다고 알리는 데이터 범위"
        ],
        [
          "Checksum",
          "전송 오류 검출"
        ],
        [
          "Flags",
          "연결 설정·종료 등의 제어 정보"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "SEQ·ACK 계산:"
    },
    {
      "type": "code",
      "text": "송신: SEQ = 1001, 데이터 길이 = 100바이트\n수신: 1001~1100번 바이트를 연속으로 받음\n응답: ACK = 1101\n\n뜻: “1100번까지 받았으니 다음에는 1101번부터 보내.”",
      "language": ""
    },
    {
      "type": "list",
      "ordered": false,
      "start": 1,
      "depth": 0,
      "items": [
        "TCP 순서 번호는 패킷 개수가 아닌 바이트 기준이다.",
        "SYN과 FIN은 각각 순서 번호 1개를 소비한다.",
        "데이터 없는 순수 ACK는 순서 번호를 소비하지 않는다.",
        "체크섬은 전송 오류 검출용이며, 공격자의 위변조를 막는 암호학적 인증 기능은 아니다."
      ]
    },
    {
      "type": "paragraph",
      "text": "주요 TCP 플래그:"
    },
    {
      "type": "table",
      "headers": [
        "플래그",
        "의미"
      ],
      "rows": [
        [
          "SYN",
          "초기 순서 번호 동기화, 연결 설정"
        ],
        [
          "ACK",
          "확인응답 번호가 유효함"
        ],
        [
          "FIN",
          "자신의 데이터 송신 종료"
        ],
        [
          "RST",
          "연결 거부·강제 초기화"
        ],
        [
          "PSH",
          "데이터를 응용 프로그램에 신속하게 전달하도록 요청"
        ],
        [
          "URG",
          "긴급 포인터가 유효함"
        ]
      ]
    },
    {
      "type": "heading",
      "text": "12. TCP 연결 설정: 3-way handshake",
      "level": 4
    },
    {
      "type": "paragraph",
      "text": "목적은 양쪽의 초기 순서 번호를 교환하고 서로 통신할 준비가 되었는지 확인하는 것이다."
    },
    {
      "type": "code",
      "text": "클라이언트                              서버\n                                      LISTEN\n    ───── SYN, SEQ=1000 ──────────────→\nSYN-SENT                              SYN-RECEIVED\n\n    ←──── SYN+ACK, SEQ=2000, ACK=1001 ──\n\n    ───── ACK, SEQ=1001, ACK=2001 ────→\n\nESTABLISHED                           ESTABLISHED",
      "language": ""
    },
    {
      "type": "table",
      "headers": [
        "순서",
        "의미"
      ],
      "rows": [
        [
          "SYN",
          "“내 시작 번호는 1000이야. 연결하자.”"
        ],
        [
          "SYN+ACK",
          "“확인했어. 내 시작 번호는 2000이야.”"
        ],
        [
          "ACK",
          "“네 시작 번호도 확인했어.”"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "TCP 연결 정보를 관리하는 TCB는 이 문맥에서 Transmission Control Block을 뜻한다."
    },
    {
      "type": "heading",
      "text": "13. TCP 연결 종료: 일반적인 4-way handshake",
      "level": 4
    },
    {
      "type": "paragraph",
      "text": "TCP는 양방향 통신이므로 각 방향의 송신을 따로 종료한다."
    },
    {
      "type": "code",
      "text": "먼저 종료하는 A                       상대방 B\n\n    ───────── FIN ──────────────────→\nFIN-WAIT-1\n\n    ←──────── ACK ───────────────────\nFIN-WAIT-2                            CLOSE-WAIT\n                                      남은 송신·종료 처리\n\n    ←──────── FIN ───────────────────\n                                      LAST-ACK\n    ───────── ACK ──────────────────→\nTIME-WAIT                             CLOSED\n\n일정 시간 대기 후 CLOSED",
      "language": ""
    },
    {
      "type": "table",
      "headers": [
        "상태",
        "의미"
      ],
      "rows": [
        [
          "FIN-WAIT-1",
          "자신의 FIN에 대한 ACK 등을 기다림"
        ],
        [
          "FIN-WAIT-2",
          "자신의 FIN은 확인받았고, 상대방 FIN을 기다림"
        ],
        [
          "CLOSE-WAIT",
          "상대방 FIN을 받았고, 자신의 응용 프로그램이 종료하기를 기다림"
        ],
        [
          "LAST-ACK",
          "자신의 FIN에 대한 마지막 ACK를 기다림"
        ],
        [
          "TIME-WAIT",
          "마지막 ACK 재전송에 대비하고 이전 연결의 지연 패킷이 사라지기를 기다림"
        ]
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "start": 1,
      "depth": 0,
      "items": [
        "TIME-WAIT의 대기 시간은 원칙적으로 2MSL이다.",
        "CLOSE-WAIT가 오래 유지되면 응용 프로그램이 소켓을 제대로 닫지 않는지 확인한다.",
        "FIN과 ACK가 함께 전송될 수도 있어 실제 패킷이 항상 네 개로 나뉘는 것은 아니다."
      ]
    },
    {
      "type": "heading",
      "text": "14. 주요 포트 번호",
      "level": 4
    },
    {
      "type": "paragraph",
      "text": "포트 번호는 16비트이며 범위는 `0~65535`이다."
    },
    {
      "type": "table",
      "headers": [
        "구분",
        "범위"
      ],
      "rows": [
        [
          "Well-known",
          "0~1023"
        ],
        [
          "Registered",
          "1024~49151"
        ],
        [
          "Dynamic / Private",
          "49152~65535"
        ]
      ]
    },
    {
      "type": "table",
      "headers": [
        "서비스",
        "대표 포트",
        "전송 방식",
        "핵심"
      ],
      "rows": [
        [
          "FTP 데이터",
          "20",
          "TCP",
          "능동 모드의 대표적인 서버 데이터 포트"
        ],
        [
          "FTP 제어",
          "21",
          "TCP",
          "명령·응답"
        ],
        [
          "SSH",
          "22",
          "TCP",
          "보안 원격 접속, SFTP 등"
        ],
        [
          "Telnet",
          "23",
          "TCP",
          "평문 원격 접속"
        ],
        [
          "SMTP",
          "25",
          "TCP",
          "메일 서버 간 전송"
        ],
        [
          "DNS",
          "53",
          "UDP·TCP",
          "이름 해석"
        ],
        [
          "DHCP",
          "67 / 68",
          "UDP",
          "서버 / 클라이언트"
        ],
        [
          "TFTP",
          "69",
          "UDP",
          "초기 파일 전송 요청"
        ],
        [
          "HTTP",
          "80",
          "TCP",
          "웹 서비스"
        ],
        [
          "POP3",
          "110",
          "TCP",
          "메일 수신"
        ],
        [
          "NTP",
          "123",
          "UDP",
          "시간 동기화"
        ],
        [
          "IMAP",
          "143",
          "TCP",
          "서버의 메일함 접근·관리"
        ],
        [
          "SNMP",
          "161 / 162",
          "UDP",
          "요청 수신 / Trap·Inform 수신"
        ],
        [
          "HTTPS",
          "443",
          "TCP, HTTP/3는 UDP",
          "암호화된 웹 통신"
        ],
        [
          "IMAPS",
          "993",
          "TCP",
          "TLS를 사용하는 IMAP"
        ],
        [
          "POP3S",
          "995",
          "TCP",
          "TLS를 사용하는 POP3"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "포트는 서비스의 대표적인 약속이다. 포트 번호만 보고 실제 응용 프로토콜이나 안전성을 확정할 수는 없다."
    }
  ]
};
