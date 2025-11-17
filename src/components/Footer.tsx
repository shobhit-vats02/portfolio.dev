import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 md:px-8 border-t border-neon-blue/20">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-neon-blue/10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-neon-violet/10 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left - Navigation */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
            <a
              href="#home"
              className="text-muted-foreground hover:text-neon-blue transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-neon-blue transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-muted-foreground hover:text-neon-blue transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-neon-blue transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Center - Copyright */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Shobhit Vats. All rights reserved.
            </p>
          </div>

          {/* Right - Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://github.com/shobhit-vats02"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 rounded-lg hover:glass-strong hover:glow-blue transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/shobhit-vats-babb55310/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 rounded-lg hover:glass-strong hover:glow-blue transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:shobhitvats020@gmail.com"
              className="glass p-3 rounded-lg hover:glass-strong hover:glow-blue transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
