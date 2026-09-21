import { useTheme } from "@/contexts/theme-context";
import React, { useState, useRef, useEffect } from "react";

interface OtpVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  title?: string;
  successTitle?: string;
  onVerify: (otp: string) => Promise<void>;
}

export default function OtpVerificationModal({
  isOpen,
  onClose,
  email,
  title = "Confirm Verification",
  successTitle = "Verified Successfully!",
  onVerify,
}: OtpVerificationModalProps) {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const { theme, colors } = useTheme();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const primaryColor = colors.primary ?? "#A3E635";

  useEffect(() => {
    if (isOpen) {
      setOtp(Array(6).fill(""));
      setError(null);
      setIsSuccess(false);
      setTimeout(() => inputRefs.current[0]?.focus(), 100);
    }
  }, [isOpen]);

  if (!isOpen) return null;

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

    setIsLoading(true);
    setError(null);
    try {
      await onVerify(fullOtp);
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (err: any) {
      setError(err?.message || "Verification failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-[1000] p-4 transition-colors"
      onClick={onClose}
      style={{ backgroundColor: `${colors.bg}05` }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: colors.bg ?? colors.bg,
          color: colors.text,
          borderColor: `${colors.text}10`,
        }}
        className="relative w-full max-w-[420px] rounded-2xl p-8 shadow-2xl border transition-colors"
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
          <div className="text-center py-4">
            <div
              className="w-[52px] h-[52px] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
              style={{
                backgroundColor: `${primaryColor}20`,
                color: primaryColor,
              }}
            >
              ✓
            </div>
            <h3 className="text-xl font-bold mb-2">{successTitle}</h3>
            <p className="opacity-80 text-sm">
              Code confirmed. Workspace initialization complete.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm mb-6 leading-snug">
              We sent a 6-digit verification code to <br />
              <strong style={{ color: primaryColor }}>{email}</strong>
            </p>

            <div className="flex justify-between gap-2 mb-6">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  ref={(el) => (inputRefs.current[idx] = el)}
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

            {error && (
              <p className="text-red-500 text-[0.85rem] mb-4 text-center">
                {error}
              </p>
            )}

            <button
              type="submit"
              style={{ backgroundColor: primaryColor }}
              disabled={isLoading || otp.join("").length < 6}
              className="w-full p-[0.85rem] rounded-lg text-black font-bold text-[0.95rem] border-0 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 hover:enabled:opacity-90 transition-opacity"
            >
              {isLoading ? "Verifying..." : "Verify Code"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
