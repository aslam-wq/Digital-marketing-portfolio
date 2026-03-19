import { motion } from 'motion/react';

export default function VisionMission() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
            THE VISION BEHIND MY<span className="text-[#ff7a2f]"> DIGITAL WORK</span>
          </h2>
          <p className="text-gray-500 mt-2">As a freelance digital marketing consultant in Dubai, UAE</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-zinc-900/40 border border-white/10 rounded-3xl"
          >
            <h3 className="text-[#ff7a2f] text-xl md:text-2xl font-bold mb-6">Vision</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              As a freelance digital marketing analyst in Dubai, UAE, I believe every brand has a story worth telling. My vision is to help small businesses and personal brands grow with purpose and clarity. I want digital marketing to feel less like pressure, and more like empowerment. It's not just about reach or rankings; it's about creating real, lasting connections. I see a future where strategy meets authenticity, and every voice gets the chance to be heard online.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-zinc-900/40 border border-white/10 rounded-3xl"
          >
            <h3 className="text-[#ff7a2f] text-xl md:text-2xl font-bold mb-6">Mission</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              My mission as a freelance digital marketing analyst in Dubai, UAE is to support businesses with simple, honest, and effective marketing. I offer services in SEO, SEM, SMM, and web development that are tailored, not templated. My goal is to make marketing feel easy to understand and aligned with your vision. No fluff, no confusion, just clear strategies that help your brand grow at your pace. I'm here to guide you with confidence, consistency, and care at every step of your digital journey.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
