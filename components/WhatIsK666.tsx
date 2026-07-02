import Image from "next/image";
import { K666_IMAGES } from "@/lib/k666-images";

export default function WhatIsK666() {
  return (
    <section
      id="what-is-k666"
      aria-labelledby="what-is-heading"
      className="px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl prose-section">
        <h2 id="what-is-heading" className="text-2xl font-bold text-slate-900">
          What is K666?
        </h2>

        <div className="mt-4 grid items-start gap-6 md:grid-cols-[1fr_140px]">
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              K666 is an Android earning game where you bet real PKR on card
              tables, crash games, and slot machines outside the Play Store. You
              install the APK, create an account with your mobile number, and
              fund the wallet through JazzCash or Easypaisa. After that, wins
              sit in your balance until you request a cash-out to your wallet.
            </p>
            <p>
              Think of it as a real money app built for players who want local
              payments and Urdu-friendly menus. Some friends still type k666 in
              lowercase when they search — same app, same wallet. Because of
              that, we call it entertainment with risk, not a salary replacement
              for earn money online dreams.
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
  );
}
