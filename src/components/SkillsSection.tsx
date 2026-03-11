import { Card } from "@/components/ui/card";
import { Code2, Brain, Globe, Database } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["C/C++", "Python", "Java", "SQL"],
      color: "text-primary",
    },
    {
      title: "Machine Learning",
      icon: Brain,
      skills: ["pandas", "numpy", "Scikit-Learn"],
      color: "text-secondary",
    },
    {
      title: "Platforms",
      icon: Database,
      skills: ["GitHub", "Google Colab", "Docker"],
      color: "text-primary",
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["React", "Node.js", "PostgreSQL", "MongoDB", "Android Studio"],
      color: "text-secondary",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text-cyan">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 gradient-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:glow-border-cyan group"
            >
              <category.icon
                className={`${category.color} mb-4 group-hover:scale-110 transition-transform`}
                size={40}
              />
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/30 hover:bg-primary/20 transition-colors"
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
