import { GitBranch } from "lucide-react"
import { Pill } from "@/components/ui/pill"
import { EarningsCalculator } from "@/components/earnings-calculator"
import { BRAND_BLUE } from "@/lib/constants"

export function HowItWorks() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-start">
        <div className="rounded-2xl p-6 ring-1 ring-slate-200 bg-white shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <GitBranch className="w-5 h-5" style={{ color: BRAND_BLUE }} />
            <h4 className="font-semibold">How it works</h4>
          </div>
          <ol className="space-y-4 text-sm text-slate-700">
            <li className="flex gap-3">
              <span className="mt-0.5">1.</span>
              <span>
                Install the <strong>Engage360 Plug & Print</strong> add‑on or use our web dashboard.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5">2.</span>
              <span>
                Upload or generate a <strong>variable QR dataset</strong> (we provide APIs & templates).
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5">3.</span>
              <span>
                Merge codes into labels/cartons/sleeves and <strong>print at scale</strong>.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5">4.</span>
              <span>
                Brands scan to <strong>authenticate products</strong>, trigger <strong>rewards</strong>, and capture{" "}
                <strong>customer data</strong>.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5">5.</span>
              <span>
                Track jobs and <strong>earn 30% commission</strong> on each QR printed.
              </span>
            </li>
          </ol>
          <div className="mt-4 flex flex-wrap gap-2">
            <Pill>CSV / API</Pill>
            <Pill>Labels & Cartons</Pill>
            <Pill>Shrink Sleeves</Pill>
            <Pill>Mono Cartons</Pill>
          </div>
        </div>
        <EarningsCalculator />
      </div>
    </section>
  )
}
