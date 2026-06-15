const reasons = [
  "Easypaisa and JazzCash support — no international card needed",
  "Low PKR 100 minimum deposit",
  "Urdu-friendly interface for local users",
  "Referral rewards up to PKR 2000 per friend",
  "Daily bonuses, lucky wheel, and ranking prizes",
  "Fast APK updates with new games in 2026",
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
          Reasons Behind the Trend of K666 APK in Pakistan in 2026
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
          {reasons.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
