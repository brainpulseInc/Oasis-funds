import { ArrowRight } from 'lucide-react';
import workingWithUsBackground from '@/assets/03251257aecf74a2c8fc9660b96b62e92d3caeff.png';
import threeStrategiesBackground from '@/assets/30b2a2ab81dedb4631b15e0345c2c3f6d1bad611.png';

interface CTASectionProps {
  variant: 'orange' | 'blue';
}

export function CTASection({ variant }: CTASectionProps) {
  const isOrange = variant === 'orange';
  const backgroundImage = isOrange ? workingWithUsBackground : threeStrategiesBackground;

  const title = isOrange
    ? 'WORKING WITH US IS DIFFERENT. FIND OUT WHY.'
    : 'THREE STRATEGIES. THREE RETURNS. PICK YOUR PROFILE.';

  const subtitle = isOrange
    ? 'Direct access. Direct deals. Direct operations. No bureaucracy. No hidden fees. No nonsense. Just proven returns.'
    : 'Match your risk tolerance with returns that fit your goals. We operate the assets. You pick the strategy.';

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 flex justify-center">
      <div 
        className="relative overflow-hidden max-w-[1400px] w-full h-[600px] px-8 sm:px-12 lg:px-16 flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight uppercase" style={{ fontFamily: 'var(--font-family-heading)' }}>
            {title}
          </h2>
          <p className="text-base sm:text-lg text-black/80 mb-16 max-w-xl" style={{ fontFamily: 'var(--font-family-body)' }}>
            {subtitle}
          </p>
          <button className="group bg-white text-black px-6 py-3 font-medium hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2 text-2xl">
      <a
  href="/contactform.html"
  className="group bg-white text-black px-6 py-3 font-medium hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2 text-2xl"
>
  Talk to a Partner
  <ArrowRight size={32} className="group-hover:translate-x-1 transition-transform" />
</a>


          </button>
        </div>
      </div>
    </section>
  );
}