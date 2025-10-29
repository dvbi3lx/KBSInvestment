"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star, Quote, ArrowRight } from "lucide-react";
import { GSAPCard } from "@/components/gsap-card";

const testimonials = [
    {
        name: "Jan Kowalski",
        position: "Właściciel firmy",
        company: "TechCorp Sp. z o.o.",
        content: "KBS Investment Sp. z o.o. wykonał kompleksową instalację elektryczną w naszym biurowcu. Prace zostały zrealizowane terminowo, profesjonalnie i zgodnie z najwyższymi standardami bezpieczeństwa.",
        rating: 5,
        avatar: "JK"
    },
    {
        name: "Anna Nowak",
        position: "Dyrektor techniczny",
        company: "GreenBuild Solutions",
        content: "Współpraca z KBS Investment Sp. z o.o. to czysta przyjemność. Ich zespół wykazał się ogromną wiedzą techniczną i dbałością o szczegóły podczas montażu systemu wentylacyjnego.",
        rating: 5,
        avatar: "AN"
    },
    {
        name: "Piotr Wiśniewski",
        position: "Inwestor",
        company: "Residential Complex",
        content: "Instalacje gazowe i grzewcze wykonane przez KBS Investment Sp. z o.o. działają bez zarzutu od ponad 6 lat. Polecam ich usługi każdemu, kto ceni sobie jakość i niezawodność.",
        rating: 5,
        avatar: "PW"
    },
    {
        name: "Maria Zielińska",
        position: "Kierownik projektu",
        company: "Office Park Development",
        content: "Profesjonalne podejście, terminowość i najwyższa jakość wykonania. KBS Investment Sp. z o.o. to partner, na którym można polegać w każdym projekcie instalacyjnym.",
        rating: 5,
        avatar: "MZ"
    },
    {
        name: "Tomasz Lewandowski",
        position: "Właściciel",
        company: "Industrial Solutions",
        content: "Kompleksowa inwentaryzacja techniczna i modernizacja instalacji wodno-kanalizacyjnych wykonane perfekcyjnie. Zespół KBS Investment Sp. z o.o. to prawdziwi profesjonaliści.",
        rating: 5,
        avatar: "TL"
    },
    {
        name: "Katarzyna Dąbrowska",
        position: "Architekt",
        company: "Modern Architecture Studio",
        content: "Współpraca z KBS Investment Sp. z o.o. podczas realizacji projektu biurowca była wzorowa. Ich ekspertyza techniczna i dbałość o estetykę instalacji zasługują na najwyższą ocenę.",
        rating: 5,
        avatar: "KD"
    }
];

export function Testimonials() {
    return (
        <section id="opinie" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary/5 rounded-full blur-2xl sm:blur-3xl"></div>
                <div className="absolute bottom-20 right-4 sm:right-10 w-56 h-56 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-2xl sm:blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 relative z-10">
                {/* Header Section */}
                <GSAPCard className="text-center mb-16 sm:mb-20">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                        <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-primary" />
                        Średnia ocena: 5.0/5.0
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-1">
                        Zaufali nam{" "}
                        <span className="bg-gradient-to-r from-primary via-blue-600 to-blue-700 bg-clip-text text-transparent">
                            najlepsi
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
                        Dołącz do grona zadowolonych klientów, którzy wybrali KBS Investment Sp. z o.o. jako swojego
                        zaufanego partnera w realizacji projektów instalacyjnych.
                    </p>
                </GSAPCard>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <GSAPCard
                            key={testimonial.name}
                            delay={index * 0.05}
                        >
                            <Card className="h-full border-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br from-white to-gray-50/50">
                                <CardHeader className="pb-3 sm:pb-4">
                                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                                        <div className="flex items-center gap-2 sm:gap-3">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-base sm:text-lg">
                                                {testimonial.avatar}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</h3>
                                                <p className="text-xs sm:text-sm text-gray-600">{testimonial.position}</p>
                                                <p className="text-xs sm:text-sm text-primary font-medium">{testimonial.company}</p>
                                            </div>

                                        </div>
                                        <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-primary/30" />
                                    </div>
                                    <div className="flex items-center gap-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                </CardHeader>
                                <CardContent className="px-4 sm:px-6">
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed italic">
                                        &ldquo;{testimonial.content}&rdquo;
                                    </p>
                                </CardContent>
                            </Card>
                        </GSAPCard>
                    ))}
                </div>

                {/* Enhanced CTA Section */}
                <GSAPCard delay={0.3} className="text-center mt-16 sm:mt-20">
                    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16">
                        {/* Glassy Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-blue-500/10 to-primary/5 backdrop-blur-sm border border-white/20 rounded-2xl sm:rounded-3xl"></div>

                        {/* Background Elements */}
                        <div className="absolute top-4 right-4 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-primary/15 to-blue-400/15 rounded-full blur-2xl animate-pulse" />
                        <div className="absolute bottom-4 left-4 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tr from-blue-400/15 to-primary/15 rounded-full blur-2xl animate-pulse" />

                        {/* Content */}
                        <div className="relative z-10">
                            {/* Stats Row */}
                            <div className="flex justify-center items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                                <div className="text-center">
                                    <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">100+</div>
                                    <div className="text-xs sm:text-sm text-gray-600">Klientów</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">6+</div>
                                    <div className="text-xs sm:text-sm text-gray-600">Lat</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">100%</div>
                                    <div className="text-xs sm:text-sm text-gray-600">Satysfakcji</div>
                                </div>
                            </div>

                            {/* Main Text */}
                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                                Dołącz do grona{" "}
                                <span className="bg-gradient-to-r from-primary via-blue-600 to-blue-700 bg-clip-text text-transparent">
                                    zadowolonych klientów
                                </span>
                            </h3>

                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0">
                                Skontaktuj się z nami i rozpocznij współpracę, która przyniesie Ci same korzyści
                            </p>

                            {/* CTA Button */}
                            <button
                                onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-gradient-to-r from-primary to-blue-600 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 inline-flex items-center gap-2 sm:gap-3"
                            >
                                Skontaktuj się
                                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                            </button>
                        </div>
                    </div>
                </GSAPCard>
            </div>
        </section>
    );
}

