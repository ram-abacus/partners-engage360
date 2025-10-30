import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import CookieConsent from "@/components/cookiesConsent"

export const metadata: Metadata = {
  title: "Engage360 - Printing Partners Program",
  description: "Grow your print business with Engage360. Earn 30% commission on every QR code printed.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="https://campaign.basiq360.com/loyalty-management-system/images/fevicon.png" />
      </head>
      <body className="antialiased">
        {children}
        <CookieConsent />
        <GoogleTagManager gtmId="GTM-MM5PWB94" />
        <GoogleAnalytics gaId="G-M6HMK9JLLG" />
      </body>

    </html>
  )
}
