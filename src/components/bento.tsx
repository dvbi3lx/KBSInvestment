"use client";

import Image from "next/image";
import { motion } from "motion/react";

type BentoItem = {
    title: string;
    desc: string;
    img?: string;
    span?: string;
};

export function BentoGrid({ items }: { items: BentoItem[] }) {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {items.map((it, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className={
                        it.span ||
                        "col-span-1 sm:col-span-1 lg:col-span-2 rounded-2xl border bg-card p-6"
                    }
                >
                    <h3 className="text-lg font-semibold">{it.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
                    {it.img && (
                        <div className="mt-4 overflow-hidden rounded-xl border">
                            <Image
                                src={it.img}
                                alt={it.title}
                                width={1200}
                                height={800}
                                className="h-48 w-full object-cover"
                            />
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
    );
}



