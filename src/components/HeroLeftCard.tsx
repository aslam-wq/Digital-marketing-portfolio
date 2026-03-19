import { Star, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function HeroLeftCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-black md:border border-white/10 rounded-[2rem] pt-12 pb-0 px-0 md:p-8 lg:p-12 flex flex-col h-full text-left items-start"
    >
      {/* Category Label - text-[10px] tracking-[2px] on mobile */}
      <span className="text-[9px] md:text-[10px] font-black tracking-[2px] md:tracking-[0.2em] text-[#ff7a2f] uppercase mb-6 md:mb-6">
        DIGITAL MARKETING SPECIALIST
      </span>

      {/* Main Headline - text-[28px] to text-[32px] with 1.15 leading on mobile */}
      <h1 className="text-[24px] xs:text-[28px] md:text-4xl lg:text-6xl font-bold text-white leading-[1.15] md:leading-[0.95] tracking-tighter mb-8 md:mb-6">
        <span className="md:inline block ">I Grow Brands </span>
        <span className="md:inline block ">with SEO & Digital </span>
        <span className="md:inline block bg-[#FF6B00]">Marketing</span>
      </h1>

      {/* Subtitle - text-[13px] with 1.6 leading on mobile */}
      <p className="text-gray-400 text-[12px] md:text-base lg:text-lg leading-[1.6] md:leading-relaxed mb-10 max-w-[95%] md:max-w-sm">
        I help businesses in Dubai and across the UAE grow online through strategic SEO and digital marketing.
      </p>

      {/* Social Icons - w-9 h-9 on mobile */}
      <div className="flex flex-col gap-8 mb-12 w-full items-start">
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/aslam-p" className="w-9 h-9 md:w-10 md:h-10 lg:w-10 lg:h-10 rounded-full border border-[#ff7a2f] flex items-center justify-center text-white hover:bg-[#ff7a2f] hover:text-black transition-all">
            <Linkedin size={16} className="md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px]" />
          </a>
          <a href="https://www.instagram.com/20xhub/" className="w-9 h-9 md:w-10 md:h-10 lg:w-10 lg:h-10 rounded-full border border-[#ff7a2f] flex items-center justify-center text-white hover:bg-[#ff7a2f] hover:text-black transition-all">
            <Instagram size={16} className="md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px]" />
          </a>
          <a href="https://wa.me/919847535194?text=Hey" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 lg:w-10 lg:h-10 rounded-full border border-[#ff7a2f] flex items-center justify-center text-white hover:bg-[#ff7a2f] hover:text-black transition-all">
            <MessageCircle size={16} className="md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px]" />
          </a>
        </div>
        {/* CTA Button - text-[14px] with py-[12px] px-[22px] on mobile */}
        <a href="https://wa.me/919847535194" target="_blank" rel="noopener noreferrer" className="w-full md:w-fit">
          <button className="w-full md:w-fit px-[22px] md:px-6 lg:px-6 py-[12px] md:py-[12px] lg:py-[10px] bg-[#8b2d00] md:bg-black text-white border border-[#ff7a2f] rounded-full font-bold text-[13px] md:text-base lg:text-xl hover:bg-[#ff7a2f] cursor-pointer hover:text-black transition-all shadow-[0_0_20px_rgba(255,122,47,0.2)]">
            Let's Connect
          </button>
        </a>
      </div>

      {/* Reviews Section - text-[11px] on mobile */}
      <div className="mt-auto w-full flex flex-col items-start">
        <div className="flex items-center gap-4 mb-2">
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-black overflow-hidden bg-zinc-800">
                <img src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="User" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <span className="text-[10px] md:text-[10px] font-black tracking-widest text-gray-500 uppercase">30+ REVIEWS</span>
        </div>
        <div className="flex items-center gap-0.5 text-[#ff7a2f]">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} size={10} fill="currentColor" />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
