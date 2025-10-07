interface StatProps {
  value: string
  label: string
}

export function Stat({ value, label }: StatProps) {
  return (
    <div className="flex flex-col items-start gap-1">
      <div className="text-3xl font-semibold">{value}</div>
      <div className="text-sm text-slate-600">{label}</div>
    </div>
  )
}
