"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Rejestruj plugin tylko po stronie klienta
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface GSAPCardProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

export function GSAPCard({ children, delay = 0, className = "" }: GSAPCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!cardRef.current) return;

        const ctx = gsap.context(() => {
            gsap.from(cardRef.current, {
                y: 60,
                opacity: 0,
                duration: 0.8,
                delay: delay,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 85%",
                    end: "top 20%",
                    toggleActions: "play none none none",
                    once: true,
                }
            });
        }, cardRef);

        return () => ctx.revert();
    }, [delay]);

    return (
        <div ref={cardRef} className={className}>
            {children}
        </div>
    );
}
