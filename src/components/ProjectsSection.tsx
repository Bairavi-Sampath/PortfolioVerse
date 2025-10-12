import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Mushroom Classification Model",
      description:
        "ML model to classify mushrooms as edible or poisonous using Random Forest algorithm with 95% accuracy.",
      tech: ["Python", "Scikit-learn", "Pandas", "Seaborn", "Matplotlib"],
      github: "#",
      gradient: "from-primary/20 to-secondary/20",
    },
    {
      title: "Swiggy Frontend Clone",
      description:
        "Frontend replica of the Swiggy food delivery app using HTML and CSS. Focused on responsiveness and clean UI design.",
      tech: ["HTML", "CSS"],
      github: "https://github.com",
      gradient: "from-secondary/20 to-primary/20",
    },
    {
      title: "Driver Fatigue Detection",
      description:
        "Deep learning system for detecting driver drowsiness in autonomous vehicles using computer vision and CNN models.",
      tech: ["Python", "OpenCV", "TensorFlow"],
      github: "#",
      gradient: "from-primary/20 to-secondary/20",
    },
    {
      title: "AI Voice Cloning & Dubbing",
      description:
        "Prototype system that converts speech to another language with AI-based voice cloning for natural-sounding dubbing.",
      tech: ["Python", "TensorFlow", "PyTorch"],
      github: "#",
      gradient: "from-secondary/20 to-primary/20",
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
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Learn More
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
