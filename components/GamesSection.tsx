export default function GamesSection() {
  return (
    <section
      id="games-to-play"
      aria-labelledby="games-heading"
      className="px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl prose-section">
        <h2 id="games-heading" className="text-2xl font-bold text-slate-900">
          Games to Play on K666 Game App
        </h2>
        <p className="mt-4 text-slate-700 leading-relaxed">
          The lobby splits games into clear groups so you can jump straight to
          what you like. Whether you prefer slow card hands or ten-second
          rounds, K666 keeps options open. Here is how each category feels in
          real play.
        </p>

        <h3 className="mt-8 text-lg font-bold text-emerald-800">Slots</h3>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Slots include fan titles like Fortune Tiger, Super Ace, and Fortune
          Gems with bright reels and quick spins. Minimum bets often start low,
          which suits testers with a small budget. Volatility is high though —
          balance can drop fast if you chase big multipliers.
        </p>

        <h3 className="mt-8 text-lg font-bold text-emerald-800">Casino</h3>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Live-style casino rooms cover roulette, baccarat-style tables, and
          other classic formats for players who like tradition. Streams run
          smooth on stable 4G in major cities like Islamabad and Faisalabad.
          Remember, faster rounds mean faster losses if you do not set limits.
        </p>

        <h3 className="mt-8 text-lg font-bold text-emerald-800">Table</h3>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Table games focus on Teen Patti, Poker, Rummy, and Dragon Tiger for
          users who enjoy skill and bluffing. Sessions last longer than slots,
          so bankroll planning matters more here. Many Punjab players stick to
          Teen Patti tables during evening free time.
        </p>

        <h3 className="mt-8 text-lg font-bold text-emerald-800">Arcade</h3>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Arcade picks include crash games such as Aviator where you cash out
          before the multiplier stops climbing. Rounds finish in seconds, which
          makes this category addictive for some users. Use a strict stop-loss
          — arcade speed eats balances quicker than you expect.
        </p>
      </div>
    </section>
  );
}
