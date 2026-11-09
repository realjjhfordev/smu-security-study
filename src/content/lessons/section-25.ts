import type { Lesson } from "./types";

export const section25: Lesson = {
  "sectionId": 25,
  "partTitle": "PART 5. 네트워크 보안",
  "title": "SECTION 25. 네트워크 기반 프로그램 활용",
  "relatedQuestionIds": [
    "Q326",
    "Q327",
    "Q328",
    "Q329",
    "Q330",
    "Q331",
    "Q332",
    "Q333",
    "Q334",
    "Q335"
  ],
  "blocks": [
    {
      "type": "heading",
      "text": "1. 네트워크 진단 도구 비교",
      "level": 4
    },
    {
      "type": "table",
      "headers": [
        "도구",
        "핵심 역할",
        "확인할 수 있는 정보"
      ],
      "rows": [
        [
          "ping",
          "목적지까지 도달 가능한지 확인",
          "응답 여부, 왕복 시간(RTT), 패킷 손실률"
        ],
        [
          "traceroute / tracert",
          "목적지까지의 경로 추적",
          "중간 라우터, 각 홉까지의 응답 시간"
        ],
        [
          "netstat",
          "현재 네트워크 연결 상태 확인",
          "연결된 주소·포트, 대기 포트, TCP 상태, 통계"
        ],
        [
          "route",
          "라우팅 테이블 확인·변경",
          "목적지 네트워크, 게이트웨이, 인터페이스"
        ],
        [
          "tcpdump",
          "실제 패킷 캡처·분석",
          "패킷 헤더와 데이터, 통신 흐름"
        ],
        [
          "ifconfig / ipconfig",
          "내 장치의 네트워크 설정 확인",
          "IP 주소, 서브넷 마스크 등"
        ],
        [
          "nslookup",
          "DNS 조회",
          "도메인에 대응하는 IP, 역방향 조회"
        ]
      ]
    },
    {
      "type": "heading",
      "text": "2. ping — “상대방에게 도달할 수 있는가?”",
      "level": 4
    },
    {
      "type": "paragraph",
      "text": "ICMP 요청을 보내고 응답을 받아 네트워크 연결 상태를 확인한다."
    },
    {
      "type": "code",
      "text": "내 컴퓨터 ── Echo Request ──→ 대상\n내 컴퓨터 ←── Echo Reply ─── 대상\n           왕복 시간 = RTT",
      "language": ""
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
        ]
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "start": 1,
      "depth": 0,
      "items": [
        "RTT: 요청을 보낸 뒤 응답을 받을 때까지 걸린 왕복 시간.",
        "손실률: 보낸 요청 중 응답을 받지 못한 비율.",
        "TTL: 라우터를 통과할 때 감소하며, 패킷이 무한히 순환하는 것을 방지한다."
      ]
    },
    {
      "type": "paragraph",
      "text": "주의할 점:"
    },
    {
      "type": "list",
      "ordered": false,
      "start": 1,
      "depth": 0,
      "items": [
        "ping 응답이 없어도 상대 시스템이 꺼졌다고 단정할 수 없다. 방화벽에서 ICMP를 차단했을 수도 있다.",
        "ping 성공은 웹·메일 같은 개별 서비스의 정상 동작까지 보장하지 않는다.",
        "RTT가 짧다고 물리적으로 더 가까운 것은 아니다.",
        "초기 TTL은 운영체제와 설정에 따라 다르므로, TTL만으로 OS를 확정할 수 없다."
      ]
    },
    {
      "type": "heading",
      "text": "3. traceroute / tracert — “어떤 경로로 가는가?”",
      "level": 4
    },
    {
      "type": "paragraph",
      "text": "TTL을 1부터 차례로 증가시키며 패킷을 보내 중간 라우터를 알아낸다."
    },
    {
      "type": "code",
      "text": "출발지 ── 라우터 A ── 라우터 B ── 목적지\n\nTTL 1 → A에서 만료 → A가 ICMP Time Exceeded 응답\nTTL 2 → B에서 만료 → B가 ICMP Time Exceeded 응답\nTTL 3 → 목적지 도착 → 목적지의 응답 확인",
      "language": ""
    },
    {
      "type": "table",
      "headers": [
        "구분",
        "일반적인 UNIX/Linux traceroute",
        "Windows tracert"
      ],
      "rows": [
        [
          "보내는 탐색 패킷",
          "UDP",
          "ICMP Echo Request"
        ],
        [
          "중간 라우터의 응답",
          "ICMP Time Exceeded",
          "ICMP Time Exceeded"
        ],
        [
          "목적지 도착 시 응답",
          "ICMP Port Unreachable",
          "ICMP Echo Reply"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "traceroute는 구현과 옵션에 따라 ICMP나 TCP 방식도 사용할 수 있다."
    },
    {
      "type": "list",
      "ordered": false,
      "start": 1,
      "depth": 0,
      "items": [
        "출력 시간은 출발지에서 해당 홉까지의 왕복 시간이다. 인접 라우터 사이의 시간은 아니다.",
        "`*`는 제한 시간 내 응답을 받지 못했다는 뜻이다. 해당 라우터의 장애를 확정하는 표시는 아니다."
      ]
    },
    {
      "type": "paragraph",
      "text": "암기: ping은 도달 여부, traceroute는 도달 경로."
    },
    {
      "type": "heading",
      "text": "4. netstat — “누구와 어떤 포트로 통신 중인가?”",
      "level": 4
    },
    {
      "type": "paragraph",
      "text": "현재 시스템의 소켓과 연결 상태, 라우팅 정보, 프로토콜 통계를 확인한다."
    },
    {
      "type": "table",
      "headers": [
        "주요 출력 항목",
        "의미"
      ],
      "rows": [
        [
          "Proto",
          "TCP·UDP 등 사용 프로토콜"
        ],
        [
          "Local Address",
          "내 IP 주소와 포트"
        ],
        [
          "Foreign Address",
          "상대 IP 주소와 포트"
        ],
        [
          "State",
          "TCP 연결 상태"
        ]
      ]
    },
    {
      "type": "table",
      "headers": [
        "TCP 상태",
        "의미"
      ],
      "rows": [
        [
          "LISTEN / LISTENING",
          "접속 요청을 기다리는 상태"
        ],
        [
          "SYN_SENT",
          "SYN을 보내고 응답을 기다리는 상태"
        ],
        [
          "SYN_RECEIVED",
          "SYN을 받아 SYN+ACK을 보내고 최종 ACK 대기"
        ],
        [
          "ESTABLISHED",
          "연결이 성립된 상태"
        ],
        [
          "CLOSE_WAIT",
          "상대의 종료 요청을 받고, 내 프로그램의 연결 종료를 기다림"
        ],
        [
          "TIME_WAIT",
          "마지막 ACK 재전송과 지연 패킷 처리를 위해 일정 시간 대기"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "주요 옵션은 운영체제에 따라 일부 다르다."
    },
    {
      "type": "table",
      "headers": [
        "옵션",
        "의미"
      ],
      "rows": [
        [
          "`-a`",
          "연결 및 대기 소켓 표시"
        ],
        [
          "`-n`",
          "주소와 포트를 이름 대신 숫자로 표시"
        ],
        [
          "`-r`",
          "라우팅 테이블 표시"
        ],
        [
          "`-s`",
          "프로토콜별 통계 표시"
        ],
        [
          "`-i`",
          "인터페이스 정보 표시 — UNIX/Linux 계열"
        ],
        [
          "`-o`",
          "연결에 관련된 PID 표시 — Windows"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "예: Windows의 `netstat -ano`는 연결·대기 포트와 주소를 숫자로 표시하고 PID까지 보여준다."
    },
    {
      "type": "heading",
      "text": "5. route — “목적지로 보낼 다음 경로는 어디인가?”",
      "level": 4
    },
    {
      "type": "paragraph",
      "text": "라우팅 테이블을 조회하거나 경로를 추가·삭제하는 도구다."
    },
    {
      "type": "table",
      "headers": [
        "라우팅 정보",
        "의미"
      ],
      "rows": [
        [
          "목적지 네트워크",
          "패킷을 보낼 대상 네트워크"
        ],
        [
          "서브넷 마스크 / 프리픽스",
          "목적지 네트워크의 범위"
        ],
        [
          "게이트웨이",
          "다음으로 전달할 라우터"
        ],
        [
          "인터페이스",
          "패킷을 내보낼 내 네트워크 인터페이스"
        ],
        [
          "메트릭",
          "경로 선택에 사용하는 비용"
        ]
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "start": 1,
      "depth": 0,
      "items": [
        "Windows: `route print`로 조회.",
        "Linux: `ip route`로 조회.",
        "기본 경로 `0.0.0.0/0`: 더 구체적으로 일치하는 경로가 없을 때 사용하는 경로."
      ]
    },
    {
      "type": "paragraph",
      "text": "경로 선택에서는 먼저 목적지와 가장 길게 일치하는 프리픽스를 찾는다. 단순히 메트릭이 가장 작은 경로부터 고르는 것은 아니다."
    },
    {
      "type": "heading",
      "text": "6. tcpdump — “실제로 어떤 패킷이 오가는가?”",
      "level": 4
    },
    {
      "type": "paragraph",
      "text": "네트워크 인터페이스에서 관찰 가능한 패킷을 캡처하고 내용을 분석한다."
    },
    {
      "type": "list",
      "ordered": false,
      "start": 1,
      "depth": 0,
      "items": [
        "통신 장애 원인 분석.",
        "비정상 트래픽 및 공격 흔적 확인.",
        "특정 호스트·포트·프로토콜만 선택해 분석."
      ]
    },
    {
      "type": "table",
      "headers": [
        "옵션",
        "의미"
      ],
      "rows": [
        [
          "`-i`",
          "캡처할 인터페이스 지정"
        ],
        [
          "`-n`",
          "주소 등을 이름으로 변환하지 않고 숫자로 표시"
        ],
        [
          "`-c`",
          "지정한 개수의 패킷을 캡처한 후 종료"
        ],
        [
          "`-A`",
          "패킷 데이터를 ASCII로 표시"
        ],
        [
          "`-w`",
          "캡처 결과를 파일로 저장"
        ],
        [
          "`-r`",
          "저장된 캡처 파일 읽기"
        ]
      ]
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
        "netstat: 연결 상태를 확인.",
        "tcpdump: 실제로 오가는 패킷을 확인.",
        "tcpdump를 실행한다고 같은 네트워크의 모든 통신을 볼 수 있는 것은 아니다.",
        "암호화된 트래픽은 캡처해도 평문 내용을 바로 읽을 수 없다."
      ]
    },
    {
      "type": "heading",
      "text": "7. ifconfig / ipconfig / nslookup",
      "level": 4
    },
    {
      "type": "table",
      "headers": [
        "도구",
        "핵심 용도"
      ],
      "rows": [
        [
          "ifconfig",
          "UNIX/Linux의 인터페이스 설정 조회·변경"
        ],
        [
          "ipconfig",
          "Windows의 IP 설정 조회 및 DHCP·DNS 캐시 관련 작업"
        ],
        [
          "nslookup",
          "DNS 서버에 이름·주소 정보 질의"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "Windows ipconfig 주요 옵션:"
    },
    {
      "type": "table",
      "headers": [
        "명령",
        "의미"
      ],
      "rows": [
        [
          "`ipconfig`",
          "IP 주소, 서브넷 마스크, 기본 게이트웨이 확인"
        ],
        [
          "`ipconfig /all`",
          "MAC 주소, DHCP, DNS 등 상세 설정 확인"
        ],
        [
          "`ipconfig /release`",
          "DHCP로 할당받은 주소 해제"
        ],
        [
          "`ipconfig /renew`",
          "DHCP 임대 갱신 요청"
        ],
        [
          "`ipconfig /displaydns`",
          "로컬 DNS 캐시 확인"
        ],
        [
          "`ipconfig /flushdns`",
          "로컬 DNS 캐시 삭제"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "DNS 조회 방향:"
    },
    {
      "type": "code",
      "text": "정방향 조회: 도메인 → IP 주소     A / AAAA 레코드\n역방향 조회: IP 주소 → 도메인     PTR 레코드",
      "language": ""
    },
    {
      "type": "paragraph",
      "text": "`/flushdns`는 내 컴퓨터의 DNS 캐시를 지우는 기능이며, DNS 서버의 레코드를 삭제하는 기능은 아니다."
    }
  ]
};
