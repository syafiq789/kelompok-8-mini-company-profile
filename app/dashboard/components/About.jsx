export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6"
    >

      <div className="max-w-6xl text-center">

        <p className="text-green-400 uppercase tracking-[8px] mb-4">
          Kelompok 8 Web Dev & UIUX
        </p>

        <h2 className="text-6xl font-bold mb-10 leading-tight">
          About Us
        </h2>

        <p className="text-gray-300 text-xl leading-10 mb-10">
          Kami adalah tim pengembang website dan desainer UI/UX
          yang memiliki semangat untuk menciptakan pengalaman
          digital yang modern, interaktif, dan profesional.
          Fokus utama kami adalah membangun website yang tidak
          hanya menarik secara visual, tetapi juga nyaman digunakan,
          responsif di semua perangkat, dan memiliki performa yang optimal.
        </p>

        <p className="text-gray-400 text-lg leading-9 mb-14">
          Dalam setiap project, kami menggabungkan kreativitas desain
          dengan teknologi terbaru seperti Next.js, React.js,
          Tailwind CSS, dan berbagai tools modern lainnya untuk
          menghasilkan tampilan website yang elegan, cepat,
          serta sesuai dengan kebutuhan pengguna.
          Kami percaya bahwa desain yang baik dan pengembangan
          yang solid dapat memberikan pengalaman terbaik bagi user.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg">
            <h3 className="text-2xl font-bold mb-4 text-green-400">
              Vision
            </h3>

            <p className="text-gray-300 leading-8">
              Menjadi tim kreatif dan inovatif dalam pengembangan
              website modern yang mampu memberikan solusi digital
              terbaik dengan desain yang menarik dan user friendly.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg">
            <h3 className="text-2xl font-bold mb-4 text-green-400">
              Mission
            </h3>

            <p className="text-gray-300 leading-8">
              Mengembangkan website responsif, modern,
              dan berkualitas tinggi dengan memadukan
              teknologi terbaru serta pengalaman pengguna
              yang nyaman dan efisien.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg">
            <h3 className="text-2xl font-bold mb-4 text-green-400">
              Our Goal
            </h3>

            <p className="text-gray-300 leading-8">
              Memberikan hasil project digital yang profesional,
              elegan, dan mampu membantu meningkatkan identitas
              maupun kualitas layanan sebuah bisnis atau organisasi.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}