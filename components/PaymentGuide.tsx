const depositSteps = [
  "Open Wallet → Deposit in K666 app",
  "Select Easypaisa, JazzCash, or Bank Transfer",
  "Enter amount (min PKR 100) and pay the shown number",
  "Balance updates in 1–10 minutes",
] as const;

const withdrawalSteps = [
  "Go to Wallet → Withdraw",
  "Choose Easypaisa or JazzCash",
  "Enter wallet number and amount (min PKR 200)",
  "Receive payment in 5–30 minutes when approved",
] as const;

export default function PaymentGuide() {
  return (
    <section
      id="deposit-withdrawal"
      aria-labelledby="payment-heading"
      className="bg-emerald-50 px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="payment-heading" className="text-2xl font-bold text-slate-900">
          K666 Deposit &amp; Withdrawal – Easy Guide For New Players
        </h2>

        <h3 id="deposit-steps" className="mt-8 text-lg font-semibold text-slate-900">
          Deposit Steps
        </h3>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
          {depositSteps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>

        <h3 id="withdrawal-steps" className="mt-8 text-lg font-semibold text-slate-900">
          Withdrawal Steps
        </h3>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
          {withdrawalSteps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
