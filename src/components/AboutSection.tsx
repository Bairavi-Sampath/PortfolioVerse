import profilePhoto from "@/assets/profile-photo.jpg";
import cppCert from "@/assets/cert-cpp.png";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { GraduationCap, Award } from "lucide-react";
import { useState } from "react";

const AboutSection = () => {
  const education = [
    {
      institution: "KPR Institute of Engineering and Technology, Coimbatore",
      degree: "B.E CSE (Artificial Intelligence and Machine Learning)",
      period: "2024 – 2028",
      grade: "CGPA: 8.6/10 (till 2nd sem)",
    },
    {
      institution: "Erode District Government Model School",
      degree: "HSC (Maths with Computer Science)",
      period: "2022 – 2024",
      grade: "84.17%",
    },
    {
      institution: "Government Higher Secondary School, Vellankovil",
      degree: "SSLC",
      period: "2021 – 2022",
      grade: "91.2%",
    },
  ];

  const certifications = [
    { name: "IIT Bombay Spoken Tutorial (C++)", date: "Dec 2024", image: cppCert },
    { name: "IIT Bombay Spoken Tutorial (Advanced C++, Python 3.4.3)", date: "May 2025", image: "" },
    { name: "SkillRack (Python and SQL)", date: "Jul 2025", image: "" },
  ];

  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text-cyan">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <img
              src={profilePhoto}
              alt="Bairavi Sampath"
              className="relative rounded-full w-80 h-80 object-cover mx-auto border-4 border-primary/30"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am <span className="text-primary font-semibold">Bairavi Sampath</span>, currently
              pursuing B.E in CSE (Artificial Intelligence and Machine Learning) at KPR Institute
              of Engineering and Technology, Coimbatore.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about AI engineering and web development, with hands-on experience in
              building intelligent systems and front-end web projects. I love exploring cutting-edge
              technologies and turning ideas into reality.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="text-primary" size={32} />
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="p-6 gradient-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <h4 className="text-xl font-semibold text-primary mb-2">{edu.institution}</h4>
                <p className="text-foreground mb-1">{edu.degree}</p>
                <p className="text-muted-foreground text-sm mb-1">{edu.period}</p>
                <p className="text-secondary font-semibold">{edu.grade}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Award className="text-secondary" size={32} />
            Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card
                    className="p-6 gradient-card border-secondary/20 hover:border-secondary/50 transition-all duration-300 hover:glow-border-blue cursor-pointer"
                    onClick={() => cert.image && setSelectedCert(cert.image)}
                  >
                    <p className="text-foreground font-semibold mb-2">{cert.name}</p>
                    <p className="text-muted-foreground text-sm">{cert.date}</p>
                    {cert.image && (
                      <p className="text-primary text-xs mt-2">Click to view certificate</p>
                    )}
                  </Card>
                </DialogTrigger>
                {cert.image && (
                  <DialogContent className="max-w-4xl">
                    <img 
                      src={cert.image} 
                      alt={cert.name}
                      className="w-full h-auto rounded-lg"
                    />
                  </DialogContent>
                )}
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
