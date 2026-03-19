import { motion } from 'motion/react';

const expertiseSkills = [
  { name: 'Canva', value: 99 },
  { name: 'Photography', value: 95 },
  { name: 'Branding and Identity', value: 90 },
  { name: 'Illustrator', value: 89 },
];

const digitalSkills = [
  { name: 'SEARCH ENGINE OPTIMIZATION', value: 99 },
  { name: 'EMAIL MARKETING', value: 95 },
  { name: 'SOCIAL MEDIA MARKETING', value: 98 },
  { name: 'GOOGLE ADS', value: 97 },
  { name: 'WEB DEVELOPER', value: 98 },
  { name: 'CONTENT MARKETING', value: 97 },
  { name: 'SEARCH ENGINE MARKETING', value: 95 },
];

export default function Expertise() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-tight">
            THE VALUE OF A FREELANCE DIGITAL MARKETING ANALYST IN DUBAI BRINGS
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column */}
          <div className="space-y-12">
            <div>
              <h3 className="text-white text-xl md:text-2xl font-bold mb-6 uppercase tracking-widest">EXPERTISE</h3>
              <p className="text-gray-400 text-sm md:text-base mb-8 leading-relaxed">
                I've been leveling up across key digital platforms, lately growing in design, strategy, and analytics. I've even been using fun visuals like progress bars to track that growth. It's all part of my journey as a freelance digital marketing analyst in Dubai, UAE, I always learning and always getting better.
              </p>
              <div className="space-y-6">
                {expertiseSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-white uppercase tracking-widest">
                      <span className="bg-[#ff7a2f] px-3 py-1 rounded-sm text-black">{skill.name}</span>
                      <span>{skill.value}%</span>
                    </div>
                    <div className="h-4 w-full bg-white rounded-sm overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                        className="h-full bg-[#ff7a2f]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white text-xl md:text-2xl font-bold mb-6 uppercase tracking-widest">DIGITAL MARKETING</h3>
              <p className="text-gray-400 text-sm md:text-base mb-8 leading-relaxed">
                Each progress bar tells a piece of my story. The skills I've built, the lessons I've learned, and how I've grown in this field. It's not just about what I know, but how far I've come as a freelance digital marketing analyst in Dubai, UAE.
              </p>
              <div className="space-y-6">
                {digitalSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-white uppercase tracking-widest">
                      <span className="bg-[#ff7a2f] px-3 py-1 rounded-sm text-black">{skill.name}</span>
                      <span>{skill.value}%</span>
                    </div>
                    <div className="h-4 w-full bg-white rounded-sm overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                        className="h-full bg-[#ff7a2f]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-8 lg:gap-12">
            <div className="p-10 bg-zinc-900/40 border border-white/5 rounded-3xl flex flex-col justify-between">
              <div>
                <h3 className="text-[#ff7a2f] text-xl md:text-2xl font-bold mb-6 uppercase">WEB DEVELOPMENT TRAINING</h3>
                <p className="text-[#ff7a2f] font-bold mb-2">Luminar Technolab, Calicut</p>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Hands-on training in modern web technologies including HTML, CSS, JavaScript, React, and Django.
                </p>
              </div>
            </div>

            <div className="p-10 bg-zinc-900/40 border border-white/5 rounded-3xl flex flex-col justify-between">
              <div>
                <h3 className="text-[#ff7a2f] text-xl md:text-2xl font-bold mb-6 uppercase">YOUR DIGITAL GROWTH PARTNER</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  As a passionate digital marketing analyst and web developer based in Dubai, UAE, I focus on helping businesses build a strong and meaningful online presence. My journey began with a curiosity about how brands grow in the digital world, which led me to explore SEO, social media marketing, content strategy, and web development.
                </p>
              </div>
            </div>

            <div className="p-10 bg-zinc-900/40 border border-white/5 rounded-3xl flex flex-col justify-between">
              <div>
                <h3 className="text-[#ff7a2f] text-xl md:text-2xl font-bold mb-6 uppercase">PRE - UNIVERSITY EDUCATION</h3>
                <p className="text-[#ff7a2f] font-bold mb-2">Pre - University Board.</p>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  I completed my higher secondary education in Kerala, where I built a strong academic base that sparked my curiosity and set the stage for my future learning and career journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
