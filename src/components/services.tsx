"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Wrench,
    Droplets,
    Zap,
    Flame,
    Fan,
    Shield,
    FileText,
    HardHat,
    Settings
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
        title: "Eksploatacja i nadzór",
        description: "Nadzór techniczny i eksploatacja urządzeń energetycznych",
        color: "from-teal-500 to-green-500"
    }
];

export function Services() {
    return (
        <section id="uslugi" className="py-20 bg-white">
            <div className="mx-auto max-w-7xl px-4 lg:px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Nasze <span className="text-primary">usługi</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Oferujemy kompleksowe rozwiązania w zakresie instalacji i remontów,
                        zapewniając najwyższą jakość i bezpieczeństwo każdej realizacji.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                        >
                            <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50/50">
                                <CardHeader className="text-center pb-4">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                                        <service.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-blue-500/10 to-primary/10 border border-white/20 backdrop-blur-md p-8 lg:p-12">
                        {/* Background Elements */}
                        <div className="absolute inset-0">
                            <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                Potrzebujesz wyceny?
                            </h3>
                            <p className="text-xl mb-8 text-gray-600">
                                Skontaktuj się z nami i otrzymaj bezpłatną wycenę w ciągu 24 godzin
                            </p>
                            <motion.button
                                onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Uzyskaj wycenę
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
