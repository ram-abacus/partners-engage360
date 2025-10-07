import type React from "react"

interface PillProps {
  children: React.ReactNode
}

export function Pill({ children }: PillProps) {
  return (
    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-white/70 text-slate-800 ring-1 ring-black/5">
      {children}
    </span>
  )
}
