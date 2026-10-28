import { useState, useEffect } from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer() {
  const [timeString, setTimeString] = useState('');

  // Menampilkan jam lokal real-time seperti di referensi
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTimeString(now.toLocaleTimeString('id-ID', { hour12: false }));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative z-20 bg-black text-white px-6 md:px-20 pt-20 pb-12 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Teks Penutup Raksasa */}
        <div className="mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-red-600 uppercase">
            [ 03 — GET IN TOUCH ]
          </span>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tight mt-3">
            LET'S CREATE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-400">
              SOMETHING GREAT.
            </span>
          </h2>
        </div>

        {/* Baris Kontak & Jam */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-neutral-900 items-center">
          
          {/* Email Direct */}
          <div>
            <p className="text-xs font-mono text-neutral-500 uppercase mb-1">Direct Email</p>
            <a 
              href="mailto:abdulmuid@example.com" 
              className="text-sm md:text-base font-bold text-white hover:text-red-500 transition-colors"
            >
              muidabdulmuid99@gmail.com
            </a>
          </div>

          {/* Lokasi & Status */}
          <div>
            
          </div>

          {/* Jam Real-time & Back to Top */}
          <div className="flex items-center justify-between md:justify-end gap-6">
            <div className="text-right">
              <p className="text-[10px] font-mono text-neutral-500 uppercase">Waktu Lokal (WIB)</p>
              <p className="font-mono text-lg font-bold text-red-500">{timeString || '00:00:00'}</p>
            </div>
            
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-neutral-900 hover:bg-red-600 border border-neutral-800 hover:border-red-600 flex items-center justify-center transition-all cursor-pointer"
              title="Kembali ke atas"
            >
              <ArrowUp size={18} />
            </button>
          </div>

        </div>

        {/* Baris Hak Cipta & Social Icons */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 text-xs font-mono text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} Abdul Muid.</p>
          
          <div className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Github size={16} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Linkedin size={16} />
            </a>
            <a href="mailto:abdulmuid@example.com" className="hover:text-white transition-colors">
              <Mail size={16} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}