"use client";

import { useTheme } from "@/contexts/theme-context";
import Link from "next/link";
import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import AuthLayout from "../_layouts/auth_layouts";
import OtpVerificationModal from "../modals/auth/otp-verification-modal";

export default function RegisterComp() {
  const { theme, colors } = useTheme();
  const isLight = theme === "light";

  const [accountType, setAccountType] = useState<"personal" | "company">(
    "personal"
  );
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [creatorRole, setCreatorRole] = useState("developer");
  const [customRole, setCustomRole] = useState("");
  const [sameEmail, setSameEmail] = useState(false);
  const [creatorEmail, setCreatorEmail] = useState("");
  const [isRoleOpen, setIsRoleOpen] = useState(false);

  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const passwordsMatch = password === confirmPassword && password.length > 0;
  const activeEmail =
    accountType === "company"
      ? sameEmail
        ? companyEmail
        : creatorEmail
      : email;

  const roleOptions = [
    { value: "developer", label: "Developer" },
    { value: "manager", label: "Manager" },
    { value: "ceo", label: "CEO" },
    { value: "other", label: "Others" },
  ];
  const selectedRoleLabel =
    roleOptions.find((r) => r.value === creatorRole)?.label ?? "Select role";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwordsMatch) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsOtpModalOpen(true);
    }, 1000);
  };

  const dynamicTitle = (
    <>
      Create your <br />
      <span style={{ color: colors.text }}>
        {accountType === "company"
          ? "Corporate Workspace."
          : "Personal Profile."}
      </span>
    </>
  );

  const inputClassName =
    "w-full px-4 py-3 rounded-lg text-[0.95rem] outline-none border transition-colors";

  const labelClassName = "block text-[0.85rem] font-semibold mb-1.5";

  // Dynamic style object: updates background & text for standard AND autofilled inputs when `theme` changes
  const inputDynamicStyle: React.CSSProperties = {
    backgroundColor: colors.bg,
    color: colors.text,
    WebkitTextFillColor: colors.text,
    WebkitBoxShadow: `0 0 0px 1000px ${colors.bg} inset`,
    borderColor: `${colors.text}25`,
  };

  return (
    <AuthLayout title={dynamicTitle}>
      {/* Header: Create Account + Switch */}
      <div className="mt-12 mb-5">
        <div className="flex justify-between items-start gap-4 mb-2 flex-wrap">
          <div>
            <h2 className="text-2xl font-extrabold m-0 tracking-tight leading-tight">
              Create Account
            </h2>
            <p
              className="text-xs font-semibold mt-1 uppercase tracking-wider"
              style={{ color: colors.primary ?? "#A3E635" }}
            >
              {accountType === "company"
                ? "Corporate account"
                : "Personal account"}
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              setAccountType((t) => (t === "personal" ? "company" : "personal"))
            }
            className="rounded-full px-3.5 py-2 font-bold text-xs cursor-pointer inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-colors"
            style={{
              backgroundColor: isLight ? "#000000" : colors.shadeBg,
              color: isLight ? "#ffffff" : colors.text,
              border: isLight
                ? "1px solid #000000"
                : `1px solid ${colors.text}25`,
            }}
          >
            Switch to {accountType === "personal" ? "Company" : "Personal"}
            <ArrowRight size={14} strokeWidth={2.5} />
          </button>
        </div>

        <p className="text-sm opacity-70 m-0 leading-relaxed">
          {accountType === "company"
            ? "Set up a shared workspace for your team and collaborators."
            : "Create a personal account to get started quickly."}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {accountType === "company" && (
          <>
            <div className="mb-5">
              <label className={labelClassName} style={{ color: colors.text }}>
                Company Name
              </label>
              <input
                type="text"
                required
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Boring Thinkers Ltd"
                className={inputClassName}
                style={inputDynamicStyle}
              />
            </div>
            <div className="mb-5">
              <label className={labelClassName} style={{ color: colors.text }}>
                Working Company Email
              </label>
              <input
                type="email"
                required
                value={companyEmail}
                onChange={(e) => {
                  setCompanyEmail(e.target.value);
                  if (sameEmail) setCreatorEmail(e.target.value);
                }}
                placeholder="hr@boringthinkers.com"
                className={inputClassName}
                style={inputDynamicStyle}
              />
            </div>
          </>
        )}

        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <label className={labelClassName} style={{ color: colors.text }}>
              First Name
            </label>
            <input
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Ada"
              className={inputClassName}
              style={inputDynamicStyle}
            />
          </div>
          <div>
            <label className={labelClassName} style={{ color: colors.text }}>
              Last Name
            </label>
            <input
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Lovelace"
              className={inputClassName}
              style={inputDynamicStyle}
            />
          </div>
        </div>

        {accountType === "personal" ? (
          <div className="mb-5">
            <label className={labelClassName} style={{ color: colors.text }}>
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ada@gmail.com"
              className={inputClassName}
              style={inputDynamicStyle}
            />
          </div>
        ) : (
          <div className="mb-5">
            <div className="relative mb-4">
              <label className={labelClassName} style={{ color: colors.text }}>
                Your Role
              </label>

              <button
                type="button"
                onClick={() => setIsRoleOpen((o) => !o)}
                className={`${inputClassName} flex justify-between items-center cursor-pointer text-left`}
                style={inputDynamicStyle}
              >
                <span>{selectedRoleLabel}</span>
                <ChevronDown
                  size={16}
                  strokeWidth={2}
                  className={`opacity-70 shrink-0 transition-transform duration-200 ${
                    isRoleOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {isRoleOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsRoleOpen(false)}
                  />
                  <div
                    className="absolute top-full left-0 right-0 mt-1 rounded-lg z-20 overflow-hidden shadow-lg border"
                    style={{
                      backgroundColor: colors.shadeBg,
                      borderColor: `${colors.text}20`,
                    }}
                  >
                    {roleOptions.map((opt) => {
                      const active = opt.value === creatorRole;
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => {
                            setCreatorRole(opt.value);
                            setIsRoleOpen(false);
                          }}
                          className="w-full px-4 py-3 flex justify-between items-center border-none cursor-pointer text-sm transition-colors hover:opacity-80"
                          style={{
                            backgroundColor: active
                              ? `${colors.text}10`
                              : "transparent",
                            color: colors.text,
                          }}
                        >
                          {opt.label}
                          {active && (
                            <span
                              className="font-bold"
                              style={{ color: colors.text }}
                            >
                              ✓
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>

            {creatorRole === "other" && (
              <div className="mb-5">
                <input
                  type="text"
                  required
                  value={customRole}
                  onChange={(e) => setCustomRole(e.target.value)}
                  placeholder="Specify your role..."
                  className={inputClassName}
                  style={inputDynamicStyle}
                />
              </div>
            )}

            <label className="flex items-center gap-2.5 cursor-pointer text-[0.85rem] mb-4">
              <input
                type="checkbox"
                checked={sameEmail}
                onChange={(e) => {
                  setSameEmail(e.target.checked);
                  if (e.target.checked) setCreatorEmail(companyEmail);
                }}
                className="w-[18px] h-[18px] cursor-pointer accent-current"
                style={{ color: colors.text }}
              />
              <span style={{ color: colors.text }}>
                My personal email is the same as the company email
              </span>
            </label>

            {!sameEmail && (
              <div className="mb-5">
                <label
                  className={labelClassName}
                  style={{ color: colors.text }}
                >
                  Creator Personal Email
                </label>
                <input
                  type="email"
                  required
                  value={creatorEmail}
                  onChange={(e) => setCreatorEmail(e.target.value)}
                  placeholder="ada@personal.com"
                  className={inputClassName}
                  style={inputDynamicStyle}
                />
              </div>
            )}
          </div>
        )}

        <div className="mb-5">
          <label className={labelClassName} style={{ color: colors.text }}>
            Create Password
          </label>
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

        <div className="mb-5">
          <label className={labelClassName} style={{ color: colors.text }}>
            Confirm Password
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
              aria-label={
                showConfirmPassword ? "Hide password" : "Show password"
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none opacity-60 hover:opacity-100 cursor-pointer flex items-center p-0 transition-opacity"
              style={{ color: colors.text }}
            >
              {showConfirmPassword ? <EyeIcon /> : <EyeOffIcon />}
            </button>
          </div>
          {confirmPassword.length > 0 && !passwordsMatch && (
            <p className="text-red-500 text-xs mt-1.5">
              Passwords do not match.
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading || !passwordsMatch}
          className="w-full p-3.5 rounded-lg bg-[#A3E635] text-black font-bold text-[0.95rem] border-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 mt-2 flex justify-center items-center gap-2 hover:enabled:opacity-90 transition-opacity"
        >
          {isLoading ? (
            "Initializing..."
          ) : (
            <>
              Proceed to Verification <ArrowRight size={16} strokeWidth={2.5} />
            </>
          )}
        </button>
      </form>

      <div className="mt-6 text-center text-sm opacity-85">
        Already have an account?{" "}
        <Link
          href="/auth/login"
          className="font-bold underline hover:opacity-100 transition-opacity"
          style={{ color: colors.text }}
        >
          Sign in
        </Link>
      </div>

      <OtpVerificationModal
        isOpen={isOtpModalOpen}
        onClose={() => setIsOtpModalOpen(false)}
        email={activeEmail}
        title="Confirm Registration"
        successTitle="Workspace Secured!"
        onVerify={async (otp) => {
          await new Promise((resolve) => setTimeout(resolve, 1200));
          if (otp !== "123456") throw new Error("Incorrect code, try again.");
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
