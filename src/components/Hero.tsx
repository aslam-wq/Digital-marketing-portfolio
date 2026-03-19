import HeroNavbar from './HeroNavbar';
import HeroLeftCard from './HeroLeftCard';
import HeroImageCard from './HeroImageCard';
import StatsBar from './StatsBar';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-black flex items-start justify-center px-6 pt-6 pb-8 md:p-8 md:pt-32">
      <div className="max-w-[1200px] w-full bg-black md:bg-[#0f0f0f] rounded-[2rem] p-0 md:p-10 shadow-2xl relative overflow-hidden md:border border-white/5">
        {/* Background Subtle Glow */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#c7f23a]/5 blur-[100px] rounded-full pointer-events-none" />

        <HeroNavbar />

        {/* Mobile-optimized grid with 40px gap (within 32-48px range) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 mb-12">
          <div className="md:col-span-7 h-full">
            <HeroLeftCard />
          </div>
          <div className="md:col-span-5 h-[320px] md:h-auto">
            <HeroImageCard />
          </div>
        </div>


        <div className="hidden md:block">
          <StatsBar />
        </div>
      </div>
    </section>
  );
}
