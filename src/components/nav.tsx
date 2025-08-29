"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
    { href: "#uslugi", label: "Usługi", id: "uslugi" },
    { href: "#dlaczego-my", label: "Dlaczego my", id: "dlaczego-my" },
    { href: "#realizacje", label: "Realizacje", id: "realizacje" },
    { href: "#opinie", label: "Opinie", id: "opinie" },
    { href: "#faq", label: "FAQ", id: "faq" },
    { href: "#kontakt", label: "Kontakt", id: "kontakt" },
];

const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

export function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Disable scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            {/* Main Navbar - Hidden when mobile menu is open */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.header
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? "py-2" : "py-4"
                            }`}
                    >
                        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8" style={{ maxWidth: 'min(100vw - 32px, 1280px)' }}>
                            <motion.nav
                                layout
                                className={`relative overflow-hidden rounded-2xl border border-white/20 backdrop-blur-md shadow-lg transition-all duration-300 ${isScrolled
                                    ? "bg-white/95 shadow-xl"
                                    : "bg-white/80 shadow-lg"
                                    }`}
                            >
                                {/* Background Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-600/5 opacity-50" />

                                <div className="relative flex h-16 items-center justify-between px-6 lg:px-8">
                                    {/* Logo */}
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Link href="/" className="flex items-center">
                                            <span className="text-xl font-bold text-gray-900">
                                                KBS Investment
                                            </span>
                                        </Link>
                                    </motion.div>

                                    {/* Desktop Navigation */}
                                    <nav className="hidden lg:flex items-center space-x-1">
                                        {links.map((link, index) => (
                                            <motion.button
                                                key={link.id}
                                                initial={{ opacity: 0, y: -20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.1 * index, duration: 0.3 }}
                                                onClick={() => scrollToSection(link.id)}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-all duration-200 rounded-lg hover:bg-white/60 group"
                                            >
                                                {link.label}
                                                <motion.div
                                                    className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-primary to-blue-600 rounded-full"
                                                    whileHover={{ width: "80%", x: "-50%" }}
                                                    transition={{ duration: 0.2 }}
                                                />
                                            </motion.button>
                                        ))}
                                    </nav>

                                    {/* CTA Button & Mobile Menu */}
                                    <div className="flex items-center space-x-4">
                                        {/* CTA Button - Hidden on mobile */}
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.4, duration: 0.3 }}
                                            className="hidden md:block"
                                        >
                                            <Button
                                                onClick={() => scrollToSection('kontakt')}
                                                className="h-10 px-6 bg-gradient-to-r from-primary to-blue-600 text-white hover:from-primary/90 hover:to-blue-600/90 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                                            >
                                                Bezpłatna wycena
                                                <motion.div
                                                    className="ml-2"
                                                    whileHover={{ x: 2, y: -2 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <ArrowUpRight className="h-4 w-4" />
                                                </motion.div>
                                            </Button>
                                        </motion.div>

                                        {/* Mobile Menu Button */}
                                        <div className="lg:hidden">
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => setIsOpen(true)}
                                                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 text-gray-700 hover:bg-white hover:text-primary border border-gray-200/50 shadow-md transition-all duration-200"
                                            >
                                                <Menu className="h-5 w-5" />
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            </motion.nav>
                        </div>
                    </motion.header>
                )}
            </AnimatePresence>

            {/* Fullscreen Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 lg:hidden"
                    >
                        {/* Glassmorphism Background */}
                        <motion.div
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-500/15 to-primary/20 backdrop-blur-md border-0"
                        >
                            {/* Animated Background Elements */}
                            <div className="absolute inset-0 overflow-hidden">
                                <motion.div
                                    className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.6, 0.3]
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                                <motion.div
                                    className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.2, 0.5, 0.2]
                                    }}
                                    transition={{
                                        duration: 10,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 2
                                    }}
                                />
                            </div>
                        </motion.div>

                        {/* Menu Content */}
                        <div className="relative z-10 flex flex-col h-full">
                            {/* Header */}
                            <motion.div
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -50, opacity: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                className="flex items-center justify-between p-6"
                            >
                                <span className="text-xl font-bold text-gray-900 drop-shadow-md">
                                    KBS Investment
                                </span>
                                <motion.button
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setIsOpen(false)}
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 text-gray-700 hover:bg-white hover:text-primary border border-gray-200/50 shadow-md transition-all duration-200"
                                >
                                    <X className="h-5 w-5" />
                                </motion.button>
                            </motion.div>

                            {/* Navigation Links */}
                            <div className="flex-1 flex flex-col justify-center px-6">
                                <nav className="space-y-2">
                                    {links.map((link, index) => (
                                        <motion.button
                                            key={link.id}
                                            initial={{ opacity: 0, x: -50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -50 }}
                                            transition={{
                                                delay: 0.1 * index + 0.2,
                                                duration: 0.4,
                                                ease: "easeOut"
                                            }}
                                            onClick={() => {
                                                scrollToSection(link.id);
                                                setIsOpen(false);
                                            }}
                                            whileHover={{ scale: 1.02, x: 10 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="flex w-full items-center justify-between rounded-2xl px-6 py-6 text-left text-2xl font-semibold text-gray-700 hover:text-primary hover:bg-white/20 drop-shadow-md transition-all duration-200 group"
                                        >
                                            <span>{link.label}</span>
                                            <motion.div
                                                className="opacity-0 group-hover:opacity-100"
                                                whileHover={{ x: 4 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <ArrowUpRight className="h-6 w-6 text-primary" />
                                            </motion.div>
                                        </motion.button>
                                    ))}
                                </nav>
                            </div>

                            {/* CTA Section */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 50, opacity: 0 }}
                                transition={{ duration: 0.3, delay: 0.5 }}
                                className="p-6 border-t border-white/20"
                            >
                                <Button
                                    onClick={() => {
                                        scrollToSection('kontakt');
                                        setIsOpen(false);
                                    }}
                                    className="w-full h-14 bg-gradient-to-r from-primary to-blue-600 text-white hover:from-primary/90 hover:to-blue-600/90 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                                >
                                    Bezpłatna wycena
                                    <ArrowUpRight className="ml-2 h-5 w-5" />
                                </Button>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.3 }}
                                    className="mt-4 text-center text-sm text-gray-600 drop-shadow-sm"
                                >
                                    Skontaktuj się z nami już dziś
                                </motion.p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}