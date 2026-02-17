import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Nikita Medvetskyi | SMM & AI",
  description: "SMM, AI-Agents, Content Creator, Photo & Video Editing - Portfolio of Nikita Medvetskyi",
}

export const viewport: Viewport = {
  themeColor: "#1a1a2e",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <div className="bg-image" />
        <div className="bg-overlay" />
        <div className="content-wrapper">
          {children}
        </div>
      </body>
    </html>
  )
}
