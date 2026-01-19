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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
      } border-b border-white/10`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Oasis Funds" className="h-12 w-auto" />
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
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay (fixed, full-screen) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[9999] md:hidden">
          {/* Backdrop */}
          <button
            className="absolute inset-0 bg-black/70"
            aria-label="Close menu overlay"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Panel */}
          <div className="relative mx-4 mt-4 rounded-xl bg-black border border-white/10 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Oasis Funds" className="h-10 w-auto" />
                <span className="text-white text-lg font-medium">Oasis Funds</span>
              </div>

              <button
                aria-label="Close menu"
                className="text-white/90 p-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-2 px-4 py-4">
              <button
                onClick={() => scrollToSection('our-focus')}
                className="text-left text-white/80 hover:text-white py-3"
                style={{ fontFamily: 'var(--font-family-body)' }}
              >
                Our Focus
              </button>
              <button
                onClick={() => scrollToSection('why-us')}
                className="text-left text-white/80 hover:text-white py-3"
                style={{ fontFamily: 'var(--font-family-body)' }}
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection('target-returns')}
                className="text-left text-white/80 hover:text-white py-3"
                style={{ fontFamily: 'var(--font-family-body)' }}
              >
                Target Returns
              </button>

              <a
                href="/contactform.html"
                className="mt-2 inline-flex items-center justify-center bg-white text-black px-6 py-3 rounded text-sm font-medium hover:bg-white/90 transition-colors"
                style={{ fontFamily: 'var(--font-family-body)' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
