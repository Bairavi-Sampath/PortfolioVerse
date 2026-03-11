import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { Award, ExternalLink, Eye } from 'lucide-react';

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
    image: cert2, 
    skills: ['C++', 'Programming', 'Problem Solving'],
  },
  {
    id: 2,
    title: 'IIT Bombay Spoken Tutorial (Advanced C++, Python 3.4.3)',
    issuer: 'IIT Bombay',
    date: 'May 2025',
    description: 'Advanced certification covering Object-Oriented Programming, data structures, algorithms in C++, and Python programming fundamentals.',
    image: cert1,
    skills: ['C++', 'Python', 'OOP', 'Data Structures'],
  },
  {
    id: 3,
    title: 'SkillRack (Python and SQL)',
    issuer: 'SkillRack',
    date: 'Jul 2025',
    description: 'Completed Python programming and SQL database management certification, demonstrating proficiency in backend development and database operations.',
    image: null,
    skills: ['Python', 'SQL', 'Database Management'],
  },
];

export function CertificationSection() {
  return (
    <section id="certifications" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-8">
          <Award className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Card key={cert.id} className="hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <Award className="w-6 h-6 text-primary flex-shrink-0" />
                  <Badge variant="outline" className="text-xs">
                    {cert.date}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                <CardDescription className="text-sm font-medium">
                  {cert.issuer}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Certificate Image */}
                {cert.image ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="w-full group relative block">
                        <div className="relative rounded-lg overflow-hidden border-2 border-border hover:border-primary transition-colors">
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-52 object-cover"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
                              <Eye className="w-12 h-12 text-white drop-shadow-lg" />
                              <p className="text-white font-semibold mt-2 text-sm">Click to view</p>
                            </div>
                          </div>
                        </div>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl w-[95vw] p-2">
                      <div className="relative bg-black rounded-lg">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-auto max-h-[85vh] object-contain"
                        />
                        <a
                          href={cert.image}
                          download={`${cert.title.replace(/[^a-z0-9]/gi, '_')}.jpg`}
                          className="absolute top-4 right-4 bg-primary text-primary-foreground p-3 rounded-lg hover:bg-primary/90 transition-colors shadow-lg"
                          title="Download Certificate"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <div className="w-full h-52 rounded-lg border-2 border-dashed border-border bg-muted/30 flex flex-col items-center justify-center">
                    <Award className="w-16 h-16 text-muted-foreground/30 mb-3" />
                    <p className="text-sm text-muted-foreground font-medium">Certificate Coming Soon</p>
                  </div>
                )}

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cert.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs px-2 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
