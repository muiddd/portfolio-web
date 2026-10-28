import { Download } from 'lucide-react';

export default function About() {
  const techCategories = [
    {
      title: "FULL-STACK & UI ENGINEERING",
      skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript (ES6+)", "Laravel", "PHP", "Flutter"]
    },
    {
      title: "BACKEND & ARCHITECTURE",
      skills: ["RESTful API", "MySQL", "PostgreSQL", "Python", "Database Design", "Docker"]
    },
    {
      title: "CREATIVE & UI/UX DESIGN",
      skills: ["Figma (Wireframe & Prototype)", "Design System", "Graphic Design", "Visual Branding", "Canva"]
    },
    {
      title: "CORE COMPETENCIES & WORKFLOW",
      skills: ["Strategic Thinking (Mind Sport)", "Cross-Divisional Leadership", "Agile/Scrum", "Git/GitHub", "Problem Solving"]
    }
  ];

  return (
    <section id="about" className="relative z-20 bg-neutral-100 text-neutral-900 rounded-t-[40px] md:rounded-t-[60px] px-6 md:px-20 py-20 -mt-12 transition-all">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 border-b border-neutral-300 pb-16">
          
          {/* Kolom Kiri: Metadata Profil */}
          <div className="md:w-1/3">
            <span className="text-xs font-mono font-bold tracking-widest text-red-600 uppercase">
              [ 01 — PROFILE ]
            </span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mt-2 uppercase">
              ABOUT <br />
              <span className="text-red-600">ME</span>
            </h2>

            <div className="mt-8 space-y-4 text-xs font-mono text-neutral-600">
              <div>
                <p className="text-neutral-400 font-semibold uppercase">Nama</p>
                <p className="font-bold text-neutral-900 text-sm">Abdul Muid</p>
              </div>
              <div>
                <p className="text-neutral-400 font-semibold uppercase">Peran Utama</p>
                <p className="font-bold text-neutral-900 text-sm">Full-Stack Developer & UI/UX Designer</p>
              </div>
              <div>
                <p className="text-neutral-400 font-semibold uppercase">Status Akademik</p>
                <p className="font-bold text-neutral-900 text-sm">D4 Teknik Informatika</p>
              </div>
            </div>

            {/* Tombol Download CV */}
            <div className="mt-8">
              <a
                href="/CV_Abdul_Muid.pdf"
                download="CV_Abdul_Muid.pdf"
                className="inline-flex items-center gap-3 px-6 py-3 bg-red-600 text-white text-xs font-mono font-bold uppercase tracking-widest rounded-lg hover:bg-neutral-900 transition-colors shadow-lg shadow-red-600/20"
              >
                <span>Download CV</span>
                <Download size={16} />
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Narasi Profil */}
          <div className="md:w-2/3 space-y-5 font-mono">
            <p className="text-sm md:text-base leading-relaxed text-neutral-700">
              Mahasiswa Teknik Informatika tingkat akhir yang memadukan rekayasa perangkat lunak <span className="font-bold text-neutral-950">full-stack</span> dengan kepekaan desain antarmuka (<span className="font-bold text-neutral-950">UI/UX</span>). Berpengalaman mengelola siklus pengembangan dari perancangan visual di Figma hingga implementasi sistem yang terstruktur di sisi <span className="font-bold text-neutral-950">frontend</span> dan <span className="font-bold text-neutral-950">backend</span>.
            </p>
            <p className="text-xs md:text-sm leading-relaxed text-neutral-500">
              Di luar baris kode, saya terbiasa mengasah komunikasi, kepemimpinan, dan estetika visual melalui kepanitiaan kreatif (PDD) serta organisasi kampus. Pengalaman berkompetisi di cabang olahraga strategi (<span className="font-bold text-neutral-800">bridge</span>) turut membentuk cara berpikir yang tenang, analitis terhadap risiko, dan adaptif di bawah tekanan—modal utama dalam berkolaborasi di lingkungan rekayasa perangkat lunak modern.
            </p>
          </div>
        </div>

        {/* Grid Tech Stack & Competencies */}
        <div className="mt-16">
          <h3 className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase mb-8">
            KEAHLIAN & TEKNOLOGI UTAMA
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techCategories.map((cat, idx) => (
              <div 
                key={idx} 
                className="p-6 bg-white rounded-2xl border border-neutral-200 shadow-sm hover:border-red-400 hover:shadow-md transition-all"
              >
                <h4 className="text-xs font-mono font-bold text-red-600 tracking-wider mb-4">
                  {cat.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-3 py-1.5 bg-neutral-100 text-neutral-800 text-xs font-mono font-semibold rounded-md border border-neutral-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
