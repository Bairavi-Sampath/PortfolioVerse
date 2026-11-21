import { ArrowUpRight, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { PROJECTS, type ProjectCategory, type ProjectItem } from '../data/portfolioData';
import { ProjectDiagram } from './ProjectDiagram';
import { ProjectModal } from './ProjectModal';

type FilterOption = 'All' | ProjectCategory;

const FILTER_OPTIONS: FilterOption[] = ['All', 'AI/ML', 'Full Stack', 'Research'];

export function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<FilterOption>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    selectedFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.categories.includes(selectedFilter));

  return (
    <section id="projects" className="border-b border-zinc-900 bg-[#0B0B0E] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-wider text-yellow-400">
              Featured Projects
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Intelligent systems &amp; full-stack engineering
            </h2>
            <p className="mt-3 text-base text-zinc-400">
              Selected AI/ML, IoT telemetry, NLP formatting, and healthcare full-stack builds.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div
            className="inline-flex flex-wrap items-center gap-1 rounded-2xl border border-zinc-800 bg-[#111114] p-1 sm:rounded-full"
            role="group"
            aria-label="Filter projects by category"
          >
            {FILTER_OPTIONS.map((option) => {
              const isSelected = selectedFilter === option;
              return (
                <button
                  key={option}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedFilter(option)}
                  className={`min-h-[40px] rounded-full px-4 py-2 text-xs font-bold whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 ${
                    isSelected
                      ? 'bg-yellow-400 text-zinc-950 shadow-[0_0_16px_rgba(250,204,21,0.25)]'
                      : 'text-zinc-300 hover:bg-zinc-800/70 hover:text-white'
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Medium-sized Cards in 2-column layout on desktop, 1-column on mobile */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredProjects.map((project, idx) => {
            const hasGithubUrl = Boolean(project.githubUrl.trim());

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                role="button"
                tabIndex={0}
                onClick={() => setActiveProject(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveProject(project);
                  }
                }}
                className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-zinc-800/90 bg-[#111114] shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-yellow-400/70 hover:shadow-[0_8px_30px_rgba(250,204,21,0.12)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
              >
                {/* Visual Project Header / Diagram Image */}
                <div className="relative border-b border-zinc-800/80">
                  <ProjectDiagram diagramId={project.diagramId} compact={true} />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111114] via-transparent to-transparent opacity-80" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {project.categories.map((cat) => (
                      <span
                        key={cat}
                        className="rounded-full border border-yellow-400/40 bg-[#050507]/85 px-2.5 py-0.5 font-mono text-[11px] font-medium text-yellow-400 backdrop-blur-sm"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {project.featuredPriority && (
                    <span className="absolute top-3 right-3 rounded-full border border-zinc-700/80 bg-[#0A0A0D]/90 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-zinc-300 backdrop-blur-sm">
                      Featured
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight text-white transition-colors duration-150 group-hover:text-yellow-400">
                      {project.title}
                    </h3>

                    <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-zinc-300">
                      {project.description}
                    </p>

                    {/* Technology Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-zinc-800 bg-[#0A0A0D] px-2 py-0.5 font-mono text-[11px] text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="rounded-md border border-zinc-800/60 bg-[#0A0A0D]/60 px-2 py-0.5 font-mono text-[11px] text-zinc-300">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="mt-6 flex items-center justify-between border-t border-zinc-800/80 pt-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow-400 transition-transform group-hover:translate-x-0.5">
                      View Details
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>

                    {hasGithubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`View ${project.title} source code on GitHub`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700/80 bg-[#050507] text-zinc-300 transition-colors hover:border-yellow-400/80 hover:text-yellow-400 focus-visible:outline-2 focus-visible:outline-yellow-400"
                      >
                        <Github className="h-4 w-4" aria-hidden="true" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
