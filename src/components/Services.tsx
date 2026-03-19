import { motion } from 'motion/react';
import { Globe, Megaphone, Share2, Search, BarChart3, Video } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Building websites that don\'t just look good, they feel right. Because your brand deserves a home that truly connects.',
  },
  {
    icon: Megaphone,
    title: 'Content Marketing',
    description: 'Telling stories that speak, not just sell. We create content that feels real, not robotic. Because true connections begin with authentic storytelling.',
    link: 'https://www.semrush.com/blog/what-is-content-marketing/',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'We turn scrolls into stops and clicks into conversations. Because your brand deserves to shine where your audience lives on social.',
    link: 'https://www.instagram.com/20xhub/',
  },
  {
    icon: Search,
    title: 'SEO',
    description: 'Search Engine Optimization helps your website show up when people search online. The better your SEO, the easier it is for the right people to find you.',
    link: 'https://www.semrush.com/blog/what-is-seo/',
  },
  {
    icon: BarChart3,
    title: 'SEM',
    description: 'Search Engine Marketing, is a paid strategy that puts your brand at the top of search results to reach the right people at the right time.',
    link: 'https://www.semrush.com/blog/search-engine-marketing/',
  },
  {
    icon: Video,
    title: 'Videography',
    description: 'Videography is the art of telling stories through moving visuals, capturing moments that connect, inspire, and stay with your audience.',
    link: 'https://www.adobe.com/in/creativecloud/video/discover/what-is-videography.html',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase"
          >
            WHAT I <span className="text-[#ff7a2f]">HAVE FOR YOU</span>
          </motion.h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            As the best Freelance Digital Marketing Analyst in Dubai, UAE, I help you build a powerful digital presence through smart strategies, engaging content, and personalized marketing solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 bg-zinc-900/40 border border-white/10 rounded-2xl hover:border-[#ff7a2f]/50 transition-all duration-300 relative overflow-hidden"
            >
              <a href={(service as any).link || "https://agency-t8bx.vercel.app/"} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20" />

              {/* Glow effect */}
              <div className="absolute -inset-px bg-gradient-to-br from-[#ff7a2f]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 bg-[#ff7a2f]/10 rounded-lg flex items-center justify-center mb-6 text-[#ff7a2f]">
                  <service.icon size={24} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3 group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
                <div className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2 group/btn">
                  Click here
                  <div className="w-0 h-px bg-white group-hover/btn:w-4 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
