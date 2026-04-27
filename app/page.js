export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white flex flex-col items-center">

      {/* NAVBAR */}
      <header className="w-full border-b border-white/10 backdrop-blur-md bg-white/5">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
          <h1 className="text-xl font-bold">
            Kelompok 8 Web Dev & UIUX 🚀
          </h1>

          <nav className="hidden md:flex gap-6 text-sm text-white/70">
            <a className="hover:text-white" href="#">Home</a>
            <a className="hover:text-white" href="#">About</a>
            <a className="hover:text-white" href="#">Services</a>
            <a className="hover:text-white" href="#">Team</a>
            <a className="hover:text-white" href="#">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="w-full flex flex-col items-center text-center px-6 py-24">
        <div className="px-4 py-1 text-xs bg-emerald-500/10 border border-emerald-400/30 rounded-full text-emerald-300 mb-6">
          Mini Company Profile 2026
        </div>

        <h2 className="text-5xl md:text-6xl font-bold leading-tight max-w-3xl">
          Bangun Masa Depan <span className="text-emerald-400">Digital</span>
        </h2>

        <p className="mt-6 text-white/60 max-w-2xl">
          Solusi digital modern dan profesional dengan tim solid, kreatif, dan inovatif.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-xl font-semibold">
            Mulai Sekarang ✦
          </button>

          <button className="px-6 py-3 border border-white/20 hover:border-white rounded-xl">
            Tim Kami →
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="w-full max-w-5xl px-6 grid md:grid-cols-3 gap-6">
        {[
          { num: "3+", label: "Anggota Aktif" },
          { num: "A+", label: "Target Nilai" },
          { num: "100%", label: "Kolaborasi Tim" }
        ].map((item, i) => (
          <div
            key={i}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center hover:bg-white/10 transition"
          >
            <h3 className="text-4xl font-bold text-emerald-400">
              {item.num}
            </h3>
            <p className="text-white/60 mt-2">{item.label}</p>
          </div>
        ))}
      </section>

      {/* FEATURES */}
      <section className="w-full max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          ✦ Keunggulan Kami
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center hover:-translate-y-1 transition">
            <h3 className="text-xl font-semibold">⚡ Cepat & Optimal</h3>
            <p className="text-white/60 mt-2">
              Performa tinggi dan responsif di semua perangkat.
            </p>
          </div>

          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center hover:-translate-y-1 transition">
            <h3 className="text-xl font-semibold">🎨 Desain Modern</h3>
            <p className="text-white/60 mt-2">
              UI clean, elegan, dan profesional.
            </p>
          </div>

          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center hover:-translate-y-1 transition">
            <h3 className="text-xl font-semibold">👥 Tim Solid</h3>
            <p className="text-white/60 mt-2">
              Kolaborasi kuat untuk hasil maksimal.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-white/10 text-center py-10 text-white/40">
        © 2026 Kelompok 8 Web Dev & UIUX - Mini Company Profile
      </footer>

    </div>
  )
}