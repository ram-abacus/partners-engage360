import { QrCode, UploadCloud, Shield } from "lucide-react"
import { FeatureItem } from "@/components/ui/feature-item"

export function TechCompliance() {
  return (
    <section className="py-12 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        <FeatureItem icon={QrCode} title="High‑density variable QR">
          Unique, secure codes per unit with anti‑duplication logic.
        </FeatureItem>
        <FeatureItem icon={UploadCloud} title="Templates & APIs">
          Upload CSVs or use REST APIs. Supports batch jobs and versioning.
        </FeatureItem>
        <FeatureItem icon={Shield} title="Security by design">
          Geo‑tag, OTP, and audit trails built for enterprise brands.
        </FeatureItem>
      </div>
    </section>
  )
}
