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
      <div className="mx-auto max-w-4xl">
        <h2 id="conclusion-heading" className="text-2xl font-bold text-slate-900">
          Final Verdict — Should You Download K666 in 2026?
        </h2>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
          <p>
            K666 Game is a legitimate Android earning app for Pakistan with
            working JazzCash and Easypaisa payments, 16 bonus features, and a
            Rs 2000 referral program. Version V1.2.35 runs stable on modern
            phones and supports Urdu — making it one of the most searched gaming
            APKs in the country this year.
          </p>
          <p>
            However, it is unregulated gambling. Most players lose money over
            time. Download only from trusted sources like KK666.com.pk, start
            with Rs 100–200, test a withdrawal early, and never deposit money
            you cannot afford to lose.
          </p>
        </div>
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
