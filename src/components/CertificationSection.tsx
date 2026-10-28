import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Award, ExternalLink, Calendar, ShieldCheck, FileText, Sparkles, BookOpen } from "lucide-react";

// Import certificate images
import cert1 from "../assets/advanced_C++.jpg";
import cert2 from "../assets/C++_certificate.jpg";

interface CertificationItem {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  whyCertificate: string;
  image: string | null;
  skills: string[];
  isResearchPaper?: boolean;
  highlightTag?: string;
}

const certifications: CertificationItem[] = [
  {
    id: 1,
    title: "Research Paper Accepted for Publication (Springer LNNS)",
    issuer: "CICPS’26 / Springer LNNS",
    date: "Jan 2026",
    description:
      "Authored and presented a peer-reviewed research paper at the International Conference on Computational Intelligence & Power Systems (CICPS'26), accepted for publication in Springer Lecture Notes in Networks and Systems (SCOPUS-Indexed).",
    whyCertificate:
      "Demonstrates high-level research rigor, novel AI application methodologies, scientific writing, and validation within an internationally recognized SCOPUS-indexed academic publication.",
    image: null,
    skills: ["Research", "Artificial Intelligence", "SCOPUS Indexed", "Scientific Writing"],
    isResearchPaper: true,
    highlightTag: "SCOPUS Publication",
  },
  {
    id: 2,
    title: "AWS Fundamentals for Cloud Practitioners",
    issuer: "Nminds Academy",
    date: "Jan 2026",
    description:
      "Comprehensive cloud computing training covering core AWS services, cloud architectural principles, IAM security, compute (EC2, Lambda), storage (S3), and cloud deployment models.",
    whyCertificate:
      "Essential for deploying machine learning pipelines and modern full-stack web applications to scalable cloud infrastructure.",
    image: null,
    skills: ["AWS", "Cloud Computing", "Infrastructure", "DevOps"],
    highlightTag: "Cloud Architecture",
  },
  {
    id: 3,
    title: "IIT Bombay Spoken Tutorial (Java and RDBMS)",
    issuer: "IIT Bombay",
    date: "Dec 2025",
    description:
      "Advanced certification covering Object-Oriented Programming in Java, JDBC database connectivity, and Relational Database Management Systems (RDBMS) design and query optimization.",
    whyCertificate:
      "Validates enterprise-level backend architecture, object-oriented software engineering principles, and robust database management.",
    image: null,
    skills: ["Java", "RDBMS", "SQL", "Database Design", "OOP"],
  },
  {
    id: 4,
    title: "NPTEL (Responsible and Safe AI)",
    issuer: "NPTEL / IIT Madras",
    date: "Oct 2025",
    description:
      "Specialized course covering ethical AI development, algorithmic fairness, explainable AI (XAI), safety protocols, privacy-preserving machine learning, and AI governance standards.",
    whyCertificate:
      "Crucial for responsible deployment of machine learning and large language models in high-stakes domains such as healthcare and public safety.",
    image: null,
    skills: ["Responsible AI", "AI Ethics", "Model Safety", "Explainable AI"],
    highlightTag: "AI Ethics",
  },
  {
    id: 5,
    title: "SkillRack (Python and SQL)",
    issuer: "SkillRack",
    date: "Jul 2025",
    description:
      "Rigorous coding and assessment certification evaluating problem-solving speed, data structures in Python, complex SQL joins, subqueries, and database transaction management.",
    whyCertificate:
      "Validates hands-on coding proficiency, backend logic implementation, and optimized data query writing essential for data engineering and full-stack development.",
    image: null,
    skills: ["Python", "SQL", "Database Queries", "Problem Solving"],
  },
  {
    id: 6,
    title: "IIT Bombay Spoken Tutorial (C, Advanced C++, Python 3.4.3)",
    issuer: "IIT Bombay",
    date: "May 2025",
    description:
      "Advanced certification covering Object-Oriented Programming, memory management, complex data structures, algorithms in C++, and Python scripting fundamentals.",
    whyCertificate:
      "Advanced C++ knowledge is crucial for writing efficient, high-performance code and systems-level algorithms, complemented by Python's versatility across AI domains.",
    image: cert1,
    skills: ["Advanced C++", "Python", "OOP", "Data Structures"],
    highlightTag: "Certificate Verified",
  },
  {
    id: 7,
    title: "IIT Bombay Spoken Tutorial (C++)",
    issuer: "IIT Bombay",
    date: "Dec 2024",
    description:
      "Foundational C++ programming course completed through the IIT Bombay Spoken Tutorial program, covering fundamental syntax, functional programming, and practical logic implementations.",
    whyCertificate:
      "Built a solid foundation in low-level programming concepts, algorithmic logic, and performance-critical computing.",
    image: cert2,
    skills: ["C++", "Programming", "Logic Building"],
    highlightTag: "Certificate Verified",
  },
  {
    id: 8,
    title: "Cpp Training",
    issuer: "KPR Institute of Engineering and Technology",
    date: "Dec 2024",
    description:
      "Intensive hands-on C++ programming training organized at KPR Institute with course material powered by the Spoken Tutorial Project, IIT Bombay. Successfully passed the remote assessment.",
    whyCertificate:
      "Demonstrates academic dedication and foundational assessment success in systems programming early in undergrad.",
    image: null,
    skills: ["C++", "Algorithms", "Competitive Coding"],
  },
];

export function CertificationSection() {
  return (
    <section id="certifications" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Accreditations & Honors
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground glow-text-cyan">
            Certifications & Achievements
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mt-3"></div>
        </div>

        {/* Highlighted Research Paper Banner Card */}
        {certifications
          .filter((c) => c.isResearchPaper)
          .map((paper) => (
            <Card
              key={paper.id}
              className="mb-10 relative overflow-hidden border-2 border-primary/40 bg-gradient-to-br from-primary/5 via-card to-secondary/5 hover:border-primary transition-all duration-300 shadow-md"
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-amber-500 via-primary to-secondary"></div>
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 dark:text-amber-400 border border-amber-500/30">
                      <Sparkles className="w-5 h-5" />
                    </span>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                        Major Academic Achievement
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">
                        {paper.title}
                      </h3>
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit bg-primary/10 text-primary border-primary/30 text-xs px-3 py-1">
                    {paper.date}
                  </Badge>
                </div>

                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                  {paper.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/60">
                  <div className="flex flex-wrap gap-1.5">
                    {paper.skills.map((s) => (
                      <Badge key={s} variant="secondary" className="text-xs bg-muted/80 text-foreground">
                        {s}
                      </Badge>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-primary inline-flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" /> Springer Lecture Notes in Networks and Systems
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications
            .filter((c) => !c.isResearchPaper)
            .map((cert) => (
              <Dialog key={cert.id}>
                <DialogTrigger asChild>
                  <Card className="group relative flex flex-col justify-between h-full cursor-pointer overflow-hidden border border-border/80 bg-card hover:bg-accent/5 hover:border-primary/50 hover:shadow-md transition-all duration-300">
                    <div>
                      {/* Card Header & Badge */}
                      <div className="p-6 pb-2 flex items-start justify-between">
                        <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                          <Award className="w-5 h-5" />
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium bg-muted px-2.5 py-1 rounded-full">
                          <Calendar className="w-3.5 h-3.5" />
                          {cert.date}
                        </div>
                      </div>

                      <CardHeader className="p-6 pb-2">
                        <CardTitle className="text-lg font-bold leading-snug group-hover:text-primary transition-colors duration-200">
                          {cert.title}
                        </CardTitle>
                        <CardDescription className="text-xs font-medium text-muted-foreground">
                          {cert.issuer}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="px-6 pb-4">
                        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                          {cert.description}
                        </p>
                      </CardContent>
                    </div>

                    {/* Card Footer Badges */}
                    <div className="px-6 pb-6 pt-3 border-t border-border/50 bg-muted/20 flex flex-wrap gap-1.5 justify-between items-center">
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.slice(0, 3).map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="text-[11px] px-2 py-0.5 bg-muted/80 text-foreground border-none"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      {cert.image && (
                        <span className="text-[11px] text-primary font-semibold">View Copy</span>
                      )}
                    </div>
                  </Card>
                </DialogTrigger>

                {/* Modal View Details */}
                <DialogContent className="max-w-4xl w-[95vw] p-0 overflow-hidden sm:rounded-xl bg-card border">
                  <div className="grid grid-cols-1 md:grid-cols-12 min-h-[420px]">
                    {/* Media / Certificate Asset Left Column */}
                    <div className="md:col-span-5 bg-muted/40 p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-border/60 relative group/modal">
                      {cert.image ? (
                        <>
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-auto max-h-[300px] object-contain rounded-lg shadow-md border bg-background"
                          />
                          <a
                            href={cert.image}
                            download={`${cert.title.replace(/[^a-z0-9]/gi, "_")}.jpg`}
                            className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5" /> Full-Screen View
                          </a>
                        </>
                      ) : (
                        <div className="flex flex-col items-center text-center p-6">
                          <Award className="w-16 h-16 text-muted-foreground/30 mb-3" />
                          <span className="text-xs text-muted-foreground/70 italic">
                            Verification accredited by {cert.issuer}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Informational Context Right Column */}
                    <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <div>
                          <div className="inline-block bg-primary/10 text-primary text-xs px-2.5 py-1 rounded-md font-semibold mb-2">
                            {cert.issuer}
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                            {cert.title}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> Certified in {cert.date}
                          </p>
                        </div>

                        <div className="space-y-1.5">
                          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            Scope of Validation
                          </h4>
                          <p className="text-xs sm:text-sm leading-relaxed text-foreground/90 bg-muted/40 p-3 rounded-lg border border-border/40">
                            {cert.description}
                          </p>
                        </div>

                        <div className="space-y-1.5">
                          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            Strategic Impact
                          </h4>
                          <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                            {cert.whyCertificate}
                          </p>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-1.5">
                          {cert.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs px-2.5 py-0.5">
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        {cert.image && (
                          <a
                            href={cert.image}
                            download={`${cert.title.replace(/[^a-z0-9]/gi, "_")}.jpg`}
                            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs sm:text-sm font-semibold h-9 px-4 rounded-lg hover:bg-primary/90 transition-colors shadow-sm whitespace-nowrap"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Download Copy
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
        </div>
      </div>
    </section>
  );
}

export default CertificationSection;
