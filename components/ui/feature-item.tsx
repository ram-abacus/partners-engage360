import type React from "react"
import type { LucideIcon } from "lucide-react"
import { BRAND_BLUE } from "@/lib/constants"

interface FeatureItemProps {
  icon: LucideIcon
  title: string
  children: React.ReactNode
}

export function FeatureItem({ icon: Icon, title, children }: FeatureItemProps) {
  return (
    <div className="group rounded-2xl p-6 ring-1 ring-slate-200 hover:ring-slate-300 bg-white/80 backdrop-blur-sm transition-all shadow-sm hover:shadow-md">
      <div className="flex items-center gap-3 mb-3">
        <div className="rounded-xl p-2" style={{ backgroundColor: BRAND_BLUE + "10" }}>
          <Icon className="w-5 h-5" style={{ color: BRAND_BLUE }} />
        </div>
        <h4 className="font-semibold">{title}</h4>
      </div>
      <p className="text-sm text-slate-600 leading-6">{children}</p>
    </div>
  )
}
