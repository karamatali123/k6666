const reviews = [
  { name: "Ahmed R.", region: "Punjab", text: "Easypaisa works. Withdrew PKR 1,500 but lost more overall.", rating: 4 },
  { name: "Fatima K.", region: "Sindh", text: "Easy UI. First JazzCash withdrawal took 6 hours.", rating: 3 },
  { name: "Hassan M.", region: "KPK", text: "Withdrawal rejected twice before approval. Be careful.", rating: 2 },
  { name: "Bilal S.", region: "Balochistan", text: "Daily rewards good. Slots drain balance fast.", rating: 3 },
] as const;

export default function UserReviews() {
  return (
    <section
      id="user-reviews"
      aria-labelledby="reviews-heading"
      className="px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="reviews-heading" className="text-2xl font-bold text-slate-900">
          User Reviews
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {reviews.map((r) => (
            <blockquote
              key={r.name}
              className="rounded-lg border border-slate-200 bg-white p-4 text-sm"
            >
              <p className="text-slate-600">&ldquo;{r.text}&rdquo;</p>
              <footer className="mt-2 text-xs text-slate-500">
                {r.name} · {r.region} · {r.rating}/5
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
