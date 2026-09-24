"use client";

import { useTheme } from "@/contexts/theme-context";
import React, { useState, useRef, useEffect } from "react";
import { Lock, Check } from "lucide-react";

interface ResetPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  onResetPassword: (otp: string, newPassword: string) => Promise<void>;
}

export default function ResetPasswordModal({
  isOpen,
  onClose,
  email,
  onResetPassword,
}: ResetPasswordModalProps) {
  const { colors } = useTheme();
  const primaryColor = colors.primary ?? "#A3E635";

  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (isOpen) {
      setOtp(Array(6).fill(""));
      setNewPassword("");
      setConfirmPassword("");
      setError(null);
      setIsSuccess(false);
      setTimeout(() => inputRefs.current[0]?.focus(), 100);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const passwordsMatch =
    newPassword === confirmPassword && newPassword.length >= 6;

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    setError(null);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim().slice(0, 6);
    if (/^\d+$/.test(pastedData)) {
      const digits = pastedData.split("");
      const newOtp = Array(6).fill("");
      digits.forEach((d, idx) => {
        newOtp[idx] = d;
      });
      setOtp(newOtp);
      inputRefs.current[Math.min(digits.length, 5)]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fullOtp = otp.join("");

    if (fullOtp.length < 6) {
      setError("Please enter the complete 6-digit code.");
      return;
    }

    if (!passwordsMatch) {
      setError("Passwords must match and be at least 6 characters.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await onResetPassword(fullOtp, newPassword);
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
      }, 1800);
    } catch (err: any) {
      setError(err?.message || "Reset failed. Please verify your OTP code.");
    } finally {
      setIsLoading(false);
    }
  };

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
    <div
      className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-[1000] p-4 transition-colors"
      onClick={onClose}
      style={{ backgroundColor: `${colors.bg}12` }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: colors.bg ?? colors.bg,
          color: colors.text,
          borderColor: `${colors.text}20`,
        }}
        className="relative w-full max-w-[440px] rounded-2xl p-8 shadow-2xl border transition-colors max-h-[90vh] overflow-y-auto"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 bg-transparent border-0 opacity-60 text-xl cursor-pointer hover:opacity-100 transition-opacity"
          style={{ color: colors.text }}
        >
          ✕
        </button>

        {isSuccess ? (
          <div className="text-center py-6">
            <div
              className="w-[56px] h-[56px] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
              style={{
                backgroundColor: `${primaryColor}20`,
                color: primaryColor,
              }}
            >
              <Check size={28} strokeWidth={3} />
            </div>
            <h3 className="text-xl font-bold mb-2">Password Reset!</h3>
            <p className="opacity-80 text-sm leading-relaxed">
              Your credentials have been updated successfully. Redirecting you
              to login...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-2 mb-1">
              <Lock size={20} style={{ color: primaryColor }} />
              <h3 className="text-xl font-bold m-0">Reset Password</h3>
            </div>
            <p className="text-sm opacity-80 mb-6 leading-snug">
              Enter the verification code sent to <br />
              <strong style={{ color: primaryColor }}>{email}</strong>
            </p>

            {/* OTP Code Inputs */}
            <div className="mb-5">
              <label className={labelClassName} style={{ color: colors.text }}>
                6-Digit OTP Code
              </label>
              <div className="flex justify-between gap-2">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    ref={(el) => {
                      inputRefs.current[idx] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(idx, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(idx, e)}
                    onPaste={handlePaste}
                    className="w-[44px] h-[52px] text-center text-xl font-bold rounded-lg border focus:outline-none transition-colors [&:-webkit-autofill]:[transition:background-color_999999s_ease-in-out_0s]"
                    style={{
                      backgroundColor: colors.bg,
                      color: colors.text,
                      WebkitTextFillColor: colors.text,
                      WebkitBoxShadow: `0 0 0px 1000px ${colors.bg} inset`,
                      borderColor: digit ? primaryColor : `${colors.text}25`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* New Password */}
            <div className="mb-4">
              <label className={labelClassName} style={{ color: colors.text }}>
                New Password
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className={`${inputClassName} pr-11`}
                  style={inputDynamicStyle}
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword((s) => !s)}
                  tabIndex={-1}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none opacity-60 hover:opacity-100 cursor-pointer flex items-center p-0 transition-opacity"
                  style={{ color: colors.text }}
                >
                  {showNewPassword ? <EyeIcon /> : <EyeOffIcon />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="mb-5">
              <label className={labelClassName} style={{ color: colors.text }}>
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className={`${inputClassName} pr-11`}
                  style={inputDynamicStyle}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((s) => !s)}
                  tabIndex={-1}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none opacity-60 hover:opacity-100 cursor-pointer flex items-center p-0 transition-opacity"
                  style={{ color: colors.text }}
                >
                  {showConfirmPassword ? <EyeIcon /> : <EyeOffIcon />}
                </button>
              </div>
              {confirmPassword.length > 0 && !passwordsMatch && (
                <p className="text-red-500 text-xs mt-1.5">
                  Passwords do not match or are under 6 characters.
                </p>
              )}
            </div>

            {error && (
              <p className="text-red-500 text-[0.85rem] mb-4 text-center">
                {error}
              </p>
            )}

            <button
              type="submit"
              style={{ backgroundColor: primaryColor }}
              disabled={isLoading || otp.join("").length < 6 || !passwordsMatch}
              className="w-full p-[0.85rem] rounded-lg text-black font-bold text-[0.95rem] border-0 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 hover:enabled:opacity-90 transition-opacity mt-2"
            >
              {isLoading ? "Updating Password..." : "Reset Password"}
            </button>
          </form>
        )}
      </div>
    </div>
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
