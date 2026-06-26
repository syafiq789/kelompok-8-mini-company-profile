"use client"

export default function MonitoringProgressPage() {

  const progress = 70

  const progressData = [
    {
      title: "BAB 1",
      status: "Selesai",
      percent: "100%",
      color: "green"
    },
    {
      title: "BAB 2",
      status: "Selesai",
      percent: "100%",
      color: "green"
    },
    {
      title: "BAB 3",
      status: "Proses Revisi",
      percent: "70%",
      color: "yellow"
    },
    {
      title: "BAB 4",
      status: "Belum Dimulai",
      percent: "0%",
      color: "red"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white px-4 py-6">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8">

          <p className="text-cyan-400 text-xs tracking-[4px] font-semibold mb-2">
            MONITORING SKRIPSI
          </p>

          <h1 className="text-3xl font-bold mb-2">
            Monitoring Progress
          </h1>

          <p className="text-gray-400 text-sm">
            Pantau perkembangan pengerjaan skripsi secara realtime.
          </p>

        </div>

        {/* Main Progress */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 mb-8 shadow-2xl">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-6">

            <div>

              <p className="text-cyan-400 text-xs tracking-[3px] font-semibold mb-2">
                TOTAL PROGRESS
              </p>

              <h2 className="text-3xl font-bold">
                {progress}%
              </h2>

            </div>

            <div className="bg-cyan-500/10 border border-cyan-500/20 px-5 py-3 rounded-2xl">

              <p className="text-cyan-400 text-sm font-semibold">
                Skripsi Sedang Berjalan
              </p>

            </div>

          </div>

          {/* Progress Bar */}
          <div className="w-full h-5 bg-black rounded-full overflow-hidden border border-zinc-800">

            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
              style={{ width: `${progress}%` }}
            />

          </div>

        </div>

        {/* Detail Progress */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {progressData.map((item, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 hover:border-cyan-500/40 transition duration-300 rounded-3xl p-6 shadow-xl"
            >

              <div className="flex items-center justify-between mb-5">

                <div>

                  <h2 className="text-xl font-semibold mb-1">
                    {item.title}
                  </h2>

                  <p className="text-gray-400 text-sm">
                    Status pengerjaan
                  </p>

                </div>

                <div
                  className={`px-4 py-2 rounded-xl text-sm font-semibold
                    ${
                      item.color === "green"
                        ? "bg-green-500/10 border border-green-500/20 text-green-400"
                        : item.color === "yellow"
                        ? "bg-yellow-500/10 border border-yellow-500/20 text-yellow-400"
                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                    }
                  `}
                >
                  {item.status}
                </div>

              </div>

              {/* Progress */}
              <div className="mb-3">

                <div className="w-full h-4 bg-black rounded-full overflow-hidden border border-zinc-800">

                  <div
                    className={`h-full rounded-full
                      ${
                        item.color === "green"
                          ? "bg-green-500"
                          : item.color === "yellow"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }
                    `}
                    style={{ width: item.percent }}
                  />

                </div>

              </div>

              <p className="text-sm text-gray-400">
                Progress: {item.percent}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}