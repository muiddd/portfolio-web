import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';
// Pastikan path ini sesuai dengan letak foto cutout kamu
import profileImg from '../assets/profile.png';

export default function Hero() {
    return (
        <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
            {/* Background Radial Glow Merah khas referensi */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-red-600/25 blur-[120px] rounded-full pointer-events-none" />

            {/* Sidebar Social Links (Kiri Layar) */}
            <div className="hidden lg:flex flex-col items-center gap-6 absolute left-8 bottom-16 z-30 text-neutral-400">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all">
                    <Github size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all">
                    <Linkedin size={20} />
                </a>
                <a href="mailto:email@example.com" className="hover:text-white hover:scale-110 transition-all">
                    <Mail size={20} />
                </a>
                <div className="w-[1px] h-12 bg-neutral-800 mt-2" />
            </div>

            {/* Kontainer Layer 3D: Teks Belakang + Foto + Teks Depan */}
            <div className="relative w-full max-w-5xl h-[520px] md:h-[650px] flex items-center justify-center">

                {/* Layer 1: Teks Raksasa Belakang Foto */}
                <div className="absolute inset-0 flex flex-col items-center justify-center select-none pointer-events-none z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[14vw] md:text-[200px] font-black tracking-tighter text-neutral-100 uppercase leading-none"
                    >
                        ABDUL
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="text-[14vw] md:text-[200px] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-neutral-400 uppercase leading-none"
                    >
                        MUID
                    </motion.h1>
                </div>

                {/* Layer 2: Foto Cutout Tengah */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    className="relative z-20 h-full flex items-end justify-center pointer-events-none"
                >
                    <img
                        src={profileImg}
                        alt="Abdul Muid"
                        className="h-[80%] md:h-[95%] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
                    />
                </motion.div>
            </div>
        </section>
    );
}