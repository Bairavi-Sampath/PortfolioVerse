import {
  Activity,
  AlertCircle,
  ArrowRight,
  Award,
  BarChart3,
  Bell,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  Database,
  ExternalLink,
  FileText,
  Github,
  Layers,
  Settings,
  Shield,
  Sparkles,
  Video,
  Wrench,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { PROJECTS, type ProjectCategory, type ProjectItem } from '../data/portfolioData';
import { ProjectDiagram } from './ProjectDiagram';
import { ProjectModal } from './ProjectModal';

type FilterOption = 'All' | ProjectCategory;

const FILTER_OPTIONS: FilterOption[] = ['All', 'AI/ML', 'Full Stack'];

function HighlightIcon({ name, className = 'h-3.5 w-3.5' }: { name: string; className?: string }) {
  switch (name) {
    case 'Shield':
      return <Shield className={className} aria-hidden="true" />;
    case 'Bell':
      return <Bell className={className} aria-hidden="true" />;
    case 'Sparkles':
      return <Sparkles className={className} aria-hidden="true" />;
    case 'Video':
      return <Video className={className} aria-hidden="true" />;
    case 'Database':
      return <Database className={className} aria-hidden="true" />;
    case 'FileText':
      return <FileText className={className} aria-hidden="true" />;
    case 'BrainCircuit':
      return <BrainCircuit className={className} aria-hidden="true" />;
    case 'Layers':
      return <Layers className={className} aria-hidden="true" />;
    case 'BookOpen':
      return <BookOpen className={className} aria-hidden="true" />;
    case 'Cpu':
      return <Cpu className={className} aria-hidden="true" />;
    case 'Activity':
      return <Activity className={className} aria-hidden="true" />;
    case 'Wrench':
      return <Wrench className={className} aria-hidden="true" />;
    case 'Award':
      return <Award className={className} aria-hidden="true" />;
    case 'AlertCircle':
      return <AlertCircle className={className} aria-hidden="true" />;
    case 'BarChart3':
      return <BarChart3 className={className} aria-hidden="true" />;
    default:
      return <CheckCircle2 className={className} aria-hidden="true" />;
  }
}

function ProjectThumbnail({
  imageUrl,
  title,
  diagramId,
}: {
  imageUrl?: string;
  title: string;
  diagramId: ProjectItem['diagramId'];
}) {
  const [hasError, setHasError] = useState(false);

  if (imageUrl && !hasError) {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#07070A]">
        <img
          src={imageUrl}
          alt={`${title} preview`}
          className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
          draggable={false}
          onError={() => setHasError(true)}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    );
  }

  return (
    <ProjectDiagram
      diagramId={diagramId}
      compact={true}
      className="h-full w-full"
    />
  );
}

export function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<FilterOption>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    selectedFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) =>
          project.categories.includes(selectedFilter as ProjectCategory)
        );

  return (
    <section id="projects" className="border-b border-zinc-900 bg-[#070709] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-wider text-amber-400">
              PROJECTS
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              My Projects
            </h2>
            <p className="mt-3 text-base text-zinc-400 sm:text-lg">
              Innovative solutions, creative ideas and real-world applications.
            </p>
          </div>

          {/* Filter Controls */}
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
                  className={`min-h-[36px] rounded-full px-3.5 py-1.5 text-xs font-bold whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 ${
                    isSelected
                      ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 text-zinc-950 shadow-[0_0_16px_rgba(245,158,11,0.3)]'
                      : 'text-zinc-300 hover:bg-zinc-800/70 hover:text-white'
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Compact Project Cards */}
        <div className="mt-10 space-y-4 sm:space-y-5">
          {filteredProjects.map((project, idx) => {
            const hasGithubUrl = Boolean(project.githubUrl && project.githubUrl.trim().length > 0);
            const hasLiveUrl = Boolean(project.liveUrl && project.liveUrl.trim().length > 0);

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.42, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-amber-500/30 bg-[#0B0B0E]/95 shadow-[0_0_20px_rgba(245,158,11,0.08)] transition-all duration-300 hover:border-amber-400/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.18)]"
              >
                {/* Inner layout: image left, content right */}
                <div className="flex flex-col sm:flex-row sm:items-stretch">
                  {/* Visual Panel — real image with smooth hover transition, fallback to diagram */}
                  <div className="relative w-full overflow-hidden border-b border-amber-500/20 bg-[#07070A] sm:w-[220px] sm:shrink-0 sm:border-b-0 sm:border-r md:w-[260px]">
                    <div className="h-[180px] sm:h-full">
                      <ProjectThumbnail
                        imageUrl={project.imageUrl}
                        title={project.title}
                        diagramId={project.diagramId}
                      />
                    </div>
                  </div>

                  {/* Content Panel */}
                  <div className="flex flex-1 flex-col justify-between gap-3 p-4 sm:p-5">
                    {/* Top: badge + title + description */}
                    <div>
                      {/* Category Badge */}
                      <div className="inline-flex items-center gap-1 rounded-full border border-amber-500/35 bg-amber-500/10 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-amber-400">
                        <Settings className="h-2.5 w-2.5 text-amber-400" aria-hidden="true" />
                        <span>{project.categoryDisplay || project.categories.join(' / ')}</span>
                      </div>

                      {/* Title */}
                      <h3 className="mt-2 text-sm font-bold leading-snug tracking-tight text-white sm:text-base md:text-[1rem] line-clamp-2">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-1.5 text-xs leading-relaxed text-zinc-400 line-clamp-2 sm:text-[13px]">
                        {project.description}
                      </p>
                    </div>

                    {/* Middle: Highlights + Tech tags */}
                    <div className="space-y-2.5">
                      {/* Feature Highlights */}
                      {project.featuredHighlights && project.featuredHighlights.length > 0 && (
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                          {project.featuredHighlights.slice(0, 3).map((highlight, hIdx) => (
                            <div
                              key={hIdx}
                              className="flex items-center gap-1.5 text-[11px] font-medium text-zinc-300"
                            >
                              <HighlightIcon
                                name={highlight.icon}
                                className="h-3 w-3 text-amber-400 shrink-0"
                              />
                              <span>{highlight.label}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 6).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-zinc-800 bg-[#131317] px-2 py-0.5 font-mono text-[10px] font-medium text-zinc-400"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 6 && (
                          <span className="rounded-md border border-zinc-800 bg-[#131317] px-2 py-0.5 font-mono text-[10px] font-medium text-zinc-500">
                            +{project.technologies.length - 6} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bottom: Action Buttons */}
                    <div className="flex flex-wrap items-center gap-2">
                      {/* View Details */}
                      <button
                        type="button"
                        onClick={() => setActiveProject(project)}
                        className="inline-flex min-h-[32px] items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 px-4 py-1.5 text-xs font-bold text-zinc-950 shadow-[0_0_14px_rgba(245,158,11,0.28)] transition-all duration-150 hover:brightness-110 hover:shadow-[0_0_22px_rgba(245,158,11,0.42)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                      >
                        <span>View Details</span>
                        <ArrowRight className="h-3 w-3" aria-hidden="true" />
                      </button>

                      {/* GitHub */}
                      {hasGithubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} source code on GitHub`}
                          className="inline-flex min-h-[32px] items-center gap-1.5 rounded-full border border-zinc-700 bg-transparent px-4 py-1.5 text-xs font-semibold text-white transition-all duration-150 hover:border-amber-400 hover:text-amber-300 hover:bg-amber-400/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                        >
                          <Github className="h-3 w-3" aria-hidden="true" />
                          <span>GitHub</span>
                        </a>
                      )}

                      {/* Live Demo */}
                      {hasLiveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.title} live deployment`}
                          className="inline-flex min-h-[32px] items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 px-3.5 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-600 hover:text-white"
                        >
                          <ExternalLink className="h-3 w-3" aria-hidden="true" />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Reusable Project Details Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
