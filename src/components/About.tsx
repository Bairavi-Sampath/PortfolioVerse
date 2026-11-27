import { motion } from 'motion/react';
import { ABOUT_HIGHLIGHTS, ABOUT_STATS } from '../data/portfolioData';

export function About() {
  return (
    <section id="about" className="border-b border-[var(--border-section)] bg-[var(--bg-secondary)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-amber-600 dark:text-yellow-400">
              About Me
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[var(--text-heading)] sm:text-4xl">
              Combining AI/ML intelligence with full-stack engineering.
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--text-secondary)]">
              <p>
                I&apos;m Bairavi, a B.E. Computer Science and Engineering student specializing in
                Artificial Intelligence and Machine Learning at KPR Institute of Engineering and
                Technology.
              </p>
              <p>
                I&apos;m interested in developing intelligent applications, machine learning
                solutions and modern full-stack web applications.
              </p>
              <p>
                I enjoy exploring AI technologies, working with data, building backend systems and
                creating responsive user experiences.
              </p>
              <p>
                My goal is to develop practical technology solutions by combining AI/ML concepts
                with full-stack development.
              </p>
            </div>

            {/* Key Statistics */}
            <div className="mt-8 grid grid-cols-1 gap-4 border-t border-[var(--border-subtle)] pt-8 sm:grid-cols-3">
              {ABOUT_STATS.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="rounded-xl border border-[var(--border-card)] bg-[var(--bg-surface)] p-4 shadow-xs dark:shadow-none transition-colors duration-150 hover:border-amber-500/60 dark:hover:border-yellow-400/50 hover:shadow-[0_4px_20px_rgba(245,158,11,0.12)] dark:hover:shadow-[0_4px_20px_rgba(250,204,21,0.08)]"
                >
                  <p className="font-display text-3xl font-bold tabular-nums text-amber-600 dark:text-yellow-400">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">{stat.label}</p>
                  <p className="mt-1 text-xs text-[var(--text-muted)]">{stat.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Core Focus Areas */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6">
            {ABOUT_HIGHLIGHTS.map((area, index) => (
              <motion.article
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="flex flex-col justify-between rounded-xl border border-[var(--border-card)] bg-[var(--bg-surface)] p-6 shadow-xs dark:shadow-none transition-all duration-200 hover:border-amber-500/60 dark:hover:border-yellow-400/60 hover:shadow-[0_6px_24px_rgba(245,158,11,0.12)] dark:hover:shadow-[0_6px_24px_rgba(250,204,21,0.1)]"
              >
                <div>
                  <span className="font-mono text-xs tabular-nums text-amber-600 dark:text-yellow-400">
                    0{index + 1}.
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-[var(--text-primary)]">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{area.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
