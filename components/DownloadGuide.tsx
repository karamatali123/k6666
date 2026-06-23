import Image from "next/image";
import {
  DOWNLOAD_URL,
  EXTERNAL_LINK_ATTRS,
} from "@/lib/constants";
import { K666_IMAGES } from "@/lib/k666-images";

const steps = [
  {
    title: "Allow APK installs on Android",
    detail:
      "Settings → Security → Install unknown apps → enable for Chrome or your file manager. Required on Android 8+ (Samsung, Xiaomi, Oppo, Vivo, Realme).",
  },
  {
    title: "Download K666 APK V1.2.35",
    detail:
      "Tap the download button on this page. File size should be ~52 MB. If the APK is under 30 MB or has a different icon, delete it — likely a modified version.",
  },
  {
    title: "Install and open the app",
    detail:
      "Open Downloads → tap k666.apk → Install. Grant storage permission if prompted. Launch and wait for the splash screen with the green K666 logo.",
  },
  {
    title: "Register and claim welcome bonus",
    detail:
      "Sign up with your mobile number, verify OTP, and make a Rs 100 test deposit via JazzCash or Easypaisa to unlock the 30% first-deposit bonus.",
  },
] as const;

export default function DownloadGuide() {
  return (
    <section
      id="download-install-guide"
      aria-labelledby="download-heading"
      className="px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="download-heading" className="text-2xl font-bold text-slate-900">
          How to Download &amp; Install K666 Game APK on Android (2026)
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          K666 is not on Google Play. Pakistani players must sideload the APK.
          Works on Android 5.0+; we recommend Android 10 or newer for smooth
          Aviator and slot performance.
        </p>

        <div className="mt-6 grid items-center gap-6 md:grid-cols-2">
          <ol className="list-decimal space-y-4 pl-5 text-sm text-slate-700">
            {steps.map((step) => (
              <li key={step.title}>
                <strong className="text-slate-900">{step.title}</strong>
                <p className="mt-1">{step.detail}</p>
              </li>
            ))}
          </ol>
          <Image
            src={K666_IMAGES.promoBanner.src}
            alt={K666_IMAGES.promoBanner.alt}
            width={K666_IMAGES.promoBanner.width}
            height={K666_IMAGES.promoBanner.height}
            className="rounded-xl shadow-md"
            sizes="(max-width: 768px) 100vw, 400px"
            loading="lazy"
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={DOWNLOAD_URL}
            {...EXTERNAL_LINK_ATTRS}
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500"
          >
            Download K666 APK Now
          </a>
        </div>

        <p className="mt-4 text-sm text-amber-700">
          Warning: Never install K666 from random Telegram links. Fake APKs can
          steal JazzCash OTPs. KK666.com.pk only links to the verified source.
        </p>
      </div>
    </section>
  );
}
