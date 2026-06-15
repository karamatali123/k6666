const relatedGames = [
  { name: "Teen Patti Pakistan", href: "/teen-patti-game" },
  { name: "Fortune Tiger APK", href: "/fortune-tiger-game" },
  { name: "Dragon Tiger", href: "/dragon-tiger-game" },
  { name: "Rummy Pakistan", href: "/rummy-game-pakistan" },
  { name: "Z777 Game", href: "/z777-game" },
  { name: "Aviator Pakistan", href: "/aviator-game-pakistan" },
] as const;

export default function RelatedGames() {
  return (
    <section aria-labelledby="related-heading" className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 id="related-heading" className="text-2xl font-bold text-slate-900">
          Related Games
        </h2>
        <nav aria-label="Related games" className="mt-4">
          <ul className="flex flex-wrap gap-2">
            {relatedGames.map((g) => (
              <li key={g.href}>
                <a
                  href={g.href}
                  className="inline-block rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:border-emerald-300 hover:text-emerald-700"
                >
                  {g.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
