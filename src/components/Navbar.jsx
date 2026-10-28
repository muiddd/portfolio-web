export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-16 py-6 bg-transparent backdrop-blur-xs">
            {/* Brand / Logo */}
            <a href="#home" className="text-xl font-black tracking-widest text-white hover:text-red-500 transition-colors">
                Muid<span className="text-red-600">.</span>
            </a>

            {/* Nav Menu */}
            <div className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-widest text-neutral-400">
                <a href="#home" className="hover:text-white transition-colors">HOME</a>
                <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
                <a href="#projects" className="hover:text-white transition-colors">PROJECTS</a>
                <a href="#credentials" className="hover:text-white transition-colors">CREDENTIALS</a>
            </div>

            {/* Contact CTA */}
            <a
                href="#contact"
                className="px-5 py-2 text-xs font-bold tracking-widest text-white uppercase border border-neutral-700 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
                Contact Me
            </a>
        </nav>
    );
}