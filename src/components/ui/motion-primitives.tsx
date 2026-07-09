"use client";

import React, { useRef, useEffect } from "react";
import { motion, useSpring, useMotionValue, useTransform, useInView, type Variants } from "framer-motion";

// Spring configuration for premium, snappy feel
const SPRING_CONFIG = {
  damping: 25,
  stiffness: 150,
  mass: 0.6,
} as const;

// -------------------------------------------------------------
// REVEAL ON SCROLL
// -------------------------------------------------------------
interface RevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  scale?: boolean;
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  scale = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const getVariants = () => {
    const xOffset = direction === "left" ? 30 : direction === "right" ? -30 : 0;
    const yOffset = direction === "up" ? 30 : direction === "down" ? -30 : 0;

    return {
      hidden: {
        opacity: 0,
        x: xOffset,
        y: yOffset,
        scale: scale ? 0.95 : 1,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1] as const, // Custom cubic-bezier for slick easing
        },
      },
    };
  };

  return (
    <motion.div
      ref={ref}
      variants={getVariants()}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

// -------------------------------------------------------------
// STAGGER CONTAINER & ITEMS
// -------------------------------------------------------------
interface StaggerContainerProps {
  children: React.ReactNode;
  delayChildren?: number;
  staggerChildren?: number;
}

export function StaggerContainer({
  children,
  delayChildren = 0,
  staggerChildren = 0.08,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  scale?: boolean;
}

export function StaggerItem({
  children,
  direction = "up",
  scale = false,
}: StaggerItemProps) {
  const xOffset = direction === "left" ? 20 : direction === "right" ? -20 : 0;
  const yOffset = direction === "up" ? 20 : direction === "down" ? -20 : 0;

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      x: xOffset,
      y: yOffset,
      scale: scale ? 0.96 : 1,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 150,
        mass: 0.6,
      },
    },
  };

  return <motion.div variants={itemVariants}>{children}</motion.div>;
}

// -------------------------------------------------------------
// 3D TILT CARD (INTERACTIVE SHINE + DEEPER ROTATION)
// -------------------------------------------------------------
interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  tiltMax?: number;
  scaleOnHover?: number;
}

export function TiltCard({
  children,
  className = "",
  tiltMax = 12,
  scaleOnHover = 1.02,
  ...props
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for x/y mouse coordinates
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Snappy smooth spring animations for rotation
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [tiltMax, -tiltMax]), SPRING_CONFIG);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-tiltMax, tiltMax]), SPRING_CONFIG);

  // Shine position motion values
  const shineX = useSpring(useTransform(x, [-0.5, 0.5], ["0%", "100%"]), SPRING_CONFIG);
  const shineY = useSpring(useTransform(y, [-0.5, 0.5], ["0%", "100%"]), SPRING_CONFIG);

  // Dynamic hover scale spring
  const scale = useSpring(1, SPRING_CONFIG);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Normalised position: -0.5 to 0.5
    const relativeX = (e.clientX - rect.left) / width - 0.5;
    const relativeY = (e.clientY - rect.top) / height - 0.5;

    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseEnter = () => {
    scale.set(scaleOnHover);
  };

  const handleMouseLeave = () => {
    scale.set(1);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      style={{ perspective: 1200 }}
      className={`relative inline-block ${className}`}
      {...props}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
        }}
        className="h-full w-full select-none"
      >
        {children}

        {/* 3D Glass shine reflection overlay */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at ${shineX} ${shineY}, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 65%)`,
            mixBlendMode: "overlay",
            pointerEvents: "none",
            borderRadius: "inherit",
            zIndex: 3,
          }}
        />
      </motion.div>
    </div>
  );
}

// -------------------------------------------------------------
// MAGNETIC COMPONENT (PULLS TOWARD CURSOR)
// -------------------------------------------------------------
interface MagneticProps {
  children: React.ReactNode;
  range?: number;
  strength?: number;
}

export function Magnetic({ children, range = 50, strength = 0.35 }: MagneticProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const x = useSpring(0, SPRING_CONFIG);
  const y = useSpring(0, SPRING_CONFIG);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const elemX = rect.left + rect.width / 2;
      const elemY = rect.top + rect.height / 2;

      const distanceX = e.clientX - elemX;
      const distanceY = e.clientY - elemY;
      const distance = Math.hypot(distanceX, distanceY);

      if (distance < range) {
        x.set(distanceX * strength);
        y.set(distanceY * strength);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [range, strength, x, y]);

  return (
    <motion.div ref={wrapperRef} style={{ x, y }} className="inline-block">
      {children}
    </motion.div>
  );
}
