import { Award, ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { CERTIFICATIONS, type CertificateCategory, type CertificationItem } from '../data/portfolioData';
import { CertificateModal } from './CertificateModal';

type FilterCategory = 'All' | CertificateCategory;

const FILTER_CATEGORIES: FilterCategory[] = [
  'All',
  'Certifications',
  'Participation Certificates',
  'Research Certificates',
];

export function CertificationsSection() {
  const [activeCert, setActiveCert] = useState<CertificationItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('All');
  const [showAll, setShowAll] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 1. Filter by Category
  const filteredByCategory =
    selectedCategory === 'All'
      ? CERTIFICATIONS
      : CERTIFICATIONS.filter((c) => c.category === selectedCategory);

  // 2. Filter by Featured (unless showAll is active, or category has no featured items)
  const displayedCertifications = showAll
    ? filteredByCategory
    : filteredByCategory.some((c) => c.isFeatured)
      ? filteredByCategory.filter((c) => c.isFeatured)
      : filteredByCategory;

  // Seamless marquee loop only when there are 4 or more cards to scroll
  const shouldLoop = displayedCertifications.length >= 4;
  const itemsToRender = shouldLoop
    ? [...displayedCertifications, ...displayedCertifications]
    : displayedCertifications;

  // Reset scroll position when category or showAll changes
  const handleCategoryChange = (category: FilterCategory) => {
    setSelectedCategory(category);
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, [selectedCategory, showAll]);

  // Auto-scroll animation logic (smooth continuous scrolling when loop is enabled)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !shouldLoop) return;

    let animationFrameId: number;
    const speed = 0.65; // Pixels per frame

    const step = () => {
      if (!isPaused && el) {
        el.scrollLeft += speed;
        // Seamless loop: when reaching halfway (the duplicated set), reset back to start
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused, shouldLoop, displayedCertifications]);

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const offset = direction === 'left' ? -320 : 320;
    scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <div className="mt-14">
      {/* Section Header */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-yellow-400">
            <Award className="h-4 w-4" aria-hidden="true" />
            <span>Verified Credentials</span>
          </div>
          <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Certifications &amp; Professional Badges
          </h3>
          <p className="mt-1.5 text-sm text-zinc-400">
            {showAll
              ? 'Displaying all verified credentials across courses, participations, and research.'
              : 'Priority credentials in Generative AI, LLMs, Cloud, and core engineering.'}
          </p>
        </div>

        {/* Action Controls: Category Filter Buttons + View All Button */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          {/* Category Filter Pills (Responsive scroll on mobile, wrap on tablet/desktop) */}
          <div
            className="inline-flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-zinc-800 bg-[#111114] p-1 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            role="group"
            aria-label="Filter certifications by category"
          >
            {FILTER_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => handleCategoryChange(cat)}
                  className={`min-h-[34px] rounded-full px-3.5 py-1 text-xs font-semibold whitespace-nowrap shrink-0 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-yellow-400 ${
                    isSelected
                      ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 text-zinc-950 font-bold shadow-[0_0_14px_rgba(245,158,11,0.28)]'
                      : 'text-zinc-300 hover:bg-zinc-800/70 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* View All & Manual Navigation buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className={`min-h-[36px] rounded-full border px-4 py-1.5 text-xs font-semibold whitespace-nowrap transition-all duration-150 focus-visible:outline-2 focus-visible:outline-yellow-400 ${
                showAll
                  ? 'border-yellow-400 bg-yellow-400 text-zinc-950 font-bold shadow-[0_0_16px_rgba(250,204,21,0.25)]'
                  : 'border-yellow-400/60 bg-transparent text-yellow-400 hover:bg-yellow-400/10'
              }`}
            >
              {showAll ? 'Show Featured Only' : 'View All Certifications'}
            </button>

            {shouldLoop && (
              <div className="hidden items-center gap-1 sm:flex">
                <button
                  type="button"
                  onClick={() => handleManualScroll('left')}
                  aria-label="Scroll certifications left"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-[#111114] text-zinc-300 transition-colors hover:border-yellow-400/60 hover:text-yellow-400 focus-visible:outline-2 focus-visible:outline-yellow-400"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleManualScroll('right')}
                  aria-label="Scroll certifications right"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-[#111114] text-zinc-300 transition-colors hover:border-yellow-400/60 hover:text-yellow-400 focus-visible:outline-2 focus-visible:outline-yellow-400"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Carousel / Card Layout */}
      <div
        className="relative mt-7 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Subtle Edge Vignettes (displayed when carousel has scrolling items) */}
        {shouldLoop && (
          <>
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#0B0B0E] to-transparent sm:w-16" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#0B0B0E] to-transparent sm:w-16" />
          </>
        )}

        <div
          ref={scrollRef}
          tabIndex={0}
          aria-label="Certifications list. Use arrow keys or drag to scroll."
          className={`flex gap-5 pb-4 pt-1 select-none ${
            shouldLoop
              ? 'overflow-x-auto scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'
              : 'overflow-x-auto scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'
          }`}
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {itemsToRender.map((cert, index) => {
            const uniqueKey = `${selectedCategory}-${cert.id}-${index}`;

            return (
              <div
                key={uniqueKey}
                role="button"
                tabIndex={0}
                onClick={() => setActiveCert(cert)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveCert(cert);
                  }
                }}
                className="group relative flex w-[285px] sm:w-[320px] shrink-0 cursor-pointer flex-col overflow-hidden rounded-2xl border border-zinc-800/90 bg-[#111114] shadow-md transition-all duration-200 hover:-translate-y-1 hover:border-yellow-400/80 hover:shadow-[0_8px_24px_rgba(250,204,21,0.14)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
              >
                {/* Prominent Certificate Visual Area */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-zinc-800/80 bg-[#07070A]">
                  {cert.imageUrl ? (
                    <img
                      src={cert.imageUrl}
                      alt={`${cert.title} preview`}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    /* Certificate Blueprint Placeholder */
                    <div className="relative flex h-full w-full flex-col items-center justify-center p-4 text-center">
                      <div className="pointer-events-none absolute inset-2.5 rounded-lg border border-yellow-400/20" />
                      <div className="pointer-events-none absolute inset-3.5 rounded border border-dashed border-zinc-800" />
                      <div
                        className="pointer-events-none absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: 'radial-gradient(#FACC15 1px, transparent 1px)',
                          backgroundSize: '14px 14px',
                        }}
                      />

                      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-yellow-400/50 bg-[#141418] shadow-[0_0_16px_rgba(250,204,21,0.2)] transition-transform duration-200 group-hover:scale-110">
                        <Award className="h-6 w-6 text-yellow-400" />
                      </div>

                      <p className="relative z-10 mt-2 font-mono text-[9px] uppercase tracking-wider text-yellow-400">
                        {cert.category}
                      </p>
                      <p className="relative z-10 line-clamp-1 max-w-[220px] font-display text-xs font-bold text-zinc-100">
                        {cert.title}
                      </p>
                    </div>
                  )}

                  {/* Hover Overlay with Eye Prompt */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 backdrop-blur-xs transition-opacity duration-200 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-400 px-3.5 py-1.5 text-xs font-bold text-zinc-950 shadow-md">
                      <Eye className="h-3.5 w-3.5" />
                      Preview
                    </span>
                  </div>
                </div>

                {/* Information below image: Category, Name, Issuer, Date */}
                <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-mono text-[11px] font-medium text-yellow-400 truncate">
                        {cert.issuer}
                      </p>
                      <span className="shrink-0 font-mono text-[10px] text-zinc-400">
                        {cert.periodOrDate}
                      </span>
                    </div>

                    <h4 className="mt-1.5 line-clamp-2 font-display text-sm font-bold text-white transition-colors duration-150 group-hover:text-yellow-400">
                      {cert.title}
                    </h4>

                    {cert.topics && (
                      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-zinc-400">
                        {cert.topics}
                      </p>
                    )}
                  </div>

                  <div className="mt-3.5 flex items-center justify-between border-t border-zinc-800/80 pt-2.5">
                    <span className="rounded-full border border-yellow-400/25 bg-yellow-400/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-yellow-400">
                      {cert.category}
                    </span>
                    <Sparkles className="h-3.5 w-3.5 text-yellow-400/70 transition-transform duration-200 group-hover:scale-125" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Certificate Large Preview Modal */}
      <CertificateModal certificate={activeCert} onClose={() => setActiveCert(null)} />
    </div>
  );
}
