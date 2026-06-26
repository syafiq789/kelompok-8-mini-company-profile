"use client"

import { useState } from "react"

export default function JadwalBimbinganPage() {

  const [selectedDate, setSelectedDate] = useState(9)
  const [selectedTime, setSelectedTime] = useState("10:00")
  const [reminderActive, setReminderActive] = useState(false)

  const dates = Array.from({ length: 31 }, (_, i) => i + 1)

  const handleReminder = () => {
    setReminderActive(true)
    alert("Reminder berhasil diaktifkan!")
  }

  return (
    <div className="min-h-screen bg-black text-white px-4 py-6">

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-8">

          <p className="text-cyan-400 text-xs tracking-[4px] font-semibold mb-2">
            SISTEM BIMBINGAN SKRIPSI
          </p>

          <h1 className="text-3xl font-bold mb-2">
            Jadwal Bimbingan
          </h1>

          <p className="text-gray-400 text-sm">
            Atur tanggal dan jam bimbingan dengan mudah.
          </p>

        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT */}
          <div className="lg:col-span-2">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">

              {/* Banner */}
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/10 border-b border-zinc-800 p-6">

                <div className="flex items-center gap-5">

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-3xl shadow-lg">
                    📅
                  </div>

                  <div>

                    <h2 className="text-2xl font-bold mb-1">
                      Jadwal Bimbingan
                    </h2>

                    <p className="text-gray-400 text-sm">
                      Pilih tanggal dan ubah jam bimbingan sesuai kebutuhan.
                    </p>

                  </div>

                </div>

              </div>

              {/* Content */}
              <div className="p-6">

                {/* Schedule */}
                <div className="bg-black border border-zinc-800 rounded-3xl p-6">

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                    <div className="flex items-start gap-4">

                      <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-2xl">
                        ⏰
                      </div>

                      <div>

                        <p className="text-gray-400 text-xs mb-1">
                          Jadwal Dipilih
                        </p>

                        <h3 className="text-xl font-semibold mb-3">
                          {selectedDate} Mei 2026
                        </h3>

                        <div className="flex flex-wrap gap-3">

                          <div className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl text-sm text-gray-300">
                            🕙 {selectedTime} WIB
                          </div>

                          <div className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl text-sm text-gray-300">
                            👨‍🏫 Dosen Pembimbing
                          </div>

                        </div>

                      </div>

                    </div>

                    {/* Status */}
                    <div className="bg-green-500/10 border border-green-500/20 px-5 py-3 rounded-2xl text-center">

                      <p className="text-green-400 text-xs font-semibold mb-1">
                        STATUS
                      </p>

                      <h3 className="text-white font-bold">
                        Aktif
                      </h3>

                    </div>

                  </div>

                </div>

                {/* Change Time */}
                <div className="mt-6 bg-zinc-950 border border-zinc-800 rounded-3xl p-5">

                  <div className="flex items-center justify-between flex-wrap gap-4">

                    <div>

                      <p className="text-cyan-400 text-xs font-semibold tracking-wide mb-1">
                        UBAH JAM BIMBINGAN
                      </p>

                      <h3 className="text-white font-semibold text-base">
                        Pilih Jam Bimbingan
                      </h3>

                    </div>

                    {/* Time Input */}
                    <input
                      type="time"
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="bg-black border border-zinc-700 text-white px-4 py-2 rounded-xl outline-none focus:border-cyan-500"
                    />

                  </div>

                </div>

                {/* Detail Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

                  <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5">

                    <div className="text-3xl mb-3">
                      📍
                    </div>

                    <p className="text-gray-400 text-xs mb-1">
                      Lokasi
                    </p>

                    <h3 className="font-semibold">
                      Ruang Dosen 2
                    </h3>

                  </div>

                  <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5">

                    <div className="text-3xl mb-3">
                      📝
                    </div>

                    <p className="text-gray-400 text-xs mb-1">
                      Topik
                    </p>

                    <h3 className="font-semibold">
                      Revisi BAB 3
                    </h3>

                  </div>

                  <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5">

                    <div className="text-3xl mb-3">
                      🔔
                    </div>

                    <p className="text-gray-400 text-xs mb-1">
                      Reminder
                    </p>

                    <h3 className="font-semibold">
                      Hadir 30 Menit Sebelum
                    </h3>

                  </div>

                </div>

                {/* Reminder */}
                <div className="mt-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-3xl p-5">

                  <div className="flex items-start gap-4">

                    <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-2xl">
                      🔔
                    </div>

                    <div className="flex-1">

                      <div className="flex items-center justify-between flex-wrap gap-3 mb-3">

                        <div>

                          <p className="text-yellow-400 text-xs font-semibold tracking-wide mb-1">
                            REMINDER BIMBINGAN
                          </p>

                          <h3 className="text-white font-semibold text-base">
                            Jadwal Bimbingan Akan Dimulai
                          </h3>

                        </div>

                        <div className="bg-yellow-500/10 border border-yellow-500/20 px-4 py-2 rounded-xl">
                          <p className="text-yellow-300 text-xs font-medium">
                            30 Menit Lagi
                          </p>
                        </div>

                      </div>

                      <div className="space-y-2 text-sm text-gray-300">

                        <p>
                          📅 <span className="text-white">Tanggal:</span> {selectedDate} Mei 2026
                        </p>

                        <p>
                          ⏰ <span className="text-white">Waktu:</span> {selectedTime} WIB
                        </p>

                        <p>
                          📍 <span className="text-white">Lokasi:</span> Ruang Dosen 2
                        </p>

                      </div>

                      {/* Button */}
                      <div className="flex gap-3 mt-5">

                        <button
                          onClick={handleReminder}
                          className="bg-yellow-500 hover:bg-yellow-400 transition duration-300 text-black text-xs font-semibold px-4 py-2 rounded-xl"
                        >
                          Aktifkan Reminder
                        </button>

                      </div>

                      {/* Status */}
                      {reminderActive && (
                        <div className="mt-4 bg-green-500/10 border border-green-500/20 rounded-2xl p-3">

                          <p className="text-green-400 text-xs font-medium">
                            ✅ Reminder berhasil diaktifkan
                          </p>

                        </div>
                      )}

                    </div>

                  </div>

                </div>

              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 shadow-2xl">

              {/* Header */}
              <div className="flex items-center justify-between mb-5">

                <h2 className="font-bold text-lg">
                  📆 Kalender
                </h2>

                <p className="text-cyan-400 text-sm">
                  Mei 2026
                </p>

              </div>

              {/* Days */}
              <div className="grid grid-cols-7 gap-2 text-center text-xs mb-3 text-gray-500">

                <p>Min</p>
                <p>Sen</p>
                <p>Sel</p>
                <p>Rab</p>
                <p>Kam</p>
                <p>Jum</p>
                <p>Sab</p>

              </div>

              {/* Dates */}
              <div className="grid grid-cols-7 gap-2">

                {dates.map((date) => (

                  <button
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={`py-2 rounded-xl text-sm transition duration-300
                      ${
                        selectedDate === date
                          ? "bg-cyan-500 text-black font-bold shadow-lg"
                          : "bg-zinc-950 border border-zinc-800 text-gray-300 hover:bg-cyan-500/20"
                      }
                    `}
                  >
                    {date}
                  </button>

                ))}

              </div>

              {/* Bottom Info */}
              <div className="mt-5 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-4">

                <p className="text-cyan-400 text-xs mb-1">
                  Jadwal Dipilih
                </p>

                <h3 className="font-semibold text-sm">
                  {selectedDate} Mei 2026
                </h3>

                <p className="text-gray-400 text-xs mt-1">
                  {selectedTime} WIB - Ruang Dosen 2
                </p>

              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  )
}