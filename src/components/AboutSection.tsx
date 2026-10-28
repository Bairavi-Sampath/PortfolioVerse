import profilePhoto from "@/assets/profile-photo.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Sparkles, BookOpen, User, CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  const education = [
    {
      institution: "KPR Institute of Engineering and Technology, Coimbatore",
      degree: "B.E. CSE (Artificial Intelligence and Machine Learning)",
      period: "2024 – 2028",
      grade: "CGPA: 8.7 / 10 (Till 4th Sem)",
      highlight: "Specialization in Artificial Intelligence & Machine Learning",
      current: true,
    },
    {
      institution: "Erode District Government Model School, Perundurai",
      degree: "Higher Secondary Certificate (HSC) — Maths with Computer Science",
      period: "2022 – 2024",
      grade: "Score: 84.2%",
      highlight: "Top tier academic foundation in Computer Science & Mathematics",
      current: false,
    },
  ];

  const highlights = [
    "Practical project development experience in Supervised Machine Learning & Deep Learning",
    "Developed real-world AI solutions including tourist safety geofencing and ICU telemedicine",
    "Strong foundation in core Data Structures, Algorithms, C++, Python, and SQL",
    "Active technical researcher with SCOPUS-indexed Springer LNNS paper acceptance",
  ];

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Pill & Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold mb-3">
            <User className="w-3.5 h-3.5" />
            Background & Academics
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground glow-text-cyan">
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mt-3"></div>
        </div>

        {/* Bio & Photo Grid */}
        <div className="grid md:grid-cols-12 gap-10 items-center mb-20">
          <div className="md:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-tr from-primary to-secondary rounded-2xl blur-lg opacity-40 group-hover:opacity-65 transition-opacity"></div>
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary/40 bg-card p-2 shadow-xl">
                <img
                  src={profilePhoto}
                  alt="Bairavi S"
                  className="rounded-xl w-72 h-80 sm:w-80 sm:h-96 object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-5">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight text-foreground">
                Hi, I'm <span className="text-primary">Bairavi S</span>
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                I am a motivated computer science student specializing in{" "}
                <strong className="text-foreground font-semibold">
                  Artificial Intelligence and Machine Learning
                </strong>{" "}
                at KPR Institute of Engineering and Technology, Coimbatore. I have practical project development experience along with a strong academic background.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                My work includes developing a machine learning model for mushroom classification and a smart tourist safety monitoring system using AI. I have strong skills in programming, machine learning, and problem-solving with an earnest passion for building real-world AI solutions, and I am eager to continuously learn and develop new skills.
              </p>
            </div>

            {/* Core Competency Checklist */}
            <div className="pt-2 grid sm:grid-cols-2 gap-3">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg border border-border/70 bg-card/60 backdrop-blur-sm text-xs sm:text-sm text-foreground/90"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-foreground">Education</h3>
              <p className="text-xs text-muted-foreground">Academic milestones and academic performance</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-border/80 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="h-1.5 w-full bg-gradient-to-r from-primary to-secondary"></div>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {edu.period}
                    </span>
                    {edu.current && (
                      <Badge variant="outline" className="text-xs bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30">
                        Current
                      </Badge>
                    )}
                  </div>

                  <h4 className="text-lg font-bold text-foreground leading-snug">
                    {edu.institution}
                  </h4>
                  <p className="text-sm font-medium text-foreground/80">{edu.degree}</p>

                  <div className="pt-2 border-t border-border/60 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{edu.highlight}</span>
                    <span className="text-sm font-bold text-secondary shrink-0">{edu.grade}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;