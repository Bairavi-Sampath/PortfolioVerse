import {
  AlertCircle,
  Award,
  Check,
  CheckCircle2,
  Code2,
  Copy,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Send,
  Terminal,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState, type FormEvent } from 'react';
import { PORTFOLIO_CONFIG } from '../config/portfolioConfig';

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

const INITIAL_VALUES: FormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const { social, web3FormsAccessKey } = PORTFOLIO_CONFIG;
  const hasLinkedin = Boolean(social.linkedinUrl.trim());
  const hasGithub = Boolean(social.githubUrl.trim());
  const hasLeetcode = Boolean(social.leetcodeUrl.trim());
  const hasSkillrack = Boolean(social.skillrackUrl.trim());
  const hasCodechef = Boolean(social.codechefUrl.trim());

  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!values.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }
    if (!values.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!EMAIL_REGEX.test(values.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!values.subject.trim()) {
      nextErrors.subject = 'Please enter a subject.';
    }
    if (!values.message.trim() || values.message.trim().length < 10) {
      nextErrors.message = 'Please enter a message of at least 10 characters.';
    }
    return nextErrors;
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(social.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    if (!web3FormsAccessKey.trim()) {
      setStatus('error');
      setFeedbackMessage(
        'The contact form delivery service is not configured yet. Please reach out directly via email at bairavisampath29@gmail.com.',
      );
      return;
    }

    setStatus('loading');
    setFeedbackMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: web3FormsAccessKey,
          name: values.name.trim(),
          email: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
          from_name: 'Bairavi S Portfolio Contact Form',
        }),
      });

      const data = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !data.success) {
        setStatus('error');
        setFeedbackMessage(
          data.message ||
          'Unable to send your message right now. Please email bairavisampath29@gmail.com directly.',
        );
        return;
      }

      setStatus('success');
      setFeedbackMessage('Thank you for reaching out. Your message has been sent.');
      setValues(INITIAL_VALUES);
      setErrors({});
    } catch {
      setStatus('error');
      setFeedbackMessage(
        'Network error while submitting the form. Please try again or email bairavisampath29@gmail.com directly.',
      );
    }
  };

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="bg-[var(--bg-primary)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-amber-600 dark:text-yellow-400">Contact</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[var(--text-heading)] sm:text-4xl">
              Let&apos;s Build Something Intelligent Together.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)]">
              I&apos;m always interested in exploring AI/ML opportunities, full-stack development
              projects, research collaborations and innovative ideas.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start justify-between gap-3 rounded-xl border border-[var(--border-card)] bg-[var(--bg-surface)] p-4 shadow-xs dark:shadow-none">
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border-card)] bg-[var(--bg-primary)]">
                    <Mail className="h-4 w-4 text-amber-600 dark:text-yellow-400" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-[var(--text-muted)]">Email</p>
                    <a
                      href={`mailto:${social.email}`}
                      className="mt-0.5 block truncate text-sm font-medium text-[var(--text-primary)] transition-colors hover:text-amber-600 dark:hover:text-yellow-400"
                    >
                      {social.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex min-h-[38px] shrink-0 items-center gap-1.5 rounded-lg border border-[var(--border-card)] bg-[var(--bg-primary)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:border-amber-500/60 dark:hover:border-yellow-400/60 hover:text-amber-600 dark:hover:text-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-amber-600 dark:text-yellow-400" aria-hidden="true" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      Copy
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-start gap-3.5 rounded-xl border border-[var(--border-card)] bg-[var(--bg-surface)] p-4 shadow-xs dark:shadow-none">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border-card)] bg-[var(--bg-primary)]">
                  <MapPin className="h-4 w-4 text-amber-600 dark:text-yellow-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--text-muted)]">Location</p>
                  <p className="mt-0.5 text-sm font-medium text-[var(--text-primary)]">{social.location}.</p>
                </div>
              </div>
            </div>

            {(hasLinkedin || hasGithub || hasLeetcode || hasSkillrack || hasCodechef) && (
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {hasLinkedin && (
                  <motion.a
                    whileHover={{ y: -2, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={social.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-amber-500/60 dark:border-yellow-400/60 bg-[var(--bg-surface)] px-5 py-2 text-sm font-medium text-[var(--text-secondary)] shadow-xs dark:shadow-none transition-colors hover:border-amber-500 dark:hover:border-yellow-300 hover:text-amber-700 dark:hover:text-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                    LinkedIn
                  </motion.a>
                )}
                {hasGithub && (
                  <motion.a
                    whileHover={{ y: -2, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={social.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-amber-500/60 dark:border-yellow-400/60 bg-[var(--bg-surface)] px-5 py-2 text-sm font-medium text-[var(--text-secondary)] shadow-xs dark:shadow-none transition-colors hover:border-amber-500 dark:hover:border-yellow-300 hover:text-amber-700 dark:hover:text-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    GitHub
                  </motion.a>
                )}
                {hasLeetcode && (
                  <motion.a
                    whileHover={{ y: -2, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={social.leetcodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-amber-500/60 dark:border-yellow-400/60 bg-[var(--bg-surface)] px-5 py-2 text-sm font-medium text-[var(--text-secondary)] shadow-xs dark:shadow-none transition-colors hover:border-amber-500 dark:hover:border-yellow-300 hover:text-amber-700 dark:hover:text-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                  >
                    <Code2 className="h-4 w-4" aria-hidden="true" />
                    LeetCode
                  </motion.a>
                )}
                {hasSkillrack && (
                  <motion.a
                    whileHover={{ y: -2, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={social.skillrackUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-amber-500/60 dark:border-yellow-400/60 bg-[var(--bg-surface)] px-5 py-2 text-sm font-medium text-[var(--text-secondary)] shadow-xs dark:shadow-none transition-colors hover:border-amber-500 dark:hover:border-yellow-300 hover:text-amber-700 dark:hover:text-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                  >
                    <Award className="h-4 w-4" aria-hidden="true" />
                    SkillRack
                  </motion.a>
                )}
                {hasCodechef && (
                  <motion.a
                    whileHover={{ y: -2, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={social.codechefUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-amber-500/60 dark:border-yellow-400/60 bg-[var(--bg-surface)] px-5 py-2 text-sm font-medium text-[var(--text-secondary)] shadow-xs dark:shadow-none transition-colors hover:border-amber-500 dark:hover:border-yellow-300 hover:text-amber-700 dark:hover:text-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                  >
                    <Terminal className="h-4 w-4" aria-hidden="true" />
                    CodeChef
                  </motion.a>
                )}
              </div>
            )}
          </motion.div>

          {/* Right Web3Forms Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-[var(--border-card)] bg-[var(--bg-surface)] p-6 shadow-sm dark:shadow-xl transition-all duration-200 hover:border-zinc-300 dark:hover:border-zinc-700/80 sm:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--text-primary)]">
                    Name <span className="text-amber-600 dark:text-yellow-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={values.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    className="mt-2 min-h-[44px] w-full rounded-lg border border-[var(--border-card)] bg-[var(--bg-input)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] placeholder-[var(--text-subtle)] transition-colors focus:border-amber-500 dark:focus:border-yellow-400 focus:outline-none"
                  />
                  {errors.name && (
                    <p id="contact-name-error" className="mt-1.5 text-xs text-rose-600 dark:text-rose-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-[var(--text-primary)]"
                  >
                    Email <span className="text-amber-600 dark:text-yellow-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={values.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    className="mt-2 min-h-[44px] w-full rounded-lg border border-[var(--border-card)] bg-[var(--bg-input)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] placeholder-[var(--text-subtle)] transition-colors focus:border-amber-500 dark:focus:border-yellow-400 focus:outline-none"
                  />
                  {errors.email && (
                    <p id="contact-email-error" className="mt-1.5 text-xs text-rose-600 dark:text-rose-400">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-subject"
                  className="block text-sm font-medium text-[var(--text-primary)]"
                >
                  Subject <span className="text-amber-600 dark:text-yellow-400">*</span>
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={values.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  placeholder="AI/ML collaboration, internship inquiry, or project discussion"
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                  className="mt-2 min-h-[44px] w-full rounded-lg border border-[var(--border-card)] bg-[var(--bg-input)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] placeholder-[var(--text-subtle)] transition-colors focus:border-amber-500 dark:focus:border-yellow-400 focus:outline-none"
                />
                {errors.subject && (
                  <p id="contact-subject-error" className="mt-1.5 text-xs text-rose-600 dark:text-rose-400">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-[var(--text-primary)]"
                >
                  Message <span className="text-amber-600 dark:text-yellow-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={values.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Share details about the opportunity, project scope, or collaboration idea..."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  className="mt-2 w-full rounded-lg border border-[var(--border-card)] bg-[var(--bg-input)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] placeholder-[var(--text-subtle)] transition-colors focus:border-amber-500 dark:focus:border-yellow-400 focus:outline-none"
                />
                {errors.message && (
                  <p id="contact-message-error" className="mt-1.5 text-xs text-rose-600 dark:text-rose-400">
                    {errors.message}
                  </p>
                )}
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div
                    key="contact-success"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.25 }}
                    role="status"
                    className="mt-5 flex items-start gap-2.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 p-3.5 text-sm text-emerald-800 dark:text-emerald-200"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    <span>{feedbackMessage}</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    key="contact-error"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.25 }}
                    role="alert"
                    className="mt-5 flex items-start gap-2.5 rounded-lg border border-rose-500/40 bg-rose-500/10 p-3.5 text-sm text-rose-800 dark:text-rose-200"
                  >
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-600 dark:text-rose-400" aria-hidden="true" />
                    <div>
                      <p>{feedbackMessage}</p>
                      <a
                        href={`mailto:${social.email}?subject=${encodeURIComponent(
                          values.subject || 'Portfolio Inquiry',
                        )}&body=${encodeURIComponent(values.message)}`}
                        className="mt-2 inline-block text-xs font-semibold text-amber-700 dark:text-yellow-300 underline underline-offset-4 hover:text-amber-600 dark:hover:text-yellow-200"
                      >
                        Open in your default email app
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-6 flex items-center justify-end">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.025 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === 'loading'}
                  className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-amber-500 dark:bg-yellow-400 px-7 py-2.5 text-sm font-bold text-zinc-950 shadow-[0_6px_20px_rgba(245,158,11,0.22)] dark:shadow-[0_0_20px_rgba(250,204,21,0.2)] transition-all duration-150 hover:bg-amber-400 dark:hover:bg-yellow-300 hover:shadow-[0_8px_28px_rgba(245,158,11,0.35)] dark:hover:shadow-[0_0_28px_rgba(250,204,21,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
