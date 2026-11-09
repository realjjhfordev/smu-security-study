# PART 5·6·7 추가 패치

PART 4 패치까지 적용한 C:\smu-security-study 기준입니다. SECTION 19~42를 추가하여 전체 42개 단원이 학습 가능해집니다.

ZIP을 프로젝트 폴더에 저장한 후 PowerShell에서 실행합니다.

```powershell
cd C:\smu-security-study
Expand-Archive .\parts-05-07-update.zip -DestinationPath .\parts-05-07-update -Force
git apply --check .\parts-05-07-update\parts-05-07-content.patch
git apply .\parts-05-07-update\parts-05-07-content.patch
```

--check에서 오류가 없으면 다음 apply를 실행합니다. 오류가 나면 강제로 적용하지 말고 오류 메시지를 보내주세요. 개발 서버가 실행 중이면 새로고침합니다. 꺼져 있으면 npm run dev로 실행합니다.

CHANGES.md에 수정 내역, reviewed-content.md에 정리한 학습 원고가 있습니다. PART 7 기출은 원자료에 ID가 없어 아직 연결하지 않았습니다. 실제 문제 본문을 등록한 패치가 아닙니다.

되돌리기(패치 적용 부분을 추가 수정하지 않았을 때):

```powershell
git apply --reverse --check .\parts-05-07-update\parts-05-07-content.patch
git apply --reverse .\parts-05-07-update\parts-05-07-content.patch
```
