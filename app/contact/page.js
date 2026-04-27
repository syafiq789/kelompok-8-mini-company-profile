'use client'
import { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white flex items-center justify-center px-6 py-20">

      <div className="w-full max-w-2xl bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-10 shadow-xl">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-center mb-2">
          Contact <span className="text-emerald-400">Kami</span>
        </h1>

        <p className="text-center text-white/60 mb-8">
          Kirim pesan kepada kami untuk kerja sama atau pertanyaan.
        </p>

        {/* FORM */}
        <div className="space-y-4">

          {/* NAME */}
          <input
            placeholder="Nama Anda"
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:border-emerald-400"
          />

          {/* EMAIL */}
          <input
            placeholder="Email Anda"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:border-emerald-400"
          />

          {/* MESSAGE */}
          <textarea
            placeholder="Pesan Anda"
            rows={4}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:border-emerald-400"
          />

          {/* BUTTON */}
          <button className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 font-semibold transition">
            Kirim Pesan 🚀
          </button>

        </div>

        {/* PREVIEW */}
        <div className="mt-8 text-center text-white/60 text-sm">
          <p>Halo, <span className="text-white font-semibold">{name || '-'}</span></p>
          <p>Email: {email || '-'}</p>
        </div>

      </div>

    </div>
  )
}