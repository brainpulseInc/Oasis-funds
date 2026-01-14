export function TargetReturnsSection() {
  const strategies = [
    {
      title: 'Private Equity',
      targetIRR: '25%+',
      role: 'Growth Engine',
    },
    {
      title: 'Real Estate',
      targetIRR: '15-20%',
      role: 'Stable Cash Flow',
    },
    {
      title: 'Secured Lending',
      subtitle: '(Coming soon)',
      targetIRR: '8-12%',
      role: 'Capital Perservation',
    },
  ];

  return (
    <section id="target-returns" className="bg-black px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 uppercase" style={{ fontFamily: 'var(--font-family-heading)' }}>TARGET RETURNS</h2>
          <p className="text-white/60 text-base sm:text-lg" style={{ fontFamily: 'var(--font-family-body)' }}>
            A portfolio built for all cycles
          </p>
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden md:flex gap-8 lg:gap-16">
          <div className="flex flex-col justify-between py-6">
            <p className="text-white/60 text-sm h-[80px] flex items-center" style={{ fontFamily: 'var(--font-family-body)' }}>Strategy</p>
            <p className="text-white/60 text-sm h-[80px] flex items-center" style={{ fontFamily: 'var(--font-family-body)' }}>Target IRR</p>
            <p className="text-white/60 text-sm h-[80px] flex items-center" style={{ fontFamily: 'var(--font-family-body)' }}>Role In Portfolio</p>
          </div>
          <div className="flex-1 grid grid-cols-3 gap-6">
            {strategies.map((strategy, index) => (
              <div key={index} className="bg-zinc-900 p-6 border border-white/10 hover:border-white/20 transition-colors flex flex-col justify-between">
                <div className="h-[80px] flex items-center">
                  <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-family-heading)' }}>
                    {strategy.title}
                    {strategy.subtitle && <span className="text-xs font-light ml-2">{strategy.subtitle}</span>}
                  </h3>
                </div>
                <div className="h-[80px] flex items-center">
                  <p className="text-white text-base" style={{ fontFamily: 'var(--font-family-body)' }}>{strategy.targetIRR}</p>
                </div>
                <div className="h-[80px] flex items-center">
                  <p className="text-white text-base" style={{ fontFamily: 'var(--font-family-body)' }}>{strategy.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          {strategies.map((strategy, index) => (
            <div key={index} className="bg-zinc-900 p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 uppercase" style={{ fontFamily: 'var(--font-family-heading)' }}>
                {strategy.title}
                {strategy.subtitle && <span className="text-sm font-light ml-2">{strategy.subtitle}</span>}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm" style={{ fontFamily: 'var(--font-family-body)' }}>Target IRR</span>
                  <span className="text-white font-medium" style={{ fontFamily: 'var(--font-family-body)' }}>{strategy.targetIRR}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm" style={{ fontFamily: 'var(--font-family-body)' }}>Role In Portfolio</span>
                  <span className="text-white font-medium" style={{ fontFamily: 'var(--font-family-body)' }}>{strategy.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}