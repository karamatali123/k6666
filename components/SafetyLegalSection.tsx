const safetyPoints = [
  "Download only from KK666.com.pk or the official partner link — fake APKs steal OTP codes.",
  "K666 is not licensed by SECP or any Pakistan gambling board, so play at your own risk.",
  "Set a daily loss cap and stop when you hit it; chasing losses is the fastest way to go broke.",
  "Never share OTP, password, or CNIC photos with anyone claiming to be K666 support on calls.",
  "Test a small withdrawal early; if cash-out fails repeatedly, pause deposits until support fixes it.",
] as const;

export default function SafetyLegalSection() {
  return (
    <section
      id="safe-and-legal"
      aria-labelledby="safety-heading"
      className="bg-slate-900 px-4 py-10 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl prose-section">
        <h2 id="safety-heading" className="text-2xl font-bold">
          Is K666 Safe and Legal?
        </h2>
        <p className="mt-4 text-slate-300 leading-relaxed">
          Safety and legality are two different questions, and honest guides
          should split them clearly. K666 processes real JazzCash and Easypaisa
          payments for many users, so the app itself can work as advertised.
          However, real-money gaming sits in a grey zone under Pakistani law,
          and you can still lose money — so treat it as entertainment, not a
          job.
        </p>
        <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-slate-300">
          {safetyPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
