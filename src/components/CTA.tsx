import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative p-12 md:p-20 bg-zinc-900/50 border border-[#ff7a2f]/30 rounded-[3rem] overflow-hidden text-left md:text-center"
        >
          {/* Glow effect */}
          <div className="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 w-full md:w-1/2 h-1/2 bg-[#ff7a2f]/10 blur-[100px] rounded-full" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Power Up Your Brand with the Best <span className="text-[#ff7a2f]">Freelance Digital Marketing Analyst</span> in Dubai
            </h2>
            <p className="text-gray-400 mb-10 text-sm md:text-lg leading-relaxed">
              Struggling to Grow Your Business Online in Dubai? You're not alone; many small businesses face the same challenge: they have a great product or service, but no clear digital marketing strategy to reach the right audience. That's where I come in. I'm Aslam, the creator of 20XHUB, a freelance digital marketing consultant based in Dubai, UAE. I help businesses like yours build a strong online presence with strategies that actually work.
            </p>
            <a href="https://wa.me/919847535194" target="_blank" rel="noopener noreferrer">
              <button className="px-10 py-4 bg-[#ff7a2f] text-black font-bold rounded-full hover:bg-white hover:shadow-[0_0_30px_rgba(255,122,47,0.4)] transition-all duration-300 text-sm md:text-base">
                Get In Touch
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
