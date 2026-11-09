import type { Lesson } from "./types";

export const section34: Lesson = {
  "sectionId": 34,
  "partTitle": "PART 6. 애플리케이션 보안",
  "title": "SECTION 34. DHCP와 DNS 보안",
  "relatedQuestionIds": [
    "Q488",
    "Q489",
    "Q490",
    "Q491",
    "Q492",
    "Q493",
    "Q494"
  ],
  "blocks": [
    {
      "type": "heading",
      "text": "DHCP·DNS·데이터베이스 보안 요약",
      "level": 3
    },
    {
      "type": "paragraph",
      "text": "이 내용은 세 부분으로 이어집니다. DHCP가 단말에 네트워크 설정을 주고, DNS가 이름을 IP 주소로 바꾸며, 데이터베이스 보안은 저장된 정보에 누가 접근하고 무엇을 알 수 있는지 통제합니다."
    },
    {
      "type": "heading",
      "text": "1. DHCP: 단말에 네트워크 설정을 자동으로 주는 기능",
      "level": 3
    },
    {
      "type": "paragraph",
      "text": "DHCP는 단말이 네트워크에 접속할 때 IP 주소, 서브넷 마스크, 기본 게이트웨이, DNS 서버 주소 등을 자동으로 할당합니다. UDP를 사용하며, 서버는 67번 포트, 클라이언트는 68번 포트를 사용합니다."
    },
    {
      "type": "table",
      "headers": [
        "순서",
        "메시지",
        "의미"
      ],
      "rows": [
        [
          "1",
          "Discover",
          "클라이언트가 DHCP 서버를 찾음"
        ],
        [
          "2",
          "Offer",
          "서버가 사용 가능한 IP 등을 제안"
        ],
        [
          "3",
          "Request",
          "클라이언트가 제안받은 주소를 요청"
        ],
        [
          "4",
          "ACK",
          "서버가 할당을 확정"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "흐름은 `Discover → Offer → Request → ACK`, 앞글자로 DORA입니다. 주소를 영구히 주는 것이 아니라 임대 기간을 정해 할당하며, 클라이언트는 기간이 끝나기 전에 갱신합니다."
    },
    {
      "type": "paragraph",
      "text": "보안상 핵심은 클라이언트가 받은 설정을 신뢰하고 사용한다는 점입니다. 공격자가 가짜 DHCP 서버로 응답하면 잘못된 게이트웨이나 DNS 서버를 배포해 트래픽을 우회시킬 수 있습니다. 반대로 주소 풀을 고갈시키는 공격은 정상 단말이 IP를 받지 못하게 만듭니다."
    },
    {
      "type": "heading",
      "text": "2. DNS: 이름을 IP 주소로 바꾸는 기능",
      "level": 3
    },
    {
      "type": "paragraph",
      "text": "DNS는 `example.com` 같은 이름에 대응하는 IP 주소를 찾습니다. 일반적인 조회에서는 UDP 53번 포트를 주로 사용하고, 필요한 경우 TCP 53번도 사용합니다."
    },
    {
      "type": "paragraph",
      "text": "이름을 찾는 과정에서 역할을 구분하면 쉽습니다."
    },
    {
      "type": "list",
      "ordered": false,
      "start": 1,
      "depth": 0,
      "items": [
        "로컬 캐시와 `hosts` 파일: 이미 알고 있는 이름·주소 정보를 확인합니다. 실제 조회 순서는 운영체제 설정에 따라 달라집니다.",
        "재귀 DNS 서버(리졸버): 사용자를 대신해 답을 찾아오고, 결과를 일정 시간 캐시에 저장합니다.",
        "권한 DNS 서버: 자신이 담당하는 도메인의 DNS 레코드에 대해 답합니다."
      ]
    },
    {
      "type": "paragraph",
      "text": "자주 나오는 레코드는 다음과 같습니다."
    },
    {
      "type": "table",
      "headers": [
        "레코드",
        "의미"
      ],
      "rows": [
        [
          "A",
          "이름 → IPv4 주소"
        ],
        [
          "AAAA",
          "이름 → IPv6 주소"
        ],
        [
          "MX",
          "해당 도메인의 메일 서버"
        ],
        [
          "NS",
          "해당 도메인을 담당하는 네임서버"
        ],
        [
          "PTR",
          "IP 주소 → 이름을 조회할 때 사용"
        ],
        [
          "TXT",
          "문자열 정보 저장"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "DNS 보안의 핵심 문제는 잘못된 주소를 정상 답변처럼 믿게 만드는 것입니다."
    },
    {
      "type": "list",
      "ordered": false,
      "start": 1,
      "depth": 0,
      "items": [
        "DNS 스푸핑: 위조된 DNS 응답을 보내 사용자를 다른 주소로 유도합니다.",
        "DNS 캐시 포이즈닝: 재귀 DNS 서버의 캐시에 잘못된 정보를 저장시켜, 이후 여러 사용자가 잘못된 답을 받게 합니다.",
        "`hosts` 파일 변조: 단말에 저장된 이름·주소 대응 관계를 바꿔 특정 사이트를 다른 IP로 연결합니다."
      ]
    },
    {
      "type": "paragraph",
      "text": "DNSSEC은 DNS 응답의 전자서명을 검증해 출처와 무결성을 확인하는 기술입니다. DNS 응답 내용을 암호화해 숨기는 기술은 아니며, DNS 서버를 대상으로 한 서비스 거부 공격까지 해결하지는 않습니다."
    }
  ]
};
