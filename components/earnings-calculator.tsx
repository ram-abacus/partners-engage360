"use client"

import { useMemo, useState } from "react"
import { Calculator } from "lucide-react"
import { BRAND_BLUE } from "@/lib/constants"

export function EarningsCalculator() {
  const [volume, setVolume] = useState(50000)
  const unitPrice = 0.1 // $ per QR
  const commissionRate = 0.3 // 30%
  const earnings = useMemo(() => (volume || 0) * unitPrice * commissionRate, [volume])

  return (
    <div className="rounded-2xl p-6 ring-1 ring-slate-200 bg-white shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <Calculator className="w-5 h-5" style={{ color: BRAND_BLUE }} />
        <h4 className="font-semibold">Estimate your monthly earnings</h4>
      </div>
      <label className="text-sm text-slate-600">QR codes printed per month</label>
      <input
        type="number"
        min={0}
        step={1000}
        value={volume}
        onChange={(e) => setVolume(Number.parseInt(e.target.value || "0", 10))}
        className="mt-1 mb-3 w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2"
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
        <div className="rounded-xl p-4 ring-1 ring-slate-200 bg-slate-50">
          <div className="text-xs text-slate-600">Price/QR</div>
          <div className="text-lg font-semibold">${unitPrice.toFixed(2)}</div>
        </div>
        <div className="rounded-xl p-4 ring-1 ring-slate-200 bg-slate-50">
          <div className="text-xs text-slate-600">Commission</div>
          <div className="text-lg font-semibold">{(commissionRate * 100).toFixed(0)}%</div>
        </div>
        <div className="rounded-xl p-4 ring-1 ring-slate-200 bg-slate-50">
          <div className="text-xs text-slate-600">Your earnings</div>
          <div className="text-lg font-semibold">
            $
            {earnings.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
            /mo
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        *Calculation: volume × ${unitPrice.toFixed(2)} × {commissionRate * 100}%
      </p>
    </div>
  )
}
