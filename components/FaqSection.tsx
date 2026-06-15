const faqs = [
  {
    question: "Does the K666 Game give real money instantly after winning?",
    answer:
      "Winnings add to your wallet immediately, but withdrawal to Easypaisa or JazzCash takes 5–30 minutes after approval. First withdrawals may take longer due to verification.",
  },
  {
    question: "Can I invite friends from WhatsApp and Facebook?",
    answer:
      "Yes. Copy your referral code from the Invite tab and share it on WhatsApp, Facebook, or SMS. You earn commission when friends register and deposit.",
  },
  {
    question: "Do I need to deposit money to start playing?",
    answer:
      "Yes. Most games require a real-money balance. Minimum deposit is PKR 100 via Easypaisa or JazzCash. Some login bonuses may offer free chips with wagering rules.",
  },
  {
    question: "How long does withdrawal usually take?",
    answer:
      "Verified accounts: 5–30 minutes. First-time withdrawals: up to several hours. Bank transfers may take 1–24 hours.",
  },
  {
    question: "What if my account gets locked?",
    answer:
      "Contact in-app support or WhatsApp with your registered number and transaction screenshots. Locks often happen due to wrong login attempts, verification issues, or bonus rule violations.",
  },
] as const;

export default function FaqSection() {
  return (
    <section
      id="faqs"
      aria-labelledby="faq-heading"
      className="bg-slate-900 px-4 py-10 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
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
                <span className="sr-only">Q{index + 1}: </span>
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
