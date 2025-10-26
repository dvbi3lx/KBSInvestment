"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { GSAPCard } from "@/components/gsap-card";

const faqData = [
    {
        question: "Jakie usługi oferuje KBS Investment Sp. z o.o.?",
        answer: "Oferujemy kompleksowe usługi instalacyjne: instalacje gazowe, grzewcze, wodno-kanalizacyjne, elektryczne, wentylację i klimatyzację, konserwację, inwentaryzację, spawanie oraz eksploatację i nadzór urządzeń."
    },
    {
        question: "Czy posiadacie wszystkie niezbędne certyfikaty?",
        answer: "Tak, posiadamy wszystkie wymagane certyfikaty i uprawnienia do wykonywania usług instalacyjnych. Nasze realizacje spełniają najwyższe standardy bezpieczeństwa."
    },
    {
        question: "Jak długo trwa realizacja typowego projektu?",
        answer: "Czas realizacji zależy od skali projektu. Małe instalacje mogą być gotowe w ciągu kilku dni, większe projekty trwają od kilku tygodni do kilku miesięcy. Zawsze informujemy o dokładnym harmonogramie."
    },
    {
        question: "Czy udzielacie gwarancji na swoje usługi?",
        answer: "Tak, każda nasza realizacja objęta jest pełną gwarancją jakości. Okres gwarancji zależy od rodzaju usługi i wynosi od 24 do 60 miesięcy."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
                {/* Header */}
                <GSAPCard className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                        Często zadawane <span className="text-primary">pytania</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
                        Odpowiedzi na najczęściej zadawane pytania dotyczące naszych usług i procesu realizacji projektów.
                    </p>
                </GSAPCard>

                {/* FAQ List */}
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-3 sm:space-y-4">
                        {faqData.map((faq, index) => (
                            <GSAPCard
                                key={index}
                                delay={index * 0.05}
                                className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200 rounded-xl sm:rounded-2xl"
                                >
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-3 sm:pr-4">
                                        {faq.question}
                                    </h3>
                                    <div className="flex-shrink-0">
                                        <ChevronDown className={`h-5 w-5 sm:h-6 sm:w-6 text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                                    </div>
                                </button>

                                {openIndex === index && (
                                    <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </GSAPCard>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <GSAPCard delay={0.3} className="mt-16 sm:mt-20 text-center">
                    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/10 via-blue-500/10 to-primary/10 border border-white/20 backdrop-blur-sm">
                        {/* Background Elements */}
                        <div className="absolute inset-0">
                            <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-primary/5 rounded-full blur-2xl sm:blur-3xl"></div>
                            <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/5 rounded-full blur-2xl sm:blur-3xl"></div>
                        </div>

                        <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-16 text-center">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                                Nie znalazłeś odpowiedzi?{" "}
                                <span className="bg-gradient-to-r from-primary via-blue-600 to-blue-700 bg-clip-text text-transparent">
                                    Skontaktuj się z nami
                                </span>
                            </h3>
                            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                                Nasi specjaliści chętnie odpowiedzą na wszystkie Twoje pytania i pomogą w realizacji projektu.
                            </p>
                            <button
                                onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-gradient-to-r from-primary to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
                            >
                                Skontaktuj się
                            </button>
                        </div>
                    </div>
                </GSAPCard>
            </div>
        </section>
    );
}

