import { Metadata } from "next";
import { Shield, Lock, Eye, Users, FileText, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Polityka Prywatności - KBS Investment Sp. z o.o.",
    description: "Polityka prywatności KBS Investment Sp. z o.o. Dowiedz się, jak chronimy Twoje dane osobowe zgodnie z RODO.",
    keywords: "polityka prywatności, RODO, ochrona danych, KBS Investment",
};

export default function PolitykaPrywatnosci() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="mx-auto max-w-4xl px-3 sm:px-4 py-6 sm:py-8 lg:px-8">
                    <div className="text-center">
                        <div className="flex justify-center mb-4 sm:mb-6">
                            <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-blue-600 text-white shadow-xl">
                                <Shield className="h-8 w-8 sm:h-10 sm:w-10" />
                            </div>
                        </div>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                            Polityka Prywatności
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-2 sm:px-0">
                            Dbamy o Twoje dane osobowe i zapewniamy pełną zgodność z europejskimi przepisami o ochronie danych (RODO)
                        </p>
                        <div className="mt-4 sm:mt-6">
                            <Link href="/">
                                <Button variant="outline" className="rounded-xl text-sm sm:text-base">
                                    ← Powrót do strony głównej
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="mx-auto max-w-4xl px-3 sm:px-4 py-8 sm:py-12 lg:px-8">
                <div className="space-y-8 sm:space-y-12">
                    {/* Wprowadzenie */}
                    <section className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                        <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                                <FileText className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                                Wprowadzenie
                            </h2>
                        </div>
                        <div className="prose prose-gray max-w-none">
                            <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                                KBS Investment Sp. z o.o. z siedzibą w Chorzowie (dalej: &ldquo;my&rdquo;, &ldquo;nas&rdquo;, &ldquo;firma&rdquo;) szanuje prywatność
                                wszystkich osób odwiedzających naszą stronę internetową. Niniejsza Polityka Prywatności
                                wyjaśnia, w jaki sposób zbieramy, używamy i chronimy informacje o użytkownikach naszej strony.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                                <strong>Ważne:</strong> Ta strona internetowa <strong>nie używa plików cookie do śledzenia ani analityki</strong>.
                                Używamy jedynie localStorage do przechowywania Twoich preferencji (zgoda na politykę prywatności, stan interfejsu).
                                Wszystkie dane są przetwarzane lokalnie w Twojej przeglądarce i nie są wysyłane do żadnych zewnętrznych serwisów analitycznych.
                            </p>
                        </div>
                    </section>

                    {/* Administrator danych */}
                    <section className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                        <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                                <Users className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                                Administrator Danych
                            </h2>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Dane firmy:</h3>
                                    <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                                        <li className="flex items-center space-x-2">
                                            <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                                            <span>Nazwa: KBS Investment Sp. z o.o.</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                                            <span>NIP: 6272763146</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                                            <span>Adres: Ks. Augustyna Strzybnego 4, 41-506 Chorzów</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Kontakt:</h3>
                                    <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                                        <li className="flex items-center space-x-2">
                                            <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                                            <span>+48 570-751-670, +48 516-437-707</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                                            <span>kbsinvestment@interia.pl</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Zbieranie danych */}
                    <section className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                        <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                                <Eye className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                                Jakie Dane Zbieramy
                            </h2>
                        </div>
                        <div className="space-y-4 sm:space-y-6">
                            <div className="bg-green-50 border border-green-200 rounded-xl p-4 sm:p-6">
                                <h3 className="font-semibold text-green-900 mb-3 flex items-center space-x-2 text-sm sm:text-base">
                                    <span className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></span>
                                    <span>Dane niezbędne do świadczenia usług</span>
                                </h3>
                                <p className="text-green-800 mb-3 text-sm sm:text-base">
                                    Zbieramy tylko te dane, które są niezbędne do świadczenia naszych usług:
                                </p>
                                <ul className="space-y-2 text-green-800 text-sm sm:text-base">
                                    <li>• Imię i nazwisko</li>
                                    <li>• Adres e-mail</li>
                                    <li>• Numer telefonu</li>
                                    <li>• Adres realizacji inwestycji</li>
                                    <li>• Szczegóły projektu</li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-6">
                                <h3 className="font-semibold text-blue-900 mb-3 flex items-center space-x-2 text-sm sm:text-base">
                                    <span className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></span>
                                    <span>Dane przechowywane lokalnie</span>
                                </h3>
                                <p className="text-blue-800 mb-3 text-sm sm:text-base">
                                    W Twojej przeglądarce przechowujemy lokalnie (localStorage):
                                </p>
                                <ul className="space-y-2 text-blue-800 text-sm sm:text-base">
                                    <li>• Zgoda na politykę prywatności</li>
                                    <li>• Preferencje interfejsu użytkownika</li>
                                    <li>• Stan modali i okien dialogowych</li>
                                </ul>
                                <p className="text-blue-800 mt-3 text-xs sm:text-sm italic">
                                    Dane te są przechowywane tylko w Twojej przeglądarce i nie są wysyłane na nasze serwery.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Cel przetwarzania */}
                    <section className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                        <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                                <Lock className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                                Cel Przetwarzania Danych
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 sm:p-6">
                                <h3 className="font-semibold text-orange-900 mb-3 text-sm sm:text-base">Główne cele:</h3>
                                <ul className="space-y-2 text-orange-800 text-sm sm:text-base">
                                    <li>• Świadczenie usług instalacyjnych</li>
                                    <li>• Kontakt z klientami</li>
                                    <li>• Realizacja projektów</li>
                                    <li>• Faktury i rozliczenia</li>
                                    <li>• Odpowiedzi na zapytania ofertowe</li>
                                </ul>
                            </div>
                            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 sm:p-6">
                                <h3 className="font-semibold text-orange-900 mb-3 text-sm sm:text-base">Podstawa prawna:</h3>
                                <ul className="space-y-2 text-orange-800 text-sm sm:text-base">
                                    <li>• Wykonanie umowy (art. 6 ust. 1 lit. b RODO)</li>
                                    <li>• Uzasadniony interes (art. 6 ust. 1 lit. f RODO)</li>
                                    <li>• Zgoda (art. 6 ust. 1 lit. a RODO)</li>
                                    <li>• Obowiązek prawny (art. 6 ust. 1 lit. c RODO)</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Udostępnianie danych */}
                    <section className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Udostępnianie Danych
                        </h2>
                        <div className="bg-red-50 border border-red-200 rounded-xl p-4 sm:p-6">
                            <h3 className="font-semibold text-red-900 mb-3 text-sm sm:text-base">Zasady udostępniania:</h3>
                            <p className="text-red-800 mb-4 text-sm sm:text-base">
                                Twoje dane osobowe <strong>nie są sprzedawane, wynajmowane ani udostępniane </strong>
                                osobom trzecim, z wyjątkiem przypadków określonych w niniejszej polityce.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <h4 className="font-semibold text-red-900 mb-2 text-sm sm:text-base">Możemy udostępnić dane:</h4>
                                    <ul className="space-y-1 text-red-800 text-xs sm:text-sm">
                                        <li>• Podwykonawcom (za Twoją zgodą)</li>
                                        <li>• Organom prawnym (na żądanie)</li>
                                        <li>• W celu ochrony naszych praw</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-red-900 mb-2 text-sm sm:text-base">Nigdy nie udostępniamy:</h4>
                                    <ul className="space-y-1 text-red-800 text-xs sm:text-sm">
                                        <li>• Sprzedawcom danych</li>
                                        <li>• Firmom marketingowym</li>
                                        <li>• Bez Twojej zgody</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Bezpieczeństwo */}
                    <section className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Bezpieczeństwo Danych
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                            <div className="text-center">
                                <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 mx-auto mb-3 sm:mb-4">
                                    <Lock className="h-6 w-6 sm:h-8 sm:w-8" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Szyfrowanie</h3>
                                <p className="text-gray-600 text-xs sm:text-sm">
                                    Wszystkie dane są przesyłane przez bezpieczne połączenie HTTPS
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-green-100 text-green-600 mx-auto mb-3 sm:mb-4">
                                    <Shield className="h-6 w-6 sm:h-8 sm:w-8" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Ograniczony dostęp</h3>
                                <p className="text-gray-600 text-xs sm:text-sm">
                                    Dostęp do danych mają tylko upoważnione osoby
                                </p>
                            </div>
                            <div className="text-center sm:col-span-2 md:col-span-1">
                                <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 mx-auto mb-3 sm:mb-4">
                                    <Eye className="h-6 w-6 sm:h-8 sm:w-8" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Monitoring</h3>
                                <p className="text-gray-600 text-xs sm:text-sm">
                                    Ciągłe monitorowanie bezpieczeństwa systemów
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Prawa użytkownika */}
                    <section className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Twoje Prawa
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <div className="space-y-3 sm:space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold">
                                        ✓
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Prawo dostępu</h3>
                                        <p className="text-gray-600 text-xs sm:text-sm">Możesz poprosić o kopię swoich danych</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold">
                                        ✓
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Prawo do sprostowania</h3>
                                        <p className="text-gray-600 text-xs sm:text-sm">Możesz poprawić nieprawidłowe dane</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold">
                                        ✓
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Prawo do usunięcia</h3>
                                        <p className="text-gray-600 text-xs sm:text-sm">Możesz poprosić o usunięcie danych</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3 sm:space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold">
                                        ✓
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Prawo do ograniczenia</h3>
                                        <p className="text-gray-600 text-xs sm:text-sm">Możesz ograniczyć przetwarzanie</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold">
                                        ✓
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Prawo do przenoszenia</h3>
                                        <p className="text-gray-600 text-xs sm:text-sm">Możesz otrzymać dane w formacie cyfrowym</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold">
                                        ✓
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Prawo do sprzeciwu</h3>
                                        <p className="text-gray-600 text-xs sm:text-sm">Możesz sprzeciwić się przetwarzaniu</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Kontakt */}
                    <section className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Kontakt w Sprawach Ochrony Danych
                        </h2>
                        <div className="bg-gradient-to-r from-primary/5 to-blue-600/5 border border-primary/20 rounded-xl p-4 sm:p-6">
                            <p className="text-gray-700 mb-4 text-sm sm:text-base">
                                Jeśli masz pytania dotyczące przetwarzania Twoich danych osobowych lub chcesz skorzystać
                                ze swoich praw, skontaktuj się z nami:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Dane kontaktowe:</h3>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                                            <span className="text-gray-700 text-sm sm:text-base">kbsinvestment@interia.pl</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                                            <span className="text-gray-700 text-sm sm:text-base">+48 570-751-670, +48 516-437-707</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                                            <span className="text-gray-700 text-sm sm:text-base">Ks. Augustyna Strzybnego 4, 41-506 Chorzów</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Możesz również:</h3>
                                    <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                                        <li>• Wysłać list polecony</li>
                                        <li>• Skorzystać z formularza kontaktowego</li>
                                        <li>• Zgłosić się osobiście</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Aktualizacje */}
                    <section className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Aktualizacje Polityki
                        </h2>
                        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 sm:p-6">
                            <h3 className="font-semibold text-yellow-900 mb-3 text-sm sm:text-base">Ważne informacje:</h3>
                            <ul className="space-y-2 text-yellow-800 text-sm sm:text-base">
                                <li>• Ta polityka może być aktualizowana</li>
                                <li>• O zmianach poinformujemy Cię odpowiednio wcześnie</li>
                                <li>• Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}</li>
                                <li>• Wersja: 1.0</li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* Footer */}
                <div className="text-center mt-8 sm:mt-12">
                    <Link href="/">
                        <Button className="bg-gradient-to-r from-primary to-blue-600 text-white hover:from-primary/90 hover:to-blue-600/90 rounded-xl px-6 sm:px-8 py-2 sm:py-3 shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base">
                            ← Powrót do strony głównej
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
