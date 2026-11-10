const assert=require('node:assert/strict');
const {questions,questionById,relatedLessons,readAttempts,practiceStats}=require('../.test-build/lib/question-bank');
const {sections}=require('../.test-build/content/curriculum');
assert.equal(questions.length,209);
assert.equal(questionById.size,209);
for(const q of questions){
 assert.match(q.id,/^Q\d{3}$/);
 assert.equal(q.options.length,4);
 assert.deepEqual(q.options.map(o=>o.number),[1,2,3,4]);
 assert.ok(q.options.every(o=>o.text.trim()));
 assert.ok(q.answer>=1&&q.answer<=4);
 assert.ok(q.question.trim()&&q.explanation.trim());
 assert.ok(sections.some(s=>s.id===q.sectionId&&s.part===q.partId));
 assert.ok(relatedLessons(q.id).length,`${q.id} must link by existing lesson references`);
}
assert.equal(questionById.has('Q002'),false);
assert.equal(questionById.has('Q999'),false);
// Source Q117 belongs to section 8; the existing lesson explicitly links it in section 9.
assert.equal(questionById.get('Q117').sectionId,8);
assert.deepEqual(relatedLessons('Q117').map(l=>l.sectionId),[9]);
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
console.log('PASS: all 209 questions, unique IDs, 1-based answers, bidirectional lesson references, storage validation, first/latest statistics');
