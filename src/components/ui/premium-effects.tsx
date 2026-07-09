"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function PremiumEffects() {
  const { scrollYProgress } = useScroll();
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* 1. LIQUID NEON SCROLL PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[100] h-[3px] origin-left bg-gradient-to-r from-primary via-secondary to-[#3b9ff5] shadow-[0_1px_8px_rgba(8,132,239,0.5)]"
        style={{ scaleX }}
      />

      {/* 2. CURSOR SPOTLIGHT GLOW BACKGROUND EFFECT */}
      <div
        className="pointer-events-none fixed inset-0 z-10 hidden transition-opacity duration-500 lg:block"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(8, 132, 239, 0.035), transparent 80%)`,
        }}
      />
    </>
  );
}
