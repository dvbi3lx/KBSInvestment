import { Metadata } from "next";
import { FileText, Building2, Phone, Mail, MapPin, Shield, Users, Award, Clock, CheckCircle, AlertTriangle, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Regulamin - KBS Investment Sp. z o.o.",
    description: "Regulamin strony internetowej KBS Investment Sp. z o.o. Zasady korzystania z serwisu i warunki świadczenia usług instalacyjnych.",
    keywords: "regulamin, zasady, warunki, usługi, KBS Investment",
};

export default function Regulamin() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="mx-auto max-w-4xl px-3 sm:px-4 py-6 sm:py-8 lg:px-8">
                    <div className="text-center">
                        <div className="flex justify-center mb-4 sm:mb-6">
                            <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-blue-600 text-white shadow-xl">
                                <FileText className="h-8 w-8 sm:h-10 sm:w-10" />
                            </div>
                        </div>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                            Regulamin Strony Internetowej
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-2 sm:px-0">
                            Zasady korzystania z serwisu internetowego oraz warunki świadczenia usług instalacyjnych
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
                    {/* Postanowienia ogólne */}
                    <section className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                        <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                                <Building2 className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                                §1. Postanowienia Ogólne
                            </h2>
                        </div>
                        <div className="prose prose-gray max-w-none">
                            <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                                Niniejszy regulamin określa zasady korzystania ze strony internetowej KBS Investment Sp. z o.o.
                                oraz warunki świadczenia usług instalacyjnych przez naszą firmę.
                            </p>
                            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-6">
                                <h3 className="font-semibold text-blue-900 mb-3 text-sm sm:text-base">Dane firmy:</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <Building2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                                            <span className="text-blue-800 text-sm sm:text-base">Nazwa: KBS Investment Sp. z o.o.</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                                            <span className="text-blue-800 text-sm sm:text-base">Adres: Ks. Augustyna Strzybnego 4, 41-506 Chorzów</span>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <Shield className="h-4 w-4 text-blue-600 flex-shrink-0" />
                                            <span className="text-blue-800 text-sm sm:text-base">NIP: 6272763146</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Phone className="h-4 w-4 text-blue-600 flex-shrink-0" />
                                            <span className="text-blue-800 text-sm sm:text-base">+48 570-751-670, +48 516-437-707</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Definicje */}
                    <section className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                        <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                                <FileText className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                                §2. Definicje
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <div className="space-y-3 sm:space-y-4">
                                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                                    <h3 className="font-semibold text-green-900 mb-2 text-sm sm:text-base">Strona</h3>
                                    <p className="text-green-800 text-sm">
                                        Strona internetowa kbsinvestment.pl oraz wszystkie jej podstrony
                                    </p>
                                </div>
                                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                                    <h3 className="font-semibold text-green-900 mb-2 text-sm sm:text-base">Użytkownik</h3>
                                    <p className="text-green-800 text-sm">
                                        Osoba fizyczna lub prawna korzystająca ze strony internetowej
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-3 sm:space-y-4">
                                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                                    <h3 className="font-semibold text-green-900 mb-2 text-sm sm:text-base">Usługi</h3>
                                    <p className="text-green-800 text-sm">
                                        Usługi instalacyjne świadczone przez KBS Investment Sp. z o.o.
                                    </p>
                                </div>
                                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                                    <h3 className="font-semibold text-green-900 mb-2 text-sm sm:text-base">Formularz kontaktowy</h3>
                                    <p className="text-green-800 text-sm">
                                        Formularz dostępny na stronie do składania zapytań o usługi
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Zakres regulaminu */}
                    <section className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                        <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                                <Scale className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                                §3. Zakres Regulaminu
                            </h2>
                        </div>
                        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 sm:p-6">
                            <p className="text-purple-800 mb-3 sm:mb-4 text-sm sm:text-base">
                                Regulamin określa zasady korzystania ze strony internetowej oraz warunki świadczenia usług:
                            </p>
                            <ul className="space-y-2 text-purple-800 text-sm sm:text-base">
                                <li className="flex items-start space-x-2">
                                    <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                                    <span>Zasady korzystania ze strony internetowej</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                                    <span>Warunki świadczenia usług instalacyjnych</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                                    <span>Prawa i obowiązki użytkowników</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                                    <span>Procedury składania zamówień i zapytań</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Zasady korzystania */}
                    <section className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                        <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                                <Users className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                                §4. Zasady Korzystania ze Strony
                            </h2>
                        </div>
                        <div className="space-y-3 sm:space-y-4">
                            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                                <h3 className="font-semibold text-orange-900 mb-2 text-sm sm:text-base">Cel strony</h3>
                                <p className="text-orange-800 text-sm">
                                    Strona jest przeznaczona do celów informacyjnych i handlowych, prezentowania oferty usług
                                    oraz umożliwienia kontaktu z firmą.
                                </p>
                            </div>
                            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                                <h3 className="font-semibold text-orange-900 mb-2 text-sm sm:text-base">Ograniczenia</h3>
                                <p className="text-orange-800 text-sm">
                                    Zabronione jest nieautoryzowane kopiowanie treści, wykorzystywanie w celach komercyjnych
                                    oraz działania mogące zakłócić funkcjonowanie strony.
                                </p>
                            </div>
                            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                                <h3 className="font-semibold text-orange-900 mb-2 text-sm sm:text-base">Odpowiedzialność użytkownika</h3>
                                <p className="text-orange-800 text-sm">
                                    Użytkownik zobowiązuje się do korzystania ze strony zgodnie z obowiązującym prawem
                                    oraz niniejszym regulaminem.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Usługi i oferty */}
                    <section className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                        <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                                <Award className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                                §5. Usługi i Oferty
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
                                <h3 className="font-semibold text-indigo-900 mb-3 text-sm sm:text-base">Charakter ofert</h3>
                                <ul className="space-y-2 text-indigo-800 text-sm">
                                    <li>• Strona prezentuje oferty usług instalacyjnych</li>
                                    <li>• Oferty mają charakter informacyjny</li>
                                    <li>• Ceny mogą ulegać zmianom</li>
                                    <li>• Szczegółowe warunki ustalane indywidualnie</li>
                                </ul>
                            </div>
                            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
                                <h3 className="font-semibold text-indigo-900 mb-3 text-sm sm:text-base">Rodzaje usług</h3>
                                <ul className="space-y-2 text-indigo-800 text-sm">
                                    <li>• Instalacje gazowe i grzewcze</li>
                                    <li>• Instalacje wodno-kanalizacyjne</li>
                                    <li>• Instalacje elektryczne</li>
                                    <li>• Systemy wentylacji i klimatyzacji</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Formularz kontaktowy */}
                    <section className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                        <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-600">
                                <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                                §6. Formularz Kontaktowy
                            </h2>
                        </div>
                        <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                <div>
                                    <h3 className="font-semibold text-teal-900 mb-3 text-sm sm:text-base">Funkcje formularza:</h3>
                                    <ul className="space-y-2 text-teal-800 text-sm">
                                        <li>• Służy do składania zapytań o usługi</li>
                                        <li>• Wymagane podanie danych kontaktowych</li>
                                        <li>• Odpowiedź w ciągu 24-48 godzin</li>
                                        <li>• Dane przetwarzane zgodnie z polityką prywatności</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-teal-900 mb-3 text-sm sm:text-base">Wymagane dane:</h3>
                                    <ul className="space-y-2 text-teal-800 text-sm">
                                        <li>• Imię i nazwisko</li>
                                        <li>• Adres e-mail</li>
                                        <li>• Numer telefonu</li>
                                        <li>• Opis projektu/usługi</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Procedura zamawiania */}
                    <section className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                        <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-red-100 text-red-600">
                                <Clock className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                                §7. Procedura Zamawiania
                            </h2>
                        </div>
                        <div className="space-y-3 sm:space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 sm:gap-4">
                                <div className="text-center">
                                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-red-100 text-red-600 mx-auto mb-3 text-sm sm:text-base">
                                        <span className="font-bold text-lg">1</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Kontakt</h3>
                                    <p className="text-gray-600 text-xs sm:text-sm">
                                        Telefonicznie lub przez formularz
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-red-100 text-red-600 mx-auto mb-3 text-sm sm:text-base">
                                        <span className="font-bold text-lg">2</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Wycena</h3>
                                    <p className="text-gray-600 text-xs sm:text-sm">
                                        Wycena po przeanalizowaniu projektu
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-red-100 text-red-600 mx-auto mb-3 text-sm sm:text-base">
                                        <span className="font-bold text-lg">3</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Umowa</h3>
                                    <p className="text-gray-600 text-xs sm:text-sm">
                                        Podpisanie umowy o świadczenie usług
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-red-100 text-red-600 mx-auto mb-3 text-sm sm:text-base">
                                        <span className="font-bold text-lg">4</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Realizacja</h3>
                                    <p className="text-gray-600 text-xs sm:text-sm">
                                        Wykonanie prac zgodnie z umową
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-red-100 text-red-600 mx-auto mb-3 text-sm sm:text-base">
                                        <span className="font-bold text-lg">5</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Odbiór</h3>
                                    <p className="text-gray-600 text-xs sm:text-sm">
                                        Odbiór techniczny i rozliczenie
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Gwarancje i reklamacje */}
                    <section className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                        <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600">
                                <Shield className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                                §8. Gwarancje i Reklamacje
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                                <h3 className="font-semibold text-yellow-900 mb-3 text-sm sm:text-base">Gwarancje:</h3>
                                <ul className="space-y-2 text-yellow-800 text-sm">
                                    <li>• Gwarancja na materiały i wykonanie</li>
                                    <li>• Termin gwarancyjny: 24-60 miesięcy</li>
                                    <li>• Gwarancja zgodna z przepisami prawa oraz sztuki budowlanej</li>
                                    <li>• Dokumentacja gwarancyjna</li>
                                </ul>
                            </div>
                            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                                <h3 className="font-semibold text-yellow-900 mb-3 text-sm sm:text-base">Reklamacje:</h3>
                                <ul className="space-y-2 text-yellow-800 text-sm">
                                    <li>• Reklamacje rozpatrywane w ciągu 14 dni</li>
                                    <li>• Procedura reklamacyjna dostępna na życzenie</li>
                                    <li>• Formularz reklamacyjny</li>
                                    <li>• Odpowiedź pisemna</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Odpowiedzialność */}
                    <section className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                        <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-600">
                                <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                                §9. Odpowiedzialność
                            </h2>
                        </div>
                        <div className="space-y-3 sm:space-y-4">
                            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Odpowiedzialność firmy:</h3>
                                <p className="text-gray-700 text-sm">
                                    Firma odpowiada za jakość świadczonych usług, terminowość wykonania oraz
                                    zgodność z umową i przepisami prawa oraz sztuki budowlanej.
                                </p>
                            </div>
                            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Odpowiedzialność użytkownika:</h3>
                                <p className="text-gray-700 text-sm">
                                    Użytkownik odpowiada za prawdziwość podanych danych, terminowość płatności
                                    oraz współpracę w realizacji projektu.
                                </p>
                            </div>
                            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Ograniczenia:</h3>
                                <p className="text-gray-700 text-sm">
                                    Firma nie odpowiada za szkody pośrednie, utracone korzyści oraz szkody
                                    wynikające z siły wyższej. Odpowiedzialność ograniczona do wartości umowy.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Postanowienia końcowe */}
                    <section className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                        <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                                <FileText className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                                §10. Postanowienia Końcowe
                            </h2>
                        </div>
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                <div>
                                    <h3 className="font-semibold text-blue-900 mb-3 text-sm sm:text-base">Wejście w życie:</h3>
                                    <ul className="space-y-2 text-blue-800 text-sm">
                                        <li>• Regulamin wchodzi w życie z dniem publikacji</li>
                                        <li>• Zmiany regulaminu ogłaszane na stronie</li>
                                        <li>• Aktualna wersja zawsze dostępna online</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-blue-900 mb-3 text-sm sm:text-base">Rozstrzyganie sporów:</h3>
                                    <ul className="space-y-2 text-blue-800 text-sm">
                                        <li>• W sprawach nieuregulowanych - przepisy prawa polskiego</li>
                                        <li>• Sąd właściwy: Sąd Rejonowy w Chorzowie</li>
                                        <li>• Prawo właściwe: prawo polskie</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Kontakt */}
                    <section className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Kontakt w Sprawach Regulaminowych
                        </h2>
                        <div className="bg-gradient-to-r from-primary/5 to-blue-600/5 border border-primary/20 rounded-xl p-4">
                            <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                                Jeśli masz pytania dotyczące regulaminu lub chcesz zgłosić uwagi, skontaktuj się z nami:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Dane kontaktowe:</h3>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <Mail className="h-4 w-4 text-primary" />
                                            <span className="text-gray-700 text-sm">kbsinvestment@interia.pl</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Phone className="h-4 w-4 text-primary" />
                                            <span className="text-gray-700 text-sm">+48 570-751-670, +48 516-437-707</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <MapPin className="h-4 w-4 text-primary" />
                                            <span className="text-gray-700 text-sm">Ks. Augustyna Strzybnego 4, 41-506 Chorzów</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Godziny pracy:</h3>
                                    <ul className="space-y-2 text-gray-700 text-sm">
                                        <li>• Poniedziałek - Piątek: 8:00 - 16:00</li>
                                        <li>• Sobota: 8:00 - 13:00</li>
                                        <li>• Niedziela: nieczynne</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Aktualizacje */}
                    <section className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Aktualizacje Regulaminu
                        </h2>
                        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                            <h3 className="font-semibold text-yellow-900 mb-3 text-sm sm:text-base">Ważne informacje:</h3>
                            <ul className="space-y-2 text-yellow-800 text-sm">
                                <li>• Ten regulamin może być aktualizowany</li>
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
                        <Button className="bg-gradient-to-r from-primary to-blue-600 text-white hover:from-primary/90 hover:to-blue-600/90 rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300">
                            ← Powrót do strony głównej
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
