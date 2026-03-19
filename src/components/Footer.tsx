import { motion } from 'motion/react';
import { ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          {/* Column 1 */}
          <div className="space-y-6">
            <div className="w-10 h-10 bg-[#ff7a2f] rounded-sm flex items-center justify-center font-bold text-black text-2xl">
              A
            </div>
            <p className="text-gray-400 leading-relaxed">
              Blending digital strategy with genuine emotional connection.
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-4">
              {['HOME', 'ABOUT', 'SERVICE', 'FAQ', 'CONTACT'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#ff7a2f] transition-colors text-sm font-medium tracking-widest"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">STAY UP TO DATE</h4>
            <p className="text-gray-400 text-sm">20XHUB, Fueling Your Online Success.</p>
            <div className="flex">
              <button className="px-6 py-2 border border-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all">
                Explore Now
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-3xl md:text-6xl font-black text-[#ff7a2f] tracking-tighter mb-2">ASLAM</h3>
            <p className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">
              FREELANCE DIGITAL MARKETING ANALYST IN DUBAI | UAE
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <button
              onClick={scrollToTop}
              className="p-3 bg-[#0066ff] text-white rounded-md hover:bg-[#0052cc] transition-all"
            >
              <ChevronUp size={20} />
            </button>
            <p className="text-gray-500 text-[9px] md:text-[10px] uppercase tracking-widest">
              Copyright © 2026 | Powered by Aslam
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
