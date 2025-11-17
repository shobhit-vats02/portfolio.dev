import { useEffect, useRef, useState, Suspense, lazy } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Spline = lazy(() => import("@splinetool/react-spline"));

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);
  const [splineError, setSplineError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 50,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
      }
    )
      .fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 30,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .fromTo(
        ctaRef.current,
        {
          opacity: 0,
          y: 20,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      )
      .fromTo(
        splineRef.current,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.8"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 relative"
      id="home"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div className="space-y-6 text-center lg:text-left z-10">
          <h1
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
          >
            Hi, I'm{" "}
            <span className="text-glow-blue bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
              Shobhit Vats
            </span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground">
              Web Developer
            </span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl"
          >
            B.Tech CSE (AI & ML) student specializing in building full-stack web
            apps and civic-tech solutions. Passionate about modern UI, animations,
            and clean, responsive frontend engineering.
          </p>

          <div ref={ctaRef} className="flex gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="glass-strong glow-blue hover:scale-105 transition-transform"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Mail className="mr-2 h-5 w-5" />
              Hire Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass hover:glass-strong transition-all"
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
            </Button>
          </div>
        </div>

        {/* Right Side - Spline 3D */}
        <div
          ref={splineRef}
          className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center"
        >
          <div className="w-full h-full glass rounded-3xl overflow-hidden glow-violet flex items-center justify-center">
            {!splineError ? (
              <Suspense fallback={<div className="text-center"><p className="text-muted-foreground">Loading 3D scene...</p></div>}>
                <Spline 
                  scene="https://my.spline.design/beepboopbemyvalentine-CJAXMh4IfmCMjxoFMLklCuX2/"
                  onLoad={() => {
                    console.log("Spline loaded successfully");
                    setIsLoading(false);
                  }}
                  onError={(error) => {
                    console.error("Spline failed to load:", error);
                    setSplineError(true);
                    setIsLoading(false);
                  }}
                />
              </Suspense>
            ) : (
              <div className="text-center">
                <div className="text-6xl mb-4">🎨</div>
                <p className="text-muted-foreground">3D Scene</p>
                <p className="text-xs text-muted-foreground mt-2">Unable to load scene</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
