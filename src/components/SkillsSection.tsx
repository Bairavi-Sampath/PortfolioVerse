import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Brain, Globe, Database, Wrench, Sparkles } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      description: "Core programming and querying fundamentals",
      skills: ["C", "Python", "Java", "SQL"],
      color: "text-primary",
      borderColor: "hover:border-primary/50",
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      description: "Model development, data pipelines & LLMs",
      skills: [
        "Scikit-learn",
        "LLM Integration (Gemini API)",
        "NumPy",
        "Pandas",
        "Data Preprocessing",
        "Model Evaluation Metrics",
      ],
      color: "text-secondary",
      borderColor: "hover:border-secondary/50",
    },
    {
      title: "Web Development",
      icon: Globe,
      description: "Modern frontend and backend engineering",
      skills: ["React", "Node.js", "PostgreSQL", "Android Studio"],
      color: "text-primary",
      borderColor: "hover:border-primary/50",
    },
    {
      title: "Platforms & Tools",
      icon: Database,
      description: "Dev environments, containerization & VCS",
      skills: ["GitHub", "Google Colab", "Docker"],
      color: "text-secondary",
      borderColor: "hover:border-secondary/50",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold mb-3">
            <Wrench className="w-3.5 h-3.5" />
            Technical Arsenal
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground glow-text-cyan">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mt-3"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`p-6 border-border/80 bg-card ${category.borderColor} transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between`}
            >
              <div>
                <div className="p-3 rounded-xl bg-muted/50 w-fit mb-4">
                  <category.icon className={`${category.color}`} size={30} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1.5">{category.title}</h3>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/50">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary dark:text-primary rounded-md border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
