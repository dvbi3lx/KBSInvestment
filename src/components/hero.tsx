"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, Play, Shield, Clock, Users, Phone, Mail, X } from "lucide-react";
import { GSAPCard } from "@/components/gsap-card";
import { useState } from "react";

export function Hero() {
    const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);

    return (
        <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-primary/15 to-blue-400/15 rounded-full blur-2xl sm:blur-3xl animate-pulse" />
                <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-tr from-blue-400/15 to-primary/15 rounded-full blur-2xl sm:blur-3xl animate-pulse" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20">
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    {/* Logo */}
                    <GSAPCard className="flex justify-center mb-6 sm:mb-8">
                        <img
                            src="/logo.png"
                            alt="KBS Investment Sp. z o.o."
                            className="h-16 w-auto sm:h-18 md:h-20 drop-shadow-lg"
                            loading="eager"
                        />
                    </GSAPCard>

                    {/* Main Headline */}
                    <GSAPCard delay={0.1}>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                            <span className="block">Solidne realizacje</span>
                            <span className="block bg-gradient-to-r from-primary via-blue-600 to-blue-700 bg-clip-text text-transparent">
                                instalacyjne
                            </span>
                        </h1>
                    </GSAPCard>

                    {/* Description */}
                    <GSAPCard delay={0.2}>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2 sm:px-0">
                            KBS Investment Sp. z o.o. oferuje kompleksowe rozwiązania w zakresie usług instalacyjnych —
                            od projektowania po realizację, z gwarancją jakości i terminowości.
                        </p>
                    </GSAPCard>

                    {/* CTA Buttons */}
                    <GSAPCard delay={0.3} className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-2 sm:px-0">
                        <Button
                            onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-10 bg-gradient-to-r from-primary to-blue-600 text-white hover:from-primary/90 hover:to-blue-600/90 rounded-xl text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
                        >
                            Wycena projektu
                            <ArrowUpRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                        </Button>
                        <Button
                            onClick={() => document.getElementById('uslugi')?.scrollIntoView({ behavior: 'smooth' })}
                            variant="outline"
                            className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-10 border-2 border-gray-300 text-gray-700 hover:bg-white hover:border-primary rounded-xl text-base sm:text-lg font-semibold bg-white/80 backdrop-blur-sm hover:scale-105 active:scale-95 transition-all duration-300"
                        >
                            Nasze usługi
                            <Play className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                        </Button>
                    </GSAPCard>
                </div>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto px-2 sm:px-0 mb-16 sm:mb-20">
                    <GSAPCard delay={0.1} className="group">
                        <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative p-4 sm:p-6 md:p-8 text-center">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Shield className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Gwarancja jakości</h3>
                                <p className="text-sm sm:text-base text-gray-600">Każda realizacja objęta jest pełną gwarancją i certyfikatem bezpieczeństwa</p>
                            </div>
                        </div>
                    </GSAPCard>

                    <GSAPCard delay={0.15} className="group">
                        <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative p-4 sm:p-6 md:p-8 text-center">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Clock className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Terminowość</h3>
                                <p className="text-sm sm:text-base text-gray-600">Realizujemy projekty zgodnie z harmonogramem, bez opóźnień</p>
                            </div>
                        </div>
                    </GSAPCard>

                    <GSAPCard delay={0.2} className="group sm:col-span-2 md:col-span-1">
                        <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative p-4 sm:p-6 md:p-8 text-center">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Users className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Doświadczony zespół</h3>
                                <p className="text-sm sm:text-base text-gray-600">Certyfikowani specjaliści z wieloletnim doświadczeniem w branży</p>
                            </div>
                        </div>
                    </GSAPCard>
                </div>

                {/* Stats Section */}
                <GSAPCard delay={0.3} className="text-center">
                    <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-2 sm:px-0">
                        {[
                            { number: "100+", label: "Realizacji" },
                            { number: "6+", label: "Lat doświadczenia" },
                            { number: "24-60", label: "Miesięcy gwarancji" },
                            { number: "100%", label: "Zadowolonych klientów" }
                        ].map((stat) => (
                            <div key={stat.label} className="text-center cursor-pointer hover:scale-105 transition-transform duration-300">
                                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </GSAPCard>

                {/* CTA Section - Join Satisfied Clients */}
                <GSAPCard delay={0.4} className="text-center mt-12 sm:mt-16 md:mt-20">
                    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16">
                        {/* Glassy Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-blue-500/10 to-primary/5 backdrop-blur-sm border border-white/20 rounded-2xl sm:rounded-3xl"></div>

                        {/* Background Elements */}
                        <div className="absolute top-4 right-4 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-primary/15 to-blue-400/15 rounded-full blur-2xl animate-pulse" />
                        <div className="absolute bottom-4 left-4 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tr from-blue-400/15 to-primary/15 rounded-full blur-2xl animate-pulse" />

                        {/* Content */}
                        <div className="relative z-10">
                            {/* Main Text */}
                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                                Dołącz do grona{" "}
                                <span className="bg-gradient-to-r from-primary via-blue-600 to-blue-700 bg-clip-text text-transparent">
                                    zadowolonych klientów
                                </span>
                            </h3>

                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0">
                                Skontaktuj się z nami już dziś i odkryj, dlaczego setki klientów wybrało KBS Investment Sp. z o.o. jako swojego partnera w projektach instalacyjnych.
                            </p>

                            {/* Contact Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-2 sm:px-0">
                                <button 
                                    onClick={() => setIsPhoneModalOpen(true)}
                                    className="bg-gradient-to-r from-primary to-blue-600 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 inline-flex items-center gap-2 sm:gap-3"
                                >
                                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                                    Zadzwoń teraz
                                </button>
                                <a 
                                    href="mailto:kbsinvestment@interia.pl"
                                    className="border-2 border-gray-300 text-gray-700 hover:bg-white hover:border-primary px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg bg-white/80 backdrop-blur-sm hover:scale-105 active:scale-95 transition-all duration-300 inline-flex items-center gap-2 sm:gap-3"
                                >
                                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                                    Napisz email
                                </a>
                            </div>
                        </div>
                    </div>
                </GSAPCard>
            </div>

            {/* Phone Modal */}
            {isPhoneModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 animate-in zoom-in-95 duration-200">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsPhoneModalOpen(false)}
                            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <X className="h-5 w-5 text-gray-500" />
                        </button>

                        {/* Modal Header */}
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Phone className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Wybierz numer telefonu
                            </h3>
                            <p className="text-gray-600">
                                Skontaktuj się z naszym zespołem
                            </p>
                        </div>

                        {/* Phone Numbers */}
                        <div className="space-y-3">
                            <a
                                href="tel:+48570751670"
                                className="block p-4 rounded-xl border-2 border-gray-200 hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-semibold text-gray-900 mb-1">
                                            Krystian Szymborski
                                        </div>
                                        <div className="text-primary font-medium">
                                            +48 570-751-670
                                        </div>
                                    </div>
                                    <Phone className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                                </div>
                            </a>

                            <a
                                href="tel:+48516437707"
                                className="block p-4 rounded-xl border-2 border-gray-200 hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-semibold text-gray-900 mb-1">
                                            Iwona Janda
                                        </div>
                                        <div className="text-primary font-medium">
                                            +48 516-437-707
                                        </div>
                                    </div>
                                    <Phone className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
