"use client"

import { useState } from "react"

export default function ChatKonsultasiPage() {

  const [chat, setChat] = useState("")
  const [selectedDate, setSelectedDate] = useState(9)
  const [selectedTime, setSelectedTime] = useState("10:00")
  const [fileName, setFileName] = useState("")

  const dates = Array.from({ length: 31 }, (_, i) => i + 1)

  const [messages, setMessages] = useState([
    {
      sender: "dosen",
      text: "Silahkan kirim revisi terbaru BAB 3 untuk diperiksa.",
      time: "09:10"
    },
    {
      sender: "mahasiswa",
      text: "Baik pak, revisi akan saya kirim hari ini.",
      time: "09:15"
    }
  ])

  const handleSend = () => {

    if (!chat.trim()) {
      alert("Pesan tidak boleh kosong!")
      return
    }

    const newMessage = {
      sender: "mahasiswa",
      text: chat,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    }

    setMessages([...messages, newMessage])
    setChat("")

    alert("Pesan terkirim!")
  }

  const handleFile = (e) => {

    const file = e.target.files[0]

    if (file) {
      setFileName(file.name)
      alert(`File ${file.name} berhasil dipilih!`)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white px-4 py-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">

          <p className="text-cyan-400 text-xs tracking-[4px] font-semibold mb-2">
            SISTEM BIMBINGAN SKRIPSI
          </p>

          <h1 className="text-3xl font-bold mb-2">
            Chat Konsultasi
          </h1>

          <p className="text-gray-400 text-sm">
            Chat konsultasi yang sudah terhubung dengan jadwal bimbingan.
          </p>

        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* LEFT SIDEBAR */}
          <div className="space-y-6">

            {/* Profile */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 shadow-2xl">

              <h2 className="text-lg font-semibold mb-5">
                👨‍🏫 Dosen Pembimbing
              </h2>

              <div className="bg-black border border-zinc-800 rounded-2xl p-4">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-2xl shadow-lg">
                    👨‍🏫
                  </div>

                  <div>

                    <h3 className="font-semibold">
                      Dosen Pembimbing
                    </h3>

                    <p className="text-green-400 text-xs mt-1">
                      ● Online
                    </p>

                  </div>

                </div>

              </div>

              {/* Jadwal */}
              <div className="mt-5 bg-zinc-950 border border-zinc-800 rounded-2xl p-4">

                <p className="text-cyan-400 text-xs mb-2 font-semibold tracking-wide">
                  JADWAL TERHUBUNG
                </p>

                <div className="space-y-3 text-sm text-gray-300">

                  <p>
                    📅 {selectedDate} Mei 2026
                  </p>

                  <p>
                    ⏰ {selectedTime} WIB
                  </p>

                  <p>
                    📍 Ruang Dosen 2
                  </p>

                </div>

              </div>

            </div>

            {/* Calendar */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 shadow-2xl">

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

              {/* Jam */}
              <div className="mt-5">

                <p className="text-cyan-400 text-xs font-semibold tracking-wide mb-3">
                  UBAH JAM BIMBINGAN
                </p>

                <input
                  type="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full bg-black border border-zinc-700 text-white px-4 py-3 rounded-2xl outline-none focus:border-cyan-500"
                />

              </div>

            </div>

          </div>

          {/* CHAT AREA */}
          <div className="lg:col-span-3 bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden">

            {/* Header */}
            <div className="border-b border-zinc-800 bg-gradient-to-r from-cyan-500/10 to-blue-500/5 p-5">

              <div className="flex items-center justify-between flex-wrap gap-4">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-2xl">
                    💬
                  </div>

                  <div>

                    <h2 className="font-semibold text-lg">
                      Konsultasi Skripsi
                    </h2>

                    <p className="text-gray-400 text-sm">
                      Chat aktif dengan dosen pembimbing
                    </p>

                  </div>

                </div>

                <div className="bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-xl">

                  <p className="text-green-400 text-xs font-medium">
                    ● Online
                  </p>

                </div>

              </div>

            </div>

            {/* Messages */}
            <div className="h-[450px] overflow-y-auto p-5 space-y-5 bg-black">

              {messages.map((msg, index) => (

                <div
                  key={index}
                  className={`flex ${
                    msg.sender === "mahasiswa"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >

                  <div
                    className={`max-w-[80%] rounded-3xl px-5 py-4 shadow-lg
                      ${
                        msg.sender === "mahasiswa"
                          ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-black"
                          : "bg-zinc-900 border border-zinc-800 text-white"
                      }
                    `}
                  >

                    <p className="text-sm leading-relaxed">
                      {msg.text}
                    </p>

                    <p
                      className={`text-[11px] mt-2 text-right
                        ${
                          msg.sender === "mahasiswa"
                            ? "text-black/70"
                            : "text-gray-500"
                        }
                      `}
                    >
                      {msg.time}
                    </p>

                  </div>

                </div>

              ))}

            </div>

            {/* Input */}
            <div className="border-t border-zinc-800 p-5 bg-zinc-950">

              <div className="flex items-end gap-4">

                {/* Textarea */}
                <textarea
                  value={chat}
                  onChange={(e) => setChat(e.target.value)}
                  placeholder="Ketik pesan konsultasi..."
                  className="flex-1 h-20 resize-none bg-black border border-zinc-800 focus:border-cyan-500 outline-none rounded-2xl px-4 py-3 text-sm text-white"
                />

                {/* Send */}
                <button
                  onClick={handleSend}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 transition duration-300 px-6 py-4 rounded-2xl font-semibold text-black shadow-lg"
                >
                  🚀
                </button>

              </div>

              {/* Bottom */}
              <div className="flex items-center justify-between flex-wrap gap-3 mt-4">

                {/* Upload */}
                <div>

                  <label
                    htmlFor="fileUpload"
                    className="cursor-pointer bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 px-4 py-2 rounded-xl text-xs text-gray-300 transition duration-300"
                  >
                    📎 Lampiran
                  </label>

                  <input
                    id="fileUpload"
                    type="file"
                    onChange={handleFile}
                    className="hidden"
                  />

                </div>

                {/* File Name */}
                {fileName && (
                  <p className="text-cyan-400 text-xs">
                    File: {fileName}
                  </p>
                )}

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}