import { Header } from '@/app/components/Header';
import { HeroSection } from '@/app/components/HeroSection';
import { StatsSection } from '@/app/components/StatsSection';
import { FocusSection } from '@/app/components/FocusSection';
import { CTASection } from '@/app/components/CTASection';
import { WhyInvestSection } from '@/app/components/WhyInvestSection';
import { TargetReturnsSection } from '@/app/components/TargetReturnsSection';
//import { TestimonialSection } from '@/app/components/TestimonialSection';//
import { Footer } from '@/app/components/Footer';
import { useEffect } from "react";



export default function App() {
  useEffect(() => {
  const scrollToHash = () => {
    const hash = window.location.hash; 
    if (!hash) return;

    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 80; // height of your fixed header
    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      headerOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // Run once after React finishes rendering
  setTimeout(scrollToHash, 0);

  // Also handle future hash changes
  window.addEventListener("hashchange", scrollToHash);
  return () =>
    window.removeEventListener("hashchange", scrollToHash);
}, []);

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
        {/*<TestimonialSection />*/}
      </main>
      <Footer />
    </div>
  );
}