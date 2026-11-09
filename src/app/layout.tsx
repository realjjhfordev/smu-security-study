import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
              <Image className="school-signature" src="/brand/sangmyung-signature.jpg" alt="상명대학교 SANGMYUNG UNIVERSITY" width={1000} height={286} unoptimized />
              <span className="brand-divider" aria-hidden="true" />
              <span>정보보안기사 <span className="brand-sub">학습 플랫폼</span></span>
            </Link>
            <nav className="header-auth" aria-label="회원 메뉴"><Link href="/login">로그인</Link><Link className="header-signup" href="/signup">회원가입</Link></nav>
          </div>
        </header>
        {children}
        <footer className="site-footer container">
          <span>정보보안기사 필기 학습 플랫폼</span>
          <span>상명대 캡스톤 프로젝트 · UI 체험판</span>
        </footer>
      </body>
    </html>
  );
}
