const features = [
  { title: "Invite A Friend & Get 2000", desc: "Earn up to PKR 2000 per successful referral." },
  { title: "Real Money App", desc: "Play and withdraw real PKR to your wallet." },
  { title: "Mystery Box Rewards", desc: "Random bonus boxes on login and events." },
  { title: "First Deposit Bonus 30%", desc: "Extra balance on your first deposit." },
  { title: "Loss Compensation 8%", desc: "Partial cashback on qualifying losses." },
  { title: "Daily Ranking Bonus", desc: "Top depositors win daily prizes." },
  { title: "Free Lucky Wheel", desc: "Spin for free PKR rewards daily." },
  { title: "Daily Check-In Rewards", desc: "Login streaks unlock bonus chips." },
  { title: "Local Payment Methods", desc: "Easypaisa, JazzCash, and bank transfer." },
  { title: "No Annoying Ads", desc: "Clean interface without pop-up ads." },
  { title: "High Rebate Bonus", desc: "Rebate on bets for active players." },
  { title: "Level Up Bonus", desc: "Rewards as your VIP level increases." },
  { title: "Multiple Languages", desc: "English and Urdu interface options." },
  { title: "Daily Login Bonus", desc: "Free bonus on every daily login." },
  { title: "Safe & Secure Transactions", desc: "Encrypted payments and OTP login." },
  { title: "Active Customer Support", desc: "WhatsApp and in-app chat support." },
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
          Top Key Features of K666 Download APK
        </h2>
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
