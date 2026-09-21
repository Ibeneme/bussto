"use client";

import { useTheme } from "@/contexts/theme-context";
import Link from "next/link";
import React, { useState } from "react";
import { ArrowRight, Lock, ShieldCheck } from "lucide-react";
import AuthLayout from "../_layouts/auth_layouts";
import OtpVerificationModal from "../modals/auth/otp-verification-modal";

export default function LoginComp() {
  const { theme, colors } = useTheme();
  const isLight = theme === "light";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Demo state to toggle 2FA requirement for testing
  const [is2FAEnabled, setIs2FAEnabled] = useState(true);

  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    setIsLoading(true);

    // Simulate authentication API call
    setTimeout(() => {
      setIsLoading(false);

      if (is2FAEnabled) {
        // Trigger 2FA modal
        setIsOtpModalOpen(true);
      } else {
        // Direct login success
        alert("Logged in successfully!");
      }
    }, 1000);
  };

  const dynamicTitle = (
    <>
      Welcome back to <br />
      <span style={{ color: colors.text }}>Your Workspace.</span>
    </>
  );

  const inputClassName =
  "w-full px-4 py-3 rounded-lg text-[0.95rem] outline-none border-[0.5px] transition-colors [&:-webkit-autofill]:[transition:background-color_999999s_ease-in-out_0s]";
  const labelClassName = "block text-[0.85rem] font-semibold mb-1.5";

  // Dynamic style object with WebkitTextFillColor & WebkitBoxShadow fix for dark/light autofill
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
      <div className="mt-12 mb-5">
        <div className="flex justify-between items-start gap-4 mb-2 flex-wrap">
          <div>
            <h2 className="text-2xl font-extrabold m-0 tracking-tight leading-tight">
              Sign In
            </h2>
            <p
              className="text-xs font-semibold mt-1 uppercase tracking-wider flex items-center gap-1.5"
              style={{ color: colors.primary ?? "#A3E635" }}
            >
              <ShieldCheck size={14} />
              {is2FAEnabled ? "2FA Protection Active" : "Standard Login"}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIs2FAEnabled((prev) => !prev)}
            className="rounded-full px-3.5 py-2 font-bold text-xs cursor-pointer inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-colors"
            style={{
              backgroundColor: isLight ? "#000000" : colors.shadeBg,
              color: isLight ? "#ffffff" : colors.text,
              border: isLight
                ? "1px solid #000000"
                : `1px solid ${colors.text}25`,
            }}
          >
            2FA: {is2FAEnabled ? "On" : "Off"}
          </button>
        </div>

        <p className="text-sm opacity-70 m-0 leading-relaxed">
          Access your workspace dashboard, team projects, and account settings.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Email Address */}
        <div className="mb-5">
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

        {/* Password */}
        <div className="mb-5">
          <div className="flex justify-between items-center mb-1.5">
            <label
              className="text-[0.85rem] font-semibold m-0"
              style={{ color: colors.text }}
            >
              Password
            </label>
            <Link
              href="/auth/forgot-password"
              className="text-xs font-semibold hover:underline transition-opacity"
              style={{ color: colors.primary ?? "#A3E635" }}
            >
              Forgot password?
            </Link>
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className={`${inputClassName} pr-11`}
              style={inputDynamicStyle}
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              tabIndex={-1}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none opacity-60 hover:opacity-100 cursor-pointer flex items-center p-0 transition-opacity"
              style={{ color: colors.text }}
            >
              {showPassword ? <EyeIcon /> : <EyeOffIcon />}
            </button>
          </div>
        </div>

        {/* Remember Me */}
        <div className="mb-6 flex items-center justify-between">
          <label className="flex items-center gap-2.5 cursor-pointer text-[0.85rem]">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-[18px] h-[18px] cursor-pointer accent-current"
              style={{ color: colors.text }}
            />
            <span style={{ color: colors.text }}>Remember me for 30 days</span>
          </label>
        </div>

        {loginError && (
          <p className="text-red-500 text-xs mb-4 text-center">{loginError}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading || !email || !password}
          className="w-full p-3.5 rounded-lg bg-[#A3E635] text-black font-bold text-[0.95rem] border-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 flex justify-center items-center gap-2 hover:enabled:opacity-90 transition-opacity"
        >
          {isLoading ? (
            "Authenticating..."
          ) : is2FAEnabled ? (
            <>
              Continue to 2FA <Lock size={16} strokeWidth={2.5} />
            </>
          ) : (
            <>
              Sign In <ArrowRight size={16} strokeWidth={2.5} />
            </>
          )}
        </button>
      </form>

      {/* Switch to Register */}
      <div className="mt-6 text-center text-sm opacity-85">
        Don't have an account?{" "}
        <Link
          href="/auth/register"
          className="font-bold underline hover:opacity-100 transition-opacity"
          style={{ color: colors.text }}
        >
          Create an account
        </Link>
      </div>

      {/* 2FA OTP Modal */}
      <OtpVerificationModal
        isOpen={isOtpModalOpen}
        onClose={() => setIsOtpModalOpen(false)}
        email={email}
        title="Two-Factor Authentication"
        successTitle="Identity Verified!"
        onVerify={async (otp) => {
          await new Promise((resolve) => setTimeout(resolve, 1200));
          if (otp !== "123456") {
            throw new Error("Invalid 2FA code. (Use 123456 for demo)");
          }
          // Handle successful login redirect here
        }}
      />
    </AuthLayout>
  );
}

function EyeIcon() {
  return (
    <svg
      className="w-[18px] h-[18px]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg
      className="w-[18px] h-[18px]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a18.9 18.9 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}
