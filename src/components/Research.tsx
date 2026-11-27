import { BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { RESEARCH_HIGHLIGHT } from '../data/portfolioData';
import { CertificationsSection } from './CertificationsSection';

export function Research() {
  return (
    <section
      id="research"
      className="border-b border-[var(--border-section)] bg-[var(--bg-secondary)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="font-mono text-xs uppercase tracking-wider text-amber-600 dark:text-yellow-400">
            Research &amp; Achievements
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[var(--text-heading)] sm:text-4xl">
            Peer-reviewed research &amp; technical credentials
          </h2>
        </motion.div>

        {/* Highlighted Springer Research Achievement */}
        <motion.article
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -3, transition: { duration: 0.2 } }}
          className="mt-10 rounded-2xl border border-amber-500/50 dark:border-yellow-400/50 bg-[var(--bg-surface)] p-6 shadow-sm dark:shadow-lg transition-all duration-200 hover:border-amber-500/80 dark:hover:border-yellow-400/80 hover:shadow-[0_8px_30px_rgba(245,158,11,0.14)] dark:hover:shadow-[0_8px_30px_rgba(250,204,21,0.12)] sm:p-8"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5 text-xs">
                <span className="inline-flex items-center gap-1.5 font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-yellow-400">
                  <BookOpen className="h-4 w-4" aria-hidden="true" />
                  {RESEARCH_HIGHLIGHT.badge}
                </span>
                <span className="text-[var(--text-subtle)]" aria-hidden="true">
                  ·
                </span>
                <span className="font-mono tabular-nums text-[var(--text-secondary)]">
                  {RESEARCH_HIGHLIGHT.date}
                </span>
                <span className="text-[var(--text-subtle)]" aria-hidden="true">
                  ·
                </span>
                <span className="text-[var(--text-secondary)]">{RESEARCH_HIGHLIGHT.indexing}</span>
              </div>

              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-[var(--text-heading)] sm:text-3xl">
                {RESEARCH_HIGHLIGHT.title}
              </h3>

              <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)]">
                {RESEARCH_HIGHLIGHT.summary}
              </p>

              <dl className="mt-6 grid grid-cols-1 gap-4 border-t border-[var(--border-subtle)] pt-5 sm:grid-cols-3">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-[var(--text-muted)]">Conference</dt>
                  <dd className="mt-1 text-sm font-medium text-[var(--text-primary)]">CICPS&apos;26</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-[var(--text-muted)]">Series</dt>
                  <dd className="mt-1 text-sm font-medium text-[var(--text-primary)]">
                    Springer Lecture Notes in Networks and Systems (LNNS)
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-[var(--text-muted)]">Indexing</dt>
                  <dd className="mt-1 text-sm font-medium text-amber-600 dark:text-yellow-300">Scopus-indexed</dd>
                </div>
              </dl>
            </div>
          </div>
        </motion.article>

        {/* Certifications Section with Single-Row Automatic Horizontal Scrolling Carousel */}
        <CertificationsSection />
      </div>
    </section>
  );
}
