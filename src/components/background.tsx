"use client";

export function Background() {
    return (
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,#0a3b6d0f,transparent_40%),radial-gradient(circle_at_90%_20%,#0a3b6d12,transparent_45%),radial-gradient(circle_at_50%_80%,#0a3b6d10,transparent_40%)]" />
            <div className="absolute inset-0 [background:linear-gradient(to_bottom,transparent,rgba(0,0,0,0.04))]" />
        </div>
    );
}


