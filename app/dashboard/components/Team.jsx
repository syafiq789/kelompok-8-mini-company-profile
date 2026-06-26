export default function Team() {

  const team = [
      {
      name: "Syafiq Burhanuddin",
      role: "Frontend & Backend Developer",
      description:
      "Berfokus pada pengembangan tampilan website modern sekaligus pengelolaan backend system menggunakan Next.js, Tailwind CSS, dan teknologi web terbaru.",
  },
    {
      name: "Vericho Bagus Anggara",
      role: "UI/UX Designer",
      description:
        "Mendesain interface yang menarik, nyaman digunakan, dan memiliki pengalaman pengguna yang baik.",
    },
    {
      name: "Dawam Ahmadi",
      role: "Web Developer",
      description:
        "Mengembangkan sistem website yang responsif, interaktif, dan memiliki performa optimal.",
    },
  ]

  return (
    <section
      id="team"
      className="min-h-screen flex items-center px-6 py-20"
    >

      <div className="max-w-7xl mx-auto w-full text-center">

        <p className="text-green-400 uppercase tracking-[8px] mb-4">
          Meet Our Team
        </p>

        <h2 className="text-6xl font-bold mb-16">
          Our Team
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {team.map((member, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-lg hover:-translate-y-2 transition duration-300"
            >

              <div className="w-32 h-32 rounded-full bg-green-400 mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-black">
                {member.name.charAt(0)}
              </div>

              <h3 className="text-3xl font-bold mb-2">
                {member.name}
              </h3>

              <p className="text-green-400 text-lg mb-5">
                {member.role}
              </p>

              <p className="text-gray-300 leading-8">
                {member.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}