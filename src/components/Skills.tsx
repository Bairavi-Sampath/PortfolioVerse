import { BrainCircuit, Code2, Database, Layout, Server, Wrench } from 'lucide-react';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const CATEGORY_ICONS: Record<string, ReactNode> = {
  languages: <Code2 className="h-5 w-5 text-yellow-400" aria-hidden="true" />,
  aiml: <BrainCircuit className="h-5 w-5 text-yellow-400" aria-hidden="true" />,
  frontend: <Layout className="h-5 w-5 text-yellow-400" aria-hidden="true" />,
  backend: <Server className="h-5 w-5 text-yellow-400" aria-hidden="true" />,
  databases: <Database className="h-5 w-5 text-yellow-400" aria-hidden="true" />,
  tools: <Wrench className="h-5 w-5 text-yellow-400" aria-hidden="true" />,
};

export function Skills() {
  return (
    <section id="skills" className="border-b border-zinc-900 bg-[#050507] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="font-mono text-xs uppercase tracking-wider text-yellow-400">
            Technical Capabilities
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Skills across AI/ML &amp; Full Stack Engineering
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            Tools, frameworks, and foundational languages used to build machine learning pipelines,
            spatial databases, and responsive applications.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, idx) => {
            const isAiMl = category.id === 'aiml';
            return (
              <motion.article
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`group flex flex-col justify-between rounded-xl border bg-[#111114] p-6 transition-all duration-200 ${
                  isAiMl
                    ? 'border-yellow-400/40 hover:border-yellow-400/80 hover:shadow-[0_8px_24px_rgba(250,204,21,0.12)]'
                    : 'border-zinc-800/90 hover:border-zinc-700 hover:shadow-[0_6px_20px_rgba(0,0,0,0.4)]'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-zinc-100 transition-colors duration-150 group-hover:text-yellow-400">
                        {category.title}
                      </h3>
                      <p className="mt-1 text-xs text-zinc-400">{category.subtitle}</p>
                    </div>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-[#050507] transition-colors duration-150 group-hover:border-yellow-400/50">
                      {CATEGORY_ICONS[category.id]}
                    </div>
                  </div>

                  <div className="mt-5 border-t border-zinc-800/80 pt-4">
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-zinc-200">
                      {category.items.map((skill) => (
                        <li key={skill} className="truncate py-0.5 transition-colors duration-150 group-hover:text-zinc-100">
                          <span className="mr-2 text-yellow-400/85" aria-hidden="true">
                            ·
                          </span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
