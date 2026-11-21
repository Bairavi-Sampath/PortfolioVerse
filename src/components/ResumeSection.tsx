import { Eye, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { ResumeModal } from './ResumeModal';

export function ResumeSection() {
  const [viewerOpen, setViewerOpen] = useState(false);

  return (
    <section
      id="resume"
      className="border-b border-zinc-900 bg-[#0B0B0E] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-between gap-6 rounded-2xl border border-zinc-800 bg-[#111114] p-6 shadow-xl transition-all duration-200 hover:border-zinc-700/80 sm:p-10 lg:flex-row lg:items-center"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-yellow-400">
              <FileText className="h-4 w-4" aria-hidden="true" />
              <span>Resume</span>
            </div>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Review my complete resume
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-zinc-400 sm:text-base">
              Preview my academic record, AI/ML &amp; full-stack projects, Springer research
              publication, and technical certifications directly in the embedded viewer.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setViewerOpen(true)}
              className="inline-flex min-h-[46px] items-center gap-2 rounded-full bg-yellow-400 px-6 py-2.5 text-sm font-bold text-zinc-950 whitespace-nowrap shrink-0 shadow-[0_0_24px_rgba(250,204,21,0.28)] transition-all duration-150 hover:bg-yellow-300 hover:shadow-[0_0_32px_rgba(250,204,21,0.42)] focus-visible:outline-2 focus-visible:outline-yellow-400"
            >
              <Eye className="h-4 w-4" aria-hidden="true" />
              View Resume
            </motion.button>
          </div>
        </motion.div>
      </div>

      <ResumeModal isOpen={viewerOpen} onClose={() => setViewerOpen(false)} />
    </section>
  );
}
