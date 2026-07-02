export default function PaymentGuide() {
  return (
    <section
      id="payment-methods"
      aria-labelledby="payment-heading"
      className="px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl prose-section">
        <h2 id="payment-heading" className="text-2xl font-bold text-slate-900">
          Payment Methods for Deposit and Withdrawals
        </h2>
        <p className="mt-4 text-slate-700 leading-relaxed">
          Local wallets are the main reason K666 works as an earning app in
          Pakistan without international cards. Each method has different limits
          and speeds, so pick what matches your daily habits. We tested all
          four options below during our KK666.com.pk review.
        </p>

        <h3 className="mt-8 text-lg font-bold text-emerald-800">Easypaisa</h3>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Easypaisa deposits start from Rs 100 and usually credit within ten
          minutes when you pay the exact amount shown. Withdrawals need a
          matching wallet name and often clear in under thirty minutes after
          approval. Keep your transaction screenshot — support asks for it when
          a transfer stalls.
        </p>

        <h3 className="mt-8 text-lg font-bold text-emerald-800">JazzCash</h3>
        <p className="mt-3 text-slate-700 leading-relaxed">
          JazzCash is the most popular route among players we spoke with in
          Punjab and Sindh. Deposits feel instant on good 4G, though peak
          evening hours can add a short delay. Minimum withdrawal sits around Rs
          200 for most basic accounts on the platform.
        </p>

        <h3 className="mt-8 text-lg font-bold text-emerald-800">Bank</h3>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Bank transfer suits larger amounts above Rs 5,000 when wallet daily
          caps feel tight. Processing can take one to twenty-four hours
          depending on bank hours and manual review. Use this path only after
          you trust the app with smaller wallet tests first.
        </p>

        <h3 className="mt-8 text-lg font-bold text-emerald-800">Crypto</h3>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Crypto deposits appear for some verified users who want USDT-style
          top-ups outside traditional banking. Rates and network fees change
          daily, so check the conversion screen before you confirm. Withdrawals
          back to crypto wallets may face extra KYC steps compared with
          Easypaisa or JazzCash.
        </p>
      </div>
    </section>
  );
}
