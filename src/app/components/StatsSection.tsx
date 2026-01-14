import holdPeriodIcon from '../../assets/2b4e7a21c97424940a6307e106444914e641bf0a.png';
import moicIcon from '../../assets/b2ddcd627301038b24b1409ab590a8ef53ffb69a.png';

export function StatsSection() {
  const stats = [
    {
      icon: moicIcon,
      value: '4 Years',
      label: 'Average Hold Period',
    },
    {
      icon: holdPeriodIcon,
      value: '3x+',
      label: 'MOIC',
    },
  ];

  return (
    <section id="performance" className="bg-black px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Text Content - Left Side */}
          <div className="flex-1 lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight uppercase" style={{ fontFamily: 'var(--font-family-heading)' }}>
              PERFORMANCE-FIRST.
              <br />
              OPERATOR-LED.
              <br />
              FULLY TRANSPARENT.
            </h2>
            <p className="text-white/60 text-sm sm:text-base" style={{ fontFamily: 'var(--font-family-body)' }}>
              By combining operational expertise with patient capital, we generate institutional returns through assets we actively manage.
            </p>
          </div>

          {/* Stats Cards - Right Side */}
          <div className="w-full lg:flex-1 lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-zinc-900 p-6 border border-white/10 hover:border-white/20 transition-colors">
                <img src={stat.icon} alt={stat.label} className="w-9 h-9 mb-4" />
                <div className="text-[45px] font-bold mb-2" style={{ fontFamily: 'var(--font-family-heading)', color: '#64FFE0' }}>{stat.value}</div>
                <div className="text-white/60 text-sm" style={{ fontFamily: 'var(--font-family-body)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}