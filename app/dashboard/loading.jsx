export default function Loading() {
  return (
    <div className="min-h-screen bg-[#020617] text-white p-6 animate-pulse">

      {/* NAVBAR SKELETON */}
      <div className="w-full flex items-center justify-between mb-16">

        <div className="h-8 w-52 bg-white/10 rounded-xl"></div>

        <div className="flex gap-4">

          <div className="h-6 w-16 bg-white/10 rounded-lg"></div>

          <div className="h-6 w-16 bg-white/10 rounded-lg"></div>

          <div className="h-6 w-16 bg-white/10 rounded-lg"></div>

          <div className="h-6 w-16 bg-white/10 rounded-lg"></div>

        </div>

      </div>

      {/* HERO SKELETON */}
      <div className="text-center mb-20">

        <div className="h-6 w-44 bg-emerald-400/10 rounded-full mx-auto mb-6"></div>

        <div className="h-14 w-[550px] max-w-full bg-white/10 rounded-2xl mx-auto mb-6"></div>

        <div className="h-5 w-[400px] max-w-full bg-white/10 rounded-xl mx-auto mb-3"></div>

        <div className="h-5 w-[300px] max-w-full bg-white/10 rounded-xl mx-auto"></div>

      </div>

      {/* SEARCH BAR SKELETON */}
      <div className="max-w-4xl mx-auto mb-16">

        <div className="h-16 bg-white/10 rounded-3xl"></div>

      </div>

      {/* STATS SKELETON */}
      <div className="grid md:grid-cols-3 gap-6 mb-20">

        {[1, 2, 3].map((item) => (

          <div
            key={item}
            className="bg-white/5 border border-white/10 rounded-3xl p-8"
          >

            <div className="h-10 w-20 bg-white/10 rounded-xl mx-auto mb-4"></div>

            <div className="h-4 w-32 bg-white/10 rounded-xl mx-auto"></div>

          </div>

        ))}

      </div>

      {/* TEAM CARD SKELETON */}
      <div className="grid md:grid-cols-3 gap-6">

        {[1, 2, 3].map((item) => (

          <div
            key={item}
            className="bg-white/5 border border-white/10 rounded-3xl p-8"
          >

            <div className="w-24 h-24 rounded-full bg-white/10 mx-auto mb-6"></div>

            <div className="h-6 bg-white/10 rounded-xl mb-4"></div>

            <div className="h-4 bg-white/10 rounded-xl mb-2"></div>

            <div className="h-4 bg-white/10 rounded-xl mb-6"></div>

            <div className="h-10 bg-red-500/20 rounded-xl"></div>

          </div>

        ))}

      </div>

    </div>
  )
}