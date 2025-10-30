"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhyPartner } from "@/components/why-partner"
import { HowItWorks } from "@/components/how-it-works"
import { TechCompliance } from "@/components/tech-compliance"
import { ContactApply } from "@/components/contact-apply"
import { FAQs } from "@/components/faqs"
import { Footer } from "@/components/footer"
import { VideoModal } from "@/components/video-modal"

export default function Engage360Printers() {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <Hero onWatchDemo={() => setShowVideo(true)} />
      <WhyPartner />
      <HowItWorks />
      <TechCompliance />
      <ContactApply />
      <FAQs />
      <Footer />
      <VideoModal show={showVideo} onClose={() => setShowVideo(false)} />
    </div>
  )
}
