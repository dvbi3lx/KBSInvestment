"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        // Throttle scroll event for better performance
        let ticking = false;
        const throttledScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", throttledScroll, { passive: true });
        return () => window.removeEventListener("scroll", throttledScroll);
    }, []);

    return (
        <div
            className="fixed left-0 right-0 top-0 z-50 h-1 bg-primary/80 origin-left transition-transform duration-100 ease-out"
            style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />
    );
}


