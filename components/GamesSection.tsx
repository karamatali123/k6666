const games = [
  { name: "Teen Patti", type: "Card", note: "Most popular in Punjab; 3-card poker variant" },
  { name: "Aviator", type: "Crash", note: "Cash out before the plane flies away" },
  { name: "Fortune Tiger", type: "Slot", note: "High volatility; trending on TikTok PK" },
  { name: "Super Ace", type: "Slot", note: "Added in V1.2.35 update" },
  { name: "Dragon Tiger", type: "Card", note: "Fast 30-second rounds" },
  { name: "Fortune Gems", type: "Slot", note: "Low minimum bet; good for beginners" },
  { name: "Rummy", type: "Card", note: "Skill-based; longer sessions" },
  { name: "Euro Roulette", type: "Table", note: "European wheel; single-zero" },
  { name: "Poker", type: "Card", note: "Texas Hold'em tables" },
  { name: "Fortune Rabbit", type: "Slot", note: "Lunar New Year themed; seasonal RTP boost" },
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
          Games Inside K666 APK — Full List (2026)
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          K666 hosts 40+ titles. These ten generate the most search traffic
          from Pakistani players on KK666.com.pk:
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-sm">
            <caption className="sr-only">
              Popular games in K666 Game APK
            </caption>
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-3 py-2 text-left font-semibold">Game</th>
                <th className="px-3 py-2 text-left font-semibold">Type</th>
                <th className="px-3 py-2 text-left font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {games.map((g) => (
                <tr key={g.name} className="border-b border-slate-100">
                  <td className="px-3 py-2 font-medium text-emerald-800">
                    {g.name}
                  </td>
                  <td className="px-3 py-2 text-slate-600">{g.type}</td>
                  <td className="px-3 py-2 text-slate-600">{g.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-slate-600">
          Card games (Teen Patti, Rummy) suit players who prefer strategy.
          Aviator and slots are high-speed, high-risk — set a stop-loss before
          opening the lobby. Minimum bets start at Rs 10 on most slot titles.
        </p>
      </div>
    </section>
  );
}
