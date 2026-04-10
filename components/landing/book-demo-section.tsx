"use client";

import { useState } from "react";
import { SectionShell } from "@/components/landing/section-shell";

export function BookDemoSection() {
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState<"email" | "otp" | "details">("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [otpError, setOtpError] = useState("");

  const inputClassName =
    "mt-2 w-full rounded-2xl border border-slate-300/80 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200/70 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40 dark:focus:border-cyan-300 dark:focus:ring-cyan-300/25";

  const sendOtp = () => {
    if (!email) {
      setOtpError("Enter your work email first.");
      return;
    }
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      setOtpError("Please enter a valid email address.");
      return;
    }

    const nextOtp = String(Math.floor(100000 + Math.random() * 900000));
    setGeneratedOtp(nextOtp);
    setOtpSent(true);
    setEmailVerified(false);
    setOtp("");
    setOtpError("");
  };

  const verifyOtp = () => {
    if (!otpSent) return;
    if (otp.trim() === generatedOtp) {
      setEmailVerified(true);
      setOtpError("");
      return;
    }
    setEmailVerified(false);
    setOtpError("Invalid OTP. Please check and try again.");
  };

  const handleRegister = () => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      setOtpError("Please enter a valid email address.");
      return;
    }
    sendOtp();
    setStep("otp");
  };

  const handleVerify = () => {
    verifyOtp();
    if (otp.trim() === generatedOtp) {
      setStep("details");
    }
  };

  return (
    <section
      id="book-demo"
      className="relative flex min-h-[calc(100vh-72px)] w-full scroll-mt-24 items-center overflow-hidden py-16 sm:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 25% 10%, rgba(56, 189, 248, 0.18), transparent 55%), radial-gradient(ellipse 75% 45% at 80% 35%, rgba(99, 102, 241, 0.14), transparent 60%)",
        }}
      />

      <SectionShell className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl lg:max-w-none lg:pr-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700 dark:text-cyan-400">
            Book a demo
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Talk to our product team and streamline your validation with XPEER AI.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
            Share a few details—our team will reach out to schedule a tailored demo.
          </p>

          <div className="mt-8 grid gap-4 sm:max-w-lg">
            <div className="rounded-3xl border border-slate-200/80 bg-white/80 px-5 py-4 text-sm text-slate-600 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              We respect your privacy. Your information is used only to schedule your demo.
            </div>

            {/* Keep this section focused: only the privacy note on the left. */}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-2xl shadow-slate-900/10 dark:border-white/10 dark:bg-[#0d1424] dark:shadow-black/40 sm:p-9">
          {submitted ? (
            <div className="space-y-4 py-1">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Request received</p>
              <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
                We have received your request and will be in touch within one business day to schedule your demo.
              </p>
            </div>
          ) : (
            <form
              className="space-y-7"
              onSubmit={(event) => {
                event.preventDefault();
                if (step === "email") {
                  handleRegister();
                  return;
                }
                if (step === "otp") {
                  handleVerify();
                  return;
                }
                if (!emailVerified) {
                  setOtpError("Verify your email with OTP before submitting.");
                  return;
                }
                setSubmitted(true);
              }}
            >
              <div className="space-y-4">
                <p className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Request a demo</p>
              </div>

              {step === "email" ? (
                <div className="space-y-5">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                    Work email
                    <input
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                        setEmailVerified(false);
                        setOtpError("");
                      }}
                      className={inputClassName}
                      placeholder="you@company.com"
                    />
                  </label>

                  {otpError && <p className="mt-2 text-xs text-rose-600 dark:text-rose-300">{otpError}</p>}

                  <button
                    type="button"
                    onClick={handleRegister}
                    className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:from-blue-600 hover:to-cyan-400 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-cyan-500/10"
                  >
                    Register
                  </button>
                </div>
              ) : step === "otp" ? (
                <div className="space-y-5">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                    OTP sent to <span className="font-semibold">{email}</span>
                  </div>

                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                    Enter OTP
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="\d{6}"
                      maxLength={6}
                      value={otp}
                      onChange={(event) => {
                        const digitsOnly = event.target.value.replace(/\D/g, "").slice(0, 6);
                        setOtp(digitsOnly);
                        setOtpError("");
                      }}
                      className={inputClassName}
                      placeholder="6-digit OTP"
                    />
                  </label>

                  {generatedOtp && (
                    <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                      Demo OTP: <span className="font-semibold">{generatedOtp}</span>
                    </p>
                  )}

                  {otpError && <p className="mt-2 text-xs text-rose-600 dark:text-rose-300">{otpError}</p>}

                  <button
                    type="button"
                    onClick={handleVerify}
                    className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:from-blue-600 hover:to-cyan-400 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-cyan-500/10"
                  >
                    Verify
                  </button>

                  <button
                    type="button"
                    onClick={sendOtp}
                    className="text-xs font-medium text-blue-600 underline decoration-transparent transition hover:decoration-current dark:text-cyan-300"
                  >
                    Resend OTP
                  </button>
                </div>
              ) : (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-500/10 dark:text-emerald-200">
                  Verified email: <span className="font-semibold">{email}</span>
                </div>
              )}

              <fieldset disabled={step !== "details"} className={step !== "details" ? "space-y-4 hidden" : "space-y-4"}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                    First name
                    <input
                      type="text"
                      name="firstName"
                      required
                      autoComplete="given-name"
                      className={inputClassName}
                      placeholder="Jade"
                    />
                  </label>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                    Last name
                    <input
                      type="text"
                      name="lastName"
                      required
                      autoComplete="family-name"
                      className={inputClassName}
                      placeholder="Das"
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                    Contact number
                    <input
                      type="tel"
                      name="phone"
                      required
                      autoComplete="tel"
                      className={inputClassName}
                      placeholder="+1 555 123 4567"
                    />
                  </label>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                    Company name
                    <input
                      type="text"
                      name="company"
                      required
                      autoComplete="organization"
                      className={inputClassName}
                      placeholder="Xpeer Labs"
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                    Website
                    <input
                      type="url"
                      name="website"
                      required
                      autoComplete="url"
                      className={inputClassName}
                      placeholder="https://yourcompany.com"
                    />
                  </label>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                    Job role
                    <input
                      type="text"
                      name="role"
                      required
                      autoComplete="organization-title"
                      className={inputClassName}
                      placeholder="Head of QA"
                    />
                  </label>
                </div>
              </fieldset>

              {step === "details" && (
                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:from-blue-600 hover:to-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-200/70 dark:shadow-cyan-500/10 dark:focus:ring-cyan-300/25"
                >
                  Submit
                </button>
              )}

              {step === "details" && (
                <p className="text-center text-xs text-slate-500 dark:text-slate-400">
                  By submitting this form, you agree to receive follow-up communication from our team.
                </p>
              )}
            </form>
          )}
        </div>
      </SectionShell>
    </section>
  );
}
