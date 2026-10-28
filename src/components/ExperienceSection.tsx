import { Briefcase, Calendar, CheckCircle2, Building, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Novitech R&D Pvt. Ltd.",
      period: "14th Dec 2025 – 14th Jan 2026",
      type: "Internship",
      location: "Tamil Nadu, India",
      summary:
        "Engineered and deployed responsive web solutions, collaborated on modern web architectures, and maintained clean version-controlled repositories.",
      responsibilities: [
        "Built and styled multiple production-ready web applications, including a real-time weather app, modern portfolio, and interactive Netflix clone.",
        "Engineered responsive, mobile-first user interfaces adhering to UI/UX and web standards.",
        "Managed repository branching strategies, issue tracking, and clean commits using Git and GitHub.",
        "Collaborated on full-stack workflows linking frontend interfaces with API endpoints and backend services.",
      ],
      skills: ["React", "JavaScript", "HTML5", "CSS3", "Git", "GitHub", "API Integration", "UI/UX"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30 dark:bg-card/20">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Industry Exposure
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground glow-text-cyan">
            Internship Experience
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mt-3"></div>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <Card
              key={idx}
              className="relative overflow-hidden border-border/80 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-primary to-secondary"></div>

              <CardHeader className="p-6 pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                    <Building className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">
                    {exp.role}
                  </CardTitle>
                  <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/30">
                    {exp.type}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="px-6 pb-6 space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.summary}
                </p>

                <div className="space-y-2.5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Key Highlights & Contributions
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2 text-sm text-foreground/90">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-border/60">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Technologies Applied
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs px-2.5 py-0.5 bg-muted/80 text-foreground"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
