import thesisDrivenIcon from '@/assets/82725e14400bce2a2e1ebf9e82f0e1bba5abf802.png';
import operatorMindsetIcon from '@/assets/4f0bfd6cb155701650d8fa3ec0035fa69dfcd29c.png';
import returnsCompoundIcon from '@/assets/e3296b32cc0fe24cc28b268ff33ac9bf2874a560.png';

export function WhyInvestSection() {
  const benefits = [
    {
      icon: thesisDrivenIcon,
      title: 'Thesis-driven investing',
      description: 'We target companies and real estate with clear conviction—sectors we know deeply, where we can source deals others miss.',
    },
    {
      icon: operatorMindsetIcon,
      title: 'Operator mindset',
      description: 'We don\'t just write checks. We roll up our sleeves on operations, growth, and value creation from day one.',
    },
    {
      icon: returnsCompoundIcon,
      title: 'Returns that compound',
      description: '+300% returns over 4 years. We focus on durable cash flows and disciplined exits that build lasting wealth.',
    },
  ];

  return (
    <section id="why-us" className="bg-black px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 uppercase" style={{ fontFamily: 'var(--font-family-heading)' }}>WHY INVEST WITH US</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-zinc-900 p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-colors">
              <img src={benefit.icon} alt={benefit.title} className="w-10 h-10 mb-6" />
              <h3 className="text-xl font-medium text-white mb-4" style={{ fontFamily: 'var(--font-family-heading)' }}>{benefit.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-family-body)' }}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}