import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1Image from "@/assets/project-1.jpg";
import project2Image from "@/assets/project-2.jpg";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "NagarMitra App",
    description:
      "A full-stack civic reporting platform enabling citizens to report and track city issues in real time. Mobile app (React Native Expo) + Node.js + MongoDB backend.",
    features: "Location-based reports, image upload, JWT auth, dashboard",
    tech: ["React Native", "TypeScript", "Node.js", "Express", "MongoDB", "JWT"],
    image: project1Image,
    github: "https://github.com/shobhit-vats02",
  },
  {
    title: "Banking System in C",
    description:
      "A command-line banking system built in ANSI C with account creation, secure PIN authentication, deposits, withdrawals, and binary storage.",
    features: "Account management, PIN security, transaction handling, binary storage",
    tech: ["C", "GCC", "File I/O", "Encryption"],
    image: project2Image,
    github: "https://github.com/shobhit-vats02",
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal scroll on desktop
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const cards = gsap.utils.toArray(".project-card");
        
        gsap.to(cards, {
          xPercent: -100 * (cards.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (cards.length - 1),
            end: () => "+=" + containerRef.current!.offsetWidth,
          },
        });
      });

      // Mobile: fade in cards
      mm.add("(max-width: 1023px)", () => {
        const cards = document.querySelectorAll(".project-card");
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 50,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
              },
            }
          );
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-20 px-4 md:px-8 lg:px-16 relative"
      id="projects"
    >
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-glow-blue mb-4">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground text-lg">
          Innovative solutions built with modern technologies
        </p>
      </div>

      {/* Desktop: Horizontal scroll container */}
      <div
        ref={containerRef}
        className="hidden lg:flex gap-8 w-full overflow-hidden"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card flex-shrink-0 w-screen px-8"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Mobile: Vertical stack */}
      <div className="lg:hidden space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <div className="glass-strong rounded-2xl overflow-hidden hover:glow-violet transition-all duration-500 h-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Image */}
        <div className="relative h-64 md:h-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-glow-cyan">
              {project.title}
            </h3>
            <p className="text-muted-foreground">{project.description}</p>
            <div>
              <p className="text-sm text-neon-blue font-semibold mb-2">
                Key Features:
              </p>
              <p className="text-sm text-muted-foreground">{project.features}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs glass rounded-full border border-neon-cyan/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <Button
              variant="outline"
              className="glass hover:glass-strong hover:glow-blue transition-all"
              onClick={() => window.open(project.github, "_blank")}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button
              className="glass-strong glow-cyan hover:scale-105 transition-transform"
              onClick={() => window.open(project.github, "_blank")}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
