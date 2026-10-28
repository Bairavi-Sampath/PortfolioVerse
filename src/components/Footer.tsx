import { Heart, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/80 bg-background text-muted-foreground text-sm">
      <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded bg-primary/10 text-primary font-bold text-xs flex items-center justify-center">
            BS
          </span>
          <span className="font-semibold text-foreground">Bairavi S</span>
          <span>— PortfolioVerse</span>
        </div>

        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
          Crafted with passion using React, Vite & Tailwind CSS
        </p>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Bairavi S. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
