const features = [
  {
    title: "Invite A Friend & Get Rs 2000",
    desc: "Share your referral link on WhatsApp groups; earn up to Rs 2000 when a friend registers and deposits. Commission also applies on repeat deposits.",
  },
  {
    title: "Real Money PKR Wallet",
    desc: "Every bet uses actual Rupees — not play coins. Winnings and losses reflect in your JazzCash-ready balance instantly after each round.",
  },
  {
    title: "Mystery Box Rewards",
    desc: "Random boxes appear after login streaks and festival events (Eid, Independence Day). Prizes range from Rs 10 free chips to deposit-match coupons.",
  },
  {
    title: "First Deposit Bonus 30%",
    desc: "New accounts get 30% extra on the first top-up (e.g. deposit Rs 500, play with Rs 650). Wagering rules apply before withdrawal.",
  },
  {
    title: "Loss Compensation 8%",
    desc: "Weekly cashback on net losses for active VIP players. Credited every Monday if you deposited at least Rs 1,000 that week.",
  },
  {
    title: "Daily Ranking Bonus",
    desc: "Top 50 depositors on the leaderboard split a Rs 50,000 prize pool every 24 hours. Resets at midnight PKT.",
  },
  {
    title: "Free Lucky Wheel",
    desc: "One free spin daily on the PKR prize wheel — seen in our screenshots section. Extra spins unlock after Rs 200+ deposits.",
  },
  {
    title: "Daily Check-In Rewards",
    desc: "7-day login streak unlocks escalating bonuses: Day 1 = Rs 5, Day 7 = Rs 100 + mystery box.",
  },
  {
    title: "JazzCash, Easypaisa & Bank",
    desc: "Deposit via merchant number or in-app gateway. Bank transfer available for amounts above Rs 5,000 on verified accounts.",
  },
  {
    title: "No Pop-Up Ads",
    desc: "Unlike free Play Store games, K666 runs ad-free. Revenue comes from the house edge on bets, not banner advertising.",
  },
  {
    title: "High Rebate Bonus",
    desc: "VIP tiers (Bronze → Diamond) return 0.3%–1.2% of total bet volume as weekly rebate chips.",
  },
  {
    title: "Level Up Bonus",
    desc: "Each VIP level-up triggers a one-time PKR reward. Diamond level players report Rs 5,000+ milestone bonuses.",
  },
  {
    title: "Urdu + English UI",
    desc: "Switch language in Settings → Language. Urdu menus help first-time players in rural Punjab and Sindh.",
  },
  {
    title: "Daily Login Bonus",
    desc: "Automatic Rs 2–Rs 20 chip credit on first login each calendar day. Stacks with check-in rewards.",
  },
  {
    title: "OTP-Secured Transactions",
    desc: "Login and large withdrawals require SMS OTP to your registered Pakistani number — adds a layer against account theft.",
  },
  {
    title: "WhatsApp Customer Support",
    desc: "In-app chat and WhatsApp agents respond in Urdu/English. Average reply time in our test: 8–25 minutes during peak hours.",
  },
] as const;

export default function FeaturesSection() {
  return (
    <section
      id="top-key-features"
      aria-labelledby="features-heading"
      className="px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="features-heading" className="text-2xl font-bold text-slate-900">
          16 Key Features of K666 Download APK (2026 Update)
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          These are the active promotions inside K666 V1.2.35 as verified by
          KK666.com.pk in June 2026. Bonus amounts can change during Ramadan or
          cricket season events.
        </p>
        <ol className="mt-6 space-y-3">
          {features.map((f, i) => (
            <li
              key={f.title}
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm"
            >
              <span className="font-semibold text-emerald-700">
                {i + 1}. {f.title}
              </span>
              <span className="text-slate-600"> — {f.desc}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
