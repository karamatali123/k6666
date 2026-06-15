const bonuses = [
  { title: "Welcome Bonus", description: "PKR 50–500 on signup. Requires deposit + wagering." },
  { title: "Referral Bonus", description: "Commission when friends register and deposit." },
  { title: "Daily Rewards", description: "Login streaks for free spins and bonus chips." },
  { title: "VIP Benefits", description: "Faster withdrawals and higher limits for active players." },
] as const;

export default function BonusSection() {
  return (
    <section
      aria-labelledby="bonus-heading"
      className="bg-amber-50 px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="bonus-heading" className="text-2xl font-bold text-slate-900 sm:text-3xl">
          K666 Bonus 2026
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {bonuses.map((b) => (
            <li key={b.title} className="rounded-lg border border-amber-200 bg-white p-4">
              <h3 className="font-semibold text-amber-800">{b.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{b.description}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-slate-500">Terms change often. Read wagering rules before claiming.</p>
      </div>
    </section>
  );
}
