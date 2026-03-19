export default function StatsBar() {
  const stats = [
    "SEO & Digital Marketing Learner",
    "Hands-on Practice Projects",
    "Focused on Real Business Growth",
    "Continuous Skill Development"
  ];

  return (
    <div className="flex flex-wrap justify-center lg:justify-between items-center gap-y-6 gap-x-8 pt-12 border-t border-white/5">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center gap-3">
          <span className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] text-center">{stat}</span>
          {index !== stats.length - 1 && (
            <div className="w-1 h-1 bg-[#c7f23a] rounded-full hidden lg:block" />
          )}
        </div>
      ))}
    </div>
  );
}
