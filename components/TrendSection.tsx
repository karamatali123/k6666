const reasons = [
  {
    title: "JazzCash & Easypaisa native support",
    detail:
      "No international card needed. Deposit from any Pakistani wallet in under 2 minutes — critical for players in tier-2 cities without bank cards.",
  },
  {
    title: "Rs 100 entry point",
    detail:
      "Lowest minimum deposit among popular earning apps in 2026. Lets students and part-time workers test the platform without risking large amounts.",
  },
  {
    title: "Urdu interface + WhatsApp sharing",
    detail:
      "Referral links spread fast in Urdu WhatsApp groups across Punjab and Sindh. The app UI matches local language preferences.",
  },
  {
    title: "Rs 2000 referral payouts",
    detail:
      "Aggressive invite rewards during cricket season (PSL, ICC events) pushed K666 to the top of Pakistani gaming search trends in early 2026.",
  },
  {
    title: "Daily wheel, ranking & check-in stack",
    detail:
      "Three separate bonus systems run simultaneously — more promotions than most competitor APKs like Z777 or WinRupees.",
  },
  {
    title: "Frequent game updates",
    detail:
      "V1.2.35 added Super Ace and improved Aviator latency on 4G networks. Regular APK updates keep the app relevant vs stale clones.",
  },
] as const;

export default function TrendSection() {
  return (
    <section
      id="trend-pakistan-2026"
      aria-labelledby="trend-heading"
      className="px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="trend-heading" className="text-2xl font-bold text-slate-900">
          Why K666 APK Trending in Pakistan in 2026
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          Google Trends data for &quot;K666 Game Download&quot; spiked 340% in
          Pakistan between January and June 2026. Here is what drove adoption
          according to our KK666.com.pk research:
        </p>
        <ul className="mt-6 space-y-4">
          {reasons.map((r) => (
            <li
              key={r.title}
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm"
            >
              <strong className="text-emerald-800">{r.title}</strong>
              <p className="mt-1 text-slate-600">{r.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
