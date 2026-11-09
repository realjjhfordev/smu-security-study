"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import StudySidebar from "@/components/StudySidebar";

export default function AuthMockup({ mode }: { mode: "login" | "signup" }) {
  const signup = mode === "signup";
  const [complete, setComplete] = useState(false);
  const [error, setError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    if (signup && fields.get("password") !== fields.get("confirmation")) {
      setError("비밀번호가 일치하지 않아요. 다시 확인해 주세요.");
      return;
    }
    setError("");
    form.reset();
    setComplete(true);
  }

  return (
    <main id="main-content" className="workspace">
      <StudySidebar active="회원"/>
      <div className="workspace-body auth-workspace">
        <Link href="/" className="auth-back">← 학습 홈으로</Link>
        <section className="auth-card" aria-labelledby="auth-title">
          <div className="auth-intro">
            <span className="eyebrow">SANGMYUNG SECURITY STUDY</span>
            <h1 id="auth-title">{signup ? "함께 시작하는 보안 학습" : "다시 만나 반가워요"}</h1>
            <p>{signup ? "나만의 학습 여정을 시작해 보세요." : "오늘의 학습을 이어가 볼까요?"}</p>
          </div>
          <nav className="auth-tabs" aria-label="로그인 및 회원가입">
            <Link href="/login" aria-current={!signup ? "page" : undefined}>로그인</Link>
            <Link href="/signup" aria-current={signup ? "page" : undefined}>회원가입</Link>
          </nav>
          <p className="auth-mock-note">화면 체험용 목업입니다. 입력 정보는 전송·저장되지 않아요.</p>
          {complete ? (
            <div className="auth-complete" role="status">
              <span className="auth-complete-icon" aria-hidden="true">✓</span>
              <h2>{signup ? "회원가입 화면 체험 완료" : "로그인 화면 체험 완료"}</h2>
              <p>{signup ? "실제 계정은 생성되지 않았어요." : "실제 로그인은 처리되지 않았어요."}<br/>학습 화면은 게스트로 둘러볼 수 있어요.</p>
              <Link className="primary-button" href={signup ? "/login" : "/"}>{signup ? "로그인 화면으로" : "학습 홈으로"} →</Link>
              <button className="auth-retry" onClick={() => setComplete(false)}>다시 입력하기</button>
            </div>
          ) : (
            <form onSubmit={submit} className="auth-form">
              {signup && <label htmlFor="nickname">닉네임<input id="nickname" name="nickname" required minLength={2} maxLength={20} autoComplete="off" placeholder="닉네임을 입력해 주세요 (2~20자)"/></label>}
              <label htmlFor="email">이메일<input id="email" name="email" type="email" required autoComplete="off" placeholder="example@smu.ac.kr"/></label>
              <label htmlFor="password">비밀번호<input id="password" name="password" type="password" required minLength={signup ? 8 : undefined} autoComplete="off" placeholder={signup ? "8자 이상 입력해 주세요" : "비밀번호를 입력해 주세요"}/></label>
              {signup && <label htmlFor="confirmation">비밀번호 확인<input id="confirmation" name="confirmation" type="password" required minLength={8} autoComplete="off" placeholder="비밀번호를 한 번 더 입력해 주세요" aria-describedby={error ? "password-error" : undefined}/></label>}
              {error && <p id="password-error" className="auth-error" role="alert">{error}</p>}
              <button className="primary-button auth-submit" type="submit">{signup ? "회원가입" : "로그인"}</button>
              <p className="auth-switch">{signup ? "이미 계정이 있으신가요?" : "아직 계정이 없으신가요?"} <Link href={signup ? "/login" : "/signup"}>{signup ? "로그인" : "회원가입"}</Link></p>
            </form>
          )}
        </section>
        <p className="auth-footer-note">한 단원씩, 나의 속도로 꾸준히.</p>
      </div>
    </main>
  );
}
