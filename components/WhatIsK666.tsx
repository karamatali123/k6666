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
            Overview Of K666
          </h2>
          <p className="mt-4 text-slate-700">
            K666 Game is a Pakistan-focused Android earning app for card games,
            slots, and prediction formats. Download the APK, register with your
            phone, deposit via Easypaisa or JazzCash, and withdraw winnings in
            PKR. Latest version: V1.2.35 (2026).
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
            What is the K666 Game?
          </h2>
          <div className="mt-4 grid items-start gap-6 md:grid-cols-[1fr_140px]">
            <p className="text-slate-700">
              K666 is a real-money gaming APK not listed on Google Play. Users
              bet on Teen Patti, Aviator, slots, and more. Min deposit PKR 100,
              min withdrawal PKR 200. Built for Pakistani players with local
              payments and Urdu-friendly UI.
            </p>
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
