const pros = [
  "Easy phone + OTP signup",
  "Easypaisa & JazzCash payments",
  "16 bonus features and referral rewards",
  "Low PKR 100 minimum deposit",
] as const;

const cons = [
  "Withdrawal delays on first cashout",
  "Real financial risk — house has edge",
  "Unregulated platform",
  "APK security risks from unofficial sites",
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
          Pros and Cons Of K666
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
            <h3 className="font-semibold text-emerald-800">Pros</h3>
            <ul className="mt-2 space-y-1 text-sm text-emerald-900">
              {pros.map((p) => (
                <li key={p}>+ {p}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4">
            <h3 className="font-semibold text-red-800">Cons</h3>
            <ul className="mt-2 space-y-1 text-sm text-red-900">
              {cons.map((c) => (
                <li key={c}>− {c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
