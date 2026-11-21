import { ArrowRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NAV_ITEMS } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-900/90 bg-[#050507]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* Stylized Brand Wordmark inspired by reference theme */}
        <a
          href="#home"
          className="group relative inline-flex flex-col leading-none whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400"
        >
          <span className="font-display text-xl font-bold italic tracking-tight text-yellow-400 transition-colors group-hover:text-yellow-300">
            Bairavi S
          </span>
          <svg
            viewBox="0 0 96 8"
            className="mt-0.5 h-1.5 w-20 text-yellow-400/80"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 5.5C28 1.5 64 1.5 94 4.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </a>

        <nav className="hidden lg:flex items-center gap-4 xl:gap-6" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-1.5 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400 ${
                  isActive ? 'text-yellow-400' : 'text-zinc-300 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-yellow-400"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex min-h-[40px] items-center gap-1.5 rounded-full bg-yellow-400 px-5 py-2 text-xs font-bold text-zinc-950 whitespace-nowrap shrink-0 shadow-[0_0_20px_rgba(250,204,21,0.22)] transition-all duration-150 hover:bg-yellow-300 hover:shadow-[0_0_28px_rgba(250,204,21,0.38)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
          >
            Let&apos;s Talk
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-800 bg-[#101013] text-zinc-200 transition-colors hover:border-yellow-400/50 hover:text-white focus-visible:outline-2 focus-visible:outline-yellow-400 lg:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-zinc-800 bg-[#0B0B0E] px-4 py-4 sm:px-6 lg:hidden"
        >
          <ul className="grid grid-cols-2 gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={handleLinkClick}
                    className={`flex min-h-[44px] items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-yellow-400/15 text-yellow-300'
                        : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mt-3 border-t border-zinc-800/80 pt-3">
            <a
              href="#resume"
              onClick={handleLinkClick}
              className="flex min-h-[44px] w-full items-center justify-center rounded-full bg-yellow-400 px-4 py-2.5 text-sm font-bold text-zinc-950 transition-colors hover:bg-yellow-300"
            >
              View Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
