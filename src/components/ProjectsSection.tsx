import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, FolderGit2, ShieldAlert, Video, Sparkles, BrainCircuit } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Mushroom Classification Model",
      category: "Machine Learning & AI",
      badgeIcon: BrainCircuit,
      description:
        "Built a supervised learning model to classify mushrooms as edible or poisonous using Random Forest. Achieved ~95% accuracy after thorough data preprocessing, exploratory data analysis, and evaluation with confusion matrix and classification report.",
      tech: ["Python", "Scikit-learn", "Pandas", "Seaborn", "Matplotlib", "Google Colab"],
      github: "https://github.com/Bairavi-Sampath/Mushroom-Classification_model",
      live: null,
      highlight: "~95% Classification Accuracy",
    },
    {
      title: "Smart Tourists Safety Monitoring System",
      category: "AI & Geofencing / Full Stack",
      badgeIcon: ShieldAlert,
      description:
        "Developed an AI-enabled real-time safety solution for tourists incorporating Aadhaar KYC, emergency SOS alerts, automated Danger Zone geofencing, and Real-Time Disaster Alerts powered by intelligent LLM integration.",
      tech: [
        "React",
        "Leaflet",
        "OpenStreetMap",
        "FastAPI",
        "PostgreSQL (PostGIS)",
        "Gemini API",
        "Twilio",
        "OpenWeather API",
      ],
      github: "https://github.com/Bairavi-Sampath",
      live: null,
      highlight: "Real-time Geofencing & Gemini AI",
    },
    {
      title: "ICU Video Conference System",
      category: "Healthcare & WebRTC",
      badgeIcon: Video,
      description:
        "Built an ICU healthcare platform connecting nurses, patients, and families through scheduled video calls, real-time patient status monitoring, and clinical documentation—enabling remote communication and reducing barriers in critical care settings.",
      tech: ["React", "Next.js", "Talky.io", "Neon PostgreSQL"],
      github: "https://github.com/Bairavi-Sampath",
      live: null,
      highlight: "Tele-Health & Remote Critical Care",
    },
    {
      title: "Portfolio Website (PortfolioVerse)",
      category: "Full Stack Web",
      badgeIcon: Sparkles,
      description:
        "Designed a responsive, modern portfolio website implementing full web development best practices, dark/light theme switching, and a dynamic interactive contact form with emailing capabilities.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "EmailJS"],
      github: "https://github.com/Bairavi-Sampath/PortfolioVerse",
      live: "#home",
      highlight: "Dark / Light Mode & EmailJS",
    },
    {
      title: "Netflix-Inspired Webpage",
      category: "Frontend Web (Internship)",
      badgeIcon: FolderGit2,
      description:
        "Built a responsive Netflix-inspired web application during internship at Novitech R&D Pvt. Ltd., showcasing modern UI layout, fluid navigation, and responsive media streaming aesthetic.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/Bairavi-Sampath/Netflix-inspired-Webpage",
      live: "https://netflix-inspired-webpage.vercel.app/",
      highlight: "Deployed on Vercel",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/20 dark:bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            Engineering Portfolio
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground glow-text-cyan">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mt-3"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.badgeIcon;
            return (
              <Card
                key={index}
                className="group relative flex flex-col justify-between border-border/80 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
              >
                <div className="h-1.5 w-full bg-gradient-to-r from-primary to-secondary"></div>

                <CardHeader className="p-6 pb-3">
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-primary">
                      <Icon className="w-4 h-4" />
                      <span>{project.category}</span>
                    </div>
                    {project.highlight && (
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                        {project.highlight}
                      </span>
                    )}
                  </div>

                  <CardTitle className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-6 pb-6 space-y-5">
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs px-2.5 py-0.5 bg-muted/80 text-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-border/60">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary/40 hover:bg-primary/10 text-foreground font-medium"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-1.5" />
                        Code Repository
                      </a>
                    </Button>

                    {project.live && (
                      <Button
                        size="sm"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-1.5" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
