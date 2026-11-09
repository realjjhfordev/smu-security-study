const assert = require('node:assert/strict');
const fs = require('node:fs');
const {sections, curriculum} = require('../.test-build/content/curriculum');
const {lessons} = require('../.test-build/content/lessons');
const {findSections} = require('../.test-build/lib/lesson-search');
assert.equal(sections.length, 42);
assert.equal(Object.keys(lessons).length, 42);
for (const section of sections) {
  const lesson = lessons[section.id];
  assert.equal(lesson.sectionId, section.id);
  assert.equal(lesson.title, `SECTION ${String(section.id).padStart(2, '0')}. ${section.title}`);
  assert.equal(lesson.partTitle, `PART ${section.part}. ${curriculum[section.part-1].title}`);
  assert.ok(lesson.blocks.length > 0);
  assert.equal(new Set(lesson.relatedQuestionIds).size, lesson.relatedQuestionIds.length);
  for (const block of lesson.blocks) {
    if (block.type === 'table') for (const row of block.rows) assert.equal(row.length, block.headers.length, `SECTION ${section.id} table width`);
    if (block.type === 'image') assert.ok(fs.existsSync(`public${block.src}`), block.src);
  }
}
assert.deepEqual(findSections('tcp'), findSections(' TCP '));
assert.deepEqual(findSections('ＴＣＰ'), findSections('tcp'));
assert.ok(findSections('tcp').some(s => s.id === 20));
assert.ok(findSections('DORA').some(s => s.id === 34));
assert.ok(findSections('q519').some(s => s.id === 37));
assert.deepEqual(findSections('SECTION 037').map(s => s.id), [37]);
assert.deepEqual(findSections('37').map(s => s.id), [37]);
assert.equal(findSections('   ').length, 42);
assert.equal(findSections('존재하지않는검색어').length, 0);
assert.equal(findSections('tcp', 5).every(s => s.part === 5), true);
assert.equal(findSections('37', 1).length, 0);
assert.equal(lessons[34].blocks.some(b => b.text?.includes('데이터베이스')), false);
assert.equal(lessons[37].blocks.some(b => b.text?.includes('SET')), false);
assert.deepEqual(lessons[37].blocks.filter(b => b.type === 'heading' && b.level === 3).map(b=>b.text[0]), ['1','2','3']);
assert.equal(lessons[36].blocks.filter(b => b.type === 'heading').length, 3);
console.log('PASS: 42 sections, titles, parts, table widths, image assets, search and editorial regressions');
