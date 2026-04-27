'use client'
import { useState } from 'react'

export default function Contact() {
  // State untuk menyimpan inputan user
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  
  // State baru untuk mengatur munculnya notifikasi sukses
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Fungsi yang dijalankan saat tombol Submit diklik
  const handleSubmit = (e) => {
    e.preventDefault() // Mencegah browser me-reload halaman

    // Validasi sederhana: pastikan tidak ada yang kosong
    if (!name || !email || !message) {
      alert("Harap isi nama, email, dan pesan Anda terlebih dahulu!")
      return
    }

    // Mengaktifkan status sukses (memunculkan notifikasi)
    setIsSubmitted(true)

    // Mengosongkan form kembali
    setName('')
    setEmail('')
    setMessage('')

    // Opsional: Menghilangkan notifikasi sukses setelah 5 detik
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

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

        {/* NOTIFIKASI SUKSES */}
        {isSubmitted && (
          <div className="mb-6 p-4 bg-emerald-500/20 border border-emerald-500/50 rounded-xl text-emerald-300 text-center font-medium animate-fade-in">
            Pesan telah dikirim, harap menunggu email balasan.
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* NAME */}
          <input
            type="text"
            value={name}
            placeholder="Nama Anda"
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:border-emerald-400 transition"
          />

          {/* EMAIL */}
          <input
            type="email"
            value={email}
            placeholder="Email Anda"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:border-emerald-400 transition"
          />

          {/* MESSAGE */}
          <textarea
            value={message}
            placeholder="Pesan Anda"
            rows={4}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:border-emerald-400 transition"
          />

          {/* BUTTON */}
          <button type="submit" className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 font-semibold transition active:scale-95">
            Kirim Pesan 🚀
          </button>

        </form>

        {/* PREVIEW (Disembunyikan jika pesan sudah terkirim) */}
        {!isSubmitted && (
          <div className="mt-8 text-center text-white/60 text-sm">
            <p>Halo, <span className="text-white font-semibold">{name || '-'}</span></p>
            <p>Email: {email || '-'}</p>
          </div>
        )}

      </div>

    </div>
  )
}