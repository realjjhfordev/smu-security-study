import type { Metadata } from "next";
import AuthMockup from "@/components/AuthMockup";
export const metadata: Metadata = { title: "로그인" };
export default function LoginPage() { return <AuthMockup key="login" mode="login"/>; }
