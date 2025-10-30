import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Code, Trophy, Download } from "lucide-react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  const contacts = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com",
      color: "text-blue-400",
      hoverColor: "hover:border-blue-400/50",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com",
      color: "text-primary",
      hoverColor: "hover:border-primary/50",
    },
    {
      name: "SkillRack",
      icon: Code,
      url: "https://skillrack.com",
      color: "text-secondary",
      hoverColor: "hover:border-secondary/50",
    },
    {
      name: "LeetCode",
      icon: Trophy,
      url: "https://leetcode.com",
      color: "text-yellow-400",
      hoverColor: "hover:border-yellow-400/50",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-4 mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center glow-text-cyan">
            Get In Touch
          </h2>
          <Button 
            asChild
            variant="outline" 
            className="gradient-card border-primary/30 hover:border-primary/60 hover:glow-border-cyan animate-pulse hover:animate-none"
          >
            <a href="/resume_Bairavi.docx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Download size={18} />
              View Resume
            </a>
          </Button>
        </div>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          I'm always excited to connect with fellow developers, AI enthusiasts, and potential collaborators.
          Feel free to reach out!
        </p>

        <div className="max-w-2xl mx-auto mb-16">
          <ContactForm />
        </div>

        <p className="text-center text-muted-foreground mb-8 text-lg">
          Or connect with me on social media:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card
                className={`p-6 gradient-card border-primary/20 ${contact.hoverColor} transition-all duration-300 hover:scale-110 hover:glow-border-cyan text-center`}
              >
                <contact.icon
                  className={`${contact.color} mx-auto mb-3 group-hover:scale-125 transition-transform`}
                  size={40}
                />
                <p className="text-sm font-medium">{contact.name}</p>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
