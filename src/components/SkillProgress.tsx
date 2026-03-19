import { motion } from 'motion/react';

const skills = [
  { name: 'Communication Skill', value: 100 },
  { name: 'Time Management', value: 97 },
  { name: 'Problem Solving', value: 96 },
  { name: 'Design Thinking and Planning', value: 99 },
  { name: 'Photography', value: 98 },
  { name: 'Video Editing', value: 98 },
];

export default function SkillProgress() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white font-medium text-sm tracking-wide">{skill.name}</span>
                <span className="text-[#ff7a2f] font-bold text-sm">{skill.value}%</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut', delay: index * 0.1 }}
                  className="h-full bg-[#ff7a2f]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
