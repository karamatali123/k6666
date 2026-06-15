const methods = [
  { name: "Easypaisa", note: "Send to app wallet number. Balance updates in 1–10 min." },
  { name: "JazzCash", note: "Match exact amount shown in app to avoid delays." },
  { name: "Bank Transfer", note: "Larger deposits. May take 1–24 hours." },
] as const;

export default function DepositSection() {
  return (
    <section
      aria-labelledby="deposit-heading"
      className="bg-emerald-50 px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="deposit-heading" className="text-2xl font-bold text-slate-900 sm:text-3xl">
          K666 Deposit Methods
        </h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-700">
          <li>Open Wallet → Deposit in K666</li>
          <li>Choose Easypaisa, JazzCash, or Bank Transfer</li>
          <li>Enter amount (min PKR 100) and pay the shown wallet number</li>
          <li>Balance updates within 1–10 minutes</li>
        </ol>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {methods.map((m) => (
            <div key={m.name} className="rounded-lg border border-emerald-200 bg-white p-4">
              <h3 className="font-semibold text-emerald-800">{m.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{m.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-amber-800">
          Deposit missing? Screenshot your receipt and contact support — wrong amount or number is the usual cause.
        </p>
      </div>
    </section>
  );
}
