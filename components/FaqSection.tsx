const faqs = [
  {
    question: "Is K666 Game real or fake in Pakistan?",
    answer:
      "K666 is a real app that moves actual PKR through JazzCash and Easypaisa for many users. It is not a scam clone if you download from a verified source. Still, real does not mean you will profit — most players lose over time because of the house edge.",
  },
  {
    question: "How do I download K666 APK on Android?",
    answer:
      "Enable install from unknown sources, tap the official download link, and save the ~52 MB APK file. Open it from Downloads and tap Install. K666 is not on Google Play, so sideloading is the normal path for Pakistani users.",
  },
  {
    question: "What is the K666 login process?",
    answer:
      "Open the app, tap Login, enter your registered 03XX mobile number and password. Complete OTP if prompted. VoIP numbers usually fail verification, so use a real Pakistani SIM.",
  },
  {
    question: "What is the minimum deposit in K666?",
    answer:
      "Most wallet deposits start at Rs 100 through JazzCash or Easypaisa. Bank transfer minimums are higher, often Rs 5,000 or more. Always pay the exact amount shown on screen to avoid delayed credits.",
  },
  {
    question: "How long does K666 withdrawal take?",
    answer:
      "Verified accounts often receive JazzCash or Easypaisa cash-outs in five to thirty minutes. First withdrawals may take two to six hours for manual review. Peak evening hours can add a short delay.",
  },
  {
    question: "How does the K666 referral agent program work?",
    answer:
      "Copy your invite code, share it with friends, and earn commission when they register and deposit. Active agents can reach up to 12% on qualifying referral activity. Withdraw referral earnings the same way as game winnings.",
  },
  {
    question: "Which games are most popular on K666?",
    answer:
      "Teen Patti, Aviator, Fortune Tiger, and Dragon Tiger draw the most traffic from Pakistani players. Slots suit quick sessions; table games last longer. None guarantee profit — set limits before you play.",
  },
  {
    question: "Is K666 available on iPhone?",
    answer:
      "There is no official iOS app as of 2026. K666 runs on Android APK only. Sites promising iPhone downloads are usually scams or unsafe web wrappers.",
  },
  {
    question: "What bonuses can new K666 users claim?",
    answer:
      "New users may see welcome offers, daily check-ins up to Rs 450, bonus rain drops, and 1% deposit credits. Read wagering rules on each promo before you chase large headline amounts like Rs 10,000 packages.",
  },
] as const;

export default function FaqSection() {
  return (
    <section
      id="faqs"
      aria-labelledby="faq-heading"
      className="bg-slate-900 px-4 py-10 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl prose-section">
        <h2 id="faq-heading" className="text-2xl font-bold">
          FAQs
        </h2>
        <div className="mt-6 space-y-2">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="rounded-lg border border-slate-700 bg-slate-800/50"
            >
              <summary className="cursor-pointer px-4 py-3 text-sm font-medium text-emerald-300 [&::-webkit-details-marker]:hidden">
                <span className="sr-only">Question {index + 1}: </span>
                {faq.question}
              </summary>
              <p className="border-t border-slate-700 px-4 py-3 text-sm text-slate-400">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export { faqs };
