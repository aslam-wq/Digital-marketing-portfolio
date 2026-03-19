import { motion } from 'motion/react';

const stats = [
  { label: 'Project Completed', value: '8+' },
  { label: 'Year Experience', value: '1+' },
  { label: 'Happy Customer', value: '10+' },
];

export default function Impact() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-5xl font-bold text-white mb-8 uppercase tracking-tight"
        >
          THE IMPACT OF <a href="https://agency-t8bx.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#ff7a2f] hover:underline">20XHUB</a>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-sm md:text-base max-w-4xl mx-auto mb-20 leading-relaxed"
        >
          Hi, I'm Aslam, the creator of <a href="https://agency-t8bx.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-[#ff7a2f]">20XHUB</a>.
          I'm a Freelance Digital Marketing Analyst and creative content creator based in Dubai, UAE.
          Through 20XHUB, I focus on helping brands grow their online presence with smart digital strategies,
          engaging content, and a strong understanding of audience behavior. My approach combines creativity
          with data-driven insights to build meaningful connections between brands and their customers.
        </motion.p>

        <div className="flex flex-wrap md:flex-row justify-center gap-2 sm:gap-4 md:gap-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-1 sm:gap-2 md:gap-4"
            >
              <div className="text-3xl sm:text-4xl md:text-8xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-400 font-medium tracking-widest uppercase text-[8px] sm:text-[10px] md:text-sm text-left max-w-[80px] sm:max-w-[120px] leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
