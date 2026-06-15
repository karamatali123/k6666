const tips = [
  "Download APK only from official or verified sources",
  "Set a daily budget and never chase losses",
  "Never share OTP or password with anyone",
  "Start with PKR 100–200 to test deposits and withdrawals",
  "Screenshot all Easypaisa/JazzCash transactions",
  "Read bonus wagering rules before claiming promotions",
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
          Tips To Play the K666 Game Safely
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
          {tips.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
