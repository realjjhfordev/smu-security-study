import Link from "next/link";

export default function NotFound() {
  return <main id="main-content" className="container learn-main"><p className="eyebrow">404</p><h1>페이지를 찾을 수 없어요.</h1><p className="lesson-description">주소를 확인하거나 홈에서 학습을 시작해 주세요.</p><Link className="primary-button" href="/">홈으로 이동 <span aria-hidden="true">↗</span></Link></main>;
}
