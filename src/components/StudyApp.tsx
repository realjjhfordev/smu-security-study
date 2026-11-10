"use client";
import {useEffect,useState} from 'react';
import StudyIcon from '@/components/StudyIcon';
import StudySidebar from '@/components/StudySidebar';
import {curriculum,sections} from '@/content/curriculum';
import {lessons} from '@/content/lessons';
import {findSections} from '@/lib/lesson-search';
import LessonContent from '@/components/LessonContent';
import QuestionPractice from '@/components/QuestionPractice';
import {questions,questionById,practiceStats,practiceStorageKey,readAttempts,type QuestionAttempt} from '@/lib/question-bank';
type Attempt={id:string;q:number;choice:number;confidence:string;correct:boolean;date:string};
type Post={id:string;author:string;title:string;body:string;comments:string[]};
type Challenge={id:string;name:string;done:boolean};
type Data={name:string;attempts:Attempt[];completed:number[];posts:Post[];challenges:Challenge[]};
const initial:Data={name:'',attempts:[],completed:[],posts:[],challenges:[]};
// Prototype storage boundary: replace these calls with authenticated server APIs.
export default function StudyApp({initialTab="대시보드"}:{initialTab?:string}){
 const [data,setData]=useState<Data>(initial),[ready,setReady]=useState(false),[error,setError]=useState('');
 const [tab,setTabState]=useState(initialTab),[section,setSectionState]=useState(1),[search,setSearchState]=useState(''),[part,setPartState]=useState(0);
 const [questionId,setQuestionId]=useState('Q001'),[attempts,setAttempts]=useState<QuestionAttempt[]>([]),[attemptsReady,setAttemptsReady]=useState(false),[storageWritable,setStorageWritable]=useState(true);
 const [title,setTitle]=useState(''),[body,setBody]=useState(''),[comment,setComment]=useState<Record<string,string>>({}),[opponent,setOpponent]=useState(''),[ai,setAi]=useState(false);
 const updateUrl=(changes:Record<string,string>,replace=false)=>{
  const url=new URL(window.location.href);
  for(const [key,value] of Object.entries(changes)){if(value)url.searchParams.set(key,value);else url.searchParams.delete(key);}
  if('section' in changes||'view' in changes)url.hash='';
  if(url.href!==window.location.href)window.history[replace?'replaceState':'pushState'](null,'',url);
 };
 const setTab=(next:string)=>{setTabState(next);updateUrl({view:next});};
 const setSection=(next:number)=>{setSectionState(next);updateUrl({view:'개념학습',section:String(next)});};
 const setSearch=(next:string)=>{setSearchState(next);updateUrl({q:next},true);};
 const setPart=(next:number)=>{setPartState(next);updateUrl({part:next?String(next):''},true);};
 const openSection=(next:number)=>{
  setSection(next);
  requestAnimationFrame(()=>document.getElementById('lesson-detail')?.focus());
 };
 useEffect(()=>{
  const restore=()=>{
   const params=new URLSearchParams(window.location.search),view=params.get('view');
   setTabState(view&&['대시보드','개념학습','문제풀이','복습·분석','AI 학습','도전장','게시판'].includes(view)?view:initialTab);
   const requested=Number(params.get('section')),selectedPart=Number(params.get('part'));
   setSectionState(sections.some(s=>s.id===requested)?requested:1);
   setPartState(curriculum.some(p=>p.id===selectedPart)?selectedPart:0);
   setSearchState(params.get('q')??'');
   setQuestionId(params.get('question') || 'Q001');
  };
  restore();window.addEventListener('popstate',restore);
  return ()=>window.removeEventListener('popstate',restore);
 },[initialTab]);
 const visibleSections=findSections(search,part);

 useEffect(()=>{try{const raw=localStorage.getItem('smu-ui-v1');if(raw){const parsed=JSON.parse(raw);if(Array.isArray(parsed.attempts)&&Array.isArray(parsed.completed)&&Array.isArray(parsed.posts)&&Array.isArray(parsed.challenges)&&typeof parsed.name==='string')setData(parsed);}}catch{setError('저장된 기록을 읽지 못했어요. 새 기록으로 시작합니다.');}setReady(true);},[]);
 useEffect(()=>{if(ready)try{localStorage.setItem('smu-ui-v1',JSON.stringify(data));}catch{setError('이 브라우저에 기록을 저장할 수 없어요.');}},[data,ready]);
 useEffect(()=>{try{setAttempts(readAttempts(localStorage.getItem(practiceStorageKey)));}catch{setStorageWritable(false);setError('문제풀이 기록을 읽지 못했어. 기존 기록은 덮어쓰지 않고 이번 풀이만 임시로 보여줄게.');}setAttemptsReady(true);},[]);
 useEffect(()=>{if(attemptsReady&&storageWritable)try{localStorage.setItem(practiceStorageKey,JSON.stringify(attempts));}catch{setError('문제풀이 기록을 저장하지 못했어. 이 화면을 나가면 새 기록이 사라질 수 있어.');}},[attempts,attemptsReady,storageWritable]);
 const {first,weak}=practiceStats(attempts);
 const rate=first.length?Math.round(first.filter(a=>a.correct).length/first.length*100):0;
 const start=(id='Q001')=>{setQuestionId(id);setTabState('문제풀이');updateUrl({view:'문제풀이',question:id});};
 const openConcept=(id:number)=>{setTabState('개념학습');setSectionState(id);setSearchState('');setPartState(0);updateUrl({view:'개념학습',section:String(id),q:'',part:''});requestAnimationFrame(()=>document.getElementById('lesson-detail')?.focus());};
 const heading=(kicker:string,h:string,desc:string)=><header className="workspace-heading"><p className="eyebrow">{kicker}</p><h1>{h}</h1><p>{desc}</p></header>;
 return <main id="main-content" className="workspace"><StudySidebar active={tab} onNavigate={next=>{setTab(next);setAi(false);}}/><div className="workspace-body"><div className="demo-banner"><span>학습 체험판 · 선별 기출 209문항</span><span>{data.name?`${data.name}님`:'게스트 학습'} · {ready?'이 브라우저에 기록 저장':'불러오는 중'}</span></div>{error&&<p role="alert">{error}</p>}
 {tab==='대시보드'&&<>{heading('YOUR LEARNING SPACE',`${data.name||'학습자'}님, 오늘도 한 걸음씩.`, '개념을 읽고, 문제를 풀고, 헷갈린 내용을 다시 확인하세요.')}<section className="study-hero" aria-label="수뭉이와 함께하는 학습 시작"><div className="study-hero-copy"><span className="pill">오늘의 시작 · SECTION 01</span><h2>정보보호의 기본을<br/>단단하게 쌓아보세요.</h2><p>기밀성 · 무결성 · 가용성부터 시작하는 학습</p><button className="primary-button" onClick={()=>{setSection(1);setTab('개념학습');}}>개념학습 시작 ↗</button></div><span className="mascot-caption">수뭉이와 함께하는 오늘의 학습</span></section><div className="stat-grid"><article><div className="stat-label"><small>학습 완료 단원</small><StudyIcon index={1}/></div><strong>{data.completed.length}<em> / 42</em></strong></article><article><div className="stat-label"><small>누적 풀이</small><StudyIcon index={2}/></div><strong>{attempts.length}<em> 회</em></strong></article><article><div className="stat-label"><small>첫 풀이 정답률</small><StudyIcon index={3}/></div><strong>{first.length?`${rate}%`:'—'}</strong></article><article><div className="stat-label"><small>복습 대상 문제</small><StudyIcon index={4}/></div><strong>{weak.length}<em> 개</em></strong></article></div><div className="dashboard-section-title"><h2>오늘의 학습 흐름</h2><span>이해하고, 풀고, 다시 확인하기</span></div><div className="two-col"><article className="panel dashboard-card"><span className="pill">LEARN → PRACTICE</span><h2>배운 내용을 확인할 시간</h2><p>선별 기출 209문항을 풀고 연결된 개념을 확인해 봐.</p><button onClick={()=>start()}>문제 풀기 →</button></article><article className="panel dashboard-card"><span className="pill">REVIEW</span><h2>헷갈려도 괜찮아요</h2><p>오답과 확신이 없었던 문제를 모아 다시 풀어요.</p><button onClick={()=>setTab('복습·분석')}>복습 기록 보기 →</button></article></div></>}
 {tab==='개념학습'&&<>{heading('CURRICULUM','단원별 개념학습','확정된 7개 PART · 42개 SECTION입니다. 전체 42개 SECTION의 개념요약이 등록되어 있습니다.')}<div className="filters"><label>단원 검색<input value={search} onChange={e=>setSearch(e.target.value)} placeholder="제목·본문·SECTION 번호·기출 번호 검색"/></label><label>PART<select value={part} onChange={e=>setPart(Number(e.target.value))}><option value={0}>전체 PART</option>{curriculum.map(p=><option key={p.id} value={p.id}>{String(p.id).padStart(2,'0')} {p.title}</option>)}</select></label></div><p className="search-status" role="status">{visibleSections.length}개 단원{!visibleSections.some(s=>s.id===section)&&' · 현재 본문은 검색 결과에 포함되지 않습니다.'}</p><div className="lesson-workspace"><div className="section-list">{curriculum.filter(p=>visibleSections.some(s=>s.part===p.id)).map(p=><section key={p.id}><h2>PART {String(p.id).padStart(2,'0')} {p.title}</h2>{visibleSections.filter(s=>s.part===p.id).map(s=><button className={section===s.id?'selected-section':''} key={s.id} aria-current={section===s.id?'true':undefined} onClick={()=>openSection(s.id)}><small>SECTION {String(s.id).padStart(2,'0')}</small>{s.title}<span>{data.completed.includes(s.id)?'완료':lessons[s.id]?'학습 가능':'준비 중'}</span></button>)}</section>)}{!visibleSections.length&&<div className="search-empty"><p>검색 결과가 없습니다. 검색어나 PART를 바꿔보세요.</p><button onClick={()=>{setSearch('');setPart(0);}}>검색 조건 초기화</button></div>}</div><article id="lesson-detail" tabIndex={-1} className="panel lesson-detail" aria-label="선택한 단원 본문">{lessons[section]?<><LessonContent key={section} lesson={lessons[section]!} onQuestion={start}/><nav className="lesson-pagination" aria-label="단원 이동"><button disabled={section===1} onClick={()=>openSection(section-1)}>← 이전 단원</button><span>{section} / {sections.length}</span><button disabled={section===sections.length} onClick={()=>openSection(section+1)}>다음 단원 →</button></nav><div className="lesson-completion"><button aria-pressed={data.completed.includes(section)} onClick={()=>setData(d=>({...d,completed:d.completed.includes(section)?d.completed.filter(n=>n!==section):[...d.completed,section]}))}>{data.completed.includes(section)?'학습 완료 취소':'학습 완료 표시'}</button></div></>:<><span className="pill">SECTION {String(section).padStart(2,'0')}</span><h2>{sections[section-1].title}</h2><p className="empty">요약 콘텐츠 준비 중입니다. 단원 분류는 확정되었으며, 작성된 개념요약을 이 위치에 연결합니다.</p></>}</article></div></>}
 {tab==='문제풀이'&&<QuestionPractice questionId={questionId} onQuestion={start} onLesson={openConcept} onAttempt={a=>setAttempts(current=>[...current,a])} ready={attemptsReady}/>}
 {tab==='복습·분석'&&<>{heading('REVIEW & INSIGHT','헷갈린 문제를 다시 확인해 봐','첫 풀이로 정답률을 계산해. 복습 대상은 마지막 풀이가 오답이거나 확신이 없었던 문제야.')}<p>기록은 이 브라우저에만 저장돼. 예전 샘플 3문항 기록은 이번 기출 통계에 섞지 않았어.</p><div className="stat-grid"><article><small>첫 풀이 정답률</small><strong>{first.length?`${rate}%`:'—'}</strong></article><article><small>풀이한 문제</small><strong>{first.length} / {questions.length}</strong></article><article><small>복습 대상</small><strong>{weak.length}</strong></article></div><article className="panel"><h2>복습할 문제</h2>{weak.length?weak.map(id=><div className="list-row" key={id}><span>{id} · {questionById.get(id)!.question}</span><button onClick={()=>start(id)}>다시 풀기</button></div>):<p className="empty">복습할 문제가 없어. 틀리거나 헷갈렸던 문제는 여기 모아 줄게.</p>}</article><article className="panel"><h2>최근 제출 기록</h2>{attempts.length?attempts.slice().reverse().slice(0,10).map(a=><div className="list-row" key={a.id}><span>{a.questionId} · {a.correct?'정답':'오답'} · {a.confidence}</span><button onClick={()=>start(a.questionId)}>문제 보기</button><small>{new Date(a.date).toLocaleString('ko-KR')}</small></div>):<p>아직 제출한 답안이 없어.</p>}</article></>}
 {tab==='AI 학습'&&<>{heading('LEARNING ASSISTANT','이해가 될 때까지, 한 번 더.','AI 연동 전의 고정 샘플입니다. 실제 모델 응답이나 생성 결과가 아닙니다.')}<article className="panel"><h2>보안의 3요소 · 추가 설명</h2><p>비슷해 보이는 개념을 일상 속 예시로 구분해 보세요.</p><button onClick={()=>setAi(true)}>샘플 추가 설명 보기</button>{ai&&<div className="result"><p>기밀성은 성적표를 볼 수 있는 사람을 제한하는 것, 무결성은 성적이 무단으로 바뀌지 않게 하는 것, 가용성은 필요할 때 성적표를 열 수 있게 하는 것입니다.</p><p>접근 · 변경 · 이용 중 무엇을 보호하는 상황인지 먼저 구분해 보세요.</p><button onClick={()=>start()}>등록된 기출 풀기 →</button></div>}</article></>}
 {tab==='도전장'&&<>{heading('CHALLENGE','함께 풀면, 조금 더 즐겁게.','로컬 도전장 UI 샘플입니다. 상대에게 전송되거나 두 계정의 기록이 연결되지는 않습니다.')}<form className="panel" onSubmit={e=>{e.preventDefault();if(!opponent.trim())return;setData(d=>({...d,challenges:[{id:crypto.randomUUID(),name:opponent.trim(),done:false},...d.challenges]}));setOpponent('');}}><h2>1:1 도전장 만들기</h2><label>상대 닉네임<input required maxLength={30} value={opponent} onChange={e=>setOpponent(e.target.value)} placeholder="닉네임 입력"/></label><p>선별 기출 풀이 체험 · 실제 대결 기능은 준비 중</p><button className="primary-button">샘플 도전장 만들기</button></form>{data.challenges.map(c=><article className="panel list-row" key={c.id}><div><h3>{c.name}님에게 도전</h3><p>{c.done?'수락 상태 체험 완료':'수락 대기 · 로컬 샘플'}</p></div><button onClick={()=>{setData(d=>({...d,challenges:d.challenges.map(x=>x.id===c.id?{...x,done:true}:x)}));start();}}>수락 후 풀이 체험</button></article>)}</>}
 {tab==='게시판'&&<>{heading('COMMUNITY','궁금한 점을 함께 나눠요.','게시글과 댓글은 현재 브라우저에만 저장되는 UI 샘플입니다.')}<form className="panel" onSubmit={e=>{e.preventDefault();if(!title.trim()||!body.trim())return;setData(d=>({...d,posts:[{id:crypto.randomUUID(),author:d.name||'게스트',title:title.trim(),body:body.trim(),comments:[]},...d.posts]}));setTitle('');setBody('');}}><h2>질문 남기기</h2><label>제목<input required maxLength={100} value={title} onChange={e=>setTitle(e.target.value)}/></label><label>내용<textarea required maxLength={3000} value={body} onChange={e=>setBody(e.target.value)}/></label><button className="primary-button">등록</button></form>{data.posts.length?data.posts.map(post=><article className="panel" key={post.id}><small>{post.author} · 질문</small><h2>{post.title}</h2><p className="preserve-lines">{post.body}</p><h3>댓글 {post.comments.length}</h3>{post.comments.map((c,i)=><p className="comment" key={i}>{c}</p>)}<form className="actions" onSubmit={e=>{e.preventDefault();const c=comment[post.id]?.trim();if(!c)return;setData(d=>({...d,posts:d.posts.map(p=>p.id===post.id?{...p,comments:[...p.comments,`${d.name||'게스트'}: ${c}`]}:p)}));setComment({...comment,[post.id]:''});}}><input aria-label="댓글 내용" required maxLength={1000} value={comment[post.id]||''} onChange={e=>setComment({...comment,[post.id]:e.target.value})} placeholder="댓글을 입력하세요"/><button>댓글 등록</button></form></article>):<p className="empty">첫 질문을 남겨보세요.</p>}</>}

 </div></main>;
}
