import Link from "next/link";
import StudyIcon from "@/components/StudyIcon";

const tabs = ["대시보드", "개념학습", "문제풀이", "복습·분석", "AI 학습", "도전장", "게시판", "회원"];

export default function StudySidebar({ active, onNavigate }: { active: string; onNavigate?: (tab: string) => void }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-title"><span>SM</span><div>SECURITY STUDY<small>정보보안기사 학습 공간</small></div></div>
      <p className="nav-caption">LEARNING MENU</p>
      <nav aria-label="주 메뉴">
        {tabs.map((tab, index) => {
          const content = <><StudyIcon index={index}/>{tab}</>;
          const current = active === tab ? "page" as const : undefined;
          const className = active === tab ? "nav-active" : "";
          if (tab === "회원" || !onNavigate) {
            return <Link key={tab} href={tab === "회원" ? "/login" : `/?view=${encodeURIComponent(tab)}`} aria-current={current} className={className}>{content}</Link>;
          }
          return <button key={tab} onClick={() => onNavigate(tab)} aria-current={current} className={className}>{content}</button>;
        })}
      </nav>
      <div className="sidebar-note"><span className="sidebar-star" aria-hidden="true">✦</span><strong>나의 속도로, 꾸준히</strong><p>개념을 이해하고<br/>문제로 확인해 보세요.</p><span className="pill">7 PART · 42 SECTION</span></div>
    </aside>
  );
}
