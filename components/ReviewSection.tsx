const pros = [
  "Phone + OTP signup in under 90 seconds — no email or CNIC upload for basic play",
  "Native JazzCash & Easypaisa — deposits from Rs 100, withdrawals from Rs 200",
  "16 active bonus systems (wheel, ranking, referral, check-in) in V1.2.35",
  "Urdu language option for players across Punjab, Sindh, and KPK",
  "Aviator & Teen Patti run smooth on mid-range Android (tested on Redmi Note 12)",
  "WhatsApp support responds in Urdu within 8–25 minutes during peak hours",
] as const;

const cons = [
  "First withdrawal often delayed 2–6 hours for manual KYC review",
  "House edge means most players lose money over weeks — not a stable income",
  "Unregulated platform — no SECP or gambling commission oversight in Pakistan",
  "Fake APK clones on Telegram can install malware or steal OTP codes",
  "Bonus wagering requirements trap players who deposit for the 30% match",
  "Account locks reported after multiple failed logins or bonus rule violations",
] as const;

export default function ReviewSection() {
  return (
    <section
      id="pros-and-cons"
      aria-labelledby="pros-cons-heading"
      className="px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="pros-cons-heading" className="text-2xl font-bold text-slate-900">
          K666 Game Review — Pros &amp; Cons (Honest 2026 Verdict)
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          Is K666 real or fake? It is a functioning app with real PKR
          transactions — but &quot;real&quot; does not mean &quot;profitable.&quot;
          Here is our balanced assessment from KK666.com.pk:
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
            <h3 className="font-semibold text-emerald-800">Pros</h3>
            <ul className="mt-2 space-y-2 text-sm text-emerald-900">
              {pros.map((p) => (
                <li key={p}>+ {p}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4">
            <h3 className="font-semibold text-red-800">Cons</h3>
            <ul className="mt-2 space-y-2 text-sm text-red-900">
              {cons.map((c) => (
                <li key={c}>− {c}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
          <strong>Real or fake score: 7/10 for legitimacy.</strong> K666
          processes real deposits and withdrawals. Score drops because of
          withdrawal delays, bonus traps, and unregulated status. Treat it as
          paid entertainment — not an investment.
        </p>
      </div>
    </section>
  );
}
