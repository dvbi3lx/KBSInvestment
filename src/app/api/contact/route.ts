import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, service, message } = body;

        // Walidacja danych
        if (!name || !email || !phone || !service || !message) {
            return NextResponse.json(
                { error: 'Wszystkie pola są wymagane' },
                { status: 400 }
            );
        }

        // Walidacja emaila
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Nieprawidłowy format adresu email' },
                { status: 400 }
            );
        }

        // Funkcja do wysyłania maila z fallback na różne porty
        const sendEmailWithFallback = async (mailOptions: nodemailer.SendMailOptions) => {
            const ports = [587, 465, 25]; // Porty do wypróbowania

            for (const port of ports) {
                try {
                    const config = {
                        host: 'smtp.office365.com',
                        port: port,
                        secure: port === 465, // SSL dla portu 465
                        auth: {
                            user: process.env.EMAIL_USER,
                            pass: process.env.EMAIL_PASS
                        },
                        tls: {
                            ciphers: 'SSLv3',
                            rejectUnauthorized: false
                        },
                        connectionTimeout: 30000,
                        greetingTimeout: 15000,
                        socketTimeout: 30000
                    };

                    const transporter = nodemailer.createTransport(config);
                    await transporter.sendMail(mailOptions);
                    console.log(`Mail wysłany pomyślnie przez port ${port}`);
                    return true;
                } catch (error) {
                    const errorMessage = error instanceof Error ? error.message : 'Nieznany błąd';
                    console.log(`Błąd na porcie ${port}:`, errorMessage);
                    if (port === ports[ports.length - 1]) {
                        throw error; // Ostatni port - rzuć błąd
                    }
                    continue; // Spróbuj następny port
                }
            }
        };

        // Treść maila
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Wysyłamy na nasz email
            subject: `Nowe zapytanie - ${service} - KBS Investment Sp. z o.o.`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
                        <h1 style="margin: 0; font-size: 24px;">Nowe Zapytanie - KBS Investment Sp. z o.o.</h1>
                    </div>
                    
                    <div style="padding: 20px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0 0 10px 10px;">
                        <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                            <h2 style="color: #1e293b; margin-top: 0;">Szczegóły zapytania:</h2>
                            
                            <div style="margin-bottom: 15px;">
                                <strong style="color: #3b82f6;">Usługa:</strong>
                                <span style="color: #475569; margin-left: 10px;">${service}</span>
                            </div>
                            
                            <div style="margin-bottom: 15px;">
                                <strong style="color: #3b82f6;">Imię i nazwisko:</strong>
                                <span style="color: #475569; margin-left: 10px;">${name}</span>
                            </div>
                            
                            <div style="margin-bottom: 15px;">
                                <strong style="color: #3b82f6;">Email:</strong>
                                <span style="color: #475569; margin-left: 10px;">${email}</span>
                            </div>
                            
                            <div style="margin-bottom: 15px;">
                                <strong style="color: #3b82f6;">Telefon:</strong>
                                <span style="color: #475569; margin-left: 10px;">${phone}</span>
                            </div>
                            
                            <div style="margin-bottom: 15px;">
                                <strong style="color: #3b82f6;">Wiadomość:</strong>
                                <div style="color: #475569; margin-top: 10px; padding: 15px; background: #f1f5f9; border-radius: 5px; white-space: pre-wrap;">${message}</div>
                            </div>
                        </div>
                        
                        <div style="background: #eff6ff; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                            <p style="margin: 0; color: #1e40af; font-size: 14px;">
                                <strong>Data otrzymania:</strong> ${new Date().toLocaleString('pl-PL')}
                            </p>
                        </div>
                        
                        <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                            <p style="color: #64748b; font-size: 12px; margin: 0;">
                                To jest automatyczna wiadomość z formularza kontaktowego strony KBS Investment Sp. z o.o.
                            </p>
                        </div>
                    </div>
                </div>
            `,
            text: `
Nowe zapytanie - KBS Investment Sp. z o.o.

Usługa: ${service}
Imię i nazwisko: ${name}
Email: ${email}
Telefon: ${phone}

Wiadomość:
${message}

Data otrzymania: ${new Date().toLocaleString('pl-PL')}
            `
        };

        // Wysyłanie maila
        await sendEmailWithFallback(mailOptions);

        // Mail potwierdzający dla klienta
        const confirmationMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Potwierdzenie zapytania - KBS Investment Sp. z o.o.',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
                        <h1 style="margin: 0; font-size: 24px;">Dziękujemy za zapytanie!</h1>
                    </div>
                    
                    <div style="padding: 20px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0 0 10px 10px;">
                        <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                            <p style="color: #1e293b; font-size: 16px; line-height: 1.6;">
                                Cześć <strong>${name}</strong>!
                            </p>
                            
                            <p style="color: #475569; font-size: 16px; line-height: 1.6;">
                                Dziękujemy za przesłanie zapytania dotyczącego usługi <strong>${service}</strong>. 
                                Nasz zespół przeanalizuje Twoje wymagania i skontaktuje się z Tobą w ciągu 24-48 godzin.
                            </p>
                            
                            <div style="background: #eff6ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
                                <h3 style="color: #1e40af; margin-top: 0;">Podsumowanie zapytania:</h3>
                                <p style="color: #475569; margin: 0;"><strong>Usługa:</strong> ${service}</p>
                                <p style="color: #475569; margin: 5px 0;"><strong>Data:</strong> ${new Date().toLocaleDateString('pl-PL')}</p>
                            </div>
                            
                            <p style="color: #475569; font-size: 16px; line-height: 1.6;">
                                W międzyczasie możesz skontaktować się z nami bezpośrednio:
                            </p>
                            
                            <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; border-left: 4px solid #22c55e;">
                                <p style="margin: 0; color: #166534;">
                                    <strong>Telefon:</strong> +48 570-751-670<br>
                                    <strong>Email:</strong> kontakt@kbs-investment.pl<br>
                                    <strong>Adres:</strong> Ks. Augustyna Strzybnego 4, 41-506 Chorzów
                                </p>
                            </div>
                        </div>
                        
                        <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                            <p style="color: #64748b; font-size: 12px; margin: 0;">
                                KBS Investment Sp. z o.o. - Profesjonalne usługi instalacyjne
                            </p>
                        </div>
                    </div>
                </div>
            `,
            text: `
Dziękujemy za zapytanie!

Cześć ${name}!

Dziękujemy za przesłanie zapytania dotyczącego usługi ${service}. 
Nasz zespół przeanalizuje Twoje wymagania i skontaktuje się z Tobą w ciągu 24-48 godzin.

Podsumowanie zapytania:
- Usługa: ${service}
- Data: ${new Date().toLocaleDateString('pl-PL')}

Kontakt bezpośredni:
- Telefon: +48 570-751-670
- Email: kontakt@kbs-investment.pl
- Adres: Ks. Augustyna Strzybnego 4, 41-506 Chorzów

KBS Investment Sp. z o.o. - Profesjonalne usługi instalacyjne
            `
        };

        // Wysyłanie maila potwierdzającego
        await sendEmailWithFallback(confirmationMailOptions);

        return NextResponse.json(
            {
                success: true,
                message: 'Wiadomość została wysłana pomyślnie. Sprawdź swoją skrzynkę email.'
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Błąd wysyłania maila:', error);

        // Szczegółowe logowanie błędów
        if (error && typeof error === 'object' && 'code' in error) {
            if (error.code === 'EAUTH') {
                console.error('Błąd uwierzytelniania - sprawdź email i hasło');
            } else if (error.code === 'ECONNECTION') {
                console.error('Błąd połączenia - sprawdź dostęp do internetu i firewall');
            } else if (error.code === 'ETIMEDOUT') {
                console.error('Przekroczono limit czasu połączenia');
            }
        }

        return NextResponse.json(
            {
                error: 'Wystąpił błąd podczas wysyłania wiadomości. Sprawdź logi serwera i spróbuj ponownie później.'
            },
            { status: 500 }
        );
    }
}
