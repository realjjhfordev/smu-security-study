import type { Lesson } from "./types";

export const section26: Lesson = {
  "sectionId": 26,
  "partTitle": "PART 5. 네트워크 보안",
  "title": "SECTION 26. 네트워크 기반 공격의 이해",
  "relatedQuestionIds": [
    "Q336",
    "Q337",
    "Q338",
    "Q339",
    "Q340",
    "Q341",
    "Q342",
    "Q343",
    "Q344",
    "Q345",
    "Q346",
    "Q347",
    "Q348",
    "Q349",
    "Q350",
    "Q351",
    "Q352",
    "Q353",
    "Q354",
    "Q355",
    "Q356",
    "Q357",
    "Q358",
    "Q359",
    "Q360",
    "Q361",
    "Q362",
    "Q363",
    "Q364",
    "Q365",
    "Q366",
    "Q367",
    "Q368",
    "Q369",
    "Q370",
    "Q371",
    "Q372",
    "Q373",
    "Q374"
  ],
  "blocks": [
    {
      "type": "heading",
      "text": "1. 네트워크 공격의 큰 분류",
      "level": 4
    },
    {
      "type": "table",
      "headers": [
        "구분",
        "수동적 공격",
        "능동적 공격"
      ],
      "rows": [
        [
          "방식",
          "통신 내용을 몰래 관찰·수집",
          "데이터를 위조·변조하거나 서비스를 방해"
        ],
        [
          "주요 침해",
          "기밀성",
          "무결성·가용성·인증"
        ],
        [
          "예시",
          "스니핑, 도청, 트래픽 분석",
          "스푸핑, 재전송, DoS/DDoS, 세션 하이재킹"
        ],
        [
          "탐지",
          "통신에 변화를 주지 않아 탐지가 어려움",
          "통신이나 시스템에 변화가 생겨 탐지 단서가 발생"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "수동적 공격도 정보 유출이라는 피해가 발생한다. 교재의 ‘직접적인 피해 없음’은 데이터를 직접 변경하거나 서비스를 중단시키지 않는다는 의미다."
    },
    {
      "type": "heading",
      "text": "2. DoS·DDoS·DRDoS 비교",
      "level": 4
    },
    {
      "type": "paragraph",
      "text": "모두 정상 사용자가 서비스를 이용하지 못하게 하는 가용성 공격이다."
    },
    {
      "type": "table",
      "headers": [
        "구분",
        "핵심",
        "공격 흐름"
      ],
      "rows": [
        [
          "DoS",
          "서비스 이용 방해",
          "공격원 → 피해 서버"
        ],
        [
          "DDoS",
          "여러 공격원에서 분산 공격",
          "다수 공격원 → 피해 서버"
        ],
        [
          "DRDoS",
          "다른 서버의 응답을 피해자에게 보내는 반사 공격",
          "공격원 → 반사 서버들 → 피해 서버"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "DDoS의 대표적인 구조:"
    },
    {
      "type": "code",
      "text": "공격자 → C&C 서버 → 다수의 봇 → 피해 서버\n          명령 전달     공격 수행",
      "language": ""
    },
    {
      "type": "list",
      "ordered": false,
      "start": 1,
      "depth": 0,
      "items": [
        "봇: 공격자의 명령에 따라 동작하는 악성 프로그램.",
        "좀비 PC: 봇 등에 감염되어 공격에 이용되는 컴퓨터.",
        "봇넷: 공격자가 통제하는 감염 기기들의 집합.",
        "C&C: 봇에 명령을 전달하고 통제하는 시스템.",
        "DNS 싱크홀: 악성 도메인 접속을 통제된 서버로 유도해 C&C 연결을 차단하고 감염 기기를 파악하는 기술."
      ]
    },
    {
      "type": "paragraph",
      "text": "DRDoS의 핵심:"
    },
    {
      "type": "code",
      "text": "공격자가 요청의 출발지 IP를 피해자 IP로 위조\n                    ↓\n여러 정상 서버가 피해자에게 응답\n                    ↓\n응답 트래픽이 피해자에게 집중",
      "language": ""
    },
    {
      "type": "paragraph",
      "text": "반사는 응답의 방향을 피해자에게 돌리는 것이고, 증폭은 요청보다 큰 응답을 발생시키는 것이다. 두 개념은 구분해야 한다."
    },
    {
      "type": "heading",
      "text": "3. SYN Flooding",
      "level": 4
    },
    {
      "type": "paragraph",
      "text": "TCP 연결이 완료되기 전의 대기 상태를 대량으로 만들어 서버의 연결 자원을 소진시키는 공격이다."
    },
    {
      "type": "code",
      "text": "정상 연결\n클라이언트 ── SYN ──→ 서버\n클라이언트 ← SYN+ACK ─ 서버\n클라이언트 ── ACK ──→ 서버 → 연결 완료\n\nSYN Flooding\n공격자 ── 다량의 SYN ──→ 서버\n                         ↓\n                  SYN+ACK 응답\n                         ↓\n                  마지막 ACK가 오지 않음\n                         ↓\n             Half-Open 연결이 누적되어 자원 소진",
      "language": ""
    },
    {
      "type": "list",
      "ordered": false,
      "start": 1,
      "depth": 0,
      "items": [
        "서버 상태: SYN_RECEIVED.",
        "핵심 대상: 연결 대기 큐와 연결 관리 자원.",
        "출발지 IP 위조가 흔히 이용되지만, 반드시 필요한 조건은 아니다."
      ]
    },
    {
      "type": "table",
      "headers": [
        "대응",
        "원리"
      ],
      "rows": [
        [
          "SYN Cookie",
          "연결 정보를 시퀀스 번호에 반영하고, 유효한 ACK가 온 뒤 연결 자원을 할당"
        ],
        [
          "SYN 요청 제한",
          "과도한 신규 연결 요청을 제한"
        ],
        [
          "대기 시간 조정",
          "미완성 연결이 자원을 오래 점유하지 않도록 조정"
        ],
        [
          "SYN Proxy",
          "중간 장비가 연결 절차를 대신 검증"
        ],
        [
          "First SYN Drop",
          "첫 SYN을 버리고 재전송 여부를 확인하는 방식"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "SYN Cookie는 사용자의 신원을 인증하는 기술이 아니라, SYN+ACK에 대한 유효한 응답을 확인해 미완성 연결의 자원 점유를 줄이는 기술이다."
    },
    {
      "type": "heading",
      "text": "4. 대표적인 DoS 공격",
      "level": 4
    },
    {
      "type": "table",
      "headers": [
        "공격",
        "핵심 원리",
        "구별 포인트"
      ],
      "rows": [
        [
          "SYN Flooding",
          "미완성 TCP 연결을 대량 생성",
          "Half-Open, 연결 대기 큐"
        ],
        [
          "UDP Flooding",
          "UDP 패킷을 대량 전송",
          "대역폭·패킷 처리 자원 소진"
        ],
        [
          "ICMP Flooding",
          "ICMP 패킷을 대량 전송",
          "요청·응답 처리 부담"
        ],
        [
          "Smurf",
          "피해자 IP로 위조한 ICMP 요청을 브로드캐스트로 전송",
          "반사·증폭"
        ],
        [
          "LAND",
          "출발지와 목적지 IP·포트를 피해자 것으로 동일하게 설정",
          "자기 자신과 통신하는 형태"
        ],
        [
          "Ping of Death",
          "재조립 결과가 IPv4 최대 길이를 넘는 비정상 패킷 이용",
          "크기·재조립 처리 취약점"
        ],
        [
          "Teardrop",
          "IP 단편의 오프셋을 비정상적으로 만들어 재조립 오류 유발",
          "단편 중첩·오프셋"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "Smurf의 흐름:"
    },
    {
      "type": "code",
      "text": "공격자\n  │ 출발지 IP = 피해자 IP\n  │ 목적지 = 증폭 네트워크의 브로드캐스트 주소\n  ↓\n여러 호스트가 ICMP 요청 수신\n  ↓\n피해자에게 ICMP 응답 집중",
      "language": ""
    },
    {
      "type": "paragraph",
      "text": "주요 대응 원리:"
    },
    {
      "type": "list",
      "ordered": false,
      "start": 1,
      "depth": 0,
      "items": [
        "출발지 IP 위조 패킷 필터링.",
        "IP Directed Broadcast 전달 제한.",
        "브로드캐스트 ICMP 요청에 대한 응답 제한.",
        "비정상 단편 검사와 취약점 패치."
      ]
    },
    {
      "type": "paragraph",
      "text": "Ping of Death의 65,535바이트는 ICMP 데이터만의 한도가 아니라 IPv4 데이터그램 전체 길이의 최대값이다."
    },
    {
      "type": "heading",
      "text": "5. DDoS를 ‘무엇을 소진시키는가’로 구분",
      "level": 4
    },
    {
      "type": "table",
      "headers": [
        "구분",
        "소진 대상",
        "대표 공격",
        "주요 관찰 지표"
      ],
      "rows": [
        [
          "대역폭 공격",
          "네트워크 회선 용량",
          "UDP·ICMP Flood, 반사·증폭 공격",
          "bps"
        ],
        [
          "프로토콜·연결 자원 공격",
          "연결 테이블, 패킷 처리 능력",
          "SYN Flood 등",
          "pps, 연결 수"
        ],
        [
          "애플리케이션 공격",
          "웹서버·DB·작업 처리 자원",
          "HTTP Flood, Slow HTTP",
          "요청 수, 응답 시간, 동시 연결 수"
        ]
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "start": 1,
      "depth": 0,
      "items": [
        "bps: 초당 전송되는 비트 수.",
        "pps: 초당 처리되는 패킷 수.",
        "적은 트래픽으로도 연결이나 처리 자원을 오래 점유하면 서비스 거부가 발생할 수 있다."
      ]
    },
    {
      "type": "heading",
      "text": "6. HTTP 기반 서비스 거부 공격",
      "level": 4
    },
    {
      "type": "table",
      "headers": [
        "공격",
        "동작",
        "서버가 부담을 받는 이유"
      ],
      "rows": [
        [
          "HTTP GET/POST Flooding",
          "정상 형식의 요청을 대량 전송",
          "웹 처리·DB 조회 작업 증가"
        ],
        [
          "Slowloris",
          "HTTP 헤더를 끝내지 않고 조금씩 전송",
          "요청이 완료되기를 기다리며 연결 유지"
        ],
        [
          "Slow HTTP POST, RUDY",
          "요청 본문을 매우 느리게 전송",
          "본문 수신이 끝나지 않아 연결 유지"
        ],
        [
          "Slow HTTP Read",
          "서버 응답을 매우 느리게 수신",
          "서버의 송신 버퍼·연결 자원 점유"
        ],
        [
          "CC Attack",
          "캐시를 활용하기 어렵게 하여 원본 서버 처리 유도",
          "캐시 효과 감소, 원본 서버 부하 증가"
        ],
        [
          "동적 HTTP Request Flooding",
          "요청 URL·매개변수를 계속 변경",
          "단순 차단·캐시 처리를 어렵게 함"
        ],
        [
          "HashDoS",
          "해시 충돌을 유발하는 입력 이용",
          "해시 테이블 처리에 CPU 자원 과다 사용"
        ]
      ]
    },
    {
      "type": "code",
      "text": "Slowloris   = 요청 헤더를 천천히 보냄\nSlow POST   = 요청 본문을 천천히 보냄\nSlow Read   = 서버 응답을 천천히 받음",
      "language": ""
    },
    {
      "type": "paragraph",
      "text": "주요 대응은 요청 완료 시간 제한, 최소 전송률 설정, 동시 연결·요청 수 제한, 비정상 요청 탐지다. 회선 자체가 포화된 공격은 서버 내부의 차단만으로 해결하기 어렵다."
    },
    {
      "type": "heading",
      "text": "7. 스캐닝",
      "level": 4
    },
    {
      "type": "paragraph",
      "text": "시스템의 동작 여부, 열린 포트, 서비스·운영체제 등의 정보를 확인하는 행위다. 보안 점검에도 쓰이며 공격 전 정보 수집에도 이용된다."
    },
    {
      "type": "table",
      "headers": [
        "단계",
        "의미"
      ],
      "rows": [
        [
          "풋프린팅",
          "공개 자료 등을 이용해 대상의 기초 정보 수집"
        ],
        [
          "스캐닝",
          "호스트·포트·서비스의 상태 확인"
        ],
        [
          "목록화, Enumeration",
          "계정·공유 자원·서비스 설정 등 상세 정보 수집"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "주요 포트 스캔 비교:"
    },
    {
      "type": "table",
      "headers": [
        "종류",
        "보내는 패킷·방식",
        "열린 포트의 대표 반응",
        "닫힌 포트의 대표 반응"
      ],
      "rows": [
        [
          "TCP Connect",
          "TCP 연결을 끝까지 수립",
          "SYN+ACK 수신 후 ACK로 연결 완료",
          "RST"
        ],
        [
          "TCP SYN, Half-Open",
          "SYN 전송 후 연결을 끝까지 완료하지 않음",
          "SYN+ACK 수신 후 스캐너가 RST",
          "RST"
        ],
        [
          "FIN",
          "FIN 플래그 설정",
          "일반적으로 무응답",
          "RST"
        ],
        [
          "NULL",
          "TCP 플래그를 설정하지 않음",
          "일반적으로 무응답",
          "RST"
        ],
        [
          "XMAS",
          "FIN·PSH·URG 설정",
          "일반적으로 무응답",
          "RST"
        ],
        [
          "UDP",
          "UDP 패킷 전송",
          "서비스 응답 또는 무응답",
          "ICMP Port Unreachable"
        ]
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
        "무응답만으로 ‘열림’을 확정할 수 없다. 방화벽 차단이나 패킷 손실일 수도 있다.",
        "FIN·NULL·XMAS의 반응은 운영체제 구현에 따라 다를 수 있다.",
        "SYN 스캔도 방화벽·IDS 등에 탐지될 수 있다. ‘로그가 절대 남지 않는다’는 뜻이 아니다.",
        "XMAS 스캔은 모든 TCP 플래그를 켜는 것이 아니다."
      ]
    },
    {
      "type": "heading",
      "text": "8. 스니핑",
      "level": 4
    },
    {
      "type": "paragraph",
      "text": "네트워크를 흐르는 다른 사용자의 통신 내용을 몰래 수집하는 행위다."
    },
    {
      "type": "table",
      "headers": [
        "환경",
        "특징"
      ],
      "rows": [
        [
          "허브",
          "수신한 신호를 다른 포트로 전달하므로 다른 기기의 트래픽을 관찰하기 쉬움"
        ],
        [
          "스위치",
          "목적지 MAC 주소에 해당하는 포트로 전달하므로 다른 기기의 유니캐스트 트래픽이 기본적으로 보이지 않음"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "Promiscuous Mode는 NIC에 도착한 프레임을 목적지 MAC 주소가 자신과 달라도 수신하도록 하는 모드다."
    },
    {
      "type": "paragraph",
      "text": "이 모드를 켠다고 스위치의 모든 트래픽이 자동으로 자신의 포트에 전달되는 것은 아니다."
    },
    {
      "type": "paragraph",
      "text": "스위치 환경에서 트래픽을 가로채는 데 이용되는 방식:"
    },
    {
      "type": "table",
      "headers": [
        "방식",
        "핵심"
      ],
      "rows": [
        [
          "MAC Flooding",
          "다량의 MAC 주소로 스위치의 MAC 테이블을 채워 비정상 전달을 유도"
        ],
        [
          "ARP Spoofing",
          "IP와 MAC의 대응 관계를 속여 공격자에게 트래픽 유도"
        ],
        [
          "ICMP Redirect 악용",
          "잘못된 경로 정보를 주입해 트래픽 경로 변경"
        ],
        [
          "포트 미러링 악용",
          "관리용 트래픽 복사 기능에 접근해 통신 수집"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "MAC Flooding이 성공하면 스위치가 무조건 허브처럼 동작하는 것은 아니며, 장비의 구현과 설정에 따라 결과가 달라진다."
    },
    {
      "type": "paragraph",
      "text": "방어의 핵심은 통신 암호화, 스위치 접근 통제, MAC 학습 제한, ARP 검증이다."
    },
    {
      "type": "heading",
      "text": "9. 스푸핑",
      "level": 4
    },
    {
      "type": "paragraph",
      "text": "주소나 신원을 위조해 다른 대상인 것처럼 속이는 공격이다."
    },
    {
      "type": "table",
      "headers": [
        "종류",
        "속이는 정보",
        "주요 결과"
      ],
      "rows": [
        [
          "ARP Spoofing",
          "IP ↔ MAC 대응 관계",
          "같은 LAN에서 통신 가로채기"
        ],
        [
          "IP Spoofing",
          "패킷의 출발지 IP",
          "신뢰 관계 악용, 반사 공격"
        ],
        [
          "DNS Spoofing",
          "도메인 ↔ IP 응답",
          "가짜 사이트로 접속 유도"
        ],
        [
          "이메일 Spoofing",
          "이메일 발신자 정보",
          "사칭·피싱"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "ARP Spoofing의 핵심:"
    },
    {
      "type": "code",
      "text": "정상 ARP 캐시\n게이트웨이 IP → 실제 게이트웨이 MAC\n\n오염된 ARP 캐시\n게이트웨이 IP → 공격자 MAC\n\n결과\n피해자 → 공격자 → 실제 게이트웨이",
      "language": ""
    },
    {
      "type": "paragraph",
      "text": "피해자는 정상 게이트웨이로 보낸다고 생각하지만, 실제 프레임은 공격자에게 전달된다."
    },
    {
      "type": "paragraph",
      "text": "헷갈리기 쉬운 테이블:"
    },
    {
      "type": "table",
      "headers": [
        "테이블",
        "저장하는 대응 관계",
        "주로 사용하는 장치"
      ],
      "rows": [
        [
          "ARP 캐시",
          "IP 주소 ↔ MAC 주소",
          "호스트·라우터"
        ],
        [
          "MAC 테이블",
          "MAC 주소 ↔ 스위치 포트",
          "L2 스위치"
        ],
        [
          "라우팅 테이블",
          "목적지 네트워크 ↔ 다음 홉·출력 인터페이스",
          "호스트·라우터"
        ]
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "start": 1,
      "depth": 0,
      "items": [
        "ARP Spoofing은 ARP 캐시를 오염시킨다.",
        "MAC Flooding은 스위치의 MAC 테이블을 대상으로 한다."
      ]
    },
    {
      "type": "heading",
      "text": "10. 스푸핑·스니핑 대응",
      "level": 4
    },
    {
      "type": "table",
      "headers": [
        "위협",
        "핵심 대응"
      ],
      "rows": [
        [
          "ARP Spoofing",
          "정적 ARP 등록, DAI 같은 ARP 검증, IP·MAC 변경 감시"
        ],
        [
          "IP Spoofing",
          "출발지 주소 필터링, uRPF, IP 주소만을 믿는 인증 방식 제거"
        ],
        [
          "DNS Spoofing",
          "DNS 응답 검증, DNSSEC 검증, HTTPS 인증서 검증"
        ],
        [
          "스니핑",
          "TLS·SSH·VPN 등으로 통신 암호화"
        ],
        [
          "MAC Flooding",
          "Port Security 등으로 포트별 MAC 학습 수 제한"
        ],
        [
          "세션 탈취",
          "세션 토큰 보호, 만료·폐기 관리, 중요 작업 재인증"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "ARPwatch는 IP와 MAC의 대응 관계 변화를 감시하는 도구다. 변화가 탐지되었다고 반드시 공격인 것은 아니므로 정상 장비 변경과 구분해야 한다."
    },
    {
      "type": "heading",
      "text": "11. 세션 하이재킹",
      "level": 4
    },
    {
      "type": "paragraph",
      "text": "인증이 끝난 정상 사용자의 세션을 가로채 그 사용자처럼 통신하는 공격이다."
    },
    {
      "type": "code",
      "text": "정상 사용자 ── 로그인·인증 ──→ 서버\n                 ↓\n            유효한 세션 생성\n                 ↓\n공격자가 세션 정보 탈취·악용\n                 ↓\n공격자 ── 정상 사용자로 가장 ──→ 서버",
      "language": ""
    },
    {
      "type": "table",
      "headers": [
        "구분",
        "악용하는 정보",
        "핵심"
      ],
      "rows": [
        [
          "TCP 세션 하이재킹",
          "TCP 순서 번호·확인응답 번호 등",
          "기존 TCP 연결에 패킷을 끼워 넣거나 통신을 장악"
        ],
        [
          "HTTP 세션 하이재킹",
          "세션 ID·쿠키·토큰",
          "로그인된 사용자의 권한으로 요청"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "TCP 세션 하이재킹의 탐지 단서:"
    },
    {
      "type": "list",
      "ordered": false,
      "start": 1,
      "depth": 0,
      "items": [
        "순서 번호의 비정상적인 변화.",
        "ACK Storm.",
        "재전송·패킷 손실 증가.",
        "예상하지 않은 연결 초기화."
      ]
    },
    {
      "type": "paragraph",
      "text": "이런 현상은 공격의 단서이지, 단독으로 공격을 확정하는 증거는 아니다."
    },
    {
      "type": "paragraph",
      "text": "HTTP 세션 보호의 핵심:"
    },
    {
      "type": "list",
      "ordered": false,
      "start": 1,
      "depth": 0,
      "items": [
        "HTTPS 사용.",
        "쿠키에 Secure·HttpOnly·SameSite 속성 적용.",
        "로그인 시 세션 ID 재발급.",
        "로그아웃·만료 시 서버에서 세션 무효화.",
        "중요 작업에서 재인증."
      ]
    },
    {
      "type": "paragraph",
      "text": "스푸핑은 ‘신원을 속이는 것’, 스니핑은 ‘통신을 엿보는 것’, 세션 하이재킹은 ‘이미 인증된 통신을 빼앗는 것’으로 구분하면 된다."
    }
  ]
};
