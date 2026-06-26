"use client"

import { useState } from "react"

export default function PengajuanJudulPage() {

  const [judul, setJudul] = useState("")
  const [deskripsi, setDeskripsi] = useState("")
  const [kategori, setKategori] = useState("")
  const [dosen, setDosen] = useState("")

  const handleSubmit = (e) => {

    e.preventDefault()

    const data = {
      judul,
      deskripsi,
      kategori,
      dosen
    }

    localStorage.setItem(
      "judulSkripsi",
      JSON.stringify(data)
    )

    alert("Judul berhasil diajukan!")

    setJudul("")
    setDeskripsi("")
    setKategori("")
    setDosen("")
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] text-white p-8 relative overflow-hidden">

      {/* BACKGROUND BLUR */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-indigo-500/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

        {/* LEFT CONTENT */}
        <div>

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 mb-8">

            📚 Pengajuan Judul Skripsi

          </div>

          <h1 className="text-5xl font-bold leading-tight mb-6">

            Ajukan Judul
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {" "}Skripsi Online
            </span>

          </h1>

          <p className="text-slate-400 leading-8 text-lg">

            Platform digital untuk membantu mahasiswa
            mengajukan judul skripsi lebih cepat,
            modern, aman, dan terintegrasi
            dengan dosen pembimbing.

          </p>

          {/* CARD INFO */}
          <div className="grid grid-cols-2 gap-5 mt-10">

            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-xl">

              <div className="text-4xl mb-4">
                👨‍🎓
              </div>

              <h3 className="font-semibold text-lg">
                Mahasiswa
              </h3>

              <p className="text-sm text-slate-400 mt-3 leading-7">
                Ajukan judul skripsi secara online.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-xl">

              <div className="text-4xl mb-4">
                👨‍🏫
              </div>

              <h3 className="font-semibold text-lg">
                Dosen Pembimbing
              </h3>

              <p className="text-sm text-slate-400 mt-3 leading-7">
                Pilih dosen pembimbing sesuai bidang.
              </p>

            </div>

          </div>

        </div>

        {/* FORM */}
        <div className="bg-white/5 border border-white/10 rounded-[35px] p-10 backdrop-blur-2xl shadow-2xl">

          <div className="flex items-center gap-5 mb-10">

            <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-4xl shadow-lg shadow-blue-500/30">
              📚
            </div>

            <div>

              <h2 className="text-3xl font-bold">
                Form Pengajuan
              </h2>

              <p className="text-slate-400 mt-2">
                Isi data pengajuan judul skripsi.
              </p>

            </div>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <div>

              <label className="block mb-3 text-sm text-slate-300">
                Judul Skripsi
              </label>

              <input
                type="text"
                placeholder="Masukkan judul skripsi..."
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                className="w-full p-4 rounded-2xl bg-black/20 border border-white/10 outline-none focus:border-blue-500"
              />

            </div>

            <div>

              <label className="block mb-3 text-sm text-slate-300">
                Deskripsi Proposal
              </label>

              <textarea
                rows="4"
                placeholder="Tuliskan deskripsi singkat..."
                value={deskripsi}
                onChange={(e) =>
                  setDeskripsi(e.target.value)
                }
                className="w-full p-4 rounded-2xl bg-black/20 border border-white/10 outline-none resize-none focus:border-blue-500"
              />

            </div>

            <div>

              <label className="block mb-3 text-sm text-slate-300">
                Kategori Penelitian
              </label>

              <select
                value={kategori}
                onChange={(e) =>
                  setKategori(e.target.value)
                }
                className="w-full p-4 rounded-2xl bg-black/20 border border-white/10 outline-none"
              >

                <option value="">
                  Pilih Kategori
                </option>

                <option>
                  Web Development
                </option>

                <option>
                  Machine Learning
                </option>

                <option>
                  Mobile Development
                </option>

                <option>
                  Database
                </option>

              </select>

            </div>

            <div>

              <label className="block mb-3 text-sm text-slate-300">
                Dosen Pembimbing
              </label>

              <select
                value={dosen}
                onChange={(e) =>
                  setDosen(e.target.value)
                }
                className="w-full p-4 rounded-2xl bg-black/20 border border-white/10 outline-none"
              >

                <option value="">
                  Pilih Dosen
                </option>

                <option>
                  Dr. Ahmad Rizki
                </option>

                <option>
                  Dr. Budi Santoso
                </option>

                <option>
                  Prof. Dewi Anggraini
                </option>

              </select>

            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold hover:scale-[1.02] transition duration-300 shadow-xl shadow-blue-500/30"
            >
              Ajukan Judul Skripsi
            </button>

          </form>

          {/* PREVIEW */}
          <div className="mt-10 border-t border-white/10 pt-8">

            <h3 className="text-xl font-semibold mb-6">
              Preview Pengajuan
            </h3>

            <div className="bg-black/20 border border-white/10 rounded-3xl p-6 space-y-4">

              <p>
                <span className="text-slate-400">
                  Judul :
                </span>
                {" "}
                {judul || "-"}
              </p>

              <p>
                <span className="text-slate-400">
                  Kategori :
                </span>
                {" "}
                {kategori || "-"}
              </p>

              <p>
                <span className="text-slate-400">
                  Dosen :
                </span>
                {" "}
                {dosen || "-"}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}