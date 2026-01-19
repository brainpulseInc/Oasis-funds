import privateEquityIcon from '@/assets/d7f46adb7e6c7d8c645dbefc60c4e8374fc5f660.png';
import realEstateIcon from '@/assets/a0cabf8ac5219d374e691826e017fb570e01ff19.png';
import diversifiedLendingIcon from '@/assets/c85113486647d85f8f2b73d16b9e2c42fd763330.png';

export function FocusSection() {
  const focuses = [
    {
      icon: privateEquityIcon,
      title: 'Private Equity',
      description: 'We acquire profitable SaaS companies and as operators, we invest in product development and sales growth.',
    },
    {
      icon: realEstateIcon,
      title: 'Real Estate',
      description: 'We buy cash-flowing multi-family properties in stable Canada markets. Focus on value-add opportunities through better management and strategic renovations.',
    },
    {
      icon: diversifiedLendingIcon,
      title: 'Secured Lending',
      subtitle: '(Coming 2026)',
      description: 'Provide secured loans to real estate investors and developers. First mortgages and mezzanine financing available.',
    },
  ];

  return (
    <section id="our-focus" className="bg-black px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 uppercase" style={{ fontFamily: 'var(--font-family-heading)' }}>OUR FOCUS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {focuses.map((focus, index) => (
            <div key={index} className="bg-zinc-900 p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-colors">
              <img src={focus.icon} alt={focus.title} className="w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4 uppercase" style={{ fontFamily: 'var(--font-family-heading)' }}>
                {focus.title}
                {focus.subtitle && <span className="text-sm font-light ml-2">{focus.subtitle}</span>}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-family-body)' }}>{focus.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}