"use client";

import { GSAPCard } from "@/components/gsap-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    Building2,
    Shield,
    Award,
    CheckCircle,
    AlertCircle
} from "lucide-react";

// Schema walidacji - maksymalnie uproszczona
const contactFormSchema = z.object({
    firstName: z.string().min(1, "Imię jest wymagane"),
    lastName: z.string().min(1, "Nazwisko jest wymagane"),
    email: z.string().email("Podaj poprawny adres email"),
    phone: z.string().optional(),
    service: z.string().min(1, "Wybierz rodzaj usługi"),
    message: z.string().min(1, "Wiadomość jest wymagana"),
    consent: z.boolean().refine((val) => val === true, {
        message: "Musisz wyrazić zgodę na przetwarzanie danych"
    })
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        mode: "onChange",
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            service: 'gas',
            message: '',
            consent: false
        }
    });

    const onSubmit = async (data: ContactFormData) => {
        console.log('Form data:', data);
        setIsSubmitting(true);
        setSubmitStatus('submitting');

        try {
            // Przygotowanie danych
            const formData = {
                'form-name': 'contact',
                'name': `${data.firstName} ${data.lastName}`,
                'email': data.email,
                'phone': data.phone || '',
                'service': data.service,
                'message': data.message,
                'consent': data.consent ? 'true' : 'false'
            };

            console.log('Sending data:', formData);

            // Wysyłanie przez Netlify Forms
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData)
            });

            console.log('Response status:', response.status);

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            setSubmitStatus('success');
            reset();

            // Reset statusu po 5 sekundach
            setTimeout(() => setSubmitStatus('idle'), 5000);

        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');

            // Reset statusu po 5 sekundach
            setTimeout(() => setSubmitStatus('idle'), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const watchedConsent = watch('consent');

    return (
        <section id="kontakt" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                {/* Header */}
                <GSAPCard className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                        Skontaktuj się z <span className="text-primary">nami</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
                        Jesteśmy gotowi odpowiedzieć na wszystkie Twoje pytania i pomóc w realizacji projektu.
                        Skontaktuj się z nami już dziś!
                    </p>
                </GSAPCard>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
                    {/* Contact Form */}
                    <GSAPCard delay={0.1} className="lg:pr-0 lg:pr-8">
                        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-white/20">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Wyślij wiadomość</h3>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg animate-in fade-in slide-in-from-top-2 duration-300">
                                    <div className="flex items-start gap-2 sm:gap-3">
                                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="text-green-800 font-semibold mb-1 text-sm sm:text-base">
                                                Wiadomość wysłana pomyślnie! ✅
                                            </h4>
                                            <p className="text-green-700 text-xs sm:text-sm">
                                                Dziękujemy za kontakt! Otrzymaliśmy Twoje zapytanie i odpowiemy w ciągu 24-48 godzin.
                                                Sprawdź swoją skrzynkę email - wysłaliśmy mail potwierdzający.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg animate-in fade-in slide-in-from-top-2 duration-300">
                                    <div className="flex items-start gap-2 sm:gap-3">
                                        <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="text-red-800 font-semibold mb-1 text-sm sm:text-base">
                                                Błąd wysyłania wiadomości ❌
                                            </h4>
                                            <p className="text-red-700 text-xs sm:text-sm">
                                                Wystąpił problem podczas wysyłania wiadomości. Sprawdź połączenie internetowe i spróbuj ponownie.
                                                Jeśli problem się powtarza, skontaktuj się z nami bezpośrednio.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6" name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
                                {/* Ukryte pole honeypot dla Netlify */}
                                <div style={{ display: 'none' }}>
                                    <label>Nie wypełniaj tego pola: <input name="bot-field" /></label>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                                    <div>
                                        <Label htmlFor="firstName" className="text-gray-700 font-medium text-sm sm:text-base">
                                            Imię *
                                        </Label>
                                        <Input
                                            id="firstName"
                                            placeholder="Twoje imię"
                                            className={`mt-2 border-gray-200 focus:border-primary focus:ring-primary text-sm sm:text-base ${errors.firstName ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''
                                                }`}
                                            {...register('firstName')}
                                        />
                                        {errors.firstName && (
                                            <p className="mt-1 text-xs sm:text-sm text-red-600 flex items-center gap-1">
                                                <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                                                {errors.firstName.message}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <Label htmlFor="lastName" className="text-gray-700 font-medium text-sm sm:text-base">
                                            Nazwisko *
                                        </Label>
                                        <Input
                                            id="lastName"
                                            placeholder="Twoje nazwisko"
                                            className={`mt-2 border-gray-200 focus:border-primary focus:ring-primary text-sm sm:text-base ${errors.lastName ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''
                                                }`}
                                            {...register('lastName')}
                                        />
                                        {errors.lastName && (
                                            <p className="mt-1 text-xs sm:text-sm text-red-600 flex items-center gap-1">
                                                <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                                                {errors.lastName.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="email" className="text-gray-700 font-medium text-sm sm:text-base">
                                        Email *
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="twoj@email.com"
                                        className={`mt-2 border-gray-200 focus:border-primary focus:ring-primary text-sm sm:text-base ${errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''
                                            }`}
                                        {...register('email')}
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-xs sm:text-sm text-red-600 flex items-center gap-1">
                                            <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <Label htmlFor="phone" className="text-gray-700 font-medium text-sm sm:text-base">
                                        Telefon
                                    </Label>
                                    <Input
                                        id="phone"
                                        placeholder="+48 123 456 789"
                                        className={`mt-2 border-gray-200 focus:border-primary focus:ring-primary text-sm sm:text-base ${errors.phone ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''
                                            }`}
                                        {...register('phone')}
                                    />
                                    {errors.phone && (
                                        <p className="mt-1 text-xs sm:text-sm text-red-600 flex items-center gap-1">
                                            <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                                            {errors.phone.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <Label htmlFor="service" className="text-gray-700 font-medium text-sm sm:text-base">
                                        Rodzaj usługi *
                                    </Label>
                                    <select
                                        id="service"
                                        className={`mt-2 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white text-sm sm:text-base ${errors.service
                                            ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                                            : 'border-gray-200 focus:border-primary focus:ring-primary'
                                            }`}
                                        {...register('service')}
                                    >
                                        <option value="gas">Instalacje gazowe</option>
                                        <option value="heating">Instalacje grzewcze</option>
                                        <option value="water">Woda i kanalizacja</option>
                                        <option value="electrical">Instalacje elektryczne</option>
                                        <option value="ventilation">Wentylacja i klimatyzacja</option>
                                        <option value="maintenance">Konserwacja i serwis</option>
                                        <option value="inventory">Inwentaryzacja</option>
                                        <option value="welding">Spawanie i montaż</option>
                                        <option value="supervision">Eksploatacja i nadzór</option>
                                        <option value="other">Inne</option>
                                    </select>
                                    {errors.service && (
                                        <p className="mt-1 text-xs sm:text-sm text-red-600 flex items-center gap-1">
                                            <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                                            {errors.service.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <Label htmlFor="message" className="text-gray-700 font-medium text-sm sm:text-base">
                                        Wiadomość *
                                    </Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Opisz swój projekt lub pytanie..."
                                        rows={4}
                                        className={`mt-2 border-gray-200 focus:border-primary focus:ring-primary resize-none text-sm sm:text-base ${errors.message ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''
                                            }`}
                                        {...register('message')}
                                    />
                                    {errors.message && (
                                        <p className="mt-1 text-xs sm:text-sm text-red-600 flex items-center gap-1">
                                            <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                                            {errors.message.message}
                                        </p>
                                    )}
                                </div>

                                <div className="flex items-start space-x-3">
                                    <Checkbox
                                        id="consent"
                                        className="mt-1 border-gray-300 focus:ring-primary"
                                        checked={watchedConsent}
                                        onCheckedChange={(checked) => {
                                            register('consent').onChange({ target: { value: checked } });
                                        }}
                                    />
                                    <div className="flex-1">
                                        <Label htmlFor="consent" className="text-xs sm:text-sm text-gray-600">
                                            Wyrażam zgodę na przetwarzanie moich danych osobowych w celu kontaktu *
                                        </Label>
                                        {errors.consent && (
                                            <p className="mt-1 text-xs sm:text-sm text-red-600 flex items-center gap-1">
                                                <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                                                {errors.consent.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-primary to-blue-600 text-white hover:from-primary/90 hover:to-blue-600/90 h-10 sm:h-12 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            Wysyłanie wiadomości...
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2">
                                            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                                            Wyślij wiadomość
                                        </div>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </GSAPCard>

                    {/* Contact Info */}
                    <GSAPCard delay={0.2} className="lg:pl-0 lg:pl-8">
                        {/* Company Info */}
                        <div className="space-y-6 sm:space-y-8">
                            {/* Contact Details */}
                            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-white/20">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Dane kontaktowe</h3>

                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                                            <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900 text-sm sm:text-base">+48 570-751-670, +48 516-437-707</p>
                                            <p className="text-xs sm:text-sm text-gray-600">Pon-Pt: 8:00-18:00</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                                            <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900 text-sm sm:text-base">kbsinvestment@interia.pl</p>
                                            <p className="text-xs sm:text-sm text-gray-600">Odpowiemy w ciągu 24h</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                                            <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900 text-sm sm:text-base">ul. Ks. Augustyna Strzybnego 4</p>
                                            <p className="text-xs sm:text-sm text-gray-600">41-506 Chorzów, Polska</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                                            <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900 text-sm sm:text-base">Godziny pracy</p>
                                            <p className="text-xs sm:text-sm text-gray-600">Pon-Pt: 8:00-16:00, Sob: 8:00-13:00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Company Details */}
                            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-white/20">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Informacje o firmie</h3>

                                <div className="space-y-4 sm:space-y-6">
                                    <div className="flex items-start gap-3 sm:gap-4">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Building2 className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">KBS Investment Sp. z o.o.</h4>
                                            <p className="text-gray-600 text-xs sm:text-sm">Firma specjalizująca się w kompleksowych usługach instalacyjnych</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 sm:gap-4">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Award className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Certyfikacje</h4>
                                            <p className="text-gray-600 text-xs sm:text-sm">Posiadamy wszystkie wymagane certyfikaty i uprawnienia</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 sm:gap-4">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Gwarancja</h4>
                                            <p className="text-gray-600 text-xs sm:text-sm">Każda realizacja objęta jest pełną gwarancją jakości</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </GSAPCard>
                </div>
            </div>
        </section>
    );
}
