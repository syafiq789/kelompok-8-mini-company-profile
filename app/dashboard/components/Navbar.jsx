"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Navbar() {

  const router = useRouter()

  const [showLogin, setShowLogin] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e) => {

    e.preventDefault()

    if (
      email === "admin@gmail.com" &&
      password === "123456"
    ) {

      document.cookie =
        "session=true; path=/"

      setShowLogin(false)

      router.push("/dashboard")

    } else {

      setError("Email atau password salah")

    }
  }

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-[999] bg-[#0B1220]/90 backdrop-blur-xl border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          {/* LOGO */}
          <h1 className="text-2xl font-bold text-white">
            Kelompok 8 Web Dev & UIUX 🚀
          </h1>

          {/* MENU */}
          <div className="flex items-center gap-8 text-white text-sm md:text-base">

            <a
              href="#home"
              className="hover:text-green-400 transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="hover:text-green-400 transition"
            >
              About
            </a>

            <a
              href="#services"
              className="hover:text-green-400 transition"
            >
              Services
            </a>

            <a
              href="#team"
              className="hover:text-green-400 transition"
            >
              Team
            </a>

            <a
              href="#contact"
              className="hover:text-green-400 transition"
            >
              Contact
            </a>

          </div>

        </div>

      </nav>

      {/* LOGIN MODAL */}
      {showLogin && (

        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 px-4">

          <div className="w-full max-w-md bg-[#111827] rounded-3xl border border-white/10 shadow-2xl p-8 text-white relative">

            {/* CLOSE */}
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>

            {/* TITLE */}
            <h2 className="text-4xl font-bold text-center mb-3">
              Login
            </h2>

            <p className="text-center text-gray-400 mb-8">
              Masuk ke Dashboard Admin
            </p>

            {/* ERROR */}
            {error && (
              <div className="bg-red-500/20 border border-red-500 text-red-300 p-3 rounded-xl mb-5 text-sm">
                {error}
              </div>
            )}

            {/* FORM */}
            <form
              onSubmit={handleLogin}
              className="space-y-5"
            >

              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 rounded-xl bg-white/10 border border-white/10 outline-none"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full p-4 rounded-xl bg-white/10 border border-white/10 outline-none"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

              <button
                type="submit"
                className="w-full bg-green-400 text-black py-4 rounded-xl font-bold hover:scale-105 transition"
              >
                Login Sekarang
              </button>

            </form>

          </div>

        </div>

      )}

    </>
  )
}