import { ExternalLink, FolderGit2 } from 'lucide-react';
import { Github } from './Icons';

export default function Projects() {
  const projects = [
    {
      title: "UMKM Inventory & Forecasting App",
      category: "MOBILE & MACHINE LEARNING",
      description: "Aplikasi seluler terintegrasi model machine learning untuk memprediksi stok barang serta mencatat inventaris secara real-time.",
      tags: ["Flutter", "Python", "REST API", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://example.com",
      status: "Featured Project"
    },
    {
      title: "Internship Management System (SIMMAGANG)",
      category: "WEB APPLICATION",
      description: "Sistem informasi manajemen magang berbasis web untuk mengelola verifikasi dokumen, progres magang, dan evaluasi mahasiswa.",
      tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://example.com",
      status: "Academic Project"
    },
    {
      title: "Tournament Scoring & Management Portal",
      category: "FULL-STACK WEB",
      description: "Platform web pencatatan skor turnamen bridge, jadwal pertandingan, dan papan peringkat otomatis berkecepatan tinggi.",
      tags: ["React.js", "Node.js", "Tailwind CSS", "REST API"],
      github: "https://github.com",
      demo: "https://example.com",
      status: "Live Project"
    }
  ];

  return (
    <section id="projects" className="relative z-20 bg-black text-white px-6 md:px-20 py-24 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-red-600 uppercase">
              [ 02 — SELECTED WORK ]
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase mt-2">
              ARCHIVED <span className="text-red-600">WORKS</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-mono">
            Kumpulan proyek pilihan yang berfokus pada arsitektur scalable, UI modern, dan fungsionalitas nyata.
          </p>
        </div>

        {/* Grid Kartu Proyek */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item, idx) => (
            <div 
              key={idx}
              className="group relative bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden hover:border-red-600/60 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Bagian Visual Mockup / Placeholder Card */}
              <div className="h-48 bg-neutral-900/80 border-b border-neutral-800 p-6 flex flex-col justify-between relative overflow-hidden group-hover:bg-neutral-900 transition-colors">
                <div className="flex justify-between items-center z-10">
                  <span className="text-[10px] font-mono px-2.5 py-1 bg-red-600/10 text-red-500 border border-red-600/30 rounded-md font-semibold">
                    {item.status}
                  </span>
                  <FolderGit2 className="text-neutral-600 group-hover:text-red-500 transition-colors" size={24} />
                </div>
                
                {/* Judul & Kategori */}
                <div className="z-10">
                  <p className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                    {item.category}
                  </p>
                  <h3 className="text-xl font-bold text-white mt-1 group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Subtle Glow Merah saat hover */}
                <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-red-600/10 rounded-full blur-2xl group-hover:bg-red-600/25 transition-all" />
              </div>

              {/* Deskripsi & Tag */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-neutral-400 text-xs leading-relaxed mb-6">
                  {item.description}
                </p>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-mono text-neutral-300 bg-neutral-900 px-2.5 py-1 rounded border border-neutral-800">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Tombol Aksi */}
                  <div className="flex items-center gap-4 pt-4 border-t border-neutral-900 text-xs font-mono">
                    <a 
                      href={item.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                    <a 
                      href={item.demo} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center gap-1.5 text-red-500 hover:text-red-400 font-bold transition-colors ml-auto"
                    >
                      <span>Live Preview</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}