import { motion } from 'motion/react';

export default function Quote() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Abstract wave pattern background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,500 C200,400 300,600 500,500 C700,400 800,600 1000,500 L1000,1000 L0,1000 Z" fill="none" stroke="#ff7a2f" strokeWidth="1" />
          <path d="M0,600 C200,500 300,700 500,600 C700,500 800,700 1000,600 L1000,1000 L0,1000 Z" fill="none" stroke="#ff7a2f" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-medium text-white italic leading-tight">
            "People don't buy what you do, they buy <span className="text-[#ff7a2f]">WHY</span> you do it."
          </h2>
          <p className="text-[#ff7a2f] tracking-[0.3em] font-semibold uppercase text-sm">
            — Simon Sinek
          </p>
        </motion.div>
      </div>
    </section>
  );
}
