"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, Play, Zap, Shield, Clock, Users, Phone, Mail } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
    return (
        <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
            {/* Animated Background Elements */}
            <motion.div
                className="absolute inset-0 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <motion.div
                    className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-blue-400/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-primary/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
            </motion.div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6 pt-32 pb-20">
                <div className="text-center mb-16">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex justify-center mb-8"
                    >
                        <img
                            src="/logo.png"
                            alt="KBS Investment"
                            className="h-20 w-auto drop-shadow-lg"
                        />
                    </motion.div>

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-2 text-sm text-primary shadow-lg backdrop-blur-sm mb-8"
                    >
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        >
                            <Zap className="h-4 w-4" />
                        </motion.div>
                        Profesjonalne usługi instalacyjne
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
                    >
                        <motion.span
                            className="block"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        >
                            Solidne realizacje
                        </motion.span>
                        <motion.span
                            className="block bg-gradient-to-r from-primary via-blue-600 to-blue-700 bg-clip-text text-transparent"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        >
                            instalacyjne
                        </motion.span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed"
                    >
                        KBS Investment oferuje kompleksowe rozwiązania w zakresie usług instalacyjnych —
                        od projektowania po realizację, z gwarancją jakości i terminowości.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Button
                                onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                                className="h-14 px-10 bg-gradient-to-r from-primary to-blue-600 text-white hover:from-primary/90 hover:to-blue-600/90 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                Bezpłatna wycena
                                <motion.div
                                    animate={{ x: [0, 3, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                                >
                                    <ArrowUpRight className="ml-2 h-5 w-5" />
                                </motion.div>
                            </Button>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Button
                                onClick={() => document.getElementById('realizacje')?.scrollIntoView({ behavior: 'smooth' })}
                                variant="outline"
                                className="h-14 px-10 border-2 border-gray-300 text-gray-700 hover:bg-white hover:border-primary rounded-xl text-lg font-semibold bg-white/80 backdrop-blur-sm"
                            >
                                Zobacz realizacje
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                                >
                                    <Play className="ml-2 h-5 w-5" />
                                </motion.div>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Feature Cards Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
                >
                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 60, rotateY: -15 }}
                        whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        whileHover={{
                            y: -15,
                            scale: 1.03,
                            rotateY: 5,
                            transition: { duration: 0.3 }
                        }}
                        className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            whileHover={{ opacity: 1 }}
                        />
                        <div className="relative p-8 text-center">
                            <motion.div
                                className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Shield className="h-8 w-8 text-white" />
                            </motion.div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Gwarancja jakości</h3>
                            <p className="text-gray-600">Każda realizacja objęta jest pełną gwarancją i certyfikatem bezpieczeństwa</p>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 60, rotateY: 15 }}
                        whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        whileHover={{
                            y: -15,
                            scale: 1.03,
                            rotateY: -5,
                            transition: { duration: 0.3 }
                        }}
                        className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            whileHover={{ opacity: 1 }}
                        />
                        <div className="relative p-8 text-center">
                            <motion.div
                                className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
                                whileHover={{ scale: 1.15, rotate: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Clock className="h-8 w-8 text-white" />
                            </motion.div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Terminowość</h3>
                            <p className="text-gray-600">Realizujemy projekty zgodnie z harmonogramem, bez opóźnień</p>
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 60, rotateY: -15 }}
                        whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        whileHover={{
                            y: -15,
                            scale: 1.03,
                            rotateY: 5,
                            transition: { duration: 0.3 }
                        }}
                        className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            whileHover={{ opacity: 1 }}
                        />
                        <div className="relative p-8 text-center">
                            <motion.div
                                className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Users className="h-8 w-8 text-white" />
                            </motion.div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Doświadczony zespół</h3>
                            <p className="text-gray-600">Certyfikowani specjaliści z wieloletnim doświadczeniem w branży</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 80, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="mt-20 text-center"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {[
                            { number: "100+", label: "Realizacji" },
                            { number: "6+", label: "Lat doświadczenia" },
                            { number: "24-60", label: "Miesięcy gwarancji" },
                            { number: "100%", label: "Zadowolonych klientów" }
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.5, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.1 * index,
                                    ease: "easeOut",
                                    type: "spring",
                                    stiffness: 100
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    y: -5,
                                    transition: { duration: 0.2 }
                                }}
                                className="text-center cursor-pointer"
                            >
                                <motion.div
                                    className="text-3xl md:text-4xl font-bold text-primary mb-2"
                                    whileHover={{
                                        scale: 1.2,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    {stat.number}
                                </motion.div>
                                <div className="text-gray-600 font-medium text-sm lg:text-base">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Join the Group Section */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-20"
                >
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-blue-500/10 to-primary/10 border border-white/20 backdrop-blur-md">
                        {/* Background Elements */}
                        <div className="absolute inset-0">
                            <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
                        </div>

                        <div className="relative z-10 p-12 lg:p-16 text-center">
                            <motion.h3
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight"
                            >
                                Dołącz do góry{" "}
                                <span className="bg-gradient-to-r from-primary via-blue-600 to-blue-700 bg-clip-text text-transparent">
                                    zadowolonych klientów
                                </span>
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
                            >
                                Skontaktuj się z nami już dziś i odkryj, dlaczego setki klientów wybrało KBS Investment
                                jako swojego partnera w projektach instalacyjnych.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Button
                                        onClick={() => window.location.href = 'tel:+48570751670'}
                                        className="h-12 px-8 bg-gradient-to-r from-primary to-blue-600 text-white hover:from-primary/90 hover:to-blue-600/90 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        <Phone className="mr-2 h-5 w-5" />
                                        Zadzwoń teraz
                                    </Button>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Button
                                        onClick={() => window.location.href = 'mailto:kontakt@kbsinvestment.pl'}
                                        variant="outline"
                                        className="h-12 px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-xl text-lg font-semibold transition-all duration-300"
                                    >
                                        <Mail className="ml-2 h-5 w-5" />
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


