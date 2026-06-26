"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function LoginMahasiswaPage() {

  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e) => {

    e.preventDefault()

    const savedUser = JSON.parse(localStorage.getItem("user"))

    if (
      savedUser &&
      email === savedUser.email &&
      password === savedUser.password
    ) {

      alert("Login berhasil!")

      router.push("/dashboard")

    } else {

      alert("Email atau Password salah!")

    }
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] flex items-center justify-center px-6 py-10 overflow-hidden relative">

      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-indigo-500/20 blur-[120px] rounded-full"></div>

      {/* CARD */}
      <div className="relative z-10 w-full max-w-5xl grid lg:grid-cols-2 overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl">

        {/* LEFT */}
        <div className="hidden lg:flex flex-col justify-center p-12 bg-gradient-to-br from-blue-600/20 to-indigo-600/10 border-r border-white/10">

          <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-4xl shadow-lg shadow-blue-500/30 mb-8">
            🎓
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight">
            Sistem Manajemen
            <br />
            Bimbingan Skripsi
          </h1>

          <p className="mt-6 text-slate-300 leading-8 text-sm">
            Platform digital modern untuk membantu mahasiswa
            mengelola proses bimbingan skripsi, revisi,
            pengajuan judul, konsultasi dosen,
            hingga monitoring progress secara realtime.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <h3 className="text-white font-semibold mb-2">
                📚 Pengajuan Judul
              </h3>

              <p className="text-xs text-slate-400 leading-6">
                Ajukan judul skripsi secara online dengan mudah.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <h3 className="text-white font-semibold mb-2">
                💬 Konsultasi
              </h3>

              <p className="text-xs text-slate-400 leading-6">
                Chat langsung dengan dosen pembimbing.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <h3 className="text-white font-semibold mb-2">
                📅 Jadwal
              </h3>

              <p className="text-xs text-slate-400 leading-6">
                Atur jadwal bimbingan lebih terstruktur.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <h3 className="text-white font-semibold mb-2">
                📊 Monitoring
              </h3>

              <p className="text-xs text-slate-400 leading-6">
                Pantau progress skripsi secara realtime.
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="p-8 md:p-12">

          <div className="flex items-center gap-4 mb-10">

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-3xl shadow-lg shadow-blue-500/30">
              👨‍🎓
            </div>

            <div>

              <h2 className="text-3xl font-bold text-white">
                Login Mahasiswa
              </h2>

              <p className="text-slate-400 text-sm mt-1">
                Silahkan login menggunakan akun mahasiswa.
              </p>

            </div>

          </div>

          <form
            onSubmit={handleLogin}
            className="space-y-6"
          >

            {/* EMAIL */}
            <div>

              <label className="block text-sm text-slate-300 mb-3">
                Email Mahasiswa
              </label>

              <input
                type="email"
                placeholder="Masukkan email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 rounded-2xl bg-black/20 border border-white/10 text-white outline-none focus:border-blue-500 transition duration-300"
              />

            </div>

            {/* PASSWORD */}
            <div>

              <label className="block text-sm text-slate-300 mb-3">
                Password
              </label>

              <input
                type="password"
                placeholder="Masukkan password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 rounded-2xl bg-black/20 border border-white/10 text-white outline-none focus:border-blue-500 transition duration-300"
              />

            </div>

            {/* OPTION */}
            <div className="flex items-center justify-between text-sm">

              <label className="flex items-center gap-2 text-slate-400">

                <input type="checkbox" />

                Ingat Saya

              </label>

              <button
                type="button"
                className="text-blue-400 hover:text-blue-300 transition duration-300"
              >
                Lupa Password?
              </button>

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold hover:scale-[1.01] transition duration-300 shadow-xl shadow-blue-500/20"
            >
              Login Sekarang
            </button>

          </form>

          {/* REGISTER */}
          <div className="mt-10 border-t border-white/10 pt-6">

            <p className="text-center text-sm text-slate-400">
              Belum punya akun?

              <button
                onClick={() => router.push("/register")}
                className="text-blue-400 ml-2 hover:text-blue-300 transition duration-300"
              >
                Register Disini
              </button>

            </p>

          </div>

        </div>

      </div>

    </div>
  )
}