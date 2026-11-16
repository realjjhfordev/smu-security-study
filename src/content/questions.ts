// Variant questions imported from the supplied Markdown bank. Source numbers are preserved.
export type Question = {id:string;partId:number;sectionId:number;sectionTitle:string;sourceSection:string;question:string;options:{number:number;text:string}[];answer:number;explanation:string;reviewStatus:string};
export const questions: Question[] = [
  {
    "id": "Q001",
    "partId": 1,
    "sectionId": 1,
    "sectionTitle": "정보보호관리의 개념",
    "sourceSection": "SECTION 01 정보보호관리의 개념",
    "question": "암호화된 통신의 내용은 보이지 않지만 접속 시각과 전송량을 관찰하니 정기 점검 시간을 짐작할 수 있었다. 어떤 공격인가?",
    "options": [
      {
        "number": 1,
        "text": "트래픽 분석"
      },
      {
        "number": 2,
        "text": "메시지 삽입"
      },
      {
        "number": 3,
        "text": "서비스 거부"
      },
      {
        "number": 4,
        "text": "데이터 변조"
      }
    ],
    "answer": 1,
    "explanation": "트래픽 분석은 통신 내용 대신 빈도·시각·전송량 같은 외부 특성에서 정보를 얻는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q002",
    "partId": 1,
    "sectionId": 1,
    "sectionTitle": "정보보호관리의 개념",
    "sourceSection": "SECTION 01 정보보호관리의 개념",
    "question": "공급업체가 개인키로 납품 확인서에 서명했다. 수신자가 공개키로 검증한 서명은 공급업체가 나중에 서명 사실을 부인할 경우 어떤 보안 목적에 쓰이는가?",
    "options": [
      {
        "number": 1,
        "text": "기밀성"
      },
      {
        "number": 2,
        "text": "가용성"
      },
      {
        "number": 3,
        "text": "부인방지"
      },
      {
        "number": 4,
        "text": "익명성"
      }
    ],
    "answer": 3,
    "explanation": "전자서명은 서명 행위의 증거를 제공하여 부인방지를 지원한다. 서명 자체로 문서 내용이 가려지지는 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q003",
    "partId": 1,
    "sectionId": 1,
    "sectionTitle": "정보보호관리의 개념",
    "sourceSection": "SECTION 01 정보보호관리의 개념",
    "question": "진료 기록 전송에서 (가) 수정 여부 확인, (나) 보낸 기관의 신원 확인, (다) 권한 없는 사람의 열람 방지가 필요하다. 순서대로 옳은 것은?",
    "options": [
      {
        "number": 1,
        "text": "기밀성·가용성·인증"
      },
      {
        "number": 2,
        "text": "무결성·인증·기밀성"
      },
      {
        "number": 3,
        "text": "인증·기밀성·무결성"
      },
      {
        "number": 4,
        "text": "가용성·무결성·인증"
      }
    ],
    "answer": 2,
    "explanation": "변경 확인은 무결성, 발신 주체 확인은 인증, 읽기 제한은 기밀성에 해당한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q004",
    "partId": 1,
    "sectionId": 1,
    "sectionTitle": "정보보호관리의 개념",
    "sourceSection": "SECTION 01 정보보호관리의 개념",
    "question": "보안 교육에서 통신 내용이나 서비스 상태를 바꾸지 않는 수동적 공격의 사례를 고르려 한다. 어느 사례가 맞는가?",
    "options": [
      {
        "number": 1,
        "text": "정상 요청을 추가로 전달한다."
      },
      {
        "number": 2,
        "text": "본문의 배송지를 바꾼다."
      },
      {
        "number": 3,
        "text": "전송을 중간에서 끊는다."
      },
      {
        "number": 4,
        "text": "흐르는 통신을 기록해 내용을 살펴본다."
      }
    ],
    "answer": 4,
    "explanation": "도청은 통신을 관찰하는 수동적 공격이다. 삽입·변조·차단은 통신에 영향을 주는 능동적 공격이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q005",
    "partId": 1,
    "sectionId": 1,
    "sectionTitle": "정보보호관리의 개념",
    "sourceSection": "SECTION 01 정보보호관리의 개념",
    "question": "팀은 백업이 없는 저장장치가 고장 나 업무가 중단될 가능성과 손실을 함께 평가했다. 팀이 평가한 것은 무엇인가?",
    "options": [
      {
        "number": 1,
        "text": "위협"
      },
      {
        "number": 2,
        "text": "위험"
      },
      {
        "number": 3,
        "text": "취약점"
      },
      {
        "number": 4,
        "text": "통제"
      }
    ],
    "answer": 2,
    "explanation": "고장은 위협 사건, 백업 부재는 취약점이다. 위험은 사건의 발생 가능성과 그로 인한 영향을 함께 고려한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q006",
    "partId": 1,
    "sectionId": 1,
    "sectionTitle": "정보보호관리의 개념",
    "sourceSection": "SECTION 01 정보보호관리의 개념",
    "question": "데이터베이스 손상 후 운영팀은 백업을 복원하고 거래 로그를 적용해 업무 데이터를 되살렸다. 이 조치의 목적에 따른 분류는?",
    "options": [
      {
        "number": 1,
        "text": "교정 통제"
      },
      {
        "number": 2,
        "text": "예방 통제"
      },
      {
        "number": 3,
        "text": "탐지 통제"
      },
      {
        "number": 4,
        "text": "억제 통제"
      }
    ],
    "answer": 1,
    "explanation": "이미 발생한 사고의 영향을 줄이고 원래 상태로 복구하는 조치는 교정 통제다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q007",
    "partId": 2,
    "sectionId": 2,
    "sectionTitle": "암호학 개요",
    "sourceSection": "SECTION 01 암호학 개요",
    "question": "수신 시스템이 정당하게 받은 비밀키로 보호된 데이터를 원래의 읽을 수 있는 형태로 되돌린다. 이 과정은?",
    "options": [
      {
        "number": 1,
        "text": "암호분석"
      },
      {
        "number": 2,
        "text": "인코딩"
      },
      {
        "number": 3,
        "text": "복호화"
      },
      {
        "number": 4,
        "text": "전자서명"
      }
    ],
    "answer": 3,
    "explanation": "알맞은 키로 암호문을 평문으로 되돌리는 과정은 복호화다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q008",
    "partId": 2,
    "sectionId": 2,
    "sectionTitle": "암호학 개요",
    "sourceSection": "SECTION 01 암호학 개요",
    "question": "신규 서비스의 암호화를 설계하는 팀이 좋은 접근을 고르려 한다. 무엇이 적절한가?",
    "options": [
      {
        "number": 1,
        "text": "상세 설계를 숨긴 자체 알고리즘을 즉석에서 만든다."
      },
      {
        "number": 2,
        "text": "Base64 표현만으로 민감한 값을 숨긴다."
      },
      {
        "number": 3,
        "text": "모든 고객에게 같은 고정 키를 제공한다."
      },
      {
        "number": 4,
        "text": "공개 검증된 알고리즘과 라이브러리를 쓰고 키를 안전하게 관리한다."
      }
    ],
    "answer": 4,
    "explanation": "암호 설계는 알고리즘이 공개되어도 안전하도록 구성하고 실제 보호에 필요한 키를 따로 관리한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q009",
    "partId": 2,
    "sectionId": 2,
    "sectionTitle": "암호학 개요",
    "sourceSection": "SECTION 01 암호학 개요",
    "question": "교육 시나리오에서 정상 이용자가 시스템에 접근할 수 없게 하는 서비스 거부를 분류한다. 올바른 연결은?",
    "options": [
      {
        "number": 1,
        "text": "능동적 공격·가용성"
      },
      {
        "number": 2,
        "text": "수동적 공격·가용성"
      },
      {
        "number": 3,
        "text": "수동적 공격·기밀성"
      },
      {
        "number": 4,
        "text": "능동적 공격·부인방지"
      }
    ],
    "answer": 1,
    "explanation": "서비스 거부는 시스템 이용을 방해하므로 능동적 공격이며 가용성을 해친다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q010",
    "partId": 2,
    "sectionId": 2,
    "sectionTitle": "암호학 개요",
    "sourceSection": "SECTION 01 암호학 개요",
    "question": "스트림 암호 설명에서 평문 비트와 키 스트림을 XOR해 암호문을 만든다. 같은 위치의 평문 비트를 되찾는 연산은?",
    "options": [
      {
        "number": 1,
        "text": "암호문 OR 키 스트림"
      },
      {
        "number": 2,
        "text": "암호문 XOR 키 스트림"
      },
      {
        "number": 3,
        "text": "암호문 AND 키 스트림"
      },
      {
        "number": 4,
        "text": "키 스트림 NOT"
      }
    ],
    "answer": 2,
    "explanation": "같은 값과 XOR를 두 번 하면 원래 값으로 돌아온다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q011",
    "partId": 2,
    "sectionId": 2,
    "sectionTitle": "암호학 개요",
    "sourceSection": "SECTION 01 암호학 개요",
    "question": "두 이진 수열을 생성하는 데 필요한 최소 선형귀환 시프트 레지스터 길이는 각각 4와 9다. 선형복잡도를 올바르게 비교한 것은?",
    "options": [
      {
        "number": 1,
        "text": "두 수열 모두 4다."
      },
      {
        "number": 2,
        "text": "두 수열 모두 9다."
      },
      {
        "number": 3,
        "text": "첫 수열이 더 높다."
      },
      {
        "number": 4,
        "text": "둘째 수열이 더 높다."
      }
    ],
    "answer": 4,
    "explanation": "선형복잡도는 수열을 생성할 수 있는 가장 짧은 LFSR의 길이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q012",
    "partId": 2,
    "sectionId": 2,
    "sectionTitle": "암호학 개요",
    "sourceSection": "SECTION 01 암호학 개요",
    "question": "회계팀이 계약 승인의 서명 사실을 나중에 입증할 수 있도록 하려 한다. 어떤 기술이 목적에 가장 잘 맞는가?",
    "options": [
      {
        "number": 1,
        "text": "파일 압축"
      },
      {
        "number": 2,
        "text": "백업 일정 등록"
      },
      {
        "number": 3,
        "text": "공개키 전자서명"
      },
      {
        "number": 4,
        "text": "공유 폴더 목록 확인"
      }
    ],
    "answer": 3,
    "explanation": "공개키 전자서명은 검증자가 서명과 계약서의 관계를 확인하도록 해 부인방지를 지원한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q013",
    "partId": 2,
    "sectionId": 2,
    "sectionTitle": "암호학 개요",
    "sourceSection": "SECTION 01 암호학 개요",
    "question": "여러 사람에게 큰 파일을 전달하는 서비스에서 대칭키 암호 대신 공개키 암호로 본문 전체를 처리하려 한다. 공개키 방식의 일반적 장점으로 보기 어려운 것은?",
    "options": [
      {
        "number": 1,
        "text": "본문 대량 암호화의 높은 처리 속도"
      },
      {
        "number": 2,
        "text": "전자서명에 활용할 수 있음"
      },
      {
        "number": 3,
        "text": "개인키를 상대방에게 전달하지 않아도 됨"
      },
      {
        "number": 4,
        "text": "사용자 쌍마다 사전에 비밀키를 교환할 필요를 줄임"
      }
    ],
    "answer": 1,
    "explanation": "공개키 연산은 일반적으로 대칭키 연산보다 느리다. 파일 본문에는 대칭키 암호가 널리 쓰인다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q014",
    "partId": 2,
    "sectionId": 2,
    "sectionTitle": "암호학 개요",
    "sourceSection": "SECTION 01 암호학 개요",
    "question": "보안 감사팀이 암호분석의 목표를 분류한다. 가장 거리가 먼 것은?",
    "options": [
      {
        "number": 1,
        "text": "암호문에서 원문이 드러나는지 평가"
      },
      {
        "number": 2,
        "text": "비밀키가 추정될 수 있는지 평가"
      },
      {
        "number": 3,
        "text": "암호 구조가 보호 강도에 미치는 영향 분석"
      },
      {
        "number": 4,
        "text": "원문을 압축해 저장 용량 절감"
      }
    ],
    "answer": 4,
    "explanation": "암호분석은 키나 평문을 알아낼 가능성 등 보호의 약점을 다룬다. 압축은 데이터 표현 크기를 줄이는 작업이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q015",
    "partId": 2,
    "sectionId": 2,
    "sectionTitle": "암호학 개요",
    "sourceSection": "SECTION 01 암호학 개요",
    "question": "암호분석의 가정에서 분석자는 이미 주어진 평문과 그에 대응하는 암호문을 가지고 있다. 입력을 직접 고를 수 없다면 어떤 모델인가?",
    "options": [
      {
        "number": 1,
        "text": "암호문 단독"
      },
      {
        "number": 2,
        "text": "알려진 평문"
      },
      {
        "number": 3,
        "text": "선택 평문"
      },
      {
        "number": 4,
        "text": "선택 암호문"
      }
    ],
    "answer": 2,
    "explanation": "알려진 평문 모델은 기존의 평문·암호문 쌍을 가정한다. 평문을 직접 골라 결과를 받는 모델과 구별된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q016",
    "partId": 2,
    "sectionId": 2,
    "sectionTitle": "암호학 개요",
    "sourceSection": "SECTION 01 암호학 개요",
    "question": "암호 방식의 보안성을 비교하는 이론 모델에서 분석자가 복호화에 제공할 입력을 직접 선택할 수 있다고 가정한다. 이 모델의 분류는?",
    "options": [
      {
        "number": 1,
        "text": "알려진 평문"
      },
      {
        "number": 2,
        "text": "선택 평문"
      },
      {
        "number": 3,
        "text": "선택 암호문"
      },
      {
        "number": 4,
        "text": "암호문 단독"
      }
    ],
    "answer": 3,
    "explanation": "선택 암호문 모델에서는 분석자가 복호화할 암호문을 선택할 수 있다고 가정한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q017",
    "partId": 2,
    "sectionId": 2,
    "sectionTitle": "암호학 개요",
    "sourceSection": "SECTION 01 암호학 개요",
    "question": "두 사람이 메시지와 같은 길이의 균일한 무작위 키를 몰래 공유하고 메시지 하나에만 사용했다. 이 조건에서 정보이론적 기밀성을 설명하는 방식은?",
    "options": [
      {
        "number": 1,
        "text": "일회용 패드"
      },
      {
        "number": 2,
        "text": "고정 치환 암호"
      },
      {
        "number": 3,
        "text": "공개 해시"
      },
      {
        "number": 4,
        "text": "반복 키 암호"
      }
    ],
    "answer": 1,
    "explanation": "일회용 패드는 메시지 길이의 균일한 비밀키를 한 번만 쓸 때 완전 비밀성을 제공한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q018",
    "partId": 2,
    "sectionId": 2,
    "sectionTitle": "암호학 개요",
    "sourceSection": "SECTION 01 암호학 개요",
    "question": "공공기관 제품 도입 검토에서 제품에 포함된 암호모듈의 구현 적합성과 안전성을 별도로 확인하려 한다. 관련 제도는?",
    "options": [
      {
        "number": 1,
        "text": "개인정보 영향평가"
      },
      {
        "number": 2,
        "text": "암호모듈 검증(KCMVP)"
      },
      {
        "number": 3,
        "text": "정보보호 교육 인증"
      },
      {
        "number": 4,
        "text": "서비스 이용약관 심사"
      }
    ],
    "answer": 2,
    "explanation": "암호모듈 검증은 암호모듈이 요구되는 보안 기준과 구현 요건을 충족하는지 평가한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q019",
    "partId": 2,
    "sectionId": 2,
    "sectionTitle": "암호학 개요",
    "sourceSection": "SECTION 01 암호학 개요",
    "question": "파일이 평범한 풍경 사진처럼 보이지만 사진에 다른 메시지의 존재를 숨기는 기술을 설명한다. 무엇인가?",
    "options": [
      {
        "number": 1,
        "text": "전자서명"
      },
      {
        "number": 2,
        "text": "자료 압축"
      },
      {
        "number": 3,
        "text": "파일 무결성 검사"
      },
      {
        "number": 4,
        "text": "스테가노그래피"
      }
    ],
    "answer": 4,
    "explanation": "스테가노그래피는 이미지나 음원 같은 매체에 메시지를 숨겨 메시지의 존재를 드러내지 않는 데 초점을 둔다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q020",
    "partId": 2,
    "sectionId": 2,
    "sectionTitle": "암호학 개요",
    "sourceSection": "SECTION 01 암호학 개요",
    "question": "온라인 강의 판매자가 결제한 계정에만 재생을 허용하고 대여 기간이 끝나면 접근을 막으려 한다. 가장 관련 있는 기술은?",
    "options": [
      {
        "number": 1,
        "text": "RAID"
      },
      {
        "number": 2,
        "text": "SSO"
      },
      {
        "number": 3,
        "text": "DRM"
      },
      {
        "number": 4,
        "text": "DNS"
      }
    ],
    "answer": 3,
    "explanation": "DRM은 디지털 콘텐츠의 재생, 복제, 사용 기간 같은 이용 조건을 제어한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q021",
    "partId": 2,
    "sectionId": 2,
    "sectionTitle": "암호학 개요",
    "sourceSection": "SECTION 01 암호학 개요",
    "question": "전자책 판매팀이 불법 복제 방지 및 유출 추적 대책을 검토한다. 이 목적과 가장 거리가 먼 용어는?",
    "options": [
      {
        "number": 1,
        "text": "워터마킹"
      },
      {
        "number": 2,
        "text": "워터링홀"
      },
      {
        "number": 3,
        "text": "구매본별 핑거프린팅"
      },
      {
        "number": 4,
        "text": "변조 방지"
      }
    ],
    "answer": 2,
    "explanation": "워터링홀은 표적 집단이 자주 방문하는 사이트와 관련된 공격 유형이다. 콘텐츠 이용 제어나 유출 추적 기술이 아니다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q022",
    "partId": 2,
    "sectionId": 2,
    "sectionTitle": "암호학 개요",
    "sourceSection": "SECTION 01 암호학 개요",
    "question": "디지털 도서 파일에 제목, 저작권자, 콘텐츠 식별자와 같은 항목이 연결되어 있다. 이 정보 묶음은?",
    "options": [
      {
        "number": 1,
        "text": "콘텐츠 암호키"
      },
      {
        "number": 2,
        "text": "실행 제어 프로그램"
      },
      {
        "number": 3,
        "text": "결제 중개 서버"
      },
      {
        "number": 4,
        "text": "메타데이터"
      }
    ],
    "answer": 4,
    "explanation": "메타데이터는 콘텐츠의 식별·관리 등에 쓰이는 속성 정보를 뜻한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q023",
    "partId": 2,
    "sectionId": 2,
    "sectionTitle": "암호학 개요",
    "sourceSection": "SECTION 01 암호학 개요",
    "question": "콘텐츠 유통 과정에서 판매 기록과 이용권 거래를 모으고 권리자에게 돌아갈 금액을 정산하는 DRM 구성요소는?",
    "options": [
      {
        "number": 1,
        "text": "클리어링 하우스"
      },
      {
        "number": 2,
        "text": "미디어 재생기"
      },
      {
        "number": 3,
        "text": "콘텐츠 메타데이터"
      },
      {
        "number": 4,
        "text": "보안 컨테이너"
      }
    ],
    "answer": 1,
    "explanation": "클리어링 하우스는 이용권 거래를 중개하고 저작권료 정산과 분배를 지원한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q024",
    "partId": 2,
    "sectionId": 2,
    "sectionTitle": "암호학 개요",
    "sourceSection": "SECTION 01 암호학 개요",
    "question": "영상 업체가 구매자마다 다른 식별 정보를 받은 영상에 넣었다. 유출된 사본이 발견됐을 때 그 사본의 배포 경로를 확인하려는 기술은?",
    "options": [
      {
        "number": 1,
        "text": "접근제어 목록"
      },
      {
        "number": 2,
        "text": "파일 압축"
      },
      {
        "number": 3,
        "text": "디지털 핑거프린팅"
      },
      {
        "number": 4,
        "text": "공개키 인증서"
      }
    ],
    "answer": 3,
    "explanation": "판매본별로 구별되는 표식을 넣으면 유출본이 어떤 구매본과 연결되는지 조사할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q025",
    "partId": 2,
    "sectionId": 3,
    "sectionTitle": "대칭키 암호",
    "sourceSection": "SECTION 02 대칭키 암호",
    "question": "알파벳마다 하나의 다른 문자를 고정해 바꾸는 단일 치환 암호에서는 어떤 통계적 특징이 유지되는가?",
    "options": [
      {
        "number": 1,
        "text": "원문과 암호문의 글자가 모두 같다."
      },
      {
        "number": 2,
        "text": "원문에서 자주 나오는 글자는 대응하는 암호문 글자도 자주 나온다."
      },
      {
        "number": 3,
        "text": "모든 암호문 글자의 출현 횟수가 같아진다."
      },
      {
        "number": 4,
        "text": "같은 원문 글자는 위치마다 반드시 다른 글자로 바뀐다."
      }
    ],
    "answer": 2,
    "explanation": "고정된 일대일 치환은 글자 이름만 바꾼다. 따라서 대응 글자의 출현 빈도는 유지된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q026",
    "partId": 2,
    "sectionId": 3,
    "sectionTitle": "대칭키 암호",
    "sourceSection": "SECTION 02 대칭키 암호",
    "question": "암호 설계자가 평문의 한 비트 변화가 여러 암호문 비트에 영향을 주도록 블록 전체에 변화를 퍼뜨렸다. 이 설계 원리는 무엇인가?",
    "options": [
      {
        "number": 1,
        "text": "확산"
      },
      {
        "number": 2,
        "text": "압축"
      },
      {
        "number": 3,
        "text": "인증"
      },
      {
        "number": 4,
        "text": "인코딩"
      }
    ],
    "answer": 1,
    "explanation": "확산은 평문의 통계적 특성이나 작은 변화를 암호문의 여러 부분에 분산하는 원리다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q027",
    "partId": 2,
    "sectionId": 3,
    "sectionTitle": "대칭키 암호",
    "sourceSection": "SECTION 02 대칭키 암호",
    "question": "국내 표준 블록 암호를 분류하고 있다. 128비트 블록을 처리하고 128·192·256비트 키를 지원하며 KS X 1213-1에 규정된 것은?",
    "options": [
      {
        "number": 1,
        "text": "SEED"
      },
      {
        "number": 2,
        "text": "HIGHT"
      },
      {
        "number": 3,
        "text": "DES"
      },
      {
        "number": 4,
        "text": "ARIA"
      }
    ],
    "answer": 4,
    "explanation": "KS X 1213-1에 해당하는 알고리즘은 ARIA다. ARIA는 128비트 블록과 세 가지 키 길이를 지원한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q028",
    "partId": 2,
    "sectionId": 3,
    "sectionTitle": "대칭키 암호",
    "sourceSection": "SECTION 02 대칭키 암호",
    "question": "암호 알고리즘 목록에 세 항목을 기록한다. (가) NIST가 Rijndael을 기반으로 표준화한 암호, (나) 128비트 블록과 128비트 키를 사용하는 국내 암호, (다) 128비트 블록과 128·192·256비트 키를 지원하는 국내 암호의 순서로 알맞은 것은?",
    "options": [
      {
        "number": 1,
        "text": "ARIA·SEED·AES"
      },
      {
        "number": 2,
        "text": "SEED·ARIA·AES"
      },
      {
        "number": 3,
        "text": "AES·SEED·ARIA"
      },
      {
        "number": 4,
        "text": "AES·ARIA·SEED"
      }
    ],
    "answer": 3,
    "explanation": "Rijndael을 바탕으로 한 표준은 AES다. 제시된 국내 암호의 조건은 각각 SEED와 ARIA에 해당한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q029",
    "partId": 2,
    "sectionId": 3,
    "sectionTitle": "대칭키 암호",
    "sourceSection": "SECTION 02 대칭키 암호",
    "question": "AES 구현의 라운드 수를 검사한다. 키 길이를 128비트에서 256비트로 변경하면 라운드 수는 어떻게 바뀌는가?",
    "options": [
      {
        "number": 1,
        "text": "10에서 12로"
      },
      {
        "number": 2,
        "text": "10에서 14로"
      },
      {
        "number": 3,
        "text": "12에서 14로"
      },
      {
        "number": 4,
        "text": "14에서 16으로"
      }
    ],
    "answer": 2,
    "explanation": "AES의 라운드 수는 키 길이 128·192·256비트에 각각 10·12·14다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q030",
    "partId": 2,
    "sectionId": 3,
    "sectionTitle": "대칭키 암호",
    "sourceSection": "SECTION 02 대칭키 암호",
    "question": "블록 암호의 분석법을 분류한다. 두 입력 사이의 차이가 출력 차이의 분포에 미치는 영향을 연구하는 방법은?",
    "options": [
      {
        "number": 1,
        "text": "차분 암호분석"
      },
      {
        "number": 2,
        "text": "선형 암호분석"
      },
      {
        "number": 3,
        "text": "키 전수 탐색"
      },
      {
        "number": 4,
        "text": "빈도에 기반한 단일 문자 분석"
      }
    ],
    "answer": 1,
    "explanation": "차분 암호분석은 입력 차이와 출력 차이 사이의 통계적 관계에 주목한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q031",
    "partId": 2,
    "sectionId": 3,
    "sectionTitle": "대칭키 암호",
    "sourceSection": "SECTION 02 대칭키 암호",
    "question": "아래에서 앞의 두 알고리즘은 대칭키 블록 암호이고 뒤의 두 알고리즘은 공개키 암호 계열인 조합은?",
    "options": [
      {
        "number": 1,
        "text": "RSA·DES / AES·Rabin"
      },
      {
        "number": 2,
        "text": "AES·RSA / DES·Rabin"
      },
      {
        "number": 3,
        "text": "AES·DES / RSA·Rabin"
      },
      {
        "number": 4,
        "text": "DES·Rabin / RSA·AES"
      }
    ],
    "answer": 3,
    "explanation": "AES와 DES는 대칭키 블록 암호이고, RSA와 Rabin은 공개키 암호 계열이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q032",
    "partId": 2,
    "sectionId": 3,
    "sectionTitle": "대칭키 암호",
    "sourceSection": "SECTION 02 대칭키 암호",
    "question": "일회용 패드가 완전 비밀성을 제공하는 조건을 충족하는 것은?",
    "options": [
      {
        "number": 1,
        "text": "짧은 키를 메시지 전체에 반복한다."
      },
      {
        "number": 2,
        "text": "공개된 난수열을 키로 사용한다."
      },
      {
        "number": 3,
        "text": "서로 다른 메시지에 같은 비밀키를 재사용한다."
      },
      {
        "number": 4,
        "text": "메시지와 같은 길이의 균일한 무작위 비밀키를 한 번만 사용한다."
      }
    ],
    "answer": 4,
    "explanation": "일회용 패드는 평문과 같은 길이의 균일한 비밀키를 재사용하지 않을 때 완전 비밀성을 제공한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q033",
    "partId": 2,
    "sectionId": 3,
    "sectionTitle": "대칭키 암호",
    "sourceSection": "SECTION 02 대칭키 암호",
    "question": "같은 키 아래 동일한 평문 블록 두 개가 서로 다른 위치에서도 같은 암호문 블록으로 나타난다. 블록을 독립적으로 암호화하는 이 운영 모드는?",
    "options": [
      {
        "number": 1,
        "text": "ECB"
      },
      {
        "number": 2,
        "text": "CBC"
      },
      {
        "number": 3,
        "text": "CFB"
      },
      {
        "number": 4,
        "text": "OFB"
      }
    ],
    "answer": 1,
    "explanation": "ECB는 위치나 이전 블록을 반영하지 않고 각 블록을 독립적으로 처리하므로 같은 입력 블록에서 같은 결과가 나온다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q034",
    "partId": 2,
    "sectionId": 3,
    "sectionTitle": "대칭키 암호",
    "sourceSection": "SECTION 02 대칭키 암호",
    "question": "CBC로 첫 블록을 처리하려는데 이전 암호문 블록이 없다. 첫 평문 블록과 XOR하는 값은?",
    "options": [
      {
        "number": 1,
        "text": "다음 평문 블록"
      },
      {
        "number": 2,
        "text": "초기화 벡터(IV)"
      },
      {
        "number": 3,
        "text": "암호키의 길이"
      },
      {
        "number": 4,
        "text": "최종 암호문 블록"
      }
    ],
    "answer": 2,
    "explanation": "CBC는 첫 블록에 IV를 사용하고, 이후 블록에는 바로 앞의 암호문 블록을 사용한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q035",
    "partId": 2,
    "sectionId": 3,
    "sectionTitle": "대칭키 암호",
    "sourceSection": "SECTION 02 대칭키 암호",
    "question": "블록 암호 모드의 설계도에서 각 평문 블록에 직전 암호문 블록을 XOR한 뒤 결과를 블록 암호에 넣는다. 어느 모드인가?",
    "options": [
      {
        "number": 1,
        "text": "CTR"
      },
      {
        "number": 2,
        "text": "ECB"
      },
      {
        "number": 3,
        "text": "OFB"
      },
      {
        "number": 4,
        "text": "CBC"
      }
    ],
    "answer": 4,
    "explanation": "CBC는 직전 암호문과 현재 평문을 XOR한 값을 암호화해 블록 사이에 연결을 만든다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q036",
    "partId": 2,
    "sectionId": 3,
    "sectionTitle": "대칭키 암호",
    "sourceSection": "SECTION 02 대칭키 암호",
    "question": "블록 단위 CBC 복호화에서 중간 암호문 블록 하나의 비트가 뒤집혔다. 나머지 암호문과 IV가 정상이라면 평문에는 어떤 영향이 있는가?",
    "options": [
      {
        "number": 1,
        "text": "모든 이후 평문 블록이 잘못된다."
      },
      {
        "number": 2,
        "text": "해당 평문 블록의 한 비트만 뒤집힌다."
      },
      {
        "number": 3,
        "text": "해당 평문 블록이 손상되고 다음 평문 블록의 같은 위치 비트가 뒤집힌다."
      },
      {
        "number": 4,
        "text": "이전 평문 블록만 손상된다."
      }
    ],
    "answer": 3,
    "explanation": "손상된 암호문은 자기 블록의 복호화 결과를 바꾸고, 다음 블록과 XOR할 때 해당 위치의 비트를 뒤집는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q037",
    "partId": 2,
    "sectionId": 3,
    "sectionTitle": "대칭키 암호",
    "sourceSection": "SECTION 02 대칭키 암호",
    "question": "CBC에서 두 번째 평문 블록을 복원하려 한다. 두 번째 암호문 블록을 블록 암호로 복호화한 결과에 XOR할 값은?",
    "options": [
      {
        "number": 1,
        "text": "첫 번째 암호문 블록"
      },
      {
        "number": 2,
        "text": "첫 번째 평문 블록"
      },
      {
        "number": 3,
        "text": "두 번째 암호문 블록"
      },
      {
        "number": 4,
        "text": "초기화 벡터(IV)"
      }
    ],
    "answer": 1,
    "explanation": "CBC 복호화에서 두 번째 이후 블록은 현재 암호문 블록의 복호화 결과와 직전 암호문 블록을 XOR해 평문을 얻는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q038",
    "partId": 2,
    "sectionId": 3,
    "sectionTitle": "대칭키 암호",
    "sourceSection": "SECTION 02 대칭키 암호",
    "question": "블록 전체를 단위로 처리하는 모드에서 직전 암호문 블록을 먼저 암호화하고, 그 출력과 현재 평문 블록을 XOR해 새 암호문을 만든다. 어느 모드인가?",
    "options": [
      {
        "number": 1,
        "text": "OFB"
      },
      {
        "number": 2,
        "text": "CFB"
      },
      {
        "number": 3,
        "text": "CBC"
      },
      {
        "number": 4,
        "text": "ECB"
      }
    ],
    "answer": 2,
    "explanation": "CFB는 직전 암호문을 다음 암호 연산의 입력으로 되돌려 쓴다. OFB는 암호문 대신 직전 암호 연산의 출력을 되돌려 쓴다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q039",
    "partId": 2,
    "sectionId": 3,
    "sectionTitle": "대칭키 암호",
    "sourceSection": "SECTION 02 대칭키 암호",
    "question": "CTR 모드에서 블록별 키 스트림의 생성에 필요한 입력은?",
    "options": [
      {
        "number": 1,
        "text": "직전 평문 블록"
      },
      {
        "number": 2,
        "text": "직전 암호문 블록"
      },
      {
        "number": 3,
        "text": "현재 평문 블록의 해시"
      },
      {
        "number": 4,
        "text": "해당 블록에 대응하는 카운터 블록"
      }
    ],
    "answer": 4,
    "explanation": "CTR은 카운터 블록을 암호화해 키 스트림을 만든다. 그래서 이전 암호문을 기다리지 않고 블록을 처리할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q040",
    "partId": 2,
    "sectionId": 3,
    "sectionTitle": "대칭키 암호",
    "sourceSection": "SECTION 02 대칭키 암호",
    "question": "CTR로 전송한 암호문에서 비트 한 개만 반전됐다. 송신·수신의 키 스트림은 같고 데이터 길이도 그대로다. 복호화한 결과는?",
    "options": [
      {
        "number": 1,
        "text": "같은 위치의 평문 비트 하나만 반전된다."
      },
      {
        "number": 2,
        "text": "해당 평문 블록 전체가 영향을 받는다."
      },
      {
        "number": 3,
        "text": "해당 블록과 다음 블록 전체가 영향을 받는다."
      },
      {
        "number": 4,
        "text": "오류 없이 원본과 완전히 일치한다."
      }
    ],
    "answer": 1,
    "explanation": "CTR 복호화는 암호문과 키 스트림을 XOR한다. 키 스트림이 변하지 않으면 암호문의 비트 오류는 같은 위치의 평문 비트에만 반영된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q041",
    "partId": 2,
    "sectionId": 3,
    "sectionTitle": "대칭키 암호",
    "sourceSection": "SECTION 02 대칭키 암호",
    "question": "블록 암호의 출력으로 키 스트림을 만들어 평문과 XOR하는 모드로만 구성된 조합은?",
    "options": [
      {
        "number": 1,
        "text": "ECB·CFB·OFB"
      },
      {
        "number": 2,
        "text": "CBC·CFB·CTR"
      },
      {
        "number": 3,
        "text": "CFB·OFB·CTR"
      },
      {
        "number": 4,
        "text": "ECB·CBC·OFB"
      }
    ],
    "answer": 3,
    "explanation": "CFB·OFB·CTR은 블록 암호 출력을 평문과 XOR한다. ECB와 CBC는 이와 같은 키 스트림 방식에 해당하지 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q042",
    "partId": 2,
    "sectionId": 4,
    "sectionTitle": "비대칭키 암호",
    "sourceSection": "SECTION 03 비대칭키 암호",
    "question": "협력사가 사전에 비밀키를 공유하지 않은 상태에서 문서를 보내려 한다. 공개키 암호를 도입하더라도 별도의 운영 대책이 필요한 목표는?",
    "options": [
      {
        "number": 1,
        "text": "수신자의 공개키를 이용한 암호화"
      },
      {
        "number": 2,
        "text": "검증 가능한 전자서명 생성"
      },
      {
        "number": 3,
        "text": "개인키를 상대방에게 전달하지 않는 키 관리"
      },
      {
        "number": 4,
        "text": "서버가 정전 중에도 계속 응답하도록 보장"
      }
    ],
    "answer": 4,
    "explanation": "공개키 암호는 암호화와 서명 등에 활용된다. 정전 중 서비스 가용성은 이중화나 전원 대책으로 확보한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q043",
    "partId": 2,
    "sectionId": 4,
    "sectionTitle": "비대칭키 암호",
    "sourceSection": "SECTION 03 비대칭키 암호",
    "question": "두 사업장이 대칭키로 통신하려 한다. 다음 중 그 대칭키를 안전하게 공유하는 방법이 아닌 것은?",
    "options": [
      {
        "number": 1,
        "text": "신뢰하는 키 분배 센터를 이용한다."
      },
      {
        "number": 2,
        "text": "서로 인증된 키 합의로 공통 키를 도출한다."
      },
      {
        "number": 3,
        "text": "대칭키의 해시값만 보내고 상대가 해시에서 원래 키를 복원하도록 한다."
      },
      {
        "number": 4,
        "text": "수신자의 검증된 공개키로 대칭키를 보호해 전달한다."
      }
    ],
    "answer": 3,
    "explanation": "일방향 해시는 원래 키를 되찾는 데 쓰는 방식이 아니다. 해시값만 보내서는 상대가 기존 키를 복원할 수 없다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q044",
    "partId": 2,
    "sectionId": 4,
    "sectionTitle": "비대칭키 암호",
    "sourceSection": "SECTION 03 비대칭키 암호",
    "question": "사내 시스템의 키 분배 센터(KDC)가 두 단말에 통신용 키를 제공한다. 옳은 설명은?",
    "options": [
      {
        "number": 1,
        "text": "각 단말은 KDC와 장기 키를 공유하고, 두 단말은 발급된 세션키를 통신에 사용한다."
      },
      {
        "number": 2,
        "text": "두 단말은 반드시 같은 장기 키를 KDC와 공유해야 한다."
      },
      {
        "number": 3,
        "text": "세션키는 모든 단말이 볼 수 있도록 평문으로 게시해야 한다."
      },
      {
        "number": 4,
        "text": "세션키와 장기 키는 항상 같은 값이어야 한다."
      }
    ],
    "answer": 1,
    "explanation": "이 방식에서 각 단말은 KDC와 장기 키를 공유한다. KDC가 제공하는 세션키는 통신에 사용하는 별도의 키다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q045",
    "partId": 2,
    "sectionId": 4,
    "sectionTitle": "비대칭키 암호",
    "sourceSection": "SECTION 03 비대칭키 암호",
    "question": "신규 직원이 공개키 암호 시스템의 키 목록을 보고 있다. 한 사용자의 키 쌍을 관리하는 올바른 방식은?",
    "options": [
      {
        "number": 1,
        "text": "두 키를 모두 공개 게시판에 올린다."
      },
      {
        "number": 2,
        "text": "두 키를 같은 값으로 설정한다."
      },
      {
        "number": 3,
        "text": "공개키는 배포하되 소유자를 확인할 수 있게 하고, 개인키는 보호한다."
      },
      {
        "number": 4,
        "text": "개인키만 공개하고 공개키는 소유자만 보관한다."
      }
    ],
    "answer": 3,
    "explanation": "공개키는 배포할 수 있지만 올바른 소유자의 키인지 확인해야 한다. 개인키는 소유자가 안전하게 관리한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q046",
    "partId": 2,
    "sectionId": 4,
    "sectionTitle": "비대칭키 암호",
    "sourceSection": "SECTION 03 비대칭키 암호",
    "question": "두 단말이 유한체에서 계산한 공개값을 교환한 뒤, 각자의 비밀값을 이용해 같은 값을 계산한다. 공유할 비밀값 자체는 전송하지 않는다. 어떤 방식인가?",
    "options": [
      {
        "number": 1,
        "text": "RSA 서명"
      },
      {
        "number": 2,
        "text": "유한체 디피–헬먼 키 합의"
      },
      {
        "number": 3,
        "text": "AES 블록 암호"
      },
      {
        "number": 4,
        "text": "SHA-256 해시"
      }
    ],
    "answer": 2,
    "explanation": "유한체 디피–헬먼은 각자의 비밀 지수와 상대의 공개값으로 공통 비밀을 계산하는 방식이다. 기본 방식 자체는 상대 인증을 제공하지 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q047",
    "partId": 2,
    "sectionId": 4,
    "sectionTitle": "비대칭키 암호",
    "sourceSection": "SECTION 03 비대칭키 암호",
    "question": "팀이 기본 디피–헬먼만 적용하면 상대의 신원도 자동으로 확인된다고 생각한다. 이 주장에 대한 평가는?",
    "options": [
      {
        "number": 1,
        "text": "기본 키 합의만으로는 신원을 확인할 수 없으므로 별도 인증이 필요하다."
      },
      {
        "number": 2,
        "text": "공개 파라미터를 쓰면 상대의 회사명이 자동으로 검증된다."
      },
      {
        "number": 3,
        "text": "공통 키가 계산되면 상대의 신원도 반드시 검증된 것이다."
      },
      {
        "number": 4,
        "text": "키 길이를 늘리면 별도 상대 인증을 대신할 수 있다."
      }
    ],
    "answer": 1,
    "explanation": "키 합의와 상대 인증은 서로 다른 기능이다. 기본 디피–헬먼은 공개값의 소유자가 누구인지 확인해 주지 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q048",
    "partId": 2,
    "sectionId": 4,
    "sectionTitle": "비대칭키 암호",
    "sourceSection": "SECTION 03 비대칭키 암호",
    "question": "유한체 디피–헬먼에서 공개 파라미터가 소수 p와 생성원 g다. 사용자가 비밀 지수 x를 골랐다면 공개할 값은?",
    "options": [
      {
        "number": 1,
        "text": "x"
      },
      {
        "number": 2,
        "text": "g+x"
      },
      {
        "number": 3,
        "text": "g·x"
      },
      {
        "number": 4,
        "text": "g의 x제곱을 p로 나눈 나머지"
      }
    ],
    "answer": 4,
    "explanation": "공개값은 g^x mod p다. 지수 x는 비밀로 유지한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q049",
    "partId": 2,
    "sectionId": 4,
    "sectionTitle": "비대칭키 암호",
    "sourceSection": "SECTION 03 비대칭키 암호",
    "question": "유한체 디피–헬먼 계산 연습에서 소수 p=23, 생성원 g=5, 두 사람의 비밀 지수는 각각 2와 3이다. 공통 비밀값은?",
    "options": [
      {
        "number": 1,
        "text": "2"
      },
      {
        "number": 2,
        "text": "8"
      },
      {
        "number": 3,
        "text": "16"
      },
      {
        "number": 4,
        "text": "10"
      }
    ],
    "answer": 2,
    "explanation": "공통 비밀은 5^(2×3) mod 23이다. 5² mod 23이 2이므로 2³ mod 23은 8이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q050",
    "partId": 2,
    "sectionId": 4,
    "sectionTitle": "비대칭키 암호",
    "sourceSection": "SECTION 03 비대칭키 암호",
    "question": "세 설계안을 분류한다. (가) 중앙 서버가 세션키를 생성해 배포, (나) 두 단말이 공개값을 교환하고 각자 공통 비밀 계산, (다) 한쪽이 만든 세션키를 상대 공개키로 암호화해 전달. 순서대로 알맞은 것은?",
    "options": [
      {
        "number": 1,
        "text": "KDC 방식·디피–헬먼 키 합의·공개키 기반 키 운반"
      },
      {
        "number": 2,
        "text": "디피–헬먼 키 합의·KDC 방식·공개키 기반 키 운반"
      },
      {
        "number": 3,
        "text": "공개키 기반 키 운반·디피–헬먼 키 합의·KDC 방식"
      },
      {
        "number": 4,
        "text": "KDC 방식·공개키 기반 키 운반·디피–헬먼 키 합의"
      }
    ],
    "answer": 1,
    "explanation": "중앙에서 만들어 주는 것은 KDC 방식이다. 두 당사자가 계산하는 것은 키 합의, 이미 생성한 키를 보호해 보내는 것은 키 운반이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q051",
    "partId": 2,
    "sectionId": 4,
    "sectionTitle": "비대칭키 암호",
    "sourceSection": "SECTION 03 비대칭키 암호",
    "question": "A가 임의로 만든 세션키를 RSA 암호화로 B에게 전달한다. B의 공개키가 검증돼 있다면 올바른 키 사용 순서는?",
    "options": [
      {
        "number": 1,
        "text": "A의 공개키로 암호화하고 B의 개인키로 복호화"
      },
      {
        "number": 2,
        "text": "B의 개인키로 암호화하고 A의 공개키로 복호화"
      },
      {
        "number": 3,
        "text": "B의 공개키로 암호화하고 B의 개인키로 복호화"
      },
      {
        "number": 4,
        "text": "B의 공개키로 암호화하고 A의 개인키로 복호화"
      }
    ],
    "answer": 3,
    "explanation": "수신자 B의 공개키로 암호화한 세션키는 대응하는 B의 개인키로 복호화한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q052",
    "partId": 2,
    "sectionId": 4,
    "sectionTitle": "비대칭키 암호",
    "sourceSection": "SECTION 03 비대칭키 암호",
    "question": "B가 먼저 세션키를 만들고 A에게 전달하는 상황에서 이미 A의 검증된 공개키를 받았다. B가 A의 개인키를 받지 않고 세션키를 보낼 방법은?",
    "options": [
      {
        "number": 1,
        "text": "세션키를 B의 공개키로 암호화한다."
      },
      {
        "number": 2,
        "text": "A의 공개키로 세션키를 암호화해 보내고 A가 자신의 개인키로 복호화한다."
      },
      {
        "number": 3,
        "text": "세션키와 A의 공개키를 모두 평문으로 보낸다."
      },
      {
        "number": 4,
        "text": "A의 공개키로 세션키를 복호화한 뒤 그 결과를 보낸다."
      }
    ],
    "answer": 2,
    "explanation": "암호화에 필요한 것은 수신자 A의 공개키다. 개인키는 A가 보관하고 복호화할 때만 사용한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q053",
    "partId": 2,
    "sectionId": 4,
    "sectionTitle": "비대칭키 암호",
    "sourceSection": "SECTION 03 비대칭키 암호",
    "question": "RSA 기반 키 운반에서 받은 공개키가 정말 수신자의 것인지 확인하려 한다. 어떤 조치가 직접 도움이 되는가?",
    "options": [
      {
        "number": 1,
        "text": "공개키의 길이만 확인한다."
      },
      {
        "number": 2,
        "text": "전송할 세션키를 여러 번 재사용한다."
      },
      {
        "number": 3,
        "text": "수신자의 개인키를 요청해 비교한다."
      },
      {
        "number": 4,
        "text": "신뢰하는 경로로 인증서를 검증하고 공개키와 수신자 신원의 연결을 확인한다."
      }
    ],
    "answer": 4,
    "explanation": "공개키가 교체되면 의도한 수신자에게만 키를 전달한다는 보장이 깨진다. 인증서는 검증 과정에서 공개키와 신원을 연결하는 근거가 된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q054",
    "partId": 2,
    "sectionId": 4,
    "sectionTitle": "비대칭키 암호",
    "sourceSection": "SECTION 03 비대칭키 암호",
    "question": "RSA 모듈러스가 서로 다른 큰 소수 p와 q의 곱이라면, 소인수분해 문제에서 주어진 값과 구해야 할 값은?",
    "options": [
      {
        "number": 1,
        "text": "p와 q가 주어지고 두 수의 합을 구한다."
      },
      {
        "number": 2,
        "text": "모듈러스가 주어지고 소수 p와 q를 구한다."
      },
      {
        "number": 3,
        "text": "모듈러스가 주어지고 세션키의 길이를 구한다."
      },
      {
        "number": 4,
        "text": "p가 주어지고 같은 비트 길이의 아무 소수나 구한다."
      }
    ],
    "answer": 2,
    "explanation": "RSA 모듈러스 n은 p×q다. 소인수분해 문제는 n으로부터 그 소인수 p와 q를 찾는 문제다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q055",
    "partId": 2,
    "sectionId": 4,
    "sectionTitle": "비대칭키 암호",
    "sourceSection": "SECTION 03 비대칭키 암호",
    "question": "A가 문서 내용을 B만 읽도록 공개키 암호화하려 한다. A는 암호화에 어느 키를 쓰고 B는 복호화에 어느 키를 쓰는가?",
    "options": [
      {
        "number": 1,
        "text": "A의 개인키·A의 공개키"
      },
      {
        "number": 2,
        "text": "A의 공개키·B의 개인키"
      },
      {
        "number": 3,
        "text": "B의 공개키·B의 개인키"
      },
      {
        "number": 4,
        "text": "B의 공개키·A의 개인키"
      }
    ],
    "answer": 3,
    "explanation": "기밀성을 위해 수신자인 B의 공개키로 암호화하고, B가 자신의 개인키로 복호화한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q056",
    "partId": 2,
    "sectionId": 4,
    "sectionTitle": "비대칭키 암호",
    "sourceSection": "SECTION 03 비대칭키 암호",
    "question": "교재용 작은 수로 RSA 복호화 식을 연습한다. 모듈러스 n=33, 개인 지수 d=3, 암호문 c=4일 때 c^d mod n은?",
    "options": [
      {
        "number": 1,
        "text": "31"
      },
      {
        "number": 2,
        "text": "4"
      },
      {
        "number": 3,
        "text": "27"
      },
      {
        "number": 4,
        "text": "9"
      }
    ],
    "answer": 1,
    "explanation": "4³은 64이고, 64를 33으로 나눈 나머지는 31이다. 이 수는 계산 연습용이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q057",
    "partId": 2,
    "sectionId": 4,
    "sectionTitle": "비대칭키 암호",
    "sourceSection": "SECTION 03 비대칭키 암호",
    "question": "RSA 키 생성 설명에 n=p×q이고 p와 q는 서로 다른 소수라고 적혀 있다. 이 조건에서 옳은 설명은?",
    "options": [
      {
        "number": 1,
        "text": "n도 반드시 소수다."
      },
      {
        "number": 2,
        "text": "n은 p와 q를 더한 값이다."
      },
      {
        "number": 3,
        "text": "p와 q는 모두 n보다 커야 한다."
      },
      {
        "number": 4,
        "text": "n은 p와 q로 나누어지는 합성수다."
      }
    ],
    "answer": 4,
    "explanation": "두 소수의 곱은 두 소수를 인수로 갖는 합성수다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q058",
    "partId": 2,
    "sectionId": 4,
    "sectionTitle": "비대칭키 암호",
    "sourceSection": "SECTION 03 비대칭키 암호",
    "question": "공개키 방식에서 사용하는 수학적 문제를 정리하고 있다. 바르게 연결된 것은?",
    "options": [
      {
        "number": 1,
        "text": "RSA 모듈러스 분석·소인수분해"
      },
      {
        "number": 2,
        "text": "유한체 디피–헬먼·정렬"
      },
      {
        "number": 3,
        "text": "타원곡선 암호·문자 빈도 계산"
      },
      {
        "number": 4,
        "text": "RSA 모듈러스 분석·최단 경로 탐색"
      }
    ],
    "answer": 1,
    "explanation": "RSA 모듈러스의 소인수분해는 RSA와 관련된 대표적인 수학 문제다. 유한체 디피–헬먼과 타원곡선 방식은 각각 해당 군의 이산로그 문제와 관련된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q059",
    "partId": 2,
    "sectionId": 4,
    "sectionTitle": "비대칭키 암호",
    "sourceSection": "SECTION 03 비대칭키 암호",
    "question": "메모리가 제한된 장치에 공개키 기능을 넣으려 한다. ECC를 검토하는 이유로 타당한 것은?",
    "options": [
      {
        "number": 1,
        "text": "ECC에는 공개키가 존재하지 않는다."
      },
      {
        "number": 2,
        "text": "같은 수준의 보안 강도에서 RSA보다 짧은 키를 사용할 수 있다."
      },
      {
        "number": 3,
        "text": "ECC는 대칭키 블록 암호이기 때문이다."
      },
      {
        "number": 4,
        "text": "키 교환이나 전자서명에 사용할 수 없기 때문이다."
      }
    ],
    "answer": 2,
    "explanation": "ECC는 타원곡선 군에서의 이산로그 문제와 관련된다. 비슷한 수준의 보안 강도에서 일반적으로 RSA보다 짧은 키를 사용한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q060",
    "partId": 2,
    "sectionId": 4,
    "sectionTitle": "비대칭키 암호",
    "sourceSection": "SECTION 03 비대칭키 암호",
    "question": "A가 B에게 계약서를 보내며 두 기능을 원한다. (가) B만 읽기, (나) A가 서명했다는 증거 만들기. 각 기능에 A가 사용할 키는?",
    "options": [
      {
        "number": 1,
        "text": "A의 공개키·B의 개인키"
      },
      {
        "number": 2,
        "text": "B의 개인키·B의 공개키"
      },
      {
        "number": 3,
        "text": "B의 공개키·A의 개인키"
      },
      {
        "number": 4,
        "text": "A의 개인키·A의 공개키"
      }
    ],
    "answer": 3,
    "explanation": "(가)는 수신자 B의 공개키로 암호화하고, (나)는 발신자 A의 개인키로 서명한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q061",
    "partId": 2,
    "sectionId": 4,
    "sectionTitle": "비대칭키 암호",
    "sourceSection": "SECTION 03 비대칭키 암호",
    "question": "대칭키 방식과 공개키 방식을 비교한 설명 중 대칭키 방식의 장점은?",
    "options": [
      {
        "number": 1,
        "text": "통신 당사자가 비밀키를 공유할 필요가 없다."
      },
      {
        "number": 2,
        "text": "공유키만으로 제3자가 검증할 수 있는 전자서명을 만든다."
      },
      {
        "number": 3,
        "text": "각 사용자 쌍의 키 관리 부담이 항상 사라진다."
      },
      {
        "number": 4,
        "text": "대용량 본문을 암호화할 때 일반적으로 처리 속도가 빠르다."
      }
    ],
    "answer": 4,
    "explanation": "대칭키 암호는 대량 데이터에 효율적이다. 다만 당사자 사이의 키 공유와 관리가 필요하다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q062",
    "partId": 2,
    "sectionId": 4,
    "sectionTitle": "비대칭키 암호",
    "sourceSection": "SECTION 03 비대칭키 암호",
    "question": "백업 파일을 수신자에게 보낼 때 공개키 암호화와 대칭키 암호화를 함께 쓴다. 혼합 암호화의 올바른 구성은?",
    "options": [
      {
        "number": 1,
        "text": "세션키로 파일을 암호화하고 수신자의 공개키로 세션키를 보호한다."
      },
      {
        "number": 2,
        "text": "파일과 세션키를 모두 평문으로 보낸다."
      },
      {
        "number": 3,
        "text": "수신자의 개인키를 송신자에게 보내 파일 암호화에 사용한다."
      },
      {
        "number": 4,
        "text": "본문을 암호화하지 않고 세션키만 보호한다."
      }
    ],
    "answer": 1,
    "explanation": "대칭키 방식은 큰 파일을 효율적으로 암호화하고 공개키 방식은 그 파일에 사용한 세션키를 수신자에게 안전하게 전달하는 데 쓰인다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q063",
    "partId": 2,
    "sectionId": 5,
    "sectionTitle": "해시함수와 응용",
    "sourceSection": "SECTION 04 해시함수와 응용",
    "question": "해시 함수의 보안 성질을 평가한다. (가) 해시값 하나가 주어졌을 때 그 값을 내는 입력을 찾기 어렵다. (나) 같은 해시값을 내는 서로 다른 입력 두 개를 찾기 어렵다. 순서대로 맞는 것은?",
    "options": [
      {
        "number": 1,
        "text": "충돌 저항성·역상 저항성"
      },
      {
        "number": 2,
        "text": "역상 저항성·충돌 저항성"
      },
      {
        "number": 3,
        "text": "제2역상 저항성·역상 저항성"
      },
      {
        "number": 4,
        "text": "충돌 저항성·제2역상 저항성"
      }
    ],
    "answer": 2,
    "explanation": "역상 저항성은 주어진 출력에서 입력을 찾기 어렵다는 뜻이다. 충돌 저항성은 입력 두 개를 자유롭게 골라도 같은 출력을 내게 하기 어렵다는 뜻이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q064",
    "partId": 2,
    "sectionId": 5,
    "sectionTitle": "해시함수와 응용",
    "sourceSection": "SECTION 04 해시함수와 응용",
    "question": "배포된 설치 파일 하나가 주어졌다. 그 파일과 내용은 다르지만 SHA-256 값은 같은 파일을 찾기 어려워야 한다. 해당 성질은?",
    "options": [
      {
        "number": 1,
        "text": "출력 길이 고정"
      },
      {
        "number": 2,
        "text": "역상 저항성"
      },
      {
        "number": 3,
        "text": "제2역상 저항성"
      },
      {
        "number": 4,
        "text": "키 교환"
      }
    ],
    "answer": 3,
    "explanation": "입력 하나가 이미 주어졌고 그와 같은 해시값을 내는 다른 입력을 찾는 문제이므로 제2역상 저항성에 해당한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q065",
    "partId": 2,
    "sectionId": 5,
    "sectionTitle": "해시함수와 응용",
    "sourceSection": "SECTION 04 해시함수와 응용",
    "question": "서로 크기가 다른 두 파일에 SHA-256을 한 번씩 적용했다. 출력에 관한 설명으로 옳은 것은?",
    "options": [
      {
        "number": 1,
        "text": "두 출력은 각각 256비트다."
      },
      {
        "number": 2,
        "text": "출력 길이는 각 파일 크기와 같다."
      },
      {
        "number": 3,
        "text": "큰 파일의 해시가 항상 더 길다."
      },
      {
        "number": 4,
        "text": "두 출력은 복호화해서 원본 파일로 되돌릴 수 있다."
      }
    ],
    "answer": 1,
    "explanation": "SHA-256은 입력 길이에 관계없이 256비트 값을 출력한다. 해시는 원문을 복원하는 압축이나 암호화와 목적이 다르다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q066",
    "partId": 2,
    "sectionId": 5,
    "sectionTitle": "해시함수와 응용",
    "sourceSection": "SECTION 04 해시함수와 응용",
    "question": "개발팀이 세 기능을 검토한다. (가) 서명할 문서의 다이제스트 계산, (나) HMAC 인증 태그 계산, (다) 압축한 사진을 원본 그대로 복원. 해시 함수가 설명된 방식으로 사용되는 기능은?",
    "options": [
      {
        "number": 1,
        "text": "(가)만"
      },
      {
        "number": 2,
        "text": "(나)만"
      },
      {
        "number": 3,
        "text": "(가)와 (다)"
      },
      {
        "number": 4,
        "text": "(가)와 (나)"
      }
    ],
    "answer": 4,
    "explanation": "해시는 전자서명용 다이제스트와 HMAC 계산에 쓰인다. 해시값은 사진을 원래대로 복원하는 데 쓰이지 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q067",
    "partId": 2,
    "sectionId": 5,
    "sectionTitle": "해시함수와 응용",
    "sourceSection": "SECTION 04 해시함수와 응용",
    "question": "협력사 두 곳이 공유 비밀키로 발주서에 확인 태그를 붙이려 한다. 수신자는 같은 키로 태그를 다시 계산해 발주서가 바뀌었는지 확인한다. 어떤 방식이 요구에 맞는가?",
    "options": [
      {
        "number": 1,
        "text": "SHA3-256으로 본문 해시 계산"
      },
      {
        "number": 2,
        "text": "HMAC-SHA-256으로 인증 태그 생성"
      },
      {
        "number": 3,
        "text": "CRC-32로 오류 검사용 값 생성"
      },
      {
        "number": 4,
        "text": "SHA-512로 본문 해시 계산"
      }
    ],
    "answer": 2,
    "explanation": "HMAC은 해시 함수와 공유 비밀키를 함께 사용한다. 키 없는 해시나 CRC만으로는 공유키를 가진 쪽에서 만든 메시지인지 확인할 수 없다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q068",
    "partId": 2,
    "sectionId": 5,
    "sectionTitle": "해시함수와 응용",
    "sourceSection": "SECTION 04 해시함수와 응용",
    "question": "오래된 파일 목록에서 MD5 값과 SHA-1 값을 각각 바이트 배열로 읽는다. 두 해시값을 변환하거나 줄이지 않았다면 각 배열의 길이는 몇 바이트인가?",
    "options": [
      {
        "number": 1,
        "text": "MD5 20, SHA-1 16"
      },
      {
        "number": 2,
        "text": "MD5 16, SHA-1 16"
      },
      {
        "number": 3,
        "text": "MD5 64, SHA-1 64"
      },
      {
        "number": 4,
        "text": "MD5 16, SHA-1 20"
      }
    ],
    "answer": 4,
    "explanation": "MD5 출력은 128비트(16바이트), SHA-1 출력은 160비트(20바이트)다. 두 알고리즘의 512비트 입력 처리 단위는 출력 길이와 다르다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q069",
    "partId": 2,
    "sectionId": 5,
    "sectionTitle": "해시함수와 응용",
    "sourceSection": "SECTION 04 해시함수와 응용",
    "question": "오래된 파일의 해시 계산 방식을 식별하고 있다. 문서에는 유럽 RIPE 프로젝트에서 나온 해시의 개정 계열이며, 64바이트 블록을 처리해 20바이트 결과를 낸다고 적혀 있다. 어느 알고리즘인가?",
    "options": [
      {
        "number": 1,
        "text": "RIPEMD-160"
      },
      {
        "number": 2,
        "text": "SHA-224"
      },
      {
        "number": 3,
        "text": "MD5"
      },
      {
        "number": 4,
        "text": "SHA-1"
      }
    ],
    "answer": 1,
    "explanation": "RIPEMD-160은 RIPEMD의 개정 계열로, 512비트 블록을 처리하고 160비트 값을 출력한다. SHA-1은 블록과 출력 길이는 같지만 개발 계열이 다르다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q070",
    "partId": 2,
    "sectionId": 5,
    "sectionTitle": "해시함수와 응용",
    "sourceSection": "SECTION 04 해시함수와 응용",
    "question": "해시 구현의 내부 입력 버퍼를 정확히 한 압축 블록 크기로 잡는다. SHA-256에는 64바이트를 할당했다. SHA-384와 SHA-512에 할당할 크기는 각각 몇 바이트인가?",
    "options": [
      {
        "number": 1,
        "text": "48, 64"
      },
      {
        "number": 2,
        "text": "64, 128"
      },
      {
        "number": 3,
        "text": "128, 128"
      },
      {
        "number": 4,
        "text": "128, 64"
      }
    ],
    "answer": 3,
    "explanation": "SHA-384와 SHA-512는 둘 다 1,024비트(128바이트) 블록을 처리한다. 알고리즘 이름의 숫자는 출력 길이를 나타낸다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q071",
    "partId": 2,
    "sectionId": 5,
    "sectionTitle": "해시함수와 응용",
    "sourceSection": "SECTION 04 해시함수와 응용",
    "question": "메시지 인증과 관련된 구성요소를 검토한다. 다음 중 단독으로는 수신 메시지의 변경이나 발신 출처를 확인하는 기능이 없는 것은?",
    "options": [
      {
        "number": 1,
        "text": "공유키를 이용한 HMAC"
      },
      {
        "number": 2,
        "text": "검증 가능한 전자서명"
      },
      {
        "number": 3,
        "text": "공유키를 이용한 CMAC"
      },
      {
        "number": 4,
        "text": "메시지와 무관하게 난수만 생성하는 모듈"
      }
    ],
    "answer": 4,
    "explanation": "난수 생성기는 키나 일회용 값 생성에 활용될 수 있다. 난수 출력만으로 특정 메시지를 인증할 수는 없다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q072",
    "partId": 2,
    "sectionId": 5,
    "sectionTitle": "해시함수와 응용",
    "sourceSection": "SECTION 04 해시함수와 응용",
    "question": "발주 시스템이 메시지 본문과 그 SHA-256 값을 함께 전송한다. 같은 통신에서 두 값 모두 바뀔 수 있다는 문제를 줄이기 위해 양쪽이 이미 공유한 비밀키를 활용하려 한다. 어떤 변경이 맞는가?",
    "options": [
      {
        "number": 1,
        "text": "해시값을 두 번 연속 전송한다."
      },
      {
        "number": 2,
        "text": "본문을 Base64로 바꾼다."
      },
      {
        "number": 3,
        "text": "본문의 HMAC 태그를 생성해 수신자가 같은 키로 검증한다."
      },
      {
        "number": 4,
        "text": "공유 비밀키를 본문에 첨부한다."
      }
    ],
    "answer": 3,
    "explanation": "비밀키를 사용하는 HMAC으로 본문과 태그의 관계를 검증한다. 키 없는 해시와 원문을 함께 보내는 것만으로는 출처를 인증할 수 없다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q073",
    "partId": 2,
    "sectionId": 5,
    "sectionTitle": "해시함수와 응용",
    "sourceSection": "SECTION 04 해시함수와 응용",
    "question": "수신 프로그램이 공유 비밀키와 유효한 HMAC 태그를 가지고 있다. 받은 메시지를 검증할 때 해야 할 일은?",
    "options": [
      {
        "number": 1,
        "text": "받은 메시지와 공유키로 태그를 다시 계산해 받은 태그와 비교한다."
      },
      {
        "number": 2,
        "text": "태그를 복호화해 원래 메시지를 얻는다."
      },
      {
        "number": 3,
        "text": "메시지 없이 비밀키만 입력해 태그를 계산한다."
      },
      {
        "number": 4,
        "text": "발신자의 공개키만으로 태그를 다시 만든다."
      }
    ],
    "answer": 1,
    "explanation": "HMAC 검증은 수신 메시지와 같은 비밀키로 계산한 태그를 수신 태그와 비교하는 과정이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q074",
    "partId": 2,
    "sectionId": 5,
    "sectionTitle": "해시함수와 응용",
    "sourceSection": "SECTION 04 해시함수와 응용",
    "question": "회사 A와 B가 같은 비밀키로 메시지에 MAC을 붙였다. 분쟁 때 외부 감사인이 태그만으로 두 회사 중 누가 만들었는지 입증할 수 없는 이유는?",
    "options": [
      {
        "number": 1,
        "text": "MAC은 메시지 내용에 따라 달라지지 않기 때문이다."
      },
      {
        "number": 2,
        "text": "두 회사 모두 같은 비밀키로 유효한 태그를 만들 수 있기 때문이다."
      },
      {
        "number": 3,
        "text": "MAC은 오직 공개키로만 만들기 때문이다."
      },
      {
        "number": 4,
        "text": "MAC이 메시지를 항상 암호화하기 때문이다."
      }
    ],
    "answer": 2,
    "explanation": "공유키를 가진 양쪽 모두 태그를 생성할 수 있으므로 MAC만으로 한쪽의 서명 사실을 제3자에게 입증할 수 없다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q075",
    "partId": 2,
    "sectionId": 5,
    "sectionTitle": "해시함수와 응용",
    "sourceSection": "SECTION 04 해시함수와 응용",
    "question": "개발 문서에 파일 지문용 SHA-256과 메시지 인증용 HMAC-SHA-256이 등장한다. 두 계산의 입력 차이는?",
    "options": [
      {
        "number": 1,
        "text": "SHA-256만 비밀키를 요구한다."
      },
      {
        "number": 2,
        "text": "둘 다 공개키와 개인키 쌍을 요구한다."
      },
      {
        "number": 3,
        "text": "HMAC-SHA-256은 메시지를 입력받지 않는다."
      },
      {
        "number": 4,
        "text": "HMAC-SHA-256은 메시지 외에 비밀키가 필요하지만 일반 SHA-256에는 키 입력이 없다."
      }
    ],
    "answer": 4,
    "explanation": "일반 SHA-256은 키 없는 해시 함수다. HMAC은 해시 함수와 비밀키를 결합해 인증 태그를 만든다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q076",
    "partId": 2,
    "sectionId": 5,
    "sectionTitle": "해시함수와 응용",
    "sourceSection": "SECTION 04 해시함수와 응용",
    "question": "출입 제어기가 이미 처리한 정상 개방 요청을 다시 받았다. MAC 검사는 통과하지만 같은 요청을 두 번 처리하면 안 된다. 다음 변경 중 재전송을 구분할 정보를 추가하지 못하는 것은?",
    "options": [
      {
        "number": 1,
        "text": "수신기가 발급한 일회용 값을 요청에 넣고 사용 후 폐기한다."
      },
      {
        "number": 2,
        "text": "요청 순서번호를 MAC에 포함하고 처리한 번호를 기록한다."
      },
      {
        "number": 3,
        "text": "시각과 요청 ID를 MAC에 포함하고, 허용 시간과 중복 여부를 확인한다."
      },
      {
        "number": 4,
        "text": "본문의 SHA-256 값을 요청에 덧붙이고 그 전체에 MAC을 계산한다."
      }
    ],
    "answer": 4,
    "explanation": "같은 본문의 해시와 유효한 MAC은 요청이 다시 도착해도 그대로다. 일회용 값이나 순서번호 등을 인증하고 수신 측에서 재사용 여부를 검사해야 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q077",
    "partId": 2,
    "sectionId": 5,
    "sectionTitle": "해시함수와 응용",
    "sourceSection": "SECTION 04 해시함수와 응용",
    "question": "두 시스템이 HMAC으로 재고 변경 메시지를 검증한다. 보안 설계 검토에서 고쳐야 할 판단은?",
    "options": [
      {
        "number": 1,
        "text": "비밀키를 공유하는 수신 시스템에서 인증 태그를 검증한다."
      },
      {
        "number": 2,
        "text": "어떤 해시 함수를 골라도 HMAC의 안전성 검토 결과는 같다."
      },
      {
        "number": 3,
        "text": "본문을 바꾸면 기존 태그가 새 본문에 그대로 유효해서는 안 된다."
      },
      {
        "number": 4,
        "text": "본문을 읽지 못하게 하려면 별도의 기밀성 보호가 필요하다."
      }
    ],
    "answer": 2,
    "explanation": "HMAC을 설계할 때는 사용하는 해시 함수와 키 관리, 태그 길이 등을 함께 검토해야 한다. HMAC 자체는 본문을 숨기지 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q078",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "전자계약 시스템이 공급업체의 서명을 생성한다. 서명을 공급업체에 연결하고 위조를 어렵게 하려면 어떤 정보를 서명 생성에 사용해야 하는가?",
    "options": [
      {
        "number": 1,
        "text": "수신자의 공개키"
      },
      {
        "number": 2,
        "text": "서명자의 개인키"
      },
      {
        "number": 3,
        "text": "공개된 계약 번호"
      },
      {
        "number": 4,
        "text": "수신자의 이메일 주소"
      }
    ],
    "answer": 2,
    "explanation": "공개키 전자서명에서 서명 생성에 쓰는 개인키는 서명자가 보호한다. 계약 번호나 수신자 정보는 서명자의 개인키를 대신할 수 없다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q079",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "개발팀이 설치 파일에 전자서명만 적용했다. 이 조치만으로 얻을 수 없는 효과는?",
    "options": [
      {
        "number": 1,
        "text": "검증된 공개키를 사용해 배포자 서명을 확인한다."
      },
      {
        "number": 2,
        "text": "설치 파일이 서명 이후 바뀌면 검증에 실패하도록 한다."
      },
      {
        "number": 3,
        "text": "서명 행위를 뒷받침할 증거를 남긴다."
      },
      {
        "number": 4,
        "text": "파일 내용이 제3자에게 읽히지 않도록 숨긴다."
      }
    ],
    "answer": 4,
    "explanation": "전자서명은 무결성과 출처 확인을 지원하지만 원문을 암호화하지는 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q080",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "공개키와 서명자의 신원 연결을 신뢰할 수 있는 상황에서, 검토자가 공개키로 문서의 서명을 확인했다. 이때 어떤 목적을 달성하는가?",
    "options": [
      {
        "number": 1,
        "text": "서명자 인증"
      },
      {
        "number": 2,
        "text": "문서 암호화"
      },
      {
        "number": 3,
        "text": "서비스 가용성"
      },
      {
        "number": 4,
        "text": "개인키 복원"
      }
    ],
    "answer": 1,
    "explanation": "공개키로 서명을 검증하면 해당 키에 대응하는 개인키로 만들어진 서명인지 확인할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q081",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "담당자가 구매 승인서에 전자서명했다. 이후 수량을 정정한 새 문서를 발송해야 한다. 검증자가 정정된 문서의 승인 여부를 확인하려면 어떻게 해야 하는가?",
    "options": [
      {
        "number": 1,
        "text": "정정된 문서에 개인키로 새로 서명하고 검증자는 해당 공개키로 검증한다."
      },
      {
        "number": 2,
        "text": "같은 담당자가 승인했으므로 기존 서명값을 복사한다."
      },
      {
        "number": 3,
        "text": "문서 제목만 그대로 유지한 뒤 기존 서명값을 붙인다."
      },
      {
        "number": 4,
        "text": "검증자가 공개키로 서명값을 만들어 교체한다."
      }
    ],
    "answer": 1,
    "explanation": "전자서명은 서명 대상 데이터에 결합된다. 승인서 내용이 바뀌면 새로 서명해야 하며 공개키는 검증에 쓴다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q082",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "서명 서버와 검증 전용 서버를 분리한다. 동일한 서명자의 키 쌍에서 두 서버에 필요한 키를 각각 고르면?",
    "options": [
      {
        "number": 1,
        "text": "공개키·개인키"
      },
      {
        "number": 2,
        "text": "공개키·공개키"
      },
      {
        "number": 3,
        "text": "개인키·공개키"
      },
      {
        "number": 4,
        "text": "개인키·수신자의 개인키"
      }
    ],
    "answer": 3,
    "explanation": "서명 서버는 서명자의 개인키로 서명하고 검증 전용 서버는 서명자의 공개키로 검증한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q083",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "연구팀이 보고서에 전자서명을 남겨 나중에 작성자의 서명 사실을 입증하려 한다. 생성과 검증 절차를 올바르게 설명한 것은?",
    "options": [
      {
        "number": 1,
        "text": "개인키로 서명하고, 신원이 확인된 같은 서명자의 공개키로 검증한다."
      },
      {
        "number": 2,
        "text": "공개키로 서명하고, 검증자가 개인키를 전달받는다."
      },
      {
        "number": 3,
        "text": "공개키로 서명하고, 아무 공개키로나 검증한다."
      },
      {
        "number": 4,
        "text": "개인키로 서명하고, 계약 상대방의 공개키로 검증한다."
      }
    ],
    "answer": 1,
    "explanation": "개인키로 서명하고 그에 대응하는 공개키로 검증한다. 키와 서명자의 신원이 믿을 수 있게 연결되어야 부인방지의 근거가 된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q084",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "거래 상대방이 서명한 승인서를 보관했다. 공유키 MAC과 달리 제3자도 서명자를 검증할 수 있는 근거는?",
    "options": [
      {
        "number": 1,
        "text": "거래 당사자가 개인키를 공동 보관한다."
      },
      {
        "number": 2,
        "text": "제3자가 수신자 개인키로 문서를 암호화한다."
      },
      {
        "number": 3,
        "text": "서명자만 관리하는 개인키로 생성한 서명을 제3자가 서명자의 공개키로 검증한다."
      },
      {
        "number": 4,
        "text": "서명값과 무관하게 파일 이름만 비교한다."
      }
    ],
    "answer": 3,
    "explanation": "서명자 개인키의 독점적 관리와 공개 검증 가능성이 부인방지를 뒷받침한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q085",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "문서 승인 서비스가 RSA-PSS를 쓰기로 했다. 이 방식의 기능을 정확히 설명한 것은?",
    "options": [
      {
        "number": 1,
        "text": "대칭키로 파일 본문을 암호화한다."
      },
      {
        "number": 2,
        "text": "RSA 키 쌍을 이용해 서명을 생성하고 검증한다."
      },
      {
        "number": 3,
        "text": "해시값에서 파일 원문을 복원한다."
      },
      {
        "number": 4,
        "text": "디피–헬먼 공개값 교환만 수행한다."
      }
    ],
    "answer": 2,
    "explanation": "RSA-PSS는 RSA를 사용하는 전자서명 방식으로, 개인키로 생성하고 공개키로 검증한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q086",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "수백 MB짜리 영상에 서명한다. 영상 전체 대신 고정 길이의 해시값을 이용하는 주된 이유는?",
    "options": [
      {
        "number": 1,
        "text": "영상이 자동으로 비공개가 된다."
      },
      {
        "number": 2,
        "text": "해시에서 영상을 원래대로 되찾을 수 있다."
      },
      {
        "number": 3,
        "text": "영상 종류에 상관없이 서명값이 동일해진다."
      },
      {
        "number": 4,
        "text": "작은 다이제스트를 서명 대상으로 사용해 공개키 연산 부담을 줄일 수 있다."
      }
    ],
    "answer": 4,
    "explanation": "해시는 임의 길이의 데이터를 고정 길이 다이제스트로 요약한다. 검증자는 받은 영상에서 다이제스트를 다시 계산한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q087",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "A가 보고서의 다이제스트를 바탕으로 전자서명을 생성해 B에게 보냈다. B가 받은 보고서와 서명의 일치 여부를 확인하는 방법은?",
    "options": [
      {
        "number": 1,
        "text": "받은 보고서의 다이제스트를 다시 계산하고 A의 공개키로 서명을 검증한다."
      },
      {
        "number": 2,
        "text": "B의 개인키로 A의 서명을 다시 생성한다."
      },
      {
        "number": 3,
        "text": "A의 개인키를 요구해 보고서를 직접 암호화한다."
      },
      {
        "number": 4,
        "text": "보고서 파일 크기가 이전과 같은지만 확인한다."
      }
    ],
    "answer": 1,
    "explanation": "검증에는 받은 데이터에서 계산한 값과 서명자의 공개키를 사용한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q088",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "사내 서비스의 인증 흐름을 검토하고 있다. 다음 중 설명된 인증 단계가 공유 대칭키와 티켓을 중심으로 동작하는 것은?",
    "options": [
      {
        "number": 1,
        "text": "업데이트 프로그램에서 배포자의 코드 서명 검사"
      },
      {
        "number": 2,
        "text": "인증기관이 발급한 X.509 인증서의 서명 검사"
      },
      {
        "number": 3,
        "text": "기본 Kerberos 흐름에서 서비스 티켓을 제시해 사내 서버에 접속"
      },
      {
        "number": 4,
        "text": "인증서 기반 TLS에서 서버가 핸드셰이크에 남긴 서명 확인"
      }
    ],
    "answer": 3,
    "explanation": "기본 Kerberos 인증은 키 분배 센터가 발급한 티켓과 대칭키를 활용한다. 나머지 상황에는 전자서명 검증이 포함된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q089",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "동아리 전자투표 시스템에 두 기능을 넣었다. (가) 회원 명부에 있는 사람만 투표권을 받는다. (나) 선거가 끝나면 참관인이 공개된 검증 자료로 집계 결과를 독립적으로 점검한다. 각각 어떤 성질인가?",
    "options": [
      {
        "number": 1,
        "text": "(가) 익명성, (나) 완전성"
      },
      {
        "number": 2,
        "text": "(가) 적임성, (나) 검증성"
      },
      {
        "number": 3,
        "text": "(가) 이중투표 방지, (나) 익명성"
      },
      {
        "number": 4,
        "text": "(가) 검증성, (나) 적임성"
      }
    ],
    "answer": 2,
    "explanation": "적임성은 자격을 갖춘 사람에게만 투표를 허용하는 성질이다. 검증성은 유권자나 참관인이 결과의 정당성을 확인할 수 있는 성질이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q090",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "선거위원회가 전자 단말을 배치했다. 유권자는 본인에게 배정된 투표소를 방문해 위원회가 관리하는 단말로만 투표할 수 있다. 이 운영 방식은 무엇인가?",
    "options": [
      {
        "number": 1,
        "text": "개인 기기를 이용한 원격 전자투표(REV)"
      },
      {
        "number": 2,
        "text": "등록된 어느 공용 단말에서나 투표하는 키오스크 방식"
      },
      {
        "number": 3,
        "text": "우편을 이용한 부재자 투표"
      },
      {
        "number": 4,
        "text": "지정 투표소 전자투표(PSEV)"
      }
    ],
    "answer": 4,
    "explanation": "PSEV는 배정된 투표소에 직접 가서 관리되는 전자 투표기를 사용하는 방식이다. 원격 투표나 임의의 거점에서 하는 투표와 구분된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q091",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "전자입찰 시스템이 서버 세 대를 사용한다. 동일한 공고에 대해 어느 서버로 접수하든 업체의 제출 기회가 같아야 한다. 어떤 마감 규칙이 적절한가?",
    "options": [
      {
        "number": 1,
        "text": "서버 기동 시점부터 각각 24시간 뒤에 마감한다."
      },
      {
        "number": 2,
        "text": "먼저 바쁜 서버부터 닫고 나머지 서버는 차례로 마감한다."
      },
      {
        "number": 3,
        "text": "모든 서버에서 신뢰할 수 있는 공통 마감 시각을 적용한다."
      },
      {
        "number": 4,
        "text": "서버마다 자체 판단으로 접수 종료 시각을 늦춘다."
      }
    ],
    "answer": 3,
    "explanation": "같은 입찰에는 접수 서버에 관계없이 동일한 마감 시각을 적용해야 제출 기회의 공평성을 유지할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q092",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "계약 플랫폼에서 RSA-PSS 서명의 생성과 검증 권한을 나눈다. 팀의 설계안으로 옳은 것은?",
    "options": [
      {
        "number": 1,
        "text": "계약 담당자는 자신의 개인키로 서명하고, 검토자는 담당자의 공개키로 검증한다."
      },
      {
        "number": 2,
        "text": "서버는 공개키로 서명하고 담당자의 개인키로 검증한다."
      },
      {
        "number": 3,
        "text": "담당자와 검토자가 같은 키를 공유해야 RSA-PSS 검증이 가능하다."
      },
      {
        "number": 4,
        "text": "검토자는 공개키로 기존 서명을 다른 계약서에 맞게 다시 만들 수 있다."
      }
    ],
    "answer": 1,
    "explanation": "RSA 서명은 비대칭키를 사용한다. 개인키로 서명을 생성하고 공개키로 검증하며, 공개키만으로 다른 문서의 유효한 서명을 만들 수 없어야 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q093",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "전자서명 방식의 역사를 정리한다. 엘가말 계열과 관련되며 짧은 서명을 목표로 제안된 방식은?",
    "options": [
      {
        "number": 1,
        "text": "RSA 암호화"
      },
      {
        "number": 2,
        "text": "AES-GCM"
      },
      {
        "number": 3,
        "text": "슈노르(Schnorr) 서명"
      },
      {
        "number": 4,
        "text": "HMAC"
      }
    ],
    "answer": 3,
    "explanation": "슈노르 서명은 이산로그 기반 전자서명 방식이다. 비교적 짧은 서명 구조가 특징이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q094",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "발급기관이 이용권을 승인하되 이용권 식별값을 발급 과정에서 보지 못하게 하려 한다. 사용 시 제시된 이용권을 이전 발급 요청과 연결하기도 어려워야 한다. 어떤 방식이 알맞은가?",
    "options": [
      {
        "number": 1,
        "text": "발급기관이 이용권 원문에 일반 전자서명"
      },
      {
        "number": 2,
        "text": "은닉서명으로 가려진 이용권에 서명"
      },
      {
        "number": 3,
        "text": "이용권을 개인키로 서명하고 이용자 이름을 함께 공개"
      },
      {
        "number": 4,
        "text": "서버 상태를 주기적으로 확인하는 가용성 검사"
      }
    ],
    "answer": 2,
    "explanation": "은닉서명은 발급자가 가려진 메시지에 서명하고, 요청자가 가림을 제거해 원래 메시지에 유효한 서명을 얻는 방식이다. 발급 요청과 사용 시점의 메시지를 연결하기 어렵게 할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q095",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "전자서명 모듈을 분류하고 있다. 검증 권한 제한, 서명 대상 숨기기, 공동 승인보다 검증 시 원문을 되찾는 기능으로 구분되는 방식은?",
    "options": [
      {
        "number": 1,
        "text": "은닉서명"
      },
      {
        "number": 2,
        "text": "다중서명"
      },
      {
        "number": 3,
        "text": "지정 검증자 서명"
      },
      {
        "number": 4,
        "text": "메시지 복원형 전자서명"
      }
    ],
    "answer": 4,
    "explanation": "메시지 복원형은 원문의 전부 또는 일부를 서명에서 복원할 수 있는 방식이다. 나머지 방식의 핵심은 각각 메시지 가림, 복수 서명자, 검증자 제한이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q096",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "인증서와 공개키 기반구조를 도입한다. PKI 자체만으로 해결할 수 없는 과제는?",
    "options": [
      {
        "number": 1,
        "text": "공개키가 어느 주체의 것인지 확인한다."
      },
      {
        "number": 2,
        "text": "인증서를 폐지한다."
      },
      {
        "number": 3,
        "text": "전자서명에 사용할 공개키를 검증한다."
      },
      {
        "number": 4,
        "text": "서버 장애가 발생해도 서비스에 계속 접속하게 한다."
      }
    ],
    "answer": 4,
    "explanation": "PKI는 공개키와 신원을 연결하고 인증서의 신뢰를 관리한다. 서비스의 지속 운영에는 별도 가용성 대책이 필요하다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q097",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "한 PKI에서 인증서 발급 기관이 별도의 CRL 발행 조직을 위임하지 않았다. 해당 기관의 인증서가 폐지되면 누가 서명된 CRL을 생성하는가?",
    "options": [
      {
        "number": 1,
        "text": "인증서 소유자"
      },
      {
        "number": 2,
        "text": "인증기관(CA)"
      },
      {
        "number": 3,
        "text": "인증서를 조회하는 브라우저"
      },
      {
        "number": 4,
        "text": "등록 신청을 접수한 사용자"
      }
    ],
    "answer": 2,
    "explanation": "별도 발행자를 두지 않으면 인증기관이 자신이 발급한 인증서의 폐지 정보를 CRL로 만들어 서명한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q098",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "조직의 PKI에서 정책을 승인하는 상위 기관과 개별 인증서를 발급하는 기관을 구분한다. 도메인 내 인증기관이 따를 정책을 정하고 그 인증기관들의 공개키를 인증하는 역할은?",
    "options": [
      {
        "number": 1,
        "text": "검증 의뢰인"
      },
      {
        "number": 2,
        "text": "디렉터리 서버"
      },
      {
        "number": 3,
        "text": "정책승인기관(PAA)"
      },
      {
        "number": 4,
        "text": "일반 가입자"
      }
    ],
    "answer": 3,
    "explanation": "정책승인기관은 도메인의 인증 정책과 인증기관에 대한 상위 신뢰를 관리한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q099",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "기관이 인증서 발급 업무를 등록기관(RA)과 인증기관(CA)으로 나눴다. 역할 분담으로 맞는 것은?",
    "options": [
      {
        "number": 1,
        "text": "RA는 신청자의 신원을 확인하고, CA는 확인된 신청에 대해 인증서에 서명해 발급한다."
      },
      {
        "number": 2,
        "text": "RA는 가입자의 개인키로 문서에 대신 서명하고, CA는 신원을 확인하지 않는다."
      },
      {
        "number": 3,
        "text": "CA는 게시판만 운영하고 최종 인증서 서명은 일반 사용자가 한다."
      },
      {
        "number": 4,
        "text": "RA가 정보를 접수하면 인증기관 없이 신청자의 자체 서명이 곧 CA 서명이 된다."
      }
    ],
    "answer": 1,
    "explanation": "RA는 신청 및 신원 확인을 담당할 수 있고, 인증서를 발급하는 CA는 자신의 서명키로 인증서에 서명한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q100",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "일반 사용자가 외부 인증기관에서 X.509 인증서를 발급받는다. 인증서에 서명하는 키는?",
    "options": [
      {
        "number": 1,
        "text": "사용자의 공개키"
      },
      {
        "number": 2,
        "text": "발급 인증기관의 개인키"
      },
      {
        "number": 3,
        "text": "사용자의 개인키"
      },
      {
        "number": 4,
        "text": "인증기관의 공개키"
      }
    ],
    "answer": 2,
    "explanation": "외부 인증기관이 발급하는 인증서는 그 인증기관의 개인키로 서명하고 인증기관의 공개키로 검증한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q101",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "등록 절차에서 인증기관이 사용자의 신원을 확인했다. 발급할 공개키 인증서에 사용자의 신원과 연결할 값은?",
    "options": [
      {
        "number": 1,
        "text": "사용자의 비밀번호"
      },
      {
        "number": 2,
        "text": "인증기관의 개인키"
      },
      {
        "number": 3,
        "text": "사용자의 공개키"
      },
      {
        "number": 4,
        "text": "사용자의 개인키"
      }
    ],
    "answer": 3,
    "explanation": "공개키 인증서는 주체의 신원 정보와 공개키를 연결하고 발급자가 서명한다. 주체의 개인키는 인증서에 포함하지 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q102",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "관리자가 X.509 인증서의 내용을 검토한다. 다음 중 해당 인증서에 담는 정보가 아닌 것은?",
    "options": [
      {
        "number": 1,
        "text": "일련번호"
      },
      {
        "number": 2,
        "text": "유효기간"
      },
      {
        "number": 3,
        "text": "주체 공개키 정보"
      },
      {
        "number": 4,
        "text": "주체의 개인키 원본"
      }
    ],
    "answer": 4,
    "explanation": "인증서는 일련번호, 유효기간, 공개키 정보 등을 담는다. 개인키 원본은 소유자가 별도로 보호한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q103",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "관리자가 X.509 인증서 뷰어에서 기본 필드와 확장 필드를 나눠 표시하려 한다. 어느 정보를 확장 필드 탭에 넣어야 하는가?",
    "options": [
      {
        "number": 1,
        "text": "발급자가 인증서에 부여한 일련번호"
      },
      {
        "number": 2,
        "text": "인증서 사용이 허용되는 시작·종료 시각"
      },
      {
        "number": 3,
        "text": "인증서가 적용되는 정책의 식별자(OID) 목록"
      },
      {
        "number": 4,
        "text": "인증서 주체의 공개키와 그 알고리즘 정보"
      }
    ],
    "answer": 3,
    "explanation": "인증서 정책 식별자 목록은 Certificate Policies 확장에 들어간다. 일련번호, 유효기간, 주체 공개키 정보는 기본 필드다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q104",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "검증자가 배포받은 CRL에서 과거에 폐지된 인증서를 식별한다. 폐지 항목에 들어가는 정보는?",
    "options": [
      {
        "number": 1,
        "text": "폐지된 인증서의 일련번호와 폐지 시각"
      },
      {
        "number": 2,
        "text": "인증기관의 개인키"
      },
      {
        "number": 3,
        "text": "인증서 소유자의 비밀번호"
      },
      {
        "number": 4,
        "text": "모든 발급 인증서의 전체 본문"
      }
    ],
    "answer": 1,
    "explanation": "CRL의 폐지 항목은 인증서 일련번호와 폐지 시각을 포함한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q105",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "철수의 공개키 인증서를 처음 받았다. 이미 신뢰하는 CA의 공개키로 확인해야 하는 것은?",
    "options": [
      {
        "number": 1,
        "text": "철수의 비밀번호가 공개됐는지"
      },
      {
        "number": 2,
        "text": "인증서의 발급자 서명이 유효한지"
      },
      {
        "number": 3,
        "text": "CA의 개인키를 재생성할 수 있는지"
      },
      {
        "number": 4,
        "text": "인증서의 일련번호가 모든 CA에서 같은지"
      }
    ],
    "answer": 2,
    "explanation": "신뢰하는 CA 공개키로 인증서의 서명을 검증한다. 실제 사용 시에는 주체 정보, 기간, 폐지 상태도 확인해야 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q106",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "아직 만료되지 않은 사용자의 인증서에서 개인키 침해가 확인됐다. 적절한 조치는?",
    "options": [
      {
        "number": 1,
        "text": "만료일까지 어떤 조치도 할 수 없다."
      },
      {
        "number": 2,
        "text": "공개키를 비공개로 바꾸면 기존 인증서는 자동 폐지된다."
      },
      {
        "number": 3,
        "text": "인증기관이 인증서를 폐지하고 검증자가 상태를 확인할 수 있게 한다."
      },
      {
        "number": 4,
        "text": "인증서 사본을 사용자 PC에서 삭제하면 모든 사본이 무효가 된다."
      }
    ],
    "answer": 3,
    "explanation": "키 침해는 만료 전 폐지 사유가 된다. 폐지 상태가 검증자에게 전달되도록 CRL이나 OCSP 등을 사용한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q107",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "CRL을 읽는 프로그램에서 기본 필드와 확장 필드를 구분한다. 다음 중 확장 필드로 처리해야 하는 것은?",
    "options": [
      {
        "number": 1,
        "text": "CRL 발행자 이름"
      },
      {
        "number": 2,
        "text": "현재 CRL 발행 시각(thisUpdate)"
      },
      {
        "number": 3,
        "text": "폐지된 인증서의 일련번호"
      },
      {
        "number": 4,
        "text": "CRL 번호(CRL Number)"
      }
    ],
    "answer": 4,
    "explanation": "CRL 번호는 CRL의 순서를 식별하는 확장이다. 폐지 인증서의 일련번호는 폐지 항목의 필드다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q108",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "기관이 업무용 인증서의 개인키 유출 가능성을 확인했다. 인증서는 만료 전이고 소유자에게 즉시 연락할 수 없다. 발급 인증기관이 취할 수 있는 조치는?",
    "options": [
      {
        "number": 1,
        "text": "만료 전에 인증서를 폐지하고, 해당 일련번호가 포함된 서명된 CRL을 배포한다."
      },
      {
        "number": 2,
        "text": "소유자가 직접 신청할 때까지 폐지를 할 수 없다."
      },
      {
        "number": 3,
        "text": "CRL에 유출된 개인키를 넣어 검증자에게 보낸다."
      },
      {
        "number": 4,
        "text": "만료일을 앞당긴 사본을 배포하면 기존 인증서도 자동으로 폐지된다."
      }
    ],
    "answer": 1,
    "explanation": "인증기관은 키 침해 등의 사유로 만료 전에 인증서를 폐지할 수 있다. 검증자는 인증기관이 배포한 CRL에서 해당 인증서의 일련번호를 확인한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q109",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "거래 시스템은 OCSP 상태를 확인해야만 상대 인증서를 수용하도록 설정되어 있다. 요청을 보냈지만 아직 응답이 없고, 다른 인증서 검사는 마친 상태다. 어떤 처리가 정책에 맞는가?",
    "options": [
      {
        "number": 1,
        "text": "응답이 없으면 폐지되지 않은 것으로 보고 바로 거래한다."
      },
      {
        "number": 2,
        "text": "응답이 늦으면 인증서의 유효기간을 자동 연장한다."
      },
      {
        "number": 3,
        "text": "응답이 오지 않은 상태를 OCSP의 good 응답으로 기록한다."
      },
      {
        "number": 4,
        "text": "검증 가능한 상태 응답을 받기 전까지 인증서 수용을 보류한다."
      }
    ],
    "answer": 4,
    "explanation": "폐지 상태 확인이 필수라면 요청을 보냈다는 사실만으로 인증서를 수용할 수 없다. OCSP 응답도 서명과 시각 등을 확인해야 하며 인증서의 다른 검사를 대신하지 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q110",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "시험용 PKI의 최상위 인증서에서 주체와 발급자 이름이 같고, 인증서에 들어 있는 공개키로 그 인증서의 서명이 검증됐다. 어떤 경우인가?",
    "options": [
      {
        "number": 1,
        "text": "루트 CA의 자체 서명 인증서"
      },
      {
        "number": 2,
        "text": "일반 가입자의 비밀번호 인증"
      },
      {
        "number": 3,
        "text": "다른 CA에 의한 교차 서명"
      },
      {
        "number": 4,
        "text": "CRL 응답 서명"
      }
    ],
    "answer": 1,
    "explanation": "루트 CA는 자신의 개인키로 자기 공개키를 담은 인증서에 서명할 수 있다. 자체 서명만으로 신뢰가 생기지는 않으며 검증자가 해당 루트를 신뢰하도록 설정해야 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q111",
    "partId": 2,
    "sectionId": 7,
    "sectionTitle": "키와 난수",
    "sourceSection": "SECTION 06 키, 난수",
    "question": "교육용 암호의 키 길이는 18비트이며 모든 비트 조합이 키 후보가 된다. 시험 장비가 초당 4,096개의 서로 다른 후보를 검사한다면, 올바른 키가 마지막 후보일 때 몇 초가 걸리는가? 후보 검사 외의 시간은 무시한다.",
    "options": [
      {
        "number": 1,
        "text": "16초"
      },
      {
        "number": 2,
        "text": "32초"
      },
      {
        "number": 3,
        "text": "64초"
      },
      {
        "number": 4,
        "text": "128초"
      }
    ],
    "answer": 3,
    "explanation": "후보 수는 2¹⁸개이고, 초당 검사 수는 4,096 = 2¹²개다. 마지막 후보까지 검사하는 시간은 2¹⁸ ÷ 2¹² = 64초다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q112",
    "partId": 2,
    "sectionId": 7,
    "sectionTitle": "키와 난수",
    "sourceSection": "SECTION 06 키, 난수",
    "question": "한 회사에 세 가지 요구사항이 있다. (가) 한 번 로그인하면 여러 사내 서비스 이용, (나) 전용 하드웨어에서 서명키를 보호하고 서명 수행, (다) 구매한 전자책의 열람 기간 제한. 알맞은 기술을 순서대로 고른 것은?",
    "options": [
      {
        "number": 1,
        "text": "SSO · HSM · DRM"
      },
      {
        "number": 2,
        "text": "HSM · SSO · DRM"
      },
      {
        "number": 3,
        "text": "DRM · HSM · SSO"
      },
      {
        "number": 4,
        "text": "SSO · DRM · HSM"
      }
    ],
    "answer": 1,
    "explanation": "SSO는 한 번의 인증으로 여러 서비스를 이용하게 한다. HSM은 키 보호와 암호 연산을 담당하고, DRM은 디지털 콘텐츠의 이용 조건을 관리한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q113",
    "partId": 2,
    "sectionId": 7,
    "sectionTitle": "키와 난수",
    "sourceSection": "SECTION 06 키, 난수",
    "question": "모의실험 프로그램이 초기값을 받아 알고리즘으로 난수처럼 보이는 수열을 만든다. 알고리즘과 초기값이 같으면 같은 수열이 재현된다. 어떤 생성기에 해당하는가?",
    "options": [
      {
        "number": 1,
        "text": "물리적 잡음 기반 난수 생성기"
      },
      {
        "number": 2,
        "text": "오차 검출 코드 생성기"
      },
      {
        "number": 3,
        "text": "해시 검증기"
      },
      {
        "number": 4,
        "text": "의사난수 생성기(PRNG)"
      }
    ],
    "answer": 4,
    "explanation": "PRNG는 초기값과 알고리즘에 따라 결정적으로 수열을 생성한다. 같은 초기 상태에서 시작하면 같은 수열이 나온다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q114",
    "partId": 3,
    "sectionId": 8,
    "sectionTitle": "접근통제 개요",
    "sourceSection": "SECTION 01 접근통제 개요",
    "question": "로그인을 마친 직원에게 급여 자료 열람을 허용할지 판단한다. 이 단계는?",
    "options": [
      {
        "number": 1,
        "text": "식별"
      },
      {
        "number": 2,
        "text": "인증"
      },
      {
        "number": 3,
        "text": "인가"
      },
      {
        "number": 4,
        "text": "감사"
      }
    ],
    "answer": 3,
    "explanation": "인가는 인증된 주체가 해당 자원에 어떤 작업을 할 수 있는지 판단한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q115",
    "partId": 3,
    "sectionId": 8,
    "sectionTitle": "접근통제 개요",
    "sourceSection": "SECTION 01 접근통제 개요",
    "question": "보고서 작성자는 수정할 수 있고 다른 직원은 열람만 가능하다는 규칙을 문서화했다. 접근통제의 어떤 구성요소인가?",
    "options": [
      {
        "number": 1,
        "text": "정책"
      },
      {
        "number": 2,
        "text": "감사 로그"
      },
      {
        "number": 3,
        "text": "인증 수단"
      },
      {
        "number": 4,
        "text": "백업"
      }
    ],
    "answer": 1,
    "explanation": "접근통제 정책은 누가 어떤 조건에서 어떤 작업을 허용받는지 정의한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q116",
    "partId": 3,
    "sectionId": 8,
    "sectionTitle": "접근통제 개요",
    "sourceSection": "SECTION 01 접근통제 개요",
    "question": "백업 계정은 지정된 폴더를 읽을 수 있지만 설정을 바꾸거나 사용자를 추가할 수 없다. 적용한 원칙은?",
    "options": [
      {
        "number": 1,
        "text": "직무 순환"
      },
      {
        "number": 2,
        "text": "직무 분리"
      },
      {
        "number": 3,
        "text": "공개 기본값"
      },
      {
        "number": 4,
        "text": "최소 권한"
      }
    ],
    "answer": 4,
    "explanation": "최소 권한은 작업을 수행하는 데 필요한 권한만 부여하는 원칙이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q117",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "업무 포털에서 (가) 계정 이름을 입력하고, (나) 비밀번호를 검증하고, (다) 문서 편집 권한을 확인했다. 순서대로 알맞은 것은?",
    "options": [
      {
        "number": 1,
        "text": "인증·식별·인가"
      },
      {
        "number": 2,
        "text": "식별·인증·인가"
      },
      {
        "number": 3,
        "text": "식별·인가·인증"
      },
      {
        "number": 4,
        "text": "인가·인증·식별"
      }
    ],
    "answer": 2,
    "explanation": "식별은 누구인지 주장하는 단계다. 인증은 그 주장을 확인하고, 인가는 허용할 작업을 판단한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q118",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "사원 인증에서 사용할 수단 중 소유 기반에 해당하는 것은?",
    "options": [
      {
        "number": 1,
        "text": "외운 PIN"
      },
      {
        "number": 2,
        "text": "홍채"
      },
      {
        "number": 3,
        "text": "등록된 하드웨어 보안키"
      },
      {
        "number": 4,
        "text": "외운 비밀번호"
      }
    ],
    "answer": 3,
    "explanation": "하드웨어 보안키는 소유를 증명하는 수단이다. PIN과 비밀번호는 지식, 홍채는 생체 특성이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q119",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "다음 중 두 가지 절차를 거쳐도 서로 다른 유형의 인증 요소를 사용하지 않는 것은?",
    "options": [
      {
        "number": 1,
        "text": "비밀번호와 외운 PIN"
      },
      {
        "number": 2,
        "text": "등록 보안키와 비밀번호"
      },
      {
        "number": 3,
        "text": "지문과 등록 보안키"
      },
      {
        "number": 4,
        "text": "홍채와 외운 PIN"
      }
    ],
    "answer": 1,
    "explanation": "비밀번호와 PIN은 둘 다 지식 기반이다. 2요소 인증에는 서로 다른 유형의 요소가 필요하다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q120",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "관리자가 “로그인에 다섯 번 실패하면 잠시 차단한다”는 기능을 추가했다. 이 기능을 올바르게 설명한 것은?",
    "options": [
      {
        "number": 1,
        "text": "생체 요소가 추가됐다."
      },
      {
        "number": 2,
        "text": "소유 요소가 추가됐다."
      },
      {
        "number": 3,
        "text": "비밀번호 대신 공개키를 사용한다."
      },
      {
        "number": 4,
        "text": "반복 시도 제한이며 새 인증 요소는 아니다."
      }
    ],
    "answer": 4,
    "explanation": "실패 횟수 제한은 시도를 늦추는 방어책이다. MFA는 서로 다른 유형의 인증 요소를 요구한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q121",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "직원이 정상적으로 쓴 일회용 인증 코드가 기록에 남았다. 올바른 OTP 검증기가 그 코드로 새 로그인 요청을 받으면 어떻게 해야 하는가?",
    "options": [
      {
        "number": 1,
        "text": "코드가 숫자이면 수락한다."
      },
      {
        "number": 2,
        "text": "이미 사용됐으므로 거부한다."
      },
      {
        "number": 3,
        "text": "원래 로그인과 다른 브라우저에서만 수락한다."
      },
      {
        "number": 4,
        "text": "코드를 다음 로그인 비밀번호로 저장한다."
      }
    ],
    "answer": 2,
    "explanation": "일회용 코드는 성공적으로 사용한 뒤 재사용할 수 없어야 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q122",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "감사 보고서가 비밀번호 후보 공간 전체를 검사하는 방식을 분류한다. 이에 해당하는 것은?",
    "options": [
      {
        "number": 1,
        "text": "무차별 대입"
      },
      {
        "number": 2,
        "text": "트래픽 분석"
      },
      {
        "number": 3,
        "text": "피싱"
      },
      {
        "number": 4,
        "text": "메시지 변조"
      }
    ],
    "answer": 1,
    "explanation": "무차별 대입은 가능한 후보들을 체계적으로 검사하는 방식이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q123",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "가입자가 비밀값 자체를 보여주지 않으면서 그 값을 알고 있음을 검증자에게 증명하려 한다. 관련 개념은?",
    "options": [
      {
        "number": 1,
        "text": "대칭키 복호화"
      },
      {
        "number": 2,
        "text": "접근통제 목록"
      },
      {
        "number": 3,
        "text": "영지식 증명"
      },
      {
        "number": 4,
        "text": "파일 압축"
      }
    ],
    "answer": 3,
    "explanation": "영지식 증명은 비밀 증거를 공개하지 않고도 해당 주장이 참임을 검증하는 방법이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q124",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "암호 장치가 계산할 때 소비하는 전력이 처리 중인 데이터와 관련된 정보를 드러냈다. 이 현상이 속하는 공격 범주는?",
    "options": [
      {
        "number": 1,
        "text": "사회 공학"
      },
      {
        "number": 2,
        "text": "재전송"
      },
      {
        "number": 3,
        "text": "사전 대입"
      },
      {
        "number": 4,
        "text": "부채널"
      }
    ],
    "answer": 4,
    "explanation": "부채널은 암호의 수학적 구조 대신 전력·시간 같은 구현의 부수 정보가 드러나는 경로다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q125",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "직원 인증에서 코드를 전달받는 대신 등록된 기기가 인터넷 연결 없이 직접 계산해야 한다. 알맞은 방법은?",
    "options": [
      {
        "number": 1,
        "text": "이메일로 받는 인증 코드"
      },
      {
        "number": 2,
        "text": "시간 기반 OTP 앱"
      },
      {
        "number": 3,
        "text": "문자로 받는 인증 코드"
      },
      {
        "number": 4,
        "text": "메신저로 받는 인증 코드"
      }
    ],
    "answer": 2,
    "explanation": "등록된 TOTP 앱은 비밀값과 시간으로 코드를 직접 계산한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q126",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "업무 포털이 OTP를 추가했다. OTP의 역할에 대한 올바른 설명은?",
    "options": [
      {
        "number": 1,
        "text": "한 번 사용할 인증 코드를 제공한다."
      },
      {
        "number": 2,
        "text": "메시지 본문을 암호화한다."
      },
      {
        "number": 3,
        "text": "모든 로그인에 같은 코드를 사용한다."
      },
      {
        "number": 4,
        "text": "계정 이름을 자동으로 숨긴다."
      }
    ],
    "answer": 1,
    "explanation": "OTP는 일회용 인증값이다. 통신 내용의 기밀성은 별도의 보호가 필요하다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q127",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "일회용 코드의 생성 규칙을 검토하고 있다. 외부인이 가장 쉽게 예측할 수 있는 규칙은?",
    "options": [
      {
        "number": 1,
        "text": "비밀값으로 표준 TOTP 생성"
      },
      {
        "number": 2,
        "text": "검증된 난수 생성기로 임의 코드 생성"
      },
      {
        "number": 3,
        "text": "모두에게 공개된 날짜와 사번으로 코드 계산"
      },
      {
        "number": 4,
        "text": "비밀값과 카운터로 표준 HOTP 생성"
      }
    ],
    "answer": 3,
    "explanation": "코드가 바뀌어도 입력과 규칙이 공개돼 있으면 계산 결과를 예측할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q128",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "비밀번호와 등록된 OTP 토큰을 함께 요구한다. 토큰이 제공하는 인증 요소는?",
    "options": [
      {
        "number": 1,
        "text": "위치"
      },
      {
        "number": 2,
        "text": "지식"
      },
      {
        "number": 3,
        "text": "생체"
      },
      {
        "number": 4,
        "text": "소유"
      }
    ],
    "answer": 4,
    "explanation": "코드를 입력하더라도 인증 근거는 등록된 토큰을 보유한다는 점이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q129",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "OTP 장치가 버튼을 눌러 값을 새로 생성할 때마다 카운터를 증가시킨다. 시간 대신 이 카운터를 사용하는 방식은?",
    "options": [
      {
        "number": 1,
        "text": "시간 동기화"
      },
      {
        "number": 2,
        "text": "이벤트 동기화"
      },
      {
        "number": 3,
        "text": "정적 비밀번호"
      },
      {
        "number": 4,
        "text": "생체인증"
      }
    ],
    "answer": 2,
    "explanation": "이벤트 동기화 OTP는 생성 횟수와 관련된 카운터를 입력으로 사용한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q130",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "인증 서버가 OTP의 예상 값을 계산할 때 서버와 토큰의 현재 시각 대신 인증 횟수를 기준으로 삼는다. 어느 방식인가?",
    "options": [
      {
        "number": 1,
        "text": "이벤트 동기화"
      },
      {
        "number": 2,
        "text": "시간 동기화"
      },
      {
        "number": 3,
        "text": "공개키 인증서"
      },
      {
        "number": 4,
        "text": "얼굴 인식"
      }
    ],
    "answer": 1,
    "explanation": "두 장치가 생성 이벤트에 따른 카운터를 기준으로 값을 검증하는 방식이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q131",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "인증값을 만들 때 해시를 여러 번 연달아 적용한다. 사용 시에는 마지막에 생성한 값 쪽부터 역순으로 제출하고 서버는 한 번 해시해 이전 값과 비교한다. 어떤 방식인가?",
    "options": [
      {
        "number": 1,
        "text": "정적 PIN"
      },
      {
        "number": 2,
        "text": "시간 동기화 OTP"
      },
      {
        "number": 3,
        "text": "해시 체인 기반 OTP"
      },
      {
        "number": 4,
        "text": "전자서명 인증"
      }
    ],
    "answer": 3,
    "explanation": "해시 체인의 뒤쪽 값부터 역순으로 사용하면 서버가 해시 한 번으로 관계를 검증할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q132",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "직원의 지문이 맞는데도 장비가 때때로 출입을 거부한다. 이 사례에 대한 평가는?",
    "options": [
      {
        "number": 1,
        "text": "생체인증은 이런 오류가 불가능하다."
      },
      {
        "number": 2,
        "text": "모든 정상 사용자 인증이 성공하므로 오류가 아니다."
      },
      {
        "number": 3,
        "text": "생체 특징을 등록한 뒤에는 비교할 필요가 없다."
      },
      {
        "number": 4,
        "text": "생체인증에는 본인 거부 오류가 발생할 수 있다."
      }
    ],
    "answer": 4,
    "explanation": "생체 특징의 측정값은 매번 완전히 같지 않다. 따라서 본인이 거부되는 오류가 생길 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q133",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "등록한 홍채 특징을 몇 년 뒤 비교할 때도 사용할 수 있는지 평가한다. 어떤 특성인가?",
    "options": [
      {
        "number": 1,
        "text": "보편성"
      },
      {
        "number": 2,
        "text": "지속성"
      },
      {
        "number": 3,
        "text": "수용성"
      },
      {
        "number": 4,
        "text": "획득성"
      }
    ],
    "answer": 2,
    "explanation": "지속성은 시간이 지나도 인증에 사용할 수 있을 만큼 생체 특징이 안정적인 성질이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q134",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "등록된 사용자의 행동 습관을 비교하는 생체인식 사례는?",
    "options": [
      {
        "number": 1,
        "text": "눈의 홍채 무늬 비교"
      },
      {
        "number": 2,
        "text": "지문 융선 비교"
      },
      {
        "number": 3,
        "text": "타이핑할 때 키 누름 간격 비교"
      },
      {
        "number": 4,
        "text": "얼굴의 정적 윤곽 비교"
      }
    ],
    "answer": 3,
    "explanation": "타이핑 리듬은 사용자가 입력하는 방식에서 얻는 행동적 특성이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q135",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "직원이 통합 로그인 포털에서 인증한 뒤 연결된 업무 서비스에 비밀번호를 반복 입력하지 않는다. 해당 기능은?",
    "options": [
      {
        "number": 1,
        "text": "SSO"
      },
      {
        "number": 2,
        "text": "디스크 암호화"
      },
      {
        "number": 3,
        "text": "백업"
      },
      {
        "number": 4,
        "text": "패킷 필터링"
      }
    ],
    "answer": 1,
    "explanation": "SSO는 한 번의 인증으로 연동된 여러 서비스를 이용하게 하는 방식이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q136",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "협력사와 직원이 같은 포털을 쓴다. 중앙에서 로그인과 서비스별 접근 정책을 함께 관리하는 데 해당하는 것은?",
    "options": [
      {
        "number": 1,
        "text": "콘텐츠 복제"
      },
      {
        "number": 2,
        "text": "파일 압축"
      },
      {
        "number": 3,
        "text": "단일 서비스의 로컬 계정 관리"
      },
      {
        "number": 4,
        "text": "EAM"
      }
    ],
    "answer": 4,
    "explanation": "EAM은 연동된 자원의 인증과 접근 권한 관리를 중앙화한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q137",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "Kerberos에서 클라이언트가 파일 서버용 티켓을 받으려 한다. 그 서비스 티켓을 발급하는 구성요소는?",
    "options": [
      {
        "number": 1,
        "text": "감사 로그 수집기"
      },
      {
        "number": 2,
        "text": "티켓 발급 서버(TGS)"
      },
      {
        "number": 3,
        "text": "파일 서버의 디스크"
      },
      {
        "number": 4,
        "text": "DNS 리졸버"
      }
    ],
    "answer": 2,
    "explanation": "TGS는 클라이언트가 특정 서비스에 제시할 티켓을 발급한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q138",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "Kerberos 서비스가 너무 오래된 인증 요청을 거부한다. 이 판단에 직접 사용하는 정보는?",
    "options": [
      {
        "number": 1,
        "text": "파일 길이"
      },
      {
        "number": 2,
        "text": "클라이언트 이름의 글자 수"
      },
      {
        "number": 3,
        "text": "인증자의 타임스탬프"
      },
      {
        "number": 4,
        "text": "서비스 화면의 제목"
      }
    ],
    "answer": 3,
    "explanation": "타임스탬프로 요청 시각이 허용 범위 안인지 확인한다. 재전송 방지에는 재사용 검출도 중요하다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q139",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "Kerberos를 도입할 때 기본 인증 흐름의 목적을 바르게 설명한 것은?",
    "options": [
      {
        "number": 1,
        "text": "신뢰할 수 있는 티켓을 통해 서비스가 클라이언트를 인증하게 한다."
      },
      {
        "number": 2,
        "text": "인증하지 않은 클라이언트도 모두 허용한다."
      },
      {
        "number": 3,
        "text": "모든 사용자에게 동일한 서비스 권한을 자동 부여한다."
      },
      {
        "number": 4,
        "text": "티켓을 쓰면 별도의 접근 정책이 필요 없어지는 방식이다."
      }
    ],
    "answer": 1,
    "explanation": "Kerberos 티켓은 인증에 사용된다. 어떤 자원에 어떤 권한을 줄지는 서비스가 별도로 결정한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q140",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "신뢰되는 중앙 기관과 당사자가 장기 대칭키를 공유하고, 중앙 기관을 통해 세션키를 분배받는 Kerberos의 기반과 관련된 프로토콜은?",
    "options": [
      {
        "number": 1,
        "text": "RSA-PSS"
      },
      {
        "number": 2,
        "text": "디피–헬먼"
      },
      {
        "number": 3,
        "text": "OCSP"
      },
      {
        "number": 4,
        "text": "니덤–슈뢰더 대칭키 프로토콜"
      }
    ],
    "answer": 4,
    "explanation": "Kerberos의 중앙 신뢰 기관 및 대칭키 분배 구조는 니덤–슈뢰더 대칭키 프로토콜과 관련된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q141",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "Kerberos의 기본 티켓 기반 인증 구조를 설명한 것으로 맞는 것은?",
    "options": [
      {
        "number": 1,
        "text": "각 서비스가 사용자의 비밀번호를 평문으로 받아야 한다."
      },
      {
        "number": 2,
        "text": "중앙 KDC가 인증 과정에 참여하고 서비스 티켓 발급을 지원한다."
      },
      {
        "number": 3,
        "text": "인증 서버는 없고 모든 사용자가 하나의 키를 공유한다."
      },
      {
        "number": 4,
        "text": "타임스탬프를 쓰므로 단말 시계의 차이는 전혀 중요하지 않다."
      }
    ],
    "answer": 2,
    "explanation": "KDC는 인증과 티켓 발급을 담당한다. 시각 정보를 검증하므로 시간 동기화도 중요하다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q142",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "Kerberos 로그인에 직원들이 추측하기 쉬운 비밀번호를 사용한다. 관리자 판단으로 옳은 것은?",
    "options": [
      {
        "number": 1,
        "text": "티켓을 사용하므로 비밀번호 강도는 무관하다."
      },
      {
        "number": 2,
        "text": "모든 계정이 같은 비밀번호를 써도 좋다."
      },
      {
        "number": 3,
        "text": "Kerberos를 도입했다고 약한 비밀번호의 위험이 없어지지는 않는다."
      },
      {
        "number": 4,
        "text": "시계를 맞추면 약한 비밀번호 문제가 해결된다."
      }
    ],
    "answer": 3,
    "explanation": "티켓 기반 인증에도 비밀번호로 보호되는 과정이 있을 수 있으므로 약한 비밀번호를 피해야 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q143",
    "partId": 3,
    "sectionId": 10,
    "sectionTitle": "접근통제 보안 모델",
    "sourceSection": "SECTION 03 접근통제 보안 모델",
    "question": "외주 직원에게 특정 문서의 읽기 권한을 승인했다. 승인 결과로 적절한 것은?",
    "options": [
      {
        "number": 1,
        "text": "해당 문서 읽기만 허용하고 그 밖의 권한은 별도로 판단한다."
      },
      {
        "number": 2,
        "text": "모든 문서 수정을 허용한다."
      },
      {
        "number": 3,
        "text": "자원 관리자 권한까지 자동 부여한다."
      },
      {
        "number": 4,
        "text": "모든 부서의 기밀 자료를 공개한다."
      }
    ],
    "answer": 1,
    "explanation": "인가된 주체에게도 승인된 자원과 작업 범위만 허용한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q144",
    "partId": 3,
    "sectionId": 10,
    "sectionTitle": "접근통제 보안 모델",
    "sourceSection": "SECTION 03 접근통제 보안 모델",
    "question": "문서의 보안 등급을 중앙 정책이 강제한다. 문서 소유자도 그 제한을 무시할 수 없다. 이 모델은?",
    "options": [
      {
        "number": 1,
        "text": "DAC"
      },
      {
        "number": 2,
        "text": "RBAC"
      },
      {
        "number": 3,
        "text": "자유 공유"
      },
      {
        "number": 4,
        "text": "MAC"
      }
    ],
    "answer": 4,
    "explanation": "강제적 접근통제(MAC)는 중앙이 정한 정책과 레이블에 따라 접근을 제한한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q145",
    "partId": 3,
    "sectionId": 10,
    "sectionTitle": "접근통제 보안 모델",
    "sourceSection": "SECTION 03 접근통제 보안 모델",
    "question": "강제적 접근통제를 운영하는 기관에서 문서 소유자가 지인에게 등급 제한을 무시한 읽기 권한을 주려 한다. 올바른 판단은?",
    "options": [
      {
        "number": 1,
        "text": "소유자면 언제나 허용할 수 있다."
      },
      {
        "number": 2,
        "text": "소유자의 의사만으로 중앙 등급 정책을 우회할 수 없다."
      },
      {
        "number": 3,
        "text": "파일 이름을 바꾸면 정책이 자동 해제된다."
      },
      {
        "number": 4,
        "text": "등급은 기록용이므로 접근에 영향이 없다."
      }
    ],
    "answer": 2,
    "explanation": "강제적 접근통제에서 접근 판정은 소유자의 재량보다 중앙 정책을 따른다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q146",
    "partId": 3,
    "sectionId": 10,
    "sectionTitle": "접근통제 보안 모델",
    "sourceSection": "SECTION 03 접근통제 보안 모델",
    "question": "파일 소유자가 조직 정책에서 허용한 범위 안에서 다른 직원의 파일 읽기 권한을 지정한다. 주로 어떤 모델의 특징인가?",
    "options": [
      {
        "number": 1,
        "text": "MAC"
      },
      {
        "number": 2,
        "text": "Bell–LaPadula"
      },
      {
        "number": 3,
        "text": "DAC"
      },
      {
        "number": 4,
        "text": "Biba"
      }
    ],
    "answer": 3,
    "explanation": "임의적 접근통제(DAC)는 소유자 등의 권한 있는 주체가 자원 접근 권한을 위임할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q147",
    "partId": 3,
    "sectionId": 10,
    "sectionTitle": "접근통제 보안 모델",
    "sourceSection": "SECTION 03 접근통제 보안 모델",
    "question": "은행이 역할별 권한과 직무 분리를 적용한다. 다음 중 역할 대신 강제적인 기밀 등급을 기준으로 한 규칙은?",
    "options": [
      {
        "number": 1,
        "text": "승인자는 자기 전표를 승인할 수 없다."
      },
      {
        "number": 2,
        "text": "입력 담당자는 입력 메뉴만 사용한다."
      },
      {
        "number": 3,
        "text": "조회 역할에는 원본 테이블 변경 권한을 주지 않는다."
      },
      {
        "number": 4,
        "text": "주체의 인가 등급과 문서의 기밀 등급을 비교한다."
      }
    ],
    "answer": 4,
    "explanation": "인가 등급과 기밀 등급을 비교하는 규칙은 MAC의 전형적인 예다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q148",
    "partId": 3,
    "sectionId": 10,
    "sectionTitle": "접근통제 보안 모델",
    "sourceSection": "SECTION 03 접근통제 보안 모델",
    "question": "세 정책을 분류한다. (가) 중앙이 붙인 등급으로 제한, (나) 파일 소유자가 허용 대상 지정, (다) 담당 직무에 따라 권한 배정. 순서대로 맞는 것은?",
    "options": [
      {
        "number": 1,
        "text": "MAC·DAC·RBAC"
      },
      {
        "number": 2,
        "text": "DAC·MAC·RBAC"
      },
      {
        "number": 3,
        "text": "RBAC·DAC·MAC"
      },
      {
        "number": 4,
        "text": "MAC·RBAC·DAC"
      }
    ],
    "answer": 1,
    "explanation": "중앙 등급, 소유자 재량, 업무 역할은 각각 MAC, DAC, RBAC의 대표적인 기준이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q149",
    "partId": 3,
    "sectionId": 10,
    "sectionTitle": "접근통제 보안 모델",
    "sourceSection": "SECTION 03 접근통제 보안 모델",
    "question": "권한 정책을 검토하면서 모델과 사례를 연결했다. 바르게 연결된 것은?",
    "options": [
      {
        "number": 1,
        "text": "MAC·파일 소유자가 등급 제한을 마음대로 해제"
      },
      {
        "number": 2,
        "text": "RBAC·업무 역할에 권한을 묶어 사용자에게 해당 역할 부여"
      },
      {
        "number": 3,
        "text": "DAC·소유자와 관계없이 중앙 등급만으로 판정"
      },
      {
        "number": 4,
        "text": "RBAC·모든 사용자에게 같은 관리 권한 지급"
      }
    ],
    "answer": 2,
    "explanation": "RBAC는 사용자에게 역할을 부여하고 역할을 통해 권한을 제공한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q150",
    "partId": 3,
    "sectionId": 10,
    "sectionTitle": "접근통제 보안 모델",
    "sourceSection": "SECTION 03 접근통제 보안 모델",
    "question": "시스템이 모든 사용자와 모든 문서의 접근 권한을 행·열 표의 각 칸에 그대로 저장한다. 사용자가 늘면서 빈 칸도 크게 늘었다. 이 표현 방식은?",
    "options": [
      {
        "number": 1,
        "text": "객체별 접근통제 목록"
      },
      {
        "number": 2,
        "text": "주체별 권한 목록"
      },
      {
        "number": 3,
        "text": "접근통제 매트릭스"
      },
      {
        "number": 4,
        "text": "역할 계층"
      }
    ],
    "answer": 3,
    "explanation": "접근통제 매트릭스는 주체와 객체의 조합별 권한을 표로 표현한다. 조합이 많으면 전체 표가 커질 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q151",
    "partId": 3,
    "sectionId": 10,
    "sectionTitle": "접근통제 보안 모델",
    "sourceSection": "SECTION 03 접근통제 보안 모델",
    "question": "엄격한 무결성 모델에서 높은 무결성 작업이 낮은 무결성 자료를 읽지 못하고, 낮은 무결성 작업이 높은 무결성 자료를 바꾸지 못하게 한다. 해당 모델은?",
    "options": [
      {
        "number": 1,
        "text": "Bell–LaPadula"
      },
      {
        "number": 2,
        "text": "만리장성"
      },
      {
        "number": 3,
        "text": "DAC"
      },
      {
        "number": 4,
        "text": "Biba"
      }
    ],
    "answer": 4,
    "explanation": "엄격한 Biba 모델은 낮은 등급 읽기와 높은 등급 쓰기를 금지해 무결성을 보호한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q152",
    "partId": 3,
    "sectionId": 10,
    "sectionTitle": "접근통제 보안 모델",
    "sourceSection": "SECTION 03 접근통제 보안 모델",
    "question": "Bell–LaPadula 모델의 단순 보안 속성을 적용한다. 주체가 자신의 허가 수준보다 높은 기밀 문서를 읽으려 하면?",
    "options": [
      {
        "number": 1,
        "text": "거부된다."
      },
      {
        "number": 2,
        "text": "쓰기 권한이 있으면 허용된다."
      },
      {
        "number": 3,
        "text": "읽기만 하므로 허용된다."
      },
      {
        "number": 4,
        "text": "모든 상위 문서는 공개 대상이다."
      }
    ],
    "answer": 1,
    "explanation": "단순 보안 속성은 위로 읽기 금지(No read up)다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q153",
    "partId": 3,
    "sectionId": 10,
    "sectionTitle": "접근통제 보안 모델",
    "sourceSection": "SECTION 03 접근통제 보안 모델",
    "question": "Bell–LaPadula 모델의 기본 별 속성에서 기밀 수준이 높은 프로세스가 낮은 수준의 파일에 결과를 쓰려 한다. 판정은?",
    "options": [
      {
        "number": 1,
        "text": "파일 크기가 작으면 허용한다."
      },
      {
        "number": 2,
        "text": "쓰기만 하므로 등급과 무관하게 허용한다."
      },
      {
        "number": 3,
        "text": "하위 수준으로 쓰는 것이므로 거부한다."
      },
      {
        "number": 4,
        "text": "상위 주체의 데이터는 항상 공개 가능하므로 허용한다."
      }
    ],
    "answer": 3,
    "explanation": "별 속성의 아래로 쓰기 금지(No write down)는 정보가 더 낮은 보안 수준으로 흘러가는 일을 막는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q154",
    "partId": 3,
    "sectionId": 10,
    "sectionTitle": "접근통제 보안 모델",
    "sourceSection": "SECTION 03 접근통제 보안 모델",
    "question": "컨설턴트가 한 고객사의 비공개 자료를 본 뒤에는 그 고객과 이해가 충돌하는 경쟁사의 비공개 자료를 볼 수 없게 한다. 해당 모델은?",
    "options": [
      {
        "number": 1,
        "text": "Bell–LaPadula"
      },
      {
        "number": 2,
        "text": "만리장성(Chinese Wall)"
      },
      {
        "number": 3,
        "text": "Biba"
      },
      {
        "number": 4,
        "text": "접근통제 매트릭스"
      }
    ],
    "answer": 2,
    "explanation": "만리장성 모델은 과거 접근 이력을 바탕으로 이해충돌을 방지한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q155",
    "partId": 3,
    "sectionId": 11,
    "sectionTitle": "접근통제 보안위협 및 대응책",
    "sourceSection": "SECTION 04 접근통제 보안위협 및 대응책",
    "question": "교육 자료에서 사전에 정해 둔 단어 목록을 검사하는 방식과, 정해진 범위의 문자 조합을 빠짐없이 검사하는 방식을 비교한다. 뒤의 방식은?",
    "options": [
      {
        "number": 1,
        "text": "사전 대입"
      },
      {
        "number": 2,
        "text": "스니핑"
      },
      {
        "number": 3,
        "text": "위장"
      },
      {
        "number": 4,
        "text": "무차별 대입"
      }
    ],
    "answer": 4,
    "explanation": "무차별 대입은 정해진 후보 공간을 전수 검사한다. 사전 대입은 미리 정한 후보 목록을 사용한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q156",
    "partId": 3,
    "sectionId": 11,
    "sectionTitle": "접근통제 보안위협 및 대응책",
    "sourceSection": "SECTION 04 접근통제 보안위협 및 대응책",
    "question": "보안 점검 보고서에서 사전 계산된 레인보우 테이블과 비밀번호 저장 방어를 비교한다. 사용자별로 고유한 솔트를 붙이는 이유는?",
    "options": [
      {
        "number": 1,
        "text": "같은 사전 계산 결과를 여러 계정에 재사용하기 어렵게 하려고"
      },
      {
        "number": 2,
        "text": "비밀번호를 해시에서 복호화할 수 있게 하려고"
      },
      {
        "number": 3,
        "text": "모든 사용자의 해시값을 동일하게 만들려고"
      },
      {
        "number": 4,
        "text": "솔트만 알면 로그인할 수 있게 하려고"
      }
    ],
    "answer": 1,
    "explanation": "솔트가 다르면 같은 비밀번호의 해시 계산 입력도 달라진다. 따라서 기존 사전 계산 결과를 그대로 공유해 쓰기 어렵다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q157",
    "partId": 4,
    "sectionId": 12,
    "sectionTitle": "보안 운영체제",
    "sourceSection": "SECTION 01 보안 운영체제",
    "question": "모든 파일 접근 요청이 통과하며 정책 위반 요청을 차단하는 참조 모니터를 실제로 구현한 보호 구성요소는?",
    "options": [
      {
        "number": 1,
        "text": "작업 스케줄러"
      },
      {
        "number": 2,
        "text": "로그 뷰어"
      },
      {
        "number": 3,
        "text": "보안 커널"
      },
      {
        "number": 4,
        "text": "압축기"
      }
    ],
    "answer": 3,
    "explanation": "보안 커널은 참조 모니터의 통제 기능을 구현한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q158",
    "partId": 4,
    "sectionId": 12,
    "sectionTitle": "보안 운영체제",
    "sourceSection": "SECTION 01 보안 운영체제",
    "question": "보안 정책을 강제한다고 신뢰해야 하는 하드웨어와 소프트웨어를 통틀어 무엇이라 하는가?",
    "options": [
      {
        "number": 1,
        "text": "TCB"
      },
      {
        "number": 2,
        "text": "API"
      },
      {
        "number": 3,
        "text": "파일시스템"
      },
      {
        "number": 4,
        "text": "ACL"
      }
    ],
    "answer": 1,
    "explanation": "신뢰 컴퓨팅 기반(TCB)은 정책 강제를 담당하는 신뢰 구성요소 전체다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q159",
    "partId": 4,
    "sectionId": 12,
    "sectionTitle": "보안 운영체제",
    "sourceSection": "SECTION 01 보안 운영체제",
    "question": "부팅 구성의 측정값과 장치 키를 하드웨어에 기반해 보호하는 데 쓰는 구성요소는?",
    "options": [
      {
        "number": 1,
        "text": "파일 압축기"
      },
      {
        "number": 2,
        "text": "TPM"
      },
      {
        "number": 3,
        "text": "DNS 캐시"
      },
      {
        "number": 4,
        "text": "시스템 로그"
      }
    ],
    "answer": 2,
    "explanation": "TPM은 키 보호와 부팅 무결성 측정 등을 지원한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q160",
    "partId": 4,
    "sectionId": 13,
    "sectionTitle": "클라이언트 보안",
    "sourceSection": "SECTION 02 클라이언트 보안",
    "question": "유용한 프로그램으로 보이지만 숨은 악성 기능을 가진 파일을 분류하려 한다. 가장 알맞은 것은?",
    "options": [
      {
        "number": 1,
        "text": "스크립트 로그"
      },
      {
        "number": 2,
        "text": "방화벽"
      },
      {
        "number": 3,
        "text": "정상 백업"
      },
      {
        "number": 4,
        "text": "트로이목마"
      }
    ],
    "answer": 4,
    "explanation": "트로이목마는 정상 프로그램처럼 보이게 만들어 악성 동작을 숨긴다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q161",
    "partId": 4,
    "sectionId": 13,
    "sectionTitle": "클라이언트 보안",
    "sourceSection": "SECTION 02 클라이언트 보안",
    "question": "트로이목마와 웜을 구분하는 특징은?",
    "options": [
      {
        "number": 1,
        "text": "웜은 어떤 환경에서도 복제되지 않는다."
      },
      {
        "number": 2,
        "text": "웜은 항상 정상 문서로 위장해야 한다."
      },
      {
        "number": 3,
        "text": "트로이목마는 반드시 모든 호스트로 복제된다."
      },
      {
        "number": 4,
        "text": "트로이목마의 정의에 자가 전파가 필수는 아니다."
      }
    ],
    "answer": 4,
    "explanation": "트로이목마의 핵심은 위장이며 네트워크를 통한 자가 전파는 웜의 대표 특징이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q162",
    "partId": 4,
    "sectionId": 13,
    "sectionTitle": "클라이언트 보안",
    "sourceSection": "SECTION 02 클라이언트 보안",
    "question": "키로거가 의심되는 PC에서 할 행동으로 적절한 것은?",
    "options": [
      {
        "number": 1,
        "text": "같은 PC에서 복구 코드도 입력한다."
      },
      {
        "number": 2,
        "text": "민감한 입력을 중단하고 신뢰할 수 있는 환경에서 계정 보호 조치를 한다."
      },
      {
        "number": 3,
        "text": "타이핑 속도만 바꾼다."
      },
      {
        "number": 4,
        "text": "비밀번호를 다시 입력해 확인한다."
      }
    ],
    "answer": 2,
    "explanation": "키로거는 입력된 키를 기록할 수 있어 입력 속도를 바꾸는 것만으로 보호되지 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q163",
    "partId": 4,
    "sectionId": 13,
    "sectionTitle": "클라이언트 보안",
    "sourceSection": "SECTION 02 클라이언트 보안",
    "question": "문서 응용프로그램의 매크로 실행 기능을 이용하는 바이러스 유형은?",
    "options": [
      {
        "number": 1,
        "text": "은폐형"
      },
      {
        "number": 2,
        "text": "매크로형"
      },
      {
        "number": 3,
        "text": "파일리스라는 이름만으로 특정되는 유형"
      },
      {
        "number": 4,
        "text": "원시형"
      }
    ],
    "answer": 2,
    "explanation": "매크로 바이러스는 문서에 포함된 매크로 환경에서 실행된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q164",
    "partId": 4,
    "sectionId": 13,
    "sectionTitle": "클라이언트 보안",
    "sourceSection": "SECTION 02 클라이언트 보안",
    "question": "악성코드 분류에서 웜의 대표적인 특징은?",
    "options": [
      {
        "number": 1,
        "text": "항상 사용자가 파일을 일일이 복사해야 확산된다."
      },
      {
        "number": 2,
        "text": "다른 컴퓨터로 스스로 전파할 수 있다."
      },
      {
        "number": 3,
        "text": "기밀성만 보호한다."
      },
      {
        "number": 4,
        "text": "오류 감시만 수행한다."
      }
    ],
    "answer": 2,
    "explanation": "웜은 호스트 사이에서 자가 전파할 수 있는 악성코드다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q165",
    "partId": 4,
    "sectionId": 13,
    "sectionTitle": "클라이언트 보안",
    "sourceSection": "SECTION 02 클라이언트 보안",
    "question": "감염된 여러 장치가 하나의 집단으로 제어되는 상황을 무엇이라 하는가?",
    "options": [
      {
        "number": 1,
        "text": "봇넷"
      },
      {
        "number": 2,
        "text": "공개키 기반구조"
      },
      {
        "number": 3,
        "text": "백업 풀"
      },
      {
        "number": 4,
        "text": "파일 인덱스"
      }
    ],
    "answer": 1,
    "explanation": "봇넷은 감염된 장치들이 제어를 받아 동작하는 집단이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q166",
    "partId": 4,
    "sectionId": 13,
    "sectionTitle": "클라이언트 보안",
    "sourceSection": "SECTION 02 클라이언트 보안",
    "question": "구형 Windows용 CD에서 매체의 자동 실행 관련 설정을 조사한다. 확인할 파일은?",
    "options": [
      {
        "number": 1,
        "text": "boot.ini"
      },
      {
        "number": 2,
        "text": "desktop.ini"
      },
      {
        "number": 3,
        "text": "autorun.inf"
      },
      {
        "number": 4,
        "text": "hosts"
      }
    ],
    "answer": 3,
    "explanation": "autorun.inf는 지원되는 매체에서 AutoRun 동작을 지정한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q167",
    "partId": 4,
    "sectionId": 13,
    "sectionTitle": "클라이언트 보안",
    "sourceSection": "SECTION 02 클라이언트 보안",
    "question": "본문이 있는 HTTP/1.1 요청에서 헤더와 본문을 구분하는 것은?",
    "options": [
      {
        "number": 1,
        "text": "빈 줄"
      },
      {
        "number": 2,
        "text": "별도의 상태 코드"
      },
      {
        "number": 3,
        "text": "두 번째 요청 행"
      },
      {
        "number": 4,
        "text": "인증서 파일"
      }
    ],
    "answer": 1,
    "explanation": "HTTP/1.1 요청은 요청 행과 헤더 뒤에 빈 줄을 두고, 필요한 경우 본문을 보낸다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q168",
    "partId": 4,
    "sectionId": 13,
    "sectionTitle": "클라이언트 보안",
    "sourceSection": "SECTION 02 클라이언트 보안",
    "question": "웹 폼이 업로드 파일을 요청 본문에 담아 서버에 처리하도록 제출한다. 일반적으로 사용하는 메서드는?",
    "options": [
      {
        "number": 1,
        "text": "HEAD"
      },
      {
        "number": 2,
        "text": "TRACE"
      },
      {
        "number": 3,
        "text": "OPTIONS"
      },
      {
        "number": 4,
        "text": "POST"
      }
    ],
    "answer": 4,
    "explanation": "POST는 서버에 제출한 데이터를 처리하도록 요청할 때 쓰인다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q169",
    "partId": 4,
    "sectionId": 13,
    "sectionTitle": "클라이언트 보안",
    "sourceSection": "SECTION 02 클라이언트 보안",
    "question": "서버가 요청 헤더에서 링크를 따라오기 전 페이지 주소를 확인하려 한다. 브라우저가 해당 정보를 보내는 경우 어떤 헤더인가?",
    "options": [
      {
        "number": 1,
        "text": "Host"
      },
      {
        "number": 2,
        "text": "Content-Length"
      },
      {
        "number": 3,
        "text": "Accept"
      },
      {
        "number": 4,
        "text": "Referer"
      }
    ],
    "answer": 4,
    "explanation": "Referer는 정책상 전송되는 경우 참조 페이지 주소를 나타낸다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q170",
    "partId": 4,
    "sectionId": 13,
    "sectionTitle": "클라이언트 보안",
    "sourceSection": "SECTION 02 클라이언트 보안",
    "question": "GET과 같은 자원에 대해 응답 본문 없이 응답 헤더 정보를 확인하려 한다. 어떤 메서드를 쓰는가?",
    "options": [
      {
        "number": 1,
        "text": "PUT"
      },
      {
        "number": 2,
        "text": "HEAD"
      },
      {
        "number": 3,
        "text": "POST"
      },
      {
        "number": 4,
        "text": "DELETE"
      }
    ],
    "answer": 2,
    "explanation": "HEAD 응답은 GET과 대응하는 헤더를 제공하며 본문을 보내지 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q171",
    "partId": 4,
    "sectionId": 13,
    "sectionTitle": "클라이언트 보안",
    "sourceSection": "SECTION 02 클라이언트 보안",
    "question": "웹 서버가 요청받은 주소에 해당하는 자원을 찾지 못했다고 응답한다. 일반적으로 어떤 코드인가?",
    "options": [
      {
        "number": 1,
        "text": "200"
      },
      {
        "number": 2,
        "text": "500"
      },
      {
        "number": 3,
        "text": "404"
      },
      {
        "number": 4,
        "text": "301"
      }
    ],
    "answer": 3,
    "explanation": "404는 요청 대상 자원을 찾지 못했음을 나타낸다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q172",
    "partId": 4,
    "sectionId": 13,
    "sectionTitle": "클라이언트 보안",
    "sourceSection": "SECTION 02 클라이언트 보안",
    "question": "구형 IE에서 사내 주소만 별도로 묶어 보안 정책을 설정한다. 이 목적에 해당하는 보안 영역은?",
    "options": [
      {
        "number": 1,
        "text": "보안 등급 지정 사이트"
      },
      {
        "number": 2,
        "text": "인터넷"
      },
      {
        "number": 3,
        "text": "로컬 인트라넷"
      },
      {
        "number": 4,
        "text": "일반 사이트"
      }
    ],
    "answer": 3,
    "explanation": "로컬 인트라넷은 사내 네트워크 사이트를 위한 IE 보안 영역이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q173",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "운영체제 영역과 사용자 영역을 별도 파일시스템으로 나눌 때 얻는 이점은?",
    "options": [
      {
        "number": 1,
        "text": "분할만으로 접근권한 검사가 필요 없어지게 된다."
      },
      {
        "number": 2,
        "text": "모든 읽기 속도가 반드시 빨라진다."
      },
      {
        "number": 3,
        "text": "영역별 백업이나 마운트 정책 적용이 쉬워진다."
      },
      {
        "number": 4,
        "text": "같은 디스크가 고장 나도 항상 안전하다."
      }
    ],
    "answer": 3,
    "explanation": "파일시스템을 분리하면 각 영역을 독립적으로 백업하거나 관리하기 쉽다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q174",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "구형 Windows에서 명령 프롬프트로 워크스테이션 서비스의 통계 시작 시각을 확인한다. 해당 명령은?",
    "options": [
      {
        "number": 1,
        "text": "net share"
      },
      {
        "number": 2,
        "text": "net statistics workstation"
      },
      {
        "number": 3,
        "text": "net user"
      },
      {
        "number": 4,
        "text": "net use"
      }
    ],
    "answer": 2,
    "explanation": "net statistics workstation은 워크스테이션 통계의 시작 시각을 보여준다. 이 시각은 서비스 시작 시각이므로 OS 부팅 시각과 항상 일치하지는 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q175",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "Windows에서 USB를 포맷할 때 일반적으로 기본 지원되는 파일시스템의 조합은?",
    "options": [
      {
        "number": 1,
        "text": "FAT32·exFAT"
      },
      {
        "number": 2,
        "text": "APFS·ext4"
      },
      {
        "number": 3,
        "text": "XFS·Btrfs"
      },
      {
        "number": 4,
        "text": "ext4·XFS"
      }
    ],
    "answer": 1,
    "explanation": "Windows는 FAT32와 exFAT를 기본 지원한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q176",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "볼륨 포맷에서 NTFS의 클러스터가 뜻하는 것은?",
    "options": [
      {
        "number": 1,
        "text": "사용자 ID의 단위"
      },
      {
        "number": 2,
        "text": "파일 공간 할당의 기본 단위"
      },
      {
        "number": 3,
        "text": "경로 길이의 단위"
      },
      {
        "number": 4,
        "text": "폴더 개수의 단위"
      }
    ],
    "answer": 2,
    "explanation": "클러스터는 하나 이상의 섹터를 묶은 파일시스템의 할당 단위다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q177",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "서로 다른 사용자에게 같은 폴더의 읽기·수정 권한을 다르게 주려 한다. NTFS의 어떤 기능이 직접 쓰이는가?",
    "options": [
      {
        "number": 1,
        "text": "문자 인코딩"
      },
      {
        "number": 2,
        "text": "파일 이름 길이 제한"
      },
      {
        "number": 3,
        "text": "디스크 볼륨 이름"
      },
      {
        "number": 4,
        "text": "파일·폴더 접근 제어 목록"
      }
    ],
    "answer": 4,
    "explanation": "NTFS의 ACL로 사용자나 그룹별 파일·폴더 접근 권한을 설정할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q178",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "5GiB인 단일 파일을 저장해야 한다. FAT32와 NTFS 중 올바른 판단은?",
    "options": [
      {
        "number": 1,
        "text": "NTFS에 저장할 수 있으며 FAT32의 단일 파일 한도를 넘는다."
      },
      {
        "number": 2,
        "text": "FAT32만 가능하다."
      },
      {
        "number": 3,
        "text": "파일 확장자를 바꾸면 FAT32에 저장 가능하다."
      },
      {
        "number": 4,
        "text": "둘 다 2GiB 제한이 있다."
      }
    ],
    "answer": 1,
    "explanation": "FAT32의 단일 파일 한도는 4GiB 미만이므로 5GiB 파일은 담을 수 없다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q179",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "NTFS 볼륨에서 파일과 디렉터리의 속성 레코드를 확인하려 한다. 핵심 구조는?",
    "options": [
      {
        "number": 1,
        "text": "부트 메뉴"
      },
      {
        "number": 2,
        "text": "FAT"
      },
      {
        "number": 3,
        "text": "MFT"
      },
      {
        "number": 4,
        "text": "슈퍼블록"
      }
    ],
    "answer": 3,
    "explanation": "MFT는 NTFS에서 파일과 디렉터리의 메타데이터를 기록하는 핵심 테이블이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q180",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "Windows가 내부 서비스에 사용하며 일반 사용자처럼 대화형으로 로그인하는 계정이 아닌 것은?",
    "options": [
      {
        "number": 1,
        "text": "개별 직원 계정"
      },
      {
        "number": 2,
        "text": "로컬 Administrator"
      },
      {
        "number": 3,
        "text": "로컬 Guest"
      },
      {
        "number": 4,
        "text": "LocalSystem"
      }
    ],
    "answer": 4,
    "explanation": "LocalSystem은 높은 로컬 권한을 가진 운영체제용 서비스 계정이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q181",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "PC A에서만 로컬 Administrators에 속한 사용자가 PC B도 관리할 수 있는가?",
    "options": [
      {
        "number": 1,
        "text": "B에 별도 권한이 없다면 A의 로컬 그룹 소속만으로는 관리할 수 없다."
      },
      {
        "number": 2,
        "text": "같은 제조사 PC이면 가능하다."
      },
      {
        "number": 3,
        "text": "A의 권한이 B에 자동 복제된다."
      },
      {
        "number": 4,
        "text": "같은 네트워크이면 항상 가능하다."
      }
    ],
    "answer": 1,
    "explanation": "로컬 관리자 그룹의 권한은 해당 컴퓨터에 적용된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q182",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "Windows의 일반 Users 그룹 사용자에게 기본적으로 기대할 수 있는 동작은?",
    "options": [
      {
        "number": 1,
        "text": "다른 계정을 관리자 그룹에 추가한다."
      },
      {
        "number": 2,
        "text": "자기 프로필 내 허용된 파일을 관리한다."
      },
      {
        "number": 3,
        "text": "모든 시스템 설정을 바꾼다."
      },
      {
        "number": 4,
        "text": "다른 계정의 비밀번호를 임의로 바꾼다."
      }
    ],
    "answer": 2,
    "explanation": "일반 사용자는 자기 프로필 등의 허용된 영역에서 작업하며 관리자 권한은 따로 필요하다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q183",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "Windows에서 로컬 보안 정책과 사용자 로그온 검증을 담당하는 구성요소는?",
    "options": [
      {
        "number": 1,
        "text": "LSA"
      },
      {
        "number": 2,
        "text": "TPM"
      },
      {
        "number": 3,
        "text": "DNS 클라이언트"
      },
      {
        "number": 4,
        "text": "MFT"
      }
    ],
    "answer": 1,
    "explanation": "LSA는 Windows의 로컬 보안 정책과 인증을 담당한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q184",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "Windows 내장 Administrator 계정의 SID 끝부분을 확인한다. 해당 계정을 식별하는 잘 알려진 RID는?",
    "options": [
      {
        "number": 1,
        "text": "500"
      },
      {
        "number": 2,
        "text": "501"
      },
      {
        "number": 3,
        "text": "0"
      },
      {
        "number": 4,
        "text": "100"
      }
    ],
    "answer": 1,
    "explanation": "내장 Administrator의 RID는 500이다. 이름을 변경해도 RID는 동일하다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q185",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "SAM 파일을 일반 직원 그룹이 읽을 수 있게 설정한 사실을 발견했다. 적절한 대응은?",
    "options": [
      {
        "number": 1,
        "text": "불필요한 접근 권한을 제거하고 운영체제의 보호 설정을 유지한다."
      },
      {
        "number": 2,
        "text": "전 직원에게 읽기를 추가한다."
      },
      {
        "number": 3,
        "text": "파일 이름만 바꾼다."
      },
      {
        "number": 4,
        "text": "공용 폴더에 복사한다."
      }
    ],
    "answer": 1,
    "explanation": "SAM은 로컬 계정의 민감한 인증 정보를 담으므로 접근을 제한해야 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q186",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "특정 파일을 읽을 수 있는지를 평가할 때 NTFS가 직접 사용하는 것은?",
    "options": [
      {
        "number": 1,
        "text": "상위 폴더 이름"
      },
      {
        "number": 2,
        "text": "디스크 모델명"
      },
      {
        "number": 3,
        "text": "해당 파일의 유효한 ACL과 사용자의 접근 토큰"
      },
      {
        "number": 4,
        "text": "파일 확장자"
      }
    ],
    "answer": 3,
    "explanation": "NTFS는 계정과 그룹 정보가 들어 있는 접근 토큰을 개별 객체의 ACL과 비교한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q187",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "자신이 관리하는 Windows 서버에서 그 서버가 제공하는 공유 자원 목록을 로컬에서 확인하는 명령은?",
    "options": [
      {
        "number": 1,
        "text": "net session"
      },
      {
        "number": 2,
        "text": "net use"
      },
      {
        "number": 3,
        "text": "net share"
      },
      {
        "number": 4,
        "text": "net user"
      }
    ],
    "answer": 3,
    "explanation": "net share는 해당 컴퓨터가 제공하는 공유 자원을 표시한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q188",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "Windows의 특수 공유 중 이름 있는 파이프를 사용하는 프로세스 간 통신용 공유는?",
    "options": [
      {
        "number": 1,
        "text": "D$"
      },
      {
        "number": 2,
        "text": "C$"
      },
      {
        "number": 3,
        "text": "IPC$"
      },
      {
        "number": 4,
        "text": "ADMIN$"
      }
    ],
    "answer": 3,
    "explanation": "IPC$는 프로세스 간 통신을 지원하며, 익명 접근 허용 범위는 시스템 정책에 따른다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q189",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "Windows 컴퓨터 전체의 하드웨어와 설치 소프트웨어 설정을 조회하는 루트 키는?",
    "options": [
      {
        "number": 1,
        "text": "HKEY_USERS"
      },
      {
        "number": 2,
        "text": "HKEY_CURRENT_USER"
      },
      {
        "number": 3,
        "text": "HKEY_LOCAL_MACHINE"
      },
      {
        "number": 4,
        "text": "HKEY_CLASSES_ROOT"
      }
    ],
    "answer": 3,
    "explanation": "HKLM은 컴퓨터 전체에 적용되는 하드웨어와 소프트웨어 구성을 포함한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q190",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "로컬 계정과 비밀번호 검증에 쓰이는 정보를 담는 레지스트리 하이브는?",
    "options": [
      {
        "number": 1,
        "text": "SOFTWARE"
      },
      {
        "number": 2,
        "text": "SYSTEM"
      },
      {
        "number": 3,
        "text": "DEFAULT"
      },
      {
        "number": 4,
        "text": "SAM"
      }
    ],
    "answer": 4,
    "explanation": "SAM 하이브에는 로컬 사용자 계정과 인증 관련 정보가 저장된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q191",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "현재 로그인한 사용자의 환경설정이 연결되는 레지스트리 루트 키는?",
    "options": [
      {
        "number": 1,
        "text": "HKEY_CLASSES_ROOT"
      },
      {
        "number": 2,
        "text": "HKEY_CURRENT_CONFIG"
      },
      {
        "number": 3,
        "text": "HKEY_LOCAL_MACHINE"
      },
      {
        "number": 4,
        "text": "HKEY_CURRENT_USER"
      }
    ],
    "answer": 4,
    "explanation": "HKCU는 현재 사용자의 프로필에 속하는 설정을 보여준다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q192",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "다음 중 원격 화면과 입력 제어가 주된 역할인 도구로 분류하기 어려운 것은?",
    "options": [
      {
        "number": 1,
        "text": "원격 데스크톱"
      },
      {
        "number": 2,
        "text": "pcAnywhere"
      },
      {
        "number": 3,
        "text": "VNC"
      },
      {
        "number": 4,
        "text": "Microsoft BackOffice 서버 제품군"
      }
    ],
    "answer": 4,
    "explanation": "BackOffice는 서버 제품군이다. 나머지는 원격 화면 제어에 쓰인다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q193",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "업무 서버가 원격 종료를 허용해야 한다. 권한 부여로 알맞은 것은?",
    "options": [
      {
        "number": 1,
        "text": "외부 방문자 계정에 우선 부여한다."
      },
      {
        "number": 2,
        "text": "필요한 서버 운영자에게만 부여한다."
      },
      {
        "number": 3,
        "text": "전 직원에게 자동 부여한다."
      },
      {
        "number": 4,
        "text": "모든 로그인 사용자에게 부여한다."
      }
    ],
    "answer": 2,
    "explanation": "원격 종료는 서비스 중단을 일으킬 수 있으므로 필요한 사람만 갖도록 제한한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q194",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "리눅스에서 시스템 설정, 임시 파일, 장치 파일을 담는 대표 디렉터리를 순서대로 고른 것은?",
    "options": [
      {
        "number": 1,
        "text": "/etc·/tmp·/dev"
      },
      {
        "number": 2,
        "text": "/tmp·/dev·/etc"
      },
      {
        "number": 3,
        "text": "/usr·/etc·/var"
      },
      {
        "number": 4,
        "text": "/dev·/etc·/tmp"
      }
    ],
    "answer": 1,
    "explanation": "시스템 설정은 /etc, 임시 파일은 /tmp, 장치 파일은 /dev에 둔다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q195",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "전통적인 유닉스 파일시스템에서 전체 블록 수와 빈 블록 현황 같은 볼륨 관리 정보가 담기는 곳은?",
    "options": [
      {
        "number": 1,
        "text": "슈퍼블록"
      },
      {
        "number": 2,
        "text": "데이터 블록"
      },
      {
        "number": 3,
        "text": "부트 블록"
      },
      {
        "number": 4,
        "text": "사용자 홈"
      }
    ],
    "answer": 1,
    "explanation": "슈퍼블록은 파일시스템 전체의 구조와 관리 정보를 담는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q196",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "일반적인 유닉스 계열 파일시스템에서 inode에 직접 저장되지 않는 것은?",
    "options": [
      {
        "number": 1,
        "text": "파일 소유자"
      },
      {
        "number": 2,
        "text": "디렉터리에 등록된 파일 이름"
      },
      {
        "number": 3,
        "text": "파일 크기"
      },
      {
        "number": 4,
        "text": "권한 비트"
      }
    ],
    "answer": 2,
    "explanation": "파일 이름은 디렉터리 항목에서 inode 번호와 연결된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q197",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "파일 내용은 그대로 두고 권한만 바꿨다. 변경을 반영하는 시각 속성은?",
    "options": [
      {
        "number": 1,
        "text": "ctime"
      },
      {
        "number": 2,
        "text": "부팅 시각"
      },
      {
        "number": 3,
        "text": "mtime"
      },
      {
        "number": 4,
        "text": "atime"
      }
    ],
    "answer": 1,
    "explanation": "ctime은 inode 상태가 바뀐 시각이다. mtime은 데이터 내용의 변경 시각이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q198",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "리눅스에서 PID 1의 역할을 설명한 것은?",
    "options": [
      {
        "number": 1,
        "text": "시스템 초기화를 맡는 첫 사용자 공간 프로세스다."
      },
      {
        "number": 2,
        "text": "항상 DNS 서버다."
      },
      {
        "number": 3,
        "text": "항상 사용자 터미널이다."
      },
      {
        "number": 4,
        "text": "가장 마지막에 시작된 프로세스다."
      }
    ],
    "answer": 1,
    "explanation": "PID 1은 초기화 프로세스이며 많은 배포판에서 systemd가 담당한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q199",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "프로세스가 실행을 끝냈지만 부모가 종료 상태를 아직 회수하지 않았다. 상태는?",
    "options": [
      {
        "number": 1,
        "text": "좀비"
      },
      {
        "number": 2,
        "text": "입출력 대기"
      },
      {
        "number": 3,
        "text": "실행 중"
      },
      {
        "number": 4,
        "text": "스왑 잠금"
      }
    ],
    "answer": 1,
    "explanation": "좀비는 종료한 뒤 상태 정보가 부모에게 회수되지 않은 프로세스다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q200",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "관리자가 별도 파일시스템을 기존 디렉터리에 연결해 사용할 수 있게 하려 한다. 어느 명령인가?",
    "options": [
      {
        "number": 1,
        "text": "touch"
      },
      {
        "number": 2,
        "text": "mount"
      },
      {
        "number": 3,
        "text": "chmod"
      },
      {
        "number": 4,
        "text": "df"
      }
    ],
    "answer": 2,
    "explanation": "mount는 파일시스템을 지정한 마운트 지점에 연결한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q201",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "마운트 지점이 사용 중이라 분리되지 않는다. 열린 파일을 가진 프로세스 확인에 쓰는 도구는?",
    "options": [
      {
        "number": 1,
        "text": "umask"
      },
      {
        "number": 2,
        "text": "mkdir"
      },
      {
        "number": 3,
        "text": "lsof"
      },
      {
        "number": 4,
        "text": "date"
      }
    ],
    "answer": 3,
    "explanation": "lsof는 파일을 열고 있는 프로세스를 확인할 수 있는 도구다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q202",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "파일 권한을 소유자 읽기·실행, 그룹과 기타 사용자 권한 없음으로 표현하는 8진수 값은?",
    "options": [
      {
        "number": 1,
        "text": "700"
      },
      {
        "number": 2,
        "text": "500"
      },
      {
        "number": 3,
        "text": "550"
      },
      {
        "number": 4,
        "text": "005"
      }
    ],
    "answer": 2,
    "explanation": "읽기 4와 실행 1을 더하면 소유자 자리는 5다. 그룹과 기타 사용자는 0이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q203",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "시스템 관리자가 실행 파일의 모드에 설정된 소유자 권한 실행 비트를 감사한다. 확인 대상은?",
    "options": [
      {
        "number": 1,
        "text": "setuid 비트"
      },
      {
        "number": 2,
        "text": "sticky bit"
      },
      {
        "number": 3,
        "text": "읽기 비트"
      },
      {
        "number": 4,
        "text": "일반 쓰기 비트"
      }
    ],
    "answer": 1,
    "explanation": "setuid는 실행 파일이 적용 조건을 충족할 때 유효 사용자 ID를 파일 소유자로 설정하는 데 쓰인다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q204",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "파일 소유자 목록을 감사한다. 계정을 삭제한 후 파일에 남은 소유자 UID가 어떤 사용자 계정과도 연결되지 않는다. 해당 파일의 상태는?",
    "options": [
      {
        "number": 1,
        "text": "백업 파일"
      },
      {
        "number": 2,
        "text": "소유 계정을 확인할 수 없는 파일"
      },
      {
        "number": 3,
        "text": "읽기 전용 파일"
      },
      {
        "number": 4,
        "text": "숨김 파일"
      }
    ],
    "answer": 2,
    "explanation": "파일의 숫자 UID가 계정에 대응하지 않으면 현재 존재하는 사용자 소유자로 해석할 수 없다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q205",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "크론 설정에서 매일 08시 40분에 실행하는 일정 필드 다섯 개는?",
    "options": [
      {
        "number": 1,
        "text": "40 8 * * *"
      },
      {
        "number": 2,
        "text": "40 * 8 * *"
      },
      {
        "number": 3,
        "text": "8 40 * * *"
      },
      {
        "number": 4,
        "text": "* 8 40 * *"
      }
    ],
    "answer": 1,
    "explanation": "크론은 분, 시, 일, 월, 요일 순서다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q206",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "실행 중인 프로세스별 CPU와 메모리 사용량이 변하는 모습을 터미널에서 보고 싶다. 어느 도구인가?",
    "options": [
      {
        "number": 1,
        "text": "chmod"
      },
      {
        "number": 2,
        "text": "gzip"
      },
      {
        "number": 3,
        "text": "top"
      },
      {
        "number": 4,
        "text": "pwd"
      }
    ],
    "answer": 3,
    "explanation": "top은 프로세스의 자원 사용량을 주기적으로 갱신한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q207",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "/etc/passwd 레코드의 마지막 필드는 무엇을 나타내는가?",
    "options": [
      {
        "number": 1,
        "text": "사용자 ID"
      },
      {
        "number": 2,
        "text": "비밀번호 최대 사용 기간"
      },
      {
        "number": 3,
        "text": "로그인 셸"
      },
      {
        "number": 4,
        "text": "기본 그룹 ID"
      }
    ],
    "answer": 3,
    "explanation": "마지막 필드는 로그인에 사용할 셸 경로다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q208",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "일반적인 섀도 비밀번호 환경에서 /etc/passwd만 읽어서는 알 수 없는 것은?",
    "options": [
      {
        "number": 1,
        "text": "기본 그룹 ID"
      },
      {
        "number": 2,
        "text": "홈 디렉터리"
      },
      {
        "number": 3,
        "text": "비밀번호 최대 사용 기간"
      },
      {
        "number": 4,
        "text": "사용자 이름"
      }
    ],
    "answer": 3,
    "explanation": "비밀번호 사용 기간 정책은 일반적으로 /etc/shadow에 기록된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q209",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "리눅스 서비스 계정에 정상 로그인 셸을 제공하지 않으려 한다. 셸 필드에 지정할 수 있는 값은?",
    "options": [
      {
        "number": 1,
        "text": "/bin/bash"
      },
      {
        "number": 2,
        "text": "/bin/sh"
      },
      {
        "number": 3,
        "text": "/usr/sbin/nologin"
      },
      {
        "number": 4,
        "text": "/bin/zsh"
      }
    ],
    "answer": 3,
    "explanation": "nologin은 해당 계정으로 셸 로그인하는 것을 거부하는 데 쓰인다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q210",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "섀도 비밀번호를 쓰는 리눅스에서 사용자별 비밀번호 해시를 저장하는 파일은?",
    "options": [
      {
        "number": 1,
        "text": "/etc/group"
      },
      {
        "number": 2,
        "text": "/etc/shadow"
      },
      {
        "number": 3,
        "text": "/etc/shells"
      },
      {
        "number": 4,
        "text": "/etc/hosts"
      }
    ],
    "answer": 2,
    "explanation": "/etc/shadow에는 비밀번호 해시 또는 잠금 표식과 사용 기간 정보가 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q211",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "/etc/shadow의 비밀번호 사용 기간 설정 중 변경 후 60일이 되면 만료되게 하려 한다. 어떤 필드인가?",
    "options": [
      {
        "number": 1,
        "text": "최대 사용 기간"
      },
      {
        "number": 2,
        "text": "마지막 변경일"
      },
      {
        "number": 3,
        "text": "min 이후의 경고 일수"
      },
      {
        "number": 4,
        "text": "최소 사용 기간"
      }
    ],
    "answer": 1,
    "explanation": "최대 사용 기간은 비밀번호를 바꾼 뒤 다시 변경해야 하기까지의 일수다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q212",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "다음 중 일반적인 /etc/shadow 항목으로 볼 수 없는 것은?",
    "options": [
      {
        "number": 1,
        "text": "최근 변경일"
      },
      {
        "number": 2,
        "text": "사용자의 기본 그룹 ID"
      },
      {
        "number": 3,
        "text": "비밀번호 해시 필드"
      },
      {
        "number": 4,
        "text": "사용자 이름"
      }
    ],
    "answer": 2,
    "explanation": "기본 그룹 ID는 /etc/passwd에 들어가며 /etc/shadow에는 없다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q213",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "한 컴퓨터에서 서로 다른 두 일반 계정에 같은 UID를 부여했다. 보안 관점에서 적절한 판단은?",
    "options": [
      {
        "number": 1,
        "text": "시스템이 반드시 다른 소유자로 구분한다."
      },
      {
        "number": 2,
        "text": "계정 이름이 달라도 권한 판정에서 동일 사용자로 취급될 수 있다."
      },
      {
        "number": 3,
        "text": "UID는 화면에만 표시된다."
      },
      {
        "number": 4,
        "text": "권한이 자동으로 모두 읽기 전용이 된다."
      }
    ],
    "answer": 2,
    "explanation": "유닉스 계열의 접근 판정은 사용자 이름보다 숫자 UID에 기반한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q214",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "ls 권한 열의 소유자 실행 위치에 대문자 S가 표시됐다. 무슨 뜻인가?",
    "options": [
      {
        "number": 1,
        "text": "setuid와 소유자 실행 비트가 모두 켜졌다."
      },
      {
        "number": 2,
        "text": "소유자 실행 비트만 켜졌다."
      },
      {
        "number": 3,
        "text": "setuid는 켜졌지만 소유자 실행 비트는 꺼져 있다."
      },
      {
        "number": 4,
        "text": "sticky bit가 표시된다."
      }
    ],
    "answer": 3,
    "explanation": "대문자 S는 특수 비트가 있고 해당 실행 비트는 없음을 뜻한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q215",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "공용 쓰기 디렉터리에서 다른 사용자의 파일을 함부로 삭제하지 못하게 하는 데 쓰는 비트는?",
    "options": [
      {
        "number": 1,
        "text": "읽기 비트"
      },
      {
        "number": 2,
        "text": "sticky bit"
      },
      {
        "number": 3,
        "text": "setuid"
      },
      {
        "number": 4,
        "text": "setgid"
      }
    ],
    "answer": 2,
    "explanation": "디렉터리의 sticky bit는 일반 사용자의 삭제·이름 변경을 소유권에 따라 제한한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q216",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "root 소유 실행 파일의 권한 모드가 4755다. 앞자리 4가 나타내는 것은?",
    "options": [
      {
        "number": 1,
        "text": "setuid"
      },
      {
        "number": 2,
        "text": "sticky bit"
      },
      {
        "number": 3,
        "text": "그룹 쓰기 권한"
      },
      {
        "number": 4,
        "text": "setgid"
      }
    ],
    "answer": 1,
    "explanation": "8진수 모드의 앞자리 4는 setuid를 뜻한다. 나머지 755는 일반 권한이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q217",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "umask는 새 파일 권한에 어떤 영향을 주는가?",
    "options": [
      {
        "number": 1,
        "text": "파일의 UID를 변경한다."
      },
      {
        "number": 2,
        "text": "새 파일에 실행 비트를 항상 추가한다."
      },
      {
        "number": 3,
        "text": "기존 파일의 권한을 전부 변경한다."
      },
      {
        "number": 4,
        "text": "생성 요청 권한에서 마스크에 해당하는 비트를 제거한다."
      }
    ],
    "answer": 4,
    "explanation": "umask는 새 객체를 생성할 때 요청한 권한에서 일부 비트를 제거한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q218",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "기본 요청 권한이 디렉터리 777, 일반 파일 666이고 umask가 027이다. 결과는?",
    "options": [
      {
        "number": 1,
        "text": "660·660"
      },
      {
        "number": 2,
        "text": "750·640"
      },
      {
        "number": 3,
        "text": "777·666"
      },
      {
        "number": 4,
        "text": "755·644"
      }
    ],
    "answer": 2,
    "explanation": "027은 그룹 쓰기와 기타 사용자의 모든 권한을 제거한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q219",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "같은 비밀번호를 쓰는 두 계정의 저장 해시가 다르게 나오도록 계정마다 고유값을 넣는다. 그 값은?",
    "options": [
      {
        "number": 1,
        "text": "솔트"
      },
      {
        "number": 2,
        "text": "공개 지수"
      },
      {
        "number": 3,
        "text": "세션 ID"
      },
      {
        "number": 4,
        "text": "파일 모드"
      }
    ],
    "answer": 1,
    "explanation": "솔트는 비밀번호에 함께 입력되는 고유값이다. 동일 비밀번호의 해시가 같아지는 것을 막는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q220",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "TCP Wrappers를 지원하는 구형 서비스에서 접속 허용 목록을 기록하는 파일은?",
    "options": [
      {
        "number": 1,
        "text": "/etc/hosts.allow"
      },
      {
        "number": 2,
        "text": "/etc/shadow"
      },
      {
        "number": 3,
        "text": "/etc/fstab"
      },
      {
        "number": 4,
        "text": "/etc/passwd"
      }
    ],
    "answer": 1,
    "explanation": "지원되는 환경에서 hosts.allow와 hosts.deny는 서비스에 대한 호스트 기반 접속 정책을 정의한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q221",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "SFTP만 필요한 전용 사용자에게 일반 셸 접속을 주지 않으려 한다. 바른 설정 방향은?",
    "options": [
      {
        "number": 1,
        "text": "모든 원격 사용자에게 관리자 셸을 준다."
      },
      {
        "number": 2,
        "text": "포트만 제한하면 셸도 자동으로 차단된다고 본다."
      },
      {
        "number": 3,
        "text": "계정 인증 없이 파일을 공유한다."
      },
      {
        "number": 4,
        "text": "허용 출발지로 접속을 제한하고 해당 계정이 SFTP 서브시스템만 쓰도록 한다."
      }
    ],
    "answer": 4,
    "explanation": "SFTP는 SSH 위에서 동작하므로 출발지 제한과 계정의 기능 제한을 별도로 설정한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q222",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "시스템 직원 두 명에게 개별 계정을 부여했다. 개인 계정 목록과 각 계정의 UID를 확인하는 대표 파일은?",
    "options": [
      {
        "number": 1,
        "text": "/etc/resolv.conf"
      },
      {
        "number": 2,
        "text": "/etc/hosts"
      },
      {
        "number": 3,
        "text": "/etc/passwd"
      },
      {
        "number": 4,
        "text": "/etc/fstab"
      }
    ],
    "answer": 3,
    "explanation": "/etc/passwd에서 계정 이름과 UID 등의 기본 정보를 확인할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q223",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "ext 계열 파일시스템에서 전체 구성 정보의 구조와, 블록을 관리하기 위해 나누는 단위를 순서대로 고른 것은?",
    "options": [
      {
        "number": 1,
        "text": "부트 메뉴·클러스터 서버"
      },
      {
        "number": 2,
        "text": "슈퍼블록·블록 그룹"
      },
      {
        "number": 3,
        "text": "파티션·사용자"
      },
      {
        "number": 4,
        "text": "inode·프로세스"
      }
    ],
    "answer": 2,
    "explanation": "슈퍼블록은 전체 파일시스템 정보를 담고, 블록 그룹은 디스크 블록을 관리 단위로 나눈 것이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q224",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "서비스 프로세스가 어떤 자식 프로세스를 실행했는지 트리로 확인하려 한다. 어느 명령이 적합한가?",
    "options": [
      {
        "number": 1,
        "text": "df"
      },
      {
        "number": 2,
        "text": "pstree"
      },
      {
        "number": 3,
        "text": "wc"
      },
      {
        "number": 4,
        "text": "mount"
      }
    ],
    "answer": 2,
    "explanation": "pstree는 프로세스의 부모·자식 관계를 나무 형태로 표시한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q225",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "개발자가 공유 임시 디렉터리에서 임시 파일을 안전하게 만들고자 한다. 알맞은 방법은?",
    "options": [
      {
        "number": 1,
        "text": "생성 전에 기존 파일의 경로에서 내용을 읽는다."
      },
      {
        "number": 2,
        "text": "안전한 생성 API로 고유 파일을 만들고 접근권한을 제한한다."
      },
      {
        "number": 3,
        "text": "항상 동일한 공개 파일명을 사용한다."
      },
      {
        "number": 4,
        "text": "모든 사용자가 수정할 수 있게 한다."
      }
    ],
    "answer": 2,
    "explanation": "고유 파일을 원자적으로 생성하고 권한을 제한하면 충돌과 의도치 않은 접근을 줄일 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q226",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "관리 서버에 오래 사용하지 않는 네트워크 서비스가 켜져 있다. 적절한 보호 조치는?",
    "options": [
      {
        "number": 1,
        "text": "업무에 필요하지 않은 서비스는 비활성화한다."
      },
      {
        "number": 2,
        "text": "모든 사용자에게 서비스 권한을 준다."
      },
      {
        "number": 3,
        "text": "유휴 로그인 세션을 무기한 유지한다."
      },
      {
        "number": 4,
        "text": "공용 관리자 계정으로만 접속한다."
      }
    ],
    "answer": 1,
    "explanation": "사용하지 않는 서비스를 끄면 불필요한 접속 경로를 줄일 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q227",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "root의 PATH에 현재 디렉터리가 들어 있는 환경을 점검한다. 적합한 조치는?",
    "options": [
      {
        "number": 1,
        "text": "모든 실행 파일 권한을 열어 둔다."
      },
      {
        "number": 2,
        "text": "현재 디렉터리 항목을 제거하고 신뢰할 경로만 사용한다."
      },
      {
        "number": 3,
        "text": "현재 디렉터리를 가장 앞에 둔다."
      },
      {
        "number": 4,
        "text": "쓰기 가능한 경로를 추가한다."
      }
    ],
    "answer": 2,
    "explanation": "관리자 PATH에는 신뢰할 수 있는 디렉터리만 두어 예상하지 않은 프로그램 실행을 막아야 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q228",
    "partId": 4,
    "sectionId": 16,
    "sectionTitle": "서버 보안 관리",
    "sourceSection": "SECTION 05 서버 보안 관리",
    "question": "운영 중 계정 정보가 자주 바뀌는 서버의 /etc/passwd와 /etc/shadow 관리 방법은?",
    "options": [
      {
        "number": 1,
        "text": "일반 사용자에게 두 파일을 수정하게 한다."
      },
      {
        "number": 2,
        "text": "승인된 변경과 승인되지 않은 변경을 구분할 수 있도록 무결성을 점검한다."
      },
      {
        "number": 3,
        "text": "변경이 잦으므로 감시를 끈다."
      },
      {
        "number": 4,
        "text": "두 파일을 공용 저장소에 올린다."
      }
    ],
    "answer": 2,
    "explanation": "변경 빈도가 높아도 민감한 시스템 파일의 무결성 점검은 필요하다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q229",
    "partId": 4,
    "sectionId": 16,
    "sectionTitle": "서버 보안 관리",
    "sourceSection": "SECTION 05 서버 보안 관리",
    "question": "Windows 이벤트 뷰어에서 감사 정책에 따라 남은 로그인 실패 기록을 확인할 로그는?",
    "options": [
      {
        "number": 1,
        "text": "응용 프로그램"
      },
      {
        "number": 2,
        "text": "보안"
      },
      {
        "number": 3,
        "text": "설치"
      },
      {
        "number": 4,
        "text": "전달된 이벤트만"
      }
    ],
    "answer": 2,
    "explanation": "보안 로그는 로그인 감사 등 보안 관련 이벤트를 기록한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q230",
    "partId": 4,
    "sectionId": 16,
    "sectionTitle": "서버 보안 관리",
    "sourceSection": "SECTION 05 서버 보안 관리",
    "question": "Windows 서버에서 감사 설정을 켠 뒤 파일 삭제 시도 이벤트를 확인하려 한다. 기본 로그 분류는?",
    "options": [
      {
        "number": 1,
        "text": "설치"
      },
      {
        "number": 2,
        "text": "응용 프로그램"
      },
      {
        "number": 3,
        "text": "보안"
      },
      {
        "number": 4,
        "text": "시스템"
      }
    ],
    "answer": 3,
    "explanation": "파일 접근·삭제 시도에 대한 객체 액세스 감사는 보안 로그에 기록될 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q231",
    "partId": 4,
    "sectionId": 16,
    "sectionTitle": "서버 보안 관리",
    "sourceSection": "SECTION 05 서버 보안 관리",
    "question": "도메인 컨트롤러에서 도메인 자격 증명의 검증 성공·실패를 수집한다. 어느 감사 범주와 관련되는가?",
    "options": [
      {
        "number": 1,
        "text": "파일 공유 접근"
      },
      {
        "number": 2,
        "text": "시스템 종료"
      },
      {
        "number": 3,
        "text": "프로세스 생성"
      },
      {
        "number": 4,
        "text": "계정 로그온"
      }
    ],
    "answer": 4,
    "explanation": "계정 로그온 감사는 자격 증명을 검증한 시스템의 관련 이벤트를 다룬다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q232",
    "partId": 4,
    "sectionId": 16,
    "sectionTitle": "서버 보안 관리",
    "sourceSection": "SECTION 05 서버 보안 관리",
    "question": "전통적인 유닉스에서 여러 프로그램의 메시지를 받아 설정에 따라 로그 파일로 보내는 데몬은?",
    "options": [
      {
        "number": 1,
        "text": "inetd"
      },
      {
        "number": 2,
        "text": "cron"
      },
      {
        "number": 3,
        "text": "syslogd"
      },
      {
        "number": 4,
        "text": "ftpd"
      }
    ],
    "answer": 3,
    "explanation": "syslogd는 설정된 분류와 우선순위에 따라 시스템 메시지를 전달한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q233",
    "partId": 4,
    "sectionId": 16,
    "sectionTitle": "서버 보안 관리",
    "sourceSection": "SECTION 05 서버 보안 관리",
    "question": "리눅스 운영자가 이전 로그인과 로그아웃 이력을 확인하려 한다. 전통적인 관련 파일은?",
    "options": [
      {
        "number": 1,
        "text": "wtmp"
      },
      {
        "number": 2,
        "text": "fstab"
      },
      {
        "number": 3,
        "text": "utmp"
      },
      {
        "number": 4,
        "text": "resolv.conf"
      }
    ],
    "answer": 1,
    "explanation": "wtmp는 로그인과 로그아웃 이력을 기록한다. utmp는 현재 접속 상태와 관련된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q234",
    "partId": 4,
    "sectionId": 16,
    "sectionTitle": "서버 보안 관리",
    "sourceSection": "SECTION 05 서버 보안 관리",
    "question": "전통적인 유닉스에서 w 명령이 현재 로그인 사용자를 파악하는 데 참고하는 파일은?",
    "options": [
      {
        "number": 1,
        "text": "lastlog"
      },
      {
        "number": 2,
        "text": "utmp"
      },
      {
        "number": 3,
        "text": "pacct"
      },
      {
        "number": 4,
        "text": "wtmp"
      }
    ],
    "answer": 2,
    "explanation": "utmp는 현재 로그인 세션을 기록하며 w 등의 도구가 이를 참고한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q235",
    "partId": 4,
    "sectionId": 16,
    "sectionTitle": "서버 보안 관리",
    "sourceSection": "SECTION 05 서버 보안 관리",
    "question": "전통적인 syslog 설정에서 커널의 Emergency 이벤트를 고르는 선택자는?",
    "options": [
      {
        "number": 1,
        "text": "mail.emerg"
      },
      {
        "number": 2,
        "text": "kern.info"
      },
      {
        "number": 3,
        "text": "user.debug"
      },
      {
        "number": 4,
        "text": "kern.emerg"
      }
    ],
    "answer": 4,
    "explanation": "kern은 커널, emerg는 최상위 긴급도다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q236",
    "partId": 4,
    "sectionId": 16,
    "sectionTitle": "서버 보안 관리",
    "sourceSection": "SECTION 05 서버 보안 관리",
    "question": "여러 서버의 로그를 시간순으로 비교하기 어렵다. 서버 시계를 일관되게 맞추는 데 적합한 프로토콜은?",
    "options": [
      {
        "number": 1,
        "text": "NTP"
      },
      {
        "number": 2,
        "text": "ARP"
      },
      {
        "number": 3,
        "text": "FTP"
      },
      {
        "number": 4,
        "text": "SMTP"
      }
    ],
    "answer": 1,
    "explanation": "NTP는 네트워크를 통해 시스템 시간을 동기화한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q237",
    "partId": 4,
    "sectionId": 16,
    "sectionTitle": "서버 보안 관리",
    "sourceSection": "SECTION 05 서버 보안 관리",
    "question": "보안팀이 검사 결과를 (가) 알려진 취약점 점검, (나) 네트워크 패킷의 규칙 기반 탐지로 나눈다. 대표 도구의 순서는?",
    "options": [
      {
        "number": 1,
        "text": "Tripwire·NTP"
      },
      {
        "number": 2,
        "text": "Snort·Nessus"
      },
      {
        "number": 3,
        "text": "syslogd·cron"
      },
      {
        "number": 4,
        "text": "Nessus·Snort"
      }
    ],
    "answer": 4,
    "explanation": "Nessus는 취약점 평가, Snort는 네트워크 침입 탐지·방지에 쓰인다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q238",
    "partId": 4,
    "sectionId": 16,
    "sectionTitle": "서버 보안 관리",
    "sourceSection": "SECTION 05 서버 보안 관리",
    "question": "취약점 평가 도구가 필요한 팀이 패킷을 규칙과 비교해 침입을 탐지하는 별도 제품을 골랐다. 어느 제품인가?",
    "options": [
      {
        "number": 1,
        "text": "SAINT"
      },
      {
        "number": 2,
        "text": "Nessus"
      },
      {
        "number": 3,
        "text": "Snort"
      },
      {
        "number": 4,
        "text": "SATAN"
      }
    ],
    "answer": 3,
    "explanation": "Snort의 주 기능은 네트워크 침입 탐지·방지다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q239",
    "partId": 4,
    "sectionId": 16,
    "sectionTitle": "서버 보안 관리",
    "sourceSection": "SECTION 05 서버 보안 관리",
    "question": "기준 시점 해시와 비교하는 파일 무결성 도구가 아닌 것은?",
    "options": [
      {
        "number": 1,
        "text": "Fcheck"
      },
      {
        "number": 2,
        "text": "Samhain"
      },
      {
        "number": 3,
        "text": "prstat"
      },
      {
        "number": 4,
        "text": "Tripwire"
      }
    ],
    "answer": 3,
    "explanation": "prstat은 프로세스 자원 사용량을 살펴보는 도구다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q240",
    "partId": 4,
    "sectionId": 16,
    "sectionTitle": "서버 보안 관리",
    "sourceSection": "SECTION 05 서버 보안 관리",
    "question": "서버에 알려진 보안 취약점이나 취약한 설정이 있는지 평가할 도구는?",
    "options": [
      {
        "number": 1,
        "text": "Nessus"
      },
      {
        "number": 2,
        "text": "cron"
      },
      {
        "number": 3,
        "text": "tar"
      },
      {
        "number": 4,
        "text": "NTP"
      }
    ],
    "answer": 1,
    "explanation": "Nessus는 알려진 취약점과 보안 설정을 점검하는 도구다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q241",
    "partId": 4,
    "sectionId": 16,
    "sectionTitle": "서버 보안 관리",
    "sourceSection": "SECTION 05 서버 보안 관리",
    "question": "패킷 필터 도구와 달리 로컬 파일의 접근 권한을 바꾸는 명령은?",
    "options": [
      {
        "number": 1,
        "text": "ipchains"
      },
      {
        "number": 2,
        "text": "chmod"
      },
      {
        "number": 3,
        "text": "iptables"
      },
      {
        "number": 4,
        "text": "ipfwadm"
      }
    ],
    "answer": 2,
    "explanation": "chmod는 파일 권한을 바꾸며 네트워크 패킷을 필터링하지 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q242",
    "partId": 4,
    "sectionId": 16,
    "sectionTitle": "서버 보안 관리",
    "sourceSection": "SECTION 05 서버 보안 관리",
    "question": "Apache 표준 공통 로그에서 요청 행 GET /photo.png와 상태 코드 200을 확인했다. 확실히 알 수 있는 것은?",
    "options": [
      {
        "number": 1,
        "text": "서버 관리자 비밀번호"
      },
      {
        "number": 2,
        "text": "서버의 사설 IP"
      },
      {
        "number": 3,
        "text": "클라이언트가 GET으로 /photo.png를 요청했다."
      },
      {
        "number": 4,
        "text": "클라이언트의 실제 이름"
      }
    ],
    "answer": 3,
    "explanation": "요청 행은 메서드와 요청 대상을 나타낸다. 이 두 필드로 다른 신원이나 시스템 설정은 알 수 없다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q243",
    "partId": 4,
    "sectionId": 16,
    "sectionTitle": "서버 보안 관리",
    "sourceSection": "SECTION 05 서버 보안 관리",
    "question": "방화벽 로그에 한 출발지가 한 서버의 여러 서비스 포트에 짧은 시간 동안 각각 접속을 시도했다. 우선 검토할 패턴은?",
    "options": [
      {
        "number": 1,
        "text": "인증서 자동 갱신"
      },
      {
        "number": 2,
        "text": "파일 무결성 검증"
      },
      {
        "number": 3,
        "text": "시간 동기화"
      },
      {
        "number": 4,
        "text": "포트 스캔"
      }
    ],
    "answer": 4,
    "explanation": "하나의 목적지에 있는 여러 포트로 접근하는 패턴은 포트 스캔 가능성을 시사한다. 그 자체로 서비스 중단을 입증하지는 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q244",
    "partId": 4,
    "sectionId": 17,
    "sectionTitle": "각종 시스템 보안위협 및 대응책",
    "sourceSection": "SECTION 06 각종 시스템 보안위협 및 대응책",
    "question": "프로그램이 실행 중 요청한 버퍼를 동적으로 할당하는 메모리 영역은?",
    "options": [
      {
        "number": 1,
        "text": "환경 변수 목록"
      },
      {
        "number": 2,
        "text": "코드 영역"
      },
      {
        "number": 3,
        "text": "정적 데이터 영역"
      },
      {
        "number": 4,
        "text": "힙"
      }
    ],
    "answer": 4,
    "explanation": "힙은 실행 중 동적 할당을 위한 영역이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q245",
    "partId": 4,
    "sectionId": 17,
    "sectionTitle": "각종 시스템 보안위협 및 대응책",
    "sourceSection": "SECTION 06 각종 시스템 보안위협 및 대응책",
    "question": "힙에 할당한 배열의 끝을 넘어 기록하는 프로그램 결함을 무엇이라 하는가?",
    "options": [
      {
        "number": 1,
        "text": "트래픽 도청"
      },
      {
        "number": 2,
        "text": "인증서 만료"
      },
      {
        "number": 3,
        "text": "힙 버퍼 오버플로"
      },
      {
        "number": 4,
        "text": "시간 동기화 실패"
      }
    ],
    "answer": 3,
    "explanation": "힙 버퍼 오버플로는 동적 할당 버퍼의 경계를 넘어 기록할 때 발생한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q246",
    "partId": 4,
    "sectionId": 17,
    "sectionTitle": "각종 시스템 보안위협 및 대응책",
    "sourceSection": "SECTION 06 각종 시스템 보안위협 및 대응책",
    "question": "구형 유닉스의 사용자 스택 실행 금지 설정이 달성하는 보호 목표는?",
    "options": [
      {
        "number": 1,
        "text": "스택에 놓인 데이터의 실행을 막는다."
      },
      {
        "number": 2,
        "text": "모든 입력 길이를 자동 검증한다."
      },
      {
        "number": 3,
        "text": "네트워크 원격 접속을 모두 끈다."
      },
      {
        "number": 4,
        "text": "파일 소유자가 바뀌지 않게 한다."
      }
    ],
    "answer": 1,
    "explanation": "스택 실행 제한은 메모리 보호 수단이다. 버퍼 범위 검사를 대신하지 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q247",
    "partId": 4,
    "sectionId": 17,
    "sectionTitle": "각종 시스템 보안위협 및 대응책",
    "sourceSection": "SECTION 06 각종 시스템 보안위협 및 대응책",
    "question": "복사 함수가 목적지 버퍼보다 많은 바이트를 쓰지 못하게 하려 한다. 직접적인 대책은?",
    "options": [
      {
        "number": 1,
        "text": "복사 길이를 목적지의 실제 용량과 비교해 검사한다."
      },
      {
        "number": 2,
        "text": "서버 시각을 맞춘다."
      },
      {
        "number": 3,
        "text": "기능 설명을 숨긴다."
      },
      {
        "number": 4,
        "text": "모든 파일 이름을 변경한다."
      }
    ],
    "answer": 1,
    "explanation": "메모리 경계 검사는 버퍼에 허용된 범위를 넘는 쓰기를 막는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q248",
    "partId": 4,
    "sectionId": 17,
    "sectionTitle": "각종 시스템 보안위협 및 대응책",
    "sourceSection": "SECTION 06 각종 시스템 보안위협 및 대응책",
    "question": "ASLR을 적용했을 때 프로그램 실행마다 달라질 수 있는 것은?",
    "options": [
      {
        "number": 1,
        "text": "파일 속성의 권한 비트"
      },
      {
        "number": 2,
        "text": "디스크 전체 용량"
      },
      {
        "number": 3,
        "text": "사용자 계정 이름"
      },
      {
        "number": 4,
        "text": "스택·힙 등 메모리 영역의 배치 주소"
      }
    ],
    "answer": 4,
    "explanation": "ASLR은 메모리 주소 배치를 무작위화해 위치의 예측을 어렵게 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q249",
    "partId": 4,
    "sectionId": 17,
    "sectionTitle": "각종 시스템 보안위협 및 대응책",
    "sourceSection": "SECTION 06 각종 시스템 보안위협 및 대응책",
    "question": "버퍼 오버플로가 발생할 수 있는 코드 자체를 고치는 조치는?",
    "options": [
      {
        "number": 1,
        "text": "모든 복사 경로에서 경계 검사를 한다."
      },
      {
        "number": 2,
        "text": "메모리 주소만 무작위화한다."
      },
      {
        "number": 3,
        "text": "방화벽 로그만 보관한다."
      },
      {
        "number": 4,
        "text": "운영체제 부팅 시간을 변경한다."
      }
    ],
    "answer": 1,
    "explanation": "경계 검사는 범위를 넘어 쓰는 원인을 제거한다. ASLR은 결함을 고치는 대신 악용을 어렵게 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q250",
    "partId": 4,
    "sectionId": 17,
    "sectionTitle": "각종 시스템 보안위협 및 대응책",
    "sourceSection": "SECTION 06 각종 시스템 보안위협 및 대응책",
    "question": "스택·힙처럼 데이터로 사용하는 페이지를 명령어로 실행하지 못하게 하는 메모리 보호는?",
    "options": [
      {
        "number": 1,
        "text": "DEP 또는 NX"
      },
      {
        "number": 2,
        "text": "DNSSEC"
      },
      {
        "number": 3,
        "text": "RAID"
      },
      {
        "number": 4,
        "text": "NTP"
      }
    ],
    "answer": 1,
    "explanation": "DEP/NX는 실행 금지로 표시된 메모리에서 명령어가 실행되지 않게 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q251",
    "partId": 4,
    "sectionId": 17,
    "sectionTitle": "각종 시스템 보안위협 및 대응책",
    "sourceSection": "SECTION 06 각종 시스템 보안위협 및 대응책",
    "question": "포맷 문자열 결함의 직접적인 위험과 가장 거리가 먼 것은?",
    "options": [
      {
        "number": 1,
        "text": "비정상 종료"
      },
      {
        "number": 2,
        "text": "메모리 내용 노출"
      },
      {
        "number": 3,
        "text": "의도하지 않은 메모리 변경"
      },
      {
        "number": 4,
        "text": "네트워크를 통한 자동 자가 복제"
      }
    ],
    "answer": 4,
    "explanation": "포맷 문자열 결함은 메모리 손상이나 노출을 일으킬 수 있다. 자가 복제는 결함 자체의 기능이 아니다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q252",
    "partId": 4,
    "sectionId": 17,
    "sectionTitle": "각종 시스템 보안위협 및 대응책",
    "sourceSection": "SECTION 06 각종 시스템 보안위협 및 대응책",
    "question": "포맷 문자열 오류의 원인을 분석할 도구를 고른다. 프로그램 분석과 직접 관련 없는 것은?",
    "options": [
      {
        "number": 1,
        "text": "objdump"
      },
      {
        "number": 2,
        "text": "iptables"
      },
      {
        "number": 3,
        "text": "ltrace"
      },
      {
        "number": 4,
        "text": "gdb"
      }
    ],
    "answer": 2,
    "explanation": "iptables는 패킷 필터를 설정하는 도구다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q253",
    "partId": 4,
    "sectionId": 17,
    "sectionTitle": "각종 시스템 보안위협 및 대응책",
    "sourceSection": "SECTION 06 각종 시스템 보안위협 및 대응책",
    "question": "두 프로세스가 공유 자원을 동시에 처리할 때 실행 순서에 따라 결과가 달라지는 결함은?",
    "options": [
      {
        "number": 1,
        "text": "공개키 불일치"
      },
      {
        "number": 2,
        "text": "데이터 압축 손실"
      },
      {
        "number": 3,
        "text": "인증서 폐지"
      },
      {
        "number": 4,
        "text": "경쟁 조건"
      }
    ],
    "answer": 4,
    "explanation": "경쟁 조건은 실행 시점이나 순서에 의존한다. 동기화와 원자적 처리로 완화할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q254",
    "partId": 4,
    "sectionId": 17,
    "sectionTitle": "각종 시스템 보안위협 및 대응책",
    "sourceSection": "SECTION 06 각종 시스템 보안위협 및 대응책",
    "question": "정상 인증 절차를 거치지 않는 숨은 유지보수 통로를 코드 감사에서 발견했다. 어떤 범주인가?",
    "options": [
      {
        "number": 1,
        "text": "시간 동기화"
      },
      {
        "number": 2,
        "text": "기능 테스트"
      },
      {
        "number": 3,
        "text": "부하 분산"
      },
      {
        "number": 4,
        "text": "백도어"
      }
    ],
    "answer": 4,
    "explanation": "백도어는 정상 인증·통제 절차를 우회하는 숨은 접근 경로다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q255",
    "partId": 4,
    "sectionId": 17,
    "sectionTitle": "각종 시스템 보안위협 및 대응책",
    "sourceSection": "SECTION 06 각종 시스템 보안위협 및 대응책",
    "question": "승인된 분석 환경에서 실행 중인 Windows 프로세스의 트리와 핸들을 살펴볼 도구는?",
    "options": [
      {
        "number": 1,
        "text": "문자 인코더"
      },
      {
        "number": 2,
        "text": "NTP"
      },
      {
        "number": 3,
        "text": "디스크 정리"
      },
      {
        "number": 4,
        "text": "Process Explorer"
      }
    ],
    "answer": 4,
    "explanation": "Process Explorer는 Windows의 프로세스와 사용 중인 시스템 객체 정보를 확인하는 데 쓰인다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q256",
    "partId": 4,
    "sectionId": 17,
    "sectionTitle": "각종 시스템 보안위협 및 대응책",
    "sourceSection": "SECTION 06 각종 시스템 보안위협 및 대응책",
    "question": "보안 검토자가 제공받은 소스 코드와 내부 설계를 읽으며 오류를 찾는다. 어떤 분석 방식인가?",
    "options": [
      {
        "number": 1,
        "text": "블랙박스"
      },
      {
        "number": 2,
        "text": "로그 보존"
      },
      {
        "number": 3,
        "text": "화이트박스"
      },
      {
        "number": 4,
        "text": "무작위 외부 점검"
      }
    ],
    "answer": 3,
    "explanation": "화이트박스 분석은 코드나 구조 등 내부 정보를 활용한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q257",
    "partId": 4,
    "sectionId": 17,
    "sectionTitle": "각종 시스템 보안위협 및 대응책",
    "sourceSection": "SECTION 06 각종 시스템 보안위협 및 대응책",
    "question": "감염 조사에서 운영체제의 상태를 조작해 악성 프로세스나 파일의 존재를 숨기는 도구군을 발견했다. 분류는?",
    "options": [
      {
        "number": 1,
        "text": "공개키 인증기관"
      },
      {
        "number": 2,
        "text": "메타데이터 편집기"
      },
      {
        "number": 3,
        "text": "백업 에이전트"
      },
      {
        "number": 4,
        "text": "루트킷"
      }
    ],
    "answer": 4,
    "explanation": "루트킷은 악성 구성요소의 흔적을 숨겨 발견을 어렵게 할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q258",
    "partId": 4,
    "sectionId": 17,
    "sectionTitle": "각종 시스템 보안위협 및 대응책",
    "sourceSection": "SECTION 06 각종 시스템 보안위협 및 대응책",
    "question": "루트킷의 필수 특징이 아닌 것은?",
    "options": [
      {
        "number": 1,
        "text": "파일·프로세스의 표시를 조작할 수 있다."
      },
      {
        "number": 2,
        "text": "악성 활동을 숨길 수 있다."
      },
      {
        "number": 3,
        "text": "스스로 복제해 다른 컴퓨터로 전파해야 한다."
      },
      {
        "number": 4,
        "text": "침해 흔적을 파악하기 어렵게 할 수 있다."
      }
    ],
    "answer": 3,
    "explanation": "자가 전파는 웜의 대표 특징이며 루트킷의 필수 조건은 아니다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q259",
    "partId": 4,
    "sectionId": 17,
    "sectionTitle": "각종 시스템 보안위협 및 대응책",
    "sourceSection": "SECTION 06 각종 시스템 보안위협 및 대응책",
    "question": "평상시에는 별다른 증상이 없고 특정 날짜나 조건이 충족되면 악성 동작이 시작된다. 무엇인가?",
    "options": [
      {
        "number": 1,
        "text": "파일 인덱스"
      },
      {
        "number": 2,
        "text": "정상 사용자 세션"
      },
      {
        "number": 3,
        "text": "백업 정책"
      },
      {
        "number": 4,
        "text": "논리 폭탄"
      }
    ],
    "answer": 4,
    "explanation": "논리 폭탄은 미리 정한 조건이 충족될 때 악성 동작을 실행한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q260",
    "partId": 4,
    "sectionId": 18,
    "sectionTitle": "최신 보안 주제들",
    "sourceSection": "SECTION 07 최신 보안 주제들",
    "question": "비트코인에서 블록 해시가 정해진 목표를 충족하도록 계산을 반복하는 합의 방식과 이 과정의 통칭을 순서대로 고른 것은?",
    "options": [
      {
        "number": 1,
        "text": "작업증명·복호화"
      },
      {
        "number": 2,
        "text": "지분증명·채굴"
      },
      {
        "number": 3,
        "text": "작업증명·채굴"
      },
      {
        "number": 4,
        "text": "지분증명·송금"
      }
    ],
    "answer": 3,
    "explanation": "비트코인은 작업증명을 사용하며, 블록 후보가 조건을 만족하도록 계산하는 활동을 채굴이라 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q261",
    "partId": 4,
    "sectionId": 18,
    "sectionTitle": "최신 보안 주제들",
    "sourceSection": "SECTION 07 최신 보안 주제들",
    "question": "네트워크 카메라를 설치한 가정에서 초기에 해야 할 보호 조치는?",
    "options": [
      {
        "number": 1,
        "text": "자동으로 안전하다고 보고 업데이트를 끈다."
      },
      {
        "number": 2,
        "text": "초기 인증 정보를 변경하고 필요한 경우에만 외부 접근을 허용한다."
      },
      {
        "number": 3,
        "text": "관리 페이지를 인증 없이 인터넷에 공개한다."
      },
      {
        "number": 4,
        "text": "모든 기기에 같은 초기 비밀번호를 유지한다."
      }
    ],
    "answer": 2,
    "explanation": "초기 인증 정보 변경과 접근 제한은 가정용 IoT 장치의 불필요한 노출을 줄인다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q262",
    "partId": 4,
    "sectionId": 18,
    "sectionTitle": "최신 보안 주제들",
    "sourceSection": "SECTION 07 최신 보안 주제들",
    "question": "가정용 IoT 제품의 출시 전 점검에서 외부 물리 인터페이스를 살핀다. 제품 사용에 필요하지 않은 디버그 포트에 대한 적절한 조치는?",
    "options": [
      {
        "number": 1,
        "text": "포트의 이름만 바꿔 구분한다."
      },
      {
        "number": 2,
        "text": "접근 권한을 확인하지 않고 디버그 기능을 실행한다."
      },
      {
        "number": 3,
        "text": "출하 후 모든 사용자가 쓰도록 개방한다."
      },
      {
        "number": 4,
        "text": "출하 환경에서 비활성화하거나 필요한 관리 주체만 사용하도록 통제한다."
      }
    ],
    "answer": 4,
    "explanation": "불필요한 입력 채널은 비활성화하고, 유지해야 하는 관리 인터페이스에는 접근 통제를 적용한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q263",
    "partId": 4,
    "sectionId": 18,
    "sectionTitle": "최신 보안 주제들",
    "sourceSection": "SECTION 07 최신 보안 주제들",
    "question": "초기 보고에서 IP 카메라와 라우터 등 IoT 장치를 감염시켜 대규모 서비스 거부에 이용된 봇넷 악성코드는?",
    "options": [
      {
        "number": 1,
        "text": "멜리사"
      },
      {
        "number": 2,
        "text": "미라이"
      },
      {
        "number": 3,
        "text": "브레인"
      },
      {
        "number": 4,
        "text": "님다"
      }
    ],
    "answer": 2,
    "explanation": "미라이는 IoT 장치가 대규모 봇넷에 편입되는 대표 사례다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q264",
    "partId": 4,
    "sectionId": 18,
    "sectionTitle": "최신 보안 주제들",
    "sourceSection": "SECTION 07 최신 보안 주제들",
    "question": "조직이 보안 기능을 직접 장비로 구축하는 대신 클라우드 제공업체의 보안 서비스를 구독한다. 이 모델은?",
    "options": [
      {
        "number": 1,
        "text": "SECaaS"
      },
      {
        "number": 2,
        "text": "IaaS 스토리지"
      },
      {
        "number": 3,
        "text": "파일 공유 저장소"
      },
      {
        "number": 4,
        "text": "로컬 백업"
      }
    ],
    "answer": 1,
    "explanation": "SECaaS는 보안 기능을 서비스 형태로 제공하는 모델이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q265",
    "partId": 4,
    "sectionId": 18,
    "sectionTitle": "최신 보안 주제들",
    "sourceSection": "SECTION 07 최신 보안 주제들",
    "question": "장기간 이어진 표적 침해를 분석한다. 침입 뒤 내부 자료를 모았고, 다음에 이를 조직 외부로 전송했다. 마지막 활동은?",
    "options": [
      {
        "number": 1,
        "text": "사전 조사"
      },
      {
        "number": 2,
        "text": "최초 침투"
      },
      {
        "number": 3,
        "text": "사용자 등록"
      },
      {
        "number": 4,
        "text": "유출"
      }
    ],
    "answer": 4,
    "explanation": "내부에서 자료를 모으는 것은 수집, 통제 영역 밖으로 옮기는 것은 유출이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q266",
    "partId": 4,
    "sectionId": 18,
    "sectionTitle": "최신 보안 주제들",
    "sourceSection": "SECTION 07 최신 보안 주제들",
    "question": "사고 조사에서 피해 조직 직원이 자주 방문하는 정상 업계 사이트가 먼저 변조된 것을 확인했다. 무슨 패턴인가?",
    "options": [
      {
        "number": 1,
        "text": "워터링홀"
      },
      {
        "number": 2,
        "text": "무차별 대입"
      },
      {
        "number": 3,
        "text": "사전 대입"
      },
      {
        "number": 4,
        "text": "물리적 미디어 파손"
      }
    ],
    "answer": 1,
    "explanation": "워터링홀은 표적 집단이 방문할 가능성이 높은 사이트를 이용하는 공격 유형이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q267",
    "partId": 4,
    "sectionId": 18,
    "sectionTitle": "최신 보안 주제들",
    "sourceSection": "SECTION 07 최신 보안 주제들",
    "question": "랜섬웨어로 업무 파일이 열리지 않는다. 복구 가능성을 높이는 준비는?",
    "options": [
      {
        "number": 1,
        "text": "같은 PC에만 백업을 저장한다."
      },
      {
        "number": 2,
        "text": "복구 연습 없이 백업 유무만 확인한다."
      },
      {
        "number": 3,
        "text": "의심스러운 파일을 계속 실행한다."
      },
      {
        "number": 4,
        "text": "격리된 백업을 유지하고 복원 가능 여부를 정기적으로 확인한다."
      }
    ],
    "answer": 4,
    "explanation": "격리 백업은 원본과 함께 피해를 입을 위험을 낮춘다. 복원 시험으로 실제 복구 가능성을 확인한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q268",
    "partId": 4,
    "sectionId": 18,
    "sectionTitle": "최신 보안 주제들",
    "sourceSection": "SECTION 07 최신 보안 주제들",
    "question": "배포 서버에서 받은 업데이트 자체가 변조돼 고객에게 전달됐다. 어떤 유형인가?",
    "options": [
      {
        "number": 1,
        "text": "소프트웨어 공급망 침해"
      },
      {
        "number": 2,
        "text": "세션 만료"
      },
      {
        "number": 3,
        "text": "서비스 용량 초과"
      },
      {
        "number": 4,
        "text": "물리적 도청"
      }
    ],
    "answer": 1,
    "explanation": "공급망 침해는 제품 개발·빌드·배포 과정의 신뢰를 훼손해 고객에게 피해를 확산시킬 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q269",
    "partId": 4,
    "sectionId": 18,
    "sectionTitle": "최신 보안 주제들",
    "sourceSection": "SECTION 07 최신 보안 주제들",
    "question": "전력 설비의 원격 센서 값을 모으고 중앙에서 상태를 감시·제어하는 시스템은?",
    "options": [
      {
        "number": 1,
        "text": "웹 브라우저"
      },
      {
        "number": 2,
        "text": "SCADA"
      },
      {
        "number": 3,
        "text": "메일 수신기"
      },
      {
        "number": 4,
        "text": "파일 압축기"
      }
    ],
    "answer": 2,
    "explanation": "SCADA는 원격 설비의 데이터 수집과 감시·제어를 수행한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q270",
    "partId": 4,
    "sectionId": 18,
    "sectionTitle": "최신 보안 주제들",
    "sourceSection": "SECTION 07 최신 보안 주제들",
    "question": "기업이 기밀 문서의 USB 복사나 외부 전송을 감지하고 차단하려 한다. 알맞은 기술은?",
    "options": [
      {
        "number": 1,
        "text": "RAID"
      },
      {
        "number": 2,
        "text": "CDN"
      },
      {
        "number": 3,
        "text": "DLP"
      },
      {
        "number": 4,
        "text": "NTP"
      }
    ],
    "answer": 3,
    "explanation": "DLP는 민감 데이터가 정책에 어긋나는 경로로 전송되는 것을 탐지하거나 차단한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q271",
    "partId": 4,
    "sectionId": 18,
    "sectionTitle": "최신 보안 주제들",
    "sourceSection": "SECTION 07 최신 보안 주제들",
    "question": "클라이언트가 다른 컴퓨터에서 실행되는 함수나 프로시저를 로컬 호출처럼 요청한다. 이 개념은?",
    "options": [
      {
        "number": 1,
        "text": "DNS 캐시"
      },
      {
        "number": 2,
        "text": "파일 권한 상속"
      },
      {
        "number": 3,
        "text": "디스크 압축"
      },
      {
        "number": 4,
        "text": "RPC"
      }
    ],
    "answer": 4,
    "explanation": "RPC는 네트워크 너머의 다른 주소 공간에서 프로시저 실행을 요청하는 방식이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q272",
    "partId": 4,
    "sectionId": 18,
    "sectionTitle": "최신 보안 주제들",
    "sourceSection": "SECTION 07 최신 보안 주제들",
    "question": "일반 검색에 잡히지 않는 사내 로그인 페이지와, 전용 오버레이 네트워크를 통해 접속하는 숨은 서비스를 구분한다. 옳은 설명은?",
    "options": [
      {
        "number": 1,
        "text": "검색에 안 잡히는 모든 웹 페이지는 다크웹이다."
      },
      {
        "number": 2,
        "text": "딥웹 전체가 다크웹에 속한다."
      },
      {
        "number": 3,
        "text": "일반 검색에 잡히지 않는 페이지 모두를 다크웹으로 분류하지는 않는다."
      },
      {
        "number": 4,
        "text": "다크웹은 항상 일반 검색 결과에 기본으로 나온다."
      }
    ],
    "answer": 3,
    "explanation": "딥웹은 일반 검색에 색인되지 않은 콘텐츠를 넓게 가리킨다. 다크웹은 별도 네트워크나 접근 수단을 쓰는 하위 범주로 설명할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q273",
    "partId": 5,
    "sectionId": 19,
    "sectionTitle": "네트워크 개요",
    "sourceSection": "SECTION 01 네트워크 개요",
    "question": "일반 이더넷 인터페이스의 48비트 MAC 주소 형식에 맞는 것은?",
    "options": [
      {
        "number": 1,
        "text": "2001:db8::1"
      },
      {
        "number": 2,
        "text": "192.0.2.1"
      },
      {
        "number": 3,
        "text": "02:00:5E:10:20"
      },
      {
        "number": 4,
        "text": "02:00:5E:10:20:30"
      }
    ],
    "answer": 4,
    "explanation": "48비트 주소는 보통 16진수 두 자리씩 여섯 묶음으로 표시한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q274",
    "partId": 5,
    "sectionId": 19,
    "sectionTitle": "네트워크 개요",
    "sourceSection": "SECTION 01 네트워크 개요",
    "question": "데이터링크 계층 장비의 대표 기능은?",
    "options": [
      {
        "number": 1,
        "text": "HTTP 세션 인증"
      },
      {
        "number": 2,
        "text": "인터넷 전체 경로 계산"
      },
      {
        "number": 3,
        "text": "응용 데이터 압축"
      },
      {
        "number": 4,
        "text": "MAC 주소에 따른 프레임 전달"
      }
    ],
    "answer": 4,
    "explanation": "데이터링크 계층은 로컬 링크에서 프레임을 전달한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q275",
    "partId": 5,
    "sectionId": 19,
    "sectionTitle": "네트워크 개요",
    "sourceSection": "SECTION 01 네트워크 개요",
    "question": "이더넷 프레임의 FCS가 직접 돕는 기능은?",
    "options": [
      {
        "number": 1,
        "text": "IP 경로 계산"
      },
      {
        "number": 2,
        "text": "사용자 인증"
      },
      {
        "number": 3,
        "text": "메시지 복호화"
      },
      {
        "number": 4,
        "text": "전송 오류 검출"
      }
    ],
    "answer": 4,
    "explanation": "FCS는 전송 중 프레임에 생긴 오류를 검출하는 데 쓰인다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q276",
    "partId": 5,
    "sectionId": 19,
    "sectionTitle": "네트워크 개요",
    "sourceSection": "SECTION 01 네트워크 개요",
    "question": "48비트 MAC 주소에 대한 옳은 설명은?",
    "options": [
      {
        "number": 1,
        "text": "로컬 관리 주소를 사용할 수 있다."
      },
      {
        "number": 2,
        "text": "항상 네 자리 십진수로 표시한다."
      },
      {
        "number": 3,
        "text": "반드시 공개 IP와 일치한다."
      },
      {
        "number": 4,
        "text": "라우터를 지날 때도 처음 주소가 모든 링크에서 유지된다."
      }
    ],
    "answer": 1,
    "explanation": "MAC 주소에는 조직이 직접 지정한 로컬 관리 주소도 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q277",
    "partId": 5,
    "sectionId": 20,
    "sectionTitle": "TCP/IP",
    "sourceSection": "SECTION 02 TCP/IP",
    "question": "OSI 모델에서 프로세스 간 데이터 전송과 네트워크 간 경로 선택을 담당하는 계층은 각각?",
    "options": [
      {
        "number": 1,
        "text": "데이터링크·전송"
      },
      {
        "number": 2,
        "text": "전송·네트워크"
      },
      {
        "number": 3,
        "text": "응용·표현"
      },
      {
        "number": 4,
        "text": "세션·물리"
      }
    ],
    "answer": 2,
    "explanation": "전송 계층은 종단 간 전송을, 네트워크 계층은 네트워크 간 전달 경로를 맡는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q278",
    "partId": 5,
    "sectionId": 20,
    "sectionTitle": "TCP/IP",
    "sourceSection": "SECTION 02 TCP/IP",
    "question": "서버 운영자가 같은 TCP 서비스에 접속한 두 연결을 구분한다. 연결을 식별하는 데 사용하는 정보의 조합은?",
    "options": [
      {
        "number": 1,
        "text": "출발지·목적지 IP, 출발지·목적지 포트, 전송 프로토콜"
      },
      {
        "number": 2,
        "text": "서버 포트와 파일 이름"
      },
      {
        "number": 3,
        "text": "클라이언트의 사용자 이름만"
      },
      {
        "number": 4,
        "text": "두 장치의 MAC 주소만"
      }
    ],
    "answer": 1,
    "explanation": "IP 주소 두 개와 포트 두 개, 전송 프로토콜을 묶은 5튜플로 흐름을 구분할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q279",
    "partId": 5,
    "sectionId": 20,
    "sectionTitle": "TCP/IP",
    "sourceSection": "SECTION 02 TCP/IP",
    "question": "기본 포트 22, 25, 53에 대응하는 서비스 순서는?",
    "options": [
      {
        "number": 1,
        "text": "SSH·SMTP·DNS"
      },
      {
        "number": 2,
        "text": "DNS·SMTP·SSH"
      },
      {
        "number": 3,
        "text": "SMTP·DNS·SSH"
      },
      {
        "number": 4,
        "text": "SSH·DNS·SMTP"
      }
    ],
    "answer": 1,
    "explanation": "기본 서비스 포트는 SSH 22, SMTP 25, DNS 53이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q280",
    "partId": 5,
    "sectionId": 20,
    "sectionTitle": "TCP/IP",
    "sourceSection": "SECTION 02 TCP/IP",
    "question": "IPv4 라우터가 패킷을 전달할 때 감소시키는 헤더 필드는?",
    "options": [
      {
        "number": 1,
        "text": "버전"
      },
      {
        "number": 2,
        "text": "TTL"
      },
      {
        "number": 3,
        "text": "헤더 길이"
      },
      {
        "number": 4,
        "text": "출발지 주소"
      }
    ],
    "answer": 2,
    "explanation": "TTL은 라우팅 루프에서 패킷이 끝없이 돌지 않게 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q281",
    "partId": 5,
    "sectionId": 20,
    "sectionTitle": "TCP/IP",
    "sourceSection": "SECTION 02 TCP/IP",
    "question": "클래스 기반 주소 체계에서 첫 옥텟이 150인 주소는 어느 클래스인가?",
    "options": [
      {
        "number": 1,
        "text": "D"
      },
      {
        "number": 2,
        "text": "A"
      },
      {
        "number": 3,
        "text": "C"
      },
      {
        "number": 4,
        "text": "B"
      }
    ],
    "answer": 4,
    "explanation": "클래스 B의 첫 옥텟 범위는 128~191이다. 현대에는 CIDR을 사용한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q282",
    "partId": 5,
    "sectionId": 20,
    "sectionTitle": "TCP/IP",
    "sourceSection": "SECTION 02 TCP/IP",
    "question": "IPv4의 /27을 점으로 구분한 서브넷 마스크로 쓰면?",
    "options": [
      {
        "number": 1,
        "text": "255.255.255.192"
      },
      {
        "number": 2,
        "text": "255.255.255.224"
      },
      {
        "number": 3,
        "text": "255.255.255.248"
      },
      {
        "number": 4,
        "text": "255.255.255.240"
      }
    ],
    "answer": 2,
    "explanation": "/27은 마지막 옥텟의 상위 3비트도 1이므로 224다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q283",
    "partId": 5,
    "sectionId": 20,
    "sectionTitle": "TCP/IP",
    "sourceSection": "SECTION 02 TCP/IP",
    "question": "같은 이더넷 링크에서 알려진 IPv4 주소의 MAC 주소를 찾는 프로토콜은?",
    "options": [
      {
        "number": 1,
        "text": "ARP"
      },
      {
        "number": 2,
        "text": "SMTP"
      },
      {
        "number": 3,
        "text": "DNS"
      },
      {
        "number": 4,
        "text": "TCP"
      }
    ],
    "answer": 1,
    "explanation": "ARP는 로컬 링크의 IPv4 주소를 링크 계층 주소에 대응시킨다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q284",
    "partId": 5,
    "sectionId": 20,
    "sectionTitle": "TCP/IP",
    "sourceSection": "SECTION 02 TCP/IP",
    "question": "IPv4 수신 측에서 단편 재조립 시간이 끝나도 모든 단편이 오지 않았다. 이 경우에 해당하는 ICMP 오류 유형은?",
    "options": [
      {
        "number": 1,
        "text": "Redirect"
      },
      {
        "number": 2,
        "text": "Parameter Problem"
      },
      {
        "number": 3,
        "text": "Echo Reply"
      },
      {
        "number": 4,
        "text": "Time Exceeded"
      }
    ],
    "answer": 4,
    "explanation": "ICMP Time Exceeded에는 단편 재조립 시간 초과를 나타내는 코드가 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q285",
    "partId": 5,
    "sectionId": 20,
    "sectionTitle": "TCP/IP",
    "sourceSection": "SECTION 02 TCP/IP",
    "question": "오래된 네트워크 기록에서, 혼잡이 발생했을 때 송신 측에 전송 속도를 줄이도록 알리기 위해 과거에 정의된 ICMP 메시지를 찾는다. 어느 것인가?",
    "options": [
      {
        "number": 1,
        "text": "Destination Unreachable"
      },
      {
        "number": 2,
        "text": "Source Quench"
      },
      {
        "number": 3,
        "text": "Time Exceeded"
      },
      {
        "number": 4,
        "text": "Echo Reply"
      }
    ],
    "answer": 2,
    "explanation": "Source Quench는 과거의 혼잡 알림 메시지다. RFC 6633에 따라 폐기됐다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q286",
    "partId": 5,
    "sectionId": 20,
    "sectionTitle": "TCP/IP",
    "sourceSection": "SECTION 02 TCP/IP",
    "question": "여러 사설 단말을 공인 IPv4 주소 하나로 내보내면서 연결을 구분하는 PAT의 핵심은?",
    "options": [
      {
        "number": 1,
        "text": "DNS 이름만 바꾼다."
      },
      {
        "number": 2,
        "text": "패킷 전체를 자동으로 암호화한다."
      },
      {
        "number": 3,
        "text": "MAC 주소만 변경한다."
      },
      {
        "number": 4,
        "text": "IP 주소와 전송 계층 포트의 매핑을 관리한다."
      }
    ],
    "answer": 4,
    "explanation": "PAT는 주소와 포트의 조합으로 연결을 구분한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q287",
    "partId": 5,
    "sectionId": 20,
    "sectionTitle": "TCP/IP",
    "sourceSection": "SECTION 02 TCP/IP",
    "question": "일반 이더넷 MAC 주소와 IPv4 주소의 길이는 각각?",
    "options": [
      {
        "number": 1,
        "text": "64비트·128비트"
      },
      {
        "number": 2,
        "text": "128비트·48비트"
      },
      {
        "number": 3,
        "text": "32비트·48비트"
      },
      {
        "number": 4,
        "text": "48비트·32비트"
      }
    ],
    "answer": 4,
    "explanation": "일반 이더넷 MAC 주소는 48비트이고 IPv4 주소는 32비트다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q288",
    "partId": 5,
    "sectionId": 20,
    "sectionTitle": "TCP/IP",
    "sourceSection": "SECTION 02 TCP/IP",
    "question": "IPv6 기본 헤더에 관한 설명으로 맞는 것은?",
    "options": [
      {
        "number": 1,
        "text": "라우터가 IPv6 단편화를 수행한다."
      },
      {
        "number": 2,
        "text": "주소는 128비트이고 기본 헤더는 40바이트다."
      },
      {
        "number": 3,
        "text": "주소가 32비트다."
      },
      {
        "number": 4,
        "text": "IPv4와 같은 헤더 체크섬이 있다."
      }
    ],
    "answer": 2,
    "explanation": "IPv6 주소는 128비트이며 기본 헤더는 40바이트로 고정된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q289",
    "partId": 5,
    "sectionId": 20,
    "sectionTitle": "TCP/IP",
    "sourceSection": "SECTION 02 TCP/IP",
    "question": "TCP/IP 모델의 인터넷 계층에 속하는 기능은?",
    "options": [
      {
        "number": 1,
        "text": "IP 데이터그램을 네트워크 사이에서 전달"
      },
      {
        "number": 2,
        "text": "파일 전송 화면 구성"
      },
      {
        "number": 3,
        "text": "사용자 인터페이스 표시"
      },
      {
        "number": 4,
        "text": "응용 데이터 인코딩"
      }
    ],
    "answer": 1,
    "explanation": "IP는 TCP/IP 모델의 인터넷 계층에서 주소 지정과 전달에 쓰인다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q290",
    "partId": 5,
    "sectionId": 20,
    "sectionTitle": "TCP/IP",
    "sourceSection": "SECTION 02 TCP/IP",
    "question": "TCP가 전송 오류와 손실에 대응하는 방식은?",
    "options": [
      {
        "number": 1,
        "text": "항상 모든 데이터를 한 번만 보낸다."
      },
      {
        "number": 2,
        "text": "순서를 애플리케이션에 맡기고 재전송하지 않는다."
      },
      {
        "number": 3,
        "text": "순서번호와 확인 응답을 이용해 손실 데이터를 재전송한다."
      },
      {
        "number": 4,
        "text": "링크 주소만 확인해 전달을 끝낸다."
      }
    ],
    "answer": 3,
    "explanation": "순서번호와 확인 응답은 TCP의 신뢰성 있는 전송을 뒷받침한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q291",
    "partId": 5,
    "sectionId": 20,
    "sectionTitle": "TCP/IP",
    "sourceSection": "SECTION 02 TCP/IP",
    "question": "기본 TCP 혼잡 제어에서 혼잡 윈도가 임계값보다 작을 때 급격히 늘리는 단계는?",
    "options": [
      {
        "number": 1,
        "text": "정적 라우팅"
      },
      {
        "number": 2,
        "text": "주소 변환"
      },
      {
        "number": 3,
        "text": "연결 종료"
      },
      {
        "number": 4,
        "text": "느린 시작"
      }
    ],
    "answer": 4,
    "explanation": "느린 시작에서는 ACK를 받으며 혼잡 윈도가 왕복 시간 단위로 빠르게 증가한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q292",
    "partId": 5,
    "sectionId": 21,
    "sectionTitle": "라우팅",
    "sourceSection": "SECTION 03 라우팅",
    "question": "링크가 끊어졌을 때 라우터들이 경로 정보를 교환해 대체 경로를 계산한다. 어떤 방식인가?",
    "options": [
      {
        "number": 1,
        "text": "동적 라우팅"
      },
      {
        "number": 2,
        "text": "포트 포워딩"
      },
      {
        "number": 3,
        "text": "MAC 필터링"
      },
      {
        "number": 4,
        "text": "정적 라우팅"
      }
    ],
    "answer": 1,
    "explanation": "동적 라우팅은 경로 정보를 교환하고 변화에 따라 경로를 다시 계산한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q293",
    "partId": 5,
    "sectionId": 21,
    "sectionTitle": "라우팅",
    "sourceSection": "SECTION 03 라우팅",
    "question": "RIP가 경로 선택 지표로 사용하는 대표 값은?",
    "options": [
      {
        "number": 1,
        "text": "프레임 크기"
      },
      {
        "number": 2,
        "text": "포트 번호"
      },
      {
        "number": 3,
        "text": "인증서 길이"
      },
      {
        "number": 4,
        "text": "홉 수"
      }
    ],
    "answer": 4,
    "explanation": "RIP는 홉 수를 경로 지표로 사용한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q294",
    "partId": 5,
    "sectionId": 21,
    "sectionTitle": "라우팅",
    "sourceSection": "SECTION 03 라우팅",
    "question": "링크 상태 정보를 모으고 다익스트라 알고리즘으로 경로를 계산하는 프로토콜은?",
    "options": [
      {
        "number": 1,
        "text": "RIP"
      },
      {
        "number": 2,
        "text": "ARP"
      },
      {
        "number": 3,
        "text": "OSPF"
      },
      {
        "number": 4,
        "text": "FTP"
      }
    ],
    "answer": 3,
    "explanation": "OSPF는 링크 상태 정보를 기반으로 최단 경로 트리를 계산한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q295",
    "partId": 5,
    "sectionId": 21,
    "sectionTitle": "라우팅",
    "sourceSection": "SECTION 03 라우팅",
    "question": "서로 다른 자율 시스템(AS) 사이의 경로 교환에 쓰이는 프로토콜은?",
    "options": [
      {
        "number": 1,
        "text": "ARP"
      },
      {
        "number": 2,
        "text": "BGP"
      },
      {
        "number": 3,
        "text": "DHCP"
      },
      {
        "number": 4,
        "text": "RIP"
      }
    ],
    "answer": 2,
    "explanation": "BGP는 AS 간 경로 교환에 쓰인다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q296",
    "partId": 5,
    "sectionId": 21,
    "sectionTitle": "라우팅",
    "sourceSection": "SECTION 03 라우팅",
    "question": "라우터 원격 관리에서 개별 관리자 계정과 전송 보호가 모두 필요하다. 적절한 선택은?",
    "options": [
      {
        "number": 1,
        "text": "공용 계정으로 Telnet 사용"
      },
      {
        "number": 2,
        "text": "관리 암호를 평문 메일로 전송"
      },
      {
        "number": 3,
        "text": "인증 없이 웹 관리 공개"
      },
      {
        "number": 4,
        "text": "SSH와 개인별 관리자 계정 사용"
      }
    ],
    "answer": 4,
    "explanation": "SSH는 원격 관리 통신을 보호하며 개인별 계정은 책임 추적을 돕는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q297",
    "partId": 5,
    "sectionId": 21,
    "sectionTitle": "라우팅",
    "sourceSection": "SECTION 03 라우팅",
    "question": "일치하는 더 구체적인 경로가 없을 때 패킷을 보낼 곳을 정하는 경로는?",
    "options": [
      {
        "number": 1,
        "text": "기본 경로"
      },
      {
        "number": 2,
        "text": "호스트 경로"
      },
      {
        "number": 3,
        "text": "루프백 경로"
      },
      {
        "number": 4,
        "text": "멀티캐스트 주소"
      }
    ],
    "answer": 1,
    "explanation": "기본 경로는 다른 일치 경로를 찾지 못했을 때 사용한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q298",
    "partId": 5,
    "sectionId": 21,
    "sectionTitle": "라우팅",
    "sourceSection": "SECTION 03 라우팅",
    "question": "라우터의 관리 서비스를 보호하는 설정은?",
    "options": [
      {
        "number": 1,
        "text": "구형 관리 서비스를 모두 켬"
      },
      {
        "number": 2,
        "text": "외부에서 아무나 로그인 허용"
      },
      {
        "number": 3,
        "text": "관리 접속을 지정된 네트워크로 제한"
      },
      {
        "number": 4,
        "text": "기본 비밀번호를 계속 사용"
      }
    ],
    "answer": 3,
    "explanation": "관리 접근 허용 범위를 제한하면 불필요한 노출이 줄어든다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q299",
    "partId": 5,
    "sectionId": 21,
    "sectionTitle": "라우팅",
    "sourceSection": "SECTION 03 라우팅",
    "question": "외부 인터페이스에 경계 필터를 적용하는 정책으로 옳은 것은?",
    "options": [
      {
        "number": 1,
        "text": "외부에서 들어오는 내부 주소 위조 트래픽을 차단한다."
      },
      {
        "number": 2,
        "text": "모든 출발지 주소를 내부 주소로 신뢰한다."
      },
      {
        "number": 3,
        "text": "필터 정책 변경 기록을 남기지 않는다."
      },
      {
        "number": 4,
        "text": "모든 원격 관리 요청을 허용한다."
      }
    ],
    "answer": 1,
    "explanation": "외부에서 들어온 패킷이 내부 출발지 주소를 주장하면 위조를 의심할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q300",
    "partId": 5,
    "sectionId": 22,
    "sectionTitle": "네트워크 장비의 이해",
    "sourceSection": "SECTION 04 네트워크 장비의 이해",
    "question": "컴퓨터를 이더넷 링크에 연결하며 프레임의 송수신을 담당하는 장치는?",
    "options": [
      {
        "number": 1,
        "text": "웹 캐시"
      },
      {
        "number": 2,
        "text": "DNS 리졸버"
      },
      {
        "number": 3,
        "text": "파일 서버"
      },
      {
        "number": 4,
        "text": "NIC"
      }
    ],
    "answer": 4,
    "explanation": "NIC는 호스트를 네트워크 매체에 연결하는 인터페이스다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q301",
    "partId": 5,
    "sectionId": 22,
    "sectionTitle": "네트워크 장비의 이해",
    "sourceSection": "SECTION 04 네트워크 장비의 이해",
    "question": "일반 L2 스위치가 전달 여부를 정할 때 직접 보는 정보는?",
    "options": [
      {
        "number": 1,
        "text": "목적지 MAC 주소"
      },
      {
        "number": 2,
        "text": "목적지 URL"
      },
      {
        "number": 3,
        "text": "목적지 프로세스 ID"
      },
      {
        "number": 4,
        "text": "사용자 이름"
      }
    ],
    "answer": 1,
    "explanation": "L2 스위치는 목적지 MAC 주소와 전달 테이블을 이용한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q302",
    "partId": 5,
    "sectionId": 22,
    "sectionTitle": "네트워크 장비의 이해",
    "sourceSection": "SECTION 04 네트워크 장비의 이해",
    "question": "스위치가 프레임을 전부 받은 뒤 FCS를 확인하고 전달한다. 어느 방식인가?",
    "options": [
      {
        "number": 1,
        "text": "컷스루"
      },
      {
        "number": 2,
        "text": "브로드캐스트만"
      },
      {
        "number": 3,
        "text": "프래그먼트 프리"
      },
      {
        "number": 4,
        "text": "저장 후 전달"
      }
    ],
    "answer": 4,
    "explanation": "저장 후 전달은 프레임 전체를 수신한 뒤 오류를 검사한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q303",
    "partId": 5,
    "sectionId": 22,
    "sectionTitle": "네트워크 장비의 이해",
    "sourceSection": "SECTION 04 네트워크 장비의 이해",
    "question": "HTTP 요청 경로처럼 애플리케이션 데이터에 따라 백엔드를 선택하려 한다. 어떤 종류가 적합한가?",
    "options": [
      {
        "number": 1,
        "text": "L7 스위치"
      },
      {
        "number": 2,
        "text": "광 변환기"
      },
      {
        "number": 3,
        "text": "L2 허브"
      },
      {
        "number": 4,
        "text": "리피터"
      }
    ],
    "answer": 1,
    "explanation": "L7 장비는 애플리케이션 계층 정보를 보고 처리할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q304",
    "partId": 5,
    "sectionId": 22,
    "sectionTitle": "네트워크 장비의 이해",
    "sourceSection": "SECTION 04 네트워크 장비의 이해",
    "question": "스위치 한 대에서 부서별로 브로드캐스트 영역을 논리적으로 분리하려 한다. 무엇을 구성하는가?",
    "options": [
      {
        "number": 1,
        "text": "NAT"
      },
      {
        "number": 2,
        "text": "MAC 주소 복제"
      },
      {
        "number": 3,
        "text": "VLAN"
      },
      {
        "number": 4,
        "text": "DHCP 임대"
      }
    ],
    "answer": 3,
    "explanation": "VLAN은 스위치에서 논리적 브로드캐스트 영역을 나눈다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q305",
    "partId": 5,
    "sectionId": 22,
    "sectionTitle": "네트워크 장비의 이해",
    "sourceSection": "SECTION 04 네트워크 장비의 이해",
    "question": "서로 다른 VLAN의 단말이 IP 통신을 해야 한다. 필요한 기능은?",
    "options": [
      {
        "number": 1,
        "text": "프레임 압축"
      },
      {
        "number": 2,
        "text": "VLAN 간 라우팅"
      },
      {
        "number": 3,
        "text": "시간 동기화"
      },
      {
        "number": 4,
        "text": "포트 미러링"
      }
    ],
    "answer": 2,
    "explanation": "VLAN 간 통신에는 라우터나 L3 스위치의 라우팅 기능이 필요하다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q306",
    "partId": 5,
    "sectionId": 22,
    "sectionTitle": "네트워크 장비의 이해",
    "sourceSection": "SECTION 04 네트워크 장비의 이해",
    "question": "VLAN을 적용했다고 해서 자동으로 제공되지는 않는 기능은?",
    "options": [
      {
        "number": 1,
        "text": "부서별 논리 분리"
      },
      {
        "number": 2,
        "text": "포트의 논리 그룹 변경"
      },
      {
        "number": 3,
        "text": "모든 트래픽의 암호화"
      },
      {
        "number": 4,
        "text": "브로드캐스트 영역 분리"
      }
    ],
    "answer": 3,
    "explanation": "VLAN은 논리 분리 기술이며 암호화 기능은 별도로 적용해야 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q307",
    "partId": 5,
    "sectionId": 23,
    "sectionTitle": "무선통신 보안",
    "sourceSection": "SECTION 05 무선통신 보안",
    "question": "WEP의 보안 문제를 보완하기 위해 RSN을 정의한 IEEE 무선랜 보안 규격은?",
    "options": [
      {
        "number": 1,
        "text": "802.1Q"
      },
      {
        "number": 2,
        "text": "802.11i"
      },
      {
        "number": 3,
        "text": "802.11b"
      },
      {
        "number": 4,
        "text": "802.3"
      }
    ],
    "answer": 2,
    "explanation": "802.11i는 인증과 무선 구간 보호를 보강한 RSN을 정의한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q308",
    "partId": 5,
    "sectionId": 23,
    "sectionTitle": "무선통신 보안",
    "sourceSection": "SECTION 05 무선통신 보안",
    "question": "무선 사용자의 접속 장애가 같은 채널의 강한 방해 신호와 함께 발생한다. 어떤 위협을 우선 검토할 만한가?",
    "options": [
      {
        "number": 1,
        "text": "전파 방해"
      },
      {
        "number": 2,
        "text": "인증서 만료"
      },
      {
        "number": 3,
        "text": "사전 대입"
      },
      {
        "number": 4,
        "text": "주소 중복"
      }
    ],
    "answer": 1,
    "explanation": "재밍은 무선 매체의 전송을 방해하는 전파 간섭 위협이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q309",
    "partId": 5,
    "sectionId": 23,
    "sectionTitle": "무선통신 보안",
    "sourceSection": "SECTION 05 무선통신 보안",
    "question": "승인 목록의 MAC 주소를 기준으로 접속 장치를 확인한다. 이 방법의 한계는?",
    "options": [
      {
        "number": 1,
        "text": "항상 공개키 검증이 필요하다."
      },
      {
        "number": 2,
        "text": "MAC 주소는 변경이나 위조가 가능해 강한 신원 근거가 되지 못한다."
      },
      {
        "number": 3,
        "text": "무조건 지문 확인이 포함된다."
      },
      {
        "number": 4,
        "text": "MAC 주소를 읽는 것만으로 통신이 암호화된다."
      }
    ],
    "answer": 2,
    "explanation": "MAC 기반 허용 목록은 보조 통제다. 강한 장치 인증을 대신하지 못한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q310",
    "partId": 5,
    "sectionId": 23,
    "sectionTitle": "무선통신 보안",
    "sourceSection": "SECTION 05 무선통신 보안",
    "question": "802.1X에서 단말을 대신해 포트 접근을 통제하고 인증 교환을 중계하는 역할은?",
    "options": [
      {
        "number": 1,
        "text": "Supplicant"
      },
      {
        "number": 2,
        "text": "인증 서버"
      },
      {
        "number": 3,
        "text": "DNS 리졸버"
      },
      {
        "number": 4,
        "text": "Authenticator"
      }
    ],
    "answer": 4,
    "explanation": "Authenticator는 포트를 통제하는 네트워크 장비 쪽 역할이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q311",
    "partId": 5,
    "sectionId": 23,
    "sectionTitle": "무선통신 보안",
    "sourceSection": "SECTION 05 무선통신 보안",
    "question": "기업 무선망에서 802.1X/EAP와 AES-CCMP를 사용하는 WPA2 모드는?",
    "options": [
      {
        "number": 1,
        "text": "WPA2-Personal"
      },
      {
        "number": 2,
        "text": "WEP"
      },
      {
        "number": 3,
        "text": "공개 무선망"
      },
      {
        "number": 4,
        "text": "WPA2-Enterprise"
      }
    ],
    "answer": 4,
    "explanation": "Enterprise 모드는 802.1X/EAP를 이용하고, Personal은 보통 공유 암호를 사용한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q312",
    "partId": 5,
    "sectionId": 23,
    "sectionTitle": "무선통신 보안",
    "sourceSection": "SECTION 05 무선통신 보안",
    "question": "WPA3-Personal에서 암호 기반의 키 교환에 채택한 것은?",
    "options": [
      {
        "number": 1,
        "text": "FTP"
      },
      {
        "number": 2,
        "text": "WEP"
      },
      {
        "number": 3,
        "text": "TKIP"
      },
      {
        "number": 4,
        "text": "SAE"
      }
    ],
    "answer": 4,
    "explanation": "WPA3-Personal은 SAE를 사용한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q313",
    "partId": 5,
    "sectionId": 23,
    "sectionTitle": "무선통신 보안",
    "sourceSection": "SECTION 05 무선통신 보안",
    "question": "무선랜 포트의 접근을 인증 성공 여부로 제어하는 IEEE 표준은?",
    "options": [
      {
        "number": 1,
        "text": "802.1Q"
      },
      {
        "number": 2,
        "text": "802.11b"
      },
      {
        "number": 3,
        "text": "802.3"
      },
      {
        "number": 4,
        "text": "802.1X"
      }
    ],
    "answer": 4,
    "explanation": "802.1X는 포트 기반 네트워크 접근 제어 프레임워크다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q314",
    "partId": 5,
    "sectionId": 23,
    "sectionTitle": "무선통신 보안",
    "sourceSection": "SECTION 05 무선통신 보안",
    "question": "RFID 태그 통신에서 단순 차폐와 달리 암호 기술을 사용하는 보호 대책은?",
    "options": [
      {
        "number": 1,
        "text": "리더의 물리적 위치 변경"
      },
      {
        "number": 2,
        "text": "리더의 전원 끄기"
      },
      {
        "number": 3,
        "text": "차폐 봉투에 태그 보관"
      },
      {
        "number": 4,
        "text": "공유키 챌린지·응답으로 태그 인증"
      }
    ],
    "answer": 4,
    "explanation": "챌린지·응답에는 암호 연산을 사용해 태그가 키를 가진 장치인지 확인할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q315",
    "partId": 5,
    "sectionId": 23,
    "sectionTitle": "무선통신 보안",
    "sourceSection": "SECTION 05 무선통신 보안",
    "question": "iOS가 부과한 실행 제한을 해제하는 행위의 이름은?",
    "options": [
      {
        "number": 1,
        "text": "탈옥(jailbreak)"
      },
      {
        "number": 2,
        "text": "컨테이너화"
      },
      {
        "number": 3,
        "text": "전자서명 검증"
      },
      {
        "number": 4,
        "text": "화면 잠금"
      }
    ],
    "answer": 1,
    "explanation": "탈옥은 iOS의 플랫폼 제한을 우회하는 행위를 뜻하며 기본 보안 보장이 약해질 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q316",
    "partId": 5,
    "sectionId": 23,
    "sectionTitle": "무선통신 보안",
    "sourceSection": "SECTION 05 무선통신 보안",
    "question": "한 휴대전화에서 업무용 앱·데이터를 개인용 영역과 논리적으로 나누려 한다. 관련 기술은?",
    "options": [
      {
        "number": 1,
        "text": "모바일 컨테이너화"
      },
      {
        "number": 2,
        "text": "파일 이름 변경"
      },
      {
        "number": 3,
        "text": "공유 계정 사용"
      },
      {
        "number": 4,
        "text": "플랫 네트워크"
      }
    ],
    "answer": 1,
    "explanation": "컨테이너나 관리 프로필은 업무 앱과 데이터를 개인 공간과 분리하는 데 쓰인다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q317",
    "partId": 5,
    "sectionId": 23,
    "sectionTitle": "무선통신 보안",
    "sourceSection": "SECTION 05 무선통신 보안",
    "question": "안드로이드 앱에서 필요한 권한과 앱 구성요소를 선언하는 파일은?",
    "options": [
      {
        "number": 1,
        "text": "classes.dex"
      },
      {
        "number": 2,
        "text": "README.md"
      },
      {
        "number": 3,
        "text": "settings.gradle"
      },
      {
        "number": 4,
        "text": "AndroidManifest.xml"
      }
    ],
    "answer": 4,
    "explanation": "매니페스트는 앱 구성요소와 권한 등을 시스템에 선언한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q318",
    "partId": 5,
    "sectionId": 23,
    "sectionTitle": "무선통신 보안",
    "sourceSection": "SECTION 05 무선통신 보안",
    "question": "안드로이드 앱에 암호키를 저장할 때 적절한 방법은?",
    "options": [
      {
        "number": 1,
        "text": "Android Keystore 사용"
      },
      {
        "number": 2,
        "text": "공개 로그에 출력"
      },
      {
        "number": 3,
        "text": "공유 폴더에 텍스트로 저장"
      },
      {
        "number": 4,
        "text": "소스에 평문으로 고정"
      }
    ],
    "answer": 1,
    "explanation": "Android Keystore는 앱 키의 저장과 사용 제어를 지원한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q319",
    "partId": 5,
    "sectionId": 23,
    "sectionTitle": "무선통신 보안",
    "sourceSection": "SECTION 05 무선통신 보안",
    "question": "권한 있는 APK 점검에서 앱 자원과 매니페스트를 읽기 쉽게 디코딩하는 도구는?",
    "options": [
      {
        "number": 1,
        "text": "Apktool"
      },
      {
        "number": 2,
        "text": "cron"
      },
      {
        "number": 3,
        "text": "ping"
      },
      {
        "number": 4,
        "text": "netstat"
      }
    ],
    "answer": 1,
    "explanation": "Apktool은 APK의 자원과 매니페스트를 분석 가능한 형태로 풀어 준다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q320",
    "partId": 5,
    "sectionId": 23,
    "sectionTitle": "무선통신 보안",
    "sourceSection": "SECTION 05 무선통신 보안",
    "question": "모바일 앱이 사진 촬영 기능만 쓴다. 권한 신청으로 옳은 것은?",
    "options": [
      {
        "number": 1,
        "text": "설치 때 모든 민감 권한 요구"
      },
      {
        "number": 2,
        "text": "모든 개인정보를 공용 저장소에 저장"
      },
      {
        "number": 3,
        "text": "기능에 필요한 권한을 필요한 시점에 요청"
      },
      {
        "number": 4,
        "text": "다른 앱의 자격 증명을 공유"
      }
    ],
    "answer": 3,
    "explanation": "최소 권한 원칙을 적용하면 앱이 접근할 수 있는 범위가 줄어든다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q321",
    "partId": 5,
    "sectionId": 23,
    "sectionTitle": "무선통신 보안",
    "sourceSection": "SECTION 05 무선통신 보안",
    "question": "타사 앱에 사진 읽기 권한만 위임하며 계정 비밀번호는 알려주지 않는다. 적합한 프레임워크는?",
    "options": [
      {
        "number": 1,
        "text": "OAuth 2.0"
      },
      {
        "number": 2,
        "text": "ARP"
      },
      {
        "number": 3,
        "text": "SMTP"
      },
      {
        "number": 4,
        "text": "ICMP"
      }
    ],
    "answer": 1,
    "explanation": "OAuth 2.0은 범위를 제한한 접근 권한을 위임하는 프레임워크다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q322",
    "partId": 5,
    "sectionId": 24,
    "sectionTitle": "네트워크 관리",
    "sourceSection": "SECTION 06 네트워크 관리",
    "question": "구형 유닉스에서 hosts.equiv에 등록된 호스트를 신뢰해 원격 로그인하는 서비스는?",
    "options": [
      {
        "number": 1,
        "text": "HTTPS"
      },
      {
        "number": 2,
        "text": "rlogin"
      },
      {
        "number": 3,
        "text": "SFTP"
      },
      {
        "number": 4,
        "text": "DNS"
      }
    ],
    "answer": 2,
    "explanation": "rlogin 계열의 호스트 신뢰 방식은 위험하다. 현대 환경에서는 보통 인증된 SSH를 사용한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q323",
    "partId": 5,
    "sectionId": 24,
    "sectionTitle": "네트워크 관리",
    "sourceSection": "SECTION 06 네트워크 관리",
    "question": "SSH 연결 위에서 동작하는 파일 전송 프로토콜은?",
    "options": [
      {
        "number": 1,
        "text": "FTP"
      },
      {
        "number": 2,
        "text": "SFTP"
      },
      {
        "number": 3,
        "text": "SNMP"
      },
      {
        "number": 4,
        "text": "TFTP"
      }
    ],
    "answer": 2,
    "explanation": "SFTP는 SSH를 기반으로 파일 전송 기능을 제공한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q324",
    "partId": 5,
    "sectionId": 24,
    "sectionTitle": "네트워크 관리",
    "sourceSection": "SECTION 06 네트워크 관리",
    "question": "SSH가 직접 제공하는 기능이 아닌 것은?",
    "options": [
      {
        "number": 1,
        "text": "라우터의 모든 IP 패킷 필터링"
      },
      {
        "number": 2,
        "text": "접속 주체 인증"
      },
      {
        "number": 3,
        "text": "원격 로그인 보호"
      },
      {
        "number": 4,
        "text": "통신 무결성 확인"
      }
    ],
    "answer": 1,
    "explanation": "SSH는 보호된 원격 통신 프로토콜이며 방화벽의 기능을 대체하지 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q325",
    "partId": 5,
    "sectionId": 24,
    "sectionTitle": "네트워크 관리",
    "sourceSection": "SECTION 06 네트워크 관리",
    "question": "네트워크 접근의 인증·인가·과금(AAA) 중심 프로토콜에 해당하는 것은?",
    "options": [
      {
        "number": 1,
        "text": "RADIUS"
      },
      {
        "number": 2,
        "text": "NTP"
      },
      {
        "number": 3,
        "text": "PGP"
      },
      {
        "number": 4,
        "text": "DNS"
      }
    ],
    "answer": 1,
    "explanation": "RADIUS는 네트워크 접근에서 AAA 기능을 지원한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q326",
    "partId": 5,
    "sectionId": 25,
    "sectionTitle": "네트워크 기반 프로그램 활용",
    "sourceSection": "SECTION 07 네트워크 기반 프로그램 활용",
    "question": "운영자가 호스트의 네트워크 인터페이스와 주소를 확인하려 한다. 전통적인 유닉스 명령은?",
    "options": [
      {
        "number": 1,
        "text": "ifconfig"
      },
      {
        "number": 2,
        "text": "ftp"
      },
      {
        "number": 3,
        "text": "nslookup"
      },
      {
        "number": 4,
        "text": "traceroute"
      }
    ],
    "answer": 1,
    "explanation": "ifconfig는 네트워크 인터페이스의 주소와 상태 등을 보여준다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q327",
    "partId": 5,
    "sectionId": 25,
    "sectionTitle": "네트워크 기반 프로그램 활용",
    "sourceSection": "SECTION 07 네트워크 기반 프로그램 활용",
    "question": "경로 진단 도구인 traceroute에 대한 옳은 설명은?",
    "options": [
      {
        "number": 1,
        "text": "응답하는 중간 홉을 파악할 수 있다."
      },
      {
        "number": 2,
        "text": "응답하지 않는 홉은 언제나 장애다."
      },
      {
        "number": 3,
        "text": "목적지의 파일 이름을 모두 출력한다."
      },
      {
        "number": 4,
        "text": "경로가 항상 대칭임을 입증한다."
      }
    ],
    "answer": 1,
    "explanation": "traceroute는 중간 홉의 응답을 이용해 경로를 추정한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q328",
    "partId": 5,
    "sectionId": 25,
    "sectionTitle": "네트워크 기반 프로그램 활용",
    "sourceSection": "SECTION 07 네트워크 기반 프로그램 활용",
    "question": "traceroute에서 중간 라우터가 TTL을 다 소모한 IPv4 패킷에 보내는 대표 ICMP 메시지는?",
    "options": [
      {
        "number": 1,
        "text": "Echo Reply"
      },
      {
        "number": 2,
        "text": "Redirect"
      },
      {
        "number": 3,
        "text": "Echo Request"
      },
      {
        "number": 4,
        "text": "Time Exceeded"
      }
    ],
    "answer": 4,
    "explanation": "TTL이 소진되면 라우터가 ICMP Time Exceeded로 알릴 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q329",
    "partId": 5,
    "sectionId": 25,
    "sectionTitle": "네트워크 기반 프로그램 활용",
    "sourceSection": "SECTION 07 네트워크 기반 프로그램 활용",
    "question": "목적지까지의 홉을 추정하는 도구와 로컬 연결 상태를 조회하는 도구를 순서대로 고른 것은?",
    "options": [
      {
        "number": 1,
        "text": "netstat·traceroute"
      },
      {
        "number": 2,
        "text": "traceroute·netstat"
      },
      {
        "number": 3,
        "text": "dig·traceroute"
      },
      {
        "number": 4,
        "text": "ipconfig·nslookup"
      }
    ],
    "answer": 2,
    "explanation": "traceroute는 중간 경로를, netstat는 로컬 연결이나 프로토콜 통계 등을 조회한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q330",
    "partId": 5,
    "sectionId": 25,
    "sectionTitle": "네트워크 기반 프로그램 활용",
    "sourceSection": "SECTION 07 네트워크 기반 프로그램 활용",
    "question": "일반적인 netstat 연결 목록에서 직접 확인할 수 없는 것은?",
    "options": [
      {
        "number": 1,
        "text": "원격 주소"
      },
      {
        "number": 2,
        "text": "HTTPS 본문의 평문"
      },
      {
        "number": 3,
        "text": "로컬 포트"
      },
      {
        "number": 4,
        "text": "TCP 연결 상태"
      }
    ],
    "answer": 2,
    "explanation": "netstat는 연결 관련 정보를 제공하며 애플리케이션 본문은 표시하지 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q331",
    "partId": 5,
    "sectionId": 25,
    "sectionTitle": "네트워크 기반 프로그램 활용",
    "sourceSection": "SECTION 07 네트워크 기반 프로그램 활용",
    "question": "netstat -s의 IP 기반 프로토콜 통계 목록과 가장 거리가 먼 것은?",
    "options": [
      {
        "number": 1,
        "text": "이더넷 MAC 주소 개별 목록"
      },
      {
        "number": 2,
        "text": "TCP"
      },
      {
        "number": 3,
        "text": "ICMP"
      },
      {
        "number": 4,
        "text": "UDP"
      }
    ],
    "answer": 1,
    "explanation": "netstat -s는 시스템의 프로토콜 통계를 보여준다. 개별 MAC 주소 표가 아니다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q332",
    "partId": 5,
    "sectionId": 25,
    "sectionTitle": "네트워크 기반 프로그램 활용",
    "sourceSection": "SECTION 07 네트워크 기반 프로그램 활용",
    "question": "netstat에서 특정 TCP 연결 상태가 ESTABLISHED로 보인다. 무슨 뜻인가?",
    "options": [
      {
        "number": 1,
        "text": "이미 닫힌 연결이다."
      },
      {
        "number": 2,
        "text": "접속 요청을 받기 위해 기다리는 중이다."
      },
      {
        "number": 3,
        "text": "TCP 연결이 설정된 상태다."
      },
      {
        "number": 4,
        "text": "UDP 브로드캐스트다."
      }
    ],
    "answer": 3,
    "explanation": "ESTABLISHED는 연결이 수립되어 데이터를 교환할 수 있는 상태다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q333",
    "partId": 5,
    "sectionId": 25,
    "sectionTitle": "네트워크 기반 프로그램 활용",
    "sourceSection": "SECTION 07 네트워크 기반 프로그램 활용",
    "question": "Windows에서 로컬 DNS 해석기 캐시를 비우는 명령은?",
    "options": [
      {
        "number": 1,
        "text": "ipconfig /flushdns"
      },
      {
        "number": 2,
        "text": "route print"
      },
      {
        "number": 3,
        "text": "ipconfig /displaydns"
      },
      {
        "number": 4,
        "text": "net share"
      }
    ],
    "answer": 1,
    "explanation": "/flushdns는 DNS 해석기 캐시를 지우며 /displaydns는 내용을 표시한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q334",
    "partId": 5,
    "sectionId": 25,
    "sectionTitle": "네트워크 기반 프로그램 활용",
    "sourceSection": "SECTION 07 네트워크 기반 프로그램 활용",
    "question": "승인된 스위치 환경에서 필요한 포트의 트래픽 사본을 분석기 포트로 보내는 기능은?",
    "options": [
      {
        "number": 1,
        "text": "DHCP 임대"
      },
      {
        "number": 2,
        "text": "NAT"
      },
      {
        "number": 3,
        "text": "포트 미러링"
      },
      {
        "number": 4,
        "text": "디스크 복제"
      }
    ],
    "answer": 3,
    "explanation": "포트 미러링은 패킷 분석용으로 지정 포트의 트래픽 사본을 제공한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q335",
    "partId": 5,
    "sectionId": 25,
    "sectionTitle": "네트워크 기반 프로그램 활용",
    "sourceSection": "SECTION 07 네트워크 기반 프로그램 활용",
    "question": "다음 중 DNS 질의 자체가 주 기능이 아닌 것은?",
    "options": [
      {
        "number": 1,
        "text": "nslookup"
      },
      {
        "number": 2,
        "text": "ifconfig"
      },
      {
        "number": 3,
        "text": "dig"
      },
      {
        "number": 4,
        "text": "host"
      }
    ],
    "answer": 2,
    "explanation": "ifconfig는 인터페이스를 확인하거나 설정하는 도구다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q336",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "시스템에 접속할 수 없게 만드는 공격이 있었다. 이 공격의 주된 영향을 받은 보안 속성은?",
    "options": [
      {
        "number": 1,
        "text": "기밀성"
      },
      {
        "number": 2,
        "text": "가용성"
      },
      {
        "number": 3,
        "text": "부인방지"
      },
      {
        "number": 4,
        "text": "익명성"
      }
    ],
    "answer": 2,
    "explanation": "서비스 거부는 정상 이용자의 접근을 방해하므로 가용성을 해친다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q337",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "경계 라우터가 외부에서 들어오는 패킷의 출발지가 자기 조직 내부 주소인지 확인한다. 이 검사의 목적은?",
    "options": [
      {
        "number": 1,
        "text": "파일 압축"
      },
      {
        "number": 2,
        "text": "출발지 IP 위조 차단"
      },
      {
        "number": 3,
        "text": "비밀번호 복구"
      },
      {
        "number": 4,
        "text": "DNS 캐시 삭제"
      }
    ],
    "answer": 2,
    "explanation": "경계의 출발지 주소 검증은 외부 패킷이 내부 주소를 사칭하는 경로를 줄인다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q338",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "스머프 유형을 다른 서비스 거부 유형과 구분하는 핵심은?",
    "options": [
      {
        "number": 1,
        "text": "로그 파일 압축"
      },
      {
        "number": 2,
        "text": "웹 글꼴 다운로드"
      },
      {
        "number": 3,
        "text": "ICMP 응답의 반사·증폭"
      },
      {
        "number": 4,
        "text": "디스크 포맷 변경"
      }
    ],
    "answer": 3,
    "explanation": "스머프는 여러 호스트가 보낸 ICMP 응답이 피해자에게 집중되는 반사·증폭 유형이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q339",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "피해자의 로그에 여러 제3자 호스트가 보낸 ICMP 응답이 집중됐다. 스머프 의심 분석에서 제3자 호스트의 역할은?",
    "options": [
      {
        "number": 1,
        "text": "인증서 발급자"
      },
      {
        "number": 2,
        "text": "라우팅 설정 관리자"
      },
      {
        "number": 3,
        "text": "저장소 복제자"
      },
      {
        "number": 4,
        "text": "반사 송신자"
      }
    ],
    "answer": 4,
    "explanation": "반사형 공격에서는 처음 요청을 처리한 제3자가 피해자에게 응답을 보내게 된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q340",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "사내망이 스머프 반사에 쓰이는 것을 막기 위해 경계 라우터에서 제한할 기능은?",
    "options": [
      {
        "number": 1,
        "text": "IP 지향성 브로드캐스트 전달"
      },
      {
        "number": 2,
        "text": "정상 유니캐스트 라우팅"
      },
      {
        "number": 3,
        "text": "DNS 캐시"
      },
      {
        "number": 4,
        "text": "TCP 연결 종료"
      }
    ],
    "answer": 1,
    "explanation": "외부에서 온 지향성 브로드캐스트를 전달하지 않으면 내부 호스트들이 집단으로 응답할 가능성을 줄인다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q341",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "방화벽이 출발지와 목적지의 주소 및 포트가 서로 같은 비정상 TCP 패킷을 기록했다. 전통적으로 연관되는 이름은?",
    "options": [
      {
        "number": 1,
        "text": "워터링홀"
      },
      {
        "number": 2,
        "text": "LAND"
      },
      {
        "number": 3,
        "text": "DNS 캐시 오염"
      },
      {
        "number": 4,
        "text": "Smurf"
      }
    ],
    "answer": 2,
    "explanation": "LAND는 출발지와 목적지의 주소·포트가 같은 비정상 패킷과 관련된 서비스 거부 유형이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q342",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "새 연결 요청은 급증했지만 연결 수립이 완료되지 않아 대기열이 가득 찼다. 우선 의심할 유형은?",
    "options": [
      {
        "number": 1,
        "text": "파일 변조"
      },
      {
        "number": 2,
        "text": "SYN 플러딩"
      },
      {
        "number": 3,
        "text": "ARP 캐시 오염"
      },
      {
        "number": 4,
        "text": "DNS 캐시 삭제"
      }
    ],
    "answer": 2,
    "explanation": "SYN 플러딩은 연결이 완료되기 전 서버의 대기 자원을 소모하게 할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q343",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "보안 장비가 비정상적으로 겹치는 IPv4 단편을 감지했다. 단편 재조립이 속한 OSI 계층은?",
    "options": [
      {
        "number": 1,
        "text": "3계층"
      },
      {
        "number": 2,
        "text": "4계층"
      },
      {
        "number": 3,
        "text": "7계층"
      },
      {
        "number": 4,
        "text": "2계층"
      }
    ],
    "answer": 1,
    "explanation": "IPv4의 단편화와 재조립은 네트워크 계층에 해당한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q344",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "IPv4 수신 장치가 비정상적으로 겹친 단편을 처리하다 장애를 일으키는 유형은?",
    "options": [
      {
        "number": 1,
        "text": "메일 위조"
      },
      {
        "number": 2,
        "text": "파일 무결성 검사"
      },
      {
        "number": 3,
        "text": "Teardrop"
      },
      {
        "number": 4,
        "text": "HTTP 플러딩"
      }
    ],
    "answer": 3,
    "explanation": "Teardrop은 IP 단편 재조립 문제와 관련된 서비스 거부 유형이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q345",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "전통적인 분류에서 둘 다 ICMP를 이용하는 서비스 거부 유형인 조합은?",
    "options": [
      {
        "number": 1,
        "text": "SYN 플러딩·UDP 플러딩"
      },
      {
        "number": 2,
        "text": "LAND·HTTP 플러딩"
      },
      {
        "number": 3,
        "text": "Smurf·Ping of Death"
      },
      {
        "number": 4,
        "text": "Teardrop·SYN 플러딩"
      }
    ],
    "answer": 3,
    "explanation": "Smurf는 ICMP 반사, Ping of Death는 비정상적으로 큰 ICMP 패킷의 처리 문제와 관련된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q346",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "방화벽과 목적지의 IPv4 겹친 단편 해석이 서로 다르면 검사 결과가 달라질 수 있다. 적절한 방어책은?",
    "options": [
      {
        "number": 1,
        "text": "비정상 단편을 거부하고 일관된 재조립 기준을 적용한다."
      },
      {
        "number": 2,
        "text": "경계 로그를 남기지 않는다."
      },
      {
        "number": 3,
        "text": "겹친 단편을 언제나 통과시킨다."
      },
      {
        "number": 4,
        "text": "페이로드에 관계없이 모든 단편을 신뢰한다."
      }
    ],
    "answer": 1,
    "explanation": "겹치는 단편의 모호함을 없애야 방화벽과 종단 장비가 다르게 해석하는 위험을 줄일 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q347",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "여러 호스트가 동시에 트래픽을 집중시키는 DDoS에서 핵심 목표와 가장 거리가 먼 것은?",
    "options": [
      {
        "number": 1,
        "text": "정상 사용자 요청 처리 지연"
      },
      {
        "number": 2,
        "text": "특정 계정에 숨은 접근 경로만 남기기"
      },
      {
        "number": 3,
        "text": "서비스와 회선 자원 고갈"
      },
      {
        "number": 4,
        "text": "서비스 접속 불능"
      }
    ],
    "answer": 2,
    "explanation": "DDoS의 주된 목표는 분산된 부하로 가용성을 저해하는 것이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q348",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "DDoS 징후를 확인할 때 평상시 대비 변화 판단에 가장 유용한 자료는?",
    "options": [
      {
        "number": 1,
        "text": "유입 트래픽과 동시 접속 수의 시계열"
      },
      {
        "number": 2,
        "text": "앱 아이콘의 색상"
      },
      {
        "number": 3,
        "text": "직원 명함 수"
      },
      {
        "number": 4,
        "text": "서버 방의 넓이"
      }
    ],
    "answer": 1,
    "explanation": "평상시 기준선과 현재 지표를 비교하면 급증 구간을 확인할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q349",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "DDoS 대응 절차에서 모니터링 중 뚜렷한 이상을 찾았다. 초동 조치를 조직적으로 진행하는 데 먼저 할 일은?",
    "options": [
      {
        "number": 1,
        "text": "관찰을 종료한다."
      },
      {
        "number": 2,
        "text": "보안 담당자에게 알리고 정해진 절차를 시작한다."
      },
      {
        "number": 3,
        "text": "상세 원인이 완전히 밝혀질 때까지 통보하지 않는다."
      },
      {
        "number": 4,
        "text": "로그를 지운다."
      }
    ],
    "answer": 2,
    "explanation": "이상 징후 통보로 담당자가 초동 조치와 상세 분석을 진행할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q350",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "감염 단말이 알려진 악성 도메인으로 나가지 않도록 조직 DNS에서 그 이름을 분석용 격리 서버로 돌린다. 이 방식은?",
    "options": [
      {
        "number": 1,
        "text": "디스크 미러링"
      },
      {
        "number": 2,
        "text": "DNS 싱크홀"
      },
      {
        "number": 3,
        "text": "시계 동기화"
      },
      {
        "number": 4,
        "text": "VLAN 태깅"
      }
    ],
    "answer": 2,
    "explanation": "DNS 싱크홀은 악성 도메인의 해석 결과를 통제해 연결을 차단하거나 관찰한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q351",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "분산 서비스 거부를 일반적인 단일 출발지 서비스 거부와 구분하는 핵심 조건은?",
    "options": [
      {
        "number": 1,
        "text": "반드시 DNS를 쓴다."
      },
      {
        "number": 2,
        "text": "반드시 HTTP를 쓴다."
      },
      {
        "number": 3,
        "text": "네트워크 장비가 한 대뿐이다."
      },
      {
        "number": 4,
        "text": "여러 시스템에서 부하가 발생한다."
      }
    ],
    "answer": 4,
    "explanation": "분산 서비스 거부는 다수의 시스템이 동원된다는 점이 핵심이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q352",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "다음 중 애플리케이션 계층의 과부하와 직접 관련되는 서비스 거부 유형은?",
    "options": [
      {
        "number": 1,
        "text": "HTTP 요청 플러딩"
      },
      {
        "number": 2,
        "text": "링크 신호 방해"
      },
      {
        "number": 3,
        "text": "ICMP 반사"
      },
      {
        "number": 4,
        "text": "IP 단편 재조립 장애"
      }
    ],
    "answer": 1,
    "explanation": "HTTP는 애플리케이션 계층에 속한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q353",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "반사형 DDoS 대응에서 패킷의 출발지 위조를 줄이는 데 도움이 되는 조치는?",
    "options": [
      {
        "number": 1,
        "text": "응답 시스템을 무조건 더 많이 늘린다."
      },
      {
        "number": 2,
        "text": "네트워크 경계에서 출발지 주소를 검증한다."
      },
      {
        "number": 3,
        "text": "로그만 삭제한다."
      },
      {
        "number": 4,
        "text": "공개 재귀 질의를 모두 허용한다."
      }
    ],
    "answer": 2,
    "explanation": "경계의 출발지 검증은 위조 주소를 사용한 반사형 트래픽 발생 가능성을 줄인다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q354",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "네트워크 구성 파악과 달리 서비스 가용성 저해가 주된 목적이 되는 유형은?",
    "options": [
      {
        "number": 1,
        "text": "승인된 호스트 목록 파악"
      },
      {
        "number": 2,
        "text": "DNS 이름 확인"
      },
      {
        "number": 3,
        "text": "경로 진단"
      },
      {
        "number": 4,
        "text": "스머프"
      }
    ],
    "answer": 4,
    "explanation": "스머프의 목적은 ICMP 반사·증폭을 통한 서비스 거부다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q355",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "침입 탐지 로그의 연결 시도가 수립 완료 전에 반복해서 종료됐다. 정상 연결을 모두 수립하는 스캔과 구분되는 분류는?",
    "options": [
      {
        "number": 1,
        "text": "UDP 스캔"
      },
      {
        "number": 2,
        "text": "TCP 반개방 스캔"
      },
      {
        "number": 3,
        "text": "DNS 질의"
      },
      {
        "number": 4,
        "text": "TCP Connect 스캔"
      }
    ],
    "answer": 2,
    "explanation": "반개방 스캔은 TCP 연결 수립을 끝까지 완료하지 않는 유형이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q356",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "표준 TCP 연결을 완전히 수립하는 방식은?",
    "options": [
      {
        "number": 1,
        "text": "NULL 스캔"
      },
      {
        "number": 2,
        "text": "Xmas 스캔"
      },
      {
        "number": 3,
        "text": "TCP Connect 스캔"
      },
      {
        "number": 4,
        "text": "FIN 스캔"
      }
    ],
    "answer": 3,
    "explanation": "TCP Connect 스캔은 일반 연결 수립을 완료하는 방식이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q357",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "IPv4 호스트가 리스너가 없는 UDP 포트로 온 패킷에 오류를 회신한다면 대표 유형은?",
    "options": [
      {
        "number": 1,
        "text": "ICMP Redirect"
      },
      {
        "number": 2,
        "text": "ICMP Destination Unreachable의 Port Unreachable"
      },
      {
        "number": 3,
        "text": "ICMP Echo Reply"
      },
      {
        "number": 4,
        "text": "TCP SYN-ACK"
      }
    ],
    "answer": 2,
    "explanation": "수신 포트가 없으면 IPv4에서는 ICMP Port Unreachable로 알릴 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q358",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "승인된 보안 감사에서 포트 스캔 결과가 직접 알려주는 것은?",
    "options": [
      {
        "number": 1,
        "text": "애플리케이션의 버그 유무를 확정한다."
      },
      {
        "number": 2,
        "text": "서버 내부 모든 계정의 비밀번호를 확인한다."
      },
      {
        "number": 3,
        "text": "응답을 바탕으로 접근 가능한 TCP·UDP 서비스 포트를 추정한다."
      },
      {
        "number": 4,
        "text": "서버 디스크 내용을 자동 복구한다."
      }
    ],
    "answer": 3,
    "explanation": "포트 스캔으로 서비스 접근 가능성을 추정할 수 있으나 응답은 방화벽 등의 영향을 받는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q359",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "포트 접근 시도 중 연결을 끝까지 완료하는 유형을 구분하고 있다. 어떤 방식인가?",
    "options": [
      {
        "number": 1,
        "text": "반개방 스캔"
      },
      {
        "number": 2,
        "text": "TCP Connect 스캔"
      },
      {
        "number": 3,
        "text": "FIN 스캔"
      },
      {
        "number": 4,
        "text": "NULL 스캔"
      }
    ],
    "answer": 2,
    "explanation": "TCP Connect 방식은 일반적인 연결 수립 절차를 완료한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q360",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "관리자가 승인된 포트 진단 결과에서 무응답만 확인했다. 근거에 맞는 해석은?",
    "options": [
      {
        "number": 1,
        "text": "필터링이나 패킷 손실도 있을 수 있어 추가 확인이 필요하다."
      },
      {
        "number": 2,
        "text": "서비스 이름을 확정했다."
      },
      {
        "number": 3,
        "text": "항상 열림이다."
      },
      {
        "number": 4,
        "text": "항상 닫힘이다."
      }
    ],
    "answer": 1,
    "explanation": "무응답은 여러 원인으로 발생할 수 있어 단독으로 포트 상태를 확정하기 어렵다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q361",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "사내 네트워크에서 누군가 패킷을 수집하더라도 애플리케이션의 민감한 내용이 드러나지 않게 하는 대책은?",
    "options": [
      {
        "number": 1,
        "text": "포트 번호만 바꾼다."
      },
      {
        "number": 2,
        "text": "DNS 캐시를 지운다."
      },
      {
        "number": 3,
        "text": "상대 검증을 포함한 암호화 통신을 사용한다."
      },
      {
        "number": 4,
        "text": "패킷 수를 늘린다."
      }
    ],
    "answer": 3,
    "explanation": "TLS처럼 올바르게 구성한 암호화 통신은 패킷에서 내용이 노출되는 위험을 줄인다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q362",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "동일 LAN의 여러 단말에서 기본 게이트웨이 IP가 갑자기 예상과 다른 MAC으로 해석된다. 우선 확인할 위협은?",
    "options": [
      {
        "number": 1,
        "text": "인증서 만료"
      },
      {
        "number": 2,
        "text": "디스크 오류"
      },
      {
        "number": 3,
        "text": "HTTP 응답 지연"
      },
      {
        "number": 4,
        "text": "ARP 스푸핑"
      }
    ],
    "answer": 4,
    "explanation": "비정상적인 IP·MAC 매핑 변경은 ARP 스푸핑의 징후일 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q363",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "스니핑에 관한 설명 중 맞는 것은?",
    "options": [
      {
        "number": 1,
        "text": "암호화하면 패킷의 존재도 반드시 숨겨진다."
      },
      {
        "number": 2,
        "text": "스니핑은 전송 데이터를 관찰하며 내용 보호에는 암호화가 도움이 된다."
      },
      {
        "number": 3,
        "text": "트래픽 관찰에는 네트워크가 필요 없다."
      },
      {
        "number": 4,
        "text": "스니핑은 항상 파일을 바꾼다."
      }
    ],
    "answer": 2,
    "explanation": "스니핑은 트래픽 관찰에 해당한다. 암호화는 내용 노출을 줄여도 모든 메타데이터를 숨기지는 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q364",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "ARP 스푸핑 영향으로 이더넷 프레임이 원래의 게이트웨이 대신 다른 장치로 전달됐다. 변조된 매핑은?",
    "options": [
      {
        "number": 1,
        "text": "파일과 소유자"
      },
      {
        "number": 2,
        "text": "도메인과 인증서"
      },
      {
        "number": 3,
        "text": "IPv4 주소와 MAC 주소"
      },
      {
        "number": 4,
        "text": "프로세스와 포트"
      }
    ],
    "answer": 3,
    "explanation": "ARP 스푸핑은 링크의 IPv4 주소와 MAC 주소 대응을 속이는 유형이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q365",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "변화하지 않는 중요 게이트웨이 하나의 IPv4·MAC 대응을 단말에서 보호하려 한다. 가능한 관리 조치는?",
    "options": [
      {
        "number": 1,
        "text": "임의 주소를 매번 수락한다."
      },
      {
        "number": 2,
        "text": "DNS TTL을 늘린다."
      },
      {
        "number": 3,
        "text": "정확한 게이트웨이 MAC을 확인하고 정적 ARP 항목을 적용한다."
      },
      {
        "number": 4,
        "text": "브라우저 쿠키를 보관한다."
      }
    ],
    "answer": 3,
    "explanation": "정적 항목은 해당 주소의 동적 학습을 제한한다. 변경 시 관리자가 갱신해야 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q366",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "IP만으로 로그인 없이 다른 시스템을 신뢰하는 구성이 발견됐다. 스푸핑에 대한 보호책은?",
    "options": [
      {
        "number": 1,
        "text": "주소만으로 신뢰하지 말고 검증 가능한 인증을 요구한다."
      },
      {
        "number": 2,
        "text": "보호용 필터를 제거한다."
      },
      {
        "number": 3,
        "text": "비밀번호를 로그에 남긴다."
      },
      {
        "number": 4,
        "text": "모든 주소를 공용 신뢰 목록에 넣는다."
      }
    ],
    "answer": 1,
    "explanation": "출발지 IP는 인증된 사용자 신원을 보장하지 않으므로 별도 인증이 필요하다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q367",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "IP 스푸핑의 뜻에 해당하는 것은?",
    "options": [
      {
        "number": 1,
        "text": "이름 해석 캐시를 비운다."
      },
      {
        "number": 2,
        "text": "서버 시각을 맞춘다."
      },
      {
        "number": 3,
        "text": "패킷이 실제와 다른 출발지 IP에서 온 것처럼 보이게 한다."
      },
      {
        "number": 4,
        "text": "디스크 파일을 압축한다."
      }
    ],
    "answer": 3,
    "explanation": "IP 스푸핑은 출발지 IP 주소를 위조하는 행위다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q368",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "TCP/IP 링크 계층과 가장 관련이 깊은 스푸핑 유형은?",
    "options": [
      {
        "number": 1,
        "text": "HTTP 쿠키 위조"
      },
      {
        "number": 2,
        "text": "DNS 응답 위조"
      },
      {
        "number": 3,
        "text": "ARP 스푸핑"
      },
      {
        "number": 4,
        "text": "SMTP 발신자 위조"
      }
    ],
    "answer": 3,
    "explanation": "ARP는 로컬 링크의 IPv4 주소와 링크 계층 주소를 연결한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q369",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "신뢰할 수 있는 로컬 hosts 파일이 특정 이름을 올바른 IP로 고정하고 이 항목이 DNS보다 우선한다. 직접 피할 수 있는 문제는?",
    "options": [
      {
        "number": 1,
        "text": "TLS 인증서 만료"
      },
      {
        "number": 2,
        "text": "그 이름을 잘못된 IP로 보내는 위조 DNS 응답의 영향"
      },
      {
        "number": 3,
        "text": "같은 링크에서의 ARP 위조"
      },
      {
        "number": 4,
        "text": "PC의 물리적 고장"
      }
    ],
    "answer": 2,
    "explanation": "로컬 매핑이 우선하면 그 이름의 DNS 응답을 사용하지 않는다. 관리자가 주소를 유지해야 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q370",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "TCP 연결 탈취가 의심되는 사고 조사에서 분석 도구의 주된 용도는?",
    "options": [
      {
        "number": 1,
        "text": "공격 도구를 운영 서버에 설치한다."
      },
      {
        "number": 2,
        "text": "접속 기록을 삭제한다."
      },
      {
        "number": 3,
        "text": "승인된 환경에서 TCP 흐름과 예상하지 못한 상태 변화를 확인한다."
      },
      {
        "number": 4,
        "text": "의심 계정의 전체 권한을 즉시 푼다."
      }
    ],
    "answer": 3,
    "explanation": "패킷과 종단 로그를 비교하면 정상 흐름과 다른 증상을 확인하는 데 도움이 된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q371",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "세션 하이재킹의 피해 상황을 설명한 것은?",
    "options": [
      {
        "number": 1,
        "text": "다른 주체가 이미 수립된 세션을 차지해 사용자의 권한으로 행동한다."
      },
      {
        "number": 2,
        "text": "백업에서 자료를 복원한다."
      },
      {
        "number": 3,
        "text": "공개 사이트에서 파일을 읽는다."
      },
      {
        "number": 4,
        "text": "정상 사용자가 비밀번호를 바꾼다."
      }
    ],
    "answer": 1,
    "explanation": "세션 하이재킹은 유효한 세션을 탈취하거나 가로채는 행위다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q372",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "연결 양쪽에서 순서번호 흐름이 어긋나고 비정상 ACK 반복이 관찰됐다. 무엇을 조사할 만한가?",
    "options": [
      {
        "number": 1,
        "text": "계정 암호의 단순 만료"
      },
      {
        "number": 2,
        "text": "파일시스템 용량 문제"
      },
      {
        "number": 3,
        "text": "DNS 서버 재시작"
      },
      {
        "number": 4,
        "text": "TCP 세션 간섭 또는 탈취 가능성"
      }
    ],
    "answer": 4,
    "explanation": "흐름 불일치는 세션 간섭의 단서가 될 수 있다. 정상 네트워크 오류도 함께 확인해야 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q373",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "세션 탈취 의심 사고를 확인했다. 피해 확산을 줄이는 초기 대응으로 적절한 것은?",
    "options": [
      {
        "number": 1,
        "text": "의심 단말에 세션을 더 열어 둔다."
      },
      {
        "number": 2,
        "text": "모든 로그를 먼저 삭제한다."
      },
      {
        "number": 3,
        "text": "영향받은 세션을 종료·취소하고 증거를 보존한다."
      },
      {
        "number": 4,
        "text": "기존 세션을 계속 신뢰한다."
      }
    ],
    "answer": 3,
    "explanation": "탈취된 세션을 무효화해 사용을 막고, 확인에 필요한 로그와 증거를 보존한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q374",
    "partId": 5,
    "sectionId": 26,
    "sectionTitle": "네트워크 기반 공격의 이해",
    "sourceSection": "SECTION 08 네트워크 기반 공격의 이해",
    "question": "네트워크 통신 공격 유형과 애플리케이션 코드 결함을 구분한다. 코드 결함에 해당하는 것은?",
    "options": [
      {
        "number": 1,
        "text": "패킷 도청"
      },
      {
        "number": 2,
        "text": "ARP 스푸핑"
      },
      {
        "number": 3,
        "text": "네트워크 플러딩"
      },
      {
        "number": 4,
        "text": "포맷 문자열 취약점"
      }
    ],
    "answer": 4,
    "explanation": "포맷 문자열 취약점은 프로그램이 외부 입력을 포맷으로 해석하는 문제에서 비롯된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q375",
    "partId": 5,
    "sectionId": 27,
    "sectionTitle": "IDS/IPS",
    "sourceSection": "SECTION 09 IDS/IPS",
    "question": "서버 한 대에서 시스템 호출이나 중요 파일 변경을 감시한다. 어떤 유형인가?",
    "options": [
      {
        "number": 1,
        "text": "라우터"
      },
      {
        "number": 2,
        "text": "네트워크 트래픽 전용 NIDS"
      },
      {
        "number": 3,
        "text": "호스트 기반 IDS"
      },
      {
        "number": 4,
        "text": "DNS 리졸버"
      }
    ],
    "answer": 3,
    "explanation": "HIDS는 호스트 내부의 이벤트와 상태를 관찰한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q376",
    "partId": 5,
    "sectionId": 27,
    "sectionTitle": "IDS/IPS",
    "sourceSection": "SECTION 09 IDS/IPS",
    "question": "암호화된 트래픽을 복호화하는 지점에 접근할 수 없다. 서버가 처리한 데이터의 이상을 관찰하기에 가장 적합한 것은?",
    "options": [
      {
        "number": 1,
        "text": "MAC 주소 목록만 저장"
      },
      {
        "number": 2,
        "text": "인터넷 경로 출력"
      },
      {
        "number": 3,
        "text": "외부 스위치에서 암호문만 수집"
      },
      {
        "number": 4,
        "text": "서버 자체의 HIDS와 애플리케이션 로그 확인"
      }
    ],
    "answer": 4,
    "explanation": "호스트 내부에서 애플리케이션이 처리한 데이터나 실행 이벤트를 확인할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q377",
    "partId": 5,
    "sectionId": 27,
    "sectionTitle": "IDS/IPS",
    "sourceSection": "SECTION 09 IDS/IPS",
    "question": "공급업체가 결함을 알거나 패치를 제공하기 전에 그 결함의 악용이 관찰됐다. 이에 해당하는 것은?",
    "options": [
      {
        "number": 1,
        "text": "정기 백업"
      },
      {
        "number": 2,
        "text": "예정된 업데이트"
      },
      {
        "number": 3,
        "text": "정상 코드 서명"
      },
      {
        "number": 4,
        "text": "제로데이 공격"
      }
    ],
    "answer": 4,
    "explanation": "알려지지 않았거나 대응 수단이 준비되기 전의 취약점 악용을 제로데이 공격이라 부른다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q378",
    "partId": 5,
    "sectionId": 27,
    "sectionTitle": "IDS/IPS",
    "sourceSection": "SECTION 09 IDS/IPS",
    "question": "IDS가 미리 등록된 공격 서명만 검사할 때 주된 한계는?",
    "options": [
      {
        "number": 1,
        "text": "기존 서명과 일치하지 않는 새로운 유형을 놓칠 수 있다."
      },
      {
        "number": 2,
        "text": "항상 모든 정상 요청을 막는다."
      },
      {
        "number": 3,
        "text": "알려진 패턴을 절대 검출하지 못한다."
      },
      {
        "number": 4,
        "text": "로그를 저장할 수 없다."
      }
    ],
    "answer": 1,
    "explanation": "오용 탐지는 알려진 패턴을 잘 검출하지만 등록되지 않은 유형에는 한계가 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q379",
    "partId": 5,
    "sectionId": 27,
    "sectionTitle": "IDS/IPS",
    "sourceSection": "SECTION 09 IDS/IPS",
    "question": "보안 전문가가 정의한 규칙과 관찰 결과를 비교해 공격 여부를 추론하는 전통적 IDS 방식은?",
    "options": [
      {
        "number": 1,
        "text": "지식 기반 오용 탐지"
      },
      {
        "number": 2,
        "text": "포트 라우팅"
      },
      {
        "number": 3,
        "text": "대칭키 암호화"
      },
      {
        "number": 4,
        "text": "시간 동기화"
      }
    ],
    "answer": 1,
    "explanation": "전문가 시스템 방식은 알려진 공격 지식과 규칙을 활용한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q380",
    "partId": 5,
    "sectionId": 27,
    "sectionTitle": "IDS/IPS",
    "sourceSection": "SECTION 09 IDS/IPS",
    "question": "IDS가 요청에서 알려진 악성 패턴과 일치하는 부분을 찾아 경보를 냈다. 어떤 탐지 방식인가?",
    "options": [
      {
        "number": 1,
        "text": "무손실 압축"
      },
      {
        "number": 2,
        "text": "정적 라우팅"
      },
      {
        "number": 3,
        "text": "콜드 백업"
      },
      {
        "number": 4,
        "text": "서명 기반 오용 탐지"
      }
    ],
    "answer": 4,
    "explanation": "서명 기반 오용 탐지는 미리 정의된 공격 패턴과 데이터를 비교한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q381",
    "partId": 5,
    "sectionId": 27,
    "sectionTitle": "IDS/IPS",
    "sourceSection": "SECTION 09 IDS/IPS",
    "question": "팀이 오용 탐지 방식의 장점과 운영 요구를 검토한다. 옳은 설명은?",
    "options": [
      {
        "number": 1,
        "text": "정상 패턴을 직접 학습해야만 동작한다."
      },
      {
        "number": 2,
        "text": "알려진 패턴의 식별에 유용하며 서명 갱신이 필요하다."
      },
      {
        "number": 3,
        "text": "미등록 공격을 항상 검출한다."
      },
      {
        "number": 4,
        "text": "서명을 한 번 만들면 영구적으로 갱신할 필요가 없다."
      }
    ],
    "answer": 2,
    "explanation": "새로 드러난 공격 패턴까지 탐지하려면 서명을 지속적으로 관리해야 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q382",
    "partId": 5,
    "sectionId": 27,
    "sectionTitle": "IDS/IPS",
    "sourceSection": "SECTION 09 IDS/IPS",
    "question": "다음 중 알려진 공격 지식을 맞추는 것보다 평상시 행동의 기준선을 이용하는 기법은?",
    "options": [
      {
        "number": 1,
        "text": "전문가가 정한 오용 규칙 적용"
      },
      {
        "number": 2,
        "text": "알려진 공격 상태 전이 검사"
      },
      {
        "number": 3,
        "text": "공격 서명 일치 검사"
      },
      {
        "number": 4,
        "text": "통계 기반 이상 탐지"
      }
    ],
    "answer": 4,
    "explanation": "통계 기반 이상 탐지는 정상 범위를 벗어난 활동을 식별한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q383",
    "partId": 5,
    "sectionId": 27,
    "sectionTitle": "IDS/IPS",
    "sourceSection": "SECTION 09 IDS/IPS",
    "question": "시험 환경에서 침입이 실제로 발생했는데 IDS가 아무 경보도 내지 않았다. 어떤 판정 오류인가?",
    "options": [
      {
        "number": 1,
        "text": "참양성"
      },
      {
        "number": 2,
        "text": "참음성"
      },
      {
        "number": 3,
        "text": "거짓양성(오탐)"
      },
      {
        "number": 4,
        "text": "거짓음성(미탐)"
      }
    ],
    "answer": 4,
    "explanation": "거짓음성은 탐지 대상이 실제로 존재하지만 시스템이 이를 놓친 경우다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q384",
    "partId": 5,
    "sectionId": 27,
    "sectionTitle": "IDS/IPS",
    "sourceSection": "SECTION 09 IDS/IPS",
    "question": "네트워크의 잠재 침입을 관찰해 보안 경보를 보내는 기능이 주된 시스템은?",
    "options": [
      {
        "number": 1,
        "text": "NTP"
      },
      {
        "number": 2,
        "text": "NAT"
      },
      {
        "number": 3,
        "text": "IDS"
      },
      {
        "number": 4,
        "text": "DHCP"
      }
    ],
    "answer": 3,
    "explanation": "IDS는 침입 징후를 탐지하고 알림이나 분석 자료를 제공한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q385",
    "partId": 5,
    "sectionId": 27,
    "sectionTitle": "IDS/IPS",
    "sourceSection": "SECTION 09 IDS/IPS",
    "question": "IDS의 오용 탐지에 해당하지 않는 접근은?",
    "options": [
      {
        "number": 1,
        "text": "알려진 악성 바이트 서명과 비교"
      },
      {
        "number": 2,
        "text": "직원별 정상 접속 시각 모델에서 큰 이탈을 찾아 경보"
      },
      {
        "number": 3,
        "text": "알려진 공격의 상태 전이와 비교"
      },
      {
        "number": 4,
        "text": "정의된 공격 규칙과 비교"
      }
    ],
    "answer": 2,
    "explanation": "정상 행동에서 벗어난 정도를 확인하는 방식은 이상 탐지다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q386",
    "partId": 5,
    "sectionId": 27,
    "sectionTitle": "IDS/IPS",
    "sourceSection": "SECTION 09 IDS/IPS",
    "question": "금융 거래에서 평소와 다른 사용 위치와 결제 패턴을 찾는 FDS의 주된 통제 유형은?",
    "options": [
      {
        "number": 1,
        "text": "복구 통제"
      },
      {
        "number": 2,
        "text": "물리 통제"
      },
      {
        "number": 3,
        "text": "탐지 통제"
      },
      {
        "number": 4,
        "text": "계정 삭제"
      }
    ],
    "answer": 3,
    "explanation": "FDS는 정상과 다른 거래를 식별하는 데 초점을 두므로 주된 기능은 탐지다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q387",
    "partId": 5,
    "sectionId": 27,
    "sectionTitle": "IDS/IPS",
    "sourceSection": "SECTION 09 IDS/IPS",
    "question": "금융 서비스에 규칙에서 예상하지 못한 데이터가 들어왔다. 이를 안전하게 다루는 통제는?",
    "options": [
      {
        "number": 1,
        "text": "검증 기록을 지운다."
      },
      {
        "number": 2,
        "text": "정상 거래처럼 자동 집계한다."
      },
      {
        "number": 3,
        "text": "예외로 분리하고 정해진 검토 절차에 넘긴다."
      },
      {
        "number": 4,
        "text": "검증 없이 승인한다."
      }
    ],
    "answer": 3,
    "explanation": "예외 처리는 사전 규칙에 들어맞지 않는 데이터를 따로 처리하도록 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q388",
    "partId": 5,
    "sectionId": 27,
    "sectionTitle": "IDS/IPS",
    "sourceSection": "SECTION 09 IDS/IPS",
    "question": "EDR을 설치한 목적에 가장 잘 맞는 기능은?",
    "options": [
      {
        "number": 1,
        "text": "도메인 이름을 주소로 해석"
      },
      {
        "number": 2,
        "text": "단말에서 위협 활동을 탐지하고 해당 장비를 격리"
      },
      {
        "number": 3,
        "text": "모든 백업 디스크의 물리 포맷"
      },
      {
        "number": 4,
        "text": "모든 사내 라우터의 경로 계산"
      }
    ],
    "answer": 2,
    "explanation": "EDR은 단말에서 일어난 활동을 탐지·조사하고 필요할 때 격리 등 대응을 돕는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q389",
    "partId": 5,
    "sectionId": 27,
    "sectionTitle": "IDS/IPS",
    "sourceSection": "SECTION 09 IDS/IPS",
    "question": "침입 탐지의 결과에 대한 올바른 판단은?",
    "options": [
      {
        "number": 1,
        "text": "한 번 경보가 찍히면 침해가 항상 확정된다."
      },
      {
        "number": 2,
        "text": "경보가 없으면 모든 위협이 없다고 확정한다."
      },
      {
        "number": 3,
        "text": "CERT는 침입을 수행하는 집단만을 뜻한다."
      },
      {
        "number": 4,
        "text": "경보가 정상 활동에 대해 발생하는 오탐도 있으므로 조사한다."
      }
    ],
    "answer": 4,
    "explanation": "침입 탐지 결과에는 오탐·미탐이 있을 수 있어 관련 증거를 확인한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q390",
    "partId": 5,
    "sectionId": 27,
    "sectionTitle": "IDS/IPS",
    "sourceSection": "SECTION 09 IDS/IPS",
    "question": "네트워크 패킷을 분석하고 규칙에 맞는 이벤트를 알리는 공개 도구는?",
    "options": [
      {
        "number": 1,
        "text": "Snort"
      },
      {
        "number": 2,
        "text": "chmod"
      },
      {
        "number": 3,
        "text": "cron"
      },
      {
        "number": 4,
        "text": "mount"
      }
    ],
    "answer": 1,
    "explanation": "Snort는 규칙 기반 네트워크 침입 탐지·방지 도구다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q391",
    "partId": 5,
    "sectionId": 27,
    "sectionTitle": "IDS/IPS",
    "sourceSection": "SECTION 09 IDS/IPS",
    "question": "Snort 규칙에서 페이로드의 특정 문자열을 비교하는 옵션은?",
    "options": [
      {
        "number": 1,
        "text": "content"
      },
      {
        "number": 2,
        "text": "sid"
      },
      {
        "number": 3,
        "text": "msg"
      },
      {
        "number": 4,
        "text": "rev"
      }
    ],
    "answer": 1,
    "explanation": "content는 검사 대상 데이터에서 지정한 내용을 찾는다. sid와 rev 등은 규칙의 식별자나 버전을 나타낸다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q392",
    "partId": 5,
    "sectionId": 27,
    "sectionTitle": "IDS/IPS",
    "sourceSection": "SECTION 09 IDS/IPS",
    "question": "Snort 규칙에서 조건이 맞을 때 트래픽을 차단하는 대신 경보를 기록하려 한다. 어느 동작을 선택하는가?",
    "options": [
      {
        "number": 1,
        "text": "pass"
      },
      {
        "number": 2,
        "text": "drop"
      },
      {
        "number": 3,
        "text": "reject"
      },
      {
        "number": 4,
        "text": "alert"
      }
    ],
    "answer": 4,
    "explanation": "alert는 일치 이벤트에 대한 경보를 생성하는 동작이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q393",
    "partId": 5,
    "sectionId": 27,
    "sectionTitle": "IDS/IPS",
    "sourceSection": "SECTION 09 IDS/IPS",
    "question": "장치의 주요 역할을 바르게 연결한 것은?",
    "options": [
      {
        "number": 1,
        "text": "방화벽·키 발급 / IDS·복구 / IPS·로그인"
      },
      {
        "number": 2,
        "text": "방화벽·통신 정책 적용 / IDS·탐지·경보 / 인라인 IPS·탐지·차단"
      },
      {
        "number": 3,
        "text": "방화벽·파일 백업 / IDS·주소 임대 / IPS·이름 해석"
      },
      {
        "number": 4,
        "text": "방화벽·압축 / IDS·패치 / IPS·시계 동기화"
      }
    ],
    "answer": 2,
    "explanation": "방화벽은 정책에 따라 흐름을 허용·제한하고, IDS는 탐지하며, 인라인 IPS는 차단도 할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q394",
    "partId": 5,
    "sectionId": 28,
    "sectionTitle": "침입차단시스템(Firewall)",
    "sourceSection": "SECTION 10 침입차단시스템(Firewall)",
    "question": "다음 중 일반적인 네트워크 방화벽만으로 직접 수행하는 기능이 아닌 것은?",
    "options": [
      {
        "number": 1,
        "text": "손상된 사용자 파일을 백업에서 복구"
      },
      {
        "number": 2,
        "text": "정책에 따라 트래픽 허용"
      },
      {
        "number": 3,
        "text": "주소·포트 기준 필터링"
      },
      {
        "number": 4,
        "text": "차단 기록 남기기"
      }
    ],
    "answer": 1,
    "explanation": "파일 복구는 백업·복구 체계의 역할이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q395",
    "partId": 5,
    "sectionId": 28,
    "sectionTitle": "침입차단시스템(Firewall)",
    "sourceSection": "SECTION 10 침입차단시스템(Firewall)",
    "question": "내부망을 보호하는 경계 방화벽을 설계한다. 정책을 실효성 있게 적용하려면?",
    "options": [
      {
        "number": 1,
        "text": "장비의 관리 접근 권한을 제거하지 않고 모두에게 준다."
      },
      {
        "number": 2,
        "text": "보호 대상 트래픽이 정책 집행 지점을 통과하고 허가된 흐름만 지나가게 한다."
      },
      {
        "number": 3,
        "text": "모든 연결을 항상 허용한다."
      },
      {
        "number": 4,
        "text": "서로 다른 장비에서 우회 경로를 열어 둔다."
      }
    ],
    "answer": 2,
    "explanation": "검사 지점을 우회할 수 있으면 방화벽 정책을 강제할 수 없다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q396",
    "partId": 5,
    "sectionId": 28,
    "sectionTitle": "침입차단시스템(Firewall)",
    "sourceSection": "SECTION 10 침입차단시스템(Firewall)",
    "question": "복호화 기능이 없는 경계 방화벽에서 가장 판단하기 어려운 조건은?",
    "options": [
      {
        "number": 1,
        "text": "출발지와 목적지 주소가 같은지"
      },
      {
        "number": 2,
        "text": "TLS 안의 메일 본문에 특정 단어가 있는지"
      },
      {
        "number": 3,
        "text": "출발지 IPv4가 지정 대역인지"
      },
      {
        "number": 4,
        "text": "목적지 TCP 포트가 지정 값인지"
      }
    ],
    "answer": 2,
    "explanation": "암호화된 페이로드의 내용은 복호화 지점이 없으면 직접 판단할 수 없다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q397",
    "partId": 5,
    "sectionId": 28,
    "sectionTitle": "침입차단시스템(Firewall)",
    "sourceSection": "SECTION 10 침입차단시스템(Firewall)",
    "question": "NAT만 설정한 네트워크에 대한 판단으로 적절한 것은?",
    "options": [
      {
        "number": 1,
        "text": "애플리케이션 결함이 모두 수정된다."
      },
      {
        "number": 2,
        "text": "패킷이 자동으로 모두 암호화된다."
      },
      {
        "number": 3,
        "text": "서버를 운영해도 인증이 필요 없다."
      },
      {
        "number": 4,
        "text": "주소 변환과 접근 허용 정책은 별도로 검토해야 한다."
      }
    ],
    "answer": 4,
    "explanation": "NAT는 주소 매핑 기능이며 인증·암호화나 접근통제 정책 전체를 대체하지 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q398",
    "partId": 5,
    "sectionId": 28,
    "sectionTitle": "침입차단시스템(Firewall)",
    "sourceSection": "SECTION 10 침입차단시스템(Firewall)",
    "question": "인터넷에 노출되는 관문 역할 때문에 최소 서비스와 강화된 설정으로 특별히 보호하는 호스트는?",
    "options": [
      {
        "number": 1,
        "text": "백업 테이프"
      },
      {
        "number": 2,
        "text": "DHCP 클라이언트"
      },
      {
        "number": 3,
        "text": "일반 사용자 PC"
      },
      {
        "number": 4,
        "text": "배스천 호스트"
      }
    ],
    "answer": 4,
    "explanation": "배스천 호스트는 높은 노출도를 고려해 강화한 경계의 호스트다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q399",
    "partId": 5,
    "sectionId": 28,
    "sectionTitle": "침입차단시스템(Firewall)",
    "sourceSection": "SECTION 10 침입차단시스템(Firewall)",
    "question": "단순 패킷 필터 방식의 대표 장점은?",
    "options": [
      {
        "number": 1,
        "text": "모든 암호문을 복호화한다."
      },
      {
        "number": 2,
        "text": "주소와 포트 등 헤더를 기반으로 비교적 빠르게 처리한다."
      },
      {
        "number": 3,
        "text": "서버 운영체제에 패치를 설치한다."
      },
      {
        "number": 4,
        "text": "모든 애플리케이션 사용자를 인증한다."
      }
    ],
    "answer": 2,
    "explanation": "기본 패킷 필터는 헤더 중심으로 판정하므로 처리 부담이 상대적으로 작다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q400",
    "partId": 5,
    "sectionId": 28,
    "sectionTitle": "침입차단시스템(Firewall)",
    "sourceSection": "SECTION 10 침입차단시스템(Firewall)",
    "question": "위에서부터 첫 일치 규칙을 적용한다. 1번은 사내망의 TCP 443 허용, 2번은 나머지 트래픽 차단이다. 외부 주소에서 TCP 443으로 온 요청의 처리는?",
    "options": [
      {
        "number": 1,
        "text": "1번에서 허용"
      },
      {
        "number": 2,
        "text": "포트가 443이므로 무조건 허용"
      },
      {
        "number": 3,
        "text": "2번에서 차단"
      },
      {
        "number": 4,
        "text": "규칙과 무관하게 주소 변환"
      }
    ],
    "answer": 3,
    "explanation": "1번 규칙은 출발지가 사내망일 때만 적용된다. 외부 주소는 2번과 일치한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q401",
    "partId": 5,
    "sectionId": 28,
    "sectionTitle": "침입차단시스템(Firewall)",
    "sourceSection": "SECTION 10 침입차단시스템(Firewall)",
    "question": "처음 설치한 패킷 필터 방화벽의 능력을 설명한 것으로 옳은 것은?",
    "options": [
      {
        "number": 1,
        "text": "암호화된 URL 내용을 항상 읽는다."
      },
      {
        "number": 2,
        "text": "모든 사용자 파일을 자동 복구한다."
      },
      {
        "number": 3,
        "text": "정의한 정책으로 헤더 조건을 검사할 수 있다."
      },
      {
        "number": 4,
        "text": "운영체제 결함을 자동으로 모두 수정한다."
      }
    ],
    "answer": 3,
    "explanation": "패킷 필터는 정책에 따라 IP 주소와 포트 같은 헤더 조건을 검사한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q402",
    "partId": 5,
    "sectionId": 28,
    "sectionTitle": "침입차단시스템(Firewall)",
    "sourceSection": "SECTION 10 침입차단시스템(Firewall)",
    "question": "장비가 헤더 정보 외에도 가시화된 페이로드를 살펴 애플리케이션 유형을 분류한다. 이 기술은?",
    "options": [
      {
        "number": 1,
        "text": "일반 주소 변환"
      },
      {
        "number": 2,
        "text": "시간 동기화"
      },
      {
        "number": 3,
        "text": "포트 미러링"
      },
      {
        "number": 4,
        "text": "심층 패킷 검사(DPI)"
      }
    ],
    "answer": 4,
    "explanation": "DPI는 헤더를 넘어 페이로드까지 분석한다. 암호화되면 볼 수 있는 범위가 제한된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q403",
    "partId": 5,
    "sectionId": 28,
    "sectionTitle": "침입차단시스템(Firewall)",
    "sourceSection": "SECTION 10 침입차단시스템(Firewall)",
    "question": "외부망과 내부망 사이에 분리된 서브넷을 두고 외부 공개 서버를 그 안에 둔다. 해당 구축 구조는?",
    "options": [
      {
        "number": 1,
        "text": "루프백"
      },
      {
        "number": 2,
        "text": "스크린드 서브넷"
      },
      {
        "number": 3,
        "text": "브리징 없는 단일 단말"
      },
      {
        "number": 4,
        "text": "플랫 네트워크"
      }
    ],
    "answer": 2,
    "explanation": "스크린드 서브넷은 내부망 앞에 완충 서브넷을 둬 공개 서버와 내부망을 분리한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q404",
    "partId": 5,
    "sectionId": 28,
    "sectionTitle": "침입차단시스템(Firewall)",
    "sourceSection": "SECTION 10 침입차단시스템(Firewall)",
    "question": "방화벽 운영에서 적절한 설명은?",
    "options": [
      {
        "number": 1,
        "text": "접근 제어 규칙은 적용 범위와 사각지대를 함께 검토한다."
      },
      {
        "number": 2,
        "text": "공개 서버에는 방화벽 정책이 적용될 수 없다."
      },
      {
        "number": 3,
        "text": "허가 정책은 시스템 패치가 필요 없게 만든다."
      },
      {
        "number": 4,
        "text": "방화벽 하나로 내부의 모든 침해를 막는다."
      }
    ],
    "answer": 1,
    "explanation": "방화벽은 통과하는 트래픽에 정책을 적용한다. 범위 밖의 경로나 내부 위협에는 추가 통제가 필요하다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q405",
    "partId": 5,
    "sectionId": 28,
    "sectionTitle": "침입차단시스템(Firewall)",
    "sourceSection": "SECTION 10 침입차단시스템(Firewall)",
    "question": "다음 중 인터넷에 공개할 필요가 없으며 내부 보호 영역에 두는 것이 적절한 것은?",
    "options": [
      {
        "number": 1,
        "text": "외부 메일을 받는 게이트웨이"
      },
      {
        "number": 2,
        "text": "공개 권한 DNS 서버"
      },
      {
        "number": 3,
        "text": "민감한 결제 원본을 보관하는 내부 DB"
      },
      {
        "number": 4,
        "text": "공개 사이트의 웹 프런트엔드"
      }
    ],
    "answer": 3,
    "explanation": "민감한 내부 DB는 외부 접속을 허용할 필요가 없으므로 공개 서비스와 분리하는 편이 적절하다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q406",
    "partId": 5,
    "sectionId": 28,
    "sectionTitle": "침입차단시스템(Firewall)",
    "sourceSection": "SECTION 10 침입차단시스템(Firewall)",
    "question": "경계 로그에서 외부에서 들어온 패킷의 출발지와 목적지가 모두 보호 서버 자신의 주소라고 기록됐다. 적절한 조치는?",
    "options": [
      {
        "number": 1,
        "text": "내부 주소를 주장하므로 모두 신뢰한다."
      },
      {
        "number": 2,
        "text": "검증 없이 모두 통과시킨다."
      },
      {
        "number": 3,
        "text": "관리자 접속으로 우선 처리한다."
      },
      {
        "number": 4,
        "text": "비정상적 주소 조합으로 차단하고 기록을 검토한다."
      }
    ],
    "answer": 4,
    "explanation": "이런 패킷은 LAND 유형 등 주소 위조 징후일 수 있으므로 경계에서 거부할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q407",
    "partId": 5,
    "sectionId": 29,
    "sectionTitle": "VPN",
    "sourceSection": "SECTION 11 VPN",
    "question": "두 지사가 공용망을 쓰면서 사설망처럼 연결되도록 논리적 경로를 만들었다. 이에 해당하는 기술은?",
    "options": [
      {
        "number": 1,
        "text": "DNS 캐시"
      },
      {
        "number": 2,
        "text": "로컬 루프백"
      },
      {
        "number": 3,
        "text": "ARP"
      },
      {
        "number": 4,
        "text": "VPN"
      }
    ],
    "answer": 4,
    "explanation": "VPN은 공유 기반망에서 논리적으로 분리된 연결을 제공한다. 암호 보호 여부는 구현에 따른다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q408",
    "partId": 5,
    "sectionId": 29,
    "sectionTitle": "VPN",
    "sourceSection": "SECTION 11 VPN",
    "question": "통신 사업자가 MPLS 네트워크에서 이더넷 연결과 IP 라우팅 서비스를 가상망으로 제공한다. 어떤 의미인가?",
    "options": [
      {
        "number": 1,
        "text": "모든 트래픽은 자동으로 암호화된다."
      },
      {
        "number": 2,
        "text": "오직 물리 계층만 가상화한다."
      },
      {
        "number": 3,
        "text": "IP는 전송할 수 없다."
      },
      {
        "number": 4,
        "text": "MPLS 기반으로 L2 VPN과 L3 VPN 서비스를 구현할 수 있다."
      }
    ],
    "answer": 4,
    "explanation": "MPLS VPN은 L2와 L3 서비스를 구현할 수 있다. MPLS 자체가 암호화를 보장하지는 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q409",
    "partId": 5,
    "sectionId": 29,
    "sectionTitle": "VPN",
    "sourceSection": "SECTION 11 VPN",
    "question": "네트워크 터널에서 내부 패킷을 전달하는 핵심 방식은?",
    "options": [
      {
        "number": 1,
        "text": "내부 패킷을 외부 패킷 안에 캡슐화한다."
      },
      {
        "number": 2,
        "text": "사용자 계정만 전송한다."
      },
      {
        "number": 3,
        "text": "내부 데이터의 주소를 모두 삭제한다."
      },
      {
        "number": 4,
        "text": "메시지를 항상 압축부터 한다."
      }
    ],
    "answer": 1,
    "explanation": "터널은 내부 패킷을 외부 전송 형식의 페이로드로 캡슐화한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q410",
    "partId": 5,
    "sectionId": 29,
    "sectionTitle": "VPN",
    "sourceSection": "SECTION 11 VPN",
    "question": "VPN 터널이 연결됐다. 보호 범위를 확인하는 설명으로 맞는 것은?",
    "options": [
      {
        "number": 1,
        "text": "터널을 쓰면 모든 데이터 보관도 안전하다."
      },
      {
        "number": 2,
        "text": "로그인 권한은 항상 자동 부여된다."
      },
      {
        "number": 3,
        "text": "터널 밖의 모든 통신도 자동 암호화된다."
      },
      {
        "number": 4,
        "text": "터널에 들어가는 트래픽과 실제 적용되는 보호 설정을 확인해야 한다."
      }
    ],
    "answer": 4,
    "explanation": "어떤 트래픽을 넣는지와 보안 프로토콜 설정이 실제 보호 범위를 결정한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q411",
    "partId": 5,
    "sectionId": 29,
    "sectionTitle": "VPN",
    "sourceSection": "SECTION 11 VPN",
    "question": "다음 중 VPN 터널링에 쓰이는 프로토콜은?",
    "options": [
      {
        "number": 1,
        "text": "L2TP"
      },
      {
        "number": 2,
        "text": "NTP"
      },
      {
        "number": 3,
        "text": "DNS"
      },
      {
        "number": 4,
        "text": "SMTP"
      }
    ],
    "answer": 1,
    "explanation": "L2TP는 데이터링크 계층 트래픽을 터널링하며, 자체 암호화가 필요하면 별도 보호가 필요하다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q412",
    "partId": 5,
    "sectionId": 29,
    "sectionTitle": "VPN",
    "sourceSection": "SECTION 11 VPN",
    "question": "RADIUS가 매개할 수 있는 인증 방식 사례로 바르게 연결한 것은?",
    "options": [
      {
        "number": 1,
        "text": "RADIUS·EAP 교환 전달"
      },
      {
        "number": 2,
        "text": "RADIUS·HTTP 캐시"
      },
      {
        "number": 3,
        "text": "RADIUS·ARP"
      },
      {
        "number": 4,
        "text": "RADIUS·NTP"
      }
    ],
    "answer": 1,
    "explanation": "RADIUS는 네트워크 인증에서 EAP 메시지를 전달하는 데 쓰일 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q413",
    "partId": 5,
    "sectionId": 29,
    "sectionTitle": "VPN",
    "sourceSection": "SECTION 11 VPN",
    "question": "IPsec의 세 구성요소를 역할과 연결한다. (가) 인증 헤더, (나) 암호화 가능한 페이로드 보호, (다) 키 교환·보안 연관 협상. 순서대로 맞는 것은?",
    "options": [
      {
        "number": 1,
        "text": "ESP·IKE·AH"
      },
      {
        "number": 2,
        "text": "IKE·AH·ESP"
      },
      {
        "number": 3,
        "text": "AH·IKE·ESP"
      },
      {
        "number": 4,
        "text": "AH·ESP·IKE"
      }
    ],
    "answer": 4,
    "explanation": "AH는 인증 헤더, ESP는 페이로드 보안, IKE는 키와 보안 연관을 협상한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q414",
    "partId": 5,
    "sectionId": 29,
    "sectionTitle": "VPN",
    "sourceSection": "SECTION 11 VPN",
    "question": "IPsec에서 암호화를 설정해 페이로드의 기밀성을 제공하는 프로토콜은?",
    "options": [
      {
        "number": 1,
        "text": "IKE만"
      },
      {
        "number": 2,
        "text": "AH"
      },
      {
        "number": 3,
        "text": "ARP"
      },
      {
        "number": 4,
        "text": "ESP"
      }
    ],
    "answer": 4,
    "explanation": "ESP는 암호화를 적용해 페이로드 기밀성을 제공할 수 있다. AH는 암호화하지 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q415",
    "partId": 5,
    "sectionId": 29,
    "sectionTitle": "VPN",
    "sourceSection": "SECTION 11 VPN",
    "question": "다음 중 IPsec 전송 모드와 터널 모드의 차이를 옳게 설명한 것은?",
    "options": [
      {
        "number": 1,
        "text": "두 모드는 패킷 구조가 항상 같다."
      },
      {
        "number": 2,
        "text": "두 모드 모두 외부 IP 헤더를 반드시 새로 만든다."
      },
      {
        "number": 3,
        "text": "전송 모드는 원본 IP 주소를 모두 삭제한다."
      },
      {
        "number": 4,
        "text": "터널 모드는 원본 IP 패킷을 캡슐화하고 외부 IP 헤더를 추가할 수 있다."
      }
    ],
    "answer": 4,
    "explanation": "터널 모드는 전체 원본 IP 패킷을 감싸고, 전송 모드는 주로 원본 IP 헤더 뒤의 내용을 보호한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q416",
    "partId": 5,
    "sectionId": 29,
    "sectionTitle": "VPN",
    "sourceSection": "SECTION 11 VPN",
    "question": "웹 기반 TLS VPN에 대한 설명으로 옳은 것은?",
    "options": [
      {
        "number": 1,
        "text": "브라우저에서 모든 종류의 사내 자원을 무조건 사용할 수 있다."
      },
      {
        "number": 2,
        "text": "인터넷 연결이나 인증이 필요 없다."
      },
      {
        "number": 3,
        "text": "접근 가능한 서비스와 클라이언트 필요 여부는 제품과 설정에 따라 달라진다."
      },
      {
        "number": 4,
        "text": "기존 로그인 제어는 사용할 수 없다."
      }
    ],
    "answer": 3,
    "explanation": "웹 포털형과 별도 클라이언트를 사용하는 형태가 있으므로 보호 범위는 구성에 따라 달라진다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q417",
    "partId": 5,
    "sectionId": 29,
    "sectionTitle": "VPN",
    "sourceSection": "SECTION 11 VPN",
    "question": "IPsec AH 터널 모드의 개념적 패킷 순서는?",
    "options": [
      {
        "number": 1,
        "text": "외부 IP 헤더·AH·원본 IP 패킷"
      },
      {
        "number": 2,
        "text": "AH·원본 IP 패킷·외부 IP 헤더"
      },
      {
        "number": 3,
        "text": "원본 IP 헤더·외부 IP 헤더·AH"
      },
      {
        "number": 4,
        "text": "AH·외부 IP 헤더·원본 IP 패킷"
      }
    ],
    "answer": 1,
    "explanation": "AH 터널 모드는 새 IP 헤더 뒤에 AH를 두고, 이후에 캡슐화된 원본 IP 패킷이 온다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q418",
    "partId": 5,
    "sectionId": 30,
    "sectionTitle": "최신 네트워크 보안 동향",
    "sourceSection": "SECTION 12 최신 네트워크 보안기술",
    "question": "기업이 여러 보안 장비의 정책과 이벤트를 중앙에서 관리한다. 해당 범주는?",
    "options": [
      {
        "number": 1,
        "text": "개별 파일 암호화"
      },
      {
        "number": 2,
        "text": "네트워크 주소 임대"
      },
      {
        "number": 3,
        "text": "DNS 캐시"
      },
      {
        "number": 4,
        "text": "ESM"
      }
    ],
    "answer": 4,
    "explanation": "ESM은 여러 보안 요소의 관리와 모니터링을 중앙화한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q419",
    "partId": 5,
    "sectionId": 30,
    "sectionTitle": "최신 네트워크 보안 동향",
    "sourceSection": "SECTION 12 최신 네트워크 보안기술",
    "question": "방화벽, 침입 방지, 콘텐츠 필터 등 여러 보안 기능을 한 제품군에서 통합 제공하는 유형은?",
    "options": [
      {
        "number": 1,
        "text": "UTM"
      },
      {
        "number": 2,
        "text": "FTP"
      },
      {
        "number": 3,
        "text": "NTP"
      },
      {
        "number": 4,
        "text": "ARP"
      }
    ],
    "answer": 1,
    "explanation": "UTM은 네트워크 경계에서 여러 위협 관리 기능을 통합 제공한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q420",
    "partId": 5,
    "sectionId": 30,
    "sectionTitle": "최신 네트워크 보안 동향",
    "sourceSection": "SECTION 12 최신 네트워크 보안기술",
    "question": "내부망 접속 전에 단말의 인증이나 보안 상태를 확인하고 미준수 단말을 격리하는 기술은?",
    "options": [
      {
        "number": 1,
        "text": "NAT"
      },
      {
        "number": 2,
        "text": "NAC"
      },
      {
        "number": 3,
        "text": "NTP"
      },
      {
        "number": 4,
        "text": "RAID"
      }
    ],
    "answer": 2,
    "explanation": "NAC는 접속 주체의 신원과 단말 상태를 바탕으로 네트워크 접근을 통제한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q421",
    "partId": 5,
    "sectionId": 30,
    "sectionTitle": "최신 네트워크 보안 동향",
    "sourceSection": "SECTION 12 최신 네트워크 보안기술",
    "question": "보안팀이 여러 시스템의 로그를 한데 모아 사건을 상관분석하고 경보를 얻는다. 중심 시스템은?",
    "options": [
      {
        "number": 1,
        "text": "RIP"
      },
      {
        "number": 2,
        "text": "SIEM"
      },
      {
        "number": 3,
        "text": "IPsec"
      },
      {
        "number": 4,
        "text": "SMB"
      }
    ],
    "answer": 2,
    "explanation": "SIEM은 보안 이벤트를 수집하고 서로 연결해 분석한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q422",
    "partId": 5,
    "sectionId": 30,
    "sectionTitle": "최신 네트워크 보안 동향",
    "sourceSection": "SECTION 12 최신 네트워크 보안기술",
    "question": "중앙 패치 관리 솔루션의 적절한 운영 방식은?",
    "options": [
      {
        "number": 1,
        "text": "시험 그룹에서 확인한 뒤 단계적으로 배포하고 결과를 추적한다."
      },
      {
        "number": 2,
        "text": "단말에 설치되었는지 확인하지 않는다."
      },
      {
        "number": 3,
        "text": "실패한 설치를 기록하지 않는다."
      },
      {
        "number": 4,
        "text": "모든 업데이트를 검증 없이 바로 적용한다."
      }
    ],
    "answer": 1,
    "explanation": "시험 배포와 적용 상태 추적은 업데이트 실패의 영향을 줄이고 누락을 확인하게 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q423",
    "partId": 5,
    "sectionId": 30,
    "sectionTitle": "최신 네트워크 보안 동향",
    "sourceSection": "SECTION 12 최신 네트워크 보안기술",
    "question": "침해 경보를 받은 뒤 티켓을 만들고, 승인 절차와 대응 플레이북을 자동 실행하는 플랫폼은?",
    "options": [
      {
        "number": 1,
        "text": "SOAR"
      },
      {
        "number": 2,
        "text": "파일시스템"
      },
      {
        "number": 3,
        "text": "정적 라우팅 테이블"
      },
      {
        "number": 4,
        "text": "일반 DNS 해석기"
      }
    ],
    "answer": 1,
    "explanation": "SOAR는 여러 대응 도구를 연계하고 표준화된 대응 절차를 자동화한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q424",
    "partId": 6,
    "sectionId": 31,
    "sectionTitle": "FTP 보안",
    "sourceSection": "SECTION 01 FTP 보안",
    "question": "FTP 능동 모드와 수동 모드에서 데이터 연결을 먼저 여는 쪽은 각각?",
    "options": [
      {
        "number": 1,
        "text": "클라이언트·서버"
      },
      {
        "number": 2,
        "text": "둘 다 서버"
      },
      {
        "number": 3,
        "text": "둘 다 인증기관"
      },
      {
        "number": 4,
        "text": "서버·클라이언트"
      }
    ],
    "answer": 4,
    "explanation": "능동 모드는 서버가, 수동 모드는 클라이언트가 데이터 연결을 시작한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q425",
    "partId": 6,
    "sectionId": 31,
    "sectionTitle": "FTP 보안",
    "sourceSection": "SECTION 01 FTP 보안",
    "question": "수동 FTP 서버에 TCP 21만 허용하니 로그인은 되지만 파일 목록을 받지 못한다. 필요한 추가 허용 범위는?",
    "options": [
      {
        "number": 1,
        "text": "서버에 설정한 수동 데이터 포트 범위"
      },
      {
        "number": 2,
        "text": "TCP 25"
      },
      {
        "number": 3,
        "text": "클라이언트의 DNS 포트"
      },
      {
        "number": 4,
        "text": "모든 UDP 포트"
      }
    ],
    "answer": 1,
    "explanation": "제어 연결과 데이터 연결은 별개다. 서버의 수동 데이터 포트를 제한된 범위로 설정해 허용한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q426",
    "partId": 6,
    "sectionId": 31,
    "sectionTitle": "FTP 보안",
    "sourceSection": "SECTION 01 FTP 보안",
    "question": "FTP 클라이언트가 방화벽 뒤에 있고, 파일 전송용 연결도 클라이언트에서 시작하게 하려 한다. 어떤 모드인가?",
    "options": [
      {
        "number": 1,
        "text": "브로드캐스트"
      },
      {
        "number": 2,
        "text": "수동"
      },
      {
        "number": 3,
        "text": "멀티캐스트"
      },
      {
        "number": 4,
        "text": "능동"
      }
    ],
    "answer": 2,
    "explanation": "수동 모드에서 클라이언트는 서버가 고른 데이터 포트에 연결한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q427",
    "partId": 6,
    "sectionId": 31,
    "sectionTitle": "FTP 보안",
    "sourceSection": "SECTION 01 FTP 보안",
    "question": "TFTP의 설명으로 맞는 것은?",
    "options": [
      {
        "number": 1,
        "text": "UDP를 사용하며 자체 인증 기능은 없다."
      },
      {
        "number": 2,
        "text": "두 TCP 연결을 사용한다."
      },
      {
        "number": 3,
        "text": "SSH 위에서 동작한다."
      },
      {
        "number": 4,
        "text": "서버가 기본적으로 사용자 인증을 강제한다."
      }
    ],
    "answer": 1,
    "explanation": "TFTP는 간단한 UDP 기반 전송 방식이며 내장 사용자 인증이 없다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q428",
    "partId": 6,
    "sectionId": 31,
    "sectionTitle": "FTP 보안",
    "sourceSection": "SECTION 01 FTP 보안",
    "question": "부팅 이미지 배포 때문에 TFTP를 유지해야 한다. 적절한 운영은?",
    "options": [
      {
        "number": 1,
        "text": "격리된 관리망에서 필요한 단말과 파일에만 접근을 허용한다."
      },
      {
        "number": 2,
        "text": "민감한 데이터를 같은 경로에서 제공한다."
      },
      {
        "number": 3,
        "text": "인터넷에 전면 공개한다."
      },
      {
        "number": 4,
        "text": "모든 디렉터리에 쓰기를 허용한다."
      }
    ],
    "answer": 1,
    "explanation": "TFTP 자체 보호가 제한적이므로 서비스 범위와 파일 권한을 외부 통제로 제한한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q429",
    "partId": 6,
    "sectionId": 31,
    "sectionTitle": "FTP 보안",
    "sourceSection": "SECTION 01 FTP 보안",
    "question": "공개 자료를 배포하는 익명 FTP 디렉터리의 권한은?",
    "options": [
      {
        "number": 1,
        "text": "필요한 배포 파일만 읽도록 제한"
      },
      {
        "number": 2,
        "text": "업로드 파일 실행 권한 부여"
      },
      {
        "number": 3,
        "text": "익명 사용자의 수정·삭제 허용"
      },
      {
        "number": 4,
        "text": "운영체제 디렉터리 노출"
      }
    ],
    "answer": 1,
    "explanation": "공개 배포만 필요하면 익명 사용자에게 쓰기 권한을 줄 이유가 없다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q430",
    "partId": 6,
    "sectionId": 31,
    "sectionTitle": "FTP 보안",
    "sourceSection": "SECTION 01 FTP 보안",
    "question": "익명 FTP 사용자가 배포 자료를 덮어쓸 수 있었다. 원인을 직접 제거하는 조치는?",
    "options": [
      {
        "number": 1,
        "text": "익명 사용자에게 부여된 쓰기 권한을 제거한다."
      },
      {
        "number": 2,
        "text": "파일 확장자만 바꾼다."
      },
      {
        "number": 3,
        "text": "포트 번호만 바꾼다."
      },
      {
        "number": 4,
        "text": "로그를 끈다."
      }
    ],
    "answer": 1,
    "explanation": "쓰기 권한을 제한해야 비인증 사용자의 파일 변조를 막을 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q431",
    "partId": 6,
    "sectionId": 31,
    "sectionTitle": "FTP 보안",
    "sourceSection": "SECTION 01 FTP 보안",
    "question": "NFS로 공유하는 업무 디렉터리를 특정 서버만 사용한다. 적절한 조치는?",
    "options": [
      {
        "number": 1,
        "text": "사용하지 않는 공유도 유지한다."
      },
      {
        "number": 2,
        "text": "모든 원격 호스트에 내보낸다."
      },
      {
        "number": 3,
        "text": "인가된 클라이언트와 필요한 접근 범위로 내보내기를 제한한다."
      },
      {
        "number": 4,
        "text": "루트 접근을 전부 허용한다."
      }
    ],
    "answer": 3,
    "explanation": "NFS의 공유 대상과 권한을 필요한 범위로 좁혀 불필요한 노출을 줄인다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q432",
    "partId": 6,
    "sectionId": 31,
    "sectionTitle": "FTP 보안",
    "sourceSection": "SECTION 01 FTP 보안",
    "question": "FTP 서버에서 같은 계정에 대한 로그인 실패가 연달아 발생했다. 우선 검토할 위협은?",
    "options": [
      {
        "number": 1,
        "text": "파일 압축 오류"
      },
      {
        "number": 2,
        "text": "인증서 정책 갱신"
      },
      {
        "number": 3,
        "text": "DHCP 임대 만료"
      },
      {
        "number": 4,
        "text": "비밀번호 반복 추측"
      }
    ],
    "answer": 4,
    "explanation": "반복 로그인 실패는 비밀번호 추측의 징후일 수 있다. 운영 기록과 함께 확인한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q433",
    "partId": 6,
    "sectionId": 31,
    "sectionTitle": "FTP 보안",
    "sourceSection": "SECTION 01 FTP 보안",
    "question": "FTP 서버가 제어 연결의 상대와 무관한 호스트로 데이터 연결을 시도했다. 의심되는 유형은?",
    "options": [
      {
        "number": 1,
        "text": "IP 단편 시간 초과"
      },
      {
        "number": 2,
        "text": "DNS 캐시 문제"
      },
      {
        "number": 3,
        "text": "메일 전달 루프"
      },
      {
        "number": 4,
        "text": "FTP 바운스"
      }
    ],
    "answer": 4,
    "explanation": "FTP 바운스는 FTP 서버를 제3자에 대한 연결의 중계점으로 이용하는 유형이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q434",
    "partId": 6,
    "sectionId": 31,
    "sectionTitle": "FTP 보안",
    "sourceSection": "SECTION 01 FTP 보안",
    "question": "FTP 바운스 방어에서 적절한 정책은?",
    "options": [
      {
        "number": 1,
        "text": "모든 연결 기록을 삭제한다."
      },
      {
        "number": 2,
        "text": "익명 사용자에게 관리 권한을 부여한다."
      },
      {
        "number": 3,
        "text": "승인되지 않은 제3자 데이터 연결을 거부한다."
      },
      {
        "number": 4,
        "text": "임의의 데이터 연결 목적지를 모두 승인한다."
      }
    ],
    "answer": 3,
    "explanation": "데이터 연결의 상대를 검증하면 서버가 의도치 않은 중계점이 되는 것을 막을 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q435",
    "partId": 6,
    "sectionId": 31,
    "sectionTitle": "FTP 보안",
    "sourceSection": "SECTION 01 FTP 보안",
    "question": "SSH 기반으로 보호되는 파일 전송 서비스는?",
    "options": [
      {
        "number": 1,
        "text": "HTTP"
      },
      {
        "number": 2,
        "text": "TFTP"
      },
      {
        "number": 3,
        "text": "SFTP"
      },
      {
        "number": 4,
        "text": "FTP"
      }
    ],
    "answer": 3,
    "explanation": "SFTP는 SSH 기반이며 TLS를 사용하는 FTPS와 구별된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q436",
    "partId": 6,
    "sectionId": 31,
    "sectionTitle": "FTP 보안",
    "sourceSection": "SECTION 01 FTP 보안",
    "question": "기존 FTP의 로그인 정보와 파일 내용을 전송 중 보호하려면?",
    "options": [
      {
        "number": 1,
        "text": "파일 이름을 숨긴다."
      },
      {
        "number": 2,
        "text": "제어 로그만 켠다."
      },
      {
        "number": 3,
        "text": "기본 포트만 변경한다."
      },
      {
        "number": 4,
        "text": "적절히 구성한 SFTP나 FTPS로 전환한다."
      }
    ],
    "answer": 4,
    "explanation": "포트 변경만으로는 암호화되지 않는다. 보호 기능이 있는 전송 방식을 사용한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q437",
    "partId": 6,
    "sectionId": 31,
    "sectionTitle": "FTP 보안",
    "sourceSection": "SECTION 01 FTP 보안",
    "question": "업무에 FTP를 더 이상 쓰지 않는 서버의 조치는?",
    "options": [
      {
        "number": 1,
        "text": "외부 방화벽을 해제한다."
      },
      {
        "number": 2,
        "text": "서비스를 비활성화한다."
      },
      {
        "number": 3,
        "text": "익명 쓰기를 허용한다."
      },
      {
        "number": 4,
        "text": "모든 계정에 FTP 권한을 추가한다."
      }
    ],
    "answer": 2,
    "explanation": "사용하지 않는 서비스를 끄면 불필요한 접속 경로가 줄어든다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q438",
    "partId": 6,
    "sectionId": 31,
    "sectionTitle": "FTP 보안",
    "sourceSection": "SECTION 01 FTP 보안",
    "question": "파일 전송 계정의 활동을 추적하기 가장 어려운 운영 방식은?",
    "options": [
      {
        "number": 1,
        "text": "필요 경로만 허용"
      },
      {
        "number": 2,
        "text": "업로드·다운로드 로그 기록"
      },
      {
        "number": 3,
        "text": "직원 전원이 공용 계정과 암호를 사용"
      },
      {
        "number": 4,
        "text": "사용자별 개별 계정 유지"
      }
    ],
    "answer": 3,
    "explanation": "공용 계정은 어떤 개인이 작업했는지 구분하기 어렵게 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q439",
    "partId": 6,
    "sectionId": 31,
    "sectionTitle": "FTP 보안",
    "sourceSection": "SECTION 01 FTP 보안",
    "question": "FTP 클라이언트가 서버에 파일을 저장하도록 요청하는 명령은?",
    "options": [
      {
        "number": 1,
        "text": "RETR"
      },
      {
        "number": 2,
        "text": "STOR"
      },
      {
        "number": 3,
        "text": "RMD"
      },
      {
        "number": 4,
        "text": "CWD"
      }
    ],
    "answer": 2,
    "explanation": "STOR는 업로드에 사용한다. RETR는 서버의 파일을 가져올 때 사용한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q440",
    "partId": 6,
    "sectionId": 32,
    "sectionTitle": "이메일 보안",
    "sourceSection": "SECTION 02 이메일 보안",
    "question": "OpenPGP가 직접 제공하는 대표 기능이 아닌 것은?",
    "options": [
      {
        "number": 1,
        "text": "데이터 압축"
      },
      {
        "number": 2,
        "text": "메시지 암호화"
      },
      {
        "number": 3,
        "text": "사내 파일의 사용자별 접근 권한 배정"
      },
      {
        "number": 4,
        "text": "전자서명"
      }
    ],
    "answer": 3,
    "explanation": "OpenPGP는 메시지 보호를 지원한다. 공유 폴더의 권한 관리 기능은 별개다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q441",
    "partId": 6,
    "sectionId": 32,
    "sectionTitle": "이메일 보안",
    "sourceSection": "SECTION 02 이메일 보안",
    "question": "OpenPGP로 큰 파일을 암호화할 때 공개키 방식과 대칭키 방식의 일반적 역할은?",
    "options": [
      {
        "number": 1,
        "text": "송신자의 개인키를 수신자에게 제공한다."
      },
      {
        "number": 2,
        "text": "본문은 대칭키로 암호화하고 세션키를 수신자 공개키로 보호한다."
      },
      {
        "number": 3,
        "text": "본문은 공개키로만 암호화한다."
      },
      {
        "number": 4,
        "text": "본문과 세션키를 모두 평문 전송한다."
      }
    ],
    "answer": 2,
    "explanation": "혼합 방식은 본문의 처리 효율과 세션키 보호를 함께 얻는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q442",
    "partId": 6,
    "sectionId": 32,
    "sectionTitle": "이메일 보안",
    "sourceSection": "SECTION 02 이메일 보안",
    "question": "메일에 OpenPGP 서명만 붙였을 때 별도 조치가 필요한 효과는?",
    "options": [
      {
        "number": 1,
        "text": "신뢰하는 공개키로 서명 검증"
      },
      {
        "number": 2,
        "text": "서명과 메시지의 연결 검증"
      },
      {
        "number": 3,
        "text": "변경 여부 확인"
      },
      {
        "number": 4,
        "text": "본문 내용 숨기기"
      }
    ],
    "answer": 4,
    "explanation": "서명은 본문을 가리지 않는다. 기밀성을 원하면 암호화도 필요하다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q443",
    "partId": 6,
    "sectionId": 32,
    "sectionTitle": "이메일 보안",
    "sourceSection": "SECTION 02 이메일 보안",
    "question": "OpenPGP에서 전자서명에 쓰일 수 있는 공개키 알고리즘의 예는?",
    "options": [
      {
        "number": 1,
        "text": "CRC-32"
      },
      {
        "number": 2,
        "text": "AES"
      },
      {
        "number": 3,
        "text": "RSA"
      },
      {
        "number": 4,
        "text": "SHA-256"
      }
    ],
    "answer": 3,
    "explanation": "RSA는 서명 방식에 사용할 수 있다. AES는 대칭 암호이며 SHA-256은 해시다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q444",
    "partId": 6,
    "sectionId": 32,
    "sectionTitle": "이메일 보안",
    "sourceSection": "SECTION 02 이메일 보안",
    "question": "S/MIME의 구성과 가장 거리가 먼 표준은?",
    "options": [
      {
        "number": 1,
        "text": "이더넷 프레임에 관한 IEEE 802.3"
      },
      {
        "number": 2,
        "text": "CMS"
      },
      {
        "number": 3,
        "text": "MIME"
      },
      {
        "number": 4,
        "text": "X.509 인증서"
      }
    ],
    "answer": 1,
    "explanation": "S/MIME는 MIME 메시지에 CMS 기반 보호를 적용한다. 이더넷 프레이밍은 별개다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q445",
    "partId": 6,
    "sectionId": 32,
    "sectionTitle": "이메일 보안",
    "sourceSection": "SECTION 02 이메일 보안",
    "question": "회사가 인증서 기반 전자우편 서명을 S/MIME로 검증한다. 알맞은 키와 절차는?",
    "options": [
      {
        "number": 1,
        "text": "메일 제목만 비교한다."
      },
      {
        "number": 2,
        "text": "송신자의 인증서를 검증하고 그 공개키로 서명을 확인한다."
      },
      {
        "number": 3,
        "text": "인증기관의 개인키를 내려받아 확인한다."
      },
      {
        "number": 4,
        "text": "수신자의 대칭키로 발신자를 검증한다."
      }
    ],
    "answer": 2,
    "explanation": "발신자의 인증서가 신뢰되는지 확인한 뒤 그 공개키로 서명을 검증한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q446",
    "partId": 6,
    "sectionId": 32,
    "sectionTitle": "이메일 보안",
    "sourceSection": "SECTION 02 이메일 보안",
    "question": "수신 메일 서버가 특정 도메인의 메일 전송 권한을 가진 송신 IP 범위를 알아보려 한다. 관련 DNS 정책은?",
    "options": [
      {
        "number": 1,
        "text": "SPF"
      },
      {
        "number": 2,
        "text": "FTP"
      },
      {
        "number": 3,
        "text": "ARP"
      },
      {
        "number": 4,
        "text": "NTP"
      }
    ],
    "answer": 1,
    "explanation": "SPF는 SMTP 봉투 발신자 도메인 등이 허용한 송신 호스트인지 확인하는 데 쓰인다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q447",
    "partId": 6,
    "sectionId": 32,
    "sectionTitle": "이메일 보안",
    "sourceSection": "SECTION 02 이메일 보안",
    "question": "스팸 필터의 한계에 관한 옳은 설명은?",
    "options": [
      {
        "number": 1,
        "text": "유해 메일을 절대 놓치지 않는다."
      },
      {
        "number": 2,
        "text": "정상 메일도 오탐할 수 있으므로 격리함 확인 절차가 필요하다."
      },
      {
        "number": 3,
        "text": "정상 메일은 절대로 걸러지지 않는다."
      },
      {
        "number": 4,
        "text": "메일 본문과 관계없이 반드시 모든 메일을 기각한다."
      }
    ],
    "answer": 2,
    "explanation": "스팸 분류에는 오탐과 미탐이 모두 가능하다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q448",
    "partId": 6,
    "sectionId": 32,
    "sectionTitle": "이메일 보안",
    "sourceSection": "SECTION 02 이메일 보안",
    "question": "메일 미리 보기에서 사용자의 행동 없이 외부 콘텐츠가 로드되는 것을 줄이려 한다. 적절한 설정은?",
    "options": [
      {
        "number": 1,
        "text": "모든 원격 콘텐츠를 즉시 로드한다."
      },
      {
        "number": 2,
        "text": "경고 표시를 없앤다."
      },
      {
        "number": 3,
        "text": "모든 첨부파일을 자동 실행한다."
      },
      {
        "number": 4,
        "text": "신뢰하지 않는 메일의 외부 콘텐츠 자동 로드를 제한한다."
      }
    ],
    "answer": 4,
    "explanation": "외부 콘텐츠 제한은 추적과 일부 악성 콘텐츠의 노출을 줄이는 데 도움이 된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q449",
    "partId": 6,
    "sectionId": 32,
    "sectionTitle": "이메일 보안",
    "sourceSection": "SECTION 02 이메일 보안",
    "question": "메일 서버에 대한 가용성 공격의 대표 증상은?",
    "options": [
      {
        "number": 1,
        "text": "대량의 메시지로 전송 큐와 저장 공간이 포화된다."
      },
      {
        "number": 2,
        "text": "수신자가 메일 속 링크를 클릭한다."
      },
      {
        "number": 3,
        "text": "송신자가 서명에 성공한다."
      },
      {
        "number": 4,
        "text": "사용자가 첨부 문서를 연다."
      }
    ],
    "answer": 1,
    "explanation": "메일 서버의 큐 또는 저장 공간이 고갈되면 정상 메일 처리가 지연되거나 중단된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q450",
    "partId": 6,
    "sectionId": 32,
    "sectionTitle": "이메일 보안",
    "sourceSection": "SECTION 02 이메일 보안",
    "question": "메일이 통과한 SMTP 서버를 조사할 때 먼저 볼 헤더는?",
    "options": [
      {
        "number": 1,
        "text": "Subject"
      },
      {
        "number": 2,
        "text": "To"
      },
      {
        "number": 3,
        "text": "Content-Type"
      },
      {
        "number": 4,
        "text": "Received"
      }
    ],
    "answer": 4,
    "explanation": "Received는 전송 중계 기록을 담는다. 신뢰할 수 있는 서버가 추가한 기록인지 구분해야 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q451",
    "partId": 6,
    "sectionId": 32,
    "sectionTitle": "이메일 보안",
    "sourceSection": "SECTION 02 이메일 보안",
    "question": "정상 SMTP 중계 서버는 수신하면 자기 Received 헤더를 기존 것 위에 쓴다. 신뢰할 수 있는 헤더들만 시간순으로 읽는 일반적 방향은?",
    "options": [
      {
        "number": 1,
        "text": "새것부터 오래된 것"
      },
      {
        "number": 2,
        "text": "제목 바로 아래만"
      },
      {
        "number": 3,
        "text": "오래된 아래쪽부터 위쪽으로"
      },
      {
        "number": 4,
        "text": "주소의 알파벳 순"
      }
    ],
    "answer": 3,
    "explanation": "각 서버가 맨 위에 기록을 추가하므로 신뢰할 수 있는 항목은 아래에서 위로 읽으면 시간순이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q452",
    "partId": 6,
    "sectionId": 32,
    "sectionTitle": "이메일 보안",
    "sourceSection": "SECTION 02 이메일 보안",
    "question": "A가 B에게 보낸 메일에서 발신자 인증과 기밀성을 모두 원한다. 키 사용의 조합은?",
    "options": [
      {
        "number": 1,
        "text": "A의 공개키로 서명하고 B의 개인키로 암호화한다."
      },
      {
        "number": 2,
        "text": "A의 개인키로 서명하고 B의 공개키를 사용해 암호화한다."
      },
      {
        "number": 3,
        "text": "B의 개인키로 서명하고 A의 공개키로 암호화한다."
      },
      {
        "number": 4,
        "text": "A와 B의 공개키만 교환하고 평문을 보낸다."
      }
    ],
    "answer": 2,
    "explanation": "서명은 발신자 개인키를, 수신자용 암호화는 수신자 공개키를 사용한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q453",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "로그인 서버에서 한 번 성공한 OTP를 동일 유효 시간 안에 다시 제출했다. 적절한 처리는?",
    "options": [
      {
        "number": 1,
        "text": "코드를 메시지 암호키로 사용한다."
      },
      {
        "number": 2,
        "text": "이미 사용한 코드이므로 거부한다."
      },
      {
        "number": 3,
        "text": "다음 접속용 고정 비밀번호로 바꾼다."
      },
      {
        "number": 4,
        "text": "입력 길이가 맞으면 계속 수락한다."
      }
    ],
    "answer": 2,
    "explanation": "OTP는 재사용을 막는 인증 수단이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q454",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "사용자가 HTTPS로 접속하지만 브라우저가 인증서 이름 불일치를 보고했다. 바른 판단은?",
    "options": [
      {
        "number": 1,
        "text": "인증서 확인을 항상 생략한다."
      },
      {
        "number": 2,
        "text": "443 포트라면 접속 상대가 이미 입증됐다."
      },
      {
        "number": 3,
        "text": "암호화만으로 올바른 서버가 입증되지는 않으므로 오류를 확인한다."
      },
      {
        "number": 4,
        "text": "사용자 비밀번호로 서버 인증서를 대신한다."
      }
    ],
    "answer": 3,
    "explanation": "암호화 채널과 서버의 신원 확인이 모두 중요하다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q455",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "HTTPS 웹메일에서 TLS의 보호 범위를 설명한 것은?",
    "options": [
      {
        "number": 1,
        "text": "모든 중계 서버의 저장 데이터도 자동 보호한다."
      },
      {
        "number": 2,
        "text": "로그인 없이 발신자 신원을 입증한다."
      },
      {
        "number": 3,
        "text": "첨부파일의 악성 여부를 항상 판정한다."
      },
      {
        "number": 4,
        "text": "TLS가 연결된 구간의 데이터 전송을 보호한다."
      }
    ],
    "answer": 4,
    "explanation": "TLS는 해당 연결 구간을 보호하며 메일 자체의 종단 간 암호화와는 다르다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q456",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "TLS 레코드와 핸드셰이크의 역할이 바르게 연결된 것은?",
    "options": [
      {
        "number": 1,
        "text": "레코드·문서 편집 / 핸드셰이크·파일 압축"
      },
      {
        "number": 2,
        "text": "레코드·전송 단위 처리와 보호 / 핸드셰이크·파라미터 및 키 협상"
      },
      {
        "number": 3,
        "text": "레코드·DNS 해석 / 핸드셰이크·라우팅"
      },
      {
        "number": 4,
        "text": "레코드·포트 할당 / 핸드셰이크·디스크 포맷"
      }
    ],
    "answer": 2,
    "explanation": "핸드셰이크는 보호에 필요한 값을 협상하며 레코드 계층은 전송 데이터를 처리하고 보호한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q457",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "HTTPS로 배송 정보를 보내면서 기대할 수 있는 보호는?",
    "options": [
      {
        "number": 1,
        "text": "틀린 도메인으로 연결해도 항상 안전하다."
      },
      {
        "number": 2,
        "text": "서버 자체의 취약점이 모두 사라진다."
      },
      {
        "number": 3,
        "text": "배송 파일이 모든 저장 위치에서 자동 암호화된다."
      },
      {
        "number": 4,
        "text": "검증된 서버와 브라우저 사이의 요청·응답 전송이 보호된다."
      }
    ],
    "answer": 4,
    "explanation": "HTTPS는 올바르게 구성된 TLS 연결을 통해 HTTP 트래픽을 보호한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q458",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "다음 중 TLS 핸드셰이크 단계에서 수행되는 기능은?",
    "options": [
      {
        "number": 1,
        "text": "DNS 캐시 초기화"
      },
      {
        "number": 2,
        "text": "HTML 페이지 렌더링"
      },
      {
        "number": 3,
        "text": "파일 권한 변경"
      },
      {
        "number": 4,
        "text": "암호 설정과 키 관련 파라미터 협상"
      }
    ],
    "answer": 4,
    "explanation": "핸드셰이크는 연결 보호에 필요한 값을 합의하고 상대의 인증을 지원한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q459",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "일반적인 TLS 연결 설정을 시작할 때 클라이언트가 보내고 서버가 응답하는 메시지 순서는?",
    "options": [
      {
        "number": 1,
        "text": "Finished → ClientHello"
      },
      {
        "number": 2,
        "text": "ServerHello → ClientHello"
      },
      {
        "number": 3,
        "text": "ServerHello → Finished만"
      },
      {
        "number": 4,
        "text": "ClientHello → ServerHello"
      }
    ],
    "answer": 4,
    "explanation": "ClientHello는 협상 제안을 담고 ServerHello는 선택 결과 등을 응답한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q460",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "TLS 1.3의 일반적인 최초 ClientHello에서 Random 필드에 관한 설명으로 맞는 것은?",
    "options": [
      {
        "number": 1,
        "text": "항상 모두 0으로 채운다."
      },
      {
        "number": 2,
        "text": "32바이트 값이며 클라이언트 시각을 별도 형식으로 넣도록 요구하지 않는다."
      },
      {
        "number": 3,
        "text": "반드시 4바이트 Unix 시각만 담는다."
      },
      {
        "number": 4,
        "text": "사용자의 비밀번호를 담는다."
      }
    ],
    "answer": 2,
    "explanation": "TLS 1.3 ClientHello의 Random은 32바이트이며 구형 형식의 시각 필드를 요구하지 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q461",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "0-RTT를 사용하지 않는 TLS 연결에서 접근 순서는?",
    "options": [
      {
        "number": 1,
        "text": "서버 키 삭제 → HTTP → 협상 시작"
      },
      {
        "number": 2,
        "text": "ClientHello → 서버 협상 응답과 핸드셰이크 완료 → 보호된 HTTP 통신"
      },
      {
        "number": 3,
        "text": "HTTP 본문 전송 → ClientHello → 보호 협상"
      },
      {
        "number": 4,
        "text": "DNS 조회만으로 보호 완료"
      }
    ],
    "answer": 2,
    "explanation": "일반 애플리케이션 데이터를 보내기 전에 TLS 협상과 키 설정이 필요하다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q462",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "Apache HTTP 서버에서 디렉터리 정책과 서버 동작을 지시문으로 관리한다. 이 설정은 어떤 유형의 파일에 들어가는가?",
    "options": [
      {
        "number": 1,
        "text": "이미지 파일"
      },
      {
        "number": 2,
        "text": "서버 접근 로그"
      },
      {
        "number": 3,
        "text": "TLS 개인키 파일"
      },
      {
        "number": 4,
        "text": "httpd.conf 또는 배포판의 Apache 설정 파일"
      }
    ],
    "answer": 4,
    "explanation": "Apache 설정 파일은 서버 지시문을 담는다. 배포판에 따라 주 설정 파일의 이름이나 위치는 다를 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q463",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "인터넷에 공개할 웹 서비스의 실행 권한을 고른다. 옳은 설계는?",
    "options": [
      {
        "number": 1,
        "text": "웹 콘텐츠에 모든 사용자의 쓰기 허용"
      },
      {
        "number": 2,
        "text": "디버그 기능 항상 공개"
      },
      {
        "number": 3,
        "text": "전용 계정에 필요한 파일과 기능 권한만 부여"
      },
      {
        "number": 4,
        "text": "모든 웹 작업을 시스템 관리자 계정으로 실행"
      }
    ],
    "answer": 3,
    "explanation": "최소 권한은 웹 서비스가 침해되더라도 다른 자원에 미치는 영향을 줄인다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q464",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "Apache가 HTTP 응답의 Server 헤더에 자세한 버전 정보를 보이지 않게 하려 한다. 관련 지시문은?",
    "options": [
      {
        "number": 1,
        "text": "Listen"
      },
      {
        "number": 2,
        "text": "DirectoryIndex"
      },
      {
        "number": 3,
        "text": "ServerTokens"
      },
      {
        "number": 4,
        "text": "DocumentRoot"
      }
    ],
    "answer": 3,
    "explanation": "ServerTokens는 HTTP 응답에 포함되는 서버 정보의 수준을 조절한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q465",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "Apache에서 인덱스 파일이 없는 디렉터리의 자동 목록 표시를 끄려 한다. 조절할 Options 항목은?",
    "options": [
      {
        "number": 1,
        "text": "Includes"
      },
      {
        "number": 2,
        "text": "ExecCGI"
      },
      {
        "number": 3,
        "text": "Indexes"
      },
      {
        "number": 4,
        "text": "FollowSymLinks"
      }
    ],
    "answer": 3,
    "explanation": "Indexes가 활성화돼 있으면 자동 목록을 표시할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q466",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "일반 접근 로그에 기록하지 않도록 보호해야 할 정보는?",
    "options": [
      {
        "number": 1,
        "text": "HTTP 메서드"
      },
      {
        "number": 2,
        "text": "사용자가 입력한 비밀번호"
      },
      {
        "number": 3,
        "text": "요청 시각"
      },
      {
        "number": 4,
        "text": "응답 상태 코드"
      }
    ],
    "answer": 2,
    "explanation": "비밀번호는 인증 비밀이므로 접근 로그에 쓰면 안 된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q467",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "웹 서비스 직접 공격 유형과 가장 거리가 먼 운영 활동은?",
    "options": [
      {
        "number": 1,
        "text": "경로 조작"
      },
      {
        "number": 2,
        "text": "교차 사이트 스크립팅"
      },
      {
        "number": 3,
        "text": "SQL 삽입"
      },
      {
        "number": 4,
        "text": "승인된 복구 연습"
      }
    ],
    "answer": 4,
    "explanation": "복구 연습은 운영 활동이며 웹 취약점을 악용하는 유형이 아니다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q468",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "보안팀이 입력값 때문에 DB 쿼리의 구조가 의도와 달라졌음을 확인했다. 무엇을 조사할 만한가?",
    "options": [
      {
        "number": 1,
        "text": "DNS 응답 지연"
      },
      {
        "number": 2,
        "text": "NTP 오차"
      },
      {
        "number": 3,
        "text": "SQL 삽입"
      },
      {
        "number": 4,
        "text": "ARP 주소 갱신"
      }
    ],
    "answer": 3,
    "explanation": "SQL 삽입은 입력 데이터가 쿼리의 명령 구조에 영향을 주는 문제다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q469",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "사용자 입력을 쿼리 명령과 분리하는 직접적인 대책은?",
    "options": [
      {
        "number": 1,
        "text": "매개변수화된 쿼리 사용"
      },
      {
        "number": 2,
        "text": "접속 로그 끄기"
      },
      {
        "number": 3,
        "text": "DB 이름 숨기기만"
      },
      {
        "number": 4,
        "text": "오류 화면 색상 변경"
      }
    ],
    "answer": 1,
    "explanation": "매개변수화는 입력값을 명령 구조와 분리해 DB에 전달한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q470",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "단말 보안 분석에서 DLL 삽입 의심 경보가 발생했다. 대표적인 관찰 내용은?",
    "options": [
      {
        "number": 1,
        "text": "DNS 응답 크기 증가"
      },
      {
        "number": 2,
        "text": "디스크 용량 보고"
      },
      {
        "number": 3,
        "text": "다른 프로세스의 주소 공간에 의도하지 않은 DLL이 로드됨"
      },
      {
        "number": 4,
        "text": "웹 쿠키 만료"
      }
    ],
    "answer": 3,
    "explanation": "DLL 삽입은 프로세스의 주소 공간에 라이브러리가 로드되는 문제와 관련된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q471",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "웹 페이지에 포함된 신뢰하지 않는 내용이 방문자의 브라우저에서 사이트의 권한으로 실행된다. 관련 유형은?",
    "options": [
      {
        "number": 1,
        "text": "파일 무결성 검사"
      },
      {
        "number": 2,
        "text": "SQL 삽입"
      },
      {
        "number": 3,
        "text": "ARP 스푸핑"
      },
      {
        "number": 4,
        "text": "XSS"
      }
    ],
    "answer": 4,
    "explanation": "XSS는 신뢰하지 않는 스크립트가 피해자 브라우저의 사이트 문맥에서 실행되는 문제다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q472",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "게시판에서 저장형 XSS를 분석한다. 사건의 순서로 타당한 것은?",
    "options": [
      {
        "number": 1,
        "text": "신뢰하지 않는 내용 저장 → 다른 이용자에게 출력 → 브라우저에서 실행"
      },
      {
        "number": 2,
        "text": "DB 백업 → DNS 캐시 삭제 → 파일 복원"
      },
      {
        "number": 3,
        "text": "타 사이트 로그인 → 인증서 갱신 → 스크립트 제거"
      },
      {
        "number": 4,
        "text": "브라우저 실행 → 내용 저장 → 페이지 요청"
      }
    ],
    "answer": 1,
    "explanation": "저장형 XSS는 입력이 저장된 이후 렌더링 과정에서 코드로 해석될 때 발생한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q473",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "XSS 방어와 직접 관련이 큰 기법은?",
    "options": [
      {
        "number": 1,
        "text": "HTML이나 속성 등 출력 문맥에 맞춘 인코딩"
      },
      {
        "number": 2,
        "text": "라우터의 시간 동기화"
      },
      {
        "number": 3,
        "text": "DB의 파일 배치 변경"
      },
      {
        "number": 4,
        "text": "디스크 파티션 분할"
      }
    ],
    "answer": 1,
    "explanation": "문맥에 맞춘 출력 인코딩은 신뢰하지 않는 값이 코드로 해석되는 것을 막는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q474",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "로그인된 사용자의 브라우저가 다른 사이트에서 유도된 상태 변경 요청을 보내고 서비스가 이를 그대로 실행했다. 관련 유형은?",
    "options": [
      {
        "number": 1,
        "text": "버퍼 범위 오류"
      },
      {
        "number": 2,
        "text": "저장형 XSS만"
      },
      {
        "number": 3,
        "text": "서비스 거부"
      },
      {
        "number": 4,
        "text": "CSRF"
      }
    ],
    "answer": 4,
    "explanation": "CSRF는 사용자 브라우저에 붙은 인증 상태를 이용해 사용자가 의도하지 않은 요청을 유도하는 유형이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q475",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "중요 설정을 바꾸는 요청에 CSRF 대응책을 적용한다. 어떤 조치가 적절한가?",
    "options": [
      {
        "number": 1,
        "text": "GET으로 상태를 변경한다."
      },
      {
        "number": 2,
        "text": "세션에 연결한 CSRF 토큰을 서버에서 확인한다."
      },
      {
        "number": 3,
        "text": "요청에 쿠키가 있으면 무조건 수행한다."
      },
      {
        "number": 4,
        "text": "요청이 브라우저에서 왔는지만 확인한다."
      }
    ],
    "answer": 2,
    "explanation": "토큰 검증으로 신뢰하는 애플리케이션 흐름에서 만들어진 요청인지 확인할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q476",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "게시판 첨부파일을 조사하다 업로드된 파일이 서버에서 프로그램으로 실행된 흔적을 찾았다. 우선 점검할 것은?",
    "options": [
      {
        "number": 1,
        "text": "라우터의 기본 경로"
      },
      {
        "number": 2,
        "text": "메일의 MX 우선순위"
      },
      {
        "number": 3,
        "text": "NTP 서버 이름"
      },
      {
        "number": 4,
        "text": "업로드 디렉터리에서 서버 측 실행이 허용됐는지"
      }
    ],
    "answer": 4,
    "explanation": "업로드된 콘텐츠를 실행 가능한 경로에 두면 서버 측 코드 실행으로 이어질 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q477",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "사용자가 올린 파일을 안전하게 제공하는 설계는?",
    "options": [
      {
        "number": 1,
        "text": "클라이언트가 선언한 종류만 보고 전부 신뢰"
      },
      {
        "number": 2,
        "text": "실행이 금지된 별도 저장소를 쓰고 허용 형식을 검증"
      },
      {
        "number": 3,
        "text": "공용 관리자 권한으로 파일 개방"
      },
      {
        "number": 4,
        "text": "업로드한 파일을 애플리케이션 코드 경로에 저장"
      }
    ],
    "answer": 2,
    "explanation": "업로드 전 검증과 실행할 수 없는 저장 영역을 함께 적용해야 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q478",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "웹 서버가 요청 파일을 지정된 저장 루트 아래에서만 읽게 하려 한다. 적절한 방어는?",
    "options": [
      {
        "number": 1,
        "text": "경로 길이만 비교한다."
      },
      {
        "number": 2,
        "text": "저장 루트에 모든 계정의 쓰기 권한을 준다."
      },
      {
        "number": 3,
        "text": "확장자만 본다."
      },
      {
        "number": 4,
        "text": "정규화한 최종 경로가 지정 루트 안에 있는지 확인한다."
      }
    ],
    "answer": 4,
    "explanation": "최종 경로를 검증해야 경로 표현의 차이로 허용 영역을 벗어나는 것을 막을 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q479",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "첨부파일 보기 기능에서 입력 경로를 신뢰해 의도하지 않은 상위 폴더의 파일을 읽게 됐다. 유형은?",
    "options": [
      {
        "number": 1,
        "text": "메일 송신 인증"
      },
      {
        "number": 2,
        "text": "디렉터리 트래버설"
      },
      {
        "number": 3,
        "text": "ICMP 반사"
      },
      {
        "number": 4,
        "text": "세션 만료"
      }
    ],
    "answer": 2,
    "explanation": "디렉터리 트래버설은 허용된 파일 경로 범위를 벗어나는 문제다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q480",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "로그인 이후의 세션 권한을 관리하는 방식으로 바른 것은?",
    "options": [
      {
        "number": 1,
        "text": "서버가 세션 상태와 접근 권한을 검증한다."
      },
      {
        "number": 2,
        "text": "로그아웃해도 서버가 세션을 무기한 수락한다."
      },
      {
        "number": 3,
        "text": "세션 식별자에 비밀번호를 넣는다."
      },
      {
        "number": 4,
        "text": "클라이언트가 보낸 사용자 등급을 그대로 신뢰한다."
      }
    ],
    "answer": 1,
    "explanation": "민감한 권한 판단은 서버에서 수행해야 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q481",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "웹 서비스에 특화된 대표 위협과 거리가 먼 것은?",
    "options": [
      {
        "number": 1,
        "text": "XSS"
      },
      {
        "number": 2,
        "text": "SQL 삽입"
      },
      {
        "number": 3,
        "text": "ARP 프레임을 마주하는 같은 링크의 주소 위조"
      },
      {
        "number": 4,
        "text": "CSRF"
      }
    ],
    "answer": 3,
    "explanation": "ARP 위조는 링크 계층 위협이고 나머지는 웹 애플리케이션과 직접 관련된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q482",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "기본 문서가 없는 웹 디렉터리에 접속하니 서버가 그 폴더의 파일명을 전부 나열했다. 어떤 문제인가?",
    "options": [
      {
        "number": 1,
        "text": "첨부파일 서명 실패"
      },
      {
        "number": 2,
        "text": "DNS 캐시 오염"
      },
      {
        "number": 3,
        "text": "디렉터리 목록 노출"
      },
      {
        "number": 4,
        "text": "암호키 충돌"
      }
    ],
    "answer": 3,
    "explanation": "목록 노출은 내부 구조와 민감한 파일의 존재를 드러낼 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q483",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "WAF의 일반적 역할과 가장 거리가 먼 것은?",
    "options": [
      {
        "number": 1,
        "text": "HTTP 요청 정책 적용"
      },
      {
        "number": 2,
        "text": "손상된 서버 디스크에서 문서를 복구"
      },
      {
        "number": 3,
        "text": "의심 HTTP 요청 차단"
      },
      {
        "number": 4,
        "text": "웹 공격 징후 탐지"
      }
    ],
    "answer": 2,
    "explanation": "WAF는 웹 트래픽에 보안 정책을 적용한다. 저장장치 복구는 다른 기능이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q484",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "공개된 개별 보안 취약점을 서로 다른 조직이 같은 번호로 식별할 때 사용하는 식별자는?",
    "options": [
      {
        "number": 1,
        "text": "IP 주소"
      },
      {
        "number": 2,
        "text": "SSID"
      },
      {
        "number": 3,
        "text": "VLAN"
      },
      {
        "number": 4,
        "text": "CVE"
      }
    ],
    "answer": 4,
    "explanation": "CVE는 공개 취약점을 공통으로 참조하기 위한 식별자다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q485",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "웹 기능이 사용자 입력을 운영체제 셸의 명령 일부처럼 처리하는 문제가 발견됐다. 어떤 범주인가?",
    "options": [
      {
        "number": 1,
        "text": "디스크 오류"
      },
      {
        "number": 2,
        "text": "DNS 위조"
      },
      {
        "number": 3,
        "text": "운영체제 명령 삽입"
      },
      {
        "number": 4,
        "text": "인증서 만료"
      }
    ],
    "answer": 3,
    "explanation": "명령 삽입은 데이터여야 할 입력이 운영체제 명령의 구조나 의미를 바꾸는 문제다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q486",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "오류 페이지에 DB 접속 정보와 내부 서버 경로가 표시됐다. 주된 보안 문제는?",
    "options": [
      {
        "number": 1,
        "text": "가용성 확보"
      },
      {
        "number": 2,
        "text": "암호화 성공"
      },
      {
        "number": 3,
        "text": "세션 만료"
      },
      {
        "number": 4,
        "text": "민감 정보 노출"
      }
    ],
    "answer": 4,
    "explanation": "자세한 오류 정보에는 서비스 내부 구조나 민감한 설정이 포함될 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q487",
    "partId": 6,
    "sectionId": 33,
    "sectionTitle": "웹 보안(Web Security)",
    "sourceSection": "SECTION 03 웹 보안(Web Security)",
    "question": "로그인 실패 오류의 표시 방식으로 적절한 것은?",
    "options": [
      {
        "number": 1,
        "text": "내부 예외와 SQL을 사용자에게 그대로 표시한다."
      },
      {
        "number": 2,
        "text": "계정 존재 여부를 구분하기 어려운 일반 메시지를 반환한다."
      },
      {
        "number": 3,
        "text": "가입된 계정인지 응답으로 확실히 알려준다."
      },
      {
        "number": 4,
        "text": "비밀번호 정책의 내부 구현을 출력한다."
      }
    ],
    "answer": 2,
    "explanation": "일관된 오류는 계정 목록 노출 위험을 줄인다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q488",
    "partId": 6,
    "sectionId": 34,
    "sectionTitle": "DHCP와 DNS 보안",
    "sourceSection": "SECTION 04 DHCP와 DNS 보안",
    "question": "국가 도메인 .kr의 등록 정책과 운영을 담당하는 국내 기관은?",
    "options": [
      {
        "number": 1,
        "text": "IETF"
      },
      {
        "number": 2,
        "text": "한국인터넷진흥원(KISA)"
      },
      {
        "number": 3,
        "text": "IEEE"
      },
      {
        "number": 4,
        "text": "W3C"
      }
    ],
    "answer": 2,
    "explanation": "KISA는 .kr 국가 도메인 등록 관리에 관한 업무를 수행한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q489",
    "partId": 6,
    "sectionId": 34,
    "sectionTitle": "DHCP와 DNS 보안",
    "sourceSection": "SECTION 04 DHCP와 DNS 보안",
    "question": "DNS를 사용하지 않고 운영체제에 특정 호스트 이름과 IP 주소의 대응을 직접 등록하려 한다. 관련 파일은?",
    "options": [
      {
        "number": 1,
        "text": "hosts"
      },
      {
        "number": 2,
        "text": "fstab"
      },
      {
        "number": 3,
        "text": "services"
      },
      {
        "number": 4,
        "text": "passwd"
      }
    ],
    "answer": 1,
    "explanation": "hosts 파일에는 호스트 이름과 IP 주소의 정적 매핑을 기록할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q490",
    "partId": 6,
    "sectionId": 34,
    "sectionTitle": "DHCP와 DNS 보안",
    "sourceSection": "SECTION 04 DHCP와 DNS 보안",
    "question": "재귀 DNS 서버가 잘못된 주소를 캐시에 넣은 뒤 이용자들에게 반복해 돌려줬다. 어떤 유형인가?",
    "options": [
      {
        "number": 1,
        "text": "디렉터리 목록 노출"
      },
      {
        "number": 2,
        "text": "정상 캐시 갱신"
      },
      {
        "number": 3,
        "text": "메일 위조"
      },
      {
        "number": 4,
        "text": "DNS 캐시 오염"
      }
    ],
    "answer": 4,
    "explanation": "거짓 DNS 정보를 캐시에 저장하게 만들면 이후 질의에도 잘못된 주소가 반환될 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q491",
    "partId": 6,
    "sectionId": 34,
    "sectionTitle": "DHCP와 DNS 보안",
    "sourceSection": "SECTION 04 DHCP와 DNS 보안",
    "question": "사내용 재귀 DNS 서비스의 안전한 운영 방법은?",
    "options": [
      {
        "number": 1,
        "text": "전 세계에 재귀 질의를 제한 없이 공개한다."
      },
      {
        "number": 2,
        "text": "관리 접근을 모든 사용자에게 준다."
      },
      {
        "number": 3,
        "text": "인가된 내부 단말에만 재귀 질의를 허용한다."
      },
      {
        "number": 4,
        "text": "발견된 보안 결함을 고치지 않는다."
      }
    ],
    "answer": 3,
    "explanation": "허용 대상을 제한하면 외부에서 재귀 서버를 오남용할 가능성이 줄어든다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q492",
    "partId": 6,
    "sectionId": 34,
    "sectionTitle": "DHCP와 DNS 보안",
    "sourceSection": "SECTION 04 DHCP와 DNS 보안",
    "question": "DNS 서버의 보안 위험과 직접 관련 없는 것은?",
    "options": [
      {
        "number": 1,
        "text": "질의 데이터가 전송 중 조작됨"
      },
      {
        "number": 2,
        "text": "질의 급증으로 서비스가 지연됨"
      },
      {
        "number": 3,
        "text": "위조 응답이 캐시에 저장됨"
      },
      {
        "number": 4,
        "text": "디스크 파일의 소유자 실행 비트만 변경됨"
      }
    ],
    "answer": 4,
    "explanation": "DNS 위협에는 질의나 캐시의 변조, 가용성 저해 등이 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q493",
    "partId": 6,
    "sectionId": 34,
    "sectionTitle": "DHCP와 DNS 보안",
    "sourceSection": "SECTION 04 DHCP와 DNS 보안",
    "question": "DNSSEC을 검증하는 리졸버가 얻는 보호는?",
    "options": [
      {
        "number": 1,
        "text": "서명된 DNS 레코드의 출처와 무결성을 검증한다."
      },
      {
        "number": 2,
        "text": "사용자의 IP 주소를 가린다."
      },
      {
        "number": 3,
        "text": "질의 이름을 숨긴다."
      },
      {
        "number": 4,
        "text": "DNS 장애를 항상 예방한다."
      }
    ],
    "answer": 1,
    "explanation": "DNSSEC은 서명으로 레코드의 출처와 무결성을 검증하며 질의 기밀성은 제공하지 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q494",
    "partId": 6,
    "sectionId": 34,
    "sectionTitle": "DHCP와 DNS 보안",
    "sourceSection": "SECTION 04 DHCP와 DNS 보안",
    "question": "도메인으로 향하는 메일을 받을 서버를 지정하는 DNS 레코드는?",
    "options": [
      {
        "number": 1,
        "text": "PTR"
      },
      {
        "number": 2,
        "text": "SOA"
      },
      {
        "number": 3,
        "text": "MX"
      },
      {
        "number": 4,
        "text": "AAAA"
      }
    ],
    "answer": 3,
    "explanation": "MX는 메일 교환 서버와 우선순위를 지정한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q495",
    "partId": 6,
    "sectionId": 35,
    "sectionTitle": "데이터베이스 보안",
    "sourceSection": "SECTION 05 데이터베이스 보안",
    "question": "동료에게 특정 테이블의 조회 권한만 부여하려 한다. SQL에서 쓰는 권한 부여 문은?",
    "options": [
      {
        "number": 1,
        "text": "GRANT"
      },
      {
        "number": 2,
        "text": "DROP"
      },
      {
        "number": 3,
        "text": "UPDATE"
      },
      {
        "number": 4,
        "text": "ROLLBACK"
      }
    ],
    "answer": 1,
    "explanation": "GRANT로 테이블에 대한 SELECT 권한을 부여할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q496",
    "partId": 6,
    "sectionId": 35,
    "sectionTitle": "데이터베이스 보안",
    "sourceSection": "SECTION 05 데이터베이스 보안",
    "question": "직원번호와 업무용 이메일이 모두 직원 레코드를 유일하게 식별한다. 직원번호를 기본키로 골랐다면 이메일은?",
    "options": [
      {
        "number": 1,
        "text": "일반 중복 속성"
      },
      {
        "number": 2,
        "text": "대체키"
      },
      {
        "number": 3,
        "text": "데이터베이스 암호키"
      },
      {
        "number": 4,
        "text": "외래키"
      }
    ],
    "answer": 2,
    "explanation": "기본키로 선택되지 않은 후보키는 대체키다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q497",
    "partId": 6,
    "sectionId": 35,
    "sectionTitle": "데이터베이스 보안",
    "sourceSection": "SECTION 05 데이터베이스 보안",
    "question": "데이터베이스 보안 통제에 해당하지 않는 것은?",
    "options": [
      {
        "number": 1,
        "text": "민감한 결과의 추론 가능성 제한"
      },
      {
        "number": 2,
        "text": "보고서 글꼴 변경"
      },
      {
        "number": 3,
        "text": "저장 데이터 암호화"
      },
      {
        "number": 4,
        "text": "접근 권한 검사"
      }
    ],
    "answer": 2,
    "explanation": "글꼴 변경은 표현 설정이며 DB 보안 통제가 아니다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q498",
    "partId": 6,
    "sectionId": 35,
    "sectionTitle": "데이터베이스 보안",
    "sourceSection": "SECTION 05 데이터베이스 보안",
    "question": "개별 공개 자료로는 알 수 없던 기밀 업무 규모가 여러 자료를 합쳐 보자 드러났다. 어떤 문제인가?",
    "options": [
      {
        "number": 1,
        "text": "키 만료"
      },
      {
        "number": 2,
        "text": "데이터 정렬"
      },
      {
        "number": 3,
        "text": "집합으로 인한 노출"
      },
      {
        "number": 4,
        "text": "인증서 만료"
      }
    ],
    "answer": 3,
    "explanation": "개별 데이터의 민감도가 낮더라도 합치면 더 높은 등급의 정보가 드러날 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q499",
    "partId": 6,
    "sectionId": 35,
    "sectionTitle": "데이터베이스 보안",
    "sourceSection": "SECTION 05 데이터베이스 보안",
    "question": "통계 서비스에서 몇 사람만 포함된 집단의 합계를 그대로 공개하면 개인 값이 드러날 수 있다. 적절한 대책은?",
    "options": [
      {
        "number": 1,
        "text": "개인별 식별자를 더 많이 넣는다."
      },
      {
        "number": 2,
        "text": "접근 로그를 기록하지 않는다."
      },
      {
        "number": 3,
        "text": "작은 집단의 결과를 억제하고 반복 질의에 의한 추론도 검토한다."
      },
      {
        "number": 4,
        "text": "항상 원본 레코드도 함께 보여준다."
      }
    ],
    "answer": 3,
    "explanation": "질의 결과를 제한하면 개별 민감 값을 추론할 가능성을 줄일 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q500",
    "partId": 6,
    "sectionId": 35,
    "sectionTitle": "데이터베이스 보안",
    "sourceSection": "SECTION 05 데이터베이스 보안",
    "question": "담당자는 개별 급여 열을 읽을 권한이 없지만 허용된 통계 결과의 차이를 통해 특정인의 급여를 알아냈다. 해당 위협은?",
    "options": [
      {
        "number": 1,
        "text": "추론"
      },
      {
        "number": 2,
        "text": "부인방지"
      },
      {
        "number": 3,
        "text": "자료 손실"
      },
      {
        "number": 4,
        "text": "키 교환"
      }
    ],
    "answer": 1,
    "explanation": "추론은 직접 볼 수 없는 정보를 허용된 질의 결과 등에서 간접적으로 알아내는 문제다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q501",
    "partId": 6,
    "sectionId": 35,
    "sectionTitle": "데이터베이스 보안",
    "sourceSection": "SECTION 05 데이터베이스 보안",
    "question": "높은 등급의 데이터가 승인 없이 낮은 등급 영역으로 옮겨지는 것을 막는다. 어떤 통제인가?",
    "options": [
      {
        "number": 1,
        "text": "정보 흐름 통제"
      },
      {
        "number": 2,
        "text": "압축 통제"
      },
      {
        "number": 3,
        "text": "백업 통제"
      },
      {
        "number": 4,
        "text": "동시성 통제"
      }
    ],
    "answer": 1,
    "explanation": "정보 흐름 통제는 데이터가 허용된 보호 경계를 넘어가지 않도록 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q502",
    "partId": 6,
    "sectionId": 35,
    "sectionTitle": "데이터베이스 보안",
    "sourceSection": "SECTION 05 데이터베이스 보안",
    "question": "DB 보안 정책을 제정할 때 적절한 접근은?",
    "options": [
      {
        "number": 1,
        "text": "조직의 보안 정책과 일치시키고 담당자와 점검 절차를 정한다."
      },
      {
        "number": 2,
        "text": "기본적으로 모든 데이터를 공개한다."
      },
      {
        "number": 3,
        "text": "기존 조직 정책과 상관없이 작성한다."
      },
      {
        "number": 4,
        "text": "개발자마다 독자적으로 권한을 정하게 한다."
      }
    ],
    "answer": 1,
    "explanation": "DB 보안 정책은 조직의 상위 정책과 연결해 운영해야 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q503",
    "partId": 6,
    "sectionId": 35,
    "sectionTitle": "데이터베이스 보안",
    "sourceSection": "SECTION 05 데이터베이스 보안",
    "question": "애플리케이션과 DB 사이의 독립 서버에서 접속 정책을 적용하고 쿼리 감사를 기록한다. 해당 유형은?",
    "options": [
      {
        "number": 1,
        "text": "DB 접근제어 게이트웨이"
      },
      {
        "number": 2,
        "text": "DNS 리졸버"
      },
      {
        "number": 3,
        "text": "파일 복구 도구"
      },
      {
        "number": 4,
        "text": "시간 동기화 서버"
      }
    ],
    "answer": 1,
    "explanation": "DB 접근제어 게이트웨이는 접속과 질의를 중계하며 정책을 적용하고 감사를 남길 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q504",
    "partId": 6,
    "sectionId": 35,
    "sectionTitle": "데이터베이스 보안",
    "sourceSection": "SECTION 05 데이터베이스 보안",
    "question": "애플리케이션 코드에 암호화 모듈을 넣어 DB에 보내기 전에 값을 보호한다. 어떤 방식에 해당하는가?",
    "options": [
      {
        "number": 1,
        "text": "DNS 데이터 보호"
      },
      {
        "number": 2,
        "text": "물리 저장장치 교체"
      },
      {
        "number": 3,
        "text": "애플리케이션 계층 암호화"
      },
      {
        "number": 4,
        "text": "DB 서버 내부 플러그인"
      }
    ],
    "answer": 3,
    "explanation": "값을 DB에 보내기 전에 애플리케이션이 암호화하므로 앱의 수정 및 키 관리가 필요하다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q505",
    "partId": 6,
    "sectionId": 36,
    "sectionTitle": "전자상거래 보안",
    "sourceSection": "SECTION 06 전자상거래 보안",
    "question": "전자화폐 흐름에서 은행이 사용자에게 화폐를 내주고, 사용자가 상점 결제에 썼다. 두 절차를 순서대로 고른 것은?",
    "options": [
      {
        "number": 1,
        "text": "발행·지불"
      },
      {
        "number": 2,
        "text": "로그인·정산"
      },
      {
        "number": 3,
        "text": "정산·폐지"
      },
      {
        "number": 4,
        "text": "지불·발행"
      }
    ],
    "answer": 1,
    "explanation": "은행에서 사용자에게 지급하는 것은 발행이고 상점에 내는 것은 지불이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q506",
    "partId": 6,
    "sectionId": 36,
    "sectionTitle": "전자상거래 보안",
    "sourceSection": "SECTION 06 전자상거래 보안",
    "question": "전자 지갑에 저장한 화폐 가치를 온라인 거래에서 지불에 사용한다. 이 수단은?",
    "options": [
      {
        "number": 1,
        "text": "접근 토큰"
      },
      {
        "number": 2,
        "text": "전자화폐"
      },
      {
        "number": 3,
        "text": "공개키 인증서"
      },
      {
        "number": 4,
        "text": "전자서명"
      }
    ],
    "answer": 2,
    "explanation": "전자화폐는 디지털 형식으로 보관하고 거래에 지불할 수 있는 화폐 가치를 뜻한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q507",
    "partId": 6,
    "sectionId": 36,
    "sectionTitle": "전자상거래 보안",
    "sourceSection": "SECTION 06 전자상거래 보안",
    "question": "역사적인 카드 결제 프로토콜 SET가 키 보호와 주문·지불 정보 연결에 각각 활용한 것은?",
    "options": [
      {
        "number": 1,
        "text": "DNSSEC·SSO"
      },
      {
        "number": 2,
        "text": "블록체인·일회용 패드"
      },
      {
        "number": 3,
        "text": "ARP·디지털 워터마크"
      },
      {
        "number": 4,
        "text": "전자봉투·이중서명"
      }
    ],
    "answer": 4,
    "explanation": "전자봉투는 세션키를 보호하고, 이중서명은 주문과 지불의 관계를 검증할 수 있게 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q508",
    "partId": 6,
    "sectionId": 36,
    "sectionTitle": "전자상거래 보안",
    "sourceSection": "SECTION 06 전자상거래 보안",
    "question": "전자봉투에서 큰 문서를 암호화하고 문서에 쓰인 세션키를 수신자에게만 공개한다. 어떤 키가 각각 쓰이는가?",
    "options": [
      {
        "number": 1,
        "text": "수신자 개인키·송신자 공개키"
      },
      {
        "number": 2,
        "text": "송신자 공개키·송신자 개인키"
      },
      {
        "number": 3,
        "text": "비밀번호·공용 세션 ID"
      },
      {
        "number": 4,
        "text": "대칭 세션키·수신자 공개키"
      }
    ],
    "answer": 4,
    "explanation": "본문은 대칭 세션키로 보호하고 대칭키 자체는 수신자의 공개키로 보호한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q509",
    "partId": 6,
    "sectionId": 36,
    "sectionTitle": "전자상거래 보안",
    "sourceSection": "SECTION 06 전자상거래 보안",
    "question": "SET를 개발할 당시 카드 거래의 보안 목표로 적절한 것은?",
    "options": [
      {
        "number": 1,
        "text": "모든 참가자 인증을 없앰"
      },
      {
        "number": 2,
        "text": "거래 정보의 기밀성과 무결성을 보호"
      },
      {
        "number": 3,
        "text": "카드 정보를 판매자에게 무조건 공개"
      },
      {
        "number": 4,
        "text": "주문 데이터의 무결성 확인을 생략"
      }
    ],
    "answer": 2,
    "explanation": "SET는 카드 거래 정보의 기밀성과 무결성, 참여자 인증을 지원하도록 설계됐다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q510",
    "partId": 6,
    "sectionId": 36,
    "sectionTitle": "전자상거래 보안",
    "sourceSection": "SECTION 06 전자상거래 보안",
    "question": "송신자가 문서에 서명한 뒤 서명과 문서를 암호화하고, 수신자용으로 암호키도 보호한다. 키 사용 순서는?",
    "options": [
      {
        "number": 1,
        "text": "송신자 개인키·대칭 세션키·수신자 공개키"
      },
      {
        "number": 2,
        "text": "대칭키·수신자 공개키·송신자 개인키"
      },
      {
        "number": 3,
        "text": "수신자 개인키·대칭키·송신자 공개키"
      },
      {
        "number": 4,
        "text": "송신자 공개키·대칭키·수신자 개인키"
      }
    ],
    "answer": 1,
    "explanation": "송신자는 개인키로 서명하고 대칭키로 본문을 보호한다. 대칭키는 수신자 공개키로 암호화한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q511",
    "partId": 6,
    "sectionId": 36,
    "sectionTitle": "전자상거래 보안",
    "sourceSection": "SECTION 06 전자상거래 보안",
    "question": "SET가 주문 내용과 카드 지불 정보를 나눠 전달한 이유는?",
    "options": [
      {
        "number": 1,
        "text": "모든 참가자를 익명으로 만들어 인증을 없애기 위해"
      },
      {
        "number": 2,
        "text": "카드 번호를 전 참가자에게 공개하기 위해"
      },
      {
        "number": 3,
        "text": "상점은 주문에 필요한 정보만 보고 지불 처리 기관은 지불에 필요한 정보만 보게 하기 위해"
      },
      {
        "number": 4,
        "text": "정보의 무결성 검사를 하지 않기 위해"
      }
    ],
    "answer": 3,
    "explanation": "정보의 분리는 각 당사자에게 필요한 범위만 공개하게 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q512",
    "partId": 6,
    "sectionId": 36,
    "sectionTitle": "전자상거래 보안",
    "sourceSection": "SECTION 06 전자상거래 보안",
    "question": "SET의 역사적 도입 부담에 해당하지 않는 것은?",
    "options": [
      {
        "number": 1,
        "text": "결제 처리 시스템에 별도 구성이 필요하다."
      },
      {
        "number": 2,
        "text": "구성이 복잡하다."
      },
      {
        "number": 3,
        "text": "상점이 카드 지불 정보를 직접 보지 않도록 설계됐다."
      },
      {
        "number": 4,
        "text": "공개키 연산에 비용이 든다."
      }
    ],
    "answer": 3,
    "explanation": "카드 정보를 상점에 직접 노출하지 않는 것은 보안 설계의 장점이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q513",
    "partId": 6,
    "sectionId": 36,
    "sectionTitle": "전자상거래 보안",
    "sourceSection": "SECTION 06 전자상거래 보안",
    "question": "고전 SET에서 디지털 서명에 사용한 공개키 알고리즘은?",
    "options": [
      {
        "number": 1,
        "text": "HMAC"
      },
      {
        "number": 2,
        "text": "AES"
      },
      {
        "number": 3,
        "text": "RSA"
      },
      {
        "number": 4,
        "text": "SHA-1"
      }
    ],
    "answer": 3,
    "explanation": "SET의 서명에는 RSA가 쓰였다. SHA-1은 해시이고 AES는 대칭 암호다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q514",
    "partId": 6,
    "sectionId": 36,
    "sectionTitle": "전자상거래 보안",
    "sourceSection": "SECTION 06 전자상거래 보안",
    "question": "상점은 주문 정보만, 결제 기관은 지불 정보만 읽되 두 정보가 같은 거래의 일부인지는 검증해야 한다. 어떤 기술인가?",
    "options": [
      {
        "number": 1,
        "text": "시간 동기화"
      },
      {
        "number": 2,
        "text": "라우팅"
      },
      {
        "number": 3,
        "text": "비밀번호 해시"
      },
      {
        "number": 4,
        "text": "이중서명"
      }
    ],
    "answer": 4,
    "explanation": "이중서명은 서로 다른 당사자에게 정보를 나눠 공개하면서도 두 정보의 연결을 확인하도록 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q515",
    "partId": 6,
    "sectionId": 36,
    "sectionTitle": "전자상거래 보안",
    "sourceSection": "SECTION 06 전자상거래 보안",
    "question": "SET 이중서명에서 구매자는 주문 정보와 지불 정보를 연결하는 서명을 만든다. 올바른 생성 방식은?",
    "options": [
      {
        "number": 1,
        "text": "두 정보의 원문을 공개 게시한다."
      },
      {
        "number": 2,
        "text": "주문 정보 하나만 쓰고 지불 정보는 검증에서 뺀다."
      },
      {
        "number": 3,
        "text": "두 정보의 해시를 결합한 뒤 구매자의 개인키로 서명한다."
      },
      {
        "number": 4,
        "text": "결제 기관의 개인키로 구매자의 서명을 만든다."
      }
    ],
    "answer": 3,
    "explanation": "두 해시를 함께 서명에 반영하므로 각각의 정보가 같은 거래에 속하는지 검증할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q516",
    "partId": 6,
    "sectionId": 36,
    "sectionTitle": "전자상거래 보안",
    "sourceSection": "SECTION 06 전자상거래 보안",
    "question": "기업 간 전자상거래의 상호운용을 위해 XML 기반 메시지와 표준화된 거래 절차를 지원하는 프레임워크는?",
    "options": [
      {
        "number": 1,
        "text": "ARP"
      },
      {
        "number": 2,
        "text": "SSH"
      },
      {
        "number": 3,
        "text": "NTP"
      },
      {
        "number": 4,
        "text": "ebXML"
      }
    ],
    "answer": 4,
    "explanation": "ebXML은 기업 간 전자거래 메시지와 프로세스의 상호운용을 지원한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q517",
    "partId": 6,
    "sectionId": 36,
    "sectionTitle": "전자상거래 보안",
    "sourceSection": "SECTION 06 전자상거래 보안",
    "question": "WPKI를 사용하는 상황을 설명한 것은?",
    "options": [
      {
        "number": 1,
        "text": "대칭키가 있으면 공개키 인증이 불가능해진다."
      },
      {
        "number": 2,
        "text": "무선 기기의 신원 확인 없이 모두 접속시킨다."
      },
      {
        "number": 3,
        "text": "무선 환경을 고려한 공개키 인증서와 신뢰 체계를 적용한다."
      },
      {
        "number": 4,
        "text": "문서 압축을 위해 인증서를 버린다."
      }
    ],
    "answer": 3,
    "explanation": "WPKI는 무선 단말과 네트워크 환경을 고려해 PKI 기능을 제공한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q518",
    "partId": 6,
    "sectionId": 36,
    "sectionTitle": "전자상거래 보안",
    "sourceSection": "SECTION 06 전자상거래 보안",
    "question": "사용자가 무선 공개키 인증서를 받는 절차로 타당한 흐름은?",
    "options": [
      {
        "number": 1,
        "text": "인증서 삭제 → 발급 → 신청"
      },
      {
        "number": 2,
        "text": "공개 게시 → 신원 확인 생략 → 발급"
      },
      {
        "number": 3,
        "text": "신청과 공개키 제출 → 등록 절차에서 신원 확인 → 인증기관의 서명과 발급"
      },
      {
        "number": 4,
        "text": "발급 → 신청 → 신원 확인"
      }
    ],
    "answer": 3,
    "explanation": "신원을 확인한 뒤 인증기관이 인증서에 서명한다. 사용자 개인키는 제출하지 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q519",
    "partId": 6,
    "sectionId": 37,
    "sectionTitle": "침해사고대응(디지털 포렌식)",
    "sourceSection": "SECTION 07 침해사고대응(디지털 포렌식)",
    "question": "디지털 증거 분석의 기본 원칙을 따르는 것은?",
    "options": [
      {
        "number": 1,
        "text": "원본을 보호하고 분석용 복제본의 무결성을 확인한다."
      },
      {
        "number": 2,
        "text": "원본을 자유롭게 수정한다."
      },
      {
        "number": 3,
        "text": "분석자에게 따라 결과가 달라도 재검증하지 않는다."
      },
      {
        "number": 4,
        "text": "수집 방법을 기록하지 않는다."
      }
    ],
    "answer": 1,
    "explanation": "원본 보존, 무결성 검증, 절차 기록은 재현 가능한 분석을 뒷받침한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q520",
    "partId": 6,
    "sectionId": 37,
    "sectionTitle": "침해사고대응(디지털 포렌식)",
    "sourceSection": "SECTION 07 침해사고대응(디지털 포렌식)",
    "question": "사고 대응 절차의 일반적인 흐름은?",
    "options": [
      {
        "number": 1,
        "text": "사후 검토 → 탐지 → 대응 종료 → 준비"
      },
      {
        "number": 2,
        "text": "복구부터 한 뒤 아무 기록도 남기지 않는다."
      },
      {
        "number": 3,
        "text": "준비 → 탐지·분석 → 억제·제거·복구 → 사후 검토"
      },
      {
        "number": 4,
        "text": "정상 서비스 중단 → 장비 폐기 → 로그 삭제"
      }
    ],
    "answer": 3,
    "explanation": "사전에 준비하고 사고를 분석한 뒤 피해를 억제하고 복구한다. 사후에는 대응을 평가한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q521",
    "partId": 6,
    "sectionId": 37,
    "sectionTitle": "침해사고대응(디지털 포렌식)",
    "sourceSection": "SECTION 07 침해사고대응(디지털 포렌식)",
    "question": "포렌식 담당자가 장치와 상태를 기록하고 디스크의 분석용 이미지를 획득한다. 해당 단계는?",
    "options": [
      {
        "number": 1,
        "text": "증거 수집"
      },
      {
        "number": 2,
        "text": "판결"
      },
      {
        "number": 3,
        "text": "파기"
      },
      {
        "number": 4,
        "text": "최종 보고"
      }
    ],
    "answer": 1,
    "explanation": "증거 수집 단계는 대상을 확보하고 원본과 수집 과정을 보존한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q522",
    "partId": 6,
    "sectionId": 37,
    "sectionTitle": "침해사고대응(디지털 포렌식)",
    "sourceSection": "SECTION 07 침해사고대응(디지털 포렌식)",
    "question": "디지털 증거에 관한 옳은 설명은?",
    "options": [
      {
        "number": 1,
        "text": "원본을 바꿔도 무결성에 영향이 없다."
      },
      {
        "number": 2,
        "text": "정확하게 복제하면 매체가 달라도 데이터 내용은 동일할 수 있다."
      },
      {
        "number": 3,
        "text": "수집 환경을 기록할 필요가 없다."
      },
      {
        "number": 4,
        "text": "복제본은 항상 원본과 다른 비트열이다."
      }
    ],
    "answer": 2,
    "explanation": "정확한 복제로 동일한 비트열을 얻을 수 있다. 비교 검증과 절차 기록은 여전히 중요하다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q523",
    "partId": 6,
    "sectionId": 37,
    "sectionTitle": "침해사고대응(디지털 포렌식)",
    "sourceSection": "SECTION 07 침해사고대응(디지털 포렌식)",
    "question": "조직에서 침해 신고를 접수하고 분석·대응을 조율하는 전담팀은?",
    "options": [
      {
        "number": 1,
        "text": "협력업체 결제망"
      },
      {
        "number": 2,
        "text": "CERT 또는 CSIRT"
      },
      {
        "number": 3,
        "text": "DNS 리졸버"
      },
      {
        "number": 4,
        "text": "인증서 저장소"
      }
    ],
    "answer": 2,
    "explanation": "CERT나 CSIRT는 침해사고의 접수, 분석, 대응 지원 등을 담당한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q524",
    "partId": 6,
    "sectionId": 37,
    "sectionTitle": "침해사고대응(디지털 포렌식)",
    "sourceSection": "SECTION 07 침해사고대응(디지털 포렌식)",
    "question": "데이터 반출 전에 매체를 안전하게 폐기하려 한다. 일반 파일 삭제만으로 부족한 이유는?",
    "options": [
      {
        "number": 1,
        "text": "모든 비트가 반드시 영구적으로 제거되기 때문이다."
      },
      {
        "number": 2,
        "text": "파일 이름을 지우는 순간 모든 백업도 함께 지워진다."
      },
      {
        "number": 3,
        "text": "디스크를 삭제하면 암호화가 자동으로 시작된다."
      },
      {
        "number": 4,
        "text": "일반 삭제는 파일 참조만 제거할 수 있어 매체 유형에 맞는 검증된 삭제·파기 절차가 필요하다."
      }
    ],
    "answer": 4,
    "explanation": "매체마다 알맞은 완전 삭제 방식이 다르다. 일반 삭제는 복구 가능성을 없애지 못할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q525",
    "partId": 6,
    "sectionId": 37,
    "sectionTitle": "침해사고대응(디지털 포렌식)",
    "sourceSection": "SECTION 07 침해사고대응(디지털 포렌식)",
    "question": "파일에 4,096바이트가 할당됐는데 파일 데이터는 그보다 적다. 마지막 할당 단위에서 파일 끝 뒤의 남은 영역은?",
    "options": [
      {
        "number": 1,
        "text": "부트 레코드"
      },
      {
        "number": 2,
        "text": "파일의 정상 본문"
      },
      {
        "number": 3,
        "text": "파일 슬랙"
      },
      {
        "number": 4,
        "text": "빈 파일의 첫 바이트"
      }
    ],
    "answer": 3,
    "explanation": "파일 슬랙은 파일 끝과 그 파일에 할당된 마지막 공간의 끝 사이에 있는 영역이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q526",
    "partId": 6,
    "sectionId": 38,
    "sectionTitle": "각종 애플리케이션 보안위협 및 대책",
    "sourceSection": "SECTION 08 각종 애플리케이션 보안위협 및 대응책",
    "question": "관제팀이 여러 감염 PC에서 공통 제어 인프라와 통신하는 패턴을 발견했다. 이 감염 장치 집단은?",
    "options": [
      {
        "number": 1,
        "text": "정상 백업 클러스터"
      },
      {
        "number": 2,
        "text": "봇넷"
      },
      {
        "number": 3,
        "text": "브로드캐스트 도메인"
      },
      {
        "number": 4,
        "text": "파일 공유"
      }
    ],
    "answer": 2,
    "explanation": "봇넷은 감염 장치의 집합으로 공통된 제어 아래 움직일 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q527",
    "partId": 6,
    "sectionId": 38,
    "sectionTitle": "각종 애플리케이션 보안위협 및 대책",
    "sourceSection": "SECTION 08 각종 애플리케이션 보안위협 및 대응책",
    "question": "회계 감사에서 고객 개개인은 알아차리기 어려운 아주 작은 금액이 수많은 거래에서 반복적으로 빠져나갔다. 전통적인 분류는?",
    "options": [
      {
        "number": 1,
        "text": "서비스 거부"
      },
      {
        "number": 2,
        "text": "DNS 반사"
      },
      {
        "number": 3,
        "text": "살라미 기법"
      },
      {
        "number": 4,
        "text": "디지털 워터마킹"
      }
    ],
    "answer": 3,
    "explanation": "살라미 기법은 한 건당 작은 금액의 이상이 여러 건 누적되는 유형의 사기다.",
    "reviewStatus": "not_fact_checked"
  }
];
