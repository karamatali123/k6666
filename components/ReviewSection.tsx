const pros = [
  "JazzCash and Easypaisa deposits from Rs 100 — no foreign card needed",
  "Large game library with slots, tables, casino, and arcade crash titles",
  "Stacked bonuses: welcome pack, daily check-in, cashback, and bonus rain",
  "Urdu and English UI helps players across Punjab, Sindh, and KPK",
  "Agent program with up to 12% referral commission for active sharers",
] as const;

const cons = [
  "Unregulated platform — no government gambling license in Pakistan",
  "First withdrawal can take hours while manual security checks run",
  "Bonus wagering rules trap users who deposit for big welcome amounts",
  "Fake APK clones on social media can install malware or steal OTPs",
  "House edge means most players lose money over weeks, not earn steady income",
] as const;

export default function ReviewSection() {
  return (
    <section
      id="pros-and-cons"
      aria-labelledby="pros-cons-heading"
      className="px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl prose-section">
        <h2 id="pros-cons-heading" className="text-2xl font-bold text-slate-900">
          Pros and Cons
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
            <h3 className="font-bold text-emerald-800">Pros</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-emerald-900">
              {pros.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4">
            <h3 className="font-bold text-red-800">Cons</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-red-900">
              {cons.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
