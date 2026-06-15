import { K666_INFO } from "@/lib/constants";

const rows = [
  { label: "App Name", value: K666_INFO.appName },
  { label: "Version", value: K666_INFO.version },
  { label: "Platform", value: K666_INFO.platform },
  { label: "Deposit", value: `From ${K666_INFO.minDeposit}` },
  { label: "Withdrawal", value: `From ${K666_INFO.minWithdrawal}` },
  { label: "Withdrawal Time", value: K666_INFO.withdrawalTime },
  { label: "Bonus", value: K666_INFO.welcomeBonus },
  { label: "Payments", value: K666_INFO.paymentMethods.join(", ") },
] as const;

export default function QuickInfoTable() {
  return (
    <section
      aria-labelledby="quick-info-heading"
      className="bg-slate-50 px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="quick-info-heading" className="text-2xl font-bold text-slate-900">
          Quick Info
        </h2>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">K666 Game quick reference</caption>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <th scope="row" className="whitespace-nowrap px-4 py-2.5 font-medium text-slate-700">
                    {row.label}
                  </th>
                  <td className="px-4 py-2.5 text-slate-600">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
