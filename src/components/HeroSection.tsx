import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-bg.jpg";
import { ChevronDown, MapPin, Mail, Phone, Github, Linkedin, ExternalLink, Code2, Award, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const titles = [
  "AI & ML Enthusiast",
  "Full Stack Developer",
  "Undergraduate AI & ML Engineer",
  "Machine Learning Practitioner",
];

const HeroSection = () => {

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 35 : 70;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentTitle.slice(0, displayText.length - 1)
            : currentTitle.slice(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dynamic Overlay that adapts to light and dark theme */}
      <div className="absolute inset-0 bg-background/85 dark:bg-background/90 backdrop-blur-[2px]"></div>

      {/* Floating accent particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/40 dark:bg-primary/30 rounded-full animate-float"
            style={{
              left: `${(i * 19) % 100}%`,
              top: `${(i * 27) % 100}%`,
              animationDelay: `${(i % 5) * 0.8}s`,
              animationDuration: `${6 + (i % 4) * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        {/* Top Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs md:text-sm font-medium mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          B.E. CSE (Artificial Intelligence & Machine Learning)
        </div>

        {/* Main Name Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-foreground">
          Bairavi <span className="text-primary glow-text-cyan">S</span>
        </h1>

        {/* Dynamic Typewriter Subheading */}
        <div className="h-12 md:h-14 mb-6 flex items-center justify-center">
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-secondary">
            {displayText}
            <span className="animate-pulse text-primary font-bold">|</span>
          </p>
        </div>

        {/* Short Bio */}
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Motivated Computer Science student at <strong className="text-foreground">KPR Institute of Engineering and Technology</strong>.
          Passionate about developing intelligent real-world AI systems, machine learning models, and modern full-stack web applications.
        </p>

        {/* Contact Quick Meta Pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-muted-foreground mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-muted/60 border border-border">
            <MapPin className="w-3.5 h-3.5 text-primary" /> Erode, Tamil Nadu, India
          </span>
          <a
            href="mailto:bairavisampath29@gmail.com"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-muted/60 border border-border hover:text-primary transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-primary" /> bairavisampath29@gmail.com
          </a>
          <a
            href="tel:+919361219960"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-muted/60 border border-border hover:text-primary transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-primary" /> +91 9361219960
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
          <Button
            size="lg"
            onClick={() => scrollTo("#projects")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md font-semibold px-6"
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo("#experience")}
            className="border-primary/40 text-foreground hover:bg-primary/10 font-semibold px-6"
          >
            Internship Experience
          </Button>
          <Button
            size="lg"
            variant="ghost"
            onClick={() => scrollTo("#contact")}
            className="hover:bg-muted text-muted-foreground hover:text-foreground font-semibold px-6"
          >
            Get in Touch
          </Button>
        </div>

        {/* Quick Social Links Bar */}
        <div className="flex items-center justify-center gap-3">
          <a
            href="https://github.com/Bairavi-Sampath"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-border bg-card/80 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:scale-110"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-border bg-card/80 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:scale-110"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://leetcode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-border bg-card/80 text-muted-foreground hover:text-amber-500 hover:border-amber-500/50 transition-all hover:scale-110"
            title="LeetCode Profile"
            aria-label="LeetCode Profile"
          >
            <Code2 className="w-4 h-4" />
          </a>
          <a
            href="https://www.skillrack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-border bg-card/80 text-muted-foreground hover:text-secondary hover:border-secondary/50 transition-all hover:scale-110"
            title="SkillRack Profile"
            aria-label="SkillRack Profile"
          >
            <Award className="w-4 h-4" />
          </a>
          <a
            href="https://www.codechef.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-border bg-card/80 text-muted-foreground hover:text-orange-500 hover:border-orange-500/50 transition-all hover:scale-110"
            title="CodeChef Profile"
            aria-label="CodeChef Profile"
          >
            <Terminal className="w-4 h-4" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12">
          <button
            onClick={() => scrollTo("#about")}
            aria-label="Scroll to About section"
            className="inline-block text-primary animate-bounce hover:scale-110 transition-transform"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;