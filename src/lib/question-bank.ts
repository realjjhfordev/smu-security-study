import {questions} from '../content/questions';
import {lessons} from '../content/lessons';
export {questions};
export const questionById = new Map(questions.map(q=>[q.id,q]));
export function relatedLessons(id:string) {
  return Object.values(lessons).filter(lesson=>lesson?.relatedQuestionIds.includes(id));
}
export type QuestionAttempt = {id:string;questionId:string;choice:number;confidence:string;correct:boolean;date:string};
export const confidences = ['확실해요','헷갈려요','모르겠어요'];
export const practiceStorageKey = 'smu-question-attempts-v1';
export function readAttempts(raw:string|null):QuestionAttempt[] {
  if(!raw)return [];
  const parsed:unknown=JSON.parse(raw);
  if(!Array.isArray(parsed))throw new Error('Invalid attempt storage');
  return parsed.filter((a):a is QuestionAttempt=>{
    if(!a || typeof a!=='object')return false;
    const q=questionById.get(a.questionId);
    return !!q && typeof a.id==='string' && Number.isInteger(a.choice) && a.choice>=1 && a.choice<=4 && confidences.includes(a.confidence) && typeof a.date==='string' && Number.isFinite(Date.parse(a.date));
  }).map(a=>({...a,correct:questionById.get(a.questionId)!.answer===a.choice}));
}
export function practiceStats(attempts:QuestionAttempt[]) {
  const first = new Map<string,QuestionAttempt>(),latest=new Map<string,QuestionAttempt>();
  for(const a of attempts){if(!first.has(a.questionId))first.set(a.questionId,a);latest.set(a.questionId,a);}
  return {first:[...first.values()],weak:[...latest.values()].filter(a=>!a.correct||a.confidence!=='확실해요').map(a=>a.questionId)};
}
