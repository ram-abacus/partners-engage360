import { BRAND_ORANGE } from "@/lib/constants"

export function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="https://campaign.basiq360.com/partners-engage360/" className="flex items-center gap-3">
            <img
              src="https://cdn.prod.website-files.com/682583f9a957c5ef54e23095/6825c66c6004fd92ca718d0f_BASIQ.avif"
              alt="Basiq360 Logo"
              className="h-8 w-auto"
            />
            <div className="h-6 w-px bg-slate-200 hidden sm:block" />
            <span className="font-semibold hidden sm:block">Engage360 • Printing Partners</span>
          </a>
        </div>
        <a
          href="#apply"
          className="rounded-xl px-4 py-2 font-semibold text-white shadow"
          style={{ backgroundColor: BRAND_ORANGE }}
        >
          Join Program
        </a>
      </div>
    </header>
  )
}
