"use client";

import { motion } from "motion/react";
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

// Schema walidacji
const contactFormSchema = z.object({
    firstName: z.string()
        .min(2, "Imię musi mieć co najmniej 2 znaki")
        .max(50, "Imię nie może przekraczać 50 znaków")
        .regex(/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s]+$/, "Imię może zawierać tylko litery"),

    lastName: z.string()
        .min(2, "Nazwisko musi mieć co najmniej 2 znaki")
        .max(50, "Nazwisko nie może przekraczać 50 znaków")
        .regex(/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s-]+$/, "Nazwisko może zawierać tylko litery, spacje i myślniki"),

    email: z.string()
        .email("Podaj poprawny adres email")
        .min(5, "Email musi mieć co najmniej 5 znaków")
        .max(100, "Email nie może przekraczać 100 znaków"),

    phone: z.string()
        .optional()
        .refine((val) => !val || /^[\+]?[0-9\s\-\(\)]{9,15}$/.test(val), {
            message: "Podaj poprawny numer telefonu"
        }),

    service: z.string()
        .min(1, "Wybierz rodzaj usługi"),

    message: z.string()
        .min(10, "Wiadomość musi mieć co najmniej 10 znaków")
        .max(1000, "Wiadomość nie może przekraczać 1000 znaków"),

    consent: z.boolean()
        .refine((val) => val === true, {
            message: "Musisz wyrazić zgodę na przetwarzanie danych"
        })
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid },
        reset,
        watch
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        mode: "onChange"
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Symulacja wysyłania formularza
            await new Promise(resolve => setTimeout(resolve, 2000));

            console.log('Form data:', data);

            // Tutaj można dodać rzeczywiste API call
            // await fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(data)
            // });

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
        <section id="kontakt" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
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
                        Skontaktuj się z <span className="text-primary">nami</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Jesteśmy gotowi odpowiedzieć na wszystkie Twoje pytania i pomóc w realizacji projektu.
                        Skontaktuj się z nami już dziś!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:pr-8"
                    >
                        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-white/20">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Wyślij wiadomość</h3>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
                                >
                                    <CheckCircle className="h-5 w-5 text-green-600" />
                                    <span className="text-green-800 font-medium">
                                        Wiadomość została wysłana pomyślnie! Odpowiemy w ciągu 24 godzin.
                                    </span>
                                </motion.div>
                            )}

                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3"
                                >
                                    <AlertCircle className="h-5 w-5 text-red-600" />
                                    <span className="text-red-800 font-medium">
                                        Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.
                                    </span>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="firstName" className="text-gray-700 font-medium">
                                            Imię *
                                        </Label>
                                        <Input
                                            id="firstName"
                                            placeholder="Twoje imię"
                                            className={`mt-2 border-gray-200 focus:border-primary focus:ring-primary ${errors.firstName ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''
                                                }`}
                                            {...register('firstName')}
                                        />
                                        {errors.firstName && (
                                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                                <AlertCircle className="h-4 w-4" />
                                                {errors.firstName.message}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <Label htmlFor="lastName" className="text-gray-700 font-medium">
                                            Nazwisko *
                                        </Label>
                                        <Input
                                            id="lastName"
                                            placeholder="Twoje nazwisko"
                                            className={`mt-2 border-gray-200 focus:border-primary focus:ring-primary ${errors.lastName ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''
                                                }`}
                                            {...register('lastName')}
                                        />
                                        {errors.lastName && (
                                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                                <AlertCircle className="h-4 w-4" />
                                                {errors.lastName.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="email" className="text-gray-700 font-medium">
                                        Email *
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="twoj@email.com"
                                        className={`mt-2 border-gray-200 focus:border-primary focus:ring-primary ${errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''
                                            }`}
                                        {...register('email')}
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                            <AlertCircle className="h-4 w-4" />
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <Label htmlFor="phone" className="text-gray-700 font-medium">
                                        Telefon
                                    </Label>
                                    <Input
                                        id="phone"
                                        placeholder="+48 123 456 789"
                                        className={`mt-2 border-gray-200 focus:border-primary focus:ring-primary ${errors.phone ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''
                                            }`}
                                        {...register('phone')}
                                    />
                                    {errors.phone && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                            <AlertCircle className="h-4 w-4" />
                                            {errors.phone.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <Label htmlFor="service" className="text-gray-700 font-medium">
                                        Rodzaj usługi *
                                    </Label>
                                    <select
                                        id="service"
                                        className={`mt-2 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white ${errors.service
                                            ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                                            : 'border-gray-200 focus:border-primary focus:ring-primary'
                                            }`}
                                        {...register('service')}
                                    >
                                        <option value="">Wybierz rodzaj usługi</option>
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
                                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                            <AlertCircle className="h-4 w-4" />
                                            {errors.service.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <Label htmlFor="message" className="text-gray-700 font-medium">
                                        Wiadomość *
                                    </Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Opisz swój projekt lub pytanie..."
                                        rows={4}
                                        className={`mt-2 border-gray-200 focus:border-primary focus:ring-primary resize-none ${errors.message ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''
                                            }`}
                                        {...register('message')}
                                    />
                                    {errors.message && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                            <AlertCircle className="h-4 w-4" />
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
                                            // @ts-ignore - react-hook-form expects this
                                            register('consent').onChange({ target: { value: checked } });
                                        }}
                                    />
                                    <div className="flex-1">
                                        <Label htmlFor="consent" className="text-sm text-gray-600">
                                            Wyrażam zgodę na przetwarzanie moich danych osobowych w celu kontaktu *
                                        </Label>
                                        {errors.consent && (
                                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                                <AlertCircle className="h-4 w-4" />
                                                {errors.consent.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting || !isDirty || !isValid}
                                    className="w-full bg-gradient-to-r from-primary to-blue-600 text-white hover:from-primary/90 hover:to-blue-600/90 h-12 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                            Wysyłanie...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="mr-2 h-5 w-5" />
                                            Wyślij wiadomość
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="lg:pl-8"
                    >
                        {/* Company Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-8"
                        >
                            {/* Contact Details */}
                            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-white/20">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Dane kontaktowe</h3>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                                            <Phone className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">+48 123 456 789</p>
                                            <p className="text-sm text-gray-600">Pon-Pt: 8:00-18:00</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                                            <Mail className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">kontakt@kbsinvestment.pl</p>
                                            <p className="text-sm text-gray-600">Odpowiemy w ciągu 24h</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                                            <MapPin className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">ul. Przykładowa 123</p>
                                            <p className="text-sm text-gray-600">00-000 Warszawa, Polska</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                                            <Clock className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">Godziny pracy</p>
                                            <p className="text-sm text-gray-600">Pon-Pt: 8:00-18:00, Sob: 9:00-14:00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Company Details */}
                            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-white/20">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informacje o firmie</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Building2 className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">KBS Investment Sp. z o.o.</h4>
                                            <p className="text-gray-600">Firma specjalizująca się w kompleksowych usługach instalacyjnych</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Shield className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">NIP</h4>
                                            <p className="text-gray-600">123-456-78-90</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Award className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Certyfikacje</h4>
                                            <p className="text-gray-600">Posiadamy wszystkie wymagane certyfikaty i uprawnienia</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Shield className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Gwarancja</h4>
                                            <p className="text-gray-600">Każda realizacja objęta jest pełną gwarancją jakości</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
