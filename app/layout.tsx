import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'

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
      <body className="antialiased">
        {children}
        <GoogleTagManager gtmId="GTM-MM5PWB94" />
        <GoogleAnalytics gaId="G-M6HMK9JLLG" />
      </body>

    </html>
  )
}
