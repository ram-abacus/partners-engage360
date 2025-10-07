export function FAQs() {
  return (
    <section className="py-12" id="faqs">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 ring-1 ring-slate-200 bg-white shadow-sm">
            <div className="font-medium">What's the commission?</div>
            <p className="mt-1 text-sm text-slate-700">
              Flat <strong>30%</strong> on the QR price ($0.10/QR). You earn <strong>$0.03 per QR</strong>.
            </p>
          </div>
          <div className="rounded-2xl p-6 ring-1 ring-slate-200 bg-white shadow-sm">
            <div className="font-medium">How do we integrate?</div>
            <p className="mt-1 text-sm text-slate-700">
              Use the <em>Plug & Print</em> add‑on or our web dashboard. Variable QR codes can be merged into your print
              templates via CSV or API.
            </p>
          </div>
          <div className="rounded-2xl p-6 ring-1 ring-slate-200 bg-white shadow-sm">
            <div className="font-medium">How do payouts work?</div>
            <p className="mt-1 text-sm text-slate-700">
              Monthly payouts to your registered bank account along with a downloadable statement for each job.
            </p>
          </div>
          <div className="rounded-2xl p-6 ring-1 ring-slate-200 bg-white shadow-sm">
            <div className="font-medium">Can we white‑label?</div>
            <p className="mt-1 text-sm text-slate-700">
              Yes, enterprise white‑label is available for approved partners.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
