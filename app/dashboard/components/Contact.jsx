export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-6"
    >

      <div className="max-w-4xl mx-auto w-full bg-white/5 border border-white/10 rounded-3xl p-10">

        <h2 className="text-5xl font-bold text-center mb-10">
          Contact Us
        </h2>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Nama"
            className="w-full p-5 rounded-2xl bg-white/10 border border-white/10"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-5 rounded-2xl bg-white/10 border border-white/10"
          />

          <textarea
            rows="5"
            placeholder="Pesan"
            className="w-full p-5 rounded-2xl bg-white/10 border border-white/10"
          ></textarea>

          <button className="bg-green-400 text-black px-8 py-4 rounded-2xl font-bold">
            Kirim Pesan
          </button>

        </form>

      </div>

    </section>
  )
}