"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
    { href: "#uslugi", label: "Usługi", id: "uslugi" },
    { href: "#dlaczego-my", label: "Dlaczego my", id: "dlaczego-my" },
    // { href: "#realizacje", label: "Realizacje", id: "realizacje" },
    // { href: "#opinie", label: "Opinie", id: "opinie" },
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
    const pathname = usePathname();

    const shouldHideNav = pathname === "/polityka-prywatnosci" || pathname === "/regulamin";

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 20);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (shouldHideNav) {
        return null;
    }

    return (
        <>
            {/* Main Navbar */}
            {!isOpen && (
                <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? "py-1 sm:py-2" : "py-2 sm:py-3 md:py-4"}`}>
                    <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 lg:px-6">
                        <nav className={`relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/20 backdrop-blur-md shadow-lg transition-all duration-300 ${isScrolled ? "bg-white/95 shadow-xl" : "bg-white/80 shadow-lg"}`}>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-600/5 opacity-50" />

                            <div className="relative flex h-12 sm:h-14 md:h-16 items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8">
                                {/* Logo */}
                                <Link href="/" className="flex items-center hover:scale-105 transition-transform duration-200">
                                    <span className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                                        KBS Investment Sp. z o.o.
                                    </span>
                                </Link>

                                {/* Desktop Navigation */}
                                <nav className="hidden lg:flex items-center space-x-1">
                                    {links.map((link) => (
                                        <button
                                            key={link.id}
                                            onClick={() => scrollToSection(link.id)}
                                            className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-all duration-200 rounded-lg hover:bg-white/60 hover:scale-105"
                                        >
                                            {link.label}
                                        </button>
                                    ))}
                                </nav>

                                {/* CTA Button & Mobile Menu */}
                                <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                                    <div className="hidden md:block">
                                        <Button
                                            onClick={() => scrollToSection('kontakt')}
                                            className="h-8 sm:h-10 px-4 sm:px-6 bg-gradient-to-r from-primary to-blue-600 text-white hover:from-primary/90 hover:to-blue-600/90 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
                                        >
                                            Wycena projektu
                                            <ArrowUpRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                                        </Button>
                                    </div>

                                    {/* Mobile Menu Button */}
                                    <div className="lg:hidden">
                                        <button
                                            onClick={() => setIsOpen(true)}
                                            className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-white/80 text-gray-700 hover:bg-white hover:text-primary border border-gray-200/50 shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
                                        >
                                            <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            )}

            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    {/* Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-500/15 to-primary/20 backdrop-blur-md" />

                    {/* Menu Content */}
                    <div className="relative z-10 flex flex-col h-full">
                        {/* Header */}
                        <div className="flex items-center justify-between p-3 sm:p-4 md:p-6">
                            <span className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                                KBS Investment Sp. z o.o.
                            </span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="inline-flex h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-white/80 text-gray-700 hover:bg-white hover:text-primary border border-gray-200/50 shadow-md hover:scale-110 hover:rotate-90 active:scale-90 transition-all duration-200"
                            >
                                <X className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex-1 flex flex-col justify-center px-3 sm:px-4 md:px-6">
                            <nav className="space-y-1 sm:space-y-2">
                                {links.map((link) => (
                                    <button
                                        key={link.id}
                                        onClick={() => {
                                            scrollToSection(link.id);
                                            setIsOpen(false);
                                        }}
                                        className="flex w-full items-center justify-between rounded-lg sm:rounded-xl md:rounded-2xl px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-6 text-left text-base sm:text-lg md:text-xl font-semibold text-gray-700 hover:text-primary hover:bg-white/20 hover:scale-[1.02] hover:translate-x-2 active:scale-[0.98] transition-all duration-200 group"
                                    >
                                        <span>{link.label}</span>
                                        <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                    </button>
                                ))}
                            </nav>
                        </div>

                        {/* CTA Section */}
                        <div className="p-3 sm:p-4 md:p-6 border-t border-white/20">
                            <Button
                                onClick={() => {
                                    scrollToSection('kontakt');
                                    setIsOpen(false);
                                }}
                                className="w-full h-10 sm:h-12 md:h-14 bg-gradient-to-r from-primary to-blue-600 text-white hover:from-primary/90 hover:to-blue-600/90 rounded-lg sm:rounded-xl md:rounded-2xl text-sm sm:text-base md:text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
                            >
                                Wycena projektu
                                <ArrowUpRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                            </Button>

                            <p className="mt-2 sm:mt-3 md:mt-4 text-center text-xs sm:text-sm text-gray-600">
                                Skontaktuj się z nami już dziś
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
