import Image from "next/image";
import {
  EXTERNAL_LINK_ATTRS,
  LOGIN_URL,
  REGISTER_URL,
} from "@/lib/constants";
import { K666_IMAGES } from "@/lib/k666-images";

const registerSteps = [
  "Open K666 and tap the Register button on the welcome screen.",
  "Type your active Pakistani mobile number in 03XX format.",
  "Enter the SMS OTP code within the time limit shown on screen.",
  "Create a strong password and add a referral code if a friend invited you.",
  "Tap confirm — your wallet opens and you can claim new-user bonuses.",
] as const;

const loginSteps = [
  "Launch the app and select Login from the home or profile tab.",
  "Enter the same mobile number you used during registration.",
  "Type your password carefully — three wrong tries may lock the account.",
  "Complete OTP verification if the app requests extra security.",
  "You land on the main lobby with your balance and game list visible.",
] as const;

export default function RegistrationGuide() {
  return (
    <section
      id="registration-login"
      aria-labelledby="registration-heading"
      className="px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl prose-section">
        <h2
          id="registration-heading"
          className="text-2xl font-bold text-slate-900"
        >
          K666 Registration and Login Process
        </h2>
        <p className="mt-4 text-slate-700 leading-relaxed">
          Registration and login both rely on your phone number — no email
          required, which keeps things simple for most Pakistani users. Below
          are the exact steps we followed on KK666.com.pk during our June 2026
          test. Keep your SIM active for OTP delivery before you begin.
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

        <h3 className="mt-8 text-lg font-bold text-emerald-800">
          Register Account on K666
        </h3>
        <p className="mt-3 text-sm text-slate-700">
          Follow these steps to create a new account in under two minutes.
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
          {registerSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>

        <h3 className="mt-8 text-lg font-bold text-emerald-800">
          Steps to Login your Account
        </h3>
        <p className="mt-3 text-sm text-slate-700">
          Returning players can sign in quickly with phone and password.
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
          {loginSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={REGISTER_URL}
            {...EXTERNAL_LINK_ATTRS}
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500"
          >
            Create Account
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
