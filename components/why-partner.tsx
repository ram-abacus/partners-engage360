import { Coins, Plug, Handshake } from "lucide-react"
import { FeatureItem } from "@/components/ui/feature-item"

export function WhyPartner() {
  return (
    <section className="py-12 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-2xl font-semibold mb-6">Why Partner with Engage360</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureItem icon={Coins} title="New revenue, instantly">
            Earn <strong>30% commission</strong> on every QR you print — recurring across repeat jobs.
          </FeatureItem>
          <FeatureItem icon={Plug} title="Simple Plug & Print">
            Drop‑in integration with your print workflow. Generate <strong>unique variable QR codes</strong> per unit.
          </FeatureItem>
          <FeatureItem icon={Handshake} title="Value for your clients">
            Give brands authenticity, rewards, and customer data — making your print shop a strategic partner, not just
            a vendor.
          </FeatureItem>
        </div>
      </div>
    </section>
  )
}
