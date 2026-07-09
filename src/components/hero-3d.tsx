"use client";

import React, { useRef } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";

// Spring configuration for super-smooth premium floating and tilt physics
const SPRING_CONFIG = {
  damping: 25,
  stiffness: 120,
  mass: 0.8,
};

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse tracking motion values (centered at 0, ranging -0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotation & translation
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), SPRING_CONFIG);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-20, 20]), SPRING_CONFIG);
  
  // Parallax offsets for floating items (different Z translation depth & coordinate offsets)
  const layer1X = useSpring(useTransform(x, [-0.5, 0.5], [-25, 25]), SPRING_CONFIG);
  const layer1Y = useSpring(useTransform(y, [-0.5, 0.5], [-25, 25]), SPRING_CONFIG);
  
  const layer2X = useSpring(useTransform(x, [-0.5, 0.5], [35, -35]), SPRING_CONFIG);
  const layer2Y = useSpring(useTransform(y, [-0.5, 0.5], [35, -35]), SPRING_CONFIG);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const relativeX = (e.clientX - rect.left) / width - 0.5;
    const relativeY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex h-87.5 w-full max-w-112.5 items-center justify-center lg:h-112.5 select-none"
      style={{ perspective: 1500 }}
    >
      {/* BACKGROUND GLOWS THAT FOLLOW MOVEMENT */}
      <motion.div
        className="absolute -inset-10 rounded-full blur-[80px]"
        style={{
          background: "radial-gradient(circle, rgba(8,132,239,0.18) 0%, rgba(16,185,129,0.08) 50%, transparent 100%)",
          x: useTransform(x, [-0.5, 0.5], [30, -30]),
          y: useTransform(y, [-0.5, 0.5], [30, -30]),
        }}
      />

      {/* CORE 3D PHONE CONTAINER */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative z-10 flex h-75 w-45 flex-col items-center justify-between rounded-[36px] border border-border bg-card/60 p-4 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),inset_0_2px_4px_rgba(255,255,255,0.05)] backdrop-blur-xl lg:h-95 lg:w-55"
      >
        {/* INNER SCREEN CONTAINER (with 3D depth) */}
        <div 
          className="relative flex h-full w-full flex-col items-center overflow-hidden rounded-[26px] bg-background/80 p-3"
          style={{ transform: "translateZ(10px)" }}
        >
          {/* TOP CAMERA / DYNAMIC ISLAND */}
          <div className="absolute top-2.5 z-20 h-4 w-12 rounded-full bg-border" />

          {/* BACKGROUND TECH GRID SCREEN */}
          <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[16px_16px]" />

          {/* SCREEN SCANNING LASER EFFECT */}
          <motion.div
            animate={{
              top: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 3.5,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="absolute left-0 right-0 z-10 h-0.5 bg-linear-to-r from-transparent via-primary/80 to-transparent shadow-[0_0_12px_rgba(8,132,239,0.8)]"
          />

          {/* LIVE SCANNER HUD */}
          <div className="relative z-10 flex h-full w-full flex-col items-center justify-between py-6">
            <div className="flex flex-col items-center gap-1">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">LINKSCAN HUD</span>
              <div className="flex items-center gap-1.5 rounded-full bg-primary/10 px-2 py-0.5 text-[8px] font-medium text-primary">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary" />
                CONNECTING...
              </div>
            </div>

            {/* SCANNING RADAR CIRCLE */}
            <div className="relative flex h-24 w-24 items-center justify-center lg:h-32 lg:w-32">
              <div className="absolute inset-0 rounded-full border border-dashed border-primary/20 animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-2 rounded-full border border-primary/40 animate-[spin_20s_linear_infinite_reverse]" />
              
              {/* RADAR BEAM */}
              <motion.div 
                className="absolute h-1/2 w-0.5 bg-linear-to-t from-primary to-transparent origin-bottom"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                style={{ bottom: "50%" }}
              />

              <div className="absolute h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(8,132,239,1)]" />
              
              {/* SIGNAL RINGS */}
              <motion.div
                initial={{ scale: 0.6, opacity: 0.8 }}
                animate={{ scale: 1.3, opacity: 0 }}
                transition={{ duration: 2, ease: "easeOut", repeat: Infinity }}
                className="absolute inset-0 rounded-full border border-primary/40"
              />
              <motion.div
                initial={{ scale: 0.4, opacity: 0.9 }}
                animate={{ scale: 1.1, opacity: 0 }}
                transition={{ duration: 2, delay: 0.7, ease: "easeOut", repeat: Infinity }}
                className="absolute inset-0 rounded-full border border-secondary/30"
              />
            </div>

            {/* LOWER STATS BAR */}
            <div className="w-full space-y-1.5 px-1">
              <div className="flex justify-between text-[8px] font-mono text-muted">
                <span>FPS: 60</span>
                <span>SIG: 100%</span>
              </div>
              <div className="h-1 w-full overflow-hidden rounded-full bg-border/40">
                <motion.div 
                  className="h-full bg-linear-to-r from-primary to-secondary"
                  animate={{ width: ["30%", "85%", "60%", "95%", "30%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* INNER SPEAKER BAR */}
        <div className="absolute bottom-2 h-1 w-16 rounded-full bg-border" />
      </motion.div>

      {/* FLOATING 3D COMPONENT 1: QR CODE (High z-index, left side offset) */}
      <motion.div
        style={{
          x: layer1X,
          y: layer1Y,
          transformStyle: "preserve-3d",
          transform: "translateZ(60px)",
        }}
        className="absolute left-2 top-[15%] z-20 flex h-22.5 w-32.5 flex-col justify-between rounded-2xl border border-secondary/30 bg-card/85 p-3 shadow-2xl backdrop-blur-md lg:-left-8.75 lg:h-27.5 lg:w-37.5"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.875 15.75a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25ZM13.5 16.5v.75c0 .621.504 1.125 1.125 1.125h.75M16.5 13.5h.75c.621 0 1.125.504 1.125 1.125v.75m-3.75 3.75h.008v.008H15.375V18ZM18 18h.008v.008H18V18ZM13.5 13.5h.008v.008H13.5V13.5ZM16.5 16.5h.008v.008H16.5V16.5ZM18 15v.75c0 .621-.504 1.125-1.125 1.125M15 15v.008h.008V15H15Z" />
            </svg>
          </div>
          <span className="text-[10px] font-bold tracking-tight text-foreground">QR CODE</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 shrink-0 grid-cols-4 bg-foreground p-1 rounded-md gap-0.5">
            {/* Minimalist QR Code mockup */}
            {Array.from({ length: 16 }).map((_, i) => (
              <div 
                key={i} 
                className={`rounded-sm ${(i === 0 || i === 1 || i === 4 || i === 10 || i === 12 || i === 13 || i === 15) ? "bg-background" : "bg-transparent"}`} 
              />
            ))}
          </div>
          <div className="space-y-1">
            <div className="h-1.5 w-12 rounded bg-muted" />
            <div className="h-1.5 w-8 rounded bg-muted/50" />
            <div className="h-2 w-14 rounded-full bg-secondary/20 flex items-center justify-center text-[7px] font-bold text-secondary">
              DECODED
            </div>
          </div>
        </div>
      </motion.div>

      {/* FLOATING 3D COMPONENT 2: BARCODE CARD (Higher z-index, right side offset) */}
      <motion.div
        style={{
          x: layer2X,
          y: layer2Y,
          transformStyle: "preserve-3d",
          transform: "translateZ(80px)",
        }}
        className="absolute bottom-[10%] right-2 z-30 flex h-25 w-35 flex-col justify-between rounded-2xl border border-primary/30 bg-card/85 p-3 shadow-2xl backdrop-blur-md lg:-right-8.75 lg:h-30 lg:w-40"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5Z" />
              </svg>
            </div>
            <span className="text-[10px] font-bold tracking-tight text-foreground">BARCODE</span>
          </div>
          <span className="text-[7px] font-mono text-muted">9823-A</span>
        </div>

        {/* Micro Barcode Animation */}
        <div className="space-y-2">
          <div className="relative flex h-8 items-end gap-[1.5px] rounded border border-border/20 bg-background/40 p-1 overflow-hidden">
            {Array.from({ length: 24 }).map((_, i) => {
              const widths = [1, 2, 3, 1, 4, 2, 1, 2, 1, 3, 1, 2, 4, 1, 1, 2, 1, 3, 2, 1, 2, 1, 1, 3];
              const w = widths[i % widths.length];
              return (
                <div 
                  key={i} 
                  className="bg-foreground shrink-0 rounded-sm"
                  style={{ 
                    height: "100%", 
                    width: `${w}px`,
                    opacity: (i === 4 || i === 12 || i === 18) ? 0.3 : 1
                  }} 
                />
              );
            })}
            <motion.div
              className="absolute inset-0 bg-primary/10 shadow-[inset_0_0_10px_rgba(8,132,239,0.3)] border-r border-primary"
              animate={{ left: ["-10%", "110%", "-10%"] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[8px] font-mono text-primary">SCAN TRANSMITTED</span>
            <div className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
