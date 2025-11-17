import { useEffect, useRef } from "react";
import gsap from "gsap";

const GlowOrbs = () => {
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Floating animation for orbs
    gsap.to(orb1Ref.current, {
      y: -20,
      x: 15,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.to(orb2Ref.current, {
      y: -30,
      x: -20,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.to(orb3Ref.current, {
      y: -25,
      x: 10,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Orb 1 - Top Right */}
      <div
        ref={orb1Ref}
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-neon-blue/20 blur-3xl"
      />
      
      {/* Orb 2 - Bottom Left */}
      <div
        ref={orb2Ref}
        className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-neon-violet/20 blur-3xl"
      />
      
      {/* Orb 3 - Center */}
      <div
        ref={orb3Ref}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-neon-cyan/15 blur-3xl"
      />
    </div>
  );
};

export default GlowOrbs;
