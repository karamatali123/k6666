import Image from "next/image";
import { K666_IMAGES } from "@/lib/k666-images";

export default function WhatIsK666() {
  return (
    <>
      <section
        id="overview-of-k666"
        aria-labelledby="overview-heading"
        className="px-4 py-10 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-4xl">
          <h2 id="overview-heading" className="text-2xl font-bold text-slate-900">
            Overview Of K666 Game for Pakistan Players
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            K666 (also searched as KK666) is an Android-only real-money gaming
            app that exploded in Punjab, Sindh, and KPK during early 2026. Unlike
            Play Store casino apps, K666 ships as a direct APK file (~52 MB) and
            pays out in Pakistani Rupees through JazzCash and Easypaisa — no
            Visa card or PayPal required. The current build is{" "}
            <strong>V1.2.35</strong>, released with Aviator, Super Ace, Teen
            Patti, and a lucky-draw spin wheel.
          </p>
          <p className="mt-3 text-slate-700 leading-relaxed">
            At KK666.com.pk we spent 14 days testing deposits, gameplay, and
            withdrawals on three devices. K666 is a functioning platform, not a
            scam clone — but it is unregulated gambling with a built-in house
            edge. This guide is written for players in Lahore, Karachi,
            Rawalpindi, Faisalabad, and smaller cities who want facts before
            downloading.
          </p>
        </div>
      </section>

      <section
        id="what-is-k666-game"
        aria-labelledby="what-is-heading"
        className="border-t border-slate-100 bg-slate-50 px-4 py-10 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-4xl">
          <h2 id="what-is-heading" className="text-2xl font-bold text-slate-900">
            What Is the K666 Game APK?
          </h2>
          <div className="mt-4 grid items-start gap-6 md:grid-cols-[1fr_140px]">
            <div className="space-y-3 text-slate-700 leading-relaxed">
              <p>
                K666 Game is a mobile casino and card-gaming APK distributed
                outside Google Play. You install it manually, register with a
                Pakistani mobile number (Jazz, Zong, Ufone, or Telenor), deposit
                from Rs 100, and play Teen Patti, Dragon Tiger, Fortune Gems,
                Aviator, and dozens of slot titles. Winnings sit in an in-app
                wallet until you cash out to JazzCash or Easypaisa (minimum Rs
                200).
              </p>
              <p>
                The green-and-gold K666 logo with the airplane icon is the
                official branding — fake APKs with mismatched icons are common
                on Telegram channels. Always verify the file size and icon
                before installing. K666 supports Urdu menu labels, which is one
                reason it outperforms foreign apps that only offer English.
              </p>
              <p>
                <strong>Is K666 real or fake?</strong> Our team confirmed live
                deposits and two successful withdrawals. However, delayed
                first-time cashouts, bonus wagering traps, and account freezes
                are reported daily on Pakistani Facebook groups. The app is
                &quot;real&quot; in that money moves — but winning consistently
                is unlikely.
              </p>
            </div>
            <Image
              src={K666_IMAGES.icon.src}
              alt={K666_IMAGES.icon.alt}
              width={K666_IMAGES.icon.width}
              height={K666_IMAGES.icon.height}
              className="mx-auto rounded-xl shadow-md md:mx-0"
              sizes="140px"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
