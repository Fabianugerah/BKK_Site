"use client";
import Navbar from "../applications/components/Navbar";
import FooterSection from "../applications/components/Footer";

export default function CareersDetail() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="bg-white text-gray-800">
        <div className="max-w-[1400px] mx-auto pt-32 pb-20">
          {/* Header */}
          <div className="flex flex-col items-center pb-15 pt-8">
            <div className="text-center max-w-[516px] flex flex-col gap-4">
              <p className="text-sm text-gray-500">Engineering</p>
              <h1 className="text-[64px] leading-16 font-bold">
                Senior Webflow Developer
              </h1>
              <div className="flex items-center gap-2 text-sm text-gray-500 justify-center">
                <span>📍</span>
                <span>Google, California</span>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-16">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* About */}
              <section>
                <h3 className="text-[40px] font-semibold mb-3">
                  Tentang Posisi Ini
                </h3>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-600 text-lg text-justify leading-relaxed">
                    Tim engineering Growvy adalah tim kecil yang bekerja dengan
                    cepat, memprioritaskan pemberian nilai kepada pelanggan dan
                    terus melakukan iterasi untuk meningkatkan pengalaman
                    pengguna. Kami menyediakan alat analitik produk yang sangat
                    мощный sambil tetap berfokus pada pengalaman pengguna yang
                    menyenangkan. Para full stack engineer memiliki kebebasan
                    untuk bekerja di berbagai bagian stack demi memberikan nilai
                    kepada pelanggan tanpa terhambat oleh batasan kepemilikan.
                  </p>

                  <p className="text-gray-600 text-lg text-justify leading-relaxed">
                    Tim engineering Growvy adalah tim kecil yang bekerja dengan
                    cepat, memprioritaskan pemberian nilai kepada pelanggan dan
                    terus melakukan iterasi untuk meningkatkan pengalaman
                    pengguna. Kami menyediakan alat analitik produk yang sangat
                    kuat sambil tetap berfokus pada pengalaman pengguna yang
                    menyenangkan. Para full stack engineer memiliki kebebasan
                    untuk bekerja di berbagai bagian stack demi memberikan nilai
                    kepada pelanggan tanpa terhambat oleh batasan kepemilikan.
                  </p>

                  <p className="text-gray-600 text-lg text-justify leading-relaxed">
                    Tim engineering Growvy adalah tim kecil yang bekerja dengan
                    cepat, memprioritaskan pemberian nilai kepada pelanggan dan
                    terus melakukan iterasi untuk meningkatkan pengalaman
                    pengguna. Kami menyediakan alat analitik produk yang sangat
                    kuat sambil tetap berfokus pada pengalaman pengguna yang
                    menyenangkan. Para full stack engineer memiliki kebebasan
                    untuk bekerja di berbagai bagian stack demi memberikan nilai
                    kepada pelanggan tanpa terhambat oleh batasan kepemilikan.
                  </p>
                </div>
              </section>

              {/* Responsibilities */}
              <section>
                <h3 className="text-[40px] font-semibold mb-3">
                  Tanggung Jawab
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 text-lg">
                  <li>
                    Merancang dan mengembangkan website Webflow sesuai dengan
                    praktik terbaik.
                  </li>
                  <li>
                    Bekerja sama dengan product manager dan desainer.
                  </li>
                  <li>
                    Mengoptimalkan performa dan aksesibilitas website.
                  </li>
                  <li>
                    Menjaga komponen tetap bersih, rapi, dan mudah dikembangkan.
                  </li>
                </ul>
              </section>

              {/* Requirements */}
              <section>
                <h3 className="text-[40px] font-semibold mb-3">
                  Kualifikasi yang Kami Cari
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 text-lg">
                  <li>
                    Pengalaman minimal 5 tahun menggunakan Webflow atau
                    pengembangan frontend.
                  </li>
                  <li>
                    Memahami konsep desain responsif dengan baik.
                  </li>
                  <li>
                    Berpengalaman menggunakan sistem UI modern.
                  </li>
                  <li>
                    Memiliki kemampuan komunikasi dan kerja tim yang baik.
                  </li>
                </ul>
              </section>

              {/* Compensation */}
              <section>
                <h3 className="text-[40px] font-semibold mb-3">
                  Kompensasi
                </h3>
                <p className="text-gray-600 text-lg">
                  Kisaran gaji: <strong>$120,000 – $160,000 USD</strong>{" "}
                  tergantung pengalaman dan lokasi kerja.
                </p>
              </section>
            </div>

            {/* Right Sidebar */}
            <aside className="border rounded-xl p-6 h-fit lg:sticky lg:top-24">
              <h3 className="font-semibold text-lg mb-4">
                Fasilitas dan Benefit
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>✔ Asuransi Kesehatan</li>
                <li>✔ Cuti Berbayar</li>
                <li>✔ Mendukung Kerja Remote</li>
                <li>✔ Anggaran Pengembangan Diri</li>
                <li>✔ Retret Tim</li>
              </ul>
              <button className="mt-6 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg transition">
                Lamar Sekarang
              </button>
            </aside>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
