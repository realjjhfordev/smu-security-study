// Selected source questions. Original IDs and 1-based answer numbers are preserved.
// Content/answer facts have not been independently verified.
export type Question = {id:string;partId:number;sectionId:number;sectionTitle:string;sourceSection:string;question:string;options:{number:number;text:string}[];answer:number;explanation:string;reviewStatus:string};
export const questions: Question[] = [
  {
    "id": "Q001",
    "partId": 1,
    "sectionId": 1,
    "sectionTitle": "정보보호관리의 개념",
    "sourceSection": "SECTION 01 정보보호관리의 개념",
    "question": "공격자가 두 지점 사이의 암호화된 통신을 관찰했다. 메시지 내용을 해독하지 못했지만, 송수신 주소와 전송 시각을 조사하여 누가 언제 통신했는지 추정했다. 이 공격 기법은 무엇인가?",
    "options": [
      {
        "number": 1,
        "text": "재생 공격"
      },
      {
        "number": 2,
        "text": "메시지 변조"
      },
      {
        "number": 3,
        "text": "삭제 공격"
      },
      {
        "number": 4,
        "text": "트래픽 분석"
      }
    ],
    "answer": 4,
    "explanation": "트래픽 분석은 송수신 주소, 통신 빈도, 전송량 등 통신의 외부 특성을 관찰하여 정보를 얻는 수동적 공격이다. 메시지 본문이 암호화되어 있어도 이러한 특성이 드러나면 통신 주체나 활동 양상을 추정할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q003",
    "partId": 1,
    "sectionId": 1,
    "sectionTitle": "정보보호관리의 개념",
    "sourceSection": "SECTION 01 정보보호관리의 개념",
    "question": "다음 요구사항에 해당하는 보안 서비스를 ㄱ, ㄴ, ㄷ 순서로 바르게 나열한 것은?\n\nㄱ. 권한이 없는 제3자가 메시지 내용을 읽을 수 없어야 한다.\nㄴ. 수신자는 메시지가 전송 중 변경되었는지 확인할 수 있어야 한다.\nㄷ. 수신자는 메시지를 보낸 사람이 실제로 해당 발신자인지 확인할 수 있어야 한다.",
    "options": [
      {
        "number": 1,
        "text": "기밀성 → 인증 → 무결성"
      },
      {
        "number": 2,
        "text": "기밀성 → 무결성 → 인증"
      },
      {
        "number": 3,
        "text": "무결성 → 기밀성 → 인증"
      },
      {
        "number": 4,
        "text": "인증 → 무결성 → 기밀성"
      }
    ],
    "answer": 2,
    "explanation": "ㄱ은 메시지 내용의 노출을 막는 **기밀성**, ㄴ은 메시지의 변경 여부를 확인하는 **무결성**, ㄷ은 메시지의 출처를 확인하는 **발신자 인증**에 해당한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q004",
    "partId": 1,
    "sectionId": 1,
    "sectionTitle": "정보보호관리의 개념",
    "sourceSection": "SECTION 01 정보보호관리의 개념",
    "question": "다음 중 수동적 공격에 해당하는 행위는?",
    "options": [
      {
        "number": 1,
        "text": "전송 중인 주문서의 수량을 바꾼다."
      },
      {
        "number": 2,
        "text": "거래처를 사칭해 위조한 주문서를 전송한다."
      },
      {
        "number": 3,
        "text": "주문서가 수신자에게 도달하기 전에 삭제한다."
      },
      {
        "number": 4,
        "text": "통신망에서 전송 중인 주문서를 몰래 복사해 읽는다."
      }
    ],
    "answer": 4,
    "explanation": "④는 주문서의 내용이나 전달 과정에 영향을 주지 않고 정보를 얻는 **도청**이다. ①은 메시지 변조, ②는 위조 메시지 삽입, ③은 메시지 삭제이므로 모두 능동적 공격이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q005",
    "partId": 1,
    "sectionId": 1,
    "sectionTitle": "정보보호관리의 개념",
    "sourceSection": "SECTION 01 정보보호관리의 개념",
    "question": "보안 담당자가 고객 정보 유출 사고의 발생 가능성과 사고 발생 시 예상되는 손실 규모를 함께 고려했다. 두 요소를 바탕으로 평가하는 정보보호 관리 개념은 무엇인가?",
    "options": [
      {
        "number": 1,
        "text": "위협"
      },
      {
        "number": 2,
        "text": "통제"
      },
      {
        "number": 3,
        "text": "위험"
      },
      {
        "number": 4,
        "text": "취약점"
      }
    ],
    "answer": 3,
    "explanation": "**위험**의 수준은 사고의 발생 가능성과 그 영향을 함께 고려해 평가한다. 위협은 피해를 일으킬 수 있는 잠재적 원인, 취약점은 위협에 악용될 수 있는 약점, 통제는 위험을 관리하기 위한 조치다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q007",
    "partId": 2,
    "sectionId": 2,
    "sectionTitle": "암호학 개요",
    "sourceSection": "SECTION 01 암호학 개요",
    "question": "암호시스템의 용어와 그 설명을 연결한 것 중 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "암호화 — 암호화키를 사용해 평문을 암호문으로 변환하는 과정"
      },
      {
        "number": 2,
        "text": "도청 — 권한이 없는 자가 통신 내용을 몰래 수집하는 행위"
      },
      {
        "number": 3,
        "text": "키 — 암호화 또는 복호화 연산에 사용하는 매개변수"
      },
      {
        "number": 4,
        "text": "암호 해독 — 수신자가 정해진 복호화키를 사용해 암호문을 원래 평문으로 복원하는 과정"
      }
    ],
    "answer": 4,
    "explanation": "④에서 수신자가 수행한 작업은 **복호화**이다. 암호 해독은 복호화키를 모르는 상태에서 암호문을 분석해 평문이나 키를 알아내려는 작업이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q010",
    "partId": 2,
    "sectionId": 2,
    "sectionTitle": "암호학 개요",
    "sourceSection": "SECTION 01 암호학 개요",
    "question": "평문을 P, 암호문을 C, 키스트림을 S라고 한다. 비트 단위로 배타적 논리합(⊕)을 사용하는 스트림 암호에서 암호화식과 복호화식을 순서대로 바르게 짝지은 것은?",
    "options": [
      {
        "number": 1,
        "text": "C = P ⊕ S, P = C AND S"
      },
      {
        "number": 2,
        "text": "C = P OR S, P = C ⊕ S"
      },
      {
        "number": 3,
        "text": "C = P ⊕ S, P = C ⊕ S"
      },
      {
        "number": 4,
        "text": "C = P AND S, P = C OR S"
      }
    ],
    "answer": 3,
    "explanation": "암호화할 때 평문과 키스트림을 XOR하고, 복호화할 때 암호문과 동일한 키스트림을 다시 XOR한다. 각 비트에서 S ⊕ S = 0이므로 (P ⊕ S) ⊕ S = P가 성립한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q012",
    "partId": 2,
    "sectionId": 2,
    "sectionTitle": "암호학 개요",
    "sourceSection": "SECTION 01 암호학 개요",
    "question": "정보보호 서비스와 이를 제공하는 수단의 연결로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "부인방지 — 파일 읽기 권한 설정"
      },
      {
        "number": 2,
        "text": "기밀성 — 비밀키를 이용한 데이터 암호화"
      },
      {
        "number": 3,
        "text": "무결성 확인 — 신뢰할 수 있는 원본 해시값과의 비교"
      },
      {
        "number": 4,
        "text": "메시지 인증 — 공유 비밀키로 생성한 메시지 인증 코드(MAC) 검증"
      }
    ],
    "answer": 1,
    "explanation": "읽기 권한은 파일을 열람할 수 있는 사용자를 제한한다. 발신자가 특정 메시지에 서명했다는 사실을 사후에 검증하여 부인을 방지하는 대표적인 수단은 **전자서명**이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q013",
    "partId": 2,
    "sectionId": 2,
    "sectionTitle": "암호학 개요",
    "sourceSection": "SECTION 01 암호학 개요",
    "question": "대칭키 방식과 비교한 비대칭키 방식의 장점에 **해당하지 않는 것**은?",
    "options": [
      {
        "number": 1,
        "text": "수신자의 공개키를 이용하면 송수신자가 비밀키를 미리 공유하지 않아도 암호문을 보낼 수 있다."
      },
      {
        "number": 2,
        "text": "대용량 데이터를 직접 암호화할 때 일반적으로 대칭키 방식보다 처리 속도가 빠르다."
      },
      {
        "number": 3,
        "text": "개인키로 전자서명을 생성하고 대응하는 공개키로 검증할 수 있다."
      },
      {
        "number": 4,
        "text": "통신 상대마다 별도의 장기 비밀키를 미리 공유해야 하는 부담을 줄일 수 있다."
      }
    ],
    "answer": 2,
    "explanation": "대용량 데이터의 암호화는 일반적으로 대칭키 방식이 더 빠르다. 두 방식의 장점을 결합한 시스템에서는 공개키 기술로 세션 키를 설정하고, 대칭키 암호로 본문을 처리한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q014",
    "partId": 2,
    "sectionId": 2,
    "sectionTitle": "암호학 개요",
    "sourceSection": "SECTION 01 암호학 개요",
    "question": "케르크호프스의 원리에 따라 암호시스템의 안전성을 평가할 때, 공격자가 **이미 알고 있다고 가정하는 정보**는?",
    "options": [
      {
        "number": 1,
        "text": "암호화에 사용한 비밀키의 실제 값"
      },
      {
        "number": 2,
        "text": "공격 대상 암호문에 대응하는 평문 전체"
      },
      {
        "number": 3,
        "text": "암호 알고리즘의 구조와 동작 절차"
      },
      {
        "number": 4,
        "text": "다음 통신에 사용할 비밀 세션 키의 실제 값"
      }
    ],
    "answer": 3,
    "explanation": "케르크호프스의 원리는 알고리즘의 설계와 절차가 공개되어도 비밀키가 보호되는 한 암호시스템이 안전해야 한다는 원리이다. 따라서 공격자가 알고리즘의 구조를 파악하는 일은 이 가정에서 별도의 해독 목표가 되지 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q015",
    "partId": 2,
    "sectionId": 2,
    "sectionTitle": "암호학 개요",
    "sourceSection": "SECTION 01 암호학 개요",
    "question": "공격자가 이전에 전송된 문서 몇 건의 평문과 각각에 대응하는 암호문을 확보했다. 추가로 암호화나 복호화를 요청할 수 없는 상태에서, 확보한 쌍을 이용해 비밀키를 추정한다. 이 공격 유형은?",
    "options": [
      {
        "number": 1,
        "text": "기지 평문 공격"
      },
      {
        "number": 2,
        "text": "선택 암호문 공격"
      },
      {
        "number": 3,
        "text": "암호문 단독 공격"
      },
      {
        "number": 4,
        "text": "선택 평문 공격"
      }
    ],
    "answer": 1,
    "explanation": "**기지 평문 공격**은 이미 알려진 평문과 그에 대응하는 암호문 쌍을 이용한다. 선택 평문 공격에서는 공격자가 분석할 평문을 직접 정하고 그 암호화 결과를 얻을 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q019",
    "partId": 2,
    "sectionId": 2,
    "sectionTitle": "암호학 개요",
    "sourceSection": "SECTION 01 암호학 개요",
    "question": "송신자가 사진 픽셀의 최하위 비트(LSB)에 비밀 메시지를 나누어 넣었다. 제3자가 사진을 보더라도 별도의 메시지가 전달되고 있다는 사실을 눈치채기 어렵게 하는 것이 목적이다. 이 기술은?",
    "options": [
      {
        "number": 1,
        "text": "디지털 핑거프린팅"
      },
      {
        "number": 2,
        "text": "전자서명"
      },
      {
        "number": 3,
        "text": "일방향 해시"
      },
      {
        "number": 4,
        "text": "스테가노그래피"
      }
    ],
    "answer": 4,
    "explanation": "**스테가노그래피**는 사진이나 음성 같은 매체에 비밀 메시지를 숨겨 그 존재 자체를 감추는 기술이다. 픽셀의 최하위 비트를 바꾸면 색상 변화가 작아 육안으로 알아차리기 어렵다는 점을 활용할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q024",
    "partId": 2,
    "sectionId": 2,
    "sectionTitle": "암호학 개요",
    "sourceSection": "SECTION 01 암호학 개요",
    "question": "디지털 콘텐츠의 불법 유통을 추적하기 위해 사용하는 **핑거프린팅**의 원리를 바르게 설명한 것은?",
    "options": [
      {
        "number": 1,
        "text": "모든 배포본에 동일한 저작권자 표식을 넣어 권리자를 표시한다."
      },
      {
        "number": 2,
        "text": "구매자마다 다른 식별 코드를 배포본에 넣고, 유출본에서 코드를 추출해 어느 구매자에게 제공한 사본인지 확인한다."
      },
      {
        "number": 3,
        "text": "이용 허가에 정해진 재생 횟수를 초과하면 콘텐츠 실행을 차단한다."
      },
      {
        "number": 4,
        "text": "원본 파일의 해시값을 보관하고 배포본의 해시값과 비교해 파일 변경 여부를 확인한다."
      }
    ],
    "answer": 2,
    "explanation": "유통 추적용 **디지털 핑거프린팅**은 배포본마다 서로 다른 식별 정보를 삽입한다. 유출본에서 이 정보를 읽으면 해당 사본의 배포 경로를 추적할 수 있다. ①처럼 모든 사본에 동일한 표식을 넣으면 저작권자는 표시할 수 있지만 구매자별 사본은 구별할 수 없다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q026",
    "partId": 2,
    "sectionId": 3,
    "sectionTitle": "대칭키 암호",
    "sourceSection": "SECTION 02 대칭키 암호",
    "question": "블록 암호를 설계할 때 평문 한 비트의 영향이 암호문의 여러 비트에 퍼지도록 하여 평문의 통계적 특성을 감춘다. 섀넌이 제시한 암호 설계 원리 중 이에 해당하는 것은?",
    "options": [
      {
        "number": 1,
        "text": "혼돈(Confusion)"
      },
      {
        "number": 2,
        "text": "선형 분석(Linear cryptanalysis)"
      },
      {
        "number": 3,
        "text": "확산(Diffusion)"
      },
      {
        "number": 4,
        "text": "차분 분석(Differential cryptanalysis)"
      }
    ],
    "answer": 3,
    "explanation": "**확산**은 평문 각 부분의 영향을 암호문 전반에 분산시켜 평문에 나타난 통계적 패턴을 파악하기 어렵게 한다. **혼돈**은 키와 암호문 사이의 관계를 복잡하게 만드는 원리이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q027",
    "partId": 2,
    "sectionId": 3,
    "sectionTitle": "대칭키 암호",
    "sourceSection": "SECTION 02 대칭키 암호",
    "question": "국내에서 개발된 블록 암호 중 한 번에 128비트 블록을 처리하고, 비밀키 길이를 128·192·256비트 중에서 선택할 수 있는 알고리즘은?",
    "options": [
      {
        "number": 1,
        "text": "ARIA"
      },
      {
        "number": 2,
        "text": "HIGHT"
      },
      {
        "number": 3,
        "text": "SEED-128"
      },
      {
        "number": 4,
        "text": "TDEA"
      }
    ],
    "answer": 1,
    "explanation": "**ARIA**는 세 가지 키 길이를 지원하며, 어느 키 길이를 사용해도 블록 크기는 128비트이다. SEED-128도 128비트 블록을 처리하지만 키 길이가 128비트로 고정된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q028",
    "partId": 2,
    "sectionId": 3,
    "sectionTitle": "대칭키 암호",
    "sourceSection": "SECTION 02 대칭키 암호",
    "question": "다음 설명에 해당하는 블록 암호를 ㄱ, ㄴ, ㄷ 순서로 바르게 나열한 것은?\n\nㄱ. DES를 대체하기 위해 미국 연방 표준 FIPS 197로 채택되었다.\nㄴ. 국내 전자상거래 등 민간 분야의 정보 보호를 위해 1999년 한국정보보호진흥원과 국내 암호 전문가들이 개발했다.\nㄷ. 국가보안기술연구소 주도로 학계·연구소·정부기관이 공동 개발했으며 128·192·256비트 키를 지원한다.",
    "options": [
      {
        "number": 1,
        "text": "SEED → AES → ARIA"
      },
      {
        "number": 2,
        "text": "ARIA → SEED → AES"
      },
      {
        "number": 3,
        "text": "AES → ARIA → SEED"
      },
      {
        "number": 4,
        "text": "AES → SEED → ARIA"
      }
    ],
    "answer": 4,
    "explanation": "ㄱ은 미국 표준으로 채택된 **AES**, ㄴ은 국내 민간 분야를 위해 개발된 **SEED**, ㄷ은 학계·연구소·정부기관이 공동 개발한 **ARIA**이다. AES와 ARIA는 블록 크기와 지원하는 키 길이가 같으므로 개발 배경으로 구별할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q029",
    "partId": 2,
    "sectionId": 3,
    "sectionTitle": "대칭키 암호",
    "sourceSection": "SECTION 02 대칭키 암호",
    "question": "AES에서 256비트 키로 평문 한 블록을 암호화할 때 수행하는 라운드 수는?",
    "options": [
      {
        "number": 1,
        "text": "12라운드"
      },
      {
        "number": 2,
        "text": "14라운드"
      },
      {
        "number": 3,
        "text": "16라운드"
      },
      {
        "number": 4,
        "text": "10라운드"
      }
    ],
    "answer": 2,
    "explanation": "AES의 라운드 수는 키 길이가 128비트이면 10회, 192비트이면 12회, 256비트이면 **14회**이다. 첫 라운드 전에 수행하는 초기 라운드 키 덧셈(AddRoundKey)은 이 횟수에 포함하지 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q031",
    "partId": 2,
    "sectionId": 3,
    "sectionTitle": "대칭키 암호",
    "sourceSection": "SECTION 02 대칭키 암호",
    "question": "다음 중 왼쪽에는 대칭키 암호만, 오른쪽에는 비대칭키 암호만 나열한 것은?",
    "options": [
      {
        "number": 1,
        "text": "AES·SEED·IDEA / RSA·ECC·Rabin"
      },
      {
        "number": 2,
        "text": "AES·SEED·Rabin / RSA·ECC·IDEA"
      },
      {
        "number": 3,
        "text": "AES·ECC·IDEA / RSA·SEED·Rabin"
      },
      {
        "number": 4,
        "text": "AES·RSA·IDEA / SEED·ECC·Rabin"
      }
    ],
    "answer": 1,
    "explanation": "**AES·SEED·IDEA**는 송수신자가 비밀키를 공유하는 대칭키 블록 암호이다. **RSA·ECC·Rabin**은 공개키와 개인키의 쌍을 사용하는 비대칭키 암호 방식에 속한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q033",
    "partId": 2,
    "sectionId": 3,
    "sectionTitle": "대칭키 암호",
    "sourceSection": "SECTION 02 대칭키 암호",
    "question": "같은 키로 각 평문 블록을 독립적으로 암호화한다. 그 결과 첫 번째와 다섯 번째 평문 블록의 값이 같으면 두 위치의 암호문 블록도 항상 같다. 이 운용 모드는?",
    "options": [
      {
        "number": 1,
        "text": "CBC"
      },
      {
        "number": 2,
        "text": "OFB"
      },
      {
        "number": 3,
        "text": "ECB"
      },
      {
        "number": 4,
        "text": "CFB"
      }
    ],
    "answer": 3,
    "explanation": "**ECB**는 평문 블록마다 같은 키로 같은 암호화 함수를 적용한다. 블록의 위치나 앞선 암호문이 결과에 영향을 주지 않으므로, 평문에서 어느 블록이 반복되는지 암호문에도 드러난다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q039",
    "partId": 2,
    "sectionId": 3,
    "sectionTitle": "대칭키 암호",
    "sourceSection": "SECTION 02 대칭키 암호",
    "question": "블록 암호의 CTR(카운터) 모드에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "카운터 블록을 암호화하여 키스트림을 생성한다."
      },
      {
        "number": 2,
        "text": "키스트림과 평문을 XOR하여 암호문을 얻는다."
      },
      {
        "number": 3,
        "text": "각 블록에 사용할 키스트림을 병렬로 계산할 수 있다."
      },
      {
        "number": 4,
        "text": "다음 키스트림 블록을 만들려면 직전 암호문 블록을 입력해야 한다."
      }
    ],
    "answer": 4,
    "explanation": "**CTR**은 각 위치에 대응하는 카운터 블록을 암호화한다. 직전 암호문을 다음 입력으로 사용하는 피드백 과정이 없어 여러 위치의 키스트림을 동시에 계산할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q041",
    "partId": 2,
    "sectionId": 3,
    "sectionTitle": "대칭키 암호",
    "sourceSection": "SECTION 02 대칭키 암호",
    "question": "블록 암호의 출력에서 얻은 키스트림을 평문과 XOR하여 스트림 암호처럼 동작하는 운용 모드로만 묶인 것은?",
    "options": [
      {
        "number": 1,
        "text": "CBC·CFB·CTR"
      },
      {
        "number": 2,
        "text": "CFB·OFB·CTR"
      },
      {
        "number": 3,
        "text": "ECB·OFB·CTR"
      },
      {
        "number": 4,
        "text": "ECB·CBC·CFB"
      }
    ],
    "answer": 2,
    "explanation": "**CFB·OFB·CTR**은 모두 블록 암호의 출력에서 얻은 값과 평문을 XOR한다. CFB는 암호문을, OFB는 블록 암호의 출력을 다음 단계에 되먹임한다. CTR은 각 위치의 카운터 블록을 암호화한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q042",
    "partId": 2,
    "sectionId": 4,
    "sectionTitle": "비대칭키 암호",
    "sourceSection": "SECTION 03 비대칭키 암호",
    "question": "다음 중 공개키 기술을 사용해야 한다는 주장이 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "수신자의 공개키로 세션키를 암호화해 전달하려면 공개키 암호가 필요하다."
      },
      {
        "number": 2,
        "text": "신뢰할 수 있는 원본 해시값을 이미 보유한 경우에도 파일의 변경 여부를 확인하려면 반드시 공개키가 필요하다."
      },
      {
        "number": 3,
        "text": "발신자의 전자서명을 검증해 문서의 출처를 확인하려면 발신자의 공개키가 필요하다."
      },
      {
        "number": 4,
        "text": "제3자가 서명자의 전자서명을 검증해 부인방지의 근거로 삼으려면 서명자의 공개키가 필요하다."
      }
    ],
    "answer": 2,
    "explanation": "신뢰할 수 있는 원본 해시값이 있으면 수신한 파일의 해시값을 다시 계산해 비교하는 방법으로 무결성을 확인할 수 있다. 전자서명도 무결성 검증을 지원하지만, 이 사례에서는 공개키가 필수 조건이 아니다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q043",
    "partId": 2,
    "sectionId": 4,
    "sectionTitle": "비대칭키 암호",
    "sourceSection": "SECTION 03 비대칭키 암호",
    "question": "다음 중 통신 당사자가 사용할 세션키를 도청자에게 노출하지 않고 분배하거나 합의하는 방법으로 **부적절한 것**은?",
    "options": [
      {
        "number": 1,
        "text": "인증된 Diffie–Hellman 키 교환으로 공유 비밀을 구하고 세션키를 도출한다."
      },
      {
        "number": 2,
        "text": "키 분배 센터가 각 사용자와 공유한 장기 비밀키로 세션키를 보호해 전달한다."
      },
      {
        "number": 3,
        "text": "수신자의 공개키를 확인한 뒤 그 키로 세션키를 암호화해 전달한다."
      },
      {
        "number": 4,
        "text": "세션키에 전자서명을 첨부한 뒤 세션키 값을 평문으로 전송한다."
      }
    ],
    "answer": 4,
    "explanation": "전자서명으로 세션키의 출처와 변경 여부를 확인할 수 있어도, 평문으로 전송한 키 값은 도청자도 읽을 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q044",
    "partId": 2,
    "sectionId": 4,
    "sectionTitle": "비대칭키 암호",
    "sourceSection": "SECTION 03 비대칭키 암호",
    "question": "각 사용자가 키 분배 센터(KDC)와 장기 대칭키를 하나씩 공유한다. 이 방식의 세션키 분배 절차에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "KDC는 세션키를 전달할 때 반드시 각 사용자의 공개키로 암호화해야 한다."
      },
      {
        "number": 2,
        "text": "KDC는 통신 요청에 따라 두 사용자가 사용할 세션키를 생성할 수 있다."
      },
      {
        "number": 3,
        "text": "두 사용자는 서로 간에 장기 비밀키를 미리 공유할 필요가 없다."
      },
      {
        "number": 4,
        "text": "KDC는 사용자마다 해당 사용자와 공유한 장기 대칭키로 세션키를 보호할 수 있다."
      }
    ],
    "answer": 1,
    "explanation": "이 방식에서 KDC는 같은 세션키를 A에게는 A와 공유한 장기키로, B에게는 B와 공유한 장기키로 암호화해 제공할 수 있다. 사용자별 공개키는 필요하지 않다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q045",
    "partId": 2,
    "sectionId": 4,
    "sectionTitle": "비대칭키 암호",
    "sourceSection": "SECTION 03 비대칭키 암호",
    "question": "송신자가 수신자에게 기밀 메시지를 보낸다. 공개키 암호에서 **송신자의 암호화키와 수신자의 복호화키**를 순서대로 바르게 연결한 것은?",
    "options": [
      {
        "number": 1,
        "text": "송신자의 공개키 → 수신자의 개인키"
      },
      {
        "number": 2,
        "text": "송신자의 개인키 → 송신자의 공개키"
      },
      {
        "number": 3,
        "text": "수신자의 공개키 → 수신자의 개인키"
      },
      {
        "number": 4,
        "text": "수신자의 공개키 → 송신자의 개인키"
      }
    ],
    "answer": 3,
    "explanation": "송신자는 수신자의 공개키로 메시지를 암호화한다. 이 공개키에 대응하는 개인키는 수신자가 보관하며, 수신자는 그 개인키로 암호문을 복호화한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q047",
    "partId": 2,
    "sectionId": 4,
    "sectionTitle": "비대칭키 암호",
    "sourceSection": "SECTION 03 비대칭키 암호",
    "question": "전자서명 등 별도의 인증 수단을 결합하지 않은 기본 Diffie–Hellman 키 교환에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "두 참여자는 각자의 비밀값과 상대가 보낸 공개값으로 같은 공유 비밀을 계산할 수 있다."
      },
      {
        "number": 2,
        "text": "교환한 공개값만으로 그 값을 보낸 상대의 신원까지 검증할 수 있다."
      },
      {
        "number": 3,
        "text": "두 참여자가 계산한 공유 비밀 자체를 통신망으로 전송할 필요가 없다."
      },
      {
        "number": 4,
        "text": "공격자가 양측의 공개값을 바꿔치기하면 중간자 공격이 가능하다."
      }
    ],
    "answer": 2,
    "explanation": "기본 Diffie–Hellman에는 공개값을 상대의 신원과 연결해 검증하는 절차가 없다. 공격자가 공개값을 바꿔치기하면 양측은 각각 공격자와 공유 비밀을 계산할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q051",
    "partId": 2,
    "sectionId": 4,
    "sectionTitle": "비대칭키 암호",
    "sourceSection": "SECTION 03 비대칭키 암호",
    "question": "B가 세션키를 생성한 뒤 RSA를 이용해 A에게 안전하게 전달하려 한다. 다음 설명 중 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "B는 사용할 RSA 공개키가 실제로 A의 것인지 확인한다."
      },
      {
        "number": 2,
        "text": "B는 A의 공개키로 세션키를 암호화한다."
      },
      {
        "number": 3,
        "text": "A는 자신의 RSA 개인키를 B에게 전달할 필요가 없다."
      },
      {
        "number": 4,
        "text": "A는 B의 공개키로 암호문을 복호화해 세션키를 얻는다."
      }
    ],
    "answer": 4,
    "explanation": "세션키를 암호화하는 데 사용한 키는 A의 공개키이므로 복호화에는 **A의 개인키**가 필요하다. 세션키를 생성한 사람이 B라는 사실은 복호화키의 소유자를 결정하지 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q055",
    "partId": 2,
    "sectionId": 4,
    "sectionTitle": "비대칭키 암호",
    "sourceSection": "SECTION 03 비대칭키 암호",
    "question": "A가 B에게 평문 M을 비밀리에 보내려 한다. E(K, M)은 키 K로 M을 암호화하는 연산이고, D(K, C)는 키 K로 암호문 C를 복호화하는 연산이다. 두 연산을 바르게 짝지은 것은?",
    "options": [
      {
        "number": 1,
        "text": "C = E(B의 공개키, M), M = D(B의 개인키, C)"
      },
      {
        "number": 2,
        "text": "C = E(A의 공개키, M), M = D(B의 개인키, C)"
      },
      {
        "number": 3,
        "text": "C = E(B의 공개키, M), M = D(A의 개인키, C)"
      },
      {
        "number": 4,
        "text": "C = E(A의 공개키, M), M = D(A의 개인키, C)"
      }
    ],
    "answer": 1,
    "explanation": "B가 복호화할 수 있도록 두 식 모두 **B의 키 쌍**을 사용해야 한다. ④는 암호화키와 복호화키가 서로 대응하지만, 암호문을 열 수 있는 개인키의 소유자가 A이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q056",
    "partId": 2,
    "sectionId": 4,
    "sectionTitle": "비대칭키 암호",
    "sourceSection": "SECTION 03 비대칭키 암호",
    "question": "RSA 계산 예제에서 공개키 (e, n)은 (7, 33), 개인키 (d, n)은 (3, 33)이다. 수신한 암호문 C가 3일 때, 복호화한 평문 정수 M은?",
    "options": [
      {
        "number": 1,
        "text": "3"
      },
      {
        "number": 2,
        "text": "9"
      },
      {
        "number": 3,
        "text": "27"
      },
      {
        "number": 4,
        "text": "21"
      }
    ],
    "answer": 3,
    "explanation": "복호화식은 **M = Cᵈ mod n**이다. 암호문 3에 개인 지수 3을 적용하면 3³ = 27이다. 27은 33보다 작으므로 나머지도 27이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q058",
    "partId": 2,
    "sectionId": 4,
    "sectionTitle": "비대칭키 암호",
    "sourceSection": "SECTION 03 비대칭키 암호",
    "question": "공개키 기법과 그 기법에 관련된 대표적인 수학 문제를 연결한 것 중 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "RSA — 큰 합성수의 소인수분해 문제"
      },
      {
        "number": 2,
        "text": "ElGamal 암호 — 이산로그 계열 문제"
      },
      {
        "number": 3,
        "text": "Diffie–Hellman 키 교환 — 두 공개값으로부터 공유 비밀을 계산하는 문제"
      },
      {
        "number": 4,
        "text": "DSA 전자서명 — 큰 합성수의 소인수분해 문제"
      }
    ],
    "answer": 4,
    "explanation": "**DSA**에서 공개값은 비밀 지수 x를 사용해 y = gˣ mod p로 계산한다. 공개값 y로부터 x를 구하는 문제는 **이산로그 문제**이다. RSA에서는 공개 모듈러스 n을 소인수분해할 수 있으면 개인 지수를 구할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q060",
    "partId": 2,
    "sectionId": 4,
    "sectionTitle": "비대칭키 암호",
    "sourceSection": "SECTION 03 비대칭키 암호",
    "question": "다음 두 절차에서 의도한 보안 기능을 ㄱ, ㄴ 순서로 바르게 연결한 것은?\n\nㄱ. 제3자가 계약 내용을 읽지 못하도록 수신자의 공개키로 계약서를 암호화한다.\nㄴ. 발신자가 나중에 계약서에 서명한 사실을 부인할 경우에 대비해 발신자의 전자서명을 보관한다.",
    "options": [
      {
        "number": 1,
        "text": "무결성 → 기밀성"
      },
      {
        "number": 2,
        "text": "기밀성 → 부인방지"
      },
      {
        "number": 3,
        "text": "인증 → 가용성"
      },
      {
        "number": 4,
        "text": "부인방지 → 무결성"
      }
    ],
    "answer": 2,
    "explanation": "ㄱ의 목적은 계약 내용의 노출을 막는 **기밀성**이다. ㄴ에서는 발신자의 공개키로 서명을 검증한 결과를 서명 사실의 근거로 활용하므로 **부인방지**에 해당한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q062",
    "partId": 2,
    "sectionId": 4,
    "sectionTitle": "비대칭키 암호",
    "sourceSection": "SECTION 03 비대칭키 암호",
    "question": "대용량 파일을 세션키로 암호화하고, 그 세션키를 수신자의 공개키로 보호해 전달하는 혼합형 암호시스템에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "파일 본문은 공개키 암호로 처리하고, 세션키는 본문 암호화에 사용하지 않는다."
      },
      {
        "number": 2,
        "text": "송신자는 대칭키 암호로 파일 본문을 처리하여 대용량 데이터 암호화의 효율을 높인다."
      },
      {
        "number": 3,
        "text": "송신자는 수신자의 공개키로 세션키를 암호화해 전달한다."
      },
      {
        "number": 4,
        "text": "수신자는 자신의 개인키로 세션키를 복원한 뒤 해당 세션키로 파일을 복호화한다."
      }
    ],
    "answer": 1,
    "explanation": "이 혼합형 방식에서는 **대칭키 암호가 파일 본문을 처리**하고 **공개키 암호가 세션키를 보호**한다. 수신자는 세션키를 복원해야 파일 본문을 복호화할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q063",
    "partId": 2,
    "sectionId": 5,
    "sectionTitle": "해시함수와 응용",
    "sourceSection": "SECTION 04 해시함수와 응용",
    "question": "해시함수 H의 성질을 설명한 ㄱ과 ㄴ에 해당하는 용어를 순서대로 바르게 나열한 것은?\n\nㄱ. 해시값 y가 주어졌을 때 H(M) = y인 메시지 M을 찾기 어렵다.\nㄴ. 공격자가 두 메시지를 모두 자유롭게 고를 수 있어도, 해시값이 같은 서로 다른 두 메시지를 찾기 어렵다.",
    "options": [
      {
        "number": 1,
        "text": "충돌 저항성 → 역상 저항성"
      },
      {
        "number": 2,
        "text": "역상 저항성 → 제2역상 저항성"
      },
      {
        "number": 3,
        "text": "제2역상 저항성 → 충돌 저항성"
      },
      {
        "number": 4,
        "text": "역상 저항성 → 충돌 저항성"
      }
    ],
    "answer": 4,
    "explanation": "ㄱ은 주어진 출력값에 대응하는 입력을 찾기 어렵다는 **역상 저항성(일방향성)**이다. ㄴ은 어느 입력도 미리 정해지지 않은 상태에서 같은 출력을 내는 입력 쌍을 찾기 어렵다는 **충돌 저항성**이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q064",
    "partId": 2,
    "sectionId": 5,
    "sectionTitle": "해시함수와 응용",
    "sourceSection": "SECTION 04 해시함수와 응용",
    "question": "다음 두 공격을 어렵게 하는 해시함수의 성질을 (가), (나) 순서로 바르게 짝지은 것은?\n\n(가) 이미 배포된 특정 파일을 해시값이 같은 다른 파일로 바꿔치기한다.\n(나) 공격자가 두 파일을 모두 직접 만들어 내용은 다르지만 해시값은 같게 한다.",
    "options": [
      {
        "number": 1,
        "text": "강한 충돌 내성 → 약한 충돌 내성"
      },
      {
        "number": 2,
        "text": "약한 충돌 내성 → 강한 충돌 내성"
      },
      {
        "number": 3,
        "text": "역상 저항성 → 약한 충돌 내성"
      },
      {
        "number": 4,
        "text": "강한 충돌 내성 → 역상 저항성"
      }
    ],
    "answer": 2,
    "explanation": "(가)는 원본 파일이 정해져 있으므로 **약한 충돌 내성(제2역상 저항성)**에 해당한다. (나)는 공격자가 양쪽 파일을 모두 고를 수 있으므로 **강한 충돌 내성(충돌 저항성)**에 해당한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q065",
    "partId": 2,
    "sectionId": 5,
    "sectionTitle": "해시함수와 응용",
    "sourceSection": "SECTION 04 해시함수와 응용",
    "question": "SHA-256과 같은 암호학적 해시함수에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "파일을 해시하려면 송수신자가 기밀성 보호용 비밀키를 먼저 공유해야 한다."
      },
      {
        "number": 2,
        "text": "길이가 다른 파일을 입력해도 SHA-256의 출력은 각각 256비트이다."
      },
      {
        "number": 3,
        "text": "신뢰할 수 있는 원본 해시값과 수신한 파일의 해시값을 비교해 무결성을 점검할 수 있다."
      },
      {
        "number": 4,
        "text": "동일한 파일에 같은 해시함수를 적용하면 같은 해시값을 얻는다."
      }
    ],
    "answer": 1,
    "explanation": "SHA-256은 비밀키 없이 입력 데이터의 해시값을 계산한다. 파일과 그 해시값을 함께 보내면 수신자는 파일 내용을 그대로 읽을 수 있으므로, 해시 계산만으로는 기밀성을 제공할 수 없다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q066",
    "partId": 2,
    "sectionId": 5,
    "sectionTitle": "해시함수와 응용",
    "sourceSection": "SECTION 04 해시함수와 응용",
    "question": "암호학적 해시함수의 활용 사례로 옳은 것을 **모두** 고른 것은?\n\nㄱ. 전자서명 생성 과정에서 문서의 요약값을 계산한다.\nㄴ. HMAC으로 메시지 인증 태그를 생성한다.\nㄷ. 임의의 파일을 해시값만으로 무손실 압축하고 원본을 복원한다.\nㄹ. 패스워드 기반 암호화에서 해시 기반 키 유도 함수로 암호화키를 도출한다.",
    "options": [
      {
        "number": 1,
        "text": "ㄱ, ㄴ"
      },
      {
        "number": 2,
        "text": "ㄴ, ㄷ, ㄹ"
      },
      {
        "number": 3,
        "text": "ㄱ, ㄴ, ㄹ"
      },
      {
        "number": 4,
        "text": "ㄱ, ㄴ, ㄷ, ㄹ"
      }
    ],
    "answer": 3,
    "explanation": "해시함수는 전자서명용 요약값 계산, HMAC, 패스워드 기반 키 유도에 활용된다. ㄷ의 경우 서로 다른 파일이 같은 해시값을 가질 수 있어 해시값만으로 원본을 유일하게 복원할 수 없다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q071",
    "partId": 2,
    "sectionId": 5,
    "sectionTitle": "해시함수와 응용",
    "sourceSection": "SECTION 04 해시함수와 응용",
    "question": "다음 중 제시된 절차만으로는 수신한 메시지의 출처와 무결성을 검증할 수 **없는 것**은?",
    "options": [
      {
        "number": 1,
        "text": "공유 비밀키로 메시지의 HMAC을 다시 계산해 수신한 태그와 비교한다."
      },
      {
        "number": 2,
        "text": "공유 비밀키로 메시지의 CMAC을 계산해 수신한 태그와 비교한다."
      },
      {
        "number": 3,
        "text": "발신자의 것으로 확인된 공개키로 메시지의 전자서명을 검증한다."
      },
      {
        "number": 4,
        "text": "송신자가 메시지와 무관하게 생성해 첨부한 난수의 길이만 확인한다."
      }
    ],
    "answer": 4,
    "explanation": "①과 ②의 인증 태그, ③의 전자서명은 검증 대상 메시지에 따라 달라진다. ④에서는 공격자가 메시지만 변경해도 난수의 길이가 그대로이므로 수신자가 변조를 알아낼 수 없다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q072",
    "partId": 2,
    "sectionId": 5,
    "sectionTitle": "해시함수와 응용",
    "sourceSection": "SECTION 04 해시함수와 응용",
    "question": "송신자와 수신자만 비밀키를 공유하는 환경에서 메시지 인증 코드(MAC)에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "송신자는 메시지와 공유 비밀키로 인증 태그를 생성한다."
      },
      {
        "number": 2,
        "text": "유효한 MAC을 제시하면 제3자도 송신자와 수신자 중 누가 태그를 생성했는지 판별할 수 있다."
      },
      {
        "number": 3,
        "text": "수신자는 MAC을 검증해 전송 중 메시지의 변조 여부를 점검할 수 있다."
      },
      {
        "number": 4,
        "text": "안전한 MAC을 사용하면 키를 모르는 공격자가 변경한 메시지에 맞는 태그를 위조하기 어렵다."
      }
    ],
    "answer": 2,
    "explanation": "송신자와 수신자가 같은 비밀키를 보유하므로 어느 쪽이든 유효한 태그를 만들 수 있다. 따라서 제3자는 MAC만 보고 두 사람 중 누가 메시지를 작성했는지 판별할 수 없다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q073",
    "partId": 2,
    "sectionId": 5,
    "sectionTitle": "해시함수와 응용",
    "sourceSection": "SECTION 04 해시함수와 응용",
    "question": "A와 B는 비밀키 K를 공유한다. A가 메시지 M과 태그 T = MAC(K, M)을 보냈을 때, B의 검증 절차로 옳은 것은?",
    "options": [
      {
        "number": 1,
        "text": "T를 A의 공개키로 복호화해 M과 비교한다."
      },
      {
        "number": 2,
        "text": "수신한 M의 일반 해시값을 계산해 T와 비교한다."
      },
      {
        "number": 3,
        "text": "수신한 M과 공유키 K로 MAC을 다시 계산해 T와 비교한다."
      },
      {
        "number": 4,
        "text": "T만 제3자에게 전달해 A가 메시지를 보냈음을 증명한다."
      }
    ],
    "answer": 3,
    "explanation": "B는 A와 같은 키와 알고리즘을 사용해 수신한 메시지의 태그를 다시 계산한다. ②처럼 키 없이 해시값을 계산하면 A의 MAC 검증 절차를 재현할 수 없다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q074",
    "partId": 2,
    "sectionId": 5,
    "sectionTitle": "해시함수와 응용",
    "sourceSection": "SECTION 04 해시함수와 응용",
    "question": "두 당사자가 대칭키로 메시지를 암호화하고 별도의 공유키로 MAC을 올바르게 적용했다. 이 구성만으로 제공하기 **어려운** 보안 서비스는?",
    "options": [
      {
        "number": 1,
        "text": "송신 사실에 대한 부인방지"
      },
      {
        "number": 2,
        "text": "메시지 내용의 기밀성"
      },
      {
        "number": 3,
        "text": "메시지 무결성 검증"
      },
      {
        "number": 4,
        "text": "통신 당사자 간 메시지 출처 인증"
      }
    ],
    "answer": 1,
    "explanation": "대칭키 암호화는 메시지 내용을 보호하고, MAC은 당사자 간 출처 인증과 무결성 검증을 지원한다. 수신자도 유효한 MAC을 만들 수 있으므로 송신 사실을 제3자에게 입증하는 **부인방지**에는 한계가 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q075",
    "partId": 2,
    "sectionId": 5,
    "sectionTitle": "해시함수와 응용",
    "sourceSection": "SECTION 04 해시함수와 응용",
    "question": "메시지 인증 코드(MAC)와 일반 해시함수의 차이를 바르게 설명한 것은?",
    "options": [
      {
        "number": 1,
        "text": "MAC은 태그에서 원문을 복원할 수 있고, 일반 해시는 해시값에서 원문을 복원할 수 없다."
      },
      {
        "number": 2,
        "text": "MAC 태그를 생성하려면 비밀키가 필요하고, 일반 해시값은 메시지만으로 계산할 수 있다."
      },
      {
        "number": 3,
        "text": "MAC 태그의 길이는 항상 메시지 길이에 비례하고, 일반 해시값의 길이는 고정된다."
      },
      {
        "number": 4,
        "text": "MAC과 일반 해시 모두 메시지만 알면 누구나 동일한 인증값을 생성할 수 있다."
      }
    ],
    "answer": 2,
    "explanation": "일반 해시값은 누구나 다시 계산할 수 있어 공격자도 메시지와 해시값을 함께 바꿀 수 있다. MAC은 계산에 **공유 비밀키**를 사용하므로 키를 모르는 공격자가 새 메시지에 맞는 유효한 태그를 만들기 어렵다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q078",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "공개키 기반 전자서명의 요구조건으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "서명값은 서명 대상 문서의 내용에 의존해야 한다."
      },
      {
        "number": 2,
        "text": "정당한 서명자는 서명을 효율적으로 생성할 수 있어야 한다."
      },
      {
        "number": 3,
        "text": "송신자의 서명을 위조하기 어렵게 하려면 수신자의 개인키로 서명을 생성해야 한다."
      },
      {
        "number": 4,
        "text": "검증자는 문서와 서명을 보관했다가 나중에 검증할 수 있어야 한다."
      }
    ],
    "answer": 3,
    "explanation": "송신자의 서명을 생성할 때는 **송신자의 개인키**를 사용한다. 수신자의 개인키로 만든 서명은 송신자가 서명했다는 근거가 될 수 없다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q079",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "전자문서에 서명한 후 원문과 서명값을 그대로 전송했다. 전자서명만으로 제공되지 않는 기능은?",
    "options": [
      {
        "number": 1,
        "text": "문서 내용의 기밀성"
      },
      {
        "number": 2,
        "text": "서명자 인증"
      },
      {
        "number": 3,
        "text": "서명 후 문서 변조 탐지"
      },
      {
        "number": 4,
        "text": "서명 사실에 대한 부인방지"
      }
    ],
    "answer": 1,
    "explanation": "전자서명으로 서명자와 문서의 무결성을 확인하고, 서명 사실을 입증할 근거를 얻을 수 있다. 원문을 그대로 보내면 제3자도 내용을 읽을 수 있으므로 기밀성을 확보하려면 별도로 암호화해야 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q080",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "검증자가 김 대리의 것으로 확인된 공개키를 이용해 전자문서에 첨부된 서명이 김 대리의 서명인지 확인한다. 이때 확인하려는 전자서명의 요건은?",
    "options": [
      {
        "number": 1,
        "text": "재사용 불가"
      },
      {
        "number": 2,
        "text": "기밀성"
      },
      {
        "number": 3,
        "text": "부인방지"
      },
      {
        "number": 4,
        "text": "서명자 인증"
      }
    ],
    "answer": 4,
    "explanation": "**서명자 인증**은 문서에 표시된 서명자가 실제 서명자인지 확인하는 요건이다. 검증자는 해당 서명자의 신원과 연결된 공개키를 사용한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q082",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "A가 문서에 서명해 B에게 보냈다. **A의 서명 생성**과 **B의 서명 검증**에 쓰이는 키를 순서대로 바르게 짝지은 것은?",
    "options": [
      {
        "number": 1,
        "text": "A의 공개키 → B의 개인키"
      },
      {
        "number": 2,
        "text": "A의 개인키 → A의 공개키"
      },
      {
        "number": 3,
        "text": "B의 공개키 → B의 개인키"
      },
      {
        "number": 4,
        "text": "A의 개인키 → B의 공개키"
      }
    ],
    "answer": 2,
    "explanation": "생성과 검증에는 같은 서명자 A의 키 쌍이 쓰인다. A가 비밀로 보관하는 개인키로 서명을 만들면, B는 A의 공개키로 이를 검증한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q083",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "다음 빈칸에 들어갈 말을 ㄱ~ㄹ 순서로 바르게 나열한 것은?\n\n송신자는 자신의 (ㄱ)로 서명한다. 이 서명은 송신자가 나중에 서명 사실을 부인할 때 이를 반박할 근거가 되므로 (ㄴ)를 지원한다. 검증자는 송신자의 (ㄷ)로 서명을 검증해 누가 서명했는지 확인한다. 이는 (ㄹ)에 해당한다.",
    "options": [
      {
        "number": 1,
        "text": "개인키 → 부인방지 → 공개키 → 서명자 인증"
      },
      {
        "number": 2,
        "text": "공개키 → 부인방지 → 개인키 → 서명자 인증"
      },
      {
        "number": 3,
        "text": "개인키 → 기밀성 → 공개키 → 무결성"
      },
      {
        "number": 4,
        "text": "공개키 → 무결성 → 개인키 → 기밀성"
      }
    ],
    "answer": 1,
    "explanation": "서명 사실을 사후에 입증하는 목적은 **부인방지**, 누가 서명했는지 확인하는 목적은 **서명자 인증**이다. 서명 생성에는 개인키, 검증에는 그에 대응하는 공개키를 쓴다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q084",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "서명자가 개인키를 단독으로 관리하고 공개키와 서명자의 신원이 신뢰할 수 있게 연결되어 있다. 이때 전자서명이 부인방지를 지원하는 이유는?",
    "options": [
      {
        "number": 1,
        "text": "수신자의 공개키로 문서를 암호화하면 서명자가 기록되기 때문이다."
      },
      {
        "number": 2,
        "text": "문서의 일반 해시값만 알면 그 값을 계산한 사람을 식별할 수 있기 때문이다."
      },
      {
        "number": 3,
        "text": "서명자만 보유한 개인키로 생성한 서명을 제3자도 서명자의 공개키로 검증할 수 있기 때문이다."
      },
      {
        "number": 4,
        "text": "송수신자가 공유한 비밀키로 만든 인증 태그에서 생성자의 신원을 구별할 수 있기 때문이다."
      }
    ],
    "answer": 3,
    "explanation": "제3자가 문서와 서명을 검증해 서명자의 개인키로 생성된 서명임을 확인할 수 있다. 공유 비밀키 방식에서는 수신자도 같은 인증 태그를 생성할 수 있어 두 당사자 중 누가 만들었는지 구분하기 어렵다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q085",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "RSA 전자서명 방식에 대한 설명으로 옳은 것은?",
    "options": [
      {
        "number": 1,
        "text": "유한체의 이산로그 문제를 이용해 서명키를 구성한다."
      },
      {
        "number": 2,
        "text": "수신자의 RSA 공개키로 본문을 암호화하면 송신자의 서명이 생성된다."
      },
      {
        "number": 3,
        "text": "RSA 키 하나로 만든 서명의 길이는 원문 길이에 비례해 증가한다."
      },
      {
        "number": 4,
        "text": "메시지의 해시값을 서명 방식에 맞게 인코딩한 뒤 RSA 개인키 연산으로 서명을 생성한다."
      }
    ],
    "answer": 4,
    "explanation": "RSA 서명에서는 서명용으로 인코딩한 값에 서명자의 개인키 연산을 적용한다. 서명 길이는 RSA 모듈러스의 크기에 따라 정해지므로 같은 키를 쓰면 긴 문서도 같은 길이의 서명값을 갖는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q086",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "대용량 파일에 전자서명할 때는 파일 전체의 해시값을 계산한 뒤 이를 서명 연산에 사용한다. 이 방법을 쓰는 주된 성능상 이유는?",
    "options": [
      {
        "number": 1,
        "text": "검증자가 원본 파일을 읽는 과정을 생략할 수 있어서"
      },
      {
        "number": 2,
        "text": "파일 전체를 해시한 뒤 정해진 크기의 값에만 비용이 큰 개인키 연산을 적용할 수 있어서"
      },
      {
        "number": 3,
        "text": "해시값에서 원본 파일을 복원할 수 있어 전송량이 줄어서"
      },
      {
        "number": 4,
        "text": "해시값을 사용하면 서명자의 키 쌍을 생성할 필요가 없어서"
      }
    ],
    "answer": 2,
    "explanation": "파일 크기가 커지면 전체를 해시하는 시간은 늘어나지만, 파일의 각 블록마다 개인키 연산을 반복할 필요는 없다. 검증자도 수신한 파일 전체를 해시해 서명이 그 파일에 대응하는지 검증한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q087",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "송신자가 문서를 해시한 뒤 (ㄱ)로 서명을 생성해 문서에 첨부했다. 수신자는 받은 문서를 같은 방식으로 해시하고 (ㄴ)로 서명을 검증한다. ㄱ과 ㄴ에 들어갈 키는?",
    "options": [
      {
        "number": 1,
        "text": "송신자의 공개키 → 송신자의 개인키"
      },
      {
        "number": 2,
        "text": "수신자의 개인키 → 수신자의 공개키"
      },
      {
        "number": 3,
        "text": "송신자의 개인키 → 송신자의 공개키"
      },
      {
        "number": 4,
        "text": "수신자의 공개키 → 송신자의 개인키"
      }
    ],
    "answer": 3,
    "explanation": "문서에 서명을 붙여 보내는 **부가형 전자서명**의 절차이다. 수신자는 송신자의 공개키와 자신이 받은 문서를 이용해 첨부된 서명이 그 문서에 유효한지 확인한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q093",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "고전적인 ElGamal 서명보다 짧은 서명을 구성할 수 있는 이산로그 기반 방식이다. 임시 공개값과 메시지로부터 해시 도전값을 구하고, 이에 대한 응답값을 계산하는 전자서명은?",
    "options": [
      {
        "number": 1,
        "text": "RSA-PSS"
      },
      {
        "number": 2,
        "text": "ECDSA"
      },
      {
        "number": 3,
        "text": "DSA"
      },
      {
        "number": 4,
        "text": "Schnorr 서명"
      }
    ],
    "answer": 4,
    "explanation": "**Schnorr 서명**은 임시 공개값과 메시지로 도전값을 계산하고, 임시 비밀값과 개인키를 이용해 응답값을 만든다. 짧은 서명이라는 특징과 도전값·응답값 구조를 함께 보면 식별할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q096",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "공개키 기반구조(PKI)가 인증서와 공개키 기술을 통해 지원하는 보안 기능으로 보기 **어려운 것**은?",
    "options": [
      {
        "number": 1,
        "text": "인증서 기반 서버 인증"
      },
      {
        "number": 2,
        "text": "장애 발생 시 서비스 가용성 보장"
      },
      {
        "number": 3,
        "text": "공개키 암호화를 이용한 기밀성 보호"
      },
      {
        "number": 4,
        "text": "전자서명을 이용한 부인방지"
      }
    ],
    "answer": 2,
    "explanation": "PKI는 공개키와 소유자의 신원을 연결하여 인증·암호화·전자서명을 지원한다. 장애 중에도 서비스를 계속 제공하려면 서버 이중화나 장애 복구 같은 대책이 필요하다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q097",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "인증서 발급기관이 인증서 폐지 목록(CRL)의 발행을 다른 기관에 위임하지 않았다. 이때 자신이 발급한 인증서의 폐지 목록을 작성하고 서명하는 주체는?",
    "options": [
      {
        "number": 1,
        "text": "등록기관(RA)"
      },
      {
        "number": 2,
        "text": "검증기관(VA)"
      },
      {
        "number": 3,
        "text": "인증기관(CA)"
      },
      {
        "number": 4,
        "text": "지역등록기관(LRA)"
      }
    ],
    "answer": 3,
    "explanation": "이 구성에서는 **CA**가 자신이 폐지한 인증서의 일련번호와 폐지 일시를 목록에 기록하고 서명한다. 검증자는 그 서명으로 목록의 출처와 무결성을 확인할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q098",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "정책승인기관(PAA) 아래에 여러 정책 도메인을 둔 계층형 PKI에서, **담당 도메인**의 사용자와 하위 CA가 따를 정책을 수립하고 하위 CA의 공개키를 인증하는 기관은?",
    "options": [
      {
        "number": 1,
        "text": "정책인증기관(PCA)"
      },
      {
        "number": 2,
        "text": "등록기관(RA)"
      },
      {
        "number": 3,
        "text": "검증기관(VA)"
      },
      {
        "number": 4,
        "text": "정책승인기관(PAA)"
      }
    ],
    "answer": 1,
    "explanation": "**PCA**는 자신이 담당하는 도메인의 인증정책을 수립하고 그 정책을 따르는 하위 CA를 인증한다. PAA는 이 계층 구조의 상위에서 PKI 전반의 정책과 절차를 다룬다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q099",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "신청자의 신원 확인은 RA가, 인증서 발급은 CA가 담당하도록 분리한 PKI에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "가입자는 공개 디렉터리에서 다른 가입자의 인증서를 조회할 수 있다."
      },
      {
        "number": 2,
        "text": "개인키 유출이 확인되면 유효기간이 남아 있어도 인증서를 폐지할 수 있다."
      },
      {
        "number": 3,
        "text": "RA는 신청자의 신원을 확인한 결과를 CA에 전달할 수 있다."
      },
      {
        "number": 4,
        "text": "RA는 신원 확인을 마친 후 자신의 개인키로 최종 사용자 인증서를 서명해 발급한다."
      }
    ],
    "answer": 4,
    "explanation": "제시된 구성에서 RA는 신청자를 확인하고, **CA가 발급기관의 개인키로 인증서에 서명**한다. 신원을 확인하는 업무와 그 결과를 바탕으로 인증서를 발급하는 업무를 구별해야 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q100",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "외부 CA가 발급하는 일반 사용자용 X.509 인증서에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "인증서에는 유효기간의 시작과 끝이 표시된다."
      },
      {
        "number": 2,
        "text": "가입자가 자신의 개인키로 발급 요청에 서명하면 그것만으로 CA 발급 인증서가 완성된다."
      },
      {
        "number": 3,
        "text": "개인키 유출 등의 사유가 생기면 만료 전에도 인증서를 폐지할 수 있다."
      },
      {
        "number": 4,
        "text": "CA는 가입자의 공개키와 주체 정보를 포함한 인증서에 발급기관으로서 서명한다."
      }
    ],
    "answer": 2,
    "explanation": "가입자가 발급 요청에 하는 서명은 해당 개인키를 보유하고 있음을 확인하는 데 쓰인다. CA는 요청을 심사한 뒤 **CA의 개인키로 인증서에 서명**해 발급한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q101",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "사용자 인증서는 사용자의 신원 정보와 (ㄱ)를 연결한다. 발급 CA는 (ㄴ)로 인증서에 서명하며, 검증자는 (ㄷ)로 그 서명을 확인한다. ㄱ~ㄷ을 바르게 나열한 것은?",
    "options": [
      {
        "number": 1,
        "text": "사용자 개인키 → CA 개인키 → CA 공개키"
      },
      {
        "number": 2,
        "text": "사용자 공개키 → 사용자 개인키 → 사용자 공개키"
      },
      {
        "number": 3,
        "text": "사용자 공개키 → CA 개인키 → CA 공개키"
      },
      {
        "number": 4,
        "text": "사용자 공개키 → CA 공개키 → CA 개인키"
      }
    ],
    "answer": 3,
    "explanation": "인증서에 실리는 키는 **사용자 공개키**이다. 이 키가 해당 사용자의 것임을 보증하는 서명에는 **발급 CA의 키 쌍**이 쓰인다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q102",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "X.509 공개키 인증서의 기본 필드에 **포함되지 않는 것**은?",
    "options": [
      {
        "number": 1,
        "text": "사용자의 개인키 저장소를 여는 비밀번호"
      },
      {
        "number": 2,
        "text": "인증서 일련번호"
      },
      {
        "number": 3,
        "text": "발급자 이름"
      },
      {
        "number": 4,
        "text": "서명 알고리즘 식별자"
      }
    ],
    "answer": 1,
    "explanation": "인증서는 배포할 수 있는 문서로, 공개키와 발급자·일련번호·서명 알고리즘 등의 정보를 담는다. 개인키 저장소에 접근하기 위한 비밀번호는 사용자가 별도로 관리한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q104",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "개인키 유출로 유효기간이 남은 인증서가 폐지되었다. CRL에서 해당 인증서의 **개별 폐지 항목**에 기록하는 기본 정보의 조합은?",
    "options": [
      {
        "number": 1,
        "text": "사용자 공개키와 인증서 만료 일시"
      },
      {
        "number": 2,
        "text": "사용자 개인키와 폐지 일시"
      },
      {
        "number": 3,
        "text": "인증서 일련번호와 다음 CRL 발행 예정 일시"
      },
      {
        "number": 4,
        "text": "인증서 일련번호와 폐지 일시"
      }
    ],
    "answer": 4,
    "explanation": "개별 항목에는 **어느 인증서를 언제 폐지했는지** 기록한다. 다음 CRL 발행 예정 일시는 목록 전체의 갱신 정보이다. 유효기간이 지나 자연 만료되는 것과 만료 전에 인증서를 폐지하는 것은 구별된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q105",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "검증자가 철수의 인증서를 받았다. 신뢰하는 CA가 발급했고 유효기간과 폐지 상태도 적절할 때, 인증서 속 공개키가 전송 중 다른 키로 바뀌지 않았음을 확인하는 **직접적인 암호학적 근거**는?",
    "options": [
      {
        "number": 1,
        "text": "인증서를 공개 디렉터리에서 내려받았다는 사실"
      },
      {
        "number": 2,
        "text": "철수의 신원과 공개키를 포함한 인증서 데이터에 대해 CA의 전자서명이 검증된다는 사실"
      },
      {
        "number": 3,
        "text": "인증서의 파일명에 철수의 이름이 들어 있다는 사실"
      },
      {
        "number": 4,
        "text": "인증서가 유효기간 안에 있다는 사실"
      }
    ],
    "answer": 2,
    "explanation": "CA의 서명 대상에는 철수의 신원 정보와 공개키가 함께 포함된다. 공격자가 공개키만 바꾸면 변경된 데이터에 대해 기존 CA 서명이 유효하게 검증되지 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q106",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "X.509 인증서의 폐지와 폐지 상태의 제공에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "가입자의 개인키가 유출된 것으로 의심되면 폐지 사유가 될 수 있다."
      },
      {
        "number": 2,
        "text": "권한을 가진 가입자나 대리인은 정해진 절차에 따라 폐지를 요청할 수 있다."
      },
      {
        "number": 3,
        "text": "CRL은 CA 내부에만 비공개로 보관하여 인증서 검증자가 폐지 여부를 조회하지 못하도록 한다."
      },
      {
        "number": 4,
        "text": "검증자는 서명과 갱신 시점을 확인한 CRL을 이용해 해당 인증서의 폐지 여부를 점검할 수 있다."
      }
    ],
    "answer": 3,
    "explanation": "CRL의 목적은 검증자가 폐지된 인증서를 식별하도록 하는 것이다. 따라서 검증자가 목록을 받아 확인할 수 있는 배포 지점 등을 제공해야 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q107",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "X.509 v2 CRL에서 다음 중 **CRL 확장 필드**로 정의된 것은?",
    "options": [
      {
        "number": 1,
        "text": "CRL 번호(CRL Number)"
      },
      {
        "number": 2,
        "text": "발급자 이름(Issuer)"
      },
      {
        "number": 3,
        "text": "현재 발행 시각(thisUpdate)"
      },
      {
        "number": 4,
        "text": "서명 알고리즘 식별자(Signature Algorithm)"
      }
    ],
    "answer": 1,
    "explanation": "**CRL Number**는 동일 발급자가 같은 범위에 대해 발행하는 목록의 순서를 나타내는 확장 필드이다. 개별 폐지 항목의 **인증서 일련번호**는 어떤 인증서가 폐지되었는지를 식별한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q110",
    "partId": 2,
    "sectionId": 6,
    "sectionTitle": "전자서명과 PKI",
    "sourceSection": "SECTION 05 전자서명과 PKI",
    "question": "계층형 PKI의 최상위 인증기관 (ㄱ)이 자신의 공개키를 담은 인증서에 그 공개키와 대응하는 개인키로 직접 서명했다. ㄱ과 이 서명 방식의 명칭을 바르게 짝지은 것은?",
    "options": [
      {
        "number": 1,
        "text": "등록기관(RA) → 교차 서명"
      },
      {
        "number": 2,
        "text": "중간 인증기관 → 대리 서명"
      },
      {
        "number": 3,
        "text": "루트 인증기관(Root CA) → 자체 서명"
      },
      {
        "number": 4,
        "text": "정책인증기관(PCA) → 공동 서명"
      }
    ],
    "answer": 3,
    "explanation": "루트 CA가 자신의 개인키로 자신의 인증서에 서명하면 **자체 서명 인증서**가 된다. 검증자는 신뢰 저장소 등록 등 별도의 절차를 통해 해당 루트 CA를 신뢰 대상으로 받아들인다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q111",
    "partId": 2,
    "sectionId": 7,
    "sectionTitle": "키와 난수",
    "sourceSection": "SECTION 06 키, 난수",
    "question": "공격자가 16비트 키를 사용하는 암호시스템에서 초당 1,024개의 후보 키를 중복 없이 검사한다. 올바른 키가 **마지막 순서**에 있다면, 키를 찾는 데 걸리는 시간은?",
    "options": [
      {
        "number": 1,
        "text": "32초"
      },
      {
        "number": 2,
        "text": "128초"
      },
      {
        "number": 3,
        "text": "16초"
      },
      {
        "number": 4,
        "text": "64초"
      }
    ],
    "answer": 4,
    "explanation": "16비트로 표현할 수 있는 키는 2¹⁶ = 65,536개이다. 마지막 후보까지 모두 검사하므로 65,536 ÷ 1,024 = **64초**가 걸린다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q112",
    "partId": 2,
    "sectionId": 7,
    "sectionTitle": "키와 난수",
    "sourceSection": "SECTION 06 키, 난수",
    "question": "다음 보안 용어에 대한 설명 중 옳은 것을 **모두** 고른 것은?\n\nㄱ. HSM은 암호키를 안전하게 생성·보관하고 장치 내부에서 서명 등의 암호 연산을 수행하는 하드웨어 보안 모듈이다.\nㄴ. SSO는 클라이언트와 서버 사이의 통신 구간을 암호화하는 전송 보안 프로토콜이다.\nㄷ. DRM은 디지털 콘텐츠의 이용 권한을 관리하고 복제·재생 등을 제어하는 기술이다.",
    "options": [
      {
        "number": 1,
        "text": "ㄱ, ㄴ"
      },
      {
        "number": 2,
        "text": "ㄱ, ㄷ"
      },
      {
        "number": 3,
        "text": "ㄴ, ㄷ"
      },
      {
        "number": 4,
        "text": "ㄱ, ㄴ, ㄷ"
      }
    ],
    "answer": 2,
    "explanation": "ㄱ과 ㄷ이 옳다. **SSO(싱글 사인온)**는 한 번 로그인하면 연동된 여러 서비스에 다시 로그인하지 않고 접근할 수 있게 하는 인증 방식이다. ㄴ에서 설명한 통신 구간 암호화에는 TLS가 쓰인다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q113",
    "partId": 2,
    "sectionId": 7,
    "sectionTitle": "키와 난수",
    "sourceSection": "SECTION 06 키, 난수",
    "question": "프로그램이 초깃값인 시드(seed)를 받아 정해진 알고리즘으로 난수처럼 보이는 수열을 만든다. 같은 시드로 다시 시작하면 같은 수열이 생성된다. 이러한 생성기를 가리키는 용어는?",
    "options": [
      {
        "number": 1,
        "text": "진성난수 생성기(TRNG)"
      },
      {
        "number": 2,
        "text": "하드웨어 보안 모듈(HSM)"
      },
      {
        "number": 3,
        "text": "의사난수 생성기(PRNG)"
      },
      {
        "number": 4,
        "text": "키 유도 함수(KDF)"
      }
    ],
    "answer": 3,
    "explanation": "**PRNG**는 시드로 내부 상태를 초기화한 뒤, 정해진 규칙에 따라 상태를 갱신하며 수열을 생성한다. 같은 초기 상태에서 외부 난수 입력 없이 실행하면 출력 순서까지 재현된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q114",
    "partId": 3,
    "sectionId": 8,
    "sectionTitle": "접근통제 개요",
    "sourceSection": "SECTION 01 접근통제 개요",
    "question": "다음 중 접근통제의 **인가(Authorization)** 단계에 해당하는 것은?",
    "options": [
      {
        "number": 1,
        "text": "사용자가 로그인 화면에 자신의 계정 ID를 입력한다."
      },
      {
        "number": 2,
        "text": "시스템이 사용자가 입력한 일회용 비밀번호를 검증한다."
      },
      {
        "number": 3,
        "text": "시스템이 파일의 접근제어목록(ACL)을 확인하여 사용자의 수정 요청을 허용할지 결정한다."
      },
      {
        "number": 4,
        "text": "시스템이 사용자의 파일 수정 시각과 처리 결과를 로그에 기록한다."
      }
    ],
    "answer": 3,
    "explanation": "인가는 주체가 특정 자원에 대해 요청한 작업을 수행할 권한이 있는지 판단하는 단계이다. ①은 식별, ②는 인증, ④는 감사 기록의 생성에 해당한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q115",
    "partId": 3,
    "sectionId": 8,
    "sectionTitle": "접근통제 개요",
    "sourceSection": "SECTION 01 접근통제 개요",
    "question": "한 조직이 “인사팀원은 인사 기록을 조회할 수 있고, 인사팀장만 이를 수정할 수 있다”는 규칙을 정했다. 이처럼 누가 어떤 자원에 어떤 방식으로 접근할 수 있는지를 정한 규칙은 무엇인가?",
    "options": [
      {
        "number": 1,
        "text": "접근통제 정책"
      },
      {
        "number": 2,
        "text": "접근통제 메커니즘"
      },
      {
        "number": 3,
        "text": "보안 모델"
      },
      {
        "number": 4,
        "text": "OSI 보안 구조"
      }
    ],
    "answer": 1,
    "explanation": "**접근통제 정책**은 자원에 대한 접근을 허용하거나 제한하는 기준을 정한다. 시스템이 실제 수정 요청을 받을 때 이 기준을 검사하고 집행하는 수단이 접근통제 메커니즘이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q116",
    "partId": 3,
    "sectionId": 8,
    "sectionTitle": "접근통제 개요",
    "sourceSection": "SECTION 01 접근통제 개요",
    "question": "관리자가 웹 서버 전용 계정에 웹 콘텐츠를 읽고 서비스 로그를 기록할 권한만 부여했다. 업무에 필요하지 않은 원격 로그인과 시스템 설정 변경은 허용하지 않았다. 이 조치에 적용한 원칙은?",
    "options": [
      {
        "number": 1,
        "text": "직무 분리의 원칙"
      },
      {
        "number": 2,
        "text": "권한 위임의 원칙"
      },
      {
        "number": 3,
        "text": "이중 통제의 원칙"
      },
      {
        "number": 4,
        "text": "최소 권한의 원칙"
      }
    ],
    "answer": 4,
    "explanation": "**최소 권한의 원칙**은 사용자나 프로세스에 맡은 작업을 수행하는 데 필요한 권한만 부여하는 것이다. 웹 서버 계정이 탈취되더라도 공격자가 그 계정의 권한으로 수행할 수 있는 작업이 제한된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q117",
    "partId": 3,
    "sectionId": 8,
    "sectionTitle": "접근통제 개요",
    "sourceSection": "SECTION 01 접근통제 개요",
    "question": "다음 절차에 해당하는 접근통제 단계를 ㄱ, ㄴ, ㄷ 순서로 바르게 나열한 것은?\n\nㄱ. 직원이 사번을 입력해 자신이 누구인지 밝힌다.\nㄴ. 시스템이 등록된 인증수단으로 해당 직원이 본인인지 검증한다.\nㄷ. 시스템이 직원의 권한을 확인한 뒤 급여 명세서 조회를 허용한다.",
    "options": [
      {
        "number": 1,
        "text": "인증 → 식별 → 인가"
      },
      {
        "number": 2,
        "text": "식별 → 인증 → 인가"
      },
      {
        "number": 3,
        "text": "식별 → 인가 → 인증"
      },
      {
        "number": 4,
        "text": "인가 → 인증 → 식별"
      }
    ],
    "answer": 2,
    "explanation": "사번으로 신원을 제시하는 단계는 **식별**, 제시한 신원이 맞는지 확인하는 단계는 **인증**, 해당 직원에게 급여 명세서 조회를 허용할지 결정하는 단계는 **인가**이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q118",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "사용자 인증에 활용하는 정보와 그 유형을 연결한 것 중 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "사용자가 기억한 PIN — 지식 기반"
      },
      {
        "number": 2,
        "text": "사용자의 홍채 무늬 — 생체 기반"
      },
      {
        "number": 3,
        "text": "사용자에게 지급한 하드웨어 OTP 생성기 — 지식 기반"
      },
      {
        "number": 4,
        "text": "접속 단말의 지리적 위치 — 위치 기반"
      }
    ],
    "answer": 3,
    "explanation": "OTP 생성기는 사용자가 가지고 있는 장치이므로 **소유 기반**에 해당한다. 화면에 표시된 숫자를 직접 입력하더라도 그 숫자를 얻는 데 필요한 것은 등록된 생성기이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q119",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "다음 조합 중 두 수단을 모두 확인해도 **서로 다른 두 인증 요소**를 사용한 것으로 볼 수 없는 것은? 단, 카드와 토큰은 소지 여부만 확인한다.",
    "options": [
      {
        "number": 1,
        "text": "비밀번호와 하드웨어 OTP 토큰"
      },
      {
        "number": 2,
        "text": "지문과 비밀번호"
      },
      {
        "number": 3,
        "text": "얼굴 특징과 스마트카드"
      },
      {
        "number": 4,
        "text": "스마트카드와 하드웨어 OTP 토큰"
      }
    ],
    "answer": 4,
    "explanation": "스마트카드와 하드웨어 OTP 토큰은 모두 **소유 요소**이다. ①은 지식·소유, ②는 생체·지식, ③은 생체·소유 요소를 결합한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q120",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "다중요소 인증(MFA)에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "비밀번호를 다섯 번 틀리면 계정을 잠시 잠그는 정책만으로 MFA가 성립한다."
      },
      {
        "number": 2,
        "text": "서로 다른 유형의 인증 요소를 두 가지 이상 확인한다."
      },
      {
        "number": 3,
        "text": "비밀번호 유출만으로 계정이 탈취될 위험을 줄일 수 있다."
      },
      {
        "number": 4,
        "text": "지식·소유·생체 요소를 조합해 구성할 수 있다."
      }
    ],
    "answer": 1,
    "explanation": "계정 잠금은 반복적인 로그인 시도를 제한한다. MFA가 성립하려면 비밀번호 외에 등록된 보안 토큰처럼 **다른 유형의 요소**도 검증해야 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q121",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "다음 중 사용자 인증 방식의 보안 특성에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "매번 같은 비밀번호를 그대로 보내면 이를 탈취한 공격자가 다시 제출할 수 있다."
      },
      {
        "number": 2,
        "text": "안전하게 설계된 OTP에서는 이미 사용한 코드 하나를 알면 다음 코드를 계산할 수 있다."
      },
      {
        "number": 3,
        "text": "계정마다 다른 솔트(salt)를 쓰면 미리 계산한 비밀번호 해시표를 여러 계정에 재사용하기 어렵다."
      },
      {
        "number": 4,
        "text": "질의·응답 인증에서 매번 새로운 도전값을 사용하고 응답을 그 값에 결합하면 과거 응답의 재사용을 막을 수 있다."
      }
    ],
    "answer": 2,
    "explanation": "OTP는 과거 코드가 알려져도 비밀키 등 내부 비밀정보 없이 다음 코드를 예측하기 어렵도록 설계한다. 따라서 코드 한 개의 노출과 OTP 생성용 비밀키의 유출은 구분해야 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q123",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "사용자가 특정 비밀값을 알고 있다는 사실을 검증자에게 증명한다. 검증자는 그 사실을 확신할 수 있지만 증명 과정에서 비밀값에 관한 추가 정보는 얻지 못한다. 이 성질을 이용한 인증 방식은?",
    "options": [
      {
        "number": 1,
        "text": "생체 인증"
      },
      {
        "number": 2,
        "text": "고정 패스워드 인증"
      },
      {
        "number": 3,
        "text": "영지식 인증"
      },
      {
        "number": 4,
        "text": "스마트카드 소지 확인"
      }
    ],
    "answer": 3,
    "explanation": "**영지식 인증**에서는 검증자가 비밀값을 알지 못해도 사용자가 그 값을 알고 있는지 검증할 수 있다. 비밀값을 직접 보내지 않는다는 점에 더해, 증명 과정이 그 값에 관한 추가 정보도 드러내지 않는다는 점이 핵심이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q124",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "공격자가 스마트카드의 암호 연산을 여러 번 실행한 뒤, 연산 도중 측정한 소비 전력의 변화로 카드 내부의 비밀키를 추정했다. 어떤 유형의 공격인가?",
    "options": [
      {
        "number": 1,
        "text": "부채널 공격"
      },
      {
        "number": 2,
        "text": "중간자 공격"
      },
      {
        "number": 3,
        "text": "스미싱"
      },
      {
        "number": 4,
        "text": "키로깅"
      }
    ],
    "answer": 1,
    "explanation": "**부채널 공격**은 연산 과정에서 관측되는 전력 소비, 처리 시간, 전자파 등의 정보를 이용해 비밀정보를 추정한다. 이 사례에서 공격자가 분석한 대상은 소비 전력의 변화이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q128",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "다음 중 인증 수단이 본인 여부를 확인하는 원리를 **잘못 설명한 것**은?",
    "options": [
      {
        "number": 1,
        "text": "비밀번호 인증은 사용자가 등록한 비밀을 알고 있는지 확인한다."
      },
      {
        "number": 2,
        "text": "지문 인증은 입력된 지문 특징을 등록된 특징과 대조한다."
      },
      {
        "number": 3,
        "text": "스마트카드 인증은 카드 내부의 개인키로 도전값에 서명하게 하여 해당 카드의 소지를 확인할 수 있다."
      },
      {
        "number": 4,
        "text": "시간 동기화 OTP 토큰은 사용자가 화면의 숫자를 보고 입력하므로 지식 요소를 확인한다."
      }
    ],
    "answer": 4,
    "explanation": "시간 동기화 OTP 토큰은 장치 내부의 비밀키와 현재 시간 구간으로 코드를 계산한다. 검증 대상은 **등록된 토큰의 소유**이다. 사용자가 별도로 기억한 PIN까지 검증한다면 그 PIN이 지식 요소가 된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q129",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "OTP 토큰이 버튼을 누를 때마다 카운터를 증가시킨다. 토큰은 공유 비밀키와 카운터로 코드를 생성하고, 서버는 자신이 관리하는 카운터를 기준으로 이를 검증한다. 이 방식은?",
    "options": [
      {
        "number": 1,
        "text": "시간 동기화 방식"
      },
      {
        "number": 2,
        "text": "이벤트 동기화 방식"
      },
      {
        "number": 3,
        "text": "질의·응답 방식"
      },
      {
        "number": 4,
        "text": "S/KEY 방식"
      }
    ],
    "answer": 2,
    "explanation": "**이벤트 동기화 방식**은 코드 생성과 같은 이벤트가 발생할 때 변하는 카운터를 사용한다. 시간 동기화 방식에서는 현재 시간 구간이 코드 생성의 입력이 된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q130",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "이벤트 동기화 OTP 토큰의 버튼을 여러 번 누르고 코드를 서버에 제출하지 않았다. 다음 인증에서 토큰과 서버 사이의 차이를 확인해야 하는 값은?",
    "options": [
      {
        "number": 1,
        "text": "양측 시계가 가리키는 현재 시각"
      },
      {
        "number": 2,
        "text": "사용자가 입력한 PIN의 자릿수"
      },
      {
        "number": 3,
        "text": "OTP 생성 횟수를 나타내는 카운터"
      },
      {
        "number": 4,
        "text": "서버가 보낸 일회성 도전값"
      }
    ],
    "answer": 3,
    "explanation": "토큰은 코드를 생성할 때마다 카운터를 진행시킨다. 생성한 코드를 제출하지 않으면 토큰의 카운터가 서버의 예상값보다 앞설 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q131",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "일방향 해시함수를 반복 적용해 값의 사슬을 만든 뒤, 생성 순서의 역순으로 값을 하나씩 OTP로 사용한다. 서버는 제출된 값을 한 번 해시해 보관 중인 검증값과 비교한다. 이 방식은?",
    "options": [
      {
        "number": 1,
        "text": "S/KEY 방식"
      },
      {
        "number": 2,
        "text": "시간 동기화 방식"
      },
      {
        "number": 3,
        "text": "카운터 기반 HOTP 방식"
      },
      {
        "number": 4,
        "text": "서버 난수에 대한 질의·응답 방식"
      }
    ],
    "answer": 1,
    "explanation": "**S/KEY**는 일방향 해시 체인을 이용한다. 서버는 검증에 성공하면 방금 제출된 값을 다음 검증값으로 저장한다. 이미 사용한 값에서 다음에 제출할 값을 구하려면 해시를 거슬러 올라가야 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q132",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "생체정보를 이용한 사용자 인증에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "지문이나 홍채에서 추출한 특징을 인증에 사용할 수 있다."
      },
      {
        "number": 2,
        "text": "등록 단계에서 추출한 생체 특징을 템플릿으로 보관할 수 있다."
      },
      {
        "number": 3,
        "text": "사용자가 인증용 생체 특징을 별도로 외울 필요가 없다."
      },
      {
        "number": 4,
        "text": "템플릿 등록을 마치면 본인을 거부하거나 타인을 본인으로 수락하는 오류가 발생하지 않는다."
      }
    ],
    "answer": 4,
    "explanation": "생체 인증은 입력 특징과 등록 템플릿의 유사도를 기준으로 판정한다. 센서 상태, 측정 환경, 판정 임계값에 따라 **본인 거부**와 **타인 수락**이 모두 발생할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q134",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "다음 생체 인증 사례 중 사용자의 **행동 패턴**이 아니라 **신체 구조**를 측정하는 것은?",
    "options": [
      {
        "number": 1,
        "text": "서명할 때 펜을 움직이는 속도와 필압 측정"
      },
      {
        "number": 2,
        "text": "눈·코·입의 상대적 위치 등 얼굴 특징 측정"
      },
      {
        "number": 3,
        "text": "키보드에서 키를 누르고 떼는 시간 간격 측정"
      },
      {
        "number": 4,
        "text": "문장을 읽을 때 나타나는 말하기 속도와 발화 리듬 측정"
      }
    ],
    "answer": 2,
    "explanation": "얼굴의 기하학적 구조는 **신체적 특징**이다. 서명 속도, 타건 간격, 발화 리듬은 각각 쓰기·입력하기·말하기 과정에서 나타나는 행동적 특징이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q135",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "여러 업무 서비스를 중앙 인증 시스템에 연동해 SSO를 도입했다. 다음 중 도입 효과에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "중앙 인증 후 연동된 서비스를 이용할 때 반복 로그인을 줄일 수 있다."
      },
      {
        "number": 2,
        "text": "인증 서버를 이중화하지 않으면 장애 시 여러 서비스의 신규 로그인이 영향을 받을 수 있다."
      },
      {
        "number": 3,
        "text": "인증을 중앙화하면 서비스별 비밀번호를 재설정하는 업무가 반드시 증가한다."
      },
      {
        "number": 4,
        "text": "사용자가 업무 서비스마다 별도의 비밀번호를 기억해야 하는 부담을 줄일 수 있다."
      }
    ],
    "answer": 3,
    "explanation": "SSO는 여러 서비스가 중앙 인증 결과를 활용하므로 개별 비밀번호의 관리·재설정 업무를 줄일 수 있다. 총운영비는 구축 방식과 운영 환경에 따라 달라진다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q137",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "Kerberos의 기본 인증 구조를 **클라이언트, 키 분배 센터(KDC), 서비스 서버**로 나누어 볼 때, 다음 중 이 구조에 필수적으로 포함되지 않는 기관은?",
    "options": [
      {
        "number": 1,
        "text": "서비스 티켓을 제시하는 클라이언트"
      },
      {
        "number": 2,
        "text": "인증 서버(AS)와 티켓 발급 서버(TGS)의 기능을 수행하는 KDC"
      },
      {
        "number": 3,
        "text": "티켓을 검증하고 서비스를 제공하는 서버"
      },
      {
        "number": 4,
        "text": "사용자 공개키 인증서를 발급하는 인증기관(CA)"
      }
    ],
    "answer": 4,
    "explanation": "기본 Kerberos는 KDC가 발급하는 티켓과 대칭키를 이용한다. 공개키 인증을 결합한 확장 방식에서 CA를 활용할 수 있지만, 기본 티켓 인증 절차에는 CA가 필수 구성요소로 들어가지 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q138",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "Kerberos 서비스 서버가 수신한 인증자(Authenticator)가 허용된 시간 범위 안에서 최근에 생성되었는지 판단할 때 확인하는 값은?",
    "options": [
      {
        "number": 1,
        "text": "클라이언트가 인증자에 넣은 타임스탬프"
      },
      {
        "number": 2,
        "text": "사용자의 비밀번호 만료일"
      },
      {
        "number": 3,
        "text": "브라우저 쿠키의 식별자"
      },
      {
        "number": 4,
        "text": "서비스 계정의 키 길이"
      }
    ],
    "answer": 1,
    "explanation": "서버는 **타임스탬프**를 현재 시각과 비교해 오래된 인증자를 거부한다. 허용 시간 안에서 같은 인증자가 재전송되는 경우에는 이미 처리한 인증자의 기록인 재전송 캐시를 이용해 중복을 탐지한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q139",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "Kerberos 프로토콜의 목적과 동작에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "기본 방식은 대칭키를 이용하며 신뢰할 수 있는 KDC가 티켓과 세션키를 발급한다."
      },
      {
        "number": 2,
        "text": "클라이언트의 신원을 확인하지 않고도 보호된 서비스에 접근시키는 것이 티켓 검증의 목적이다."
      },
      {
        "number": 3,
        "text": "클라이언트는 대상 서비스용 티켓과 인증자를 서비스 서버에 제시한다."
      },
      {
        "number": 4,
        "text": "이용 가능한 KDC가 모두 중단되면 새 서비스 티켓을 발급받을 수 없다."
      }
    ],
    "answer": 2,
    "explanation": "서비스 서버는 티켓을 검증하고, 인증자를 통해 요청자가 해당 세션키를 보유했는지 확인한다. 이를 바탕으로 클라이언트를 인증하며, 실제 자원 접근 허용 여부는 서비스의 인가 정책에 따른다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q140",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "신뢰할 수 있는 제3자가 각 참여자와 장기 비밀키를 공유하고 통신에 필요한 세션키를 분배한다. Kerberos의 키 분배 설계에 기초가 된 프로토콜은?",
    "options": [
      {
        "number": 1,
        "text": "Diffie–Hellman 키 합의 프로토콜"
      },
      {
        "number": 2,
        "text": "RSA 키 전송 방식"
      },
      {
        "number": 3,
        "text": "Needham–Schroeder 대칭키 프로토콜"
      },
      {
        "number": 4,
        "text": "S/KEY 일회용 패스워드 방식"
      }
    ],
    "answer": 3,
    "explanation": "**Needham–Schroeder 대칭키 프로토콜**은 신뢰하는 중앙 기관을 통해 두 참여자가 세션키를 얻도록 한다. Kerberos는 이 설계에 바탕을 두고 티켓과 타임스탬프를 활용한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q141",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "Kerberos의 보안 기능과 운영상 제약에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "분산된 서비스들이 중앙 KDC를 신뢰하여 사용자를 인증할 수 있다."
      },
      {
        "number": 2,
        "text": "클라이언트 단말이 침해되면 캐시에 저장된 티켓과 세션키가 탈취될 수 있다."
      },
      {
        "number": 3,
        "text": "비밀번호에서 장기키를 도출하는 구성에서는 약한 비밀번호가 추측 공격의 대상이 될 수 있다."
      },
      {
        "number": 4,
        "text": "Kerberos로는 응용 메시지의 기밀성을 보호할 수 있지만 무결성을 보호할 방법은 없다."
      }
    ],
    "answer": 4,
    "explanation": "Kerberos는 인증 후 세션키를 이용해 응용 메시지의 **무결성**을 보호하는 기능도 지원한다. 응용 데이터가 실제로 어떤 보호를 받는지는 서비스가 선택한 보호 기능에 따라 달라진다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q142",
    "partId": 3,
    "sectionId": 9,
    "sectionTitle": "사용자 인증",
    "sourceSection": "SECTION 02 사용자 인증",
    "question": "비밀번호 기반 Kerberos 환경에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "사용자가 첫 인증을 마치면 TGT를 이용해 여러 서비스의 개별 티켓을 요청할 수 있다."
      },
      {
        "number": 2,
        "text": "비밀번호 자체가 네트워크에 평문으로 전송되지 않으므로 짧고 흔한 비밀번호를 써도 추측 공격에 안전하다."
      },
      {
        "number": 3,
        "text": "서비스 티켓은 해당 티켓에 지정된 서비스를 이용할 때 제시한다."
      },
      {
        "number": 4,
        "text": "인증자의 타임스탬프와 재전송 캐시는 과거 인증 요청을 다시 사용하는 공격에 대응하는 데 쓰인다."
      }
    ],
    "answer": 2,
    "explanation": "비밀번호를 평문으로 전송하지 않아도 공격자가 후보 비밀번호를 시험할 수 있는 인증 데이터를 확보하면 **오프라인 사전 공격**을 시도할 수 있다. 흔한 비밀번호일수록 올바른 후보를 찾기 쉽다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q143",
    "partId": 3,
    "sectionId": 10,
    "sectionTitle": "접근통제 보안 모델",
    "sourceSection": "SECTION 03 접근통제 보안 모델",
    "question": "접근통제의 기본 개념에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "파일 읽기를 요청하는 프로세스는 주체이고, 요청 대상인 파일은 객체이다."
      },
      {
        "number": 2,
        "text": "사용자에게 한 파일의 읽기 권한을 부여하면 시스템의 다른 자원에도 모든 권한이 부여된다."
      },
      {
        "number": 3,
        "text": "접근 허용 여부를 판단할 때 사용자의 신원이나 역할을 이용할 수 있다."
      },
      {
        "number": 4,
        "text": "대표적인 접근통제 방식에는 DAC, MAC, RBAC가 있다."
      }
    ],
    "answer": 2,
    "explanation": "접근권한은 **어떤 객체에 어떤 작업을 할 수 있는지**를 정한다. 한 파일을 읽을 수 있어도 그 파일을 수정하거나 다른 파일을 열람하려면 해당 권한이 필요하다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q144",
    "partId": 3,
    "sectionId": 10,
    "sectionTitle": "접근통제 보안 모델",
    "sourceSection": "SECTION 03 접근통제 보안 모델",
    "question": "다음 중 **역할 기반 접근통제(RBAC)**의 특징에 해당하는 것은?",
    "options": [
      {
        "number": 1,
        "text": "주체의 보안 취급인가와 객체의 비밀등급을 비교한다."
      },
      {
        "number": 2,
        "text": "파일 소유자도 중앙에서 정한 보안등급 제한을 임의로 해제할 수 없다."
      },
      {
        "number": 3,
        "text": "객체에 부여한 보안 레이블에 따라 정보의 흐름을 강제한다."
      },
      {
        "number": 4,
        "text": "업무 권한을 직무 역할에 연결하고, 인사이동 시 사용자에게 할당된 역할을 변경한다."
      }
    ],
    "answer": 4,
    "explanation": "RBAC에서는 권한을 역할에 묶는다. 예를 들어 구매 담당자가 회계 담당자로 이동하면 구매 역할을 회수하고 회계 역할을 할당할 수 있다. ①~③은 보안등급을 사용하는 강제적 접근통제(MAC)의 특징이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q145",
    "partId": 3,
    "sectionId": 10,
    "sectionTitle": "접근통제 보안 모델",
    "sourceSection": "SECTION 03 접근통제 보안 모델",
    "question": "강제적 접근통제(MAC)에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "파일 소유자가 접근제어목록(ACL)에 사용자를 추가하면 중앙 정책이 금지한 접근도 허용된다."
      },
      {
        "number": 2,
        "text": "시스템은 주체와 객체에 부여된 보안 레이블을 접근 판단에 사용할 수 있다."
      },
      {
        "number": 3,
        "text": "보안관리자가 정한 규칙을 여러 사용자의 접근 요청에 일관되게 적용할 수 있다."
      },
      {
        "number": 4,
        "text": "Bell–LaPadula와 Biba는 등급에 따른 접근 제한을 설명하는 대표적인 모델이다."
      }
    ],
    "answer": 1,
    "explanation": "MAC에서는 중앙 정책의 제한이 소유자의 권한 설정보다 우선한다. ACL에 읽기 권한이 있어도 MAC 정책이 읽기를 금지하면 요청은 거부된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q146",
    "partId": 3,
    "sectionId": 10,
    "sectionTitle": "접근통제 보안 모델",
    "sourceSection": "SECTION 03 접근통제 보안 모델",
    "question": "임의적 접근통제(DAC)의 특징으로 가장 적절한 것은?",
    "options": [
      {
        "number": 1,
        "text": "주체와 객체의 보안등급을 비교한 결과만으로 권한을 결정한다."
      },
      {
        "number": 2,
        "text": "사용자가 과거에 열람한 경쟁사의 자료를 기준으로 접근을 제한한다."
      },
      {
        "number": 3,
        "text": "파일 소유자가 허용된 범위에서 다른 사용자에게 읽기·쓰기 권한을 부여하거나 회수한다."
      },
      {
        "number": 4,
        "text": "조직의 모든 권한을 직무 역할에만 연결하고 사용자에게 역할을 할당한다."
      }
    ],
    "answer": 3,
    "explanation": "DAC에서는 객체의 소유자가 해당 객체에 누가 어떤 방식으로 접근할 수 있는지 정할 수 있다. 예를 들어 문서 작성자가 동료에게 열람만 허용하고 편집은 제한할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q148",
    "partId": 3,
    "sectionId": 10,
    "sectionTitle": "접근통제 보안 모델",
    "sourceSection": "SECTION 03 접근통제 보안 모델",
    "question": "보안 모델과 접근통제 방식에 대한 설명으로 옳은 것을 **모두** 고른 것은?\n\nㄱ. 엄격한 Biba 모델은 낮은 무결성 등급의 객체 읽기와 높은 무결성 등급의 객체 쓰기를 금지한다.\nㄴ. 등급 기반 MAC은 주체의 취급인가와 객체의 보안 레이블에 정책을 적용한다.\nㄷ. DAC는 객체 소유자의 판단에 따라 다른 사용자에게 접근권한을 부여할 수 있다.\nㄹ. RBAC는 권한을 역할에 연결하고 사용자에게 역할을 할당한다.",
    "options": [
      {
        "number": 1,
        "text": "ㄱ, ㄴ, ㄷ, ㄹ"
      },
      {
        "number": 2,
        "text": "ㄱ, ㄴ, ㄷ"
      },
      {
        "number": 3,
        "text": "ㄱ, ㄷ, ㄹ"
      },
      {
        "number": 4,
        "text": "ㄴ, ㄷ, ㄹ"
      }
    ],
    "answer": 1,
    "explanation": "ㄱ은 낮은 무결성의 정보가 높은 무결성의 객체에 영향을 주는 것을 막는 규칙이다. ㄴ~ㄹ은 각각 **등급과 중앙 정책**, **소유자의 재량**, **업무 역할**을 기준으로 권한을 결정하는 방식을 설명한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q149",
    "partId": 3,
    "sectionId": 10,
    "sectionTitle": "접근통제 보안 모델",
    "sourceSection": "SECTION 03 접근통제 보안 모델",
    "question": "운영체제에서 접근통제를 구현한 사례에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "리눅스의 전통적인 파일 권한은 소유자·그룹·기타 사용자를 구분하는 DAC의 사례이다."
      },
      {
        "number": 2,
        "text": "접근통제 감사 로그에는 어떤 주체가 어떤 자원에 접근을 시도했는지 기록할 수 있다."
      },
      {
        "number": 3,
        "text": "강제적 접근통제는 이론적 모델이므로 실제 운영체제에서는 구현할 수 없다."
      },
      {
        "number": 4,
        "text": "SELinux는 프로세스와 파일의 보안 문맥을 이용해 접근을 제한할 수 있다."
      }
    ],
    "answer": 3,
    "explanation": "**SELinux**는 리눅스에서 MAC을 구현한 사례이다. 정책을 강제하는 모드에서는 파일 권한상 허용된 요청도 SELinux 정책에 어긋나면 거부된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q150",
    "partId": 3,
    "sectionId": 10,
    "sectionTitle": "접근통제 보안 모델",
    "sourceSection": "SECTION 03 접근통제 보안 모델",
    "question": "주체를 행에, 객체를 열에 배치하고 각 칸에 읽기·쓰기 등의 권한을 기록한다. 모든 칸을 그대로 저장하면 권한이 없는 조합까지 공간을 차지한다. 이 표현 방식은?",
    "options": [
      {
        "number": 1,
        "text": "접근제어목록(ACL)"
      },
      {
        "number": 2,
        "text": "접근통제 행렬(Access Control Matrix)"
      },
      {
        "number": 3,
        "text": "능력 목록(Capability List)"
      },
      {
        "number": 4,
        "text": "역할 계층(Role Hierarchy)"
      }
    ],
    "answer": 2,
    "explanation": "**접근통제 행렬**에서 주체가 m개, 객체가 n개이면 칸은 m×n개이다. 객체 하나를 기준으로 권한을 모으면 ACL에, 주체 하나를 기준으로 접근 가능한 객체와 권한을 모으면 능력 목록에 대응한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q151",
    "partId": 3,
    "sectionId": 10,
    "sectionTitle": "접근통제 보안 모델",
    "sourceSection": "SECTION 03 접근통제 보안 모델",
    "question": "결제 시스템에서 무결성 등급이 높은 정산 프로세스가 낮은 등급의 입력 파일을 읽지 못하게 했다. 또한 낮은 등급의 프로세스가 높은 등급의 회계 원장에 기록하는 것도 금지했다. 이 두 규칙을 적용한 모델은?",
    "options": [
      {
        "number": 1,
        "text": "Bell–LaPadula 모델"
      },
      {
        "number": 2,
        "text": "Clark–Wilson 모델"
      },
      {
        "number": 3,
        "text": "만리장성 모델"
      },
      {
        "number": 4,
        "text": "Biba 모델"
      }
    ],
    "answer": 4,
    "explanation": "엄격한 **Biba 무결성 모델**은 주체가 자신보다 낮은 무결성 등급의 객체를 읽는 것(No Read Down)과 높은 무결성 등급의 객체에 쓰는 것(No Write Up)을 금지한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q152",
    "partId": 3,
    "sectionId": 10,
    "sectionTitle": "접근통제 보안 모델",
    "sourceSection": "SECTION 03 접근통제 보안 모델",
    "question": "Bell–LaPadula(BLP) 모델에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "기밀성과 무결성을 동등한 보호 목표로 삼아 낮은 무결성의 데이터 유입까지 통제한다."
      },
      {
        "number": 2,
        "text": "주체와 객체의 보안 레이블을 이용해 접근을 통제한다."
      },
      {
        "number": 3,
        "text": "단순 보안 속성은 주체가 자신의 등급보다 높은 객체를 읽지 못하게 한다."
      },
      {
        "number": 4,
        "text": "별표 속성은 주체가 자신의 등급보다 낮은 객체에 정보를 기록하지 못하게 한다."
      }
    ],
    "answer": 1,
    "explanation": "BLP의 주된 보호 목표는 **기밀성**이다. 상위 등급의 정보가 하위 등급으로 흘러가는 것을 제한한다. 낮은 무결성의 데이터가 높은 무결성의 데이터를 오염시키는 문제는 Biba 모델이 다룬다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q153",
    "partId": 3,
    "sectionId": 10,
    "sectionTitle": "접근통제 보안 모델",
    "sourceSection": "SECTION 03 접근통제 보안 모델",
    "question": "BLP 모델에서 보안등급은 ‘일반 < 비밀 < 극비’ 순이다. 현재 ‘비밀’ 등급인 주체의 요청 중 **단순 보안 속성(No Read Up)**에 의해 차단되는 것은? 단, 보안 범주는 모두 같다고 가정한다.",
    "options": [
      {
        "number": 1,
        "text": "‘일반’ 등급 문서 읽기"
      },
      {
        "number": 2,
        "text": "‘비밀’ 등급 문서 읽기"
      },
      {
        "number": 3,
        "text": "‘극비’ 등급 문서 읽기"
      },
      {
        "number": 4,
        "text": "‘일반’ 등급 문서에 쓰기"
      }
    ],
    "answer": 3,
    "explanation": "‘극비’는 주체의 현재 등급인 ‘비밀’보다 높으므로 **상위 등급 읽기 금지** 규칙에 걸린다. ④도 BLP에서 차단되지만, 적용되는 규칙은 별표 속성인 **하위 등급 쓰기 금지(No Write Down)**이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q154",
    "partId": 3,
    "sectionId": 10,
    "sectionTitle": "접근통제 보안 모델",
    "sourceSection": "SECTION 03 접근통제 보안 모델",
    "question": "컨설턴트는 처음에는 경쟁 관계인 A사와 B사 중 어느 회사의 비공개 자료든 선택해 열람할 수 있다. 그러나 A사의 자료를 열람한 뒤에는 B사의 비공개 자료에 접근할 수 없다. 이처럼 과거 접근 이력에 따라 이해충돌을 방지하는 모델은?",
    "options": [
      {
        "number": 1,
        "text": "Clark–Wilson 모델"
      },
      {
        "number": 2,
        "text": "만리장성(Chinese Wall) 모델"
      },
      {
        "number": 3,
        "text": "Biba 무결성 모델"
      },
      {
        "number": 4,
        "text": "Bell–LaPadula 모델"
      }
    ],
    "answer": 2,
    "explanation": "**만리장성 모델**은 같은 이해충돌 집합에 속한 기업들의 정보를 한 사람이 함께 취급하지 못하도록 한다. 따라서 같은 직무를 맡은 컨설턴트라도 어느 회사의 자료를 먼저 열람했는지에 따라 이후 접근 가능한 자료가 달라진다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q155",
    "partId": 3,
    "sectionId": 11,
    "sectionTitle": "접근통제 보안위협 및 대응책",
    "sourceSection": "SECTION 04 접근통제 보안위협 및 대응책",
    "question": "공격자가 비밀번호에 사용할 문자 집합과 길이 범위를 정한 뒤, 그 범위에서 가능한 모든 문자열을 하나씩 생성해 비밀번호 후보로 시험한다. 이 공격 기법은?",
    "options": [
      {
        "number": 1,
        "text": "사전 공격"
      },
      {
        "number": 2,
        "text": "사회공학 공격"
      },
      {
        "number": 3,
        "text": "무차별 대입 공격"
      },
      {
        "number": 4,
        "text": "패스워드 덤프"
      }
    ],
    "answer": 3,
    "explanation": "**무차별 대입 공격(Brute Force)**은 정해진 범위의 모든 후보를 체계적으로 시험한다. 사전 공격은 미리 준비한 단어나 그 변형을 후보로 사용한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q156",
    "partId": 3,
    "sectionId": 11,
    "sectionTitle": "접근통제 보안위협 및 대응책",
    "sourceSection": "SECTION 04 접근통제 보안위협 및 대응책",
    "question": "한 도구에서 해시 알고리즘, 문자 집합, 문자열 길이, 체인 길이를 지정해 레인보우 테이블을 생성했다. 이 테이블의 주된 용도는?",
    "options": [
      {
        "number": 1,
        "text": "네트워크 패킷 위조"
      },
      {
        "number": 2,
        "text": "패스워드 크래킹"
      },
      {
        "number": 3,
        "text": "파일 무결성 점검"
      },
      {
        "number": 4,
        "text": "분산 서비스 거부(DDoS) 공격"
      }
    ],
    "answer": 2,
    "explanation": "**레인보우 테이블**은 해시 연산과 환원 함수를 반복해 만든 체인의 시작값과 끝값을 저장한다. 공격자는 미리 계산한 체인을 이용해 확보한 비밀번호 해시와 일치하는 후보를 찾는 시간을 줄일 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q157",
    "partId": 4,
    "sectionId": 12,
    "sectionTitle": "보안 운영체제",
    "sourceSection": "SECTION 01 보안 운영체제",
    "question": "보안 운영체제에서 프로세스가 보호된 파일에 접근하려면 반드시 이 구성요소를 거쳐야 한다. 이 구성요소는 주체의 권한과 접근 규칙을 확인해 요청을 허용하거나 거부한다. 이처럼 참조 모니터(Reference Monitor) 개념을 구현한 것은?",
    "options": [
      {
        "number": 1,
        "text": "시스템 호출"
      },
      {
        "number": 2,
        "text": "접근통제 API"
      },
      {
        "number": 3,
        "text": "보안 커널"
      },
      {
        "number": 4,
        "text": "상주형 악성코드 탐지 엔진"
      }
    ],
    "answer": 3,
    "explanation": "**보안 커널**은 주체와 객체 사이의 모든 접근을 중재하고 보안정책을 집행한다. 시스템 호출은 프로세스가 운영체제에 파일 열기 등의 서비스를 요청할 때 사용하는 인터페이스이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q158",
    "partId": 4,
    "sectionId": 12,
    "sectionTitle": "보안 운영체제",
    "sourceSection": "SECTION 01 보안 운영체제",
    "question": "컴퓨터 시스템의 보안정책을 집행하는 데 필요한 하드웨어·펌웨어·소프트웨어 보호 메커니즘 전체를 가리키는 용어는?",
    "options": [
      {
        "number": 1,
        "text": "프로세스 제어 블록(PCB)"
      },
      {
        "number": 2,
        "text": "신뢰 컴퓨팅 기반(TCB)"
      },
      {
        "number": 3,
        "text": "유효 그룹 식별자(EGID)"
      },
      {
        "number": 4,
        "text": "캐시 일관성(Cache Coherence)"
      }
    ],
    "answer": 2,
    "explanation": "**TCB(Trusted Computing Base)**는 보안정책이 올바르게 집행되기 위해 신뢰해야 하는 구성요소의 집합이다. 접근 요청을 중재하는 보안 커널도 TCB에 포함된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q159",
    "partId": 4,
    "sectionId": 12,
    "sectionTitle": "보안 운영체제",
    "sourceSection": "SECTION 01 보안 운영체제",
    "question": "PC에서 암호키를 보호하고, 부팅 구성요소의 측정값을 플랫폼 구성 레지스터(PCR)에 누적한다. 측정된 부팅 상태가 지정한 조건과 일치할 때만 보호된 키를 사용할 수 있도록 지원하는 보안 모듈은?",
    "options": [
      {
        "number": 1,
        "text": "보안 참조 모니터(SRM)"
      },
      {
        "number": 2,
        "text": "보안 계정 관리자(SAM)"
      },
      {
        "number": 3,
        "text": "보안 식별자(SID)"
      },
      {
        "number": 4,
        "text": "신뢰 플랫폼 모듈(TPM)"
      }
    ],
    "answer": 4,
    "explanation": "**TPM(Trusted Platform Module)**은 암호키를 보호하고 플랫폼 상태를 검증하는 데 쓰인다. 예를 들어 디스크 암호화 키의 사용 조건을 PCR 값에 연결하면 부팅 구성이 달라졌을 때 키의 자동 사용을 제한할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q160",
    "partId": 4,
    "sectionId": 13,
    "sectionTitle": "클라이언트 보안",
    "sourceSection": "SECTION 02 클라이언트 보안",
    "question": "트로이목마에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "유용한 프로그램처럼 위장해 사용자가 실행하도록 유도할 수 있다."
      },
      {
        "number": 2,
        "text": "정상 기능을 제공하면서 뒤에서 사용자 정보를 유출할 수 있다."
      },
      {
        "number": 3,
        "text": "네트워크를 통해 스스로 복제·전파하는 기능이 있어야 트로이목마로 분류된다."
      },
      {
        "number": 4,
        "text": "실행된 뒤 공격자가 시스템에 다시 접근할 수 있도록 백도어를 설치할 수 있다."
      }
    ],
    "answer": 3,
    "explanation": "트로이목마의 특징은 정상 프로그램처럼 보이면서 숨겨진 악성 기능을 수행한다는 점이다. 네트워크를 통한 자가 복제·전파는 웜의 대표적인 특징이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q161",
    "partId": 4,
    "sectionId": 13,
    "sectionTitle": "클라이언트 보안",
    "sourceSection": "SECTION 02 클라이언트 보안",
    "question": "다음 중 감염된 PC에서 트로이목마가 수행할 수 있는 악성 행위와 비교할 때, **웜의 전파 방식**을 가장 잘 보여 주는 것은?",
    "options": [
      {
        "number": 1,
        "text": "다른 호스트의 취약점을 찾아 자신의 복사본을 자동으로 전송하고 실행한다."
      },
      {
        "number": 2,
        "text": "공격자의 지시를 받아 감염된 PC를 원격으로 조종한다."
      },
      {
        "number": 3,
        "text": "사용자가 입력한 계정명과 비밀번호를 몰래 수집한다."
      },
      {
        "number": 4,
        "text": "시스템 파일을 삭제해 운영체제의 정상 동작을 방해한다."
      }
    ],
    "answer": 1,
    "explanation": "①에서는 감염된 호스트가 다음 호스트에 자신의 복사본을 퍼뜨린다. ②~④는 각각 원격 조종, 인증정보 탈취, 파일 파괴로, 트로이목마에 숨겨질 수 있는 기능이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q162",
    "partId": 4,
    "sectionId": 13,
    "sectionTitle": "클라이언트 보안",
    "sourceSection": "SECTION 02 클라이언트 보안",
    "question": "키로거의 동작과 대응 방법에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "키로거는 사용자가 누른 키를 순서대로 기록할 수 있다."
      },
      {
        "number": 2,
        "text": "악성 키로거는 수집한 기록을 일정한 간격으로 외부에 전송할 수 있다."
      },
      {
        "number": 3,
        "text": "키로거가 설치된 PC에서 비밀번호를 입력했다면 신뢰할 수 있는 다른 기기에서 해당 비밀번호를 변경한다."
      },
      {
        "number": 4,
        "text": "비밀번호를 입력할 때 타건 간격을 불규칙하게 바꾸면 키로거가 입력한 문자를 기록하지 못한다."
      }
    ],
    "answer": 4,
    "explanation": "키로거는 어떤 키가 눌렸는지를 기록한다. 입력 속도나 키 사이의 간격을 바꾸어도 입력한 문자와 그 순서는 기록될 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q163",
    "partId": 4,
    "sectionId": 13,
    "sectionTitle": "클라이언트 보안",
    "sourceSection": "SECTION 02 클라이언트 보안",
    "question": "교재의 컴퓨터 바이러스 5세대 분류에 따라 **1세대부터 5세대까지** 순서대로 나열한 것은?",
    "options": [
      {
        "number": 1,
        "text": "원시형 → 은폐형 → 암호형 → 갑옷형 → 매크로형"
      },
      {
        "number": 2,
        "text": "원시형 → 암호형 → 은폐형 → 갑옷형 → 매크로형"
      },
      {
        "number": 3,
        "text": "원시형 → 암호형 → 갑옷형 → 은폐형 → 매크로형"
      },
      {
        "number": 4,
        "text": "원시형 → 갑옷형 → 은폐형 → 암호형 → 매크로형"
      }
    ],
    "answer": 2,
    "explanation": "2세대 암호형은 바이러스 코드의 일부를 암호화하고, 3세대 은폐형은 감염 전의 파일 정보 등을 보여 주어 감염 흔적을 감춘다. 4세대 갑옷형은 분석을 어렵게 하며, 5세대 매크로형은 응용 프로그램의 매크로 기능을 이용한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q164",
    "partId": 4,
    "sectionId": 13,
    "sectionTitle": "클라이언트 보안",
    "sourceSection": "SECTION 02 클라이언트 보안",
    "question": "악성코드 유형과 그 유형을 구별하는 대표 특징을 연결한 것 중 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "바이러스 — 프로그램이나 문서 등 숙주에 자신의 코드를 복제한다."
      },
      {
        "number": 2,
        "text": "웜 — 독립적으로 실행되며 네트워크를 통해 자신을 전파할 수 있다."
      },
      {
        "number": 3,
        "text": "백도어 — 사용자 몰래 웹 이용 기록과 개인정보를 수집하는 것이 유형을 구별하는 핵심 특징이다."
      },
      {
        "number": 4,
        "text": "논리 폭탄 — 미리 지정한 날짜나 사건 등 특정 조건이 충족되면 악성 동작을 수행한다."
      }
    ],
    "answer": 3,
    "explanation": "사용자 활동을 몰래 관찰해 정보를 수집하는 것은 **스파이웨어**의 대표 특징이다. **백도어**는 정상적인 인증이나 접근통제를 우회해 시스템에 접근할 수 있게 하는 통로이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q165",
    "partId": 4,
    "sectionId": 13,
    "sectionTitle": "클라이언트 보안",
    "sourceSection": "SECTION 02 클라이언트 보안",
    "question": "바이러스와 악성코드에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "트로이목마는 배포된 뒤 반드시 다른 프로그램을 감염시켜 자신의 코드를 복제한다."
      },
      {
        "number": 2,
        "text": "랜섬웨어는 사용자의 파일을 암호화하고 복구를 대가로 금전을 요구할 수 있다."
      },
      {
        "number": 3,
        "text": "봇넷은 공격자의 명령을 받는 여러 감염 기기로 구성되며 DDoS 공격 등에 이용될 수 있다."
      },
      {
        "number": 4,
        "text": "바이러스는 실행 파일이나 매크로를 포함한 문서 등에 자신의 코드를 복제할 수 있다."
      }
    ],
    "answer": 1,
    "explanation": "다른 숙주에 자신의 코드를 복제하는 것은 바이러스의 특징이다. 트로이목마는 자기복제 기능이 없어도 정상 프로그램으로 위장해 실행되면 정보 탈취 등의 피해를 일으킬 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q167",
    "partId": 4,
    "sectionId": 13,
    "sectionTitle": "클라이언트 보안",
    "sourceSection": "SECTION 02 클라이언트 보안",
    "question": "브라우저가 본문을 포함한 **HTTP/1.1 요청 메시지**를 보낸다. 메시지의 구성 요소를 전송 순서대로 바르게 나열한 것은?",
    "options": [
      {
        "number": 1,
        "text": "요청 줄 → 빈 줄 → 헤더 → 본문"
      },
      {
        "number": 2,
        "text": "요청 줄 → 헤더 → 본문 → 빈 줄"
      },
      {
        "number": 3,
        "text": "헤더 → 요청 줄 → 빈 줄 → 본문"
      },
      {
        "number": 4,
        "text": "요청 줄 → 헤더 → 빈 줄 → 본문"
      }
    ],
    "answer": 4,
    "explanation": "요청 줄에는 메서드, 요청 대상, HTTP 버전이 들어간다. 그 뒤에 헤더 필드가 이어지며, **빈 줄**이 헤더 영역의 끝을 표시한다. 본문이 있으면 그 다음에 온다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q168",
    "partId": 4,
    "sectionId": 13,
    "sectionTitle": "클라이언트 보안",
    "sourceSection": "SECTION 02 클라이언트 보안",
    "question": "사용자가 게시판의 HTML 폼에서 글과 첨부 파일을 제출한다. 브라우저가 입력값과 파일을 요청 본문에 담아 서버에 처리를 요청할 때 사용하는 메서드는?",
    "options": [
      {
        "number": 1,
        "text": "HEAD"
      },
      {
        "number": 2,
        "text": "POST"
      },
      {
        "number": 3,
        "text": "CONNECT"
      },
      {
        "number": 4,
        "text": "GET"
      }
    ],
    "answer": 2,
    "explanation": "**POST**는 제출한 데이터를 서버가 처리하도록 요청할 때 사용한다. 파일을 포함한 HTML 폼은 일반적으로 `multipart/form-data` 형식으로 본문을 구성한다. 본문에 담는 것만으로 전송 내용이 암호화되지는 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q169",
    "partId": 4,
    "sectionId": 13,
    "sectionTitle": "클라이언트 보안",
    "sourceSection": "SECTION 02 클라이언트 보안",
    "question": "사용자가 A 페이지에 있는 링크를 눌러 B 페이지로 이동했다. B 서버가 받은 HTTP 요청에서, 브라우저가 전송한 **참조 페이지 정보**를 확인할 수 있는 헤더 필드는?",
    "options": [
      {
        "number": 1,
        "text": "`Referer`"
      },
      {
        "number": 2,
        "text": "`User-Agent`"
      },
      {
        "number": 3,
        "text": "`Accept`"
      },
      {
        "number": 4,
        "text": "`Cookie`"
      }
    ],
    "answer": 1,
    "explanation": "`Referer`는 요청을 유발한 페이지의 주소 정보를 전달한다. 브라우저의 참조자 정책에 따라 전체 주소 대신 출처만 전달되거나 헤더가 생략될 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q170",
    "partId": 4,
    "sectionId": 13,
    "sectionTitle": "클라이언트 보안",
    "sourceSection": "SECTION 02 클라이언트 보안",
    "question": "HTTP 요청 메서드와 용도를 연결한 것 중 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "GET — 대상 리소스의 현재 표현을 조회한다."
      },
      {
        "number": 2,
        "text": "PUT — 지정한 URI의 리소스를 요청 본문의 내용으로 생성하거나 대체하도록 요청한다."
      },
      {
        "number": 3,
        "text": "TRACE — 대상 리소스에서 지원하는 메서드 등 통신 옵션을 조회한다."
      },
      {
        "number": 4,
        "text": "POST — 제출한 데이터를 대상 리소스가 처리하도록 요청한다."
      }
    ],
    "answer": 3,
    "explanation": "통신 옵션을 조회하는 메서드는 **OPTIONS**이다. **TRACE**는 최종 수신자가 받은 요청 메시지를 되돌려 보내도록 하여, 요청이 어떤 형태로 전달되었는지 확인하는 데 사용한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q171",
    "partId": 4,
    "sectionId": 13,
    "sectionTitle": "클라이언트 보안",
    "sourceSection": "SECTION 02 클라이언트 보안",
    "question": "HTTP 응답 상태 코드와 그 의미를 연결한 것 중 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "304 Not Modified — 조건부 조회 결과 기존 캐시를 재사용할 수 있다."
      },
      {
        "number": 2,
        "text": "408 Request Timeout — 서버가 기다리는 시간 안에 요청 전체를 수신하지 못했다."
      },
      {
        "number": 3,
        "text": "200 OK — 요청이 성공적으로 처리되었다."
      },
      {
        "number": 4,
        "text": "400 Not Found — 서버가 요청 대상 리소스를 찾지 못했다."
      }
    ],
    "answer": 4,
    "explanation": "**400 Bad Request**는 잘못된 요청 구문 등 클라이언트 측 오류로 서버가 요청을 처리할 수 없거나 처리하지 않겠다는 뜻이다. 요청 대상 리소스를 찾지 못했을 때 사용하는 상태 코드는 **404 Not Found**이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q174",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "Windows 명령 프롬프트에서 워크스테이션 서비스의 **통계 시작 시각**과 그 이후의 송수신 바이트 수를 함께 확인하는 명령은?",
    "options": [
      {
        "number": 1,
        "text": "`net session`"
      },
      {
        "number": 2,
        "text": "`net statistics workstation`"
      },
      {
        "number": 3,
        "text": "`net share`"
      },
      {
        "number": 4,
        "text": "`net config workstation`"
      }
    ],
    "answer": 2,
    "explanation": "`net statistics workstation`은 워크스테이션 서비스의 통계 수집 시작 시각과 네트워크 통계를 표시한다. 부팅 후 이 서비스를 다시 시작했다면 표시 시각은 실제 부팅 시각과 다를 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q175",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "다음 중 유닉스 계열에서 사용되며, 일반적인 Windows 환경에서 별도 드라이버 없이 읽고 쓸 수 있는 기본 파일시스템에 **해당하지 않는 것**은?",
    "options": [
      {
        "number": 1,
        "text": "NTFS"
      },
      {
        "number": 2,
        "text": "exFAT"
      },
      {
        "number": 3,
        "text": "UFS"
      },
      {
        "number": 4,
        "text": "FAT32"
      }
    ],
    "answer": 3,
    "explanation": "**UFS(Unix File System)**는 유닉스 계열 파일시스템이다. NTFS, exFAT, FAT32는 Windows에서 기본 지원한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q176",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "Windows 파일 서버가 NTFS 폴더를 SMB로 공유하고 있다. 공유 권한은 사용자에게 읽기와 변경을 허용하지만, 해당 파일의 NTFS 유효 권한은 읽기만 허용한다. 사용자가 이 공유 경로로 파일에 접근할 때 가능한 작업은?",
    "options": [
      {
        "number": 1,
        "text": "파일 읽기만 가능하다."
      },
      {
        "number": 2,
        "text": "파일 읽기와 수정이 모두 가능하다."
      },
      {
        "number": 3,
        "text": "파일 수정만 가능하다."
      },
      {
        "number": 4,
        "text": "두 권한이 다르므로 읽기와 수정이 모두 거부된다."
      }
    ],
    "answer": 1,
    "explanation": "네트워크 공유를 통한 접근에는 **공유 권한과 NTFS 권한이 모두 적용**된다. 읽기는 양쪽에서 허용되지만, 수정은 NTFS 권한에서 허용되지 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q177",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "NTFS의 기능과 Windows 관리 도구에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "파일과 폴더마다 사용자 또는 그룹의 접근권한을 설정할 수 있다."
      },
      {
        "number": 2,
        "text": "파일 단위 압축을 지원한다."
      },
      {
        "number": 3,
        "text": "EFS를 지원하는 환경에서는 파일을 암호화할 수 있다."
      },
      {
        "number": 4,
        "text": "이벤트 뷰어의 기본 기능으로 MFT의 개별 파일 레코드를 직접 열람할 수 있다."
      }
    ],
    "answer": 4,
    "explanation": "이벤트 뷰어는 보안·시스템·응용 프로그램 등의 **이벤트 로그**를 조회하는 도구이다. MFT(Master File Table)의 파일 레코드를 직접 조사하려면 NTFS 구조를 해석하는 도구가 필요하다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q178",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "FAT32와 NTFS를 비교한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "FAT32는 여러 운영체제와 장치에서 이동식 저장장치의 형식으로 사용된다."
      },
      {
        "number": 2,
        "text": "NTFS 볼륨은 운영체제나 드라이버에 관계없이 모든 장치에서 읽기와 쓰기가 보장된다."
      },
      {
        "number": 3,
        "text": "NTFS는 파일과 폴더에 사용자별 접근권한을 설정할 수 있다."
      },
      {
        "number": 4,
        "text": "FAT 계열 이름의 숫자는 클러스터를 식별하는 테이블 항목의 비트 수와 관련이 있다."
      }
    ],
    "answer": 2,
    "explanation": "NTFS의 읽기·쓰기 지원 범위는 운영체제와 드라이버에 따라 달라진다. 이동식 저장장치를 여러 기기에서 사용하려면 각 기기가 해당 형식을 지원하는지 확인해야 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q179",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "NTFS 볼륨에서 각 파일과 디렉터리에 대응하는 레코드를 두고, 파일 이름·크기·시간 정보 등의 속성을 관리하는 핵심 구조는?",
    "options": [
      {
        "number": 1,
        "text": "VBR(Volume Boot Record)"
      },
      {
        "number": 2,
        "text": "FAT(File Allocation Table)"
      },
      {
        "number": 3,
        "text": "MFT(Master File Table)"
      },
      {
        "number": 4,
        "text": "MBR(Master Boot Record)"
      }
    ],
    "answer": 3,
    "explanation": "**MFT**에는 NTFS 볼륨의 파일과 디렉터리에 대한 레코드가 저장된다. VBR은 볼륨의 부팅 정보와 MFT의 시작 위치 등 파일시스템 설정 정보를 담는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q180",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "Windows에서 운영체제 구성요소와 서비스가 로컬 컴퓨터에 대한 높은 권한으로 실행될 때 사용하는 기본 제공 계정이다. 사용자가 비밀번호를 입력해 일반적인 대화형 로그인을 하는 용도로 쓰이지 않는 이 계정은?",
    "options": [
      {
        "number": 1,
        "text": "Guest"
      },
      {
        "number": 2,
        "text": "Administrator"
      },
      {
        "number": 3,
        "text": "LocalService"
      },
      {
        "number": 4,
        "text": "SYSTEM(LocalSystem)"
      }
    ],
    "answer": 4,
    "explanation": "**SYSTEM**은 운영체제와 서비스가 로컬 시스템 작업을 수행할 때 사용하는 계정이다. LocalService도 서비스용 계정이지만 로컬 권한이 제한적이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q182",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "Windows Server에서 기본 **Users 그룹**에만 속하고 별도의 관리 권한을 받지 않은 사용자에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "다른 권한 부여 없이 Users 그룹 자격만으로 서버를 종료할 수 있다."
      },
      {
        "number": 2,
        "text": "자신의 프로필 폴더에서 쓰기 권한이 있는 문서를 수정할 수 있다."
      },
      {
        "number": 3,
        "text": "관리자가 설치한 프로그램 중 실행 권한이 있는 프로그램을 사용할 수 있다."
      },
      {
        "number": 4,
        "text": "`HKEY_CURRENT_USER`에서 쓰기가 허용된 개인 설정을 변경할 수 있다."
      }
    ],
    "answer": 1,
    "explanation": "서버 종료 가능 여부는 **시스템 종료 사용자 권한**의 할당에 따라 결정된다. 기본 Users 그룹에 속한다는 사실만으로 Windows Server의 종료 권한을 얻지는 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q183",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "프로세스가 파일 열기를 요청하면 Windows 커널에서 접근 토큰의 사용자·그룹 SID와 파일의 접근제어 정보를 바탕으로 권한을 검사한다. 이 접근 검사와 보안 감사에 관여하는 구성요소는?",
    "options": [
      {
        "number": 1,
        "text": "SAM(Security Accounts Manager)"
      },
      {
        "number": 2,
        "text": "SRM(Security Reference Monitor)"
      },
      {
        "number": 3,
        "text": "LSA(Local Security Authority)"
      },
      {
        "number": 4,
        "text": "이벤트 뷰어(Event Viewer)"
      }
    ],
    "answer": 2,
    "explanation": "**SRM(보안 참조 모니터)**은 커널에서 보호된 객체에 대한 접근을 검사한다. SAM은 로컬 계정 정보를 관리하고, LSA는 로컬 보안 정책과 로그온 인증을 담당한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q184",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "기본 제공 Administrator 계정의 SID가 `S-1-5-21-1801674531-839522115-1708537768-500`이다. 같은 계정 도메인 안에서 이 계정을 구별하는 **상대 식별자(RID)**의 값은?",
    "options": [
      {
        "number": 1,
        "text": "5"
      },
      {
        "number": 2,
        "text": "21"
      },
      {
        "number": 3,
        "text": "1708537768"
      },
      {
        "number": 4,
        "text": "500"
      }
    ],
    "answer": 4,
    "explanation": "계정 SID에서 **마지막 숫자**가 RID이다. 기본 제공 Administrator 계정의 RID는 `500`이며, 계정 이름을 변경해도 이 값은 유지된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q186",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "NTFS 파일의 접근제어목록(DACL)이 표준 순서로 정렬되어 있다. 사용자 A에게 같은 파일의 **읽기 권한을 허용하는 상속 항목**과 **읽기 권한을 거부하는 명시적 항목**이 적용된다. 별도 특권 없이 A가 파일 내용 읽기를 요청하면 결과는?",
    "options": [
      {
        "number": 1,
        "text": "부모 폴더의 허용 항목을 상속했으므로 허용된다."
      },
      {
        "number": 2,
        "text": "상속 항목과 명시적 항목이 충돌하여 관리자 승인까지 보류된다."
      },
      {
        "number": 3,
        "text": "파일에 직접 설정한 명시적 거부 항목이 먼저 적용되어 거부된다."
      },
      {
        "number": 4,
        "text": "두 항목 중 가장 최근에 설정한 항목에 따라 결정된다."
      }
    ],
    "answer": 3,
    "explanation": "표준 DACL에서는 **명시적 항목이 상속 항목보다 앞선다**. 이 사례에서는 요청한 읽기 권한이 명시적 거부 항목과 일치하므로 접근이 거부된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q189",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "관리자가 로그인 사용자와 관계없이 컴퓨터 전체에 적용되는 장치 드라이버, 서비스 및 설치 소프트웨어 설정을 조사하려 한다. 어느 레지스트리 루트 키를 확인해야 하는가?",
    "options": [
      {
        "number": 1,
        "text": "`HKEY_LOCAL_MACHINE`"
      },
      {
        "number": 2,
        "text": "`HKEY_CURRENT_USER`"
      },
      {
        "number": 3,
        "text": "`HKEY_CLASSES_ROOT`"
      },
      {
        "number": 4,
        "text": "`HKEY_USERS`"
      }
    ],
    "answer": 1,
    "explanation": "**HKEY_LOCAL_MACHINE(HKLM)**은 컴퓨터 단위의 설정을 담는다. 대표적으로 `HKLM\\SYSTEM`에서 서비스와 드라이버 구성을, `HKLM\\SOFTWARE`에서 컴퓨터 단위 소프트웨어 설정을 확인할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q191",
    "partId": 4,
    "sectionId": 14,
    "sectionTitle": "윈도우 서버 보안",
    "sourceSection": "SECTION 03 윈도우 서버 보안",
    "question": "Windows 레지스트리 루트 키와 그 역할을 연결한 것 중 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "`HKEY_CLASSES_ROOT` — 파일 확장자 연결 및 COM 클래스 등록 정보를 제공한다."
      },
      {
        "number": 2,
        "text": "`HKEY_CURRENT_USER` — 현재 로그인한 사용자와 관계없이 모든 계정의 프로필 설정 전체를 제공한다."
      },
      {
        "number": 3,
        "text": "`HKEY_CURRENT_CONFIG` — 현재 사용 중인 하드웨어 프로필 정보를 제공한다."
      },
      {
        "number": 4,
        "text": "`HKEY_LOCAL_MACHINE` — 컴퓨터 전체에 적용되는 하드웨어 및 소프트웨어 설정을 제공한다."
      }
    ],
    "answer": 2,
    "explanation": "**HKEY_CURRENT_USER(HKCU)**는 현재 사용자에 해당하는 레지스트리 설정을 가리킨다. `HKEY_USERS`에서는 시스템에 현재 로드된 사용자별 레지스트리 하이브를 확인할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q194",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "다음 용도에 해당하는 디렉터리를 ㄱ, ㄴ, ㄷ 순서로 바르게 나열한 것은?\nㄱ. 시스템 전반의 설정 파일 저장\nㄴ. 프로그램이 실행 중 사용하는 임시 파일 저장\nㄷ. 디스크·터미널 등에 접근하기 위한 장치 파일 제공",
    "options": [
      {
        "number": 1,
        "text": "`/etc` → `/var` → `/dev`"
      },
      {
        "number": 2,
        "text": "`/usr` → `/tmp` → `/etc`"
      },
      {
        "number": 3,
        "text": "`/etc` → `/tmp` → `/dev`"
      },
      {
        "number": 4,
        "text": "`/dev` → `/tmp` → `/usr`"
      }
    ],
    "answer": 3,
    "explanation": "`/etc`에는 `passwd`, `hosts` 같은 설정 파일이 있다. `/tmp`는 임시 파일을 두는 곳이며, `/dev`에는 장치를 파일처럼 다룰 수 있게 하는 장치 파일이 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q195",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "전통적인 유닉스 파일시스템에서 개별 파일의 소유자, 접근권한, 크기, 시간 정보와 데이터 블록의 위치를 관리하는 구조는?",
    "options": [
      {
        "number": 1,
        "text": "슈퍼블록"
      },
      {
        "number": 2,
        "text": "아이노드(i-node)"
      },
      {
        "number": 3,
        "text": "부트 블록"
      },
      {
        "number": 4,
        "text": "파일 할당 테이블(FAT)"
      }
    ],
    "answer": 2,
    "explanation": "**아이노드**는 개별 파일이나 디렉터리의 메타데이터를 관리한다. 슈퍼블록에는 블록 크기 등 파일시스템 전체에 관한 정보가 들어간다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q196",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "일반 파일의 아이노드에 직접 저장되는 정보에 **해당하지 않는 것**은?",
    "options": [
      {
        "number": 1,
        "text": "하드 링크 수"
      },
      {
        "number": 2,
        "text": "파일 크기"
      },
      {
        "number": 3,
        "text": "마지막 내용 수정 시각"
      },
      {
        "number": 4,
        "text": "디렉터리에 표시되는 파일 이름"
      }
    ],
    "answer": 4,
    "explanation": "디렉터리 엔트리가 **파일 이름과 아이노드 번호**를 연결한다. 따라서 서로 다른 이름의 하드 링크가 같은 아이노드를 가리킬 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q197",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "유닉스 파일의 전통적인 MAC 시간 속성에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "`rtime`은 파일을 마지막으로 실행한 시각을 기록한다."
      },
      {
        "number": 2,
        "text": "`atime`은 파일에 마지막으로 접근한 시각을 나타낸다."
      },
      {
        "number": 3,
        "text": "`mtime`은 파일 내용을 마지막으로 수정한 시각을 나타낸다."
      },
      {
        "number": 4,
        "text": "`ctime`은 권한 변경 등 파일 상태가 마지막으로 바뀐 시각을 나타낸다."
      }
    ],
    "answer": 1,
    "explanation": "MAC 시간은 `mtime`, `atime`, `ctime`을 가리킨다. `rtime`이라는 실행 시각 필드는 이 세 속성에 포함되지 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q200",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "관리자가 파일시스템이 이미 생성된 디스크 파티션을 `/mnt/data`에 연결해 그 안의 파일을 이용하려 한다. 어떤 명령을 사용하는가?",
    "options": [
      {
        "number": 1,
        "text": "`fsck`"
      },
      {
        "number": 2,
        "text": "`mkfs`"
      },
      {
        "number": 3,
        "text": "`mount`"
      },
      {
        "number": 4,
        "text": "`mknod`"
      }
    ],
    "answer": 3,
    "explanation": "`mount`는 기존 파일시스템을 지정한 디렉터리에 연결한다. `mkfs`는 파일시스템 생성, `fsck`는 파일시스템 점검에 사용한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q202",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "`secure.txt`의 소유자 권한을 **정확히 읽기·실행**으로 설정하고, 기타 사용자(`o`)에게서는 **읽기 권한만** 제거하려 한다. 소유 그룹 권한을 그대로 두는 명령은?",
    "options": [
      {
        "number": 1,
        "text": "`chmod u+rx,g-r secure.txt`"
      },
      {
        "number": 2,
        "text": "`chmod u=rx,o-r secure.txt`"
      },
      {
        "number": 3,
        "text": "`chmod u=rx,o=r secure.txt`"
      },
      {
        "number": 4,
        "text": "`chmod u=rx,go-r secure.txt`"
      }
    ],
    "answer": 2,
    "explanation": "`u=rx`는 소유자 권한을 `r-x`로 지정하고, `o-r`은 기타 사용자의 읽기 비트만 해제한다. ④의 `go-r`은 소유 그룹의 읽기 권한까지 제거한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q203",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "`find / -user root -type f`에 조건을 추가해 **SetUID 비트가 설정된 모든 일반 파일**을 찾으려 한다. SetGID 등 다른 권한 비트의 설정 여부와 관계없이 일치하는 조건은?",
    "options": [
      {
        "number": 1,
        "text": "`-perm 4000`"
      },
      {
        "number": 2,
        "text": "`-perm -2000`"
      },
      {
        "number": 3,
        "text": "`-perm -6000`"
      },
      {
        "number": 4,
        "text": "`-perm -4000`"
      }
    ],
    "answer": 4,
    "explanation": "`-perm -4000`은 SetUID 비트가 켜져 있는지 검사하므로 `4755`인 파일도 찾는다. `-perm 4000`은 권한 비트가 정확히 일치해야 하고, `-perm -6000`은 SetUID와 SetGID가 **둘 다** 설정되어야 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q205",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "`crontab -e`로 편집하는 **사용자 crontab**에서 `/usr/logreport.sh`를 매일 오전 8시 40분에 실행하는 설정은?",
    "options": [
      {
        "number": 1,
        "text": "`40 8 * * * /usr/logreport.sh`"
      },
      {
        "number": 2,
        "text": "`8 4 * * * /usr/logreport.sh`"
      },
      {
        "number": 3,
        "text": "`40 20 * * * /usr/logreport.sh`"
      },
      {
        "number": 4,
        "text": "`40 8 1 * * /usr/logreport.sh`"
      }
    ],
    "answer": 1,
    "explanation": "시간 필드 순서는 **분 → 시 → 일 → 월 → 요일**이다. ③은 매일 오후 8시 40분, ④는 매월 1일 오전 8시 40분에 실행한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q206",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "서버 응답이 느려져 프로세스별 CPU·메모리 사용률과 시스템 부하 평균을 한 화면에서 주기적으로 갱신하며 확인하려 한다. 적절한 명령은?",
    "options": [
      {
        "number": 1,
        "text": "`df`"
      },
      {
        "number": 2,
        "text": "`netstat`"
      },
      {
        "number": 3,
        "text": "`top`"
      },
      {
        "number": 4,
        "text": "`iostat`"
      }
    ],
    "answer": 3,
    "explanation": "`top`은 시스템 전체 부하와 개별 프로세스의 자원 사용 현황을 함께 표시한다. `iostat`는 CPU 및 장치 입출력 통계, `df`는 파일시스템 공간 사용량을 확인할 때 사용한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q207",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "`/etc/passwd`에 `audit:x:1100:1100:Audit User:/home/audit:/bin/bash`가 등록되어 있다. 마지막 필드인 `/bin/bash`의 의미는?",
    "options": [
      {
        "number": 1,
        "text": "홈 디렉터리"
      },
      {
        "number": 2,
        "text": "로그인 셸"
      },
      {
        "number": 3,
        "text": "계정 설명"
      },
      {
        "number": 4,
        "text": "기본 그룹"
      }
    ],
    "answer": 2,
    "explanation": "`/etc/passwd`의 여섯 번째 필드인 `/home/audit`는 홈 디렉터리이고, 일곱 번째 필드인 `/bin/bash`는 이 계정에 지정된 로그인 셸이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q208",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "다음 `/etc/passwd` 항목을 해석한 내용으로 **옳지 않은 것**은?\n`ops:x:1001:500:Ops:/home/ops:/bin/bash`\n`audit:x:1002:500:Audit:/home/audit:/bin/bash`\n`build:x:0:501:Build:/home/build:/bin/csh`",
    "options": [
      {
        "number": 1,
        "text": "`ops`와 `audit`의 기본 그룹 ID는 같다."
      },
      {
        "number": 2,
        "text": "`build`의 로그인 셸은 `/bin/csh`이다."
      },
      {
        "number": 3,
        "text": "`ops`의 홈 디렉터리는 `/home/ops`이다."
      },
      {
        "number": 4,
        "text": "`build`는 계정명이 `root`가 아니므로 일반 사용자 UID를 가진다."
      }
    ],
    "answer": 4,
    "explanation": "세 번째 필드가 UID이고 네 번째 필드가 기본 GID이다. `build`의 UID는 **0**이므로 계정 이름을 일반 사용자처럼 붙여도 루트 UID를 가진 계정이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q209",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "대화형 셸이 필요 없는 서비스 계정에 대해, 로그인 셸이 호출되면 명령 프롬프트를 제공하지 않고 즉시 실패 상태로 종료되도록 하려 한다. `/etc/passwd`의 마지막 필드에 지정할 값은?",
    "options": [
      {
        "number": 1,
        "text": "`/bin/false`"
      },
      {
        "number": 2,
        "text": "`/bin/sh`"
      },
      {
        "number": 3,
        "text": "`/bin/bash`"
      },
      {
        "number": 4,
        "text": "`/bin/csh`"
      }
    ],
    "answer": 1,
    "explanation": "`/bin/false`는 실행되면 실패 상태로 종료하므로 대화형 셸을 제공하지 않는다. 서비스 계정의 셸 로그인을 제한할 때 사용하는 설정이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q210",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "섀도 패스워드를 사용하는 리눅스에서 로컬 계정의 **비밀번호 검증용 해시값**과 비밀번호 사용 기간을 저장하는 파일은?",
    "options": [
      {
        "number": 1,
        "text": "`/etc/profile`"
      },
      {
        "number": 2,
        "text": "`/etc/login.defs`"
      },
      {
        "number": 3,
        "text": "`/etc/shadow`"
      },
      {
        "number": 4,
        "text": "`/etc/group`"
      }
    ],
    "answer": 3,
    "explanation": "`/etc/shadow`는 계정별 비밀번호 해시와 변경·만료 관련 정보를 보관한다. `/etc/login.defs`는 계정 관리 도구가 사용할 기본값을 정의하는 파일이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q211",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "`/etc/shadow`의 한 항목이 `root:<해시값>:20000:0:99999:7:::`이다. 비밀번호를 마지막으로 변경한 날부터 **최대 60일간** 사용하도록 설정하려면 어느 값을 60으로 바꾸어야 하는가?",
    "options": [
      {
        "number": 1,
        "text": "`20000`"
      },
      {
        "number": 2,
        "text": "`99999`"
      },
      {
        "number": 3,
        "text": "`0`"
      },
      {
        "number": 4,
        "text": "`7`"
      }
    ],
    "answer": 2,
    "explanation": "다섯 번째 필드 `99999`가 비밀번호의 **최대 사용 일수**이다. 앞의 `0`은 변경 사이의 최소 일수이고, 뒤의 `7`은 만료 전 경고 일수이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q212",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "`/etc/shadow`의 계정별 필드에 저장되는 정보에 **해당하지 않는 것**은?",
    "options": [
      {
        "number": 1,
        "text": "마지막 비밀번호 변경일"
      },
      {
        "number": 2,
        "text": "비밀번호 만료 전 경고 일수"
      },
      {
        "number": 3,
        "text": "계정 만료일"
      },
      {
        "number": 4,
        "text": "새 비밀번호에 요구되는 최소 문자 수"
      }
    ],
    "answer": 4,
    "explanation": "`/etc/shadow`의 최소값 필드는 비밀번호를 다시 변경하기까지 기다려야 하는 **일수**이다. 최소 문자 수는 비밀번호 품질 정책에서 정한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q213",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "섀도 패스워드를 사용하는 리눅스의 계정 관리에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "로그인할 때 `/etc/shadow`에 저장된 값을 AES-256으로 복호화해 원래 비밀번호를 꺼낸다."
      },
      {
        "number": 2,
        "text": "`/etc/passwd`에는 로컬 계정명과 UID가 기록된다."
      },
      {
        "number": 3,
        "text": "일반 사용자가 비밀번호 해시를 열람하지 못하도록 `/etc/shadow`의 읽기 권한을 제한한다."
      },
      {
        "number": 4,
        "text": "파일의 접근권한을 설정해 일반 사용자 간의 파일 접근을 제한할 수 있다."
      }
    ],
    "answer": 1,
    "explanation": "비밀번호 검증 시 시스템은 입력한 비밀번호에 저장된 솔트와 해시 설정을 적용해 계산 결과를 비교한다. 이 검증 과정에는 원래 비밀번호를 복원하는 단계가 없다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q214",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "`ls -l`에서 일반 파일의 권한이 `-rwSr--r--`로 표시되었다. 소유자 실행 위치의 대문자 `S`가 뜻하는 것은?",
    "options": [
      {
        "number": 1,
        "text": "SetGID가 설정되고 그룹 실행 비트가 꺼져 있다."
      },
      {
        "number": 2,
        "text": "SetUID와 소유자 실행 비트가 모두 켜져 있다."
      },
      {
        "number": 3,
        "text": "SetUID가 설정되고 소유자 실행 비트가 꺼져 있다."
      },
      {
        "number": 4,
        "text": "Sticky bit가 설정되고 기타 사용자 실행 비트가 꺼져 있다."
      }
    ],
    "answer": 3,
    "explanation": "소유자 실행 위치에서 `S`와 `s`는 모두 SetUID가 설정되었음을 뜻한다. 대문자 `S`는 소유자 실행 비트가 꺼진 상태, 소문자 `s`는 켜진 상태이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q215",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "리눅스의 특수 권한 표시에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "소유자 실행 비트와 SetUID가 모두 설정되면 소유자 실행 위치에 `s`가 표시된다."
      },
      {
        "number": 2,
        "text": "기타 사용자 실행 비트와 Sticky bit가 모두 설정되면 기타 사용자 실행 위치에 `s`가 표시된다."
      },
      {
        "number": 3,
        "text": "그룹 실행 비트와 SetGID가 모두 설정되면 그룹 실행 위치에 `s`가 표시된다."
      },
      {
        "number": 4,
        "text": "공용 디렉터리의 Sticky bit는 다른 사용자가 만든 파일의 삭제나 이름 변경을 제한하는 데 쓰인다."
      }
    ],
    "answer": 2,
    "explanation": "Sticky bit는 **기타 사용자 실행 위치**에 표시한다. 해당 실행 비트가 켜져 있으면 `t`, 꺼져 있으면 `T`이다. 예를 들어 권한이 `1777`인 디렉터리는 `drwxrwxrwt`로 표시된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q216",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "소유자가 `root`, 소유 그룹이 `staff`인 실행 바이너리 `a.out`에 `chmod 4755 a.out`을 적용했다. SetUID가 정상 적용되는 환경에서 일반 사용자가 이를 실행한 직후의 유효 사용자 ID(EUID)는?",
    "options": [
      {
        "number": 1,
        "text": "실행한 사용자의 UID"
      },
      {
        "number": 2,
        "text": "`staff` 그룹의 GID"
      },
      {
        "number": 3,
        "text": "실행한 사용자의 기본 GID"
      },
      {
        "number": 4,
        "text": "파일 소유자 `root`의 UID인 0"
      }
    ],
    "answer": 4,
    "explanation": "`4755`의 맨 앞 `4`는 SetUID이다. 실행한 사람의 실제 UID는 유지되고, 프로그램의 **유효 UID**가 파일 소유자의 UID로 설정된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q217",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "일반적인 유닉스 접근권한 모델에서 파일의 **내용 수정**과 `chmod`를 통한 **권한 비트 변경**을 바르게 구분한 것은?",
    "options": [
      {
        "number": 1,
        "text": "그룹 쓰기 권한이 있으면 그 그룹의 모든 구성원이 파일 권한 비트도 바꿀 수 있다."
      },
      {
        "number": 2,
        "text": "쓰기 권한이 있는 그룹 구성원은 내용을 수정할 수 있지만, 권한 비트 변경은 파일 소유자 또는 해당 특권을 가진 프로세스가 할 수 있다."
      },
      {
        "number": 3,
        "text": "`umask`를 바꾸면 기존 파일의 권한 비트도 즉시 바뀐다."
      },
      {
        "number": 4,
        "text": "파일 소유자도 해당 파일에 쓰기 권한이 없으면 `chmod`를 사용할 수 없다."
      }
    ],
    "answer": 2,
    "explanation": "파일의 쓰기 비트는 **내용을 수정할 권한**을 제어한다. `chmod` 가능 여부는 소유권이나 관련 특권으로 판단하므로, 소유자는 자신의 읽기 전용 파일에도 쓰기 권한을 다시 부여할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q218",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "`umask`가 `022`이고 기본 ACL은 없다. 프로그램이 디렉터리는 `0777`, 일반 텍스트 파일은 `0666`으로 생성을 요청하면 **디렉터리와 파일**의 최종 권한은 각각 무엇인가?",
    "options": [
      {
        "number": 1,
        "text": "`0755`, `0644`"
      },
      {
        "number": 2,
        "text": "`0755`, `0755`"
      },
      {
        "number": 3,
        "text": "`0644`, `0755`"
      },
      {
        "number": 4,
        "text": "`0775`, `0664`"
      }
    ],
    "answer": 1,
    "explanation": "`022`는 그룹과 기타 사용자의 **쓰기 비트**를 끈다. 디렉터리는 `rwxr-xr-x`(`0755`), 텍스트 파일은 `rw-r--r--`(`0644`)가 된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q219",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "두 사용자가 같은 비밀번호를 선택해도 계정별로 서로 다른 검증용 해시값이 계산되도록, 각 계정에 고유한 임의의 값을 비밀번호 해시 계산에 함께 입력한다. 이 기법은?",
    "options": [
      {
        "number": 1,
        "text": "일회용 비밀번호(OTP)"
      },
      {
        "number": 2,
        "text": "비밀번호 없는 공개키 인증"
      },
      {
        "number": 3,
        "text": "솔팅(Salting)"
      },
      {
        "number": 4,
        "text": "고정 비밀번호의 단순 해싱"
      }
    ],
    "answer": 3,
    "explanation": "계정별 **솔트**가 다르면 같은 비밀번호도 해시 입력이 달라진다. 한 솔트에 대해 미리 계산한 후보 해시표를 다른 계정에 그대로 적용하기 어렵다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q220",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "전통적인 `inetd` 환경에서 특정 네트워크 서비스에 연결 요청이 오면 실제 서버 프로그램보다 먼저 `/usr/sbin/tcpd`가 실행되도록 하려 한다. 서비스별 실행 경로를 변경할 파일은?",
    "options": [
      {
        "number": 1,
        "text": "`/etc/hosts.allow`"
      },
      {
        "number": 2,
        "text": "`/etc/fstab`"
      },
      {
        "number": 3,
        "text": "`/etc/hosts.deny`"
      },
      {
        "number": 4,
        "text": "`/etc/inetd.conf`"
      }
    ],
    "answer": 4,
    "explanation": "`/etc/inetd.conf`는 `inetd`가 각 서비스 요청에 대해 어떤 프로그램을 실행할지 지정한다. `hosts.allow`와 `hosts.deny`에는 TCP Wrapper가 검사할 접근 규칙을 둔다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q221",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "TCP Wrapper가 적용되며, `sshd`는 별도 설정으로 **SFTP만 제공**한다. `10.0.0.100`에서 `sshd`로 오는 연결만 허용하고, 나머지 모든 래핑 대상 연결은 거부하려 한다. 다른 규칙이 없을 때 올바른 조합은? 각 보기는 `hosts.allow` / `hosts.deny` 순서이다.",
    "options": [
      {
        "number": 1,
        "text": "`ALL: 10.0.0.100` / `ALL: ALL`"
      },
      {
        "number": 2,
        "text": "`sshd: 10.0.0.100` / `ALL: ALL`"
      },
      {
        "number": 3,
        "text": "`sshd: ALL` / `ALL: 10.0.0.100`"
      },
      {
        "number": 4,
        "text": "`sshd: 10.0.0.100` / `sshd: ALL`"
      }
    ],
    "answer": 2,
    "explanation": "`hosts.allow`를 먼저 검사하므로 지정한 호스트의 `sshd` 연결만 예외로 허용된다. 나머지는 `hosts.deny`의 `ALL: ALL`에 걸린다. ④는 다른 서비스에 일치하는 거부 규칙이 없어 요구사항을 충족하지 못한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q222",
    "partId": 4,
    "sectionId": 15,
    "sectionTitle": "유닉스/리눅스 서버 보안",
    "sourceSection": "SECTION 04 유닉스/리눅스 서버 보안",
    "question": "리눅스의 로컬 계정과 기본 파일 권한에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "`/etc/passwd`에서 로컬 계정의 UID와 기본 GID를 확인할 수 있다."
      },
      {
        "number": 2,
        "text": "기본 접근권한은 소유자·소유 그룹·기타 사용자로 구분한다."
      },
      {
        "number": 3,
        "text": "`rwxr-xr-x`를 8진수로 나타내면 `755`이다."
      },
      {
        "number": 4,
        "text": "일반 사용자 계정을 생성하면 각 계정의 UID로 0이 할당된다."
      }
    ],
    "answer": 4,
    "explanation": "**UID 0**은 루트 계정을 식별하는 특권 UID이다. `755`는 소유자의 `rwx`가 7, 그룹과 기타 사용자의 `r-x`가 각각 5라는 뜻이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q228",
    "partId": 4,
    "sectionId": 16,
    "sectionTitle": "서버 보안 관리",
    "sourceSection": "SECTION 05 서버 보안 관리",
    "question": "관리자가 서버 보안 점검 계획을 수립했다. 다음 조치 중 **적절하지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "웹 서버 설정 파일을 주기적으로 백업하고 승인된 기준본과 비교한다."
      },
      {
        "number": 2,
        "text": "커널·cron·부팅 로그의 내용과 파일 접근권한을 점검한다."
      },
      {
        "number": 3,
        "text": "`/etc/passwd`는 계정 추가로 내용이 바뀔 수 있으므로 무결성 점검 대상에서 제외한다."
      },
      {
        "number": 4,
        "text": "중요 데이터를 암호화하고, 복구에 필요한 키의 백업본은 별도 접근통제 하에 보관한다."
      }
    ],
    "answer": 3,
    "explanation": "`/etc/passwd`에서 UID나 로그인 셸이 무단으로 바뀌면 계정 권한에 영향을 줄 수 있다. 변경 내역을 승인 기록과 대조하고, 정상 변경임을 확인한 뒤 기준본을 갱신한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q229",
    "partId": 4,
    "sectionId": 16,
    "sectionTitle": "서버 보안 관리",
    "sourceSection": "SECTION 05 서버 보안 관리",
    "question": "Windows 이벤트 로그에 대한 설명 중 옳은 것을 **모두** 고른 것은?\n\nㄱ. 이벤트 뷰어에서 보안 로그를 조회할 수 있다.\nㄴ. `.evtx` 원본은 일반 텍스트 파일이므로 메모장에서 개별 이벤트 필드를 그대로 읽을 수 있다.\nㄷ. Windows 버전에 따라 기본 이벤트 로그 파일 형식으로 `.evt` 또는 `.evtx`가 사용된다.\nㄹ. 로그온 감사를 설정하면 정책에 따라 성공·실패 기록을 보안 로그에 남길 수 있다.",
    "options": [
      {
        "number": 1,
        "text": "ㄱ, ㄴ"
      },
      {
        "number": 2,
        "text": "ㄴ, ㄷ, ㄹ"
      },
      {
        "number": 3,
        "text": "ㄱ, ㄹ"
      },
      {
        "number": 4,
        "text": "ㄱ, ㄷ, ㄹ"
      }
    ],
    "answer": 4,
    "explanation": "ㄱ, ㄷ, ㄹ이 옳다. `.evtx`는 구조화된 바이너리 형식이므로 이벤트 뷰어처럼 해당 형식을 해석하는 도구로 열어야 이벤트 ID, 발생 시각, 계정 등의 필드를 읽을 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q231",
    "partId": 4,
    "sectionId": 16,
    "sectionTitle": "서버 보안 관리",
    "sourceSection": "SECTION 05 서버 보안 관리",
    "question": "Windows 도메인 컨트롤러가 **도메인 계정의 자격 증명을 검증한 결과**를 성공·실패로 기록하려 한다. 기본 감사 정책에서 설정할 항목은?",
    "options": [
      {
        "number": 1,
        "text": "계정 관리 감사"
      },
      {
        "number": 2,
        "text": "계정 로그온 이벤트 감사"
      },
      {
        "number": 3,
        "text": "개체 액세스 감사"
      },
      {
        "number": 4,
        "text": "시스템 이벤트 감사"
      }
    ],
    "answer": 2,
    "explanation": "**계정 로그온 이벤트 감사**는 자격 증명을 검증하는 컴퓨터에 검증 결과를 남긴다. 도메인 계정은 도메인 컨트롤러에서 검증한다. 사용자가 접속한 컴퓨터의 로그온 세션을 추적하는 항목은 **로그온 이벤트 감사**이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q232",
    "partId": 4,
    "sectionId": 16,
    "sectionTitle": "서버 보안 관리",
    "sourceSection": "SECTION 05 서버 보안 관리",
    "question": "전통적인 유닉스 환경에서 `/etc/syslog.conf`를 읽어 메일·인증·커널 메시지 등을 종류와 심각도에 따라 파일, 콘솔 또는 원격 로그 서버로 보내는 데몬은?",
    "options": [
      {
        "number": 1,
        "text": "`syslogd`"
      },
      {
        "number": 2,
        "text": "`tripwire`"
      },
      {
        "number": 3,
        "text": "`crond`"
      },
      {
        "number": 4,
        "text": "`glog`"
      }
    ],
    "answer": 1,
    "explanation": "`syslogd`는 설정 파일의 규칙에 따라 메시지를 분류하고 목적지로 전달한다. 예를 들어 인증 메시지와 메일 메시지를 서로 다른 로그 파일에 기록할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q233",
    "partId": 4,
    "sectionId": 16,
    "sectionTitle": "서버 보안 관리",
    "sourceSection": "SECTION 05 서버 보안 관리",
    "question": "전통적인 유닉스·리눅스 로그 파일과 기록 내용의 연결로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "`btmp` — 실패한 로그인 시도"
      },
      {
        "number": 2,
        "text": "`lastlog` — 사용자별 가장 최근 로그인 정보"
      },
      {
        "number": 3,
        "text": "`utmp` — 종료된 세션을 포함한 과거 로그인·로그아웃 누적 이력"
      },
      {
        "number": 4,
        "text": "`pacct` — 프로세스 회계 기능이 기록한 명령 이름과 자원 사용 정보"
      }
    ],
    "answer": 3,
    "explanation": "`utmp`는 **현재 로그인 세션**을 확인할 때 사용한다. 과거 세션의 로그인·로그아웃 이력은 `wtmp`에 누적된다. `pacct`는 종료된 프로세스의 실행 정보를 기록한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q234",
    "partId": 4,
    "sectionId": 16,
    "sectionTitle": "서버 보안 관리",
    "sourceSection": "SECTION 05 서버 보안 관리",
    "question": "관리자가 전통적인 리눅스 환경에서 별도 파일 옵션 없이 `last`를 실행해 지난주 사용자의 접속 시각과 세션 지속 시간을 확인했다. 이 명령이 기본으로 읽는 파일은?",
    "options": [
      {
        "number": 1,
        "text": "`lastlog`"
      },
      {
        "number": 2,
        "text": "`pacct`"
      },
      {
        "number": 3,
        "text": "`utmp`"
      },
      {
        "number": 4,
        "text": "`wtmp`"
      }
    ],
    "answer": 4,
    "explanation": "`last`는 **`wtmp`**에 누적된 세션 기록을 최근 순서로 보여 준다. 한 사용자의 이전 접속 여러 건을 조사할 때 유용하며, 재부팅 기록도 확인할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q236",
    "partId": 4,
    "sectionId": 16,
    "sectionTitle": "서버 보안 관리",
    "sourceSection": "SECTION 05 서버 보안 관리",
    "question": "웹 서버와 인증 서버의 시계가 서로 달라 로그만으로는 어느 사건이 먼저 발생했는지 판단하기 어렵다. 두 서버의 시계를 공통 시간원에 맞추는 데 사용하는 프로토콜은?",
    "options": [
      {
        "number": 1,
        "text": "Syslog"
      },
      {
        "number": 2,
        "text": "SNMP"
      },
      {
        "number": 3,
        "text": "NTP"
      },
      {
        "number": 4,
        "text": "DNS"
      }
    ],
    "answer": 3,
    "explanation": "**NTP(Network Time Protocol)**는 네트워크를 통해 시스템 시계를 동기화한다. 서버 간 시각 오차가 줄어들면 서로 다른 서버에 기록된 사건의 순서를 파악하기 쉽다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q237",
    "partId": 4,
    "sectionId": 16,
    "sectionTitle": "서버 보안 관리",
    "sourceSection": "SECTION 05 서버 보안 관리",
    "question": "다음 설명에 해당하는 **도구의 분류**와 **도구 이름**을 ㄱ, ㄴ 순서로 바르게 연결한 것은?\n\nㄱ. SATAN, SAINT, Nessus처럼 시스템이나 서비스의 보안 약점을 검사하는 도구의 분류\nㄴ. 네트워크 패킷을 실시간으로 분석하고 탐지 규칙과 일치하는 트래픽에 경보를 발생시키는 도구",
    "options": [
      {
        "number": 1,
        "text": "취약점 점검 도구 → Snort"
      },
      {
        "number": 2,
        "text": "취약점 점검 도구 → Tripwire"
      },
      {
        "number": 3,
        "text": "무결성 점검 도구 → Snort"
      },
      {
        "number": 4,
        "text": "무결성 점검 도구 → Tripwire"
      }
    ],
    "answer": 1,
    "explanation": "ㄱ의 도구들은 시스템에 취약점이 있는지 검사한다. ㄴ의 **Snort**는 네트워크 트래픽에서 침입 징후를 탐지하며, Tripwire는 파일 상태를 기준값과 비교해 변경을 탐지한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q238",
    "partId": 4,
    "sectionId": 16,
    "sectionTitle": "서버 보안 관리",
    "sourceSection": "SECTION 05 서버 보안 관리",
    "question": "다음 중 주된 용도가 시스템 취약점 스캔이 아니라 **네트워크 침입 탐지**인 도구는?",
    "options": [
      {
        "number": 1,
        "text": "Nessus"
      },
      {
        "number": 2,
        "text": "SATAN"
      },
      {
        "number": 3,
        "text": "ISS Internet Scanner"
      },
      {
        "number": 4,
        "text": "Snort"
      }
    ],
    "answer": 4,
    "explanation": "**Snort**는 네트워크를 흐르는 패킷을 검사해 공격 징후를 찾아낸다. Nessus, SATAN, ISS Internet Scanner는 대상 시스템과 서비스에 알려진 취약점이 있는지 점검하는 도구이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q239",
    "partId": 4,
    "sectionId": 16,
    "sectionTitle": "서버 보안 관리",
    "sourceSection": "SECTION 05 서버 보안 관리",
    "question": "다음 중 파일의 현재 상태를 미리 저장한 기준값과 비교하는 **파일 무결성 점검 도구에 해당하지 않는 것**은?",
    "options": [
      {
        "number": 1,
        "text": "Fcheck"
      },
      {
        "number": 2,
        "text": "prstat"
      },
      {
        "number": 3,
        "text": "Tripwire"
      },
      {
        "number": 4,
        "text": "Samhain"
      }
    ],
    "answer": 2,
    "explanation": "**prstat**은 Solaris에서 프로세스별 CPU 사용률 등 자원 사용 통계를 확인하는 명령이다. Fcheck, Tripwire, Samhain은 파일의 해시값이나 속성을 기준값과 비교해 변경을 탐지할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q240",
    "partId": 4,
    "sectionId": 16,
    "sectionTitle": "서버 보안 관리",
    "sourceSection": "SECTION 05 서버 보안 관리",
    "question": "관리자가 Nessus로 서버의 열린 포트와 서비스를 식별한 뒤, 알려진 취약점과 보안 설정 오류를 점검했다. 이 작업에서 Nessus의 역할을 가장 잘 설명한 것은?",
    "options": [
      {
        "number": 1,
        "text": "포트의 개방 여부만 확인하는 스캐너"
      },
      {
        "number": 2,
        "text": "공격 패킷을 실시간으로 차단하는 방화벽"
      },
      {
        "number": 3,
        "text": "통신 중인 패킷에서 침입 징후를 탐지하는 시스템"
      },
      {
        "number": 4,
        "text": "네트워크를 통해 서버의 보안 취약점을 검사하는 스캐너"
      }
    ],
    "answer": 4,
    "explanation": "**Nessus는 취약점 스캐너**이다. 열린 포트와 서비스 정보는 점검의 출발점이며, 발견한 서비스에 취약점이 있는지 검사해 결과를 보고한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q241",
    "partId": 4,
    "sectionId": 16,
    "sectionTitle": "서버 보안 관리",
    "sourceSection": "SECTION 05 서버 보안 관리",
    "question": "다음 리눅스 명령 중 IP 주소나 프로토콜을 기준으로 패킷 필터링 규칙을 관리하는 데 **사용되지 않는 것**은?",
    "options": [
      {
        "number": 1,
        "text": "`ipchains`"
      },
      {
        "number": 2,
        "text": "`iptables`"
      },
      {
        "number": 3,
        "text": "`chmod`"
      },
      {
        "number": 4,
        "text": "`ipfwadm`"
      }
    ],
    "answer": 3,
    "explanation": "`chmod`는 파일이나 디렉터리의 읽기·쓰기·실행 권한 등을 변경한다. `ipfwadm`, `ipchains`, `iptables`는 서로 다른 시기에 리눅스의 패킷 필터링 규칙을 관리하는 데 사용된 도구이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q244",
    "partId": 4,
    "sectionId": 17,
    "sectionTitle": "각종 시스템 보안위협 및 대응책",
    "sourceSection": "SECTION 06 각종 시스템 보안위협 및 대응책",
    "question": "C 프로그램이 실행 중 `malloc()`으로 입력 데이터를 저장할 공간을 확보하고, 사용을 마치면 `free()`로 반환한다. 이처럼 동적으로 할당한 메모리가 속하는 영역은?",
    "options": [
      {
        "number": 1,
        "text": "스택(Stack)"
      },
      {
        "number": 2,
        "text": "데이터 영역(Data)"
      },
      {
        "number": 3,
        "text": "힙(Heap)"
      },
      {
        "number": 4,
        "text": "코드 영역(Text)"
      }
    ],
    "answer": 3,
    "explanation": "**힙**은 실행 중 필요한 크기만큼 메모리를 동적으로 할당할 때 사용하는 영역이다. 함수 안에서 선언한 포인터가 지역 변수여도 `malloc()`이 확보한 저장 공간은 힙에 해당한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q245",
    "partId": 4,
    "sectionId": 17,
    "sectionTitle": "각종 시스템 보안위협 및 대응책",
    "sourceSection": "SECTION 06 각종 시스템 보안위협 및 대응책",
    "question": "힙 버퍼 오버플로에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "동적으로 할당한 버퍼의 끝을 넘어 데이터를 기록할 때 발생할 수 있다."
      },
      {
        "number": 2,
        "text": "버퍼에 인접한 객체의 데이터가 손상될 수 있다."
      },
      {
        "number": 3,
        "text": "함수 포인터 등이 손상되면 프로그램의 실행 흐름이 바뀔 수 있다."
      },
      {
        "number": 4,
        "text": "네트워크를 지나는 패킷을 몰래 수집해 전송 내용을 읽는 것이 기본 원리이다."
      }
    ],
    "answer": 4,
    "explanation": "패킷을 몰래 수집해 내용을 관찰하는 행위는 **스니핑**이다. 힙 버퍼 오버플로는 할당된 메모리의 경계를 벗어난 쓰기로 발생한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q247",
    "partId": 4,
    "sectionId": 17,
    "sectionTitle": "각종 시스템 보안위협 및 대응책",
    "sourceSection": "SECTION 06 각종 시스템 보안위협 및 대응책",
    "question": "외부 입력을 고정 크기 버퍼에 복사하는 프로그램에서 버퍼 오버플로를 예방하기 위한 대책으로 가장 적절한 것은?",
    "options": [
      {
        "number": 1,
        "text": "함수 이름과 매개변수의 자료형을 외부에 공개하지 않는다."
      },
      {
        "number": 2,
        "text": "복사 전에 목적지의 남은 용량을 검사하고, 경계 검사를 지원하는 도구를 사용한다."
      },
      {
        "number": 3,
        "text": "입력 길이에 관계없이 버퍼의 시작 주소만 확인한다."
      },
      {
        "number": 4,
        "text": "복사가 끝난 뒤 입력 길이를 로그에 남긴다."
      }
    ],
    "answer": 2,
    "explanation": "복사할 바이트 수가 목적지의 남은 용량을 넘으면 **복사 전에** 입력을 거부하거나 처리 범위를 제한해야 한다. C 문자열은 끝을 표시하는 널 문자에 필요한 1바이트도 계산해야 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q248",
    "partId": 4,
    "sectionId": 17,
    "sectionTitle": "각종 시스템 보안위협 및 대응책",
    "sourceSection": "SECTION 06 각종 시스템 보안위협 및 대응책",
    "question": "리눅스에서 프로세스의 주소 공간 배치 난수화(ASLR) 설정값을 확인하려 한다. 읽어야 할 파일은?",
    "options": [
      {
        "number": 1,
        "text": "`/proc/sys/kernel/randomize_va_space`"
      },
      {
        "number": 2,
        "text": "`/proc/sys/kernel/watchdog`"
      },
      {
        "number": 3,
        "text": "`/proc/sys/kernel/panic`"
      },
      {
        "number": 4,
        "text": "`/proc/sys/kernel/hostname`"
      }
    ],
    "answer": 1,
    "explanation": "`randomize_va_space`는 프로세스 가상 주소 공간의 난수화 수준을 나타낸다. ASLR은 스택과 공유 라이브러리 등의 배치 주소를 바꾸어 공격자가 사용할 주소를 예측하기 어렵게 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q249",
    "partId": 4,
    "sectionId": 17,
    "sectionTitle": "각종 시스템 보안위협 및 대응책",
    "sourceSection": "SECTION 06 각종 시스템 보안위협 및 대응책",
    "question": "버퍼 오버플로 공격과 대응 기법에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "스택의 지역 버퍼를 넘어서 쓰면 저장된 반환 주소가 손상될 수 있다."
      },
      {
        "number": 2,
        "text": "스택 카나리는 함수 반환 전에 보호값의 변경 여부를 검사한다."
      },
      {
        "number": 3,
        "text": "힙 버퍼 오버플로가 성립하려면 반드시 스택에 저장된 함수 반환 주소를 덮어써야 한다."
      },
      {
        "number": 4,
        "text": "스택을 실행 불가로 설정하면 그곳에 삽입된 코드의 실행을 차단할 수 있다."
      }
    ],
    "answer": 3,
    "explanation": "힙 버퍼 오버플로는 **동적으로 할당된 버퍼의 경계**를 넘어설 때 발생한다. 인접한 힙 객체나 함수 포인터가 손상될 수 있으며, 스택의 반환 주소는 그대로일 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q250",
    "partId": 4,
    "sectionId": 17,
    "sectionTitle": "각종 시스템 보안위협 및 대응책",
    "sourceSection": "SECTION 06 각종 시스템 보안위협 및 대응책",
    "question": "공격자가 스택이나 힙의 데이터 페이지에 코드를 삽입했다. 해당 페이지에 실행 권한을 주지 않아 CPU가 그 코드를 명령어로 실행하지 못하게 하는 기법은?",
    "options": [
      {
        "number": 1,
        "text": "ASLR"
      },
      {
        "number": 2,
        "text": "스택 카나리"
      },
      {
        "number": 3,
        "text": "입력 길이 검사"
      },
      {
        "number": 4,
        "text": "DEP/NX"
      }
    ],
    "answer": 4,
    "explanation": "**DEP/NX**는 데이터 페이지에 대한 명령어 실행을 제한한다. ASLR은 메모리의 배치 주소를 바꾸고, 스택 카나리는 보호값을 검사해 스택 손상을 탐지한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q251",
    "partId": 4,
    "sectionId": 17,
    "sectionTitle": "각종 시스템 보안위협 및 대응책",
    "sourceSection": "SECTION 06 각종 시스템 보안위협 및 대응책",
    "question": "외부 입력을 `printf()`의 서식 문자열로 그대로 사용했다. 이 취약점의 **직접적인 영향**과 가장 거리가 먼 것은?",
    "options": [
      {
        "number": 1,
        "text": "프로그램이 자신을 복제해 다른 컴퓨터로 자동 전파된다."
      },
      {
        "number": 2,
        "text": "프로세스 메모리에 있던 값이 출력되어 노출된다."
      },
      {
        "number": 3,
        "text": "잘못된 메모리 참조로 프로세스가 비정상 종료된다."
      },
      {
        "number": 4,
        "text": "조건에 따라 공격자가 의도한 메모리 위치의 값이 변경된다."
      }
    ],
    "answer": 1,
    "explanation": "포맷 스트링 취약점은 입력 속 서식 지정자가 명령처럼 해석되면서 메모리 노출·변조나 프로세스 종료를 일으킬 수 있다. 다른 컴퓨터로 복제·전파되려면 별도의 전파 기능이 필요하다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q252",
    "partId": 4,
    "sectionId": 17,
    "sectionTitle": "각종 시스템 보안위협 및 대응책",
    "sourceSection": "SECTION 06 각종 시스템 보안위협 및 대응책",
    "question": "포맷 스트링 취약점이 의심되는 실행 파일을 분석하고 있다. 다음 중 주된 용도가 **리눅스 방화벽의 패킷 필터링 규칙 관리**인 도구는?",
    "options": [
      {
        "number": 1,
        "text": "`gdb`"
      },
      {
        "number": 2,
        "text": "`iptables`"
      },
      {
        "number": 3,
        "text": "`objdump`"
      },
      {
        "number": 4,
        "text": "`ltrace`"
      }
    ],
    "answer": 2,
    "explanation": "`iptables`는 패킷 처리 규칙을 관리한다. 취약점 분석 시 `gdb`로 실행 상태와 메모리를 살피고, `objdump`로 기계어를 확인하며, `ltrace`로 라이브러리 함수 호출을 추적할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q253",
    "partId": 4,
    "sectionId": 17,
    "sectionTitle": "각종 시스템 보안위협 및 대응책",
    "sourceSection": "SECTION 06 각종 시스템 보안위협 및 대응책",
    "question": "프로그램이 파일의 접근권한을 검사한 직후, 실제로 파일을 열기 전에 다른 프로세스가 같은 경로가 가리키는 파일을 바꾸었다. 이처럼 두 작업의 실행 순서에 따라 결과가 달라지는 점을 악용한 공격은?",
    "options": [
      {
        "number": 1,
        "text": "LDAP 인젝션"
      },
      {
        "number": 2,
        "text": "SQL 인젝션"
      },
      {
        "number": 3,
        "text": "레이스 컨디션 공격"
      },
      {
        "number": 4,
        "text": "XML 인젝션"
      }
    ],
    "answer": 3,
    "explanation": "**레이스 컨디션**은 여러 작업의 상대적인 실행 시점이 결과에 영향을 주는 상황이다. 제시문처럼 검사한 대상과 실제 사용한 대상이 달라지는 사례를 TOCTOU(Time of Check to Time of Use)라고 한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q254",
    "partId": 4,
    "sectionId": 17,
    "sectionTitle": "각종 시스템 보안위협 및 대응책",
    "sourceSection": "SECTION 06 각종 시스템 보안위협 및 대응책",
    "question": "개발자가 유지보수를 위해 정규 로그인 절차를 거치지 않고 관리자 기능에 접근할 수 있는 숨은 통로를 남겼다. 이를 가리키는 용어는?",
    "options": [
      {
        "number": 1,
        "text": "트랩도어(Trapdoor)"
      },
      {
        "number": 2,
        "text": "웜(Worm)"
      },
      {
        "number": 3,
        "text": "혹스(Hoax)"
      },
      {
        "number": 4,
        "text": "논리폭탄(Logic Bomb)"
      }
    ],
    "answer": 1,
    "explanation": "**트랩도어 또는 백도어**는 정상적인 인증이나 접근통제를 우회하는 경로이다. 유지보수를 위해 만든 통로라도 공격자가 발견하면 같은 경로로 접근할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q255",
    "partId": 4,
    "sectionId": 17,
    "sectionTitle": "각종 시스템 보안위협 및 대응책",
    "sourceSection": "SECTION 06 각종 시스템 보안위협 및 대응책",
    "question": "Windows 프로그램 분석 작업에 적합한 도구를 ㄱ, ㄴ, ㄷ 순서로 바르게 나열한 것은?\n\nㄱ. x86 실행 파일에 중단점을 걸고 명령어를 한 단계씩 실행한다.\nㄴ. 실행 중인 프로세스의 부모·자식 관계와 열린 핸들을 확인한다.\nㄷ. 프로그램 실행 중 발생하는 파일 열기·쓰기 등의 이벤트를 관찰한다.",
    "options": [
      {
        "number": 1,
        "text": "Process Explorer → OllyDbg → FileMon"
      },
      {
        "number": 2,
        "text": "OllyDbg → FileMon → Process Explorer"
      },
      {
        "number": 3,
        "text": "FileMon → Process Explorer → OllyDbg"
      },
      {
        "number": 4,
        "text": "OllyDbg → Process Explorer → FileMon"
      }
    ],
    "answer": 4,
    "explanation": "**OllyDbg**는 실행 흐름을 분석하는 디버거이고, **Process Explorer**는 프로세스와 핸들을 조사하는 도구이다. **FileMon**은 파일시스템 활동을 추적하는 도구이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q256",
    "partId": 4,
    "sectionId": 17,
    "sectionTitle": "각종 시스템 보안위협 및 대응책",
    "sourceSection": "SECTION 06 각종 시스템 보안위협 및 대응책",
    "question": "분석자가 프로그램의 전체 소스코드를 열람하고 조건 분기와 데이터 흐름을 따라가며 입력 검증이 빠진 위치를 찾았다. 내부 구현에 대한 지식을 기준으로 분류할 때 어떤 분석 방식인가?",
    "options": [
      {
        "number": 1,
        "text": "블랙박스 분석"
      },
      {
        "number": 2,
        "text": "화이트박스 분석"
      },
      {
        "number": 3,
        "text": "그레이박스 분석"
      },
      {
        "number": 4,
        "text": "네트워크 트래픽 분석"
      }
    ],
    "answer": 2,
    "explanation": "**화이트박스 분석**은 소스코드와 내부 구조를 활용해 구현 오류를 찾는다. 블랙박스 분석은 외부에서 관찰한 입출력을 이용하고, 그레이박스 분석은 제한된 내부 정보를 활용한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q257",
    "partId": 4,
    "sectionId": 17,
    "sectionTitle": "각종 시스템 보안위협 및 대응책",
    "sourceSection": "SECTION 06 각종 시스템 보안위협 및 대응책",
    "question": "침해된 서버에서 공격자의 프로세스가 실행 중인데도 관리 도구의 목록에는 나타나지 않았다. 조사 결과, 파일과 프로세스 조회 결과를 조작해 공격자의 프로그램을 숨기는 도구가 발견되었다. 이 도구는?",
    "options": [
      {
        "number": 1,
        "text": "매크로 바이러스"
      },
      {
        "number": 2,
        "text": "키로거"
      },
      {
        "number": 3,
        "text": "루트킷"
      },
      {
        "number": 4,
        "text": "논리폭탄"
      }
    ],
    "answer": 3,
    "explanation": "**루트킷**은 시스템의 조회 기능 등을 조작해 악성 파일, 프로세스, 네트워크 연결과 같은 침입 흔적을 감춘다. 이 때문에 감염된 시스템의 관리 도구가 보여 주는 정보도 조작될 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q258",
    "partId": 4,
    "sectionId": 17,
    "sectionTitle": "각종 시스템 보안위협 및 대응책",
    "sourceSection": "SECTION 06 각종 시스템 보안위협 및 대응책",
    "question": "루트킷의 특성으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "다른 컴퓨터로 스스로 복제·전파하는 기능이 있어야 루트킷으로 분류된다."
      },
      {
        "number": 2,
        "text": "공격자가 설치한 프로그램을 시스템 관리자에게 보이지 않게 숨길 수 있다."
      },
      {
        "number": 3,
        "text": "사용자 모드나 커널 모드에서 시스템의 정상 동작을 변조할 수 있다."
      },
      {
        "number": 4,
        "text": "공격자가 침해 사실을 감추고 접근을 유지하는 데 이용할 수 있다."
      }
    ],
    "answer": 1,
    "explanation": "루트킷을 구별하는 특징은 **은폐**이다. 스스로 복제해 다른 호스트로 확산되는 동작은 웜의 대표적인 특징이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q259",
    "partId": 4,
    "sectionId": 17,
    "sectionTitle": "각종 시스템 보안위협 및 대응책",
    "sourceSection": "SECTION 06 각종 시스템 보안위협 및 대응책",
    "question": "다음 중 **논리폭탄(Logic Bomb)**의 동작을 가장 잘 보여 주는 사례는?",
    "options": [
      {
        "number": 1,
        "text": "관리자의 비밀번호 없이 접속할 수 있도록 비밀 계정을 만든다."
      },
      {
        "number": 2,
        "text": "네트워크에서 취약한 호스트를 찾아 자신의 복사본을 전송한다."
      },
      {
        "number": 3,
        "text": "파일 목록에서 특정 프로세스의 실행 파일을 숨긴다."
      },
      {
        "number": 4,
        "text": "급여 프로그램에 코드를 숨겨 두고 특정 사번이 직원 명단에서 삭제되면 급여 데이터를 훼손한다."
      }
    ],
    "answer": 4,
    "explanation": "**논리폭탄**은 미리 정한 조건이 충족될 때 악성 동작을 실행한다. 제시된 사례에서는 특정 사번의 삭제가 작동 조건이고, 급여 데이터 훼손이 그 결과이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q260",
    "partId": 4,
    "sectionId": 18,
    "sectionTitle": "최신 보안 주제들",
    "sourceSection": "SECTION 07 최신 보안 주제들",
    "question": "비트코인에서는 후보 블록의 헤더 값을 바꾸어 가며 해시를 계산하고, 결과가 목표값 이하가 되면 (ㄱ) 조건을 충족한다. 이처럼 유효한 블록을 찾아 보상을 얻으려는 활동을 (ㄴ)이라고 한다. ㄱ과 ㄴ을 바르게 짝지은 것은?",
    "options": [
      {
        "number": 1,
        "text": "지분증명 → 채굴"
      },
      {
        "number": 2,
        "text": "작업증명 → 송금"
      },
      {
        "number": 3,
        "text": "작업증명 → 채굴"
      },
      {
        "number": 4,
        "text": "지분증명 → 송금"
      }
    ],
    "answer": 3,
    "explanation": "**작업증명(PoW)**은 블록 헤더의 해시값이 정해진 난이도 조건을 만족하는지로 검증한다. **채굴**은 논스 등을 바꾸며 그 조건을 만족하는 블록을 찾는 활동이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q261",
    "partId": 4,
    "sectionId": 18,
    "sectionTitle": "최신 보안 주제들",
    "sourceSection": "SECTION 07 최신 보안 주제들",
    "question": "스마트홈 IoT 기기의 보안 위협과 대응에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "홈 카메라의 영상 열람 권한을 제한해 제3자의 무단 시청 위험을 줄인다."
      },
      {
        "number": 2,
        "text": "원본 영상에 MD5 또는 SHA-1 해시값을 붙여 전송하면 도청자가 영상 내용을 볼 수 없다."
      },
      {
        "number": 3,
        "text": "외부 입력의 형식과 길이를 검증해 잘못된 입력 처리로 인한 취약점을 줄인다."
      },
      {
        "number": 4,
        "text": "펌웨어에 포함된 제3자 라이브러리의 알려진 취약점을 확인하고 보안 패치를 적용한다."
      }
    ],
    "answer": 2,
    "explanation": "해시값을 첨부해도 원본 영상은 그대로 전송되므로 **기밀성**이 생기지 않는다. 전송 중 영상 노출을 막으려면 통신 구간을 암호화해야 한다. MD5와 SHA-1에는 충돌 저항성 문제도 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q263",
    "partId": 4,
    "sectionId": 18,
    "sectionTitle": "최신 보안 주제들",
    "sourceSection": "SECTION 07 최신 보안 주제들",
    "question": "2016년에 알려진 악성코드로, 기본 계정과 비밀번호를 그대로 사용하는 IP 카메라·DVR 등의 IoT 기기를 감염시켜 대규모 DDoS 공격용 봇넷을 구성했다. 이 악성코드는?",
    "options": [
      {
        "number": 1,
        "text": "스턱스넷(Stuxnet)"
      },
      {
        "number": 2,
        "text": "SQL 슬래머(SQL Slammer)"
      },
      {
        "number": 3,
        "text": "님다(Nimda)"
      },
      {
        "number": 4,
        "text": "미라이(Mirai)"
      }
    ],
    "answer": 4,
    "explanation": "**미라이**는 보안이 취약한 IoT 기기를 봇으로 편입했다. 공격자는 감염된 다수의 기기에서 표적으로 트래픽을 집중시켜 서비스 가용성을 떨어뜨렸다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q264",
    "partId": 4,
    "sectionId": 18,
    "sectionTitle": "최신 보안 주제들",
    "sourceSection": "SECTION 07 최신 보안 주제들",
    "question": "클라우드 기반 보안 서비스인 SECaaS(Security as a Service)에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "SECaaS의 주된 목적은 고객이 보안 애플리케이션을 직접 개발하도록 실행 환경만 제공하는 것이다."
      },
      {
        "number": 2,
        "text": "고객은 인증이나 침입 탐지 등의 보안 기능을 네트워크를 통해 이용할 수 있다."
      },
      {
        "number": 3,
        "text": "보안 전문업체가 독립된 클라우드 서비스 형태로 제공할 수 있다."
      },
      {
        "number": 4,
        "text": "클라우드 사업자가 자사 고객에게 보안 이벤트 분석 기능을 서비스로 제공할 수 있다."
      }
    ],
    "answer": 1,
    "explanation": "**SECaaS**에서 고객이 제공받는 것은 인증·탐지·분석 등의 보안 기능이다. 애플리케이션을 개발하고 배포할 실행 환경을 제공하는 것은 **PaaS**의 역할이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q265",
    "partId": 4,
    "sectionId": 18,
    "sectionTitle": "최신 보안 주제들",
    "sourceSection": "SECTION 07 최신 보안 주제들",
    "question": "APT 공격의 단계와 해당 단계에서 수행하는 활동을 연결한 것 중 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "사전 준비 — 공개된 조직도와 행사 자료에서 표적 직원의 연락처를 파악한다."
      },
      {
        "number": 2,
        "text": "침투 — 표적 직원의 PC를 감염시켜 내부망에 접근할 거점을 확보한다."
      },
      {
        "number": 3,
        "text": "수집 — 이미 확보한 기밀문서를 공격자가 관리하는 외부 서버로 전송한다."
      },
      {
        "number": 4,
        "text": "내부 탐색 — 접근 가능한 서버와 공유 폴더를 조사해 기밀자료의 위치를 찾는다."
      }
    ],
    "answer": 3,
    "explanation": "**수집**은 표적 환경에서 필요한 자료를 확보해 모으는 단계이다. 확보한 자료를 조직 외부의 공격자 서버로 보내는 행위는 **유출**에 해당한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q266",
    "partId": 4,
    "sectionId": 18,
    "sectionTitle": "최신 보안 주제들",
    "sourceSection": "SECTION 07 최신 보안 주제들",
    "question": "공격자가 특정 업계 종사자들이 자주 방문하는 협회 웹사이트를 미리 침해했다. 이후 협회 공지사항을 보러 온 직원의 브라우저를 통해 악성코드 감염을 시도했다. 이 표적 공격 기법은?",
    "options": [
      {
        "number": 1,
        "text": "파밍(Pharming)"
      },
      {
        "number": 2,
        "text": "워터링 홀(Watering Hole)"
      },
      {
        "number": 3,
        "text": "스피어 피싱(Spear Phishing)"
      },
      {
        "number": 4,
        "text": "패스워드 스프레이(Password Spraying)"
      }
    ],
    "answer": 2,
    "explanation": "**워터링 홀**은 표적 집단의 방문 습관을 조사해 자주 찾는 사이트를 공격 거점으로 삼는 기법이다. 이 사례에서는 직원이 평소처럼 방문한 실제 협회 사이트가 감염 경로이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q267",
    "partId": 4,
    "sectionId": 18,
    "sectionTitle": "최신 보안 주제들",
    "sourceSection": "SECTION 07 최신 보안 주제들",
    "question": "랜섬웨어의 감염 경로와 피해 복구에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "취약한 브라우저로 변조된 웹사이트를 방문하면 드라이브 바이 다운로드를 통해 감염될 수 있다."
      },
      {
        "number": 2,
        "text": "파일 암호화형 랜섬웨어는 문서를 열 수 없게 한 뒤 복구 대가를 요구할 수 있다."
      },
      {
        "number": 3,
        "text": "화면 잠금형 랜섬웨어는 단말기 사용을 제한하고 잠금 해제 대가를 요구할 수 있다."
      },
      {
        "number": 4,
        "text": "암호화에 사용한 알고리즘의 이름을 알아내면 신종·변종을 포함한 모든 피해 파일을 즉시 복호화할 수 있다."
      }
    ],
    "answer": 4,
    "explanation": "안전하게 구현된 암호에서는 알고리즘이 공개되어 있어도 복호화에 필요한 키를 구하기 어렵다. **복호화**에는 키 확보나 구현 결함 등 추가 조건이 필요하며, 별도로 보관한 정상 백업이 있다면 그 사본으로 **복원**할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q268",
    "partId": 4,
    "sectionId": 18,
    "sectionTitle": "최신 보안 주제들",
    "sourceSection": "SECTION 07 최신 보안 주제들",
    "question": "공격자가 소프트웨어 업체의 빌드 서버에 침입해 정식 업데이트 파일에 악성코드를 삽입했다. 고객사들은 평소 쓰던 공식 업데이트 경로로 이 파일을 배포받았다. 이 공격은?",
    "options": [
      {
        "number": 1,
        "text": "공급망 공격"
      },
      {
        "number": 2,
        "text": "워터링 홀 공격"
      },
      {
        "number": 3,
        "text": "재전송 공격"
      },
      {
        "number": 4,
        "text": "무차별 대입 공격"
      }
    ],
    "answer": 1,
    "explanation": "**공급망 공격**은 제품의 개발·빌드·배포 과정에 침투해 공급업체를 신뢰하는 고객에게 피해를 확산시킨다. 이 사례에서는 정상 업데이트 파일이 변조된 지점이 판단의 단서이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q269",
    "partId": 4,
    "sectionId": 18,
    "sectionTitle": "최신 보안 주제들",
    "sourceSection": "SECTION 07 최신 보안 주제들",
    "question": "전력회사의 중앙 관제실이 여러 변전소에서 계측값과 설비 상태를 수집하고, 필요할 때 현장 설비에 제어 명령을 보낸다. 이러한 **원격 감시·제어 및 데이터 수집 시스템**은?",
    "options": [
      {
        "number": 1,
        "text": "Modbus"
      },
      {
        "number": 2,
        "text": "PLC"
      },
      {
        "number": 3,
        "text": "SCADA"
      },
      {
        "number": 4,
        "text": "Stuxnet"
      }
    ],
    "answer": 3,
    "explanation": "**SCADA**는 여러 현장의 데이터를 수집해 운영자가 설비 상태를 감시하고 제어하도록 한다. PLC는 현장에서 제어 로직을 실행하는 장치이고, Modbus는 장치 간 데이터 교환에 쓰이는 통신 프로토콜이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q270",
    "partId": 4,
    "sectionId": 18,
    "sectionTitle": "최신 보안 주제들",
    "sourceSection": "SECTION 07 최신 보안 주제들",
    "question": "직원이 고객 명단을 개인 메일에 첨부하거나 USB에 복사하려 할 때, 파일 내용에서 개인정보를 식별해 반출을 차단하고 기록하는 보안 솔루션은?",
    "options": [
      {
        "number": 1,
        "text": "DRM"
      },
      {
        "number": 2,
        "text": "DLP"
      },
      {
        "number": 3,
        "text": "방화벽"
      },
      {
        "number": 4,
        "text": "IPS"
      }
    ],
    "answer": 2,
    "explanation": "**DLP(Data Loss Prevention)**는 보호할 데이터의 내용과 전송 경로를 검사해 유출 정책 위반을 탐지·차단한다. DRM은 문서나 콘텐츠에 열람·편집·인쇄 등의 이용 권한을 적용하는 데 초점을 둔다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q272",
    "partId": 4,
    "sectionId": 18,
    "sectionTitle": "최신 보안 주제들",
    "sourceSection": "SECTION 07 최신 보안 주제들",
    "question": "딥웹(Deep Web)과 다크웹(Dark Web)에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "딥웹에는 일반 검색엔진이 색인하지 않는 웹 콘텐츠가 포함된다."
      },
      {
        "number": 2,
        "text": "다크웹에는 Tor 같은 별도 네트워크를 통해 접근하는 웹서비스가 있다."
      },
      {
        "number": 3,
        "text": "다크넷은 기존 인터넷 위에 구성된 오버레이 네트워크 형태로 운영될 수 있다."
      },
      {
        "number": 4,
        "text": "딥웹은 다크웹의 하위 개념이므로 검색엔진에 색인되지 않은 개인 웹메일함도 모두 다크웹에 속한다."
      }
    ],
    "answer": 4,
    "explanation": "통상적인 분류에서 **다크웹이 딥웹의 일부**이다. 로그인해야 볼 수 있는 개인 웹메일함은 딥웹의 예이지만, 일반 검색에 나타나지 않는다는 이유만으로 다크웹에 속하지는 않는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q273",
    "partId": 5,
    "sectionId": 19,
    "sectionTitle": "네트워크 개요",
    "sourceSection": "SECTION 01 네트워크 개요",
    "question": "다음 중 48비트 이더넷 MAC 주소를 콜론으로 구분해 올바르게 표기한 것은?",
    "options": [
      {
        "number": 1,
        "text": "`02:1A:7F:30:BC`"
      },
      {
        "number": 2,
        "text": "`02:1A:7F:30:BC:09`"
      },
      {
        "number": 3,
        "text": "`02:1A:7F:30:BC:09:44`"
      },
      {
        "number": 4,
        "text": "`02:1A:7G:30:BC:09`"
      }
    ],
    "answer": 2,
    "explanation": "48비트는 6바이트이므로 두 자리 16진수 6개로 표기한다. ①은 5바이트, ③은 7바이트이며, ④의 `G`는 16진수에 사용할 수 없는 문자이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q274",
    "partId": 5,
    "sectionId": 19,
    "sectionTitle": "네트워크 개요",
    "sourceSection": "SECTION 01 네트워크 개요",
    "question": "OSI 7계층의 기능 분류에서 **표현 계층**에 해당하는 것은?",
    "options": [
      {
        "number": 1,
        "text": "인접 노드 사이에서 전송되는 프레임의 오류를 검출한다."
      },
      {
        "number": 2,
        "text": "여러 장치가 공유하는 전송 매체의 접근 순서를 제어한다."
      },
      {
        "number": 3,
        "text": "한 프레임을 보낸 뒤 확인 응답을 기다리는 정지-대기 방식으로 흐름을 제어한다."
      },
      {
        "number": 4,
        "text": "응용 데이터의 표현 형식을 변환하거나 데이터를 압축·암호화한다."
      }
    ],
    "answer": 4,
    "explanation": "표현 계층은 응용 데이터를 주고받는 데 필요한 형식 변환, 압축, 암호화 등을 담당한다. ①~③은 인접 노드 사이의 프레임 전송과 관련된 데이터링크 계층 기능이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q275",
    "partId": 5,
    "sectionId": 19,
    "sectionTitle": "네트워크 개요",
    "sourceSection": "SECTION 01 네트워크 개요",
    "question": "데이터링크 계층의 프레임 처리에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "프레임의 시작과 끝을 표시하는 데 정해진 플래그 패턴을 사용할 수 있다."
      },
      {
        "number": 2,
        "text": "링크 프로토콜은 흐름 제어와 오류 제어 기능을 제공할 수 있다."
      },
      {
        "number": 3,
        "text": "프레임 내부의 데이터가 경계 플래그로 오인되지 않도록 하는 비트 스터핑은 네트워크 계층이 담당한다."
      },
      {
        "number": 4,
        "text": "IEEE 802 구조에서 데이터링크 계층은 LLC와 MAC 부계층으로 구분된다."
      }
    ],
    "answer": 3,
    "explanation": "비트 스터핑은 **데이터링크 계층**의 프레임 처리 기법이다. 송신 측이 규칙에 따라 비트를 삽입하면 수신 측은 프레임 경계를 식별한 뒤 삽입된 비트를 제거해 원래 데이터를 복원한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q276",
    "partId": 5,
    "sectionId": 19,
    "sectionTitle": "네트워크 개요",
    "sourceSection": "SECTION 01 네트워크 개요",
    "question": "PC A와 서버 B가 서로 다른 이더넷 네트워크에 있고, 두 네트워크는 라우터 한 대로 연결되어 있다. A에서 B로 데이터를 전송할 때 MAC 주소에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "A가 라우터로 보내는 첫 프레임의 목적지 MAC 주소는 서버 B의 MAC 주소이다."
      },
      {
        "number": 2,
        "text": "이더넷 프레임의 출발지·목적지 MAC 주소는 각각 48비트이다."
      },
      {
        "number": 3,
        "text": "MAC 주소는 데이터링크 계층에서 프레임을 전달하는 데 사용한다."
      },
      {
        "number": 4,
        "text": "라우터는 B가 연결된 네트워크로 패킷을 전달할 때 새 이더넷 프레임을 구성한다."
      }
    ],
    "answer": 1,
    "explanation": "A는 첫 프레임의 목적지 MAC 주소에 **A 쪽 라우터 인터페이스의 MAC 주소**를 넣는다. 라우터는 패킷을 B 쪽으로 전달하면서 새 프레임의 목적지 MAC 주소에 **서버 B의 MAC 주소**를 넣는다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q277",
    "partId": 5,
    "sectionId": 20,
    "sectionTitle": "TCP/IP",
    "sourceSection": "SECTION 02 TCP/IP",
    "question": "OSI 모델에서 A는 세션 계층과 네트워크 계층 사이에 있고, B는 네트워크 계층과 물리 계층 사이에 있다. 옳은 설명을 **모두** 고른 것은?\n\nㄱ. A는 송신 프로세스에서 수신 프로세스로 데이터를 전달한다.\nㄴ. A의 프로토콜은 종단 간 흐름 제어를 제공할 수 있다.\nㄷ. B는 목적지 IP 주소로 여러 네트워크를 거치는 경로를 선택한다.\nㄹ. B는 프레임 단위로 데이터를 다룬다.",
    "options": [
      {
        "number": 1,
        "text": "ㄱ, ㄴ, ㄷ"
      },
      {
        "number": 2,
        "text": "ㄱ, ㄷ, ㄹ"
      },
      {
        "number": 3,
        "text": "ㄱ, ㄴ, ㄹ"
      },
      {
        "number": 4,
        "text": "ㄴ, ㄷ, ㄹ"
      }
    ],
    "answer": 3,
    "explanation": "A는 **전송 계층**, B는 **데이터링크 계층**이다. TCP의 수신 윈도는 종단 간 흐름 제어의 예이다. ㄷ의 IP 주소 기반 경로 선택은 네트워크 계층의 기능이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q278",
    "partId": 5,
    "sectionId": 20,
    "sectionTitle": "TCP/IP",
    "sourceSection": "SECTION 02 TCP/IP",
    "question": "TCP와 UDP의 포트 번호에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "포트 번호 필드는 16비트이므로 0부터 65535까지 표현할 수 있다."
      },
      {
        "number": 2,
        "text": "잘 알려진 포트는 클라이언트가 접속할 때 임시 출발지 포트로 사용하도록 지정한 범위이다."
      },
      {
        "number": 3,
        "text": "같은 숫자의 TCP 포트와 UDP 포트는 서로 구분된다."
      },
      {
        "number": 4,
        "text": "통신 흐름을 구별할 때 출발지·목적지 IP 주소, 출발지·목적지 포트, 전송 프로토콜을 이용할 수 있다."
      }
    ],
    "answer": 2,
    "explanation": "0~1023번은 **잘 알려진 포트 범위**이며, 이 범위에 지정된 서비스 포트는 클라이언트가 서버에 접속할 목적지를 찾는 데 쓰인다. 예를 들어 SSH에 접속할 때 서버의 기본 목적지 포트는 TCP 22번이고, 클라이언트는 보통 임시 출발지 포트를 사용한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q279",
    "partId": 5,
    "sectionId": 20,
    "sectionTitle": "TCP/IP",
    "sourceSection": "SECTION 02 TCP/IP",
    "question": "다음 목적지 포트를 사용하는 대표 프로토콜을 ㄱ, ㄴ, ㄷ 순서로 바르게 나열한 것은?\n\nㄱ. UDP 161번\nㄴ. TCP 22번\nㄷ. UDP 53번",
    "options": [
      {
        "number": 1,
        "text": "SNMP → SSH → DNS"
      },
      {
        "number": 2,
        "text": "DNS → SSH → SNMP"
      },
      {
        "number": 3,
        "text": "SNMP → FTP → DNS"
      },
      {
        "number": 4,
        "text": "SSH → DNS → SNMP"
      }
    ],
    "answer": 1,
    "explanation": "관리 시스템이 **SNMP 에이전트**에 조회를 요청할 때는 일반적으로 UDP 161번을 사용한다. SSH의 기본 포트는 TCP 22번이며, 일반적인 DNS 질의에는 UDP 53번이 쓰인다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q280",
    "partId": 5,
    "sectionId": 20,
    "sectionTitle": "TCP/IP",
    "sourceSection": "SECTION 02 TCP/IP",
    "question": "IPv4 헤더 필드와 그 용도를 연결한 것 중 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "Version — 사용 중인 IP 버전을 표시한다."
      },
      {
        "number": 2,
        "text": "TTL — 패킷이 라우팅 루프에서 계속 전달되는 것을 제한한다."
      },
      {
        "number": 3,
        "text": "Protocol — IP 데이터에 담긴 TCP, UDP 등의 상위 프로토콜을 식별한다."
      },
      {
        "number": 4,
        "text": "Flags — IPv4 헤더의 전송 오류를 검사한다."
      }
    ],
    "answer": 4,
    "explanation": "IPv4 헤더의 오류 검출에는 **Header Checksum**을 사용한다. Flags 필드의 DF는 단편화 금지를, MF는 뒤에 이어지는 단편이 있음을 나타낸다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q281",
    "partId": 5,
    "sectionId": 20,
    "sectionTitle": "TCP/IP",
    "sourceSection": "SECTION 02 TCP/IP",
    "question": "전통적인 IPv4 주소 클래스 분류에서 최상위 4비트가 `1110`이고, 멀티캐스트 그룹을 식별하는 데 사용하는 주소는 어느 클래스인가?",
    "options": [
      {
        "number": 1,
        "text": "클래스 C"
      },
      {
        "number": 2,
        "text": "클래스 D"
      },
      {
        "number": 3,
        "text": "클래스 B"
      },
      {
        "number": 4,
        "text": "클래스 E"
      }
    ],
    "answer": 2,
    "explanation": "`1110`으로 시작하면 첫 번째 옥텟의 범위는 **224~239**이다. 따라서 `224.0.0.0/4`가 클래스 D 멀티캐스트 주소 범위에 해당한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q282",
    "partId": 5,
    "sectionId": 20,
    "sectionTitle": "TCP/IP",
    "sourceSection": "SECTION 02 TCP/IP",
    "question": "호스트의 IPv4 주소가 `192.0.2.82/27`일 때, 같은 접두사 길이를 점으로 구분한 십진수 서브넷 마스크로 바르게 나타낸 것은?",
    "options": [
      {
        "number": 1,
        "text": "`255.255.255.192`"
      },
      {
        "number": 2,
        "text": "`255.255.255.240`"
      },
      {
        "number": 3,
        "text": "`255.255.255.224`"
      },
      {
        "number": 4,
        "text": "`255.255.255.248`"
      }
    ],
    "answer": 3,
    "explanation": "`/27`은 왼쪽부터 27비트가 1이라는 뜻이다. 앞의 세 옥텟이 24비트를 차지하고 마지막 옥텟은 `11100000`이므로, 그 값은 128+64+32 = **224**이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q283",
    "partId": 5,
    "sectionId": 20,
    "sectionTitle": "TCP/IP",
    "sourceSection": "SECTION 02 TCP/IP",
    "question": "다음 프로토콜 설명 중 옳은 것을 **모두** 고른 것은?\n\nㄱ. UDP는 데이터그램의 도착이나 순서를 보장하지 않는다.\nㄴ. ARP는 MAC 주소를 입력으로 받아 상대의 IPv4 주소를 알아낸다.\nㄷ. IGMP는 IPv4 멀티캐스트 그룹 가입 상태를 알리는 데 사용된다.\nㄹ. TCP는 신뢰성 있는 연결 지향형 전송을 제공한다.\nㅁ. ICMP는 IP 패킷 전달 오류를 알리거나 네트워크를 진단하는 데 사용된다.",
    "options": [
      {
        "number": 1,
        "text": "ㄱ, ㄴ, ㄷ, ㄹ"
      },
      {
        "number": 2,
        "text": "ㄴ, ㄷ, ㄹ, ㅁ"
      },
      {
        "number": 3,
        "text": "ㄱ, ㄴ, ㄹ, ㅁ"
      },
      {
        "number": 4,
        "text": "ㄱ, ㄷ, ㄹ, ㅁ"
      }
    ],
    "answer": 4,
    "explanation": "ㄴ은 주소를 알아내는 방향이 뒤바뀌었다. 이더넷에서 **ARP**는 같은 링크에 있는 호스트나 다음 홉 라우터의 **IPv4 주소에 대응하는 MAC 주소**를 구하는 데 사용한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q284",
    "partId": 5,
    "sectionId": 20,
    "sectionTitle": "TCP/IP",
    "sourceSection": "SECTION 02 TCP/IP",
    "question": "목적지 호스트가 IPv4 데이터그램의 첫 번째 단편을 받았으나 나머지 단편이 제시간에 도착하지 않아 재조립을 중단했다. 이 사유를 송신지에 알리는 ICMPv4 오류 메시지는?",
    "options": [
      {
        "number": 1,
        "text": "시간 초과(Time Exceeded)"
      },
      {
        "number": 2,
        "text": "목적지 도달 불가(Destination Unreachable)"
      },
      {
        "number": 3,
        "text": "매개변수 문제(Parameter Problem)"
      },
      {
        "number": 4,
        "text": "경로 재지정(Redirect)"
      }
    ],
    "answer": 1,
    "explanation": "**Time Exceeded(Type 11)**에서 코드 1은 단편 재조립 시간 초과를 뜻한다. 같은 유형의 코드 0은 패킷이 라우터를 지나는 도중 TTL이 소진된 경우에 해당한다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q285",
    "partId": 5,
    "sectionId": 20,
    "sectionTitle": "TCP/IP",
    "sourceSection": "SECTION 02 TCP/IP",
    "question": "초기 ICMPv4에서 라우터나 목적지 호스트의 버퍼 부족으로 데이터그램이 폐기될 때, 송신지에 전송 속도를 낮추도록 요청하기 위해 정의했던 메시지는?",
    "options": [
      {
        "number": 1,
        "text": "Redirect"
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
        "text": "Parameter Problem"
      }
    ],
    "answer": 2,
    "explanation": "**Source Quench(Type 4)**는 혼잡 시 송신 억제를 요청하던 메시지이다. 이 방식은 이후 폐기되었으므로 역사적으로 정의된 용도를 묻는 문항이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q286",
    "partId": 5,
    "sectionId": 20,
    "sectionTitle": "TCP/IP",
    "sourceSection": "SECTION 02 TCP/IP",
    "question": "IPv4 주소 변환 방식에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "정적 NAT는 특정 내부 주소와 외부 주소 사이에 고정된 일대일 대응을 설정한다."
      },
      {
        "number": 2,
        "text": "동적 NAT는 외부 주소 풀에서 사용 가능한 주소를 할당한다."
      },
      {
        "number": 3,
        "text": "PAT는 여러 내부 호스트의 연결을 구분하기 위해 반드시 외부 서버의 잘 알려진 목적지 포트를 변경한다."
      },
      {
        "number": 4,
        "text": "포트 변환을 사용하지 않는 동적 NAT에서는 주소 풀이 소진되면 새 내부 호스트에 외부 주소를 할당할 수 없다."
      }
    ],
    "answer": 3,
    "explanation": "일반적인 외부 접속에서 **PAT**는 내부 연결을 공인 IP 주소와 출발지 포트에 대응시킨다. 예를 들어 여러 PC가 같은 웹 서버에 접속해도 서버의 목적지 포트는 443번으로 유지하면서 변환된 출발지 포트로 연결을 구분할 수 있다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q287",
    "partId": 5,
    "sectionId": 20,
    "sectionTitle": "TCP/IP",
    "sourceSection": "SECTION 02 TCP/IP",
    "question": "네트워크 주소와 통신 종단점에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "TCP/IP 소켓 주소는 MAC 주소와 IP 주소를 결합해 나타낸다."
      },
      {
        "number": 2,
        "text": "일반적인 이더넷 MAC 주소의 길이는 48비트이다."
      },
      {
        "number": 3,
        "text": "IPv4 주소는 32비트이고 IPv6 주소는 128비트이다."
      },
      {
        "number": 4,
        "text": "TCP와 UDP의 출발지·목적지 포트 필드는 각각 16비트이다."
      }
    ],
    "answer": 1,
    "explanation": "TCP 또는 UDP의 통신 종단점은 **IP 주소와 포트 번호**로 나타낸다. 예를 들어 TCP의 `192.0.2.10:443`에서 `443`은 해당 호스트의 포트 번호이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q288",
    "partId": 5,
    "sectionId": 20,
    "sectionTitle": "TCP/IP",
    "sourceSection": "SECTION 02 TCP/IP",
    "question": "IPv6 주소와 헤더 구조에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "IPv6 주소의 길이는 128비트이다."
      },
      {
        "number": 2,
        "text": "IPv6 주소를 16진수로 표기할 때 콜론으로 각 그룹을 구분한다."
      },
      {
        "number": 3,
        "text": "IPv6는 기본 헤더 뒤에 확장 헤더를 연결할 수 있다."
      },
      {
        "number": 4,
        "text": "IPv6 주소를 생략 없이 16진수로 표기하면 16비트 그룹 12개로 구성된다."
      }
    ],
    "answer": 4,
    "explanation": "128비트를 16비트씩 나누면 **8개 그룹**이다. 각 그룹을 네 자리 16진수로 모두 쓰면 주소 전체는 콜론을 제외하고 32자리이다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q289",
    "partId": 5,
    "sectionId": 20,
    "sectionTitle": "TCP/IP",
    "sourceSection": "SECTION 02 TCP/IP",
    "question": "TCP/IP 주소 체계와 전송 방식에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "전통적인 클래스 A·B·C IPv4 주소는 네트워크 부분과 호스트 부분으로 구분한다."
      },
      {
        "number": 2,
        "text": "애니캐스트에서는 같은 주소를 사용하는 모든 수신자에게 동일한 패킷을 각각 전달한다."
      },
      {
        "number": 3,
        "text": "IPv6 주소 길이는 IPv4 주소 길이의 4배이다."
      },
      {
        "number": 4,
        "text": "IANA는 전 세계 IP 주소 자원의 할당을 조정하는 역할을 한다."
      }
    ],
    "answer": 2,
    "explanation": "**애니캐스트**에서는 동일한 목적지 주소를 여러 노드가 사용하며, 패킷은 라우팅 결과에 따라 그중 한 노드로 전달된다. 여기서 가까운 노드는 지리적 거리보다 라우팅 정책과 경로 비용을 기준으로 결정된다.",
    "reviewStatus": "not_fact_checked"
  },
  {
    "id": "Q290",
    "partId": 5,
    "sectionId": 20,
    "sectionTitle": "TCP/IP",
    "sourceSection": "SECTION 02 TCP/IP",
    "question": "TCP의 동작과 이를 사용하는 응용 프로토콜에 대한 설명으로 **옳지 않은 것**은?",
    "options": [
      {
        "number": 1,
        "text": "TCP는 연결 지향형 전송 프로토콜이다."
      },
      {
        "number": 2,
        "text": "일반적인 연결 설정에는 SYN, SYN-ACK, ACK의 3단계 교환이 사용된다."
      },
      {
        "number": 3,
        "text": "FTP와 TFTP는 모두 TCP 연결을 설정한 후 파일을 전송한다."
      },
      {
        "number": 4,
        "text": "TCP는 순서 번호와 확인 응답을 이용해 신뢰성 있는 바이트 스트림을 제공한다."
      }
    ],
    "answer": 3,
    "explanation": "**FTP는 TCP**, **TFTP는 UDP**를 사용한다. TFTP 클라이언트는 최초 요청을 서버의 UDP 69번 포트로 보내며, 이후에는 해당 전송을 위해 선택된 포트를 사용한다.",
    "reviewStatus": "not_fact_checked"
  }
];
