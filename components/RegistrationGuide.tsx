import Image from "next/image";
import { K666_IMAGES } from "@/lib/k666-images";

const steps = [
  "Tap Register → enter Pakistani mobile number",
  "Verify OTP from SMS",
  "Set password + optional referral code",
  "Login with phone number and password",
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
          K666 Login &amp; Sign Up – Simple Steps
        </h2>

        <Image
          src={K666_IMAGES.loginBanner.src}
          alt={K666_IMAGES.loginBanner.alt}
          width={K666_IMAGES.loginBanner.width}
          height={K666_IMAGES.loginBanner.height}
          className="mt-6 w-full rounded-xl border border-slate-200 shadow-sm"
          sizes="(max-width: 768px) 100vw, 768px"
          loading="lazy"
        />

        <ol className="mt-6 list-decimal space-y-2 pl-5 text-sm text-slate-700">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
