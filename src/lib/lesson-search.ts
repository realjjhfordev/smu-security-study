import { sections } from '../content/curriculum';
import { lessons } from '../content/lessons';

export const normalizeSearch = (value: string) => value.normalize('NFKC').toLocaleLowerCase().replace(/\s+/g, ' ').trim();

// Include visible text only, excluding internal block types and image paths.
const searchIndex = new Map(sections.map(section => {
  const lesson = lessons[section.id];
  const content = lesson?.blocks.flatMap(block => {
    if ('text' in block) return [block.text];
    if (block.type === 'list') return block.items;
    if (block.type === 'table') return [...block.headers, ...block.rows.flat()];
    return [block.alt];
  }) ?? [];
  return [section.id, normalizeSearch([
    section.title, `SECTION ${String(section.id).padStart(2, '0')}`,
    lesson?.partTitle ?? '', ...(lesson?.relatedQuestionIds ?? []), ...content,
  ].join(' '))];
}));

export function findSections(query: string, part = 0) {
  const normalized = normalizeSearch(query);
  const number = normalized.match(/^(?:section\s*)?0*(\d+)$/)?.[1];
  const terms = normalized.split(' ').filter(Boolean);
  return sections.filter(section => (!part || section.part === part) &&
    (number ? section.id === Number(number) : terms.every(term => searchIndex.get(section.id)!.includes(term))));
}
