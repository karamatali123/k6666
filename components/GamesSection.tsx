const games = [
  "Teen Patti", "Poker", "Rummy", "Aviator", "Fortune Tiger",
  "Fortune Rabbit", "Fortune Gems", "Dragon Tiger", "Roulette", "Euro Roulette",
] as const;

export default function GamesSection() {
  return (
    <section
      id="popular-games"
      aria-labelledby="games-heading"
      className="px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="games-heading" className="text-2xl font-bold text-slate-900">
          Popular Games You Can Play Inside the K666 Game
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {games.map((g) => (
            <li
              key={g}
              className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-800"
            >
              {g}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-slate-600">
          Card games suit strategy players. Slots and Dragon Tiger are fast,
          high-risk formats. Start with small bets.
        </p>
      </div>
    </section>
  );
}
