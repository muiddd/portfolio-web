import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Award, ExternalLink } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function Certificates() {
  const certs = [
    {
      title: "Google Student Ambassador Batch 2",
      issuer: "Google",
      year: "2026",
      category: "Leadership & Community",
      link: "#"
    },
    {
      title: "Silver & Bronze Medalist — Bridge",
      issuer: "Porseni XV Politeknik Nasional",
      year: "2026",
      category: "National Competition",
      link: "#"
    },
    {
      title: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding Indonesia",
      year: "2025",
      category: "Web Development",
      link: "#"
    },
    {
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco Networking Academy",
      year: "2025",
      category: "Network Engineering",
      link: "#"
    },
    {
      title: "Database Design & SQL Specialist",
      issuer: "Oracle Academy",
      year: "2025",
      category: "Database & Backend",
      link: "#"
    }
  ];

  return (
    <section id="credentials" className="relative z-20 bg-black text-white px-4 md:px-20 py-24 border-t border-neutral-900 select-none">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-red-600 uppercase">
            [ 03 — VALIDATION ]
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase mt-2">
            LICENSES & <span className="text-red-600">CREDENTIALS</span>
          </h2>
          <p className="text-neutral-400 text-xs md:text-sm font-mono mt-3 max-w-lg mx-auto">
            Sertifikasi kompetensi resmi, lisensi teknis, serta pencapaian prestasi akademik dan non-akademik.
          </p>
        </div>

        {/* Swiper Slider Wrapper */}
        <div className="w-full py-4">
          <Swiper
            modules={[EffectCoverflow, Pagination]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={false}
            allowTouchMove={true}
            simulateTouch={true}
            touchRatio={1}
            coverflowEffect={{
              rotate: 25,
              stretch: 0,
              depth: 120,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            className="w-full pb-14"
          >
            {certs.map((item, index) => (
              <SwiperSlide key={index} className="!w-[300px] md:!w-[360px]">
                <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between h-[340px] shadow-2xl hover:border-red-600/50 transition-colors">
                  
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-mono px-2.5 py-1 bg-red-600/10 text-red-500 border border-red-600/30 rounded-md font-semibold">
                        {item.year}
                      </span>
                      <Award className="text-red-500" size={24} />
                    </div>

                    <p className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase">
                      {item.category}
                    </p>
                    <h3 className="text-xl font-bold text-white mt-2 leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <div className="pt-6 border-t border-neutral-900 flex justify-between items-center">
                    <div>
                      <p className="text-[10px] font-mono text-neutral-500 uppercase">Dikeluarkan Oleh</p>
                      <p className="text-xs font-semibold text-neutral-200">{item.issuer}</p>
                    </div>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-neutral-900 hover:bg-red-600 text-neutral-300 hover:text-white transition-colors"
                      title="Lihat Kredensial"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}