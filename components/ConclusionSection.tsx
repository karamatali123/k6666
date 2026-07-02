import {
  DOWNLOAD_URL,
  EXTERNAL_LINK_ATTRS,
} from "@/lib/constants";

export default function ConclusionSection() {
  return (
    <section
      id="conclusion"
      aria-labelledby="conclusion-heading"
      className="bg-emerald-50 px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl prose-section">
        <h2 id="conclusion-heading" className="text-2xl font-bold text-slate-900">
          Conclusion
        </h2>
        <p className="mt-4 text-slate-700 leading-relaxed">
          K666 Game is a working real money app for Pakistan with local wallets,
          a deep game lobby, and strong promo events for new users. If you want
          download and login help from a tested source, KK666.com.pk keeps the
          steps clear and honest. Go ahead and try small deposits first, run an
          early withdrawal test, and never bet cash you cannot afford to lose —
          that is the only sane way to use any earning game in 2026.
        </p>
        <a
          href={DOWNLOAD_URL}
          {...EXTERNAL_LINK_ATTRS}
          className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500"
        >
          Download K666 APK — Official Link
        </a>
      </div>
    </section>
  );
}
