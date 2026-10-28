import { Card } from "@/components/ui/card";
import { Linkedin, Github, Code, Trophy, Mail, Phone, MapPin, Terminal, Send } from "lucide-react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  const directContacts = [
    {
      title: "Email",
      value: "bairavisampath29@gmail.com",
      href: "mailto:bairavisampath29@gmail.com",
      icon: Mail,
      subtext: "Fastest response within 24 hours",
    },
    {
      title: "Phone",
      value: "+91 9361219960",
      href: "tel:+919361219960",
      icon: Phone,
      subtext: "Available for technical inquiries",
    },
    {
      title: "Location",
      value: "Erode-638476, Tamil Nadu, India",
      href: "https://maps.google.com/?q=Erode,+Tamil+Nadu",
      icon: MapPin,
      subtext: "Open to remote & onsite opportunities",
    },
  ];

  const socialProfiles = [
    {
      name: "GitHub",
      username: "Bairavi-Sampath",
      icon: Github,
      url: "https://github.com/Bairavi-Sampath",
      color: "text-foreground group-hover:text-primary",
      badge: "Open Source",
    },
    {
      name: "LinkedIn",
      username: "Bairavi S",
      icon: Linkedin,
      url: "https://linkedin.com",
      color: "text-blue-500",
      badge: "Professional",
    },
    {
      name: "LeetCode",
      username: "bairavisampath",
      icon: Trophy,
      url: "https://leetcode.com",
      color: "text-amber-500",
      badge: "Algorithms",
    },
    {
      name: "SkillRack",
      username: "Bairavi",
      icon: Code,
      url: "https://skillrack.com",
      color: "text-emerald-500",
      badge: "Competitive",
    },
    {
      name: "CodeChef",
      username: "bairavis",
      icon: Terminal,
      url: "https://codechef.com",
      color: "text-orange-500",
      badge: "Problem Solving",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/20 dark:bg-card/20">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold mb-3">
            <Send className="w-3.5 h-3.5" />
            Connect With Me
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground glow-text-cyan">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mt-3"></div>
          <p className="text-muted-foreground mt-4 text-base max-w-xl mx-auto">
            I am always excited to discuss software engineering, machine learning research, or collaborate on innovative projects.
          </p>
        </div>

        {/* Direct Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {directContacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="p-6 h-full border-border/80 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-semibold text-muted-foreground tracking-wider">
                        {contact.title}
                      </h4>
                      <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground pl-12">{contact.subtext}</p>
                </Card>
              </a>
            );
          })}
        </div>

        {/* Contact Form Container */}
        <div className="max-w-2xl mx-auto mb-16">
          <ContactForm />
        </div>

        {/* Social / Coding Profiles */}
        <div>
          <h3 className="text-xl font-bold text-center text-foreground mb-6">
            Explore Coding & Social Profiles
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {socialProfiles.map((profile, index) => {
              const Icon = profile.icon;
              return (
                <a
                  key={index}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="p-4 border-border/70 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-md hover:-translate-y-1 text-center flex flex-col items-center justify-between h-full">
                    <div className="p-3 rounded-full bg-muted/60 mb-2 group-hover:scale-110 transition-transform">
                      <Icon className={`w-5 h-5 ${profile.color}`} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                        {profile.name}
                      </p>
                      <span className="text-[10px] text-muted-foreground font-medium block mt-0.5">
                        {profile.badge}
                      </span>
                    </div>
                  </Card>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
