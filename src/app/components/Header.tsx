import { useState, useEffect } from 'react';
import logo from '@/assets/5c4ecdc30505b86ca1ac7c5da1b128f4b98196c5.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of the header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'} border-b border-white/10`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Giant Funds" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-8">
            <button
              onClick={() => scrollToSection('our-focus')}
              className="text-white/80 hover:text-white transition-colors text-base"
              style={{ fontFamily: 'var(--font-family-body)' }}
            >
              Our Focus
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="text-white/80 hover:text-white transition-colors text-base"
              style={{ fontFamily: 'var(--font-family-body)' }}
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection('target-returns')}
              className="text-white/80 hover:text-white transition-colors text-base"
              style={{ fontFamily: 'var(--font-family-body)' }}
            >
              Target Returns
            </button>
          </nav>

          {/* Contact Us Button */}
<a
  href="/contactform.html"
  className="hidden md:block bg-white text-black px-6 py-2 rounded text-sm font-medium hover:bg-white/90 transition-colors"
  style={{ fontFamily: 'var(--font-family-body)' }}
>
  Contact Us
</a>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('our-focus')}
                className="text-white/80 hover:text-white transition-colors text-sm text-left"
                style={{ fontFamily: 'var(--font-family-body)' }}
              >
                Our Focus
              </button>
              <button
                onClick={() => scrollToSection('why-us')}
                className="text-white/80 hover:text-white transition-colors text-sm text-left"
                style={{ fontFamily: 'var(--font-family-body)' }}
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection('target-returns')}
                className="text-white/80 hover:text-white transition-colors text-sm text-left"
                style={{ fontFamily: 'var(--font-family-body)' }}
              >
                Target Returns
              </button>
              <button className="bg-white text-black px-6 py-2 rounded text-sm font-medium hover:bg-white/90 transition-colors" style={{ fontFamily: 'var(--font-family-body)' }}>
                Sign In
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}