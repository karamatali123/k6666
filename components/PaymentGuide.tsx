const depositSteps = [
  "Open K666 → Wallet → Deposit. Select JazzCash, Easypaisa, or Bank Transfer.",
  "Enter amount (minimum Rs 100). A merchant account number or QR code appears on screen.",
  "Pay from your JazzCash/Easypaisa app using the exact amount shown. Wrong amounts delay credit.",
  "Balance updates in 1–10 minutes. Screenshot the transaction ID in case support needs proof.",
] as const;

const withdrawalSteps = [
  "Go to Wallet → Withdraw. Complete identity check if this is your first cashout.",
  "Select JazzCash or Easypaisa and enter your registered wallet number (must match KYC name).",
  "Enter amount (minimum Rs 200). Daily limit is Rs 50,000 for unverified accounts.",
  "Approved withdrawals land in 5–30 minutes. First cashout can take 2–6 hours for manual review.",
] as const;

const paymentTable = [
  { method: "JazzCash", deposit: "Rs 100 – Rs 50,000", withdraw: "Rs 200 – Rs 50,000", speed: "1–15 min" },
  { method: "Easypaisa", deposit: "Rs 100 – Rs 50,000", withdraw: "Rs 200 – Rs 50,000", speed: "1–15 min" },
  { method: "Bank Transfer", deposit: "Rs 5,000+", withdraw: "Rs 5,000+", speed: "1–24 hrs" },
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
          K666 Deposit &amp; Withdrawal Guide — JazzCash &amp; Easypaisa (PKR)
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          Payment setup is the #1 reason Pakistani players search &ldquo;K666
          Easypaisa withdrawal&rdquo; and &ldquo;K666 JazzCash not working.&rdquo;
          Follow these steps tested on KK666.com.pk in June 2026.
        </p>

        <h3 id="deposit-steps" className="mt-8 text-lg font-semibold text-slate-900">
          How to Deposit Money in K666
        </h3>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
          {depositSteps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>

        <h3 id="withdrawal-steps" className="mt-8 text-lg font-semibold text-slate-900">
          How to Withdraw from K666 to JazzCash / Easypaisa
        </h3>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
          {withdrawalSteps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-sm">
            <caption className="sr-only">
              K666 payment limits for Pakistan wallets
            </caption>
            <thead>
              <tr className="border-b border-emerald-200 bg-emerald-100/50">
                <th className="px-3 py-2 text-left font-semibold text-slate-900">
                  Method
                </th>
                <th className="px-3 py-2 text-left font-semibold text-slate-900">
                  Deposit Range
                </th>
                <th className="px-3 py-2 text-left font-semibold text-slate-900">
                  Withdraw Range
                </th>
                <th className="px-3 py-2 text-left font-semibold text-slate-900">
                  Speed
                </th>
              </tr>
            </thead>
            <tbody>
              {paymentTable.map((row) => (
                <tr key={row.method} className="border-b border-emerald-100">
                  <td className="px-3 py-2 font-medium text-emerald-800">
                    {row.method}
                  </td>
                  <td className="px-3 py-2 text-slate-700">{row.deposit}</td>
                  <td className="px-3 py-2 text-slate-700">{row.withdraw}</td>
                  <td className="px-3 py-2 text-slate-700">{row.speed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
