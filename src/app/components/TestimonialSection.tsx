import { Quote } from 'lucide-react';

export function TestimonialSection() {
  return (
    <section className="bg-black px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto text-center">
        <Quote className="text-white/20 mx-auto mb-6" size={48} />
        <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-family-body)' }}>
          "Selling my SaaS was the hardest decision. Oasis made it feel like I was handing it off to people who cared as much as I did."
        </blockquote>
        <div className="text-white/60 text-sm" style={{ fontFamily: 'var(--font-family-body)' }}>
          - App Founder
        </div>
      </div>
    </section>
  );
}