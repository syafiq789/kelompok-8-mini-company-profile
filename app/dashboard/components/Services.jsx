export default function Services() {

  const services = [
    {
      title: "Web Development",
      description:
        "Membangun website modern, cepat, responsif, dan profesional menggunakan teknologi terbaru seperti Next.js dan React.js.",
    },
    {
      title: "UI/UX Design",
      description:
        "Mendesain tampilan interface yang menarik, clean, dan user friendly agar memberikan pengalaman terbaik bagi pengguna.",
    },
    {
      title: "Frontend Development",
      description:
        "Mengembangkan tampilan website interaktif dengan animasi modern, responsive layout, dan performa yang optimal.",
    },
    {
      title: "Responsive Design",
      description:
        "Membuat desain website yang dapat menyesuaikan tampilan secara sempurna di desktop, tablet, maupun smartphone.",
    },
    {
      title: "Modern Interface",
      description:
        "Menghadirkan tampilan website modern dengan konsep minimalis, elegan, dan mengikuti tren desain masa kini.",
    },
    {
      title: "Website Optimization",
      description:
        "Mengoptimalkan performa website agar loading lebih cepat, ringan, dan nyaman digunakan oleh pengguna.",
    },
  ]

  return (
    <section
      id="services"
      className="min-h-screen flex items-center px-6 py-20"
    >

      <div className="max-w-7xl mx-auto w-full">

        <p className="text-center text-green-400 uppercase tracking-[8px] mb-4">
          What We Provide
        </p>

        <h2 className="text-6xl font-bold text-center mb-16">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-lg hover:scale-105 transition duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-green-400/20 flex items-center justify-center mb-6">
                <span className="text-3xl">🚀</span>
              </div>

              <h3 className="text-3xl font-bold mb-5">
                {service.title}
              </h3>

              <p className="text-gray-300 leading-8">
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}