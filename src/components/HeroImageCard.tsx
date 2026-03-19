import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function HeroImageCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative rounded-[28px] overflow-hidden h-full group min-h-[420px] md:min-h-0"
    >
      {/* Artwork Image */}
      <img
        src="https://cqcnzhmmqqkatyhxhvzw.supabase.co/storage/v1/object/public/projects/Gemini_Generated_Image_7lydsv7lydsv7lyd.png"
        alt="Artistic Floral Painting"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />

      {/* Testimonial Card */}
      {/* Mobile Testimonial Card (Small) */}
      <div className="md:hidden absolute bottom-26 left-6 right-6">
        <div className="bg-black/60 backdrop-blur-xl p-4 rounded-xl border border-white/10 shadow-xl">
          <p className="text-white text-[11px] font-medium leading-tight mb-2">
            ""
          </p>
          <div className="flex items-center justify-between">
            <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">
              A clear strategy that helped strengthen our brand’s online visibility
            </span>
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black">
              <ArrowUpRight size={12} />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Card (Desktop) */}
      <div className="hidden md:block absolute top-64 left-6 w-auto">
        <div className="bg-black/40 md:bg-black/60 backdrop-blur-2xl p-5 md:p-6 rounded-2xl border border-white/10 shadow-2xl max-w-[300px] relative text-left">

          <p className="text-white text-[12px] md:text-[15px] font-medium leading-[1.6] md:leading-relaxed mb-4">
            "A clear strategy that helped strengthen our brand’s online visibility"
          </p>

          <div className="flex items-center justify-between">
            <span className="text-[9px] md:text-[9px] font-bold text-gray-400 md:text-gray-500 uppercase tracking-widest">
              — Client Feedback
            </span>

            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black shadow-lg">
              <ArrowUpRight size={16} />
            </div>
          </div>

        </div>
      </div>

      {/* Desktop Button (unchanged) */}
      <div className="hidden md:block absolute bottom-6 right-6">
        <button className="flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-black transition-all">
          <div className="w-1.5 h-1.5 bg-[#c7f23a] rounded-full animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest">
            OPEN SLOTS
          </span>
        </button>
      </div>
    </motion.div>
  );
}
