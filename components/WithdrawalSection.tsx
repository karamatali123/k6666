const comparisonRows = [
  { method: "Easypaisa", min: "PKR 200", time: "5–30 min", fee: "Free" },
  { method: "JazzCash", min: "PKR 200", time: "5–30 min", fee: "Free" },
  { method: "Bank Transfer", min: "PKR 500+", time: "1–24 hrs", fee: "May apply" },
] as const;

export default function WithdrawalSection() {
  return (
    <section
      aria-labelledby="withdrawal-heading"
      className="px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="withdrawal-heading" className="text-2xl font-bold text-slate-900 sm:text-3xl">
          K666 Easypaisa &amp; JazzCash Withdrawal
        </h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-700">
          <li>Wallet → Withdraw → select Easypaisa or JazzCash</li>
          <li>Enter wallet number and amount (min PKR 200)</li>
          <li>Complete verification if prompted (first-time users)</li>
          <li>Receive payment in 5–30 minutes when approved</li>
        </ol>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[400px] text-left text-sm">
            <caption className="sr-only">K666 withdrawal comparison</caption>
            <thead>
              <tr className="border-b bg-slate-50">
                <th scope="col" className="px-4 py-3 font-semibold">Method</th>
                <th scope="col" className="px-4 py-3 font-semibold">Min</th>
                <th scope="col" className="px-4 py-3 font-semibold">Time</th>
                <th scope="col" className="px-4 py-3 font-semibold">Fee</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={row.method} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="px-4 py-2.5 font-medium">{row.method}</td>
                  <td className="px-4 py-2.5 text-slate-600">{row.min}</td>
                  <td className="px-4 py-2.5 text-slate-600">{row.time}</td>
                  <td className="px-4 py-2.5 text-slate-600">{row.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-slate-600">
          Delays? Check verification status, bonus wagering rules, and wallet number accuracy.
        </p>
      </div>
    </section>
  );
}
