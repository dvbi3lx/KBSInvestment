"use client";

import { motion } from "motion/react";

export function Background() {
    return (
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,#0a3b6d0f,transparent_40%),radial-gradient(circle_at_90%_20%,#0a3b6d12,transparent_45%),radial-gradient(circle_at_50%_80%,#0a3b6d10,transparent_40%)]" />
            <div className="absolute inset-0 [background:linear-gradient(to_bottom,transparent,rgba(0,0,0,0.04))]" />
            <motion.div
                aria-hidden
                className="absolute left-1/2 top-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
                style={{ background: "radial-gradient(closest-side,#0a3b6d22,transparent)" }}
                animate={{ scale: [1, 1.08, 1], rotate: [0, 20, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
}


