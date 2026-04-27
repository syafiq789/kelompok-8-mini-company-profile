import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Syne, DM_Sans } from 'next/font/google'

const syne = Syne({ subsets: ['latin'], weight: ['400','600','700','800'], variable: '--font-syne' })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300','400','500'], variable: '--font-dm' })

export const metadata = {
  title: 'Mini Company Profile - Kelompok 8',
  description: 'Website company profile modern dan profesional',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-gray-800 antialiased font-sans">
        {/* Background Accent */}
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_60%)]" />

        {/* Navbar */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200 shadow-sm">
          <div className="max-w-6xl mx-auto px-6">
            <Navbar />
          </div>
        </header>

        {/* Main */}
        <main className="max-w-6xl mx-auto px-6 py-14 min-h-screen animate-fade-in">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-white/60 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <Footer />
          </div>
        </footer>
      </body>
    </html>
  )
}