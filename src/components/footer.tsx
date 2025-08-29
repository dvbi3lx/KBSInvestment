"use client";

import { motion } from "motion/react";
import {
    Phone,
    Mail,
    MapPin,
    ArrowUp,
    Building2,
    ArrowRight,
    Shield
} from "lucide-react";
import { useEffect, useState } from "react";

export function Footer() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        // Aktualizuj rok co roku
        const updateYear = () => {
            setCurrentYear(new Date().getFullYear());
        };

        // Sprawdź czy rok się zmienił (można to robić co godzinę)
        const interval = setInterval(updateYear, 1000 * 60 * 60);

        return () => clearInterval(interval);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 py-8 sm:py-10 md:py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center">
                                <Building2 className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold">KBS Investment</h3>
                        </div>
                        <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                            Profesjonalne usługi instalacyjne z ponad 6-letnim doświadczeniem.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white flex items-center gap-2">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full"></div>
                            Szybkie linki
                        </h4>
                        <ul className="space-y-1.5 sm:space-y-2">
                            {[
                                { name: "O nas", href: "#o-nas" },
                                { name: "Usługi", href: "#uslugi" },
                                { name: "Kontakt", href: "#kontakt" }
                            ].map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.1 * index }}
                                >
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-primary transition-all duration-300 flex items-center gap-2 group text-sm sm:text-base"
                                    >
                                        <motion.div
                                            className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                                            whileHover={{ scale: 1.5 }}
                                        />
                                        {link.name}
                                        <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white flex items-center gap-2">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full"></div>
                            Kontakt
                        </h4>
                        <div className="space-y-2 sm:space-y-3">
                            <div className="flex items-center gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base">
                                <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                                <span>+48 570-751-670</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base">
                                <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                                <span>kontakt@kbsinvestment.pl</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base">
                                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                                <span>Ks. Augustyna Strzybnego 4, 41-506 Chorzów</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base">
                                <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                                <span>NIP: 6272763146</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="border-t border-gray-700 pt-4 sm:pt-6"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
                        <div className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
                            <div>© {currentYear} KBS Investment Sp. z o.o. Wszystkie prawa zastrzeżone.</div>
                            <div className="mt-1">Strona stworzona przez <a
                                href="https://www.linkedin.com/in/dominikdubiel/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#5282b1] font-semibold transition-colors duration-300 cursor-pointer"
                            >Dominik Dubiel</a></div>
                        </div>
                        <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
                            <a href="/polityka-prywatnosci" className="hover:text-primary transition-colors duration-300">
                                Polityka prywatności
                            </a>
                            <a href="/regulamin" className="hover:text-primary transition-colors duration-300">
                                Regulamin
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary to-blue-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-30 flex items-center justify-center group"
            >
                <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.button>
        </footer>
    );
}
