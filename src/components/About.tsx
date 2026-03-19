import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-8xl font-bold text-white tracking-tighter"
          >
            WHO <span className="text-[#ff7a2f]">AM I</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Hi, I'm <span className="text-[#ff7a2f] font-semibold">Aslam</span>, a
              <span className="text-[#ff7a2f]"> Freelance Digital Marketing Analyst </span>
              and creative content creator based in
              <span className="text-white text-[#ff7a2f]"> Dubai, UAE</span>, passionate about helping brands grow through effective digital strategies and engaging content.
            </p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              My journey into the digital space wasn't just a career choice; it was a calling. From the moment I discovered how powerful digital storytelling can be, I knew I wanted to be a part of this ever-evolving world. Whether it's designing thumb-stopping content, managing social media, running campaigns, or helping brands find their unique online voice, I dive deep with curiosity, creativity, and a whole lot of heart.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Currently, I’m continuously sharpening my digital marketing skills through self-learning, hands-on practice, and real-world projects. I spend time exploring the latest strategies in SEO, social media marketing, and content creation while constantly experimenting and improving my understanding of the digital landscape.
            </p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              I believe in combining creative thinking with data-driven insights to build meaningful and effective digital strategies. My focus is always on learning, adapting, and growing in this fast-moving digital world.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 p-8 md:p-12 bg-zinc-900/50 border border-white/10 rounded-3xl flex flex-col md:flex-row items-center gap-12"
        >
          <div className="w-full md:w-1/3 aspect-video rounded-2xl overflow-hidden">
            <img
              src="https://cqcnzhmmqqkatyhxhvzw.supabase.co/storage/v1/object/public/projects/Screenshot%202026-01-08%20130110.png"
              alt="Workspace"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl md:text-3xl font-bold text-white mb-4">
              Let's grow your brand together.
            </h3>
            <p className="text-gray-400 text-base md:text-lg">
              Discover smart digital solutions tailored for your business and turn your ideas into real impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
