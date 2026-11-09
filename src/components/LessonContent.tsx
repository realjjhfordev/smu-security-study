import type { Lesson } from "@/content/lessons/types";

// Only bold, emphasis, and inline code are recognized; source text is never treated as HTML.
function InlineText({ text }: { text: string }) {
  return <>{text.split(/(\*\*[\s\S]+?\*\*|\*[^*\n]+\*|`[^`]+`)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> :
    part.startsWith("*") && part.endsWith("*") ? <em key={i}>{part.slice(1, -1)}</em> :
    part.startsWith("`") && part.endsWith("`") ? <code key={i}>{part.slice(1, -1)}</code> : part
  )}</>;
}

export default function LessonContent({ lesson }: { lesson: Lesson }) {
  return (
    <>
      <header className="lesson-source-header">
        <p>{lesson.partTitle}</p>
        <h2>{lesson.title}</h2>
      </header>
      {lesson.relatedQuestionIds.length > 0 && <aside className="lesson-related" aria-label="관련 기출문제">
        <h3>연결 기출 {lesson.relatedQuestionIds[0]}–{lesson.relatedQuestionIds[lesson.relatedQuestionIds.length - 1]}</h3>
        <ul>{lesson.relatedQuestionIds.map(id => <li key={id}>{id}</li>)}</ul>
        <p>관련 기출 문항번호입니다. 문제 데이터 등록 후 풀이 화면에 연결됩니다.</p>
      </aside>}
      <div className="lesson-prose">
        {lesson.blocks.map((block, index) => {
          if (block.type === "heading") return block.level === 4
            ? <h4 key={index}><InlineText text={block.text}/></h4>
            : <h3 key={index}><InlineText text={block.text}/></h3>;
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
