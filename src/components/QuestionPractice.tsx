"use client";
import {useRef,useState} from 'react';
import {curriculum,sections} from '@/content/curriculum';
import {questions,questionById,relatedLessons,confidences,type QuestionAttempt} from '@/lib/question-bank';
import InlineText from './InlineText';

export default function QuestionPractice({questionId,onQuestion,onLesson,onAttempt,ready}:{questionId:string;onQuestion:(id:string)=>void;onLesson:(id:number)=>void;onAttempt:(attempt:QuestionAttempt)=>void;ready:boolean}) {
 const [part,setPart]=useState(0),[section,setSection]=useState(0),[search,setSearch]=useState('');
 const filtered=questions.filter(q=>(!part||q.partId===part)&&(!section||q.sectionId===section)&&`${q.id} ${q.question} ${q.sectionTitle}`.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()));
 const question=questionById.get(questionId);
 const position=filtered.findIndex(q=>q.id===questionId);
 return <>
  <header className="workspace-heading"><p className="eyebrow">PRACTICE</p><h1>개념을 문제로 확인해 봐</h1><p>선별 기출 {questions.length}문항 · 답과 확신 정도를 고른 뒤 제출하면 해설을 볼 수 있어.</p></header>
  <div className="filters question-filters">
   <label>문제 검색<input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Q001 · 문제 내용 · 단원 이름"/></label>
   <label>PART<select value={part} onChange={e=>{setPart(Number(e.target.value));setSection(0);}}><option value={0}>전체 PART</option>{curriculum.map(p=><option key={p.id} value={p.id}>{p.id}. {p.title}</option>)}</select></label>
   <label>단원<select value={section} onChange={e=>setSection(Number(e.target.value))}><option value={0}>전체 단원</option>{sections.filter(s=>!part||s.part===part).map(s=><option key={s.id} value={s.id}>{String(s.id).padStart(2,'0')}. {s.title}</option>)}</select></label>
  </div>
  <p role="status">검색 결과 {filtered.length}문항{question&&position<0?' · 현재 문제는 검색 조건 밖에 있어. 아래 목록에서 다른 문제를 골라도 돼.':''}</p>
  <label className="question-picker">풀 문제 선택<select value={position<0?'':questionId} onChange={e=>{if(e.target.value)onQuestion(e.target.value);}}><option value="" disabled>목록에서 문제를 골라 줘</option>{filtered.map(q=><option key={q.id} value={q.id}>{q.id} · {q.question.replace(/\s+/g,' ').slice(0,80)}</option>)}</select></label>
  {!filtered.length&&<p className="empty">이 조건에 맞는 등록 문제가 없어. 검색어나 단원을 바꿔 봐. PART 6·7 문제는 아직 등록하지 않았어.</p>}
  {question?<QuestionCard key={question.id} questionId={question.id} ready={ready} onAttempt={onAttempt} onLesson={onLesson}/>:<article className="panel" role="alert"><h2>{questionId} · 미등록 문제</h2><p>이 번호의 문제는 아직 없어. 위 목록에서 등록된 문제를 골라 줘.</p></article>}
  <nav className="lesson-pagination" aria-label="문제 이동"><button disabled={position<=0} onClick={()=>onQuestion(filtered[position-1].id)}>← 이전 문제</button><span>{position<0?'목록 밖':`${position+1} / ${filtered.length}`}</span><button disabled={position<0||position>=filtered.length-1} onClick={()=>onQuestion(filtered[position+1].id)}>다음 문제 →</button></nav>
 </>;
}

function QuestionCard({questionId,onLesson,onAttempt,ready}:{questionId:string;onLesson:(id:number)=>void;onAttempt:(a:QuestionAttempt)=>void;ready:boolean}) {
 const q=questionById.get(questionId)!;
 const [choice,setChoice]=useState<number|null>(null),[confidence,setConfidence]=useState(''),[submitted,setSubmitted]=useState(false);
 const locked=useRef(false);
 const links=relatedLessons(q.id);
 const submit=()=>{
  if(locked.current||choice===null||!confidence||!ready)return;
  locked.current=true;
  onAttempt({id:crypto.randomUUID(),questionId:q.id,choice,confidence,correct:choice===q.answer,date:new Date().toISOString()});
  setSubmitted(true);
 };
 return <article className="panel question-panel">
  <div className="question-meta"><span className="pill">{q.id}</span><span>PART {q.partId} · SECTION {String(q.sectionId).padStart(2,'0')} · {q.sectionTitle}</span></div>
  <h2 className="preserve-lines"><InlineText text={q.question}/></h2>
  <fieldset disabled={submitted}><legend>답 하나를 골라 줘</legend>{q.options.map(o=><label className={`answer-option ${choice===o.number?'chosen':''}`} key={o.number}><input type="radio" name="answer" checked={choice===o.number} onChange={()=>setChoice(o.number)}/><span>{o.number}</span><span className="option-text"><InlineText text={o.text}/></span></label>)}</fieldset>
  <fieldset disabled={submitted}><legend>얼마나 확신해?</legend><div className="actions">{confidences.map(c=><button key={c} aria-pressed={confidence===c} className={confidence===c?'active-chip':''} onClick={()=>setConfidence(c)}>{c}</button>)}</div></fieldset>
  {!submitted?<button className="primary-button" disabled={!ready||choice===null||!confidence} onClick={submit}>답안 제출</button>:<div className="result" role="status"><h3>{choice===q.answer?'정답이야 ✓':'다시 확인해 봐'}</h3><p>내 답: {choice}번 · 정답: {q.answer}번</p><p className="preserve-lines"><InlineText text={q.options.find(o=>o.number===q.answer)!.text}/></p><h4>해설</h4><p className="preserve-lines"><InlineText text={q.explanation}/></p><button onClick={()=>{locked.current=false;setSubmitted(false);setChoice(null);setConfidence('');}}>같은 문제 다시 풀기</button></div>}
  <aside className="question-concepts"><h3>연결된 개념학습</h3>{links.length?links.map(lesson=><button key={lesson!.sectionId} onClick={()=>onLesson(lesson!.sectionId)}>{lesson!.title} →</button>):<p>이 문제 번호가 적힌 개념 단원은 아직 없어.</p>}<small>개념학습에 적힌 관련 기출 번호를 기준으로 연결했어.</small></aside>
 </article>;
}
