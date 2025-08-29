"use client";

import { motion } from "motion/react";
import { CheckCircle, Award, Clock, Shield, Users, Zap } from "lucide-react";

const reasons = [
    {
        icon: Award,
        title: "Certyfikacje i uprawnienia",
        description: "Posiadamy wszystkie wymagane certyfikaty i uprawnienia do wykonywania prac instalacyjnych",
        color: "from-yellow-500 to-orange-500"
    },
    {
        icon: Clock,
        title: "Terminowość realizacji",
        description: "Zobowiązujemy się do realizacji projektów zgodnie z ustalonym harmonogramem",
        color: "from-green-500 to-emerald-500"
    },
    {
        icon: Shield,
        title: "Gwarancja jakości",
        description: "Każda realizacja objęta jest pełną gwarancją i certyfikatem bezpieczeństwa",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: Users,
        title: "Doświadczony zespół",
        description: "Certyfikowani specjaliści z wieloletnim doświadczeniem w branży instalacyjnej",
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: Zap,
        title: "Nowoczesne technologie",
        description: "Wykorzystujemy najnowsze technologie i materiały najwyższej jakości",
        color: "from-indigo-500 to-purple-500"
    },
    {
        icon: CheckCircle,
        title: "Kompleksowość usług",
        description: "Oferujemy pełen zakres usług od projektu po realizację i serwis",
        color: "from-teal-500 to-green-500"
    }
];

export function WhyChooseUs() {
    return (
        <section id="dlaczego-my" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
            <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                        Dlaczego warto wybrać <span className="text-primary">KBS Investment</span>?
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
                        Nasze doświadczenie, profesjonalizm i dbałość o jakość sprawiają,
                        że jesteśmy najlepszym wyborem dla Twoich projektów instalacyjnych.
                    </p>
                </motion.div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20">
                                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <reason.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">{reason.title}</h3>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{reason.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-white/20"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
                        {[
                            { number: "100+", label: "Zrealizowanych projektów" },
                            { number: "6+", label: "Lat doświadczenia" },
                            { number: "24-60", label: "Miesięcy gwarancji" },
                            { number: "100%", label: "Zadowolonych klientów" }
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2">{stat.number}</div>
                                <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
