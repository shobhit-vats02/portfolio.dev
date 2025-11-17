import { useEffect, useRef } from "react";
import gsap from "gsap";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(progressBarRef.current, {
      width: "100%",
      duration: 1.8,
      ease: "power2.out",
    })
      .to(preloaderRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          onComplete();
        },
      });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      {/* Glowing Name */}
      <h1 className="text-6xl md:text-8xl font-bold text-glow-blue mb-8 animate-glow-pulse">
        Shobhit
      </h1>

      {/* Progress Bar Container */}
      <div className="w-64 md:w-96 h-2 bg-muted/30 rounded-full overflow-hidden relative">
        <div
          ref={progressBarRef}
          className="h-full bg-gradient-blue-violet glow-blue rounded-full"
          style={{ width: "0%" }}
        />
      </div>
    </div>
  );
};

export default Preloader;
