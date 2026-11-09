import type { Lesson } from "./types";

export const section31: Lesson = {
  "sectionId": 31,
  "partTitle": "PART 6. 애플리케이션 보안",
  "title": "SECTION 31. FTP 보안",
  "relatedQuestionIds": [
    "Q424",
    "Q425",
    "Q426",
    "Q427",
    "Q428",
    "Q429",
    "Q430",
    "Q431",
    "Q432",
    "Q433",
    "Q434",
    "Q435",
    "Q436",
    "Q437",
    "Q438",
    "Q439"
  ],
  "blocks": [
    {
      "type": "heading",
      "text": "FTP 기본 구조",
      "level": 3
    },
    {
      "type": "paragraph",
      "text": "FTP는 파일을 주고받을 때 TCP 연결 두 개를 사용한다."
    },
    {
      "type": "table",
      "headers": [
        "연결",
        "기본 포트",
        "역할"
      ],
      "rows": [
        [
          "제어 연결",
          "TCP 21",
          "로그인, 명령 전달, 전송 요청"
        ],
        [
          "데이터 연결",
          "별도 포트",
          "파일 내용이나 디렉터리 목록 전송"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "제어 연결은 명령을 주고받는 통로이고, 데이터 연결은 실제 데이터를 옮기는 통로다."
    },
    {
      "type": "heading",
      "text": "능동 모드와 수동 모드",
      "level": 3
    },
    {
      "type": "paragraph",
      "text": "두 모드의 차이는 데이터 연결을 누가 먼저 여느냐다."
    },
    {
      "type": "table",
      "headers": [
        "구분",
        "능동 모드(Active)",
        "수동 모드(Passive)"
      ],
      "rows": [
        [
          "데이터 연결을 여는 쪽",
          "서버가 클라이언트로 연결",
          "클라이언트가 서버로 연결"
        ],
        [
          "제어 연결",
          "클라이언트가 서버 TCP 21번에 연결",
          "동일"
        ],
        [
          "데이터 연결",
          "서버가 클라이언트 쪽으로 접속",
          "서버가 포트를 알려주고, 클라이언트가 접속"
        ],
        [
          "방화벽·NAT 환경",
          "서버에서 클라이언트로 들어오는 연결이 막힐 수 있음",
          "클라이언트가 연결을 시작하므로 비교적 잘 통과"
        ]
      ]
    },
    {
      "type": "heading",
      "text": "능동 모드 흐름",
      "level": 4
    },
    {
      "type": "code",
      "text": "클라이언트 ──제어 연결──> 서버:21\n클라이언트 ──PORT 명령──> 서버: 데이터 연결에 쓸 클라이언트 포트 전달\n서버       ──데이터 연결──> 클라이언트",
      "language": ""
    },
    {
      "type": "paragraph",
      "text": "서버가 클라이언트 쪽으로 새 연결을 시작한다. 클라이언트가 방화벽이나 NAT 뒤에 있으면 연결이 차단될 수 있다."
    },
    {
      "type": "heading",
      "text": "수동 모드 흐름",
      "level": 4
    },
    {
      "type": "code",
      "text": "클라이언트 ──제어 연결──> 서버:21\n클라이언트 ──PASV 명령──> 서버\n서버       ──응답────────> 데이터 연결용 서버 포트 안내\n클라이언트 ──데이터 연결──> 서버의 안내된 포트",
      "language": ""
    },
    {
      "type": "paragraph",
      "text": "클라이언트가 데이터 연결도 시작하므로 방화벽·NAT 환경에서 주로 사용된다. 서버 쪽에서는 데이터용 포트가 열려 있어야 한다."
    },
    {
      "type": "heading",
      "text": "보안상 주의",
      "level": 3
    },
    {
      "type": "paragraph",
      "text": "기본 FTP는 계정 정보와 파일을 암호화하지 않고 전송한다. 암호화가 필요하면 FTPS 또는 SFTP를 사용한다."
    },
    {
      "type": "list",
      "ordered": false,
      "start": 1,
      "depth": 0,
      "items": [
        "FTPS: FTP에 TLS를 적용",
        "SFTP: SSH를 이용한 파일 전송 방식. FTP와는 별개의 프로토콜이지만, 안전한 파일 전송 용도로 쓰임"
      ]
    },
    {
      "type": "paragraph",
      "text": "기억할 점: 능동 모드는 서버가 클라이언트로 접속하고, 수동 모드는 클라이언트가 서버로 접속한다."
    }
  ]
};
