import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-10 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold text-blue-400">
        Kelompok 8 🚀
      </h1>

      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/team">Team</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}