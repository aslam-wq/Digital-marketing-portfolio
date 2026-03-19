import { motion } from 'motion/react';

const blogs = [
  {
    title: 'Building Your Brand Voice with a Freelance Digital Marketing Analyst in Dubai, UAE by Your Side.',
    excerpt: 'Authentic messaging that speaks directly to your ideal audience. In today\'s noisy digital world, it\'s not enough to just "be online." Your brand needs a voice, one that feels real, relatable, and unmistakably you.',
    image: 'https://cqcnzhmmqqkatyhxhvzw.supabase.co/storage/v1/object/public/projects/NextWeb.png',
  },
  {
    title: 'Why Hiring a Freelance Digital Marketing Analyst in Dubai is Your Best Move',
    excerpt: 'Flexible, expert support that grows with your business, no long contracts, just results. Let\'s be honest—running a business is a lot. And while you know digital marketing matters, hiring a full-time team might not be realistic right now.',
    image: 'https://cqcnzhmmqqkatyhxhvzw.supabase.co/storage/v1/object/public/projects/Screenshot%202026-01-08%20130129.png',
  },
];

export default function Blog() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase"
          >
            A DEEPER LOOK INTO <span className="text-[#ff7a2f]">DIGITAL MARKETING</span>
          </motion.h2>
          <p className="text-gray-400 text-sm md:text-base">Insights from Freelance Digital Marketing Analyst in Dubai, UAE</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-zinc-900/40 border border-[#ff7a2f]/20 rounded-3xl overflow-hidden hover:border-[#ff7a2f]/50 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-[#ff7a2f] transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base mb-8 line-clamp-4">
                  {blog.excerpt}
                </p>
                <a href="https://wa.me/919847535194" target="_blank" rel="noopener noreferrer">
                  <button className="px-6 py-2 border border-[#ff7a2f] text-white rounded-full hover:bg-[#ff7a2f] hover:text-black transition-all font-medium text-[13px] md:text-sm">
                    Let's Connect
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm md:text-base mb-6 max-w-2xl mx-auto italic">
            From the Desk of 20XHUB as a Freelance Digital Marketing Analyst in Dubai, UAE: Stay inspired with insights, tips, and stories that help you grow.
          </p>
          <a href="www.linkedin.com/in/aslam-p" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-3 bg-[#ff7a2f] text-black rounded-full font-bold hover:bg-white transition-all text-sm md:text-base">
              Discover It
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
