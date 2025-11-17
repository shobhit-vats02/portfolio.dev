import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profileImage from "@/assets/profile.jpg";
import {
  Code2,
  Database,
  Palette,
  Zap,
  GitBranch,
  Server,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "HTML", icon: Code2 },
  { name: "CSS", icon: Palette },
  { name: "JavaScript", icon: Zap },
  { name: "React", icon: Code2 },
  { name: "Node.js", icon: Server },
  { name: "MongoDB", icon: Database },
  { name: "Python", icon: Code2 },
  { name: "Firebase", icon: Database },
  { name: "Git", icon: GitBranch },
  { name: "GSAP", icon: Zap },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section fade in
      gsap.fromTo(
        sectionRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );

      // Image animation
      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          x: -50,
          rotation: -5,
        },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 1,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 75%",
          },
        }
      );

      // Content animation
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 75%",
          },
        }
      );

      // Skills stagger
      const skillItems = skillsRef.current?.querySelectorAll(".skill-item");
      gsap.fromTo(
        skillItems,
        {
          opacity: 0,
          y: 20,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 py-20 relative"
      id="about"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left - Profile Image */}
        <div ref={imageRef} className="flex justify-center lg:justify-start">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-blue-violet rounded-full blur-2xl opacity-50 animate-glow-pulse" />
            <img
              src={profileImage}
              alt="Shobhit Vats"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover glass glow-blue hover:scale-105 hover:rotate-3 transition-all duration-500"
            />
          </div>
        </div>

        {/* Right - Bio & Skills */}
        <div ref={contentRef} className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-glow-violet">
            About Me
          </h2>

          <div className="space-y-4 text-muted-foreground text-lg">
            <p>
              I'm a B.Tech Computer Science Engineering student specializing in
              Artificial Intelligence and Machine Learning at a premier institute.
              My passion lies in crafting innovative full-stack web applications
              that solve real-world problems.
            </p>
            <p>
              With expertise in modern frontend frameworks, backend development,
              and a keen eye for design, I create seamless user experiences that
              combine aesthetics with functionality. My recent work includes
              civic-tech platforms that empower communities and command-line tools
              that showcase systems programming skills.
            </p>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-neon-cyan">
              Skills & Technologies
            </h3>
            <div
              ref={skillsRef}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-item glass p-4 rounded-lg hover:glass-strong hover:glow-blue transition-all cursor-pointer group"
                >
                  <skill.icon className="w-6 h-6 mb-2 text-neon-blue group-hover:text-neon-cyan transition-colors" />
                  <p className="font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
