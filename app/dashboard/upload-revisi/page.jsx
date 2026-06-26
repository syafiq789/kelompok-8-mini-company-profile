"use client"

import { useState } from "react"

export default function UploadRevisiPage() {
  const [fileName, setFileName] = useState("")
  const [isUploaded, setIsUploaded] = useState(false)

  const handleFileChange = (e) => {
    const file = e.target.files[0]

    if (file) {
      setFileName(file.name)
      setIsUploaded(false)
    }
  }

  const handleUpload = () => {
    if (!fileName) {
      alert("Silahkan pilih file revisi terlebih dahulu!")
      return
    }

    setIsUploaded(true)
    alert("File revisi berhasil diupload!")
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-6">

      {/* Main Card */}
      <div className="w-full max-w-3xl bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="border-b border-zinc-800 px-6 py-5">

          <p className="text-cyan-400 text-xs font-semibold tracking-widest mb-2">
            SISTEM BIMBINGAN SKRIPSI
          </p>

          <h1 className="text-2xl font-bold mb-1">
            Upload Revisi Skripsi
          </h1>

          <p className="text-gray-400 text-sm">
            Upload file revisi terbaru untuk diperiksa dosen pembimbing.
          </p>

        </div>

        {/* Content */}
        <div className="p-6">

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-7">

            {/* Card 1 */}
            <div className="relative overflow-hidden bg-gradient-to-br from-cyan-500/20 to-cyan-700/10 border border-cyan-500/20 rounded-3xl p-5 hover:-translate-y-1 transition duration-300">

              <div className="absolute -top-5 -right-5 w-20 h-20 bg-cyan-400/10 rounded-full blur-2xl"></div>

              <div className="relative z-10">

                <div className="w-12 h-12 rounded-2xl bg-cyan-500 flex items-center justify-center text-2xl shadow-lg mb-4">
                  📁
                </div>

                <p className="text-gray-400 text-xs mb-1">
                  Format File
                </p>

                <h3 className="text-white font-semibold text-base">
                  PDF / DOCX
                </h3>

              </div>
            </div>

            {/* Card 2 */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-500/20 to-blue-700/10 border border-blue-500/20 rounded-3xl p-5 hover:-translate-y-1 transition duration-300">

              <div className="absolute -top-5 -right-5 w-20 h-20 bg-blue-400/10 rounded-full blur-2xl"></div>

              <div className="relative z-10">

                <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center text-2xl shadow-lg mb-4">
                  ⚡
                </div>

                <p className="text-gray-400 text-xs mb-1">
                  Maksimal Upload
                </p>

                <h3 className="text-white font-semibold text-base">
                  10 MB
                </h3>

              </div>
            </div>

            {/* Card 3 */}
            <div className="relative overflow-hidden bg-gradient-to-br from-indigo-500/20 to-indigo-700/10 border border-indigo-500/20 rounded-3xl p-5 hover:-translate-y-1 transition duration-300">

              <div className="absolute -top-5 -right-5 w-20 h-20 bg-indigo-400/10 rounded-full blur-2xl"></div>

              <div className="relative z-10">

                <div className="w-12 h-12 rounded-2xl bg-indigo-500 flex items-center justify-center text-2xl shadow-lg mb-4">
                  🔒
                </div>

                <p className="text-gray-400 text-xs mb-1">
                  Keamanan
                </p>

                <h3 className="text-white font-semibold text-base">
                  Data Aman
                </h3>

              </div>
            </div>

          </div>

          {/* Upload Area */}
          <div className="bg-zinc-950 border border-dashed border-cyan-500/40 rounded-3xl p-8 text-center">

            <div className="text-5xl mb-4">
              ⬆️
            </div>

            <h2 className="text-xl font-bold mb-2">
              Pilih File Revisi
            </h2>

            <p className="text-gray-400 text-sm mb-6">
              Klik tombol di bawah untuk memilih file revisi
            </p>

            {/* Button File */}
            <label className="cursor-pointer inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 transition duration-300 px-6 py-3 rounded-xl text-sm font-semibold shadow-lg">

              📂 Pilih File

              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />

            </label>

            {/* File Name */}
            {fileName && (
              <div className="mt-5 bg-zinc-900 border border-zinc-800 rounded-2xl p-4">

                <p className="text-gray-400 text-xs mb-1">
                  File Dipilih
                </p>

                <p className="text-cyan-400 text-sm font-medium break-all">
                  {fileName}
                </p>

              </div>
            )}

          </div>

          {/* Notes */}
          <div className="mt-6 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-4">

            <h3 className="text-yellow-400 font-semibold text-sm mb-3">
              ⚠️ Catatan
            </h3>

            <ul className="space-y-2 text-gray-300 text-xs">
              <li>• Pastikan file revisi sudah benar.</li>
              <li>• Gunakan nama file yang rapi.</li>
              <li>• File akan diperiksa oleh admin.</li>
            </ul>

          </div>

          {/* Upload Button */}
          <button
            onClick={handleUpload}
            className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 transition duration-300 py-3 rounded-2xl text-sm font-semibold shadow-lg"
          >
            🚀 Upload Revisi
          </button>

          {/* Success */}
          {isUploaded && (
            <div className="mt-5 bg-green-500/10 border border-green-500/20 rounded-2xl p-4 text-center">

              <p className="text-green-400 text-sm font-medium">
                ✅ File revisi berhasil diupload!
              </p>

            </div>
          )}

        </div>
      </div>
    </div>
  )
}