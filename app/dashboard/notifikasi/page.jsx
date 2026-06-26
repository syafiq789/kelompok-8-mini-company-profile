"use client"

import { useState } from "react"

export default function NotifikasiPage() {

  const [notifications, setNotifications] = useState([
    {
      title: "Revisi Terbaru",
      message: "Dosen telah memberikan revisi terbaru pada BAB 3 skripsi.",
      time: "10 Menit Lalu",
      status: "Baru",
      icon: "📄",
      color: "cyan"
    },
    {
      title: "Jadwal Bimbingan",
      message: "Jadwal bimbingan berikutnya pada 20 Mei 2026 pukul 10:00 WIB.",
      time: "30 Menit Lalu",
      status: "Reminder",
      icon: "📅",
      color: "yellow"
    },
    {
      title: "Pesan Baru",
      message: "Dosen pembimbing mengirim pesan baru di chat konsultasi.",
      time: "1 Jam Lalu",
      status: "Pesan",
      icon: "💬",
      color: "green"
    },
    {
      title: "Upload Berhasil",
      message: "File revisi proposal berhasil diupload ke sistem.",
      time: "Kemarin",
      status: "Sukses",
      icon: "✅",
      color: "blue"
    }
  ])

  const [selectedNotif, setSelectedNotif] = useState(null)

  return (
    <div className="min-h-screen bg-black text-white px-4 py-6">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8">

          <p className="text-cyan-400 text-xs tracking-[4px] font-semibold mb-2">
            SISTEM BIMBINGAN SKRIPSI
          </p>

          <h1 className="text-3xl font-bold mb-2">
            Notifikasi
          </h1>

          <p className="text-gray-400 text-sm">
            Seluruh aktivitas terbaru bimbingan skripsi akan muncul di sini.
          </p>

        </div>

        {/* Statistik */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 shadow-xl">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-400 text-xs mb-1">
                  Total Notifikasi
                </p>

                <h2 className="text-3xl font-bold">
                  {notifications.length}
                </h2>

              </div>

              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-2xl">
                🔔
              </div>

            </div>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 shadow-xl">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-400 text-xs mb-1">
                  Notifikasi Baru
                </p>

                <h2 className="text-3xl font-bold text-cyan-400">
                  2
                </h2>

              </div>

              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-2xl">
                ✨
              </div>

            </div>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 shadow-xl">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-400 text-xs mb-1">
                  Reminder Aktif
                </p>

                <h2 className="text-3xl font-bold text-yellow-400">
                  1
                </h2>

              </div>

              <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-2xl">
                ⏰
              </div>

            </div>

          </div>

        </div>

        {/* List Notifikasi */}
        <div className="space-y-5">

          {notifications.map((notif, index) => (

            <button
              key={index}
              onClick={() => setSelectedNotif(notif)}
              className="w-full text-left bg-zinc-900 border border-zinc-800 hover:border-cyan-500/40 hover:scale-[1.01] transition duration-300 rounded-3xl p-6 shadow-xl"
            >

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                {/* Left */}
                <div className="flex items-start gap-5">

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg
                      ${
                        notif.color === "cyan"
                          ? "bg-cyan-500/10 border border-cyan-500/20"
                          : notif.color === "yellow"
                          ? "bg-yellow-500/10 border border-yellow-500/20"
                          : notif.color === "green"
                          ? "bg-green-500/10 border border-green-500/20"
                          : "bg-blue-500/10 border border-blue-500/20"
                      }
                    `}
                  >
                    {notif.icon}
                  </div>

                  {/* Content */}
                  <div>

                    <h2 className="text-lg font-semibold mb-2">
                      {notif.title}
                    </h2>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {notif.message}
                    </p>

                    <div className="flex items-center gap-3 flex-wrap">

                      <div className="bg-black border border-zinc-800 px-4 py-2 rounded-xl text-xs text-gray-300">
                        🕒 {notif.time}
                      </div>

                    </div>

                  </div>

                </div>

                {/* Status */}
                <div>

                  <div
                    className={`px-5 py-3 rounded-2xl text-sm font-semibold
                      ${
                        notif.status === "Baru"
                          ? "bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
                          : notif.status === "Reminder"
                          ? "bg-yellow-500/10 border border-yellow-500/20 text-yellow-400"
                          : notif.status === "Pesan"
                          ? "bg-green-500/10 border border-green-500/20 text-green-400"
                          : "bg-blue-500/10 border border-blue-500/20 text-blue-400"
                      }
                    `}
                  >
                    {notif.status}
                  </div>

                </div>

              </div>

            </button>

          ))}

        </div>

        {/* Modal Detail */}
        {selectedNotif && (

          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 max-w-lg w-full shadow-2xl">

              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-5">

                <div>

                  <p className="text-cyan-400 text-xs tracking-[3px] font-semibold mb-2">
                    DETAIL NOTIFIKASI
                  </p>

                  <h2 className="text-2xl font-bold">
                    {selectedNotif.title}
                  </h2>

                </div>

                <button
                  onClick={() => setSelectedNotif(null)}
                  className="bg-black border border-zinc-700 hover:bg-zinc-800 w-10 h-10 rounded-xl transition duration-300"
                >
                  ✕
                </button>

              </div>

              {/* Content */}
              <div className="space-y-4">

                <div className="bg-black border border-zinc-800 rounded-2xl p-5">

                  <p className="text-gray-400 text-xs mb-2">
                    Pesan
                  </p>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    {selectedNotif.message}
                  </p>

                </div>

                <div className="grid grid-cols-2 gap-4">

                  <div className="bg-black border border-zinc-800 rounded-2xl p-4">

                    <p className="text-gray-400 text-xs mb-1">
                      Waktu
                    </p>

                    <h3 className="font-semibold text-sm">
                      {selectedNotif.time}
                    </h3>

                  </div>

                  <div className="bg-black border border-zinc-800 rounded-2xl p-4">

                    <p className="text-gray-400 text-xs mb-1">
                      Status
                    </p>

                    <h3 className="font-semibold text-sm">
                      {selectedNotif.status}
                    </h3>

                  </div>

                </div>

                {/* Button */}
                <button
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 transition duration-300 py-3 rounded-2xl font-semibold text-black"
                >
                  Tandai Sudah Dibaca
                </button>

              </div>

            </div>

          </div>

        )}

      </div>

    </div>
  )
}