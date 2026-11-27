import { CheckCircle2, ExternalLink, Github, Globe, Lightbulb, Target, Wrench, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import type { ProjectItem } from '../data/portfolioData';
import { ProjectDiagram } from './ProjectDiagram';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [project]);

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

  const hasGithubUrl = Boolean(project?.githubUrl && project.githubUrl.trim().length > 0);
  const hasLiveUrl = Boolean(project?.liveUrl && project.liveUrl.trim().length > 0);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="project-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={onClose}
        >
          <motion.div
            key="project-modal-content"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-[var(--border-card)] bg-[var(--bg-surface)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
        {/* Sticky Header with Title and Close (X) button */}
        <div className="flex items-start justify-between gap-4 border-b border-[var(--border-subtle)] px-6 py-5 sm:px-8">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              {project.categories.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full border border-amber-500/40 dark:border-yellow-400/40 bg-amber-500/10 dark:bg-[#0A0A0D] px-2.5 py-0.5 font-mono text-[11px] font-medium text-amber-700 dark:text-yellow-400"
                >
                  {cat}
                </span>
              ))}
              {project.featuredPriority && (
                <span className="rounded-full border border-[var(--border-card)] bg-[var(--bg-surface-alt)] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--text-secondary)]">
                  Featured Build
                </span>
              )}
            </div>

            <h3
              id="project-modal-title"
              className="mt-2.5 font-display text-xl font-bold tracking-tight text-[var(--text-heading)] sm:text-2xl"
            >
              {project.title}
            </h3>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border-card)] bg-[var(--bg-primary)] text-[var(--text-secondary)] transition-colors hover:border-amber-500/60 dark:hover:border-yellow-400/60 hover:text-[var(--text-heading)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
          {/* Project Visual / Image / System Diagram */}
          <div className="group relative overflow-hidden rounded-xl border border-amber-500/30 bg-[#07070A] shadow-[0_0_25px_rgba(245,158,11,0.08)] transition-all duration-300 hover:border-amber-400/50">
            {project.imageUrl && !imageError ? (
              <div className="relative aspect-[16/9] w-full max-h-[380px] overflow-hidden bg-[#0A0A0D]">
                <img
                  src={project.imageUrl}
                  alt={`${project.title} showcase`}
                  className="h-full w-full object-cover object-center transition-transform duration-500 ease-out hover:scale-[1.02]"
                  loading="eager"
                  onError={() => setImageError(true)}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0B0E]/70 via-transparent to-transparent opacity-60" />
              </div>
            ) : (
              <ProjectDiagram diagramId={project.diagramId} compact={false} />
            )}
          </div>

          <div className="mt-7 space-y-6">
            {/* Overview */}
            <div>
              <h4 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-amber-600 dark:text-yellow-400">
                <Lightbulb className="h-4 w-4" aria-hidden="true" />
                Project Overview
              </h4>
              <p className="mt-2 text-base leading-relaxed text-[var(--text-primary)]">
                {project.description}
              </p>
            </div>

            {/* Problem Addressed */}
            <div>
              <h4 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-amber-600 dark:text-yellow-400">
                <Target className="h-4 w-4" aria-hidden="true" />
                Problem Addressed
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                {project.problemAddressed}
              </p>
            </div>

            {/* Objectives */}
            {project.objectives && project.objectives.length > 0 && (
              <div>
                <h4 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-amber-600 dark:text-yellow-400">
                  <Target className="h-4 w-4" aria-hidden="true" />
                  Key Objectives
                </h4>
                <ul className="mt-2.5 space-y-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {project.objectives.map((obj) => (
                    <li key={obj} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500 dark:bg-yellow-400" aria-hidden="true" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Key Features */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div>
                <h4 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-amber-600 dark:text-yellow-400">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  Key Features
                </h4>
                <ul className="mt-2.5 space-y-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {project.keyFeatures.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500 dark:bg-yellow-400" aria-hidden="true" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* My Contribution */}
            <div>
              <h4 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-amber-600 dark:text-yellow-400">
                <Wrench className="h-4 w-4" aria-hidden="true" />
                My Contribution &amp; Responsibilities
              </h4>
              <ul className="mt-2.5 space-y-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                {project.contributions.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500 dark:bg-yellow-400" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hardware & Sensors if available */}
            {project.hardware && project.hardware.length > 0 && (
              <div>
                <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                  Hardware &amp; Sensors
                </h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.hardware.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-amber-500/40 dark:border-yellow-400/40 bg-amber-500/10 dark:bg-[#0A0A0D] px-3 py-1 font-mono text-xs text-amber-700 dark:text-yellow-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                Technologies &amp; Tools
              </h4>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-[var(--border-card)] bg-[var(--bg-surface-alt)] px-2.5 py-1 font-mono text-xs text-[var(--text-secondary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border-card)] bg-[var(--bg-modal-footer)] px-6 py-4 sm:px-8">
          <div className="flex flex-wrap items-center gap-3">
            {hasGithubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[42px] items-center gap-2 rounded-full bg-amber-500 dark:bg-yellow-400 px-5 py-2 text-xs font-bold text-zinc-950 shadow-[0_4px_14px_rgba(245,158,11,0.2)] dark:shadow-[0_0_20px_rgba(250,204,21,0.2)] transition-colors hover:bg-amber-400 dark:hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
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
                className="inline-flex min-h-[42px] items-center gap-2 rounded-full border border-amber-500/70 dark:border-yellow-400/70 bg-[var(--bg-primary)] px-5 py-2 text-xs font-semibold text-amber-600 dark:text-yellow-400 transition-colors hover:border-amber-500 dark:hover:border-yellow-300 hover:bg-amber-500/10 dark:hover:bg-yellow-400/10 hover:text-amber-700 dark:hover:text-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
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
            className="inline-flex min-h-[42px] items-center rounded-full border border-zinc-300 dark:border-zinc-700 bg-transparent px-5 py-2 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-[var(--text-heading)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
          >
            Close
          </button>
        </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
