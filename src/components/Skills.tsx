import { motion } from 'motion/react';

const skills = [
  { name: 'Digital Marketer', progress: 95 },
  { name: 'Content Creator', progress: 98 },
  { name: 'Web Developer', progress: 85 },
  { name: 'Videographer', progress: 90 },
  { name: 'Entrepreneur', progress: 80 },
];

export default function Skills() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-white font-medium tracking-wide">{skill.name}</span>
              </div>
              <div className="h-0.5 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut', delay: index * 0.1 }}
                  className="h-full bg-[#ff7a2f]"
                />
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-right"
        >
          <h2 className="text-6xl md:text-8xl font-bold text-white/10 tracking-tighter uppercase leading-none">
            BEHIND THE <br />
            <span className="text-[#ff7a2f]/20">BRAND</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
