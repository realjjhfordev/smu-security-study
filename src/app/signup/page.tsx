import type { Metadata } from "next";
import AuthMockup from "@/components/AuthMockup";
export const metadata: Metadata = { title: "회원가입" };
export default function SignupPage() { return <AuthMockup key="signup" mode="signup"/>; }
