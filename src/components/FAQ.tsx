import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Who is Aslam?',
    answer: "I'm Aslam, a passionate Digital Marketing Analyst and web development enthusiast based in Dubai, UAE. I focus on helping businesses grow their online presence through SEO, content strategy, social media marketing, and effective digital solutions.",
  },
  {
    question: 'What exactly does a Freelance digital marketing analyst do?',
    answer: 'A freelance digital marketing analyst researches market trends, tracks website performance, manages social media campaigns, and uses data to help businesses make better marketing decisions. My goal is to optimize your online presence for maximum growth.',
  },
  {
    question: 'What makes this a reliable freelance digital marketing service in the UAE?',
    answer: 'My approach blends data-driven strategy with creative soul. I don\'t just look at numbers; I look at the human connection. Being based in Dubai gives me a unique perspective on the local market while applying global standards.',
  },
  {
    question: 'What makes this digital marketing approach different from others?',
    answer: 'Personalization. I don\'t use templates. Every strategy is built from scratch based on your specific goals. I treat your brand like my own, ensuring every piece of content and every campaign reflects your true voice.',
  },
  {
    question: 'Why should I work with someone based in Dubai, UAE?',
    answer: 'Dubai is a global hub with a diverse and fast-paced market. Working with someone local means I understand the cultural nuances, the competitive landscape, and the specific platforms that work best in this region.',
  },
  {
    question: 'What services are offered as a freelance digital marketing analyst in Dubai, UAE?',
    answer: 'I offer a full suite of services including Web Development, SEO, SEM, Social Media Marketing, Content Creation, and Videography. I provide end-to-end solutions to build and grow your digital presence.',
  },
  {
    question: 'Why should I choose this freelance digital marketing service in Dubai?',
    answer: 'Because I care. I listen. I create. I deliver results with a personal touch. You get expert-level support without the overhead of a big agency, allowing for more flexibility and direct communication.',
  },
  {
    question: 'Who are these digital marketing services for?',
    answer: 'I work with small businesses, startups, and personal brands who are looking to establish or scale their online presence. If you have a vision and need a partner to bring it to life, we\'re a good fit.',
  },
  {
    question: 'How do I get started?',
    answer: 'Simply click any of the "Let\'s Connect" or "Get In Touch" buttons on this site. We\'ll start with a consultation to understand your needs and see how I can best help you achieve your goals.',
  },
  {
    question: 'How can I get in touch to discuss a digital marketing project?',
    answer: 'You can reach out via the contact form, WhatsApp, or email. I\'m also active on LinkedIn and Instagram. Let\'s start a conversation about your brand\'s future!',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ff7a2f] via-transparent to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-bold text-white uppercase tracking-tighter">FAQ</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl overflow-hidden bg-zinc-900/20 backdrop-blur-sm"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-white text-sm md:text-base font-medium pr-8">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-[#ff7a2f] transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''
                    }`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-400 text-[13px] md:text-sm border-t border-white/5 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
