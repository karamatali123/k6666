const userReviews = [
  {
    heading: "JazzCash withdrawal worked after a slow first try",
    text: "I deposited Rs 300 through JazzCash and played Teen Patti for two nights. First withdrawal of Rs 900 took five hours, but the second one landed in fifteen minutes flat.",
  },
  {
    heading: "Good for referrals, bad if you chase slots",
    text: "I earned Rs 1,800 from three friends who signed up with my code during PSL season. Slots drained my own balance fast though, so I stick to small arcade bets now.",
  },
  {
    heading: "Urdu menu helped my brother in Multan",
    text: "My brother switched the app to Urdu and understood deposits without calling me each time. He still lost Rs 400 testing Aviator, but at least the app felt legit.",
  },
] as const;

export default function ExperienceReviewsSection() {
  return (
    <section
      id="experience-reviews"
      aria-labelledby="experience-heading"
      className="border-t border-slate-100 bg-slate-50 px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl prose-section">
        <h2
          id="experience-heading"
          className="text-2xl font-bold text-slate-900"
        >
          Personal Experience and User Reviews
        </h2>
        <p className="mt-4 text-slate-700 leading-relaxed">
          I spent two weeks on K666 using a Redmi Note 12 and a Jazz SIM in
          Lahore. Deposits were quick, but I still lost Rs 1,100 overall after
          mixing slots and Aviator sessions. Honestly, the app works — it just
          is not a magic way to make money online without risk.
        </p>

        <div className="mt-8 space-y-4">
          {userReviews.map((review) => (
            <article
              key={review.heading}
              className="rounded-lg border border-slate-200 bg-white p-4"
            >
              <h3 className="font-bold text-emerald-800">{review.heading}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {review.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
