import { GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import { EDUCATION_ITEMS } from '../data/portfolioData';

export function Education() {
  return (
    <section
      id="education"
      className="border-b border-[var(--border-section)] bg-[var(--bg-primary)] py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="font-mono text-xs uppercase tracking-wider text-amber-600 dark:text-yellow-400">
            Academic Background
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[var(--text-heading)] sm:text-3xl lg:text-4xl">
            Education timeline
          </h2>
        </motion.div>

        <div className="relative mt-8 sm:mt-10">
          {/* Subtle Vertical Timeline Connector */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="origin-top absolute top-4 bottom-4 left-3.5 w-px bg-[var(--border-card)] sm:left-4"
            aria-hidden="true"
          />

          <ol className="space-y-3.5 sm:space-y-4">
            {EDUCATION_ITEMS.map((edu, index) => (
              <motion.li
                key={edu.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-9 sm:pl-11"
              >
                {/* Timeline node */}
                <motion.span
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.3, delay: index * 0.08 + 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`absolute top-4 left-1.5 flex h-4 w-4 items-center justify-center rounded-full border bg-[var(--bg-primary)] sm:left-2 ${index === 0
                    ? 'border-amber-500 dark:border-yellow-400'
                    : 'border-zinc-400 dark:border-zinc-700'
                    }`}
                  aria-hidden="true"
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${index === 0 ? 'bg-amber-500 dark:bg-yellow-400' : 'bg-zinc-400 dark:bg-zinc-500'
                      }`}
                  />
                </motion.span>

                <motion.article
                  whileHover={{ y: -2, transition: { duration: 0.15 } }}
                  className="rounded-xl border border-[var(--border-card)] bg-[var(--bg-surface)] p-4 shadow-xs dark:shadow-none transition-all duration-200 hover:border-amber-500/60 dark:hover:border-yellow-400/50 hover:shadow-[0_4px_20px_rgba(245,158,11,0.1)] dark:hover:shadow-[0_4px_20px_rgba(250,204,21,0.06)] sm:p-5"
                >
                  <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--border-card)] bg-[var(--bg-primary)] text-amber-600 dark:text-yellow-400">
                        <GraduationCap className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-0.5">
                          <h3 className="font-display text-sm font-bold text-[var(--text-heading)] sm:text-base">
                            {edu.institution}
                          </h3>
                          {edu.location && (
                            <span className="font-mono text-xs text-[var(--text-muted)]">
                              · {edu.location}
                            </span>
                          )}
                        </div>
                        <p className="mt-0.5 text-xs font-medium text-[var(--text-secondary)] sm:text-sm">
                          {edu.degree}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3 pt-1 border-t border-[var(--border-subtle)] sm:border-t-0 sm:pt-0 sm:flex-col sm:items-end sm:gap-1 shrink-0">
                      {edu.period && (
                        <p className="font-mono text-xs tabular-nums text-[var(--text-muted)]">
                          {edu.period}
                        </p>
                      )}
                      <p className="font-mono text-xs font-bold tabular-nums text-amber-600 dark:text-yellow-400 sm:text-sm">
                        {edu.scoreLabel}
                      </p>
                    </div>
                  </div>
                </motion.article>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
