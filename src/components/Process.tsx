import { motion } from 'motion/react';
import { Target, Zap, MousePointer2, Users } from 'lucide-react';

const steps = [
  {
    id: '#1',
    title: 'PLAN',
    description: 'Start with a plan that\'s built around what your business truly wants to achieve.',
    icon: Target,
  },
  {
    id: '#2',
    title: 'ATTRACT',
    description: 'Get noticed online and draw your ideal audience straight to your site.',
    icon: Zap,
  },
  {
    id: '#3',
    title: 'CAPTURE',
    description: 'Grab the attention of your ideal clients and turn it into real opportunity.',
    icon: MousePointer2,
  },
  {
    id: '#4',
    title: 'ENGAGE',
    description: 'Show up online with content that speaks to your audience and keeps them coming back.',
    icon: Users,
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase"
          >
            How We <span className="text-[#ff7a2f]">Grow Your Brand Online</span>
          </motion.h2>
          <p className="text-gray-500 text-sm md:text-base">As a freelance digital marketing analyst in dubai</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-zinc-900/40 border border-white/5 rounded-2xl text-center flex flex-col items-center"
            >
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6 text-white border border-white/10">
                <step.icon size={20} />
              </div>
              <span className="text-[#ff7a2f] font-bold text-base md:text-lg mb-2">{step.id} {step.title}</span>
              <p className="text-gray-400 text-[13px] md:text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
