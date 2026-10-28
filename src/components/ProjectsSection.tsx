import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Mushroom Classification Model",
      description:
        "Built a supervised learning model to classify mushrooms as edible or poisonous using Random Forest. Achieved ~95% accuracy after data preprocessing and evaluation with confusion matrix and classification report.",
      tech: ["Python", "Scikit-learn", "Pandas", "Seaborn", "Matplotlib", "Google Colab"],
      github: "https://github.com/Bairavi-Sampath/Mushroom-Classification_model",
      live: "#",
      gradient: "from-primary/20 to-secondary/20",
    },
    {
      title: "Portfolio Website",
      description:
        "Designed a responsive portfolio website implementing web development, including a contact form with emailing capabilities. Built with modern tech stack for optimal performance and user experience.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "EmailJS"],
      github: "https://github.com/Bairavi-Sampath/PortfolioVerse",
      live: "#",
      gradient: "from-secondary/20 to-primary/20",
    },
    {
      title: "Smart Tourists Safety Monitoring System",
      description:
        "Developed an AI-enabled real-time safety solution for tourists incorporating Aadhaar KYC, SOS alerts, Danger Zones, and Real-Time Disaster Alerts using geofencing and AI.",
      tech: ["React", "Leaflet", "OpenStreetMap", "FastAPI", "PostgreSQL", "Gemini API", "Twilio"],
      github: "#",
      live: "#",
      gradient: "from-primary/20 to-secondary/20",
    },
    {
      title: "ICU Video Conference System",
      description:
        "Built an ICU healthcare platform connecting nurses, patients and families through scheduled video calls, real-time patient monitoring and clinical documentation for remote critical care.",
      tech: ["React", "Next.js", "Talky.io", "Neon PostgreSQL"],
      github: "#",
      live: "#",
      gradient: "from-secondary/20 to-primary/20",
    },
    {
      title: "Netflix-Inspired Webpage",
      description:
        "Built a responsive Netflix-inspired website during internship, showcasing modern UI design with smooth navigation and engaging visual layout. Demonstrates proficiency in front-end development fundamentals.",
      tech: ["HTML", "CSS"],
      github: "https://github.com/Bairavi-Sampath/Netflix-inspired-Webpage",
      live: "https://netflix-inspired-webpage.vercel.app/",
      gradient: "from-primary/20 to-secondary/20",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text-cyan">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 gradient-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity rounded-lg`}></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/50 text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      View Code
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-secondary/50 text-secondary hover:bg-secondary/10"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Project
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
