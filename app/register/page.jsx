"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function RegisterPage() {

  const router = useRouter()

  const [form, setForm] = useState({
    nama: "",
    nim: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const [error, setError] = useState("")

  const handleSubmit = (e) => {

    e.preventDefault()

    if (
      !form.nama ||
      !form.nim ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("Semua field wajib diisi")
      return
    }

    if (form.password !== form.confirmPassword) {
      setError("Password tidak sama")
      return
    }

    // simpan ke localStorage
    localStorage.setItem("user", JSON.stringify(form))

    alert("Register berhasil!")

    router.push("/login")
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-6">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-lg"
      >

        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Register
        </h1>

        {
          error && (
            <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-4">
              {error}
            </div>
          )
        }

        <input
          type="text"
          placeholder="Nama Lengkap"
          className="w-full border p-3 rounded-lg mb-4"
          onChange={(e) =>
            setForm({ ...form, nama: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="NIM"
          className="w-full border p-3 rounded-lg mb-4"
          onChange={(e) =>
            setForm({ ...form, nim: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg mb-4"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-4"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Konfirmasi Password"
          className="w-full border p-3 rounded-lg mb-6"
          onChange={(e) =>
            setForm({
              ...form,
              confirmPassword: e.target.value
            })
          }
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
        >
          Register
        </button>

        <p className="text-center mt-5">
          Sudah punya akun?

          <Link
            href="/login"
            className="text-blue-600 ml-2"
          >
            Login
          </Link>

        </p>

      </form>
    </div>
  )
}