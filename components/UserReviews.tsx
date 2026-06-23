const reviews = [
  {
    name: "Ahmed R.",
    region: "Lahore, Punjab",
    text: "Downloaded from a WhatsApp link first — got a fake APK. KK666 guide linked the real one. Easypaisa deposit Rs 300 worked. Withdrew Rs 1,200 after Teen Patti session but lost more over the week.",
    rating: 4,
  },
  {
    name: "Fatima K.",
    region: "Karachi, Sindh",
    text: "JazzCash withdrawal took 5 hours on first try. Second one in 12 minutes. UI has Urdu option which my mother uses. Referral bonus of Rs 500 when my cousin signed up.",
    rating: 3,
  },
  {
    name: "Hassan M.",
    region: "Peshawar, KPK",
    text: "Account locked after 3 wrong passwords. Support unlocked it in 2 days with CNIC photo. Be careful with OTP — never share on phone calls claiming to be K666 staff.",
    rating: 2,
  },
  {
    name: "Bilal S.",
    region: "Quetta, Balochistan",
    text: "Aviator is addictive. Daily check-in rewards are small but add up. Slots drained my Rs 1,000 deposit in one evening. Set a limit before you play.",
    rating: 3,
  },
  {
    name: "Sana T.",
    region: "Islamabad",
    text: "Compared K666 with Z777 — K666 has faster JazzCash and better referral. Lost Rs 400 testing both. At least K666 support replied on WhatsApp.",
    rating: 4,
  },
  {
    name: "Usman A.",
    region: "Faisalabad, Punjab",
    text: "30% first deposit bonus looked great but needed 3x wagering before withdrawal. Read the fine print. App itself is not fake — payments are real.",
    rating: 3,
  },
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
          K666 User Reviews from Pakistan (2026)
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          Collected from KK666.com.pk readers and Pakistani gaming communities.
          Ratings reflect payment reliability, not winning odds.
        </p>
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
