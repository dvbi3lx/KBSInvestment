"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GSAPCard } from "@/components/gsap-card";
import {
    Wrench,
    Droplets,
    Zap,
    Flame,
    Fan,
    Shield,
    FileText,
    HardHat,
    Settings,
    DraftingCompass
} from "lucide-react";

const services = [
    {
        icon: Wrench,
        title: "Instalacje gazowe",
        description: "Kompleksowe instalacje gazowe z certyfikacją i gwarancją bezpieczeństwa",
        color: "from-orange-500 to-red-500"
    },
    {
        icon: Flame,
        title: "Instalacje grzewcze",
        description: "Nowoczesne systemy ogrzewania CO, podłogowe i grzejnikowe",
        color: "from-red-500 to-orange-500"
    },
    {
        icon: Droplets,
        title: "Woda i kanalizacja",
        description: "Instalacje wodno-kanalizacyjne zgodne z najnowszymi normami",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: Zap,
        title: "Instalacje elektryczne",
        description: "Pełen zakres prac elektrycznych z certyfikacją i testami",
        color: "from-yellow-500 to-orange-500"
    },
    {
        icon: Fan,
        title: "Wentylacja i klimatyzacja",
        description: "Systemy wentylacyjne i klimatyzacyjne dla każdego obiektu",
        color: "from-green-500 to-blue-500"
    },
    {
        icon: Shield,
        title: "Konserwacja i serwis",
        description: "Regularna konserwacja i serwis wszystkich instalacji",
        color: "from-purple-500 to-blue-500"
    },
    {
        icon: FileText,
        title: "Inwentaryzacja",
        description: "Profesjonalna inwentaryzacja techniczna instalacji",
        color: "from-indigo-500 to-purple-500"
    },
    {
        icon: HardHat,
        title: "Spawanie i montaż",
        description: "Specjalistyczne prace spawalnicze i montażowe",
        color: "from-gray-600 to-gray-800"
    },
    {
        icon: Settings,
        title: "Eksploatacja i dozór",
        description: "Dozór techniczny i eksploatacja urządzeń elektrycznych, instalacji cieplnych oraz gazowych",
        color: "from-teal-500 to-green-500"
    },
    {
        icon: DraftingCompass,
        title: "Projektowanie",
        description: "Projektowanie instalacji elektrycznych, centralnego ogrzewania, gazowych i wentylacyjnych",
        color: "from-cyan-500 to-blue-600"
    }
];

export function Services() {
    return (
        <section id="uslugi" className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                {/* Header */}
                <GSAPCard className="text-center mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-1">
                        Nasze <span className="text-primary">usługi</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
                        Oferujemy kompleksowe rozwiązania w zakresie instalacji i remontów,
                        zapewniając najwyższą jakość i bezpieczeństwo każdej realizacji.
                    </p>
                </GSAPCard>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <GSAPCard
                            key={service.title}
                            delay={index * 0.05}
                            className={`group ${index === services.length - 1 ? 'lg:col-start-2' : ''}`}
                        >
                            <Card className="h-full border-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br from-white to-gray-50/50">
                                <CardHeader className="text-center pb-3 sm:pb-4">
                                    <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg`}>
                                        <service.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                                    </div>
                                    <CardTitle className="text-lg sm:text-xl text-gray-900">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center px-4 sm:px-6">
                                    <CardDescription className="text-sm sm:text-base text-gray-600 text-base leading-relaxed">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </GSAPCard>
                    ))}
                </div>

                {/* CTA Section */}
                <GSAPCard delay={0.3} className="text-center mt-12 sm:mt-16">
                    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/10 via-blue-500/10 to-primary/10 border border-white/20 backdrop-blur-md p-6 sm:p-8 lg:p-12">
                        {/* Background Elements */}
                        <div className="absolute inset-0">
                            <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-primary/5 rounded-full blur-2xl sm:blur-3xl"></div>
                            <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/5 rounded-full blur-2xl sm:blur-3xl"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                                Potrzebujesz wyceny swojego projektu?
                            </h3>
                            <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-5 text-gray-600 px-2 sm:px-0 leading-relaxed">
                                Skontaktuj się z nami, a nasz zespół ekspertów przeanalizuje Twoje potrzeby 
                                i przygotuje szczegółową wycenę dostosowaną do specyfiki projektu.
                            </p>
                            <div className="flex flex-col items-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:flex-row lg:justify-center lg:gap-4">
                                <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
                                    <span className="text-lg sm:text-xl">⏱️</span>
                                    <span className="text-sm sm:text-base text-gray-700">Odpowiadamy w ciągu 24 godzin</span>
                                </div>
                                <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
                                    <span className="text-lg sm:text-xl">📋</span>
                                    <span className="text-sm sm:text-base text-gray-700">Dokładna analiza</span>
                                </div>
                                <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
                                    <span className="text-lg sm:text-xl">💼</span>
                                    <span className="text-sm sm:text-base text-gray-700">Profesjonalne doradztwo</span>
                                </div>
                            </div>
                            <button
                                onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-gradient-to-r from-primary to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
                            >
                                Uzyskaj wycenę
                            </button>
                        </div>
                    </div>
                </GSAPCard>
            </div>
        </section>
    );
}
