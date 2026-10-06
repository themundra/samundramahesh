"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Fade/slide in when entering view.
 * Uses #main as the IntersectionObserver root on mobile — the app shell
 * scrolls inside #main (not the window), so the default viewport root
 * never fires and children stay at opacity 0.
 */
export function Reveal({ children, className = "" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const scrollRootRef = useRef<Element | null>(null);
  const [rootReady, setRootReady] = useState(false);

  useEffect(() => {
    scrollRootRef.current = document.getElementById("main");
    setRootReady(true);
  }, []);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      key={rootReady ? "main-root" : "pending-root"}
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        margin: "-8% 0px",
        root: scrollRootRef,
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
