import { ExternalLink, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import { PORTFOLIO_CONFIG } from '../config/portfolioConfig';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [isOpen, onClose]);

  const { resumePdfPath } = PORTFOLIO_CONFIG;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="resume-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
          onClick={onClose}
        >
          <motion.div
            key="resume-modal-content"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[var(--border-card)] bg-[var(--bg-surface)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-card)] px-5 py-4">
          <div>
            <h3 id="resume-modal-title" className="font-display text-lg font-bold text-[var(--text-heading)]">
              Bairavi S — Curriculum Vitae
            </h3>
            <p className="text-xs text-[var(--text-muted)]">PDF Document Preview</p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full border border-[var(--border-card)] bg-[var(--bg-primary)] px-4 py-2 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:border-amber-500/60 dark:hover:border-yellow-400/60 hover:text-amber-600 dark:hover:text-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              Open in New Tab
            </a>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close resume viewer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-card)] bg-[var(--bg-primary)] text-[var(--text-secondary)] transition-colors hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-[var(--text-heading)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-zinc-950">
          <iframe
            src={resumePdfPath}
            title="Bairavi S Resume Document"
            className="h-full w-full border-0"
          />
        </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
