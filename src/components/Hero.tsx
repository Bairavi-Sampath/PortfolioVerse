import { ArrowRight, Award, Code2, Eye, Github, Linkedin, Mail, Terminal, User } from 'lucide-react';
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
      className="relative overflow-hidden bg-[#050507] pt-14 pb-20 sm:pt-18 sm:pb-24 lg:pt-20 lg:pb-28"
    >
      {/* Dot-matrix accents inspired by reference theme */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-6 left-4 h-28 w-16 opacity-35"
        style={{
          backgroundImage: 'radial-gradient(rgba(250, 204, 21, 0.75) 1.5px, transparent 1.5px)',
          backgroundSize: '14px 14px',
        }}
      />
      <div
        aria-hidden="true"
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
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Typographic Column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <p className="text-base font-medium text-zinc-200 sm:text-lg">
              Hello, I&apos;m <span className="font-semibold text-yellow-400">BAIRAVI S</span>
            </p>

            <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              AI/ML ENGINEER &amp;
              <span className="mt-1 block text-yellow-400">FULL STACK DEVELOPER</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              I&apos;m an AI and Machine Learning student passionate about building intelligent systems
              and full-stack applications. I enjoy combining machine learning, backend engineering
              and modern frontend technologies to develop practical solutions for real-world
              problems.
            </p>

            {/* Primary Pill CTA Row matching reference */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.button
                type="button"
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setResumeOpen(true)}
                className="inline-flex min-h-[48px] items-center gap-2.5 rounded-full bg-yellow-400 px-7 py-3 text-sm font-bold text-zinc-950 whitespace-nowrap shrink-0 shadow-[0_0_24px_rgba(250,204,21,0.28)] transition-all duration-150 hover:bg-yellow-300 hover:shadow-[0_0_32px_rgba(250,204,21,0.42)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
              >
                <Eye className="h-4 w-4" aria-hidden="true" />
                View Resume
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </motion.button>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex min-h-[48px] items-center gap-2.5 rounded-full border border-yellow-400/75 bg-transparent px-7 py-3 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-all duration-150 hover:border-yellow-300 hover:bg-yellow-400/10 hover:text-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
              >
                View My Projects
                <ArrowRight className="h-4 w-4 text-yellow-400" aria-hidden="true" />
              </motion.a>
            </div>

            {/* Social / Connect Icon Row */}
            <div className="mt-9">
              <p className="text-xs font-medium tracking-wide text-zinc-400">Connect :</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                {hasLinkedin && (
                  <a
                    href={social.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Bairavi S on LinkedIn"
                    title="LinkedIn"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-yellow-400/70 bg-[#0D0D10] text-zinc-100 transition-all duration-150 hover:border-yellow-300 hover:bg-yellow-400 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}

                {hasGithub && (
                  <a
                    href={social.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Bairavi S on GitHub"
                    title="GitHub"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-yellow-400/70 bg-[#0D0D10] text-zinc-100 transition-all duration-150 hover:border-yellow-300 hover:bg-yellow-400 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}

                <a
                  href={`mailto:${social.email}`}
                  aria-label="Email Bairavi S"
                  title={social.email}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-yellow-400/70 bg-[#0D0D10] text-zinc-100 transition-all duration-150 hover:border-yellow-300 hover:bg-yellow-400 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </a>

                {hasLeetcode && (
                  <a
                    href={social.leetcodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Bairavi S on LeetCode"
                    title="LeetCode"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-yellow-400/70 bg-[#0D0D10] text-zinc-100 transition-all duration-150 hover:border-yellow-300 hover:bg-yellow-400 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                  >
                    <Code2 className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}

                {hasSkillrack && (
                  <a
                    href={social.skillrackUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Bairavi S on SkillRack"
                    title="SkillRack"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-yellow-400/70 bg-[#0D0D10] text-zinc-100 transition-all duration-150 hover:border-yellow-300 hover:bg-yellow-400 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                  >
                    <Award className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}

                {hasCodechef && (
                  <a
                    href={social.codechefUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Bairavi S on CodeChef"
                    title="CodeChef"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-yellow-400/70 bg-[#0D0D10] text-zinc-100 transition-all duration-150 hover:border-yellow-300 hover:bg-yellow-400 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                  >
                    <Terminal className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Luminous Gold Ring Portrait Area with Subtle Gentle Float */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center lg:col-span-5"
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
              className="relative flex h-[296px] w-[296px] items-center justify-center sm:h-[400px] sm:w-[400px]"
            >
              {/* Warm golden aura & crisp luminous ring with soft breathing pulse */}
              <motion.div
                aria-hidden="true"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.12, 0.22, 0.12],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-4 rounded-full bg-yellow-400/15 blur-2xl"
              />
              <div
                aria-hidden="true"
                className="absolute inset-3 rounded-full border-2 border-yellow-400/85 shadow-[0_0_45px_rgba(250,204,21,0.32)]"
              />

              {/* Circular Portrait Frame */}
              <div className="relative flex h-[248px] w-[248px] flex-col items-center justify-center overflow-hidden rounded-full border border-zinc-800 bg-[#0D0D10] p-5 text-center sm:h-[340px] sm:w-[340px] sm:p-6">
                {profileImageUrl ? (
                  <img
                    src={profileImageUrl}
                    alt="Portrait of Bairavi S"
                    decoding="async"
                    fetchPriority="high"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <>
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-yellow-400/50 bg-[#141418] sm:h-24 sm:w-24">
                      <User className="h-9 w-9 text-yellow-400 sm:h-11 sm:w-11" aria-hidden="true" />
                    </div>
                    <p className="mt-3.5 font-display text-base font-bold tracking-tight text-white sm:mt-4 sm:text-lg">
                      BAIRAVI S
                    </p>
                    <p className="mt-1 text-xs font-medium text-yellow-400">
                      B.E. CSE (AI &amp; ML)
                    </p>
                    <p className="mt-1.5 max-w-[190px] text-xs leading-relaxed text-zinc-400">
                      KPR Institute of Engineering and Technology
                    </p>
                  </>
                )}
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
          <path d="M0 46 C360 14, 1080 14, 1440 46 L1440 56 L0 56 Z" fill="#0B0B0E" />
        </svg>
      </div>
    </section>
  );
}
