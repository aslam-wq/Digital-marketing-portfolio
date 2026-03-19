import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Fathima',
    role: 'Editor',
    image: 'https://cqcnzhmmqqkatyhxhvzw.supabase.co/storage/v1/object/public/projects/download%20(75).jpeg',
    text: 'Aslam truly brings brands to life online. His attention to detail, creative mindset, and deep understanding of trends helped me build a consistent and professional presence across social media. With 20XHUB on my side, I finally feel confident in how my brand shows up online.',
  },
  {
    name: 'Maryam',
    role: 'Digital Marketer',
    image: 'https://cqcnzhmmqqkatyhxhvzw.supabase.co/storage/v1/object/public/projects/download%20(50).jpeg',
    text: 'Working with Aslam and 20XHUB was a total game-changer for my brand. He understood exactly what I needed, brought in fresh content ideas, and handled everything from strategy to execution so smoothly. My social media engagement grew consistently, and I finally felt like my brand had a voice online!',
  },
  {
    name: 'Robah',
    role: 'Content Creator',
    image: 'https://cqcnzhmmqqkatyhxhvzw.supabase.co/storage/v1/object/public/projects/61467871-f160-4f68-aa91-990436ce7d20.jpeg',
    text: 'Aslam is a rare mix of creativity and strategy. As a content creator, he brings so much value to the table. His designs, captions, and campaign ideas always align perfectly with my goals. Plus, his positive energy makes every project super enjoyable.',
  },
  {
    name: 'Naseeb',
    role: 'Web Developer',
    image: 'https://cqcnzhmmqqkatyhxhvzw.supabase.co/storage/v1/object/public/projects/eba07472-1b2b-4ad7-aa7b-f9f6cf358368.jpeg',
    text: '20XHUB is my go to for anything digital. From SEO tweaks to planning social media ads, Aslam knows his stuff and explains everything in a way that\'s easy to understand. He\'s reliable, responsive, and genuinely cares about helping your brand grow.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-4 uppercase"
          >
            TESTIMONIAL
          </motion.h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Truly grateful to share the kind words and experiences of those I've worked with as a <span className="text-[#ff7a2f]">Freelance Digital Marketing Analyst in Dubai, UAE</span>, stories built on trust, growth, and meaningful impact.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-full p-8 bg-zinc-900/40 border border-[#ff7a2f]/20 rounded-3xl flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#ff7a2f]">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{item.name}</h4>
                    <p className="text-[#ff7a2f] text-xs uppercase tracking-widest">{item.role}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow italic">
                  "{item.text}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
