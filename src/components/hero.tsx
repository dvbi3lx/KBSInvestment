"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, Play, Zap, Shield, Clock, Users, Phone, Mail } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
    return (
        <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
            {/* Animated Background Elements - Simplified for mobile */}
            <motion.div
                className="absolute inset-0 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <motion.div
                    className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-primary/15 to-blue-400/15 rounded-full blur-2xl sm:blur-3xl"
                    animate={{
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{ willChange: 'opacity' }}
                />
                <motion.div
                    className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-tr from-blue-400/15 to-primary/15 rounded-full blur-2xl sm:blur-3xl"
                    animate={{
                        opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 3
                    }}
                    style={{ willChange: 'opacity' }}
                />
            </motion.div>

            <div className="relative z-10 mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20">
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex justify-center mb-6 sm:mb-8"
                    >
                        <img
                            src="/logo.png"
                            alt="KBS Investment"
                            className="h-16 w-auto sm:h-18 md:h-20 drop-shadow-lg"
                            loading="eager"
                        />
                    </motion.div>

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm text-primary shadow-lg backdrop-blur-sm mb-6 sm:mb-8"
                    >
                        <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                            style={{ willChange: 'transform' }}
                        >
                            <Zap className="h-3 w-3 sm:h-4 sm:w-4" />
                        </motion.div>
                        <span className="text-xs sm:text-sm">Profesjonalne usługi instalacyjne</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight"
                    >
                        <motion.span
                            className="block"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        >
                            Solidne realizacje
                        </motion.span>
                        <motion.span
                            className="block bg-gradient-to-r from-primary via-blue-600 to-blue-700 bg-clip-text text-transparent"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        >
                            instalacyjne
                        </motion.span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2 sm:px-0"
                    >
                        KBS Investment oferuje kompleksowe rozwiązania w zakresie usług instalacyjnych —
                        od projektowania po realizację, z gwarancją jakości i terminowości.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-2 sm:px-0"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.15 }}
                            className="w-full sm:w-auto"
                        >
                            <Button
                                onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                                className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-10 bg-gradient-to-r from-primary to-blue-600 text-white hover:from-primary/90 hover:to-blue-600/90 rounded-xl text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-200"
                            >
                                Bezpłatna wycena
                                <motion.div
                                    animate={{ x: [0, 2, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                    style={{ willChange: 'transform' }}
                                >
                                    <ArrowUpRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                                </motion.div>
                            </Button>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.15 }}
                            className="w-full sm:w-auto"
                        >
                            <Button
                                onClick={() => document.getElementById('realizacje')?.scrollIntoView({ behavior: 'smooth' })}
                                variant="outline"
                                className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-10 border-2 border-gray-300 text-gray-700 hover:bg-white hover:border-primary rounded-xl text-base sm:text-lg font-semibold bg-white/80 backdrop-blur-sm"
                            >
                                Zobacz realizacje
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                    style={{ willChange: 'transform' }}
                                >
                                    <Play className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                                </motion.div>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Feature Cards Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto px-2 sm:px-0"
                >
                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-200"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        <div className="relative p-4 sm:p-6 md:p-8 text-center">
                            <motion.div
                                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6"
                                whileHover={{ scale: 1.1, rotate: 3 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Shield className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                            </motion.div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Gwarancja jakości</h3>
                            <p className="text-sm sm:text-base text-gray-600">Każda realizacja objęta jest pełną gwarancją i certyfikatem bezpieczeństwa</p>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-200"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        <div className="relative p-4 sm:p-6 md:p-8 text-center">
                            <motion.div
                                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6"
                                whileHover={{ scale: 1.1, rotate: -3 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Clock className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                            </motion.div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Terminowość</h3>
                            <p className="text-sm sm:text-base text-gray-600">Realizujemy projekty zgodnie z harmonogramem, bez opóźnień</p>
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-200 sm:col-span-2 md:col-span-1"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        <div className="relative p-4 sm:p-6 md:p-8 text-center">
                            <motion.div
                                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6"
                                whileHover={{ scale: 1.1, rotate: 3 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Users className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                            </motion.div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Doświadczony zespół</h3>
                            <p className="text-sm sm:text-base text-gray-600">Certyfikowani specjaliści z wieloletnim doświadczeniem w branży</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mt-16 sm:mt-20 text-center"
                >
                    <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-2 sm:px-0">
                        {[
                            { number: "100+", label: "Realizacji" },
                            { number: "6+", label: "Lat doświadczenia" },
                            { number: "24-60", label: "Miesięcy gwarancji" },
                            { number: "100%", label: "Zadowolonych klientów" }
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.05 * index,
                                    ease: "easeOut"
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    y: -3,
                                    transition: { duration: 0.15 }
                                }}
                                className="text-center cursor-pointer"
                            >
                                <motion.div
                                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2"
                                    whileHover={{
                                        scale: 1.1,
                                        transition: { duration: 0.15 }
                                    }}
                                >
                                    {stat.number}
                                </motion.div>
                                <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Join the Group Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 sm:mt-20"
                >
                    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/10 via-blue-500/10 to-primary/10 border border-white/20 backdrop-blur-md">
                        {/* Background Elements - Simplified */}
                        <div className="absolute inset-0">
                            <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-primary/5 rounded-full blur-2xl sm:blur-3xl"></div>
                            <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/5 rounded-full blur-2xl sm:blur-3xl"></div>
                        </div>

                        <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-16 text-center">
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
                            >
                                Dołącz do góry{" "}
                                <span className="bg-gradient-to-r from-primary via-blue-600 to-blue-700 bg-clip-text text-transparent">
                                    zadowolonych klientów
                                </span>
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.5 }}
                                className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
                            >
                                Skontaktuj się z nami już dziś i odkryj, dlaczego setki klientów wybrało KBS Investment
                                jako swojego partnera w projektach instalacyjnych.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ duration: 0.15 }}
                                    className="w-full sm:w-auto"
                                >
                                    <Button
                                        onClick={() => window.location.href = 'tel:+48570751670'}
                                        className="w-full sm:w-auto h-10 sm:h-12 px-6 sm:px-8 bg-gradient-to-r from-primary to-blue-600 text-white hover:from-primary/90 hover:to-blue-600/90 rounded-xl text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                                    >
                                        <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                                        Zadzwoń teraz
                                    </Button>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ duration: 0.15 }}
                                    className="w-full sm:w-auto"
                                >
                                    <Button
                                        onClick={() => window.location.href = 'mailto:kontakt@kbsinvestment.pl'}
                                        variant="outline"
                                        className="w-full sm:w-auto h-10 sm:h-12 px-6 sm:px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-xl text-base sm:text-lg font-semibold transition-all duration-200"
                                    >
                                        <Mail className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                                        Napisz email
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}


