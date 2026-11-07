import type { Metadata } from "next";
import Link from "next/link";
import { sampleUnit } from "@/content/concepts";

export const metadata: Metadata = { title: "보안의 3요소 · 개념학습" };

export default function LearnPage() {
  return (
    <main id="main-content" className="container learn-main">
      <Link className="back-link" href="/">← 홈으로</Link>
      <header className="lesson-header">
        <p className="eyebrow">개념학습 <span className="eyebrow-divider">/</span> {sampleUnit.category}</p>
        <div className="lesson-title-row"><h1>{sampleUnit.title}</h1><span className="pill">샘플 단원 01</span></div>
        <p className="lesson-description">{sampleUnit.introduction}</p>
      </header>
      <section className="concept-grid" aria-label="기밀성, 무결성, 가용성 요약">
        {sampleUnit.concepts.map((concept, index) => (
          <article className="concept-card" key={concept.letter} aria-labelledby={`concept-${concept.letter}`}>
            <div className="concept-card-top"><span className="large-letter" aria-hidden="true">{concept.letter}</span><span className="card-index">0{index + 1}</span></div>
            <h2 id={`concept-${concept.letter}`}>{concept.name}</h2>
            <p className="english-name" lang="en">{concept.english}</p>
            <p className="definition">{concept.description}</p>
            <div className="example"><h3>예를 들면</h3><p>{concept.example}</p></div>
            <p className="keyword">{concept.keyword}</p>
          </article>
        ))}
      </section>
      <aside className="remember-box"><span className="remember-mark" aria-hidden="true">✓</span><div><h2>이렇게 기억해요</h2><p><strong>기밀성은 접근</strong>, <strong>무결성은 변경</strong>, <strong>가용성은 이용</strong>에 초점을 맞춰 구분해 보세요.</p></div></aside>
      <div className="lesson-bottom"><p>첫 번째 샘플 단원을 살펴봤어요.</p><Link className="secondary-button" href="/">홈으로 돌아가기 <span aria-hidden="true">↗</span></Link></div>
    </main>
  );
}
