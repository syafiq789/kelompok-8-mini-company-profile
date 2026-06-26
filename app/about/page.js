export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white px-6 py-20 flex justify-center">

      <div className="max-w-5xl w-full space-y-10">

        {/* TITLE */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Tentang <span className="text-emerald-400">Kami</span>
          </h1>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Kelompok 8 adalah tim pengembang yang fokus pada pembuatan aplikasi web modern, cepat, dan responsif menggunakan teknologi terkini.
          </p>
        </div>

        {/* VISI MISI */}
        <div className="grid md:grid-cols-2 gap-6">

          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-3">🎯 Visi</h2>
            <p className="text-white/60">
              Menjadi tim pengembang yang mampu menciptakan solusi digital inovatif, modern, dan bermanfaat bagi pengguna.
            </p>
          </div>

          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-3">🚀 Misi</h2>
            <ul className="text-white/60 space-y-2 list-disc list-inside">
              <li>Mengembangkan aplikasi web yang responsif dan modern</li>
              <li>Meningkatkan kolaborasi dalam tim</li>
              <li>Menggunakan teknologi terbaru seperti Next.js & Tailwind</li>
              <li>Menciptakan UI/UX yang menarik dan mudah digunakan</li>
            </ul>
          </div>

        </div>

        {/* PROFIL TIM */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">👥 Profil Tim</h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-xl font-semibold">Frontend Developer</h3>
              <p className="text-white/60 mt-2">
                Bertanggung jawab pada tampilan UI menggunakan Next.js & Tailwind CSS.
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-xl font-semibold">UI/UX Designer</h3>
              <p className="text-white/60 mt-2">
                Mendesain tampilan aplikasi agar modern, user-friendly, dan menarik.
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-xl font-semibold">Backend Developer</h3>
              <p className="text-white/60 mt-2">
                Mengelola data, API, dan logika sistem agar aplikasi berjalan optimal.
              </p>
            </div>

          </div>
        </div>

        {/* FOOTER NOTE */}
        <div className="text-center text-white/40 text-sm pt-10 border-t border-white/10">
          © 2026 Kelompok 8 Web Dev & UIUX - Mini Company Profile
        </div>

      </div>
    </div>
  )
}