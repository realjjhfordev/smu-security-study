from pathlib import Path
import re
root=Path(__file__).resolve().parents[3]
files=[root/'마일스톤.md']+list((root/'docs/capstone').rglob('*.md'))
errors=[]
for p in files:
    text=p.read_text(encoding='utf-8')
    for target in re.findall(r'\[[^\]]*\]\(([^)]+)\)',text):
        if '://' in target or target.startswith('#'): continue
        target=target.split('#')[0]
        if not (p.parent/target).resolve().is_file(): errors.append(f'{p}: broken link {target}')
req=list((root/'docs/capstone/requirements').glob('*/*.md'))
if len(req)!=28: errors.append(f'expected 28 requirements, found {len(req)}')
tests=list((root/'docs/capstone/tests').glob('AT-*.md'))
if len(tests)!=20: errors.append(f'expected 20 tests, found {len(tests)}')
for p in req:
    text=p.read_text(encoding='utf-8')
    for name in ['시작 조건','입력','처리 흐름','출력과 저장','예외 처리','수용 기준']:
        if f'## {name}' not in text: errors.append(f'{p}: missing {name}')
if errors:
    raise SystemExit('\n'.join(errors))
print(f'OK: {len(req)} requirements, {len(tests)} tests, relative links checked')
