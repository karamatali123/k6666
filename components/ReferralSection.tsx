import { EXTERNAL_LINK_ATTRS, REF_URL } from "@/lib/constants";

const agentSteps = [
  {
    label: "Visit Official Website",
    text: "Open the verified K666 link from KK666.com.pk and log into your account.",
  },
  {
    label: "Open Invite Tab",
    text: "Tap Invite or Agent from the bottom menu to view your personal referral code.",
  },
  {
    label: "Copy Referral Link",
    text: "Copy the shareable URL or code — WhatsApp status is the most common share method in Pakistan.",
  },
  {
    label: "Share With Friends",
    text: "Send the link to real contacts who might register and deposit; fake clicks do not pay.",
  },
  {
    label: "Track Commission",
    text: "Watch the agent dashboard for pending and cleared commission up to 12% on qualifying activity.",
  },
  {
    label: "Withdraw Earnings",
    text: "Cash out referral income through JazzCash or Easypaisa like normal game winnings.",
  },
] as const;

export default function ReferralSection() {
  return (
    <section
      id="become-k666-agent"
      aria-labelledby="agent-heading"
      className="border-t border-slate-100 bg-slate-50 px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl prose-section">
        <h2 id="agent-heading" className="text-2xl font-bold text-slate-900">
          How to Become K666 Agent — Start Earnings from Referrals
        </h2>
        <p className="mt-4 text-slate-700 leading-relaxed">
          Becoming an agent is basically sharing your invite link and earning
          when friends join this online earning path. Some users make money
          online this way without playing every day themselves. Follow the steps
          below if you want referral income alongside casual gaming.
        </p>

        <ul className="mt-6 space-y-3">
          {agentSteps.map((step) => (
            <li
              key={step.label}
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
            >
              <strong className="text-emerald-800">{step.label}:</strong>{" "}
              {step.text}
            </li>
          ))}
        </ul>

        <a
          href={REF_URL}
          {...EXTERNAL_LINK_ATTRS}
          className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500"
        >
          Start Referral Earnings
        </a>
      </div>
    </section>
  );
}
