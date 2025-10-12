import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-bg.jpg";
import { ChevronDown } from "lucide-react";
const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "AI & ML Enthusiast | Web Developer | Future AI Engineer";
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
    backgroundImage: `url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed"
  }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => <div key={i} className="absolute w-2 h-2 bg-primary rounded-full opacity-30 animate-float" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${5 + Math.random() * 5}s`
      }}></div>)}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text-cyan">
          Bairavi Sampath
        </h1>
        <div className="h-16 md:h-12 mb-8">
          <p className="text-xl md:text-2xl text-secondary font-light">
            {displayText}
            <span className="animate-pulse"> | Python</span>
          </p>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Welcome to my portfolio. I'm passionate about building intelligent systems and creating beautiful web experiences.
        </p>
        <a href="#about" onClick={e => {
        e.preventDefault();
        document.querySelector("#about")?.scrollIntoView({
          behavior: "smooth"
        });
      }} className="inline-block">
          <ChevronDown size={40} className="text-primary animate-bounce cursor-pointer hover:scale-110 transition-transform" />
        </a>
      </div>
    </section>;
};
export default HeroSection;