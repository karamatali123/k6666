const tips = [
  "Download only from KK666.com.pk or the verified link on this page — fake Telegram APKs steal wallet OTPs",
  "Set a daily loss limit (e.g. Rs 500) and stop when you hit it — chasing losses is the #1 reason players go negative",
  "Never share your login OTP, password, or JazzCash PIN with K666 'agents' on WhatsApp",
  "Start with Rs 100–200 to test both deposit AND withdrawal before adding larger amounts",
  "Screenshot every Easypaisa/JazzCash transaction with date, amount, and transaction ID",
  "Read bonus wagering rules — the 30% first-deposit bonus often requires 3x turnover before cashout",
  "Use a dedicated JazzCash account for gaming, separate from your salary account",
  "If withdrawal is pending 6+ hours, contact in-app support with screenshots — do not create a second account",
] as const;

export default function SafetyTipsSection() {
  return (
    <section
      id="safety-tips"
      aria-labelledby="safety-heading"
      className="bg-slate-900 px-4 py-10 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="safety-heading" className="text-2xl font-bold">
          8 Safety Tips Before Playing K666 in Pakistan
        </h2>
        <p className="mt-3 text-sm text-slate-400">
          Real-money gaming carries financial risk. These rules come from
          KK666.com.pk testing and common complaints on Pakistani gaming forums.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
          {tips.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
