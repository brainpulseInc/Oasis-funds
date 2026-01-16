import { ArrowRight } from 'lucide-react';
import heroBackground from '@/assets/755a8251a8bf535e147592dce2bd54e709fe81ae.png';

export function HeroSection() {
  return (
    <section id="hero" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 flex justify-center">
      <div 
        className="relative overflow-hidden max-w-[1400px] w-full h-[600px] px-8 sm:px-12 lg:px-16 flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4 leading-tight uppercase" style={{ fontFamily: 'var(--font-family-heading)' }}>
            INSTITUTIONAL RETURNS.
            <br />
            INDIVIDUAL ACCESS.
          </h1>
          <p className="text-base sm:text-lg text-black/80 mb-16 max-w-xl" style={{ fontFamily: 'var(--font-family-body)' }}>
            Partnering with accredited investors to compound wealth through Private Equity, Real Estate and Private Debt.
          </p>
          <button className="group bg-white text-black px-6 py-3 font-medium hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2 text-2xl">
            Talk to a Partner
            <ArrowRight size={32} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}