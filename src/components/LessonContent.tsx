import type { Lesson } from "@/content/lessons/types";
import { useEffect } from "react";

import InlineText from './InlineText';
import {questionById} from '@/lib/question-bank';

export default function LessonContent({ lesson, onQuestion }: { lesson: Lesson; onQuestion?: (id:string)=>void }) {
  const headingId = (index: number) => `section-${lesson.sectionId}-heading-${index}`;
  useEffect(() => {
    const target = document.getElementById(window.location.hash.slice(1));
    if (target) target.scrollIntoView();
  }, [lesson.sectionId]);
  return (
    <>
      <header className="lesson-source-header">
        <p>{lesson.partTitle}</p>
        <h2>{lesson.title}</h2>
      </header>
      {lesson.relatedQuestionIds.length > 0 && <aside className="lesson-related" aria-label="관련 기출문제">
        <h3>관련 기출문제</h3>
        <ul>{lesson.relatedQuestionIds.map(id => <li key={id}>{questionById.has(id) ? <a href={`/?view=문제풀이&question=${id}`} onClick={e=>{if(onQuestion && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey){e.preventDefault();onQuestion(id);}}}>{id} 풀기 →</a> : <span>{id} · 미등록</span>}</li>)}</ul>
        <p>선별해서 등록한 문제만 풀 수 있어. 미등록 번호는 아직 문제를 넣지 않은 상태야.</p>
      </aside>}
      {lesson.blocks.some(block => block.type === "heading") && <nav className="lesson-toc" aria-label="본문 목차">
        <h3>본문 목차</h3>
        <ul>{lesson.blocks.map((block, index) => block.type === "heading" &&
          <li key={index} className={block.level === 4 ? "toc-subheading" : undefined}>
            <a href={`#${headingId(index)}`}><InlineText text={block.text}/></a>
          </li>)}</ul>
      </nav>}
      <div className="lesson-prose">
        {lesson.blocks.map((block, index) => {
          if (block.type === "heading") return block.level === 4
            ? <h4 id={headingId(index)} tabIndex={-1} key={index}><InlineText text={block.text}/></h4>
            : <h3 id={headingId(index)} tabIndex={-1} key={index}><InlineText text={block.text}/></h3>;
          if (block.type === "paragraph") return <p key={index}>{block.strong ? <strong><InlineText text={block.text}/></strong> : <InlineText text={block.text}/>}</p>;
          if (block.type === "code") return <pre className="lesson-code" key={index}><code>{block.text}</code></pre>;
          if (block.type === "quote") return <blockquote key={index}><InlineText text={block.text}/></blockquote>;
          if (block.type === "image") return <figure className="lesson-image" key={index}>
            {/* Keep the uploaded instructional diagram at its original resolution. */}
            <img src={block.src} alt={block.alt} width={1234} height={810} loading="lazy"/>
            <figcaption>{block.alt}</figcaption>
          </figure>;
          if (block.type === "list") {
            const items = block.items.map((item, i) => <li key={i}><InlineText text={item}/></li>);
            const style = { marginLeft: `${Math.min(block.depth ?? 0, 3) * 16}px` };
            return block.ordered ? <ol key={index} start={block.start ?? 1} style={style}>{items}</ol>
              : <ul key={index} style={style}>{items}</ul>;
          }
          return (
            <div className="lesson-table-scroll" key={index} tabIndex={0} role="region" aria-label={`${lesson.title} · ${block.headers.join(' / ')} 표`}>
              <table>
                <thead><tr>{block.headers.map((header, i) => <th scope="col" key={i}><InlineText text={header}/></th>)}</tr></thead>
                <tbody>{block.rows.map((row, r) => <tr key={r}>{row.map((cell, c) => c === 0
                  ? <th scope="row" key={c}><InlineText text={cell}/></th>
                  : <td key={c} style={{ whiteSpace: "pre-line" }}><InlineText text={cell}/></td>)}</tr>)}</tbody>
              </table>
            </div>
          );
        })}
      </div>
    </>
  );
}
