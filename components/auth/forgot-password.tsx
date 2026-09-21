"use client";

import { useTheme } from "@/contexts/theme-context";
import Link from "next/link";
import React, { useState } from "react";
import { ArrowRight, ArrowLeft, KeyRound } from "lucide-react";
import AuthLayout from "../_layouts/auth_layouts";
import ResetPasswordModal from "../modals/auth/reset-password-modal";

export default function ForgotPasswordComp() {
  const { colors } = useTheme();

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatusMessage(null);
    setIsLoading(true);

    // Simulate sending OTP request
    setTimeout(() => {
      setIsLoading(false);
      setIsResetModalOpen(true);
    }, 1000);
  };

  const dynamicTitle = (
    <>
      Account Recovery <br />
      <span style={{ color: colors.text }}>Regain Access.</span>
    </>
  );

  const inputClassName =
    "w-full px-4 py-3 rounded-lg text-[0.95rem] outline-none border transition-colors [&:-webkit-autofill]:[transition:background-color_999999s_ease-in-out_0s]";

  const labelClassName = "block text-[0.85rem] font-semibold mb-1.5";

  const inputDynamicStyle: React.CSSProperties = {
    backgroundColor: colors.bg,
    color: colors.text,
    WebkitTextFillColor: colors.text,
    WebkitBoxShadow: `0 0 0px 1000px ${colors.bg} inset`,
    borderColor: `${colors.text}25`,
  };

  return (
    <AuthLayout title={dynamicTitle}>
      {/* Header */}
      <div className="mt-12 mb-6">
        <div className="flex justify-between items-start gap-4 mb-2 flex-wrap">
          <div>
            <h2 className="text-2xl font-extrabold m-0 tracking-tight leading-tight">
              Forgot Password?
            </h2>
            <p
              className="text-xs font-semibold mt-1 uppercase tracking-wider flex items-center gap-1.5"
              style={{ color: colors.primary ?? "#A3E635" }}
            >
              <KeyRound size={14} />
              Security Verification
            </p>
          </div>
        </div>

        <p className="text-sm opacity-70 m-0 leading-relaxed">
          No worries! Enter your registered account email and we'll send a
          6-digit OTP code to reset your password.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className={labelClassName} style={{ color: colors.text }}>
            Email Address
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ada@lovelace.com"
            className={inputClassName}
            style={inputDynamicStyle}
          />
        </div>

        {statusMessage && (
          <p className="text-xs mb-4 text-center text-red-500">
            {statusMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={isLoading || !email}
          className="w-full p-3.5 rounded-lg bg-[#A3E635] text-black font-bold text-[0.95rem] border-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 flex justify-center items-center gap-2 hover:enabled:opacity-90 transition-opacity"
        >
          {isLoading ? (
            "Sending OTP..."
          ) : (
            <>
              Send Reset Code <ArrowRight size={16} strokeWidth={2.5} />
            </>
          )}
        </button>
      </form>

      {/* Back to Login */}
      <div className="mt-6 text-center text-sm opacity-85">
        <Link
          href="/auth/login"
          className="inline-flex items-center gap-2 font-bold underline hover:opacity-100 transition-opacity"
          style={{ color: colors.text }}
        >
          <ArrowLeft size={16} /> Back to Sign In
        </Link>
      </div>

      {/* Reset Password Modal */}
      <ResetPasswordModal
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
        email={email}
        onResetPassword={async (otp, newPassword) => {
          await new Promise((resolve) => setTimeout(resolve, 1200));
          if (otp !== "123456") {
            throw new Error("Invalid OTP code. (Use 123456 for demo)");
          }
        }}
      />
    </AuthLayout>
  );
}
