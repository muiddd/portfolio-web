export default function Marquee() {
  const items = [
    "CLEAN CODE",
    "SCALABLE ARCHITECTURE",
    "MODERN UI/UX",
    "FULL-STACK SOLUTIONS",
    "PROBLEM SOLVER",
  ];

  return (
    <div className="relative z-20 w-full bg-black border-y border-neutral-800 py-4 overflow-hidden select-none">
      <div className="flex w-max animate-marquee space-x-12 text-xs md:text-sm font-black tracking-widest uppercase text-neutral-400">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center space-x-12">
            <span className="hover:text-white transition-colors">{text}</span>
            <span className="w-2 h-2 rounded-full bg-red-600 inline-block" />
          </div>
        ))}
      </div>
    </div>
  );
}