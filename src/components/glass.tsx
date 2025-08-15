import { cn } from "@/lib/utils";

export function GlassCard({ className, children }: { className?: string; children: React.ReactNode }) {
    return (
        <div
            className={cn(
                "rounded-2xl border bg-white/60 p-6 shadow-[0_2px_20px_rgba(10,59,109,0.06)] backdrop-blur-md",
                className
            )}
        >
            {children}
        </div>
    );
}


