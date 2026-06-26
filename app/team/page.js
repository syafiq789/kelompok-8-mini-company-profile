import team from '../data/team.json'
import data from '../data/data.json'

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-16">

      <h1 className="text-4xl font-bold text-center mb-12">
        Team & Data <span className="text-emerald-400">Kelompok 8</span>
      </h1>

      <h2 className="text-2xl font-semibold mb-6">👥 Team</h2>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {team.map((item) => (
          <div key={item.id} className="bg-white/10 p-6 rounded-xl text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500 flex items-center justify-center font-bold text-xl">
              {item.name.charAt(0)}
            </div>

            <h3 className="mt-4 font-bold">{item.name}</h3>
            <p className="text-white/60 text-sm">{item.role}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-6">📊 Data Tambahan</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {data.map((item, i) => (
          <div key={i} className="bg-white/10 p-6 rounded-xl">
            <h3 className="font-bold">{item.title}</h3>
            <p className="text-white/60 text-sm mt-2">{item.description}</p>
          </div>
        ))}
      </div>

    </div>
  )
}