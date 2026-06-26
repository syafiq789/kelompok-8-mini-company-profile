"use client"

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function DashboardPage() {
  const router = useRouter()
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"))
    if (savedUser) {
      setUserData(savedUser)
    }
  }, [])

  const fiturList = [
    {
      icon: "📚",
      title: "Pengajuan Judul",
      desc: "Ajukan judul skripsi dan tunggu konfirmasi pembimbing.",
      path: "/dashboard/pengajuan-judul",
    },
    {
      icon: "📝",
      title: "Upload Revisi",
      desc: "Unggah dokumen revisi dengan cepat dan aman.",
      path: "/dashboard/upload-revisi",
    },
    {
      icon: "📅",
      title: "Jadwal Bimbingan",
      desc: "Lihat jadwal konsultasi dan atur waktu dengan pembimbing.",
      path: "/dashboard/jadwal-bimbingan",
    },
    {
      icon: "💬",
      title: "Chat Konsultasi",
      desc: "Kirim pesan singkat ke pembimbing kapan saja.",
      path: "/dashboard/chat-konsultasi",
    },
    {
      icon: "📄",
      title: "Riwayat Bimbingan",
      desc: "Tinjau catatan bimbingan dan revisi sebelumnya.",
      path: "/dashboard/riwayat-bimbingan",
    },
    {
      icon: "🔔",
      title: "Notifikasi",
      desc: "Dapatkan pemberitahuan untuk tugas dan jadwal baru.",
      path: "/dashboard/notifikasi",
    },
  ]

  const handleLogout = () => {
    document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    router.push("/")
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.16),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_25%)]"></div>

      <header className="relative z-20 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-sky-300">Dashboard Mahasiswa</p>
            <h1 className="mt-1 text-xl font-semibold text-white">Portal Bimbingan Skripsi</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {userData && (
              <div className="rounded-2xl bg-slate-900/80 px-4 py-2 text-sm text-slate-200">
                Halo, <span className="font-semibold text-white">{userData.nama}</span>
              </div>
            )}
            <button
              onClick={handleLogout}
              className="rounded-2xl border border-rose-500/20 bg-rose-500/10 px-4 py-2 text-sm text-rose-200 transition hover:bg-rose-500/20"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <section className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="space-y-6">
            <p className="inline-flex rounded-full bg-sky-500/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-sky-300">
              Semua bimbingan dalam satu tempat
            </p>
            <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Kelola skripsi dan jadwal bimbingan dengan lebih mudah.
            </h2>
            <p className="max-w-xl text-base leading-8 text-slate-300">
              Dashboard ini memberikan ringkasan tugas, jadwal, dan progress agar Anda tidak ketinggalan perkembangan bimbingan skripsi.
            </p>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/40">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-900/80 p-6">
                <p className="text-sm text-slate-400">Judul Skripsi</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Dalam proses review</h3>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-6">
                <p className="text-sm text-slate-400">Revisi Terakhir</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Masuk 2 hari lalu</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-3">
          {fiturList.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() => router.push(item.path)}
              className="group rounded-[32px] border border-white/10 bg-slate-950/80 p-7 text-left transition hover:-translate-y-1 hover:border-sky-500/30"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-sky-500/10 text-2xl text-sky-300">
                {item.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-slate-400 leading-7">{item.desc}</p>
            </button>
          ))}
        </section>
      </main>
    </div>
  )
}
