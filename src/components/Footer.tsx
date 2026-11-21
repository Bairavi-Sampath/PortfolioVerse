import { Award, Code2, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolioConfig';

export function Footer() {
  const { social } = PORTFOLIO_CONFIG;
  const hasLinkedin = Boolean(social.linkedinUrl.trim());
  const hasGithub = Boolean(social.githubUrl.trim());
  const hasLeetcode = Boolean(social.leetcodeUrl.trim());
  const hasSkillrack = Boolean(social.skillrackUrl.trim());
  const hasCodechef = Boolean(social.codechefUrl.trim());
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900 bg-[#050507] py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-lg font-bold tracking-tight text-white">BAIRAVI S</p>
            <p className="mt-1 text-sm font-medium text-yellow-400">
              AI/ML Engineer | Full Stack Developer
            </p>
            <p className="mt-2 text-sm text-zinc-400">
              &ldquo;Building intelligent solutions, one idea at a time.&rdquo;
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${social.email}`}
              aria-label="Email Bairavi S"
              title={social.email}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-yellow-400/60 bg-[#111114] text-zinc-200 transition-colors hover:border-yellow-300 hover:bg-yellow-400 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>

            {hasLinkedin && (
              <a
                href={social.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bairavi S on LinkedIn"
                title="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-yellow-400/60 bg-[#111114] text-zinc-200 transition-colors hover:border-yellow-300 hover:bg-yellow-400 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
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
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-yellow-400/60 bg-[#111114] text-zinc-200 transition-colors hover:border-yellow-300 hover:bg-yellow-400 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
              </a>
            )}

            {hasLeetcode && (
              <a
                href={social.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bairavi S on LeetCode"
                title="LeetCode"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-yellow-400/60 bg-[#111114] text-zinc-200 transition-colors hover:border-yellow-300 hover:bg-yellow-400 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
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
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-yellow-400/60 bg-[#111114] text-zinc-200 transition-colors hover:border-yellow-300 hover:bg-yellow-400 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
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
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-yellow-400/60 bg-[#111114] text-zinc-200 transition-colors hover:border-yellow-300 hover:bg-yellow-400 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
              >
                <Terminal className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-zinc-900 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} Bairavi S. All rights reserved.</p>
          <p>{social.location}</p>
        </div>
      </div>
    </footer>
  );
}
