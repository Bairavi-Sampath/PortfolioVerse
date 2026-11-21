import { BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { RESEARCH_HIGHLIGHT } from '../data/portfolioData';
import { CertificationsSection } from './CertificationsSection';

export function Research() {
  return (
    <section
      id="research"
      className="border-b border-zinc-900 bg-[#0B0B0E] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="font-mono text-xs uppercase tracking-wider text-yellow-400">
            Research &amp; Achievements
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
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
          className="mt-10 rounded-2xl border border-yellow-400/50 bg-[#111114] p-6 shadow-lg transition-all duration-200 hover:border-yellow-400/80 hover:shadow-[0_8px_30px_rgba(250,204,21,0.12)] sm:p-8"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5 text-xs">
                <span className="inline-flex items-center gap-1.5 font-mono font-semibold uppercase tracking-wider text-yellow-400">
                  <BookOpen className="h-4 w-4" aria-hidden="true" />
                  {RESEARCH_HIGHLIGHT.badge}
                </span>
                <span className="text-zinc-600" aria-hidden="true">
                  ·
                </span>
                <span className="font-mono tabular-nums text-zinc-300">
                  {RESEARCH_HIGHLIGHT.date}
                </span>
                <span className="text-zinc-600" aria-hidden="true">
                  ·
                </span>
                <span className="text-zinc-300">{RESEARCH_HIGHLIGHT.indexing}</span>
              </div>

              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {RESEARCH_HIGHLIGHT.title}
              </h3>

              <p className="mt-3 text-base leading-relaxed text-zinc-300">
                {RESEARCH_HIGHLIGHT.summary}
              </p>

              <dl className="mt-6 grid grid-cols-1 gap-4 border-t border-zinc-800/80 pt-5 sm:grid-cols-3">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-zinc-400">Conference</dt>
                  <dd className="mt-1 text-sm font-medium text-zinc-100">CICPS&apos;26</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-zinc-400">Series</dt>
                  <dd className="mt-1 text-sm font-medium text-zinc-100">
                    Springer Lecture Notes in Networks and Systems (LNNS)
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-zinc-400">Indexing</dt>
                  <dd className="mt-1 text-sm font-medium text-yellow-300">Scopus-indexed</dd>
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
