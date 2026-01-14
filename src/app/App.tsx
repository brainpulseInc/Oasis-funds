import { Header } from '@/app/components/Header';
import { HeroSection } from '@/app/components/HeroSection';
import { StatsSection } from '@/app/components/StatsSection';
import { FocusSection } from '@/app/components/FocusSection';
import { CTASection } from '@/app/components/CTASection';
import { WhyInvestSection } from '@/app/components/WhyInvestSection';
import { TargetReturnsSection } from '@/app/components/TargetReturnsSection';
import { TestimonialSection } from '@/app/components/TestimonialSection';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <StatsSection />
        <FocusSection />
        <CTASection variant="orange" />
        <WhyInvestSection />
        <CTASection variant="blue" />
        <TargetReturnsSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
}