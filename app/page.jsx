"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomePage() {
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerData, setRegisterData] = useState({
    nama: "",
    nim: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const fiturList = [
    {
      icon: "📚",
      title: "Pengajuan Judul",
      desc: "Ajukan judul skripsi secara mudah dan terorganisir.",
      path: "/dashboard/pengajuan-judul",
    },
    {
      icon: "📝",
      title: "Upload Revisi",
      desc: "Unggah dokumen revisi langsung dari dashboard.",
      path: "/dashboard/upload-revisi",
    },
    {
      icon: "📅",
      title: "Jadwal Bimbingan",
      desc: "Lihat jadwal konsultasi dan atur waktu dengan mudah.",
      path: "/dashboard/jadwal-bimbingan",
    },
    {
      icon: "💬",
      title: "Chat Konsultasi",
      desc: "Kirim pesan singkat ke pembimbing tanpa repot.",
      path: "/dashboard/chat-konsultasi",
    },
    {
      icon: "📄",
      title: "Riwayat Bimbingan",
      desc: "Tinjau catatan bimbingan dan revisi sebelumnya.",
      path: "/dashboard/riwayat-bimbingan",
    },
    {
      icon: "🔔",
      title: "Notifikasi",
      desc: "Dapatkan pemberitahuan untuk setiap update bimbingan.",
      path: "/dashboard/notifikasi",
    },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser && email === savedUser.email && password === savedUser.password) {
      document.cookie = "session=true; path=/";
      router.push("/dashboard");
    } else {
      alert("Email atau password salah. Silakan coba lagi.");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (
      !registerData.nama ||
      !registerData.nim ||
      !registerData.email ||
      !registerData.password ||
      !registerData.confirmPassword
    ) {
      alert("Semua field wajib diisi.");
      return;
    }

    if (registerData.password !== registerData.confirmPassword) {
      alert("Password tidak sama.");
      return;
    }

    localStorage.setItem("user", JSON.stringify(registerData));
    alert("Registrasi berhasil. Silakan login.");
    setShowRegister(false);
    setShowLogin(true);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(129,140,248,0.16),_transparent_25%)]"></div>

      <header className="relative z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-sky-300">Bimbingan Skripsi</p>
            <h1 className="mt-1 text-xl font-semibold text-white">Portal Konsultasi Mahasiswa</h1>
          </div>

          <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-300 sm:gap-6">
            <a href="#home" className="hover:text-white transition">Home</a>
            <a href="#about" className="hover:text-white transition">Tentang</a>
            <a href="#features" className="hover:text-white transition">Fitur</a>
            <a href="#contact" className="hover:text-white transition">Kontak</a>
          </nav>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setShowRegister(true)}
              className="rounded-2xl border border-slate-700 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:border-slate-500"
            >
              Daftar
            </button>
            <button
              onClick={() => setShowLogin(true)}
              className="rounded-2xl bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
            >
              Masuk
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section id="home" className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex rounded-full bg-sky-500/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-sky-300">
              Bimbingan skripsi tanpa ribet
            </p>
            <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Bimbingan skripsi jadi lebih jelas, cepat, dan mudah diikuti.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
              Lihat jadwal konsultasi, kirim revisi, dan cek status bimbingan di satu tempat. Cukup login dan semua informasi skripsi Anda tersedia.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => setShowRegister(true)}
                className="inline-flex w-full items-center justify-center rounded-2xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400 sm:w-auto"
              >
                Daftar sekarang
              </button>
              <button
                onClick={() => setShowLogin(true)}
                className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-700 bg-white/5 px-6 py-3 text-sm text-slate-100 transition hover:bg-white/10 sm:w-auto"
              >
                Masuk ke akun
              </button>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-900/80 p-6">
                <p className="text-sm text-slate-400">Jadwal</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Rapi dan mudah diikuti</h3>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-6">
                <p className="text-sm text-slate-400">Revisi</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Terkirim dalam hitungan menit</h3>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-6">
                <p className="text-sm text-slate-400">Chat</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Langsung dengan pembimbing</h3>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-6">
                <p className="text-sm text-slate-400">Notifikasi</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Tidak ada tugas yang terlewat</h3>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Tentang aplikasi</p>
              <h3 className="text-3xl font-semibold text-white">Sistem bimbingan yang fokus ke tugas utama.</h3>
              <p className="text-slate-300 leading-8">
                Fokuskan energi pada skripsi Anda, bukan pada cara mengelola banyak dokumen. Platform ini dibuat untuk membuat alur bimbingan lebih jelas dan mudah digunakan oleh mahasiswa dan dosen.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6">
                <p className="text-sm text-slate-400">Khusus Mahasiswa</p>
                <p className="mt-3 text-white">Semua fitur disusun untuk mempermudah proses bimbingan skripsi.</p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6">
                <p className="text-sm text-slate-400">Tanpa hal berlebihan</p>
                <p className="mt-3 text-white">Desain simpel, navigasi jelas, dan tampilan enak dipakai.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Fitur utama</p>
            <h3 className="mt-4 text-3xl font-semibold text-white">Fitur yang membantu proses bimbingan skripsi.</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {fiturList.map((item, index) => (
              <div
                key={index}
                className="group rounded-[32px] border border-white/10 bg-slate-950/80 p-7 transition hover:-translate-y-1 hover:border-sky-500/30"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-sky-500/10 text-2xl text-sky-300">
                  {item.icon}
                </div>
                <h4 className="mt-6 text-xl font-semibold text-white">{item.title}</h4>
                <p className="mt-3 text-slate-400 leading-7">{item.desc}</p>
                <button
                  type="button"
                  onClick={() => router.push(item.path)}
                  className="mt-6 inline-flex items-center rounded-full bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/10"
                >
                  Buka fitur
                </button>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Siap memulai?</p>
            <h3 className="mt-4 text-3xl font-semibold text-white">Mulai gunakan portal bimbingan skripsi hari ini.</h3>
            <p className="mt-4 text-slate-400">Daftar dan masuk untuk mengelola proses bimbingan skripsi dengan lebih teratur.</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button
                onClick={() => setShowRegister(true)}
                className="rounded-2xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
              >
                Daftar sekarang
              </button>
              <button
                onClick={() => setShowLogin(true)}
                className="rounded-2xl border border-slate-700 bg-white/5 px-6 py-3 text-sm text-slate-100 transition hover:bg-white/10"
              >
                Masuk
              </button>
            </div>
          </div>
        </section>
      </main>

      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 py-10 sm:p-0">
          <form onSubmit={handleLogin} className="w-full max-w-md rounded-[32px] border border-white/10 bg-slate-950/95 p-8 shadow-2xl shadow-slate-950/60">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">Login Mahasiswa</h2>
              <button type="button" onClick={() => setShowLogin(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-4 w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-500"
            />
            <button
              type="submit"
              className="mt-6 w-full rounded-3xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              Masuk
            </button>
          </form>
        </div>
      )}

      {showRegister && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 py-10 sm:p-0">
          <form onSubmit={handleRegister} className="w-full max-w-md rounded-[32px] border border-white/10 bg-slate-950/95 p-8 shadow-2xl shadow-slate-950/60">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">Daftar Akun</h2>
              <button type="button" onClick={() => setShowRegister(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>
            <input
              type="text"
              placeholder="Nama"
              value={registerData.nama}
              onChange={(e) => setRegisterData({ ...registerData, nama: e.target.value })}
              className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-500"
            />
            <input
              type="text"
              placeholder="NIM"
              value={registerData.nim}
              onChange={(e) => setRegisterData({ ...registerData, nim: e.target.value })}
              className="mt-4 w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-500"
            />
            <input
              type="email"
              placeholder="Email"
              value={registerData.email}
              onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
              className="mt-4 w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={registerData.password}
              onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
              className="mt-4 w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-500"
            />
            <input
              type="password"
              placeholder="Konfirmasi Password"
              value={registerData.confirmPassword}
              onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
              className="mt-4 w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-500"
            />
            <button
              type="submit"
              className="mt-6 w-full rounded-3xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              Daftar
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
