"use client"

import { useState } from "react"

export default function RiwayatBimbinganPage() {

  const [selectedHistory, setSelectedHistory] = useState(null)

  const histories = [
    {
      title: "Revisi BAB 1 Selesai",
      date: "12 Mei 2026",
      time: "09:30 WIB",
      status: "Selesai",
      desc: "Perbaikan latar belakang dan rumusan masalah telah disetujui dosen.",
      detail: "Dosen pembimbing menyetujui revisi BAB 1 dan meminta melanjutkan BAB 2."
    },
    {
      title: "Konsultasi dengan Dosen Pembimbing",
      date: "10 Mei 2026",
      time: "13:00 WIB",
      status: "Selesai",
      desc: "Diskusi mengenai revisi metodologi penelitian.",
      detail: "Mahasiswa diminta memperbaiki diagram alur penelitian."
    },
    {
      title: "Upload Revisi Proposal",
      date: "08 Mei 2026",
      time: "08:15 WIB",
      status: "Diperiksa",
      desc: "File revisi proposal berhasil dikirim ke dosen pembimbing.",
      detail: "Proposal sedang diperiksa dan menunggu feedback dosen."
    },
    {
      title: "Bimbingan BAB 3",
      date: "05 Mei 2026",
      time: "10:00 WIB",
      status: "Pending",
      desc: "Menunggu persetujuan jadwal bimbingan berikutnya.",
      detail: "Jadwal masih menunggu konfirmasi dari dosen pembimbing."
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white px-4 py-6">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8">

          <p className="text-cyan-400 text-xs tracking-[4px] font-semibold mb-2">
            SISTEM BIMBINGAN SKRIPSI
          </p>

          <h1 className="text-3xl font-bold mb-2">
            Riwayat Bimbingan
          </h1>

          <p className="text-gray-400 text-sm">
            Klik setiap riwayat untuk melihat detail lengkap bimbingan.
          </p>

        </div>

        {/* Statistik */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

          <button className="bg-zinc-900 border border-zinc-800 hover:border-cyan-500/40 rounded-3xl p-5 transition duration-300">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-400 text-xs mb-1">
                  Total Bimbingan
                </p>

                <h2 className="text-3xl font-bold">
                  12
                </h2>

              </div>

              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-2xl">
                📚
              </div>

            </div>

          </button>

          <button className="bg-zinc-900 border border-zinc-800 hover:border-green-500/40 rounded-3xl p-5 transition duration-300">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-400 text-xs mb-1">
                  Revisi Selesai
                </p>

                <h2 className="text-3xl font-bold text-green-400">
                  8
                </h2>

              </div>

              <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-2xl">
                ✅
              </div>

            </div>

          </button>

          <button className="bg-zinc-900 border border-zinc-800 hover:border-yellow-500/40 rounded-3xl p-5 transition duration-300">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-400 text-xs mb-1">
                  Menunggu Review
                </p>

                <h2 className="text-3xl font-bold text-yellow-400">
                  4
                </h2>

              </div>

              <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-2xl">
                ⏳
              </div>

            </div>

          </button>

        </div>

        {/* Riwayat */}
        <div className="space-y-5">

          {histories.map((item, index) => (

            <button
              key={index}
              onClick={() => setSelectedHistory(item)}
              className="w-full text-left bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-cyan-500/40 hover:scale-[1.01] transition duration-300 shadow-xl"
            >

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                {/* Left */}
                <div className="flex items-start gap-5">

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-3xl shadow-lg">
                    📄
                  </div>

                  {/* Content */}
                  <div>

                    <h2 className="text-lg font-semibold mb-2">
                      {item.title}
                    </h2>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    <div className="flex flex-wrap gap-3 text-xs">

                      <div className="bg-black border border-zinc-800 px-4 py-2 rounded-xl text-gray-300">
                        📅 {item.date}
                      </div>

                      <div className="bg-black border border-zinc-800 px-4 py-2 rounded-xl text-gray-300">
                        ⏰ {item.time}
                      </div>

                    </div>

                  </div>

                </div>

                {/* Status */}
                <div>

                  <div
                    className={`px-5 py-3 rounded-2xl text-sm font-semibold text-center
                      ${
                        item.status === "Selesai"
                          ? "bg-green-500/10 border border-green-500/20 text-green-400"
                          : item.status === "Diperiksa"
                          ? "bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
                          : "bg-yellow-500/10 border border-yellow-500/20 text-yellow-400"
                      }
                    `}
                  >
                    {item.status}
                  </div>

                </div>

              </div>

            </button>

          ))}

        </div>

        {/* Modal Detail */}
        {selectedHistory && (

          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 max-w-lg w-full shadow-2xl">

              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-5">

                <div>

                  <p className="text-cyan-400 text-xs tracking-[3px] font-semibold mb-2">
                    DETAIL BIMBINGAN
                  </p>

                  <h2 className="text-2xl font-bold">
                    {selectedHistory.title}
                  </h2>

                </div>

                <button
                  onClick={() => setSelectedHistory(null)}
                  className="bg-black border border-zinc-700 hover:bg-zinc-800 w-10 h-10 rounded-xl transition duration-300"
                >
                  ✕
                </button>

              </div>

              {/* Content */}
              <div className="space-y-4">

                <div className="bg-black border border-zinc-800 rounded-2xl p-4">

                  <p className="text-gray-400 text-xs mb-1">
                    Deskripsi
                  </p>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    {selectedHistory.detail}
                  </p>

                </div>

                <div className="grid grid-cols-2 gap-4">

                  <div className="bg-black border border-zinc-800 rounded-2xl p-4">

                    <p className="text-gray-400 text-xs mb-1">
                      Tanggal
                    </p>

                    <h3 className="font-semibold text-sm">
                      {selectedHistory.date}
                    </h3>

                  </div>

                  <div className="bg-black border border-zinc-800 rounded-2xl p-4">

                    <p className="text-gray-400 text-xs mb-1">
                      Waktu
                    </p>

                    <h3 className="font-semibold text-sm">
                      {selectedHistory.time}
                    </h3>

                  </div>

                </div>

                <div className="bg-black border border-zinc-800 rounded-2xl p-4">

                  <p className="text-gray-400 text-xs mb-2">
                    Status
                  </p>

                  <div
                    className={`inline-block px-4 py-2 rounded-xl text-sm font-semibold
                      ${
                        selectedHistory.status === "Selesai"
                          ? "bg-green-500/10 border border-green-500/20 text-green-400"
                          : selectedHistory.status === "Diperiksa"
                          ? "bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
                          : "bg-yellow-500/10 border border-yellow-500/20 text-yellow-400"
                      }
                    `}
                  >
                    {selectedHistory.status}
                  </div>

                </div>

              </div>

            </div>

          </div>

        )}

      </div>

    </div>
  )
}