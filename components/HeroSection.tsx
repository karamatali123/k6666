import Image from "next/image";
import {
  DOWNLOAD_URL,
  EXTERNAL_LINK_ATTRS,
  LOGIN_URL,
  REGISTER_URL,
} from "@/lib/constants";
import { K666_IMAGES } from "@/lib/k666-images";

const trustBadges = [
  "Fast Withdrawal",
  "Easypaisa & JazzCash",
  "Android APK",
  "PKR Payments",
] as const;

export default function HeroSection() {
  const { promoBanner, icon } = K666_IMAGES;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="relative mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <div className="mb-4 flex items-center justify-center gap-3 lg:justify-start">
            <Image
              src={icon.src}
              alt={icon.alt}
              width={icon.width}
              height={icon.height}
              className="h-12 w-12 rounded-xl"
              priority
            />
            <p className="text-sm font-medium text-emerald-300">
              APK V1.2.35 · Pakistan 2026
            </p>
          </div>
          <h1
            id="hero-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            K666 Game Download APK (2026) – Official Pakistan Guide
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-slate-300 lg:mx-0">
            Android APK with Easypaisa &amp; JazzCash. Card games, slots, and
            fast withdrawals for Pakistan players.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href={DOWNLOAD_URL}
              {...EXTERNAL_LINK_ATTRS}
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-emerald-500 px-6 py-2.5 font-semibold text-slate-950 hover:bg-emerald-400 sm:w-auto"
            >
              Download APK
            </a>
            <a
              href={LOGIN_URL}
              {...EXTERNAL_LINK_ATTRS}
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl border border-slate-600 px-6 py-2.5 font-semibold text-white hover:bg-slate-800 sm:w-auto"
            >
              Login
            </a>
            <a
              href={REGISTER_URL}
              {...EXTERNAL_LINK_ATTRS}
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl border border-amber-500/50 bg-amber-500/10 px-6 py-2.5 font-semibold text-amber-300 hover:bg-amber-500/20 sm:w-auto"
            >
              Register
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap justify-center gap-2 text-xs text-emerald-200 lg:justify-start">
            {trustBadges.map((b) => (
              <li
                key={b}
                className="rounded-full border border-emerald-500/20 px-3 py-1"
              >
                ✓ {b}
              </li>
            ))}
          </ul>
        </div>

        <figure className="mx-auto w-full max-w-md lg:max-w-none">
          <Image
            src={promoBanner.src}
            alt={promoBanner.alt}
            width={promoBanner.width}
            height={promoBanner.height}
            className="h-auto w-full rounded-xl shadow-2xl"
            sizes="(max-width: 1024px) 90vw, 480px"
            priority
          />
        </figure>
      </div>
    </section>
  );
}
