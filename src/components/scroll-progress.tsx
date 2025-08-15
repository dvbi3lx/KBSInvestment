"use client";

import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        mass: 0.4,
    });
    return (
        <motion.div
            style={{ scaleX }}
            className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-primary/80"
        />
    );
}


