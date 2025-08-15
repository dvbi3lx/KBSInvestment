"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Building2, MapPin, Calendar, Users, Award, Play, Pause } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const realizations = [
    {
        id: 1,
        title: "Kompleks biurowy Green Office Park",
        category: "Instalacje elektryczne",
        location: "Warszawa, Mokotów",
        date: "2024",
        team: "8 osób",
        duration: "4 miesiące",
        description: "Kompleksowa instalacja elektryczna w nowoczesnym biurowcu klasy A. Projekt obejmował instalację oświetlenia LED, systemu bezpieczeństwa, klimatyzacji oraz inteligentnego zarządzania energią.",
        longDescription: "Realizacja obejmowała kompleksową instalację elektryczną w nowoczesnym biurowcu klasy A o powierzchni 15,000 m². Projekt obejmował instalację oświetlenia LED z systemem sterowania, systemu bezpieczeństwa z kamerami IP, klimatyzacji precyzyjnej oraz inteligentnego zarządzania energią. Zastosowaliśmy najnowsze technologie automatyki budynkowej BMS oraz systemy przeciwpożarowe. Wszystkie instalacje zostały wykonane zgodnie z najwyższymi standardami bezpieczeństwa i efektywności energetycznej.",
        images: [
            "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&crop=center"
        ],
        features: ["Oświetlenie LED", "System BMS", "Klimatyzacja precyzyjna", "System bezpieczeństwa", "Automatyka przeciwpożarowa"]
    },
    {
        id: 2,
        title: "Centrum handlowe Galaxy Mall",
        category: "Wentylacja i klimatyzacja",
        location: "Kraków, Centrum",
        date: "2023",
        team: "12 osób",
        duration: "6 miesięcy",
        description: "Instalacja systemu wentylacyjnego i klimatyzacyjnego w centrum handlowym. Projekt obejmował systemy rekuperacji ciepła oraz inteligentne sterowanie klimatem.",
        longDescription: "Realizacja obejmowała kompleksową instalację systemu wentylacyjnego i klimatyzacyjnego w centrum handlowym o powierzchni 25,000 m². Projekt obejmował systemy rekuperacji ciepła z odzyskiem energii, inteligentne sterowanie klimatem w poszczególnych strefach, systemy przeciwpożarowe oraz monitoring jakości powietrza. Zastosowaliśmy najnowocześniejsze technologie HVAC z certyfikatem energetycznym A+. System został zoptymalizowany pod kątem oszczędności energii i komfortu użytkowników.",
        images: [
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center"
        ],
        features: ["System rekuperacji", "Klimatyzacja strefowa", "Monitoring powietrza", "Sterowanie inteligentne", "Certyfikat energetyczny A+"]
    },
    {
        id: 3,
        title: "Szpital uniwersytecki",
        category: "Instalacje medyczne",
        location: "Wrocław, Oporów",
        date: "2023",
        team: "15 osób",
        duration: "8 miesięcy",
        description: "Specjalistyczne instalacje medyczne w nowoczesnym szpitalu. Projekt obejmował systemy gazów medycznych, instalacje tlenowe oraz systemy bezpieczeństwa.",
        longDescription: "Realizacja obejmowała specjalistyczne instalacje medyczne w nowoczesnym szpitalu uniwersyteckim o powierzchni 30,000 m². Projekt obejmował systemy gazów medycznych (tlen, azot, CO2), instalacje tlenowe z systemem alarmowym, systemy przeciwpożarowe oraz instalacje elektryczne w salach operacyjnych. Wszystkie instalacje zostały wykonane zgodnie z najwyższymi standardami medycznymi i bezpieczeństwa. Zastosowaliśmy systemy redundancji oraz ciągłego monitoringu parametrów.",
        images: [
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center"
        ],
        features: ["Gazy medyczne", "System tlenowy", "Instalacje operacyjne", "Monitoring parametrów", "Systemy redundancji"]
    },
    {
        id: 4,
        title: "Hotel premium Marina Bay",
        category: "Kompleksowe instalacje",
        location: "Gdańsk, Oliwa",
        date: "2024",
        team: "20 osób",
        duration: "10 miesięcy",
        description: "Kompleksowe instalacje w luksusowym hotelu nad morzem. Projekt obejmował wszystkie systemy instalacyjne z najwyższymi standardami komfortu.",
        longDescription: "Realizacja obejmowała kompleksowe instalacje w luksusowym hotelu premium nad morzem o powierzchni 20,000 m². Projekt obejmował wszystkie systemy instalacyjne: elektryczne, wodno-kanalizacyjne, grzewcze, wentylacyjne, klimatyzacyjne oraz systemy inteligentnego budynku. Zastosowaliśmy najwyższe standardy komfortu, efektywności energetycznej oraz automatyki. Hotel otrzymał certyfikat LEED Gold za zrównoważone rozwiązania techniczne.",
        images: [
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center"
        ],
        features: ["System inteligentny", "Certyfikat LEED Gold", "Automatyka budynkowa", "Efektywność energetyczna", "Najwyższe standardy komfortu"]
    },
    {
        id: 5,
        title: "Zakład produkcyjny TechCorp",
        category: "Instalacje przemysłowe",
        location: "Poznań, Grunwald",
        date: "2023",
        team: "18 osób",
        duration: "7 miesięcy",
        description: "Instalacje przemysłowe w nowoczesnym zakładzie produkcyjnym. Projekt obejmował systemy automatyki przemysłowej i bezpieczeństwa.",
        longDescription: "Realizacja obejmowała instalacje przemysłowe w nowoczesnym zakładzie produkcyjnym o powierzchni 18,000 m². Projekt obejmował systemy automatyki przemysłowej, instalacje elektryczne wysokiego napięcia, systemy przeciwpożarowe, wentylację przemysłową oraz systemy bezpieczeństwa. Zastosowaliśmy najnowocześniejsze technologie przemysłowe z certyfikatem ATEX dla stref zagrożonych wybuchem. Wszystkie instalacje zostały zoptymalizowane pod kątem efektywności produkcyjnej.",
        images: [
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center"
        ],
        features: ["Automatyka przemysłowa", "Certyfikat ATEX", "Systemy bezpieczeństwa", "Wentylacja przemysłowa", "Optymalizacja produkcyjna"]
    },
    {
        id: 6,
        title: "Osiedle mieszkaniowe Park Residence",
        category: "Instalacje mieszkaniowe",
        location: "Łódź, Widzew",
        date: "2024",
        team: "25 osób",
        duration: "12 miesięcy",
        description: "Kompleksowe instalacje w nowoczesnym osiedlu mieszkaniowym. Projekt obejmował wszystkie systemy dla 200 mieszkań.",
        longDescription: "Realizacja obejmowała kompleksowe instalacje w nowoczesnym osiedlu mieszkaniowym o powierzchni 35,000 m² dla 200 mieszkań. Projekt obejmował wszystkie systemy instalacyjne: elektryczne, wodno-kanalizacyjne, grzewcze, wentylacyjne oraz systemy inteligentnego domu. Zastosowaliśmy najnowocześniejsze technologie smart home, systemy rekuperacji ciepła oraz odnawialne źródła energii. Osiedle otrzymało certyfikat energooszczędności A+.",
        images: [
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center"
        ],
        features: ["Smart home", "Rekuperacja ciepła", "Odnawialne źródła energii", "Certyfikat A+", "200 mieszkań"]
    }
];

export function Realizations() {
    const [selectedRealization, setSelectedRealization] = useState<typeof realizations[0] | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(false);
    const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

    // Auto-play functionality - disabled
    useEffect(() => {
        // Auto-play is disabled
        return () => { };
    }, []);

    // Block scroll when modal is open
    useEffect(() => {
        if (selectedRealization) {
            document.body.style.overflow = 'hidden';
            document.body.classList.add('modal-open');

            // Inject CSS to hide scroll-to-top button
            const style = document.createElement('style');
            style.id = 'modal-scroll-hide';
            style.textContent = `
                .modal-open [class*="scroll"],
                .modal-open [class*="Scroll"],
                .modal-open [id*="scroll"],
                .modal-open [id*="Scroll"],
                .modal-open [data-scroll],
                .modal-open button[onclick*="scroll"],
                .modal-open a[onclick*="scroll"],
                .modal-open [onclick*="scroll"] {
                    display: none !important;
                    visibility: hidden !important;
                    opacity: 0 !important;
                    pointer-events: none !important;
                }
            `;
            document.head.appendChild(style);

            // Hide scroll-to-top button with multiple approaches
            const scrollButton = document.getElementById('scroll-to-top');
            if (scrollButton) {
                scrollButton.style.opacity = '0';
                scrollButton.style.pointerEvents = 'none';
                scrollButton.style.visibility = 'hidden';
            }

            // Also try to hide by adding CSS class
            document.documentElement.classList.add('modal-open');
        } else {
            document.body.style.overflow = 'unset';
            document.body.classList.remove('modal-open');

            // Remove injected CSS
            const injectedStyle = document.getElementById('modal-scroll-hide');
            if (injectedStyle) {
                injectedStyle.remove();
            }

            // Show scroll-to-top button
            const scrollButton = document.getElementById('scroll-to-top');
            if (scrollButton) {
                scrollButton.style.opacity = '1';
                scrollButton.style.pointerEvents = 'auto';
                scrollButton.style.visibility = 'visible';
            }

            // Remove CSS class
            document.documentElement.classList.remove('modal-open');
        }

        return () => {
            document.body.style.overflow = 'unset';
            document.body.classList.remove('modal-open');
            document.documentElement.classList.remove('modal-open');

            // Remove injected CSS
            const injectedStyle = document.getElementById('modal-scroll-hide');
            if (injectedStyle) {
                injectedStyle.remove();
            }

            const scrollButton = document.getElementById('scroll-to-top');
            if (scrollButton) {
                scrollButton.style.opacity = '1';
                scrollButton.style.pointerEvents = 'auto';
                scrollButton.style.visibility = 'visible';
            }
        };
    }, [selectedRealization]);

    // Handle ESC key to close modal
    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && selectedRealization) {
                closeModal();
            }
        };

        if (selectedRealization) {
            document.addEventListener('keydown', handleEscKey);
        }

        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [selectedRealization]);

    const openModal = (realization: typeof realizations[0]) => {
        setSelectedRealization(realization);
        setCurrentImageIndex(0);
    };

    const closeModal = () => {
        setSelectedRealization(null);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (selectedRealization) {
            setCurrentImageIndex((prev) =>
                prev === selectedRealization.images.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (selectedRealization) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? selectedRealization.images.length - 1 : prev - 1
            );
        }
    };

    const goToSlide = (index: number) => {
        const direction = index > currentSlide ? 'right' : 'left';
        setSlideDirection(direction);
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setSlideDirection('right');
        setCurrentSlide((prev) => (prev + 1) % realizations.length);
    };

    const prevSlide = () => {
        setSlideDirection('left');
        setCurrentSlide((prev) => (prev - 1 + realizations.length) % realizations.length);
    };

    const toggleAutoPlay = () => {
        setIsAutoPlaying(!isAutoPlaying);
    };

    return (
        <section id="realizacje" className="py-24 bg-gradient-to-br from-white via-gray-50/50 to-white relative overflow-hidden">
            {/* Top Blur Effect for Section Connection */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/80 to-transparent backdrop-blur-sm z-10"></div>

            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-32 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-32 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-7xl px-4 lg:px-6 relative z-20">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
                    >
                        <Building2 className="h-4 w-4" />
                        Nasze realizacje
                    </motion.div>

                    <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Zobacz nasze{" "}
                        <span className="bg-gradient-to-r from-primary via-blue-600 to-blue-700 bg-clip-text text-transparent">
                            najlepsze projekty
                        </span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Odkryj portfolio naszych realizacji - od małych instalacji po kompleksowe projekty
                        komercyjne i przemysłowe.
                    </p>
                </motion.div>

                {/* Slider Container */}
                <div className="relative">
                    {/* Slider */}
                    <div className="relative overflow-hidden rounded-2xl">
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={currentSlide}
                                initial={{
                                    opacity: 0,
                                    x: slideDirection === 'right' ? 100 : -100,
                                    scale: 0.95,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    scale: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                    x: slideDirection === 'right' ? -100 : 100,
                                    scale: 0.95,
                                }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                    type: "tween"
                                }}
                                className="relative"
                            >
                                <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm overflow-hidden">
                                    <CardContent className="p-0">
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                            {/* Left Side - Image */}
                                            <motion.div
                                                className="relative h-80 lg:h-96 overflow-hidden"
                                                whileHover={{ scale: 1.02 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <motion.img
                                                    src={realizations[currentSlide].images[0]}
                                                    alt={realizations[currentSlide].title}
                                                    className="w-full h-full object-cover"
                                                    initial={{ scale: 1.1 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                                <motion.div
                                                    className="absolute top-4 left-4"
                                                    initial={{ opacity: 0, y: -20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6, delay: 0.3 }}
                                                >
                                                    <span className="inline-flex items-center gap-2 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                                                        {realizations[currentSlide].category}
                                                    </span>
                                                </motion.div>
                                                <motion.div
                                                    className="absolute bottom-4 right-4"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6, delay: 0.4 }}
                                                >
                                                    <span className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                                                        {currentSlide + 1} / {realizations.length}
                                                    </span>
                                                </motion.div>
                                            </motion.div>

                                            {/* Right Side - Content */}
                                            <motion.div
                                                className="p-8 lg:p-10 flex flex-col justify-center"
                                                initial={{ opacity: 0, x: 50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.8, delay: 0.2 }}
                                            >
                                                <motion.h3
                                                    className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6, delay: 0.3 }}
                                                >
                                                    {realizations[currentSlide].title}
                                                </motion.h3>
                                                <motion.p
                                                    className="text-gray-600 mb-6 leading-relaxed text-lg"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6, delay: 0.4 }}
                                                >
                                                    {realizations[currentSlide].description}
                                                </motion.p>

                                                {/* Project Details */}
                                                <motion.div
                                                    className="grid grid-cols-2 gap-4 mb-6"
                                                    initial={{ opacity: 0, y: 30 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6, delay: 0.5 }}
                                                >
                                                    <motion.div
                                                        className="flex items-center gap-3"
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.5, delay: 0.6 }}
                                                    >
                                                        <MapPin className="h-5 w-5 text-primary" />
                                                        <div>
                                                            <p className="text-sm text-gray-500">Lokalizacja</p>
                                                            <p className="font-medium">{realizations[currentSlide].location}</p>
                                                        </div>
                                                    </motion.div>
                                                    <motion.div
                                                        className="flex items-center gap-3"
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.5, delay: 0.7 }}
                                                    >
                                                        <Calendar className="h-5 w-5 text-primary" />
                                                        <div>
                                                            <p className="text-sm text-gray-500">Rok realizacji</p>
                                                            <p className="font-medium">{realizations[currentSlide].date}</p>
                                                        </div>
                                                    </motion.div>
                                                    <motion.div
                                                        className="flex items-center gap-3"
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.5, delay: 0.8 }}
                                                    >
                                                        <Users className="h-5 w-5 text-primary" />
                                                        <div>
                                                            <p className="text-sm text-gray-500">Zespół</p>
                                                            <p className="font-medium">{realizations[currentSlide].team}</p>
                                                        </div>
                                                    </motion.div>
                                                    <motion.div
                                                        className="flex items-center gap-3"
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.5, delay: 0.9 }}
                                                    >
                                                        <Award className="h-5 w-5 text-primary" />
                                                        <div>
                                                            <p className="text-sm text-gray-500">Czas realizacji</p>
                                                            <p className="font-medium">{realizations[currentSlide].duration}</p>
                                                        </div>
                                                    </motion.div>
                                                </motion.div>

                                                {/* CTA Button */}
                                                <motion.div
                                                    initial={{ opacity: 0, y: 30 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6, delay: 1.0 }}
                                                    className="flex justify-center"
                                                >
                                                    <Button
                                                        onClick={() => openModal(realizations[currentSlide])}
                                                        className="bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                                    >
                                                        Zobacz szczegóły
                                                    </Button>
                                                </motion.div>
                                            </motion.div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Arrows */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 bg-white/90 hover:bg-white text-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 bg-white/90 hover:bg-white text-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                    </motion.div>

                    {/* Dots Navigation */}
                    <motion.div
                        className="flex justify-center mt-8 gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        {realizations.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                    ? "bg-primary scale-125"
                                    : "bg-gray-300 hover:bg-gray-400"
                                    }`}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedRealization && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 50, rotateX: -15 }}
                            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 50, rotateX: 15 }}
                            transition={{
                                duration: 0.4,
                                ease: [0.4, 0.0, 0.2, 1],
                                type: "spring",
                                stiffness: 100,
                                damping: 20
                            }}
                            className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <motion.div
                                className="flex items-center justify-between p-6 border-b border-gray-200"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                            >
                                <h2 className="text-2xl font-bold text-gray-900">{selectedRealization.title}</h2>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={closeModal}
                                    className="h-8 w-8"
                                >
                                    <X className="h-4 w-4" />
                                </Button>
                            </motion.div>

                            {/* Modal Content */}
                            <div className="flex flex-col lg:flex-row">
                                {/* Left Side - Image Gallery */}
                                <motion.div
                                    className="lg:w-1/2 p-6"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <div className="relative">
                                        {/* Main Image */}
                                        <motion.div
                                            className="relative h-80 rounded-xl overflow-hidden mb-4"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <motion.img
                                                key={currentImageIndex}
                                                src={selectedRealization.images[currentImageIndex]}
                                                alt={`${selectedRealization.title} - zdjęcie ${currentImageIndex + 1}`}
                                                className="w-full h-full object-cover"
                                                initial={{ opacity: 0, scale: 1.1 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.9 }}
                                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                            />
                                            {/* Navigation Arrows */}
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={prevImage}
                                                className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 bg-white/80 hover:bg-white text-gray-800 rounded-full"
                                            >
                                                <ChevronLeft className="h-5 w-5" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={nextImage}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 bg-white/80 hover:bg-white text-gray-800 rounded-full"
                                            >
                                                <ChevronRight className="h-5 w-5" />
                                            </Button>
                                        </motion.div>

                                        {/* Thumbnail Navigation */}
                                        <motion.div
                                            className="flex gap-2 flex-wrap"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.4 }}
                                        >
                                            {selectedRealization.images.map((image, index) => (
                                                <motion.button
                                                    key={index}
                                                    onClick={() => setCurrentImageIndex(index)}
                                                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${index === currentImageIndex
                                                        ? "border-primary"
                                                        : "border-gray-200 hover:border-gray-300"
                                                        }`}
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                >
                                                    <img
                                                        src={image}
                                                        alt={`Miniatura ${index + 1}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </motion.button>
                                            ))}
                                        </motion.div>
                                    </div>
                                </motion.div>

                                {/* Right Side - Project Details */}
                                <motion.div
                                    className="lg:w-1/2 p-6 bg-gray-50/50"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <div className="space-y-6">
                                        {/* Category Badge */}
                                        <motion.div
                                            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.4, delay: 0.4 }}
                                        >
                                            {selectedRealization.category}
                                        </motion.div>

                                        {/* Project Info */}
                                        <motion.div
                                            className="grid grid-cols-2 gap-4"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.5 }}
                                        >
                                            <div className="flex items-center gap-3">
                                                <MapPin className="h-5 w-5 text-primary" />
                                                <div>
                                                    <p className="text-sm text-gray-500">Lokalizacja</p>
                                                    <p className="font-medium">{selectedRealization.location}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Calendar className="h-5 w-5 text-primary" />
                                                <div>
                                                    <p className="text-sm text-gray-500">Rok realizacji</p>
                                                    <p className="font-medium">{selectedRealization.date}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Users className="h-5 w-5 text-primary" />
                                                <div>
                                                    <p className="text-sm text-gray-500">Zespół</p>
                                                    <p className="font-medium">{selectedRealization.team}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Award className="h-5 w-5 text-primary" />
                                                <div>
                                                    <p className="text-sm text-gray-500">Czas realizacji</p>
                                                    <p className="font-medium">{selectedRealization.duration}</p>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Description */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.6 }}
                                        >
                                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Opis projektu</h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {selectedRealization.longDescription}
                                            </p>
                                        </motion.div>

                                        {/* Features */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.7 }}
                                        >
                                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Kluczowe funkcje</h3>
                                            <div className="grid grid-cols-1 gap-2">
                                                {selectedRealization.features.map((feature, index) => (
                                                    <motion.div
                                                        key={index}
                                                        className="flex items-center gap-2"
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                                                    >
                                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                                        <span className="text-gray-600">{feature}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
