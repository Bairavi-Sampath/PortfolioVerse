import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { Award, ExternalLink, Eye, Calendar, ShieldCheck } from 'lucide-react';

// Import certificate images
import cert1 from '../assets/advanced_C++.jpg';
import cert2 from '../assets/C++_certificate.jpg';

const certifications = [
  {
    id: 1,
    title: 'IIT Bombay Spoken Tutorial (C++)',
    issuer: 'IIT Bombay',
    date: 'Dec 2024',
    description: 'Completed comprehensive C++ programming course through IIT Bombay Spoken Tutorial program, covering fundamental concepts and practical implementations.',
    whyCertificate: 'This certification helped me build a strong foundation in C++ programming, which is essential for competitive programming, system design, and backend development. It enhanced my problem-solving skills and enabled me to work on performance-critical applications.',
    image: cert2, 
    skills: ['C++', 'Programming', 'Problem Solving'],
  },
  {
    id: 2,
    title: 'IIT Bombay Spoken Tutorial (Advanced C++, Python 3.4.3)',
    issuer: 'IIT Bombay',
    date: 'May 2025',
    description: 'Advanced certification covering Object-Oriented Programming, data structures, algorithms in C++, and Python programming fundamentals.',
    whyCertificate: 'Advanced C++ knowledge is crucial for writing efficient, scalable code and understanding memory management. Python skills complement my development toolkit, making me versatile across different domains. This certification demonstrates mastery of core programming concepts.',
    image: cert1,
    skills: ['C++', 'Python', 'OOP', 'Data Structures'],
  },
  {
    id: 3,
    title: 'SkillRack (Python and SQL)',
    issuer: 'SkillRack',
    date: 'Jul 2025',
    description: 'Completed Python programming and SQL database management certification, demonstrating proficiency in backend development and database operations.',
    whyCertificate: 'SQL and Python are fundamental for building data-driven applications and managing databases efficiently. This certification validates my ability to work with backend systems, write optimized queries, and handle data management—skills essential for full-stack development and data engineering roles.',
    image: null,
    skills: ['Python', 'SQL', 'Database Management'],
  },
  {
    id: 4,
    title: 'Cpp Training',
    issuer: 'KPR Institute of Engineering and Technology',
    date: 'Dec 2024',
    description: 'Completed comprehensive C++ programming training course organized at KPR Institute of Engineering and Technology by Pandiya Rajan G, with course material provided by the Spoken Tutorial Project, IIT Bombay. Successfully passed the online exam conducted remotely from IIT Bombay.',
    whyCertificate: 'This certification validates my foundational C++ programming skills, demonstrating proficiency in core programming concepts and practical implementations. The training provided essential knowledge for competitive programming, algorithm development, and building high-performance applications.',
    image: null,
    skills: ['C++', 'Programming', 'Online Assessment'],
  },
];

export function CertificationSection() {
  return (
    <section id="certifications" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <div className="flex items-center gap-2.5 px-3 py-1 rounded-full border bg-muted/50 text-xs font-medium text-primary">
            <ShieldCheck className="w-4 h-4" /> Credentials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Certifications & Badges</h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Dialog key={cert.id}>
              <DialogTrigger asChild>
                <Card className="group relative flex flex-col justify-between h-full cursor-pointer overflow-hidden border bg-card hover:bg-accent/10 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.05)] transition-all duration-300">
                  <div>
                    {/* Visual Card Top Header */}
                    <div className="p-6 pb-0 flex items-start justify-between">
                      <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <Award className="w-5 h-5" />
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium bg-muted px-2.5 py-1 rounded-full">
                        <Calendar className="w-3.5 h-3.5" />
                        {cert.date}
                      </div>
                    </div>

                    <CardHeader className="p-6 pb-2">
                      <CardTitle className="text-xl leading-snug group-hover:text-primary transition-colors duration-200">
                        {cert.title}
                      </CardTitle>
                      <CardDescription className="text-sm font-medium text-muted-foreground/80">
                        {cert.issuer}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="px-6 pb-4">
                      <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                        {cert.description}
                      </p>
                    </CardContent>
                  </div>

                  {/* Card Bottom Badges */}
                  <div className="px-6 pb-6 pt-2 border-t border-muted/40 bg-muted/10 flex flex-wrap gap-1.5">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-[11px] px-2 py-0.5 bg-muted/60 text-foreground/80 border-none">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </DialogTrigger>

              {/* Modal View details */}
              <DialogContent className="max-w-4xl w-[95vw] p-0 overflow-hidden sm:rounded-xl bg-card border">
                <div className="grid grid-cols-1 md:grid-cols-12 min-h-[450px]">
                  
                  {/* Left Side: Media Asset */}
                  <div className="md:col-span-5 bg-muted/40 p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-border/60 relative group/modal">
                    {cert.image ? (
                      <>
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-auto max-h-[320px] object-contain rounded-lg shadow-md border bg-background transition-transform duration-300 group-hover/modal:scale-[1.02]"
                        />
                        <a
                          href={cert.image}
                          download={`${cert.title.replace(/[^a-z0-9]/gi, '_')}.jpg`}
                          className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" /> Full-Screen View
                        </a>
                      </>
                    ) : (
                      <div className="flex flex-col items-center text-center p-6">
                        <Award className="w-20 h-20 text-muted-foreground/20 mb-3 stroke-[1.5]" />
                        <span className="text-xs text-muted-foreground/60 italic">Verification asset pending upload</span>
                      </div>
                    )}
                  </div>

                  {/* Right Side: Informational Context */}
                  <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-5">
                      <div>
                        <div className="inline-block bg-primary/10 text-primary text-xs px-2.5 py-1 rounded-md font-medium mb-2">
                          {cert.issuer}
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight text-foreground">{cert.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> Certified in {cert.date}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Scope of Validation</h4>
                        <p className="text-sm leading-relaxed text-foreground/90 bg-muted/40 p-3 rounded-lg border border-border/40">
                          {cert.description}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Strategic Impact</h4>
                        <p className="text-sm leading-relaxed text-muted-foreground">
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
                          download={`${cert.title.replace(/[^a-z0-9]/gi, '_')}.jpg`}
                          className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-semibold h-10 px-4 rounded-lg hover:bg-primary/90 transition-colors shadow-sm whitespace-nowrap"
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
