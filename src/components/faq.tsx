"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronDown, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqData = [
    {
        question: "Jakie usługi oferuje KBS Investment?",
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
        <section id="faq" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
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
                        Często zadawane <span className="text-primary">pytania</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Odpowiedzi na najczęściej zadawane pytania dotyczące naszych usług i procesu realizacji projektów.
                    </p>
                </motion.div>

                {/* FAQ List */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="space-y-4">
                        {faqData.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <motion.button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200 rounded-2xl"
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                >
                                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                                        {faq.question}
                                    </h3>
                                    <motion.div
                                        className="flex-shrink-0"
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <ChevronDown className="h-6 w-6 text-primary" />
                                    </motion.div>
                                </motion.button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0, scale: 0.95 }}
                                            animate={{
                                                opacity: 1,
                                                height: "auto",
                                                scale: 1,
                                                transition: {
                                                    height: { duration: 0.4, ease: "easeInOut" },
                                                    opacity: { duration: 0.3, delay: 0.1 },
                                                    scale: { duration: 0.3, ease: "easeOut" }
                                                }
                                            }}
                                            exit={{
                                                opacity: 0,
                                                height: 0,
                                                scale: 0.95,
                                                transition: {
                                                    height: { duration: 0.3, ease: "easeInOut" },
                                                    opacity: { duration: 0.2 },
                                                    scale: { duration: 0.2, ease: "easeIn" }
                                                }
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3, delay: 0.2 }}
                                                className="px-8 pb-6"
                                            >
                                                <p className="text-gray-600 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-20 text-center"
                >
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-blue-500/10 to-primary/10 border border-white/20 backdrop-blur-sm">
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
                                Nie znalazłeś odpowiedzi?{" "}
                                <span className="bg-gradient-to-r from-primary via-blue-600 to-blue-700 bg-clip-text text-transparent">
                                    Skontaktuj się z nami
                                </span>
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
                            >
                                Nasi specjaliści chętnie odpowiedzą na wszystkie Twoje pytania i pomogą w realizacji projektu.
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
                                        className="h-12 px-8 bg-gradient-to-r from-primary to-blue-600 text-white hover:from-primary/90 hover:to-blue-600/90 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
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
                                        variant="outline" className="h-12 px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-xl text-lg font-semibold transition-all duration-300">
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

