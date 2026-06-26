"use client"

export default function KeamananDataPage() {

  const securityData = [
    {
      title: "Enkripsi Data",
      desc: "Semua data mahasiswa terenkripsi dan terlindungi.",
      icon: "🔒",
      color: "cyan"
    },
    {
      title: "Backup Otomatis",
      desc: "Data tersimpan otomatis setiap hari.",
      icon: "💾",
      color: "green"
    },
    {
      title: "Login Aman",
      desc: "Sistem login menggunakan autentikasi akun.",
      icon: "🛡️",
      color: "yellow"
    },
    {
      title: "Monitoring Sistem",
      desc: "Aktivitas pengguna dipantau secara realtime.",
      icon: "📡",
      color: "blue"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white px-4 py-6">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8">

          <p className="text-cyan-400 text-xs tracking-[4px] font-semibold mb-2">
            SISTEM KEAMANAN
          </p>

          <h1 className="text-3xl font-bold mb-2">
            Keamanan Data
          </h1>

          <p className="text-gray-400 text-sm">
            Seluruh data mahasiswa dan bimbingan terlindungi dengan sistem keamanan modern.
          </p>

        </div>

        {/* Status */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-6 mb-8 shadow-2xl">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

            <div className="flex items-center gap-5">

              <div className="w-20 h-20 rounded-3xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-4xl">
                🔐
              </div>

              <div>

                <p className="text-cyan-400 text-xs tracking-[3px] font-semibold mb-2">
                  STATUS KEAMANAN
                </p>

                <h2 className="text-2xl font-bold mb-2">
                  Data Aman & Terproteksi
                </h2>

                <p className="text-gray-400 text-sm">
                  Sistem keamanan aktif selama 24 jam.
                </p>

              </div>

            </div>

            <div className="bg-green-500/10 border border-green-500/20 px-6 py-4 rounded-2xl">

              <p className="text-green-400 text-sm font-semibold">
                ● Security Active
              </p>

            </div>

          </div>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {securityData.map((item, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 hover:border-cyan-500/40 transition duration-300 rounded-3xl p-6 shadow-xl"
            >

              <div className="flex items-start gap-5">

                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl
                    ${
                      item.color === "cyan"
                        ? "bg-cyan-500/10 border border-cyan-500/20"
                        : item.color === "green"
                        ? "bg-green-500/10 border border-green-500/20"
                        : item.color === "yellow"
                        ? "bg-yellow-500/10 border border-yellow-500/20"
                        : "bg-blue-500/10 border border-blue-500/20"
                    }
                  `}
                >
                  {item.icon}
                </div>

                <div>

                  <h2 className="text-lg font-semibold mb-2">
                    {item.title}
                  </h2>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}