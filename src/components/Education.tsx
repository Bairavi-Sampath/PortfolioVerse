import { GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import { EDUCATION_ITEMS } from '../data/portfolioData';

export function Education() {
  return (
    <section
      id="education"
      className="border-b border-zinc-900 bg-[#050507] py-16 sm:py-20 lg:py-24"
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
            Academic Background
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Education timeline
          </h2>
        </motion.div>

        <div className="relative mt-10">
          {/* Vertical hairline timeline connector */}
          <div
            className="absolute top-3 bottom-3 left-4 w-px bg-zinc-800 sm:left-5"
            aria-hidden="true"
          />

          <ol className="space-y-8">
            {EDUCATION_ITEMS.map((edu, index) => (
              <motion.li
                key={edu.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-12 sm:pl-14"
              >
                <span
                  className={`absolute top-6 left-2 flex h-5 w-5 items-center justify-center rounded-full border sm:left-2.5 ${
                    index === 0
                      ? 'border-yellow-400 bg-[#050507]'
                      : 'border-zinc-600 bg-[#050507]'
                  }`}
                  aria-hidden="true"
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      index === 0 ? 'bg-yellow-400' : 'bg-zinc-500'
                    }`}
                  />
                </span>

                <motion.article
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="rounded-2xl border border-zinc-800/90 bg-[#111114] p-6 transition-all duration-200 hover:border-yellow-400/50 hover:shadow-[0_8px_30px_rgba(250,204,21,0.08)] sm:p-8"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-3.5">
                      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-[#050507]">
                        <GraduationCap className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-zinc-100">
                          {edu.institution}
                        </h3>
                        {edu.location && (
                          <p className="mt-1 text-sm text-zinc-400">{edu.location}</p>
                        )}
                        <p className="mt-2 text-base font-medium text-zinc-200">{edu.degree}</p>
                      </div>
                    </div>

                    <div className="shrink-0 sm:text-right">
                      <p className="font-mono text-xs tabular-nums text-zinc-400">{edu.period}</p>
                      <p className="mt-1.5 font-mono text-sm font-semibold tabular-nums text-yellow-400">
                        {edu.scoreLabel}
                      </p>
                    </div>
                  </div>

                  {edu.highlights && edu.highlights.length > 0 && (
                    <ul className="mt-5 space-y-1.5 border-t border-zinc-800/80 pt-4 text-sm text-zinc-400">
                      {edu.highlights.map((note) => (
                        <li key={note}>{note}</li>
                      ))}
                    </ul>
                  )}
                </motion.article>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
