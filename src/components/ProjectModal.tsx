import { CheckCircle2, ExternalLink, Github, Globe, Lightbulb, Target, Wrench, X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import type { ProjectItem } from '../data/portfolioData';
import { ProjectDiagram } from './ProjectDiagram';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [project, onClose]);

  if (!project) return null;

  const hasGithubUrl = Boolean(project.githubUrl && project.githubUrl.trim().length > 0);
  const hasLiveUrl = Boolean(project.liveUrl && project.liveUrl.trim().length > 0);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-[#111114] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Title and Close (X) button */}
        <div className="flex items-start justify-between gap-4 border-b border-zinc-800/80 px-6 py-5 sm:px-8">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              {project.categories.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full border border-yellow-400/40 bg-[#0A0A0D] px-2.5 py-0.5 font-mono text-[11px] font-medium text-yellow-400"
                >
                  {cat}
                </span>
              ))}
              {project.featuredPriority && (
                <span className="rounded-full border border-zinc-700 bg-zinc-800/60 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-zinc-300">
                  Featured Build
                </span>
              )}
            </div>

            <h3
              id="project-modal-title"
              className="mt-2.5 font-display text-xl font-bold tracking-tight text-white sm:text-2xl"
            >
              {project.title}
            </h3>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-[#050507] text-zinc-300 transition-colors hover:border-yellow-400/60 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
          {/* Project Visual / Image / System Diagram */}
          <div className="overflow-hidden rounded-xl border border-zinc-800">
            <ProjectDiagram diagramId={project.diagramId} compact={false} />
          </div>

          <div className="mt-7 space-y-6">
            {/* Overview */}
            <div>
              <h4 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-yellow-400">
                <Lightbulb className="h-4 w-4" aria-hidden="true" />
                Project Overview
              </h4>
              <p className="mt-2 text-base leading-relaxed text-zinc-200">
                {project.description}
              </p>
            </div>

            {/* Problem Addressed */}
            <div>
              <h4 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-yellow-400">
                <Target className="h-4 w-4" aria-hidden="true" />
                Problem Addressed
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {project.problemAddressed}
              </p>
            </div>

            {/* Objectives */}
            {project.objectives && project.objectives.length > 0 && (
              <div>
                <h4 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-yellow-400">
                  <Target className="h-4 w-4" aria-hidden="true" />
                  Key Objectives
                </h4>
                <ul className="mt-2.5 space-y-2 text-sm leading-relaxed text-zinc-300">
                  {project.objectives.map((obj) => (
                    <li key={obj} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" aria-hidden="true" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Key Features */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div>
                <h4 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-yellow-400">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  Key Features
                </h4>
                <ul className="mt-2.5 space-y-2 text-sm leading-relaxed text-zinc-300">
                  {project.keyFeatures.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" aria-hidden="true" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* My Contribution */}
            <div>
              <h4 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-yellow-400">
                <Wrench className="h-4 w-4" aria-hidden="true" />
                My Contribution &amp; Responsibilities
              </h4>
              <ul className="mt-2.5 space-y-2 text-sm leading-relaxed text-zinc-300">
                {project.contributions.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hardware & Sensors if available */}
            {project.hardware && project.hardware.length > 0 && (
              <div>
                <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-zinc-400">
                  Hardware &amp; Sensors
                </h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.hardware.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-yellow-400/40 bg-[#0A0A0D] px-3 py-1 font-mono text-xs text-yellow-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-zinc-400">
                Technologies &amp; Tools
              </h4>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-zinc-800 bg-[#0A0A0D] px-2.5 py-1 font-mono text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800 bg-[#0E0E11] px-6 py-4 sm:px-8">
          <div className="flex flex-wrap items-center gap-3">
            {hasGithubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[42px] items-center gap-2 rounded-full bg-yellow-400 px-5 py-2 text-xs font-bold text-zinc-950 shadow-[0_0_20px_rgba(250,204,21,0.2)] transition-colors hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub Repository
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            )}

            {hasLiveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[42px] items-center gap-2 rounded-full border border-yellow-400/70 bg-[#050507] px-5 py-2 text-xs font-semibold text-yellow-400 transition-colors hover:border-yellow-300 hover:bg-yellow-400/10 hover:text-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
              >
                <Globe className="h-4 w-4" aria-hidden="true" />
                Live Demo
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-[42px] items-center rounded-full border border-zinc-700 bg-transparent px-5 py-2 text-xs font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
