export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >

      <div className="text-center max-w-5xl">

        <span className="px-5 py-2 rounded-full border border-green-400 text-green-400 text-sm">
          Mini Company Profile 2026
        </span>

        <h1 className="text-6xl font-bold leading-tight mt-8">
          Bangun Masa Depan 
          <br />
          <span className="text-green-300">
            Digital yang Lebih Cerdas
          </span>
        </h1>

        <p className="text-gray-250 mt-8 text-xl">
          Kami menghadirkan solusi digital modern, cepat, dan profesional dengan
          tim yang solid, kreatif, serta berorientasi pada kualitas terbaik.
        </p>

        <div className="flex justify-center gap-5 mt-10">

          <button className="bg-green-400 text-black px-8 py-4 rounded-2xl font-bold">
            Mulai Sekarang ✦
          </button>

          <button className="border border-white/20 px-8 py-4 rounded-2xl">
            Tim Kami →
          </button>

        </div>

      </div>

    </section>
  )
}