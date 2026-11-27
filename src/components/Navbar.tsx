import { ArrowRight, Menu, Moon, Sun, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { NAV_ITEMS } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? 'border-[var(--border-card)] bg-[var(--bg-header)] shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.45)]'
          : 'border-[var(--border-section)] bg-[var(--bg-header)] shadow-none'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8">
        {/* Stylized Brand Wordmark */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="group relative inline-flex flex-col leading-none whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400"
        >
          <span className="font-display text-xl font-bold italic tracking-tight text-amber-600 dark:text-yellow-400 transition-colors group-hover:text-amber-500 dark:group-hover:text-yellow-300">
            Bairavi S
          </span>
          <svg
            viewBox="0 0 96 8"
            className="mt-0.5 h-1.5 w-20 text-amber-500/80 dark:text-yellow-400/80 transition-transform duration-200 group-hover:scale-x-105"
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
        </motion.a>

        <nav className="hidden lg:flex items-center gap-4 xl:gap-6" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                whileHover={{ y: -1 }}
                transition={{ duration: 0.15 }}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-1.5 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400 ${
                  isActive
                    ? 'text-amber-600 dark:text-yellow-400'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-heading)]'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-indicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-amber-500 dark:bg-yellow-400"
                    aria-hidden="true"
                  />
                )}
              </motion.a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Light / Dark Theme Toggle */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.93 }}
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-card)] bg-[var(--bg-surface)] text-amber-600 dark:text-yellow-400 shadow-xs dark:shadow-none transition-all duration-150 hover:border-amber-500/60 dark:hover:border-yellow-400/60 hover:bg-amber-500/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
          >
            {isDark ? (
              <Sun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4" aria-hidden="true" />
            )}
          </motion.button>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="hidden sm:inline-flex min-h-[40px] items-center gap-1.5 rounded-full bg-amber-500 dark:bg-yellow-400 px-5 py-2 text-xs font-bold text-zinc-950 whitespace-nowrap shrink-0 shadow-[0_4px_14px_rgba(245,158,11,0.25)] dark:shadow-[0_0_20px_rgba(250,204,21,0.22)] transition-all duration-150 hover:bg-amber-400 dark:hover:bg-yellow-300 hover:shadow-[0_6px_20px_rgba(245,158,11,0.35)] dark:hover:shadow-[0_0_28px_rgba(250,204,21,0.38)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
          >
            Let&apos;s Talk
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </motion.a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--border-card)] bg-[var(--bg-surface)] text-[var(--text-secondary)] transition-colors hover:border-amber-500/50 dark:hover:border-yellow-400/50 hover:text-[var(--text-heading)] focus-visible:outline-2 focus-visible:outline-yellow-400 lg:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-[var(--border-card)] bg-[var(--bg-secondary)] px-4 py-4 sm:px-6 lg:hidden"
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
                          ? 'bg-amber-500/15 text-amber-700 dark:bg-yellow-400/15 dark:text-yellow-300'
                          : 'text-[var(--text-secondary)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-heading)]'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="mt-3 border-t border-[var(--border-subtle)] pt-3">
              <a
                href="#resume"
                onClick={handleLinkClick}
                className="flex min-h-[44px] w-full items-center justify-center rounded-full bg-amber-500 dark:bg-yellow-400 px-4 py-2.5 text-sm font-bold text-zinc-950 transition-colors hover:bg-amber-400 dark:hover:bg-yellow-300"
              >
                View Resume
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
