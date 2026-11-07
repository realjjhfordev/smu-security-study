import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "정보보안기사 필기 학습 플랫폼",
    template: "%s | 정보보안기사 필기 학습 플랫폼",
  },
  description: "단원별 개념요약으로 시작하는 정보보안기사 필기 학습. 상명대 캡스톤 프로젝트.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <a className="skip-link" href="#main-content">본문으로 이동</a>
        <header className="site-header">
          <div className="container header-inner">
            <Link className="brand" href="/" aria-label="정보보안기사 필기 학습 플랫폼 홈">
              <span className="brand-symbol" aria-hidden="true">S</span>
              <span>정보보안기사 <span className="brand-sub">학습 플랫폼</span></span>
            </Link>
            <span className="header-label">상명대 캡스톤</span>
          </div>
        </header>
        {children}
        <footer className="site-footer container">
          <span>정보보안기사 필기 학습 플랫폼</span>
          <span>상명대 캡스톤 프로젝트 · 첫 배포</span>
        </footer>
      </body>
    </html>
  );
}
