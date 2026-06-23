const steps = [
  "Login → tap Invite / Referral tab on the bottom menu",
  "Copy your unique referral code or shareable WhatsApp link",
  "Post the link in family groups, Facebook gaming pages, or TikTok bio",
  "Earn Rs 2000 when a friend registers AND makes their first deposit",
  "Ongoing commission (5–15%) applies on friend deposits for 30 days",
  "Withdraw referral earnings via JazzCash/Easypaisa — same as game winnings",
] as const;

export default function ReferralSection() {
  return (
    <section
      id="referral-program"
      aria-labelledby="referral-heading"
      className="px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="referral-heading" className="text-2xl font-bold text-slate-900">
          K666 Referral Program — Earn Rs 2000 Per Friend
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-700">
          The K666 referral system is the main growth engine in Pakistan. During
          PSL 2026, players reported earning Rs 8,000–Rs 15,000/month purely from
          invites — but results vary wildly. You need active friends who
          actually deposit, not just install the APK.
        </p>
        <p className="mt-3 text-sm text-slate-700">
          New users: enter a referral code at signup to unlock a matched welcome
          bonus (typically Rs 50–Rs 100 extra chips). Both referrer and referee
          benefit when the first deposit clears.
        </p>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-700">
          {steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
