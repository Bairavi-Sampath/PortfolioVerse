import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, GraduationCap, Code2, FolderGit2, Mail, Palette, Navigation2, Smartphone, Zap } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Hero Section",
      description: "Animated introduction with dynamic typing effect showcasing skills and expertise",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: GraduationCap,
      title: "About Me",
      description: "Detailed education history and professional certifications display",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Code2,
      title: "Technical Skills",
      description: "Categorized showcase of technologies including AI/ML, web development, and tools",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: FolderGit2,
      title: "Project Portfolio",
      description: "Featured projects with GitHub integration and live demo links",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Mail,
      title: "Contact System",
      description: "EmailJS integration for seamless communication with social media links",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: Palette,
      title: "Theme Switcher",
      description: "Beautiful light and dark mode toggle for personalized viewing experience",
      gradient: "from-yellow-500 to-amber-500"
    },
    {
      icon: Navigation2,
      title: "Smooth Navigation",
      description: "Animated scrolling between sections with responsive mobile menu",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-optimized interface that looks perfect on all devices",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Zap,
      title: "Interactive Animations",
      description: "Floating particles, fade-in effects, and smooth transitions throughout",
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text-cyan">
            Portfolio Features
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore the interactive elements and modern design patterns that make this portfolio stand out
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 border-primary/20 bg-card/50 backdrop-blur"
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
