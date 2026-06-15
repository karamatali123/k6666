const steps = [
  "Open Invite tab after login",
  "Copy your unique referral code or link",
  "Share on WhatsApp, Facebook, or SMS",
  "Earn commission when friends register and deposit",
  "Withdraw referral earnings like regular winnings",
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
          K666 Referral Program Fully Explained
        </h2>
        <p className="mt-4 text-sm text-slate-700">
          Invite friends and earn up to PKR 2000 per referral. You get a
          commission on their deposits. Enter a friend&apos;s code at signup to
          unlock bonus rewards for both sides.
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
