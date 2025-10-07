export function Footer() {
  return (
    <footer className="py-8 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src="https://cdn.prod.website-files.com/682583f9a957c5ef54e23095/6825c66c6004fd92ca718d0f_BASIQ.avif"
            alt="Basiq360 Logo"
            className="h-7 w-auto"
          />
          <span className="text-sm text-slate-600">© {new Date().getFullYear()} Basiq360. All rights reserved.</span>
        </div>
        <div className="text-sm text-slate-600">
          <a
            className="underline"
            href="https://campaign.basiq360.com/partners-engage360/"
            target="_blank"
            rel="noreferrer"
          >
            campaign.basiq360.com/partners-engage360
          </a>
        </div>
      </div>
    </footer>
  )
}
