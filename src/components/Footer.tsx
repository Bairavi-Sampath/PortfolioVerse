import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-primary/20">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          © 2025 Bairavi Sampath | Designed with{" "}
          <Heart className="text-red-500 animate-pulse" size={16} fill="currentColor" /> and Code
        </p>
      </div>
    </footer>
  );
};

export default Footer;
