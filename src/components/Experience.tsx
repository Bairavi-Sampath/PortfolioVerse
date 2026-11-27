import { Briefcase } from 'lucide-react';
import { motion } from 'motion/react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';

export function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-[var(--border-section)] bg-[var(--bg-primary)] py-16 sm:py-20 lg:py-24"
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
            Internship Experience
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[var(--text-heading)] sm:text-4xl">
            Hands-on industry development
          </h2>
        </motion.div>

        <div className="mt-10 space-y-6">
          {EXPERIENCE_ITEMS.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="rounded-2xl border border-[var(--border-card)] bg-[var(--bg-surface)] p-6 shadow-xs dark:shadow-none transition-all duration-200 hover:border-amber-500/60 dark:hover:border-yellow-400/60 hover:shadow-[0_8px_30px_rgba(245,158,11,0.12)] dark:hover:shadow-[0_8px_30px_rgba(250,204,21,0.1)] sm:p-8"
            >
              <div className="flex flex-col gap-4 border-b border-[var(--border-subtle)] pb-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-500/35 dark:border-yellow-400/35 bg-amber-500/10 dark:bg-yellow-400/10">
                    <Briefcase className="h-5 w-5 text-amber-600 dark:text-yellow-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">{item.role}</h3>
                    <p className="mt-1 text-base font-medium text-amber-600 dark:text-yellow-400">{item.company}</p>
                  </div>
                </div>

                <p className="font-mono text-xs tabular-nums text-[var(--text-muted)] sm:text-right">
                  {item.period}
                </p>
              </div>

              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                  Key Responsibilities
                </h4>
                <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                  {item.responsibilities.map((task) => (
                    <li key={task} className="flex items-start gap-3">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500 dark:bg-yellow-400"
                        aria-hidden="true"
                      />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 border-t border-[var(--border-subtle)] pt-4 font-mono text-xs text-[var(--text-muted)]">
                  Stack: {item.technologies.join(' · ')}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
