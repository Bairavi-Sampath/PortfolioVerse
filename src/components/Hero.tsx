import { ArrowRight, Award, Code2, Eye, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { PORTFOLIO_CONFIG } from '../config/portfolioConfig';
import { ResumeModal } from './ResumeModal';

export function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const { profileImageUrl, social } = PORTFOLIO_CONFIG;
  const hasLinkedin = Boolean(social.linkedinUrl.trim());
  const hasGithub = Boolean(social.githubUrl.trim());
  const hasLeetcode = Boolean(social.leetcodeUrl.trim());
  const hasSkillrack = Boolean(social.skillrackUrl.trim());
  const hasCodechef = Boolean(social.codechefUrl.trim());

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[var(--bg-primary)] pt-14 pb-20 sm:pt-18 sm:pb-24 lg:pt-20 lg:pb-28"
    >
      {/* Dot-matrix accents inspired by reference theme */}
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.28, 0.45, 0.28] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-6 left-4 h-28 w-16 opacity-35"
        style={{
          backgroundImage: 'radial-gradient(rgba(250, 204, 21, 0.75) 1.5px, transparent 1.5px)',
          backgroundSize: '14px 14px',
        }}
      />
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="pointer-events-none absolute top-16 left-1/2 hidden h-24 w-24 -translate-x-4 opacity-40 lg:block"
        style={{
          backgroundImage: 'radial-gradient(rgba(250, 204, 21, 0.7) 1.5px, transparent 1.5px)',
          backgroundSize: '13px 13px',
        }}
      />

      {/* Diagonal luminous gold rays on right side with subtle animated breathing glow */}
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: [0.65, 0.9, 0.65],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute -top-20 right-[-8%] h-[420px] w-[520px] rotate-[-38deg] bg-gradient-to-b from-yellow-400/12 via-amber-500/5 to-transparent blur-xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute top-24 right-[10%] hidden h-72 w-2 rotate-[38deg] bg-gradient-to-b from-yellow-400/35 via-yellow-400/10 to-transparent lg:block"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          {/* Left Typographic Column */}
          <div className="lg:col-span-6 xl:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="text-base font-medium text-[var(--text-secondary)] sm:text-lg"
            >
              Hello, I&apos;m <span className="font-semibold text-amber-600 dark:text-yellow-400">BAIRAVI S</span>
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 font-display text-4xl font-bold uppercase leading-[1.08] tracking-tight text-[var(--text-heading)] sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem]"
            >
              AI/ML ENGINEER &amp;
              <span className="mt-1 block text-amber-500 dark:text-yellow-400">FULL STACK DEVELOPER</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg"
            >
              I&apos;m an AI and Machine Learning student passionate about building intelligent systems
              and full-stack applications. I enjoy combining machine learning, backend engineering
              and modern frontend technologies to develop practical solutions for real-world
              problems.
            </motion.p>

            {/* Primary Pill CTA Row matching reference */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <motion.button
                type="button"
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setResumeOpen(true)}
                className="inline-flex min-h-[48px] items-center gap-2.5 rounded-full bg-amber-500 dark:bg-yellow-400 px-7 py-3 text-sm font-bold text-zinc-950 whitespace-nowrap shrink-0 shadow-[0_6px_20px_rgba(245,158,11,0.28)] dark:shadow-[0_0_24px_rgba(250,204,21,0.28)] transition-all duration-150 hover:bg-amber-400 dark:hover:bg-yellow-300 hover:shadow-[0_8px_28px_rgba(245,158,11,0.38)] dark:hover:shadow-[0_0_32px_rgba(250,204,21,0.42)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
              >
                <Eye className="h-4 w-4" aria-hidden="true" />
                View Resume
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </motion.button>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex min-h-[48px] items-center gap-2.5 rounded-full border border-amber-500/80 dark:border-yellow-400/75 bg-transparent px-7 py-3 text-sm font-semibold text-[var(--text-heading)] whitespace-nowrap shrink-0 transition-all duration-150 hover:border-amber-600 dark:hover:border-yellow-300 hover:bg-amber-500/10 dark:hover:bg-yellow-400/10 hover:text-amber-700 dark:hover:text-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
              >
                View My Projects
                <ArrowRight className="h-4 w-4 text-amber-600 dark:text-yellow-400" aria-hidden="true" />
              </motion.a>
            </motion.div>

            {/* Social / Connect Icon Row */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9"
            >
              <p className="text-xs font-medium tracking-wide text-[var(--text-muted)]">Connect :</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                {hasLinkedin && (
                  <motion.a
                    whileHover={{ y: -2, scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Bairavi S on LinkedIn"
                    title="LinkedIn"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-amber-500/60 dark:border-yellow-400/70 bg-[var(--bg-surface)] dark:bg-[#0D0D10] text-[var(--text-primary)] shadow-xs dark:shadow-none transition-all duration-150 hover:border-amber-500 dark:hover:border-yellow-300 hover:bg-amber-500 dark:hover:bg-yellow-400 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                  </motion.a>
                )}

                {hasGithub && (
                  <motion.a
                    whileHover={{ y: -2, scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Bairavi S on GitHub"
                    title="GitHub"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-amber-500/60 dark:border-yellow-400/70 bg-[var(--bg-surface)] dark:bg-[#0D0D10] text-[var(--text-primary)] shadow-xs dark:shadow-none transition-all duration-150 hover:border-amber-500 dark:hover:border-yellow-300 hover:bg-amber-500 dark:hover:bg-yellow-400 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                  </motion.a>
                )}

                <motion.a
                  whileHover={{ y: -2, scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  href={`mailto:${social.email}`}
                  aria-label="Email Bairavi S"
                  title={social.email}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-amber-500/60 dark:border-yellow-400/70 bg-[var(--bg-surface)] dark:bg-[#0D0D10] text-[var(--text-primary)] shadow-xs dark:shadow-none transition-all duration-150 hover:border-amber-500 dark:hover:border-yellow-300 hover:bg-amber-500 dark:hover:bg-yellow-400 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </motion.a>

                {hasLeetcode && (
                  <motion.a
                    whileHover={{ y: -2, scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.leetcodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Bairavi S on LeetCode"
                    title="LeetCode"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-amber-500/60 dark:border-yellow-400/70 bg-[var(--bg-surface)] dark:bg-[#0D0D10] text-[var(--text-primary)] shadow-xs dark:shadow-none transition-all duration-150 hover:border-amber-500 dark:hover:border-yellow-300 hover:bg-amber-500 dark:hover:bg-yellow-400 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                  >
                    <Code2 className="h-4 w-4" aria-hidden="true" />
                  </motion.a>
                )}

                {hasSkillrack && (
                  <motion.a
                    whileHover={{ y: -2, scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.skillrackUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Bairavi S on SkillRack"
                    title="SkillRack"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-amber-500/60 dark:border-yellow-400/70 bg-[var(--bg-surface)] dark:bg-[#0D0D10] text-[var(--text-primary)] shadow-xs dark:shadow-none transition-all duration-150 hover:border-amber-500 dark:hover:border-yellow-300 hover:bg-amber-500 dark:hover:bg-yellow-400 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                  >
                    <Award className="h-4 w-4" aria-hidden="true" />
                  </motion.a>
                )}

                {hasCodechef && (
                  <motion.a
                    whileHover={{ y: -2, scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.codechefUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Bairavi S on CodeChef"
                    title="CodeChef"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-amber-500/60 dark:border-yellow-400/70 bg-[var(--bg-surface)] dark:bg-[#0D0D10] text-[var(--text-primary)] shadow-xs dark:shadow-none transition-all duration-150 hover:border-amber-500 dark:hover:border-yellow-300 hover:bg-amber-500 dark:hover:bg-yellow-400 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                  >
                    <Terminal className="h-4 w-4" aria-hidden="true" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>

          {/* Right Portrait Area with Subtle Gentle Float */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center lg:col-span-6 xl:col-span-5"
          >
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="animate-portrait-glow relative flex aspect-square w-full max-w-[320px] items-center justify-center rounded-full bg-transparent p-0 shadow-[0_14px_38px_rgba(245,158,11,0.14)] dark:shadow-none sm:max-w-[400px] lg:max-w-[480px] xl:max-w-[520px]"
            >
              <div className="h-full w-full overflow-hidden rounded-full dark:[mask-image:radial-gradient(circle,black_74%,transparent_100%)]">
                <img
                  src={profileImageUrl || '/assets/bairavi_portrait.jpg'}
                  alt="Portrait of Bairavi S"
                  decoding="async"
                  fetchPriority="high"
                  referrerPolicy="no-referrer"
                  className="h-full w-full scale-[1.12] object-contain dark:scale-[1.04]"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      {/* Curved luminous gold bottom horizon line matching reference theme */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden" aria-hidden="true">
        <svg
          viewBox="0 0 1440 56"
          className="h-10 w-full sm:h-12"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 44 C360 12, 1080 12, 1440 44"
            stroke="#FACC15"
            strokeOpacity="0.65"
            strokeWidth="2"
          />
          <path d="M0 46 C360 14, 1080 14, 1440 46 L1440 56 L0 56 Z" fill="var(--bg-secondary)" />
        </svg>
      </div>
    </section>
  );
}
