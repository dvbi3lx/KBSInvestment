"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { X, Shield, FileText, ExternalLink } from "lucide-react";
import Link from "next/link";

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const [isAccepted, setIsAccepted] = useState(false);

    useEffect(() => {
        // Sprawdź czy użytkownik już zaakceptował
        const consent = localStorage.getItem("privacy-consent");
        if (!consent) {
            // Pokaż modal po 1 sekundzie
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("privacy-consent", "accepted");
        setIsAccepted(true);
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("privacy-consent", "declined");
        setIsAccepted(true);
        setIsVisible(false);
    };

    if (isAccepted || !isVisible) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 lg:p-6"
                >
                    {/* Glassmorphism Background */}
                    <div className="mx-auto max-w-4xl">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/95 backdrop-blur-md shadow-2xl"
                        >
                            {/* Background Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-600/5 opacity-50" />

                            {/* Animated Background Elements */}
                            <div className="absolute inset-0 overflow-hidden">
                                <motion.div
                                    className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.6, 0.3]
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                                <motion.div
                                    className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.2, 0.5, 0.2]
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 2
                                    }}
                                />
                            </div>

                            <div className="relative p-6 lg:p-8">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center space-x-3">
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ duration: 0.2 }}
                                            className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg"
                                        >
                                            <Shield className="h-6 w-6" />
                                        </motion.div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">
                                                Polityka Prywatności
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                Dbamy o Twoje dane osobowe
                                            </p>
                                        </div>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.1, rotate: 90 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={handleDecline}
                                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition-all duration-200"
                                    >
                                        <X className="h-4 w-4" />
                                    </motion.button>
                                </div>

                                {/* Content */}
                                <div className="mb-6">
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Ta strona internetowa <strong>nie używa plików cookie</strong> ani nie śledzi Twojej aktywności.
                                        Jednak zgodnie z wymogami prawa (RODO), informujemy Cię o tym, jak chronimy Twoje dane osobowe.
                                    </p>

                                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
                                        <div className="flex items-start space-x-3">
                                            <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                                <span className="text-blue-600 text-sm font-bold">ℹ</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-blue-900 mb-1">
                                                    Co to oznacza?
                                                </h4>
                                                <p className="text-blue-800 text-sm">
                                                    Nie zbieramy żadnych danych osobowych, nie śledzimy Twojej aktywności,
                                                    a strona działa w pełni lokalnie w Twojej przeglądarce.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                                            <div className="flex items-center space-x-2 mb-2">
                                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                <span className="font-semibold text-green-900">Bezpieczne</span>
                                            </div>
                                            <p className="text-green-800 text-sm">
                                                Brak śledzenia, brak plików cookie, pełna prywatność
                                            </p>
                                        </div>
                                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                                            <div className="flex items-center space-x-2 mb-2">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                <span className="font-semibold text-blue-900">Zgodne z RODO</span>
                                            </div>
                                            <p className="text-blue-800 text-sm">
                                                Pełna zgodność z europejskimi przepisami o ochronie danych
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4">
                                    <div className="flex items-center space-x-4">
                                        <Link
                                            href="/polityka-prywatnosci"
                                            className="inline-flex items-center space-x-2 text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                                        >
                                            <FileText className="h-4 w-4" />
                                            <span>Przeczytaj pełną politykę</span>
                                            <ExternalLink className="h-3 w-3" />
                                        </Link>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <Button
                                            onClick={handleDecline}
                                            variant="outline"
                                            className="h-10 px-6 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 rounded-xl transition-all duration-200"
                                        >
                                            Odrzuć
                                        </Button>
                                        <Button
                                            onClick={handleAccept}
                                            className="h-10 px-6 bg-gradient-to-r from-primary to-blue-600 text-white hover:from-primary/90 hover:to-blue-600/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                        >
                                            Akceptuję
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
