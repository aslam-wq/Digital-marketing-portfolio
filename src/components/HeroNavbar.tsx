import { Twitter, Menu } from 'lucide-react';

export default function HeroNavbar() {
  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        {/* Left side */}
        <div className="flex items-center gap-6 order-2 md:order-1">
          <a href="#" className="text-[10px] font-bold tracking-[0.2em] text-gray-500 hover:text-white transition-colors uppercase">Portfolio</a>

        </div>

        {/* Center */}
        <div className="flex items-center gap-2 order-1 md:order-2">
          <div className="w-1.5 h-1.5 bg-[#c7f23a] rounded-full shadow-[0_0_8px_#c7f23a]" />
          <span className="text-white font-medium text-sm tracking-tight">Aslam</span>
        </div>

        {/* Right side */}
        <div className="flex flex-col sm:flex-row items-center gap-6 order-3">
          <div className="flex items-center gap-4 text-gray-400">
            <a href="https://x.com/AslamAs97837154" className="hover:text-white transition-colors"><Twitter size={14} /></a>
          </div>
          <a href="mailto:asluaslam044@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all group">
            <div className="w-5 h-5 rounded-full overflow-hidden border border-white/20">
              <img src="https://cqcnzhmmqqkatyhxhvzw.supabase.co/storage/v1/object/public/projects/Screenshot%202024-10-14%20222334.png" alt="Aslam" className="w-full h-full object-cover" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest">Email me</span>
          </a>
        </div>
      </div>

    </>
  );
}
