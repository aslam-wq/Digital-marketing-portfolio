import { motion } from 'motion/react';

export default function FinalCTA() {
  return (
    <section className="relative py-40 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/vision/1920/1080"
          alt="Vision"
          className="w-full h-full object-cover grayscale opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-7xl font-bold text-white tracking-tight">
            Got a Vision? <br />
            <span className="text-[#ff7a2f]">Let's Bring It to Life!</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto">
            I'm always excited to collaborate on new and innovative projects. Whether you're starting from scratch or refining an existing idea.
          </p>
          <a href="https://wa.me/919847535194" target="_blank" rel="noopener noreferrer">
            <button className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 text-sm md:text-base">
              Let’s Connect
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
