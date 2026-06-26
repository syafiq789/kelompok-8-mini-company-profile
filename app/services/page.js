async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}

export default async function Services() {
  const data = await getData()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white px-6 py-20">

      {/* HEADER */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold">
          Layanan <span className="text-emerald-400">Kami</span>
        </h1>

        <p className="text-white/60 mt-4 max-w-2xl mx-auto">
          Kami menyediakan layanan pengembangan web modern, desain UI/UX, dan solusi digital untuk kebutuhan bisnis dan edukasi.
        </p>
      </div>

      {/* SERVICE GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {data.slice(0, 6).map((item, index) => (
          <div
            key={item.id}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:-translate-y-1 hover:border-emerald-400/40 transition"
          >

            {/* ICON BOX */}
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center mb-4">
              <span className="text-emerald-400 font-bold">
                {index + 1}
              </span>
            </div>

            {/* TITLE */}
            <h3 className="font-bold text-lg mb-2 line-clamp-2">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-white/60 text-sm line-clamp-4">
              {item.body}
            </p>

          </div>
        ))}

      </div>

      {/* EXTRA SECTION */}
      <div className="max-w-5xl mx-auto mt-20 text-center">

        <h2 className="text-2xl font-bold mb-4">
          Kenapa memilih kami?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h3 className="font-semibold">⚡ Cepat</h3>
            <p className="text-white/60 text-sm mt-2">
              Proses pengerjaan cepat dan efisien.
            </p>
          </div>

          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h3 className="font-semibold">🎨 Modern</h3>
            <p className="text-white/60 text-sm mt-2">
              Desain UI/UX mengikuti tren terbaru.
            </p>
          </div>

          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h3 className="font-semibold">👥 Profesional</h3>
            <p className="text-white/60 text-sm mt-2">
              Dikerjakan oleh tim yang solid dan berpengalaman.
            </p>
          </div>

        </div>

      </div>

      {/* FOOTER NOTE */}
      <div className="text-center text-white/40 text-sm mt-20 border-t border-white/10 pt-8">
        © 2026 Kelompok 8 - Mini Company Profile
      </div>

    </div>
  )
}