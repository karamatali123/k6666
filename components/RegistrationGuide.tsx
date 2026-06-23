import Image from "next/image";
import {
  EXTERNAL_LINK_ATTRS,
  LOGIN_URL,
  REGISTER_URL,
} from "@/lib/constants";
import { K666_IMAGES } from "@/lib/k666-images";

const steps = [
  {
    title: "Open K666 and tap Register",
    detail:
      "Use a Pakistani SIM number (03XX format). VoIP or foreign numbers are rejected during OTP verification.",
  },
  {
    title: "Enter OTP from SMS",
    detail:
      "Code arrives within 30 seconds on Jazz, Zong, and Ufone. If OTP fails, wait 60 seconds and retry — do not spam requests.",
  },
  {
    title: "Set password + referral code (optional)",
    detail:
      "Choose a strong password. Enter a friend's referral code here to unlock the invite bonus for both accounts.",
  },
  {
    title: "Login anytime with phone + password",
    detail:
      "K666 login uses your mobile number — no email required. Forgot password? Tap \"Forgot\" and verify via OTP again.",
  },
] as const;

export default function RegistrationGuide() {
  return (
    <section
      id="login-sign-up"
      aria-labelledby="login-heading"
      className="bg-slate-50 px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="login-heading" className="text-2xl font-bold text-slate-900">
          K666 Login &amp; Sign Up — Step-by-Step for New Users
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          Registration takes under 90 seconds on a stable 4G connection.
          Existing players can skip to login with their registered number.
        </p>

        <Image
          src={K666_IMAGES.loginBanner.src}
          alt={K666_IMAGES.loginBanner.alt}
          width={K666_IMAGES.loginBanner.width}
          height={K666_IMAGES.loginBanner.height}
          className="mt-6 w-full rounded-xl border border-slate-200 shadow-sm"
          sizes="(max-width: 768px) 100vw, 768px"
          loading="lazy"
        />

        <ol className="mt-6 list-decimal space-y-4 pl-5 text-sm text-slate-700">
          {steps.map((step) => (
            <li key={step.title}>
              <strong className="text-slate-900">{step.title}</strong>
              <p className="mt-1">{step.detail}</p>
            </li>
          ))}
        </ol>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={REGISTER_URL}
            {...EXTERNAL_LINK_ATTRS}
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500"
          >
            Create K666 Account
          </a>
          <a
            href={LOGIN_URL}
            {...EXTERNAL_LINK_ATTRS}
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            K666 Login
          </a>
        </div>
      </div>
    </section>
  );
}
