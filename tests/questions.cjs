const assert=require('node:assert/strict');
const {questions,questionById,relatedLessons,readAttempts,practiceStats}=require('../.test-build/lib/question-bank');
const {sections}=require('../.test-build/content/curriculum');
const {lessons}=require('../.test-build/content/lessons');
assert.equal(questions.length,527);
assert.equal(questionById.size,527);
assert.deepEqual(questions.map(q=>q.id),Array.from({length:527},(_,i)=>`Q${String(i+1).padStart(3,'0')}`));
assert.deepEqual([1,2,3,4,5,6,7].map(part=>questions.filter(q=>q.partId===part).length),[6,107,43,116,151,104,0]);
for(const q of questions){
 assert.match(q.id,/^Q\d{3}$/);
 assert.equal(q.options.length,4);
 assert.deepEqual(q.options.map(o=>o.number),[1,2,3,4]);
 assert.ok(q.options.every(o=>o.text.trim()));
 assert.ok(q.answer>=1&&q.answer<=4);
 assert.ok(q.question.trim()&&q.explanation.trim());
 assert.ok(sections.some(s=>s.id===q.sectionId&&s.part===q.partId));
 assert.deepEqual(relatedLessons(q.id).map(l=>l.sectionId),[q.sectionId],`${q.id} must link to its section`);
}
for(const lesson of Object.values(lessons)){
 assert.deepEqual(lesson.relatedQuestionIds,questions.filter(q=>q.sectionId===lesson.sectionId).map(q=>q.id));
}
assert.equal(questionById.get('Q117').sectionId,9);
assert.equal(questionById.get('Q424').sectionId,31);
assert.equal(questionById.get('Q527').sectionId,38);
assert.equal(questionById.has('Q999'),false);
const answer=questionById.get('Q001').answer;
const a={id:'first',questionId:'Q001',choice:answer,confidence:'헷갈려요',date:'2026-11-10T00:00:00Z',correct:false};
const b={...a,id:'second',confidence:'확실해요'};
assert.equal(readAttempts(JSON.stringify([a]))[0].correct,true);
assert.deepEqual(readAttempts(JSON.stringify([{q:0},null,{...a,questionId:'Q999'},{...a,choice:0}])),[]);
assert.throws(()=>readAttempts('{broken'));
assert.throws(()=>readAttempts('{}'));
const cleaned=readAttempts(JSON.stringify([a,b]));
assert.equal(practiceStats(cleaned).first.length,1);
assert.deepEqual(practiceStats(cleaned).weak,[]);
assert.deepEqual(practiceStats(cleaned.slice(0,1)).weak,['Q001']);
console.log('PASS: all 527 variant questions, unique IDs, 1-based answers, bidirectional lesson references, storage validation, first/latest statistics');
