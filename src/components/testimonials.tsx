"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star, Quote, ArrowRight, Users, Award, Zap } from "lucide-react";

const testimonials = [
    {
        name: "Jan Kowalski",
        position: "Właściciel firmy",
        company: "TechCorp Sp. z o.o.",
        content: "KBS Investment wykonał kompleksową instalację elektryczną w naszym biurowcu. Prace zostały zrealizowane terminowo, profesjonalnie i zgodnie z najwyższymi standardami bezpieczeństwa.",
        rating: 5,
        avatar: "JK"
    },
    {
        name: "Anna Nowak",
        position: "Dyrektor techniczny",
        company: "GreenBuild Solutions",
        content: "Współpraca z KBS Investment to czysta przyjemność. Ich zespół wykazał się ogromną wiedzą techniczną i dbałością o szczegóły podczas montażu systemu wentylacyjnego.",
        rating: 5,
        avatar: "AN"
    },
    {
        name: "Piotr Wiśniewski",
        position: "Inwestor",
        company: "Residential Complex",
        content: "Instalacje gazowe i grzewcze wykonane przez KBS Investment działają bez zarzutu od ponad 6 lat. Polecam ich usługi każdemu, kto ceni sobie jakość i niezawodność.",
        rating: 5,
        avatar: "PW"
    },
    {
        name: "Maria Zielińska",
        position: "Kierownik projektu",
        company: "Office Park Development",
        content: "Profesjonalne podejście, terminowość i najwyższa jakość wykonania. KBS Investment to partner, na którym można polegać w każdym projekcie instalacyjnym.",
        rating: 5,
        avatar: "MZ"
    },
    {
        name: "Tomasz Lewandowski",
        position: "Właściciel",
        company: "Industrial Solutions",
        content: "Kompleksowa inwentaryzacja techniczna i modernizacja instalacji wodno-kanalizacyjnych wykonane perfekcyjnie. Zespół KBS Investment to prawdziwi profesjonaliści.",
        rating: 5,
        avatar: "TL"
    },
    {
        name: "Katarzyna Dąbrowska",
        position: "Architekt",
        company: "Modern Architecture Studio",
        content: "Współpraca z KBS Investment podczas realizacji projektu biurowca była wzorowa. Ich ekspertyza techniczna i dbałość o estetykę instalacji zasługują na najwyższą ocenę.",
        rating: 5,
        avatar: "KD"
    }
];

export function Testimonials() {
    return (
        <section id="opinie" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-7xl px-4 lg:px-6 relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
                    >
                        <Star className="h-4 w-4 fill-primary" />
                        Średnia ocena: 5.0/5.0
                    </motion.div>

                    <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Zaufali nam{" "}
                        <span className="bg-gradient-to-r from-primary via-blue-600 to-blue-700 bg-clip-text text-transparent">
                            najlepsi
                        </span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Dołącz do grona zadowolonych klientów, którzy wybrali KBS Investment jako swojego
                        zaufanego partnera w realizacji projektów instalacyjnych.
                    </p>
                </motion.div>



                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                        >
                            <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50/50">
                                <CardHeader className="pb-4">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                                                {testimonial.avatar}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                                                <p className="text-sm text-gray-600">{testimonial.position}</p>
                                                <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                                            </div>

                                        </div>
                                        <Quote className="h-8 w-8 text-primary/30" />
                                    </div>
                                    <div className="flex items-center gap-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 leading-relaxed italic">
                                        &ldquo;{testimonial.content}&rdquo;
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Enhanced CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="text-center mt-20"
                >
                    <div className="relative overflow-hidden rounded-3xl p-12 lg:p-16">
                        {/* Glassy Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-blue-500/10 to-primary/5 backdrop-blur-sm border border-white/20 rounded-3xl"></div>

                        {/* Animated Background Elements */}
                        <motion.div
                            className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/20 to-blue-400/20 rounded-full blur-3xl"
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
                            className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-blue-400/20 to-primary/20 rounded-full blur-3xl"
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

                        {/* Content */}
                        <div className="relative z-10">
                            {/* Icon Row */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="flex justify-center items-center gap-6 mb-8"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center shadow-lg"
                                >
                                    <Users className="h-8 w-8 text-white" />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: -5 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-primary rounded-2xl flex items-center justify-center shadow-lg"
                                >
                                    <Award className="h-8 w-8 text-white" />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                    className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center shadow-lg"
                                >
                                    <Zap className="h-8 w-8 text-white" />
                                </motion.div>
                            </motion.div>

                            {/* Main Text */}
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                            >
                                Dołącz do grona{" "}
                                <span className="bg-gradient-to-r from-primary via-blue-600 to-blue-700 bg-clip-text text-transparent">
                                    zadowolonych klientów
                                </span>
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 1.0 }}
                                className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed"
                            >
                                Skontaktuj się z nami i rozpocznij współpracę, która przyniesie Ci same korzyści
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 1.2 }}
                                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <button
                                        onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                                        className="bg-gradient-to-r from-primary to-blue-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 group"
                                    >
                                        Skontaktuj się
                                        <motion.div
                                            animate={{ x: [0, 3, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                                        >
                                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                                        </motion.div>
                                    </button>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.05, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <button className="bg-white/80 backdrop-blur-sm text-gray-800 px-10 py-4 rounded-2xl font-semibold text-lg border-2 border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-xl transition-all duration-300">
                                        Zobacz więcej opinii
                                    </button>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

