import Link from "next/link";
import { sampleUnit } from "@/content/concepts";

export default function HomePage() {
  return (
    <main id="main-content" className="container home-main">
      <section className="hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" />한 단원부터, 차근차근</p>
          <h1 id="home-title">정보보안기사<br />필기 학습 플랫폼</h1>
          <p className="hero-description">복잡한 보안 개념을 하나씩 정리해요.<br />첫 단원에서 학습을 시작해 보세요.</p>
          <Link className="primary-button" href="/learn">학습 시작 <span aria-hidden="true">↗</span></Link>
          <p className="button-note">가입 없이 샘플 단원을 바로 읽을 수 있어요.</p>
        </div>
        <aside className="preview-card" aria-label="첫 학습 단원 미리보기">
          <div className="preview-top"><span className="pill">첫 번째 단원</span><span className="unit-number">01</span></div>
          <p className="preview-category">{sampleUnit.category}</p>
          <h2>{sampleUnit.title}</h2>
          <p className="preview-description">정보를 지키는 세 가지 기준</p>
          <div className="preview-concepts">
            {sampleUnit.concepts.map((concept) => (
              <div className="preview-concept" key={concept.letter}>
                <span className="concept-letter">{concept.letter}</span>
                <div><strong>{concept.name}</strong><span>{concept.english}</span></div>
              </div>
            ))}
          </div>
          <p className="preview-note">개념요약과 일상 속 예시로 이해해요.</p>
        </aside>
      </section>
      <section className="intro-strip" aria-label="학습 안내">
        <span className="intro-icon" aria-hidden="true">01</span>
        <div><h2>오늘은 첫 개념부터</h2><p>기밀성·무결성·가용성의 차이를 살펴보세요.</p></div>
        <span className="sample-label">샘플 단원 제공</span>
      </section>
    </main>
  );
}
