import { Award, Calendar, CheckCircle, ExternalLink, Sparkles, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import type { CertificationItem } from '../data/portfolioData';

interface CertificateModalProps {
  certificate: CertificationItem | null;
  onClose: () => void;
}

export function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!certificate) return;

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
  }, [certificate, onClose]);

  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          key="cert-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
          onClick={onClose}
        >
          <motion.div
            key="cert-modal-content"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-[var(--border-card)] bg-[var(--bg-surface)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-[var(--border-subtle)] px-6 py-5 sm:px-8">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-amber-500/40 dark:border-yellow-400/40 bg-amber-500/10 dark:bg-[#0A0A0D] px-2.5 py-0.5 font-mono text-[11px] font-medium text-amber-700 dark:text-yellow-400">
                {certificate.issuer}
              </span>
              {certificate.category && (
                <span className="rounded-full border border-[var(--border-card)] bg-[var(--bg-surface-alt)] px-2.5 py-0.5 font-mono text-[11px] text-[var(--text-secondary)]">
                  {certificate.category}
                </span>
              )}
              {certificate.score && (
                <span className="rounded-full border border-amber-500/80 dark:border-yellow-400/80 bg-amber-500/15 dark:bg-yellow-400/10 px-2.5 py-0.5 font-mono text-[11px] font-bold text-amber-700 dark:text-yellow-300">
                  Score: {certificate.score}
                </span>
              )}
            </div>
            <h3
              id="certificate-modal-title"
              className="mt-2.5 font-display text-xl font-bold tracking-tight text-[var(--text-heading)] sm:text-2xl"
            >
              {certificate.title}
            </h3>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close certificate preview"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border-card)] bg-[var(--bg-primary)] text-[var(--text-secondary)] transition-colors hover:border-amber-500/60 dark:hover:border-yellow-400/60 hover:text-[var(--text-heading)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Preview Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
          {/* Certificate Image or PDF or Styled Canvas */}
          <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-[#09090C]">
            {certificate.imageUrl ? (
              <img
                src={certificate.imageUrl}
                alt={`${certificate.title} Certificate`}
                className="h-auto w-full object-contain"
              />
            ) : certificate.pdfUrl ? (
              <iframe
                src={certificate.pdfUrl}
                title={`${certificate.title} Certificate`}
                className="h-[480px] w-full border-0"
                loading="lazy"
              />
            ) : (
              <div className="relative flex min-h-[280px] sm:min-h-[340px] flex-col items-center justify-center p-8 text-center select-none">
                {/* Decorative border frame */}
                <div className="pointer-events-none absolute inset-3 rounded-lg border border-yellow-400/25 sm:inset-4" />
                <div className="pointer-events-none absolute inset-4 rounded-md border border-dashed border-zinc-800 sm:inset-5" />
                <div
                  className="pointer-events-none absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: 'radial-gradient(#FACC15 1px, transparent 1px)',
                    backgroundSize: '18px 18px',
                  }}
                />

                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-yellow-400/40 bg-[#16161C] shadow-[0_0_24px_rgba(250,204,21,0.18)]">
                  <Award className="h-8 w-8 text-yellow-400" />
                </div>

                <p className="relative z-10 mt-5 font-mono text-xs uppercase tracking-widest text-yellow-400">
                  Certificate of Completion &amp; Excellence
                </p>

                <h4 className="relative z-10 mt-2 max-w-md font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                  {certificate.title}
                </h4>

                <p className="relative z-10 mt-2 text-sm text-zinc-300">
                  Issued by <span className="font-semibold text-white">{certificate.issuer}</span>
                </p>

                {certificate.score && (
                  <div className="relative z-10 mt-3 inline-flex items-center gap-1.5 rounded-full border border-yellow-400/50 bg-[#0E0E12] px-3.5 py-1 text-xs font-semibold text-yellow-300">
                    <Sparkles className="h-3.5 w-3.5" />
                    Achieved Score: {certificate.score}
                  </div>
                )}

                <div className="relative z-10 mt-4 flex items-center gap-2 text-xs text-zinc-400">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Verified Date: {certificate.periodOrDate}</span>
                </div>
              </div>
            )}
          </div>

          {/* Details below preview */}
          <div className="mt-6 space-y-4">
            {certificate.topics && (
              <div>
                <h5 className="font-display text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                  Covered Skills &amp; Curriculum
                </h5>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {certificate.topics}
                </p>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1.5 text-amber-600 dark:text-yellow-400/90 font-medium">
                <CheckCircle className="h-3.5 w-3.5" />
                Verified Academic &amp; Industry Credential
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-[var(--border-card)] bg-[var(--bg-modal-footer)] px-6 py-4 sm:px-8">
          <p className="text-xs text-[var(--text-muted)]">
            {certificate.issuer} · {certificate.periodOrDate}
          </p>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-[40px] items-center rounded-full border border-zinc-300 dark:border-zinc-700 bg-transparent px-5 py-2 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-[var(--text-heading)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
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
