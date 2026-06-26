"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {

  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLogin = (e) => {

    e.preventDefault()

    const userData = localStorage.getItem("user")

    if (!userData) {
      alert("Akun belum terdaftar")
      return
    }

    const user = JSON.parse(userData)

    if (
      email === user.email &&
      password === user.password
    ) {

      alert("Login berhasil!")

      router.push("/LoginMahasiswaPage")

    } else {

      alert("Email atau Password salah!")

    }
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-[400px]"
      >

        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
        >
          Login
        </button>

      </form>

    </div>
  )
}