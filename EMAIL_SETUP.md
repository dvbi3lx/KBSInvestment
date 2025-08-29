# 📧 Konfiguracja Email - Microsoft Exchange

## 🚀 Szybka konfiguracja

Aby formularz kontaktowy działał, utwórz plik `.env.local` w tym katalogu z następującą zawartością:

```bash
# Konfiguracja email - Microsoft Exchange
EMAIL_USER=kontakt@kbsinvestment.pl
EMAIL_PASS=twoje_haslo_do_konta_exchange
```

## 📋 Krok po kroku - Konfiguracja Microsoft Exchange

### 1. Sprawdź ustawienia SMTP
- Serwer SMTP: `smtp.office365.com`
- Port: `587`
- Szyfrowanie: `STARTTLS`
- Uwierzytelnianie: `Wymagane`

### 2. Użyj danych logowania
- **Email:** `kontakt@kbsinvestment.pl`
- **Hasło:** Twoje zwykłe hasło do konta Exchange
- **Nie wymaga** hasła aplikacji jak Gmail

### 3. Skonfiguruj projekt
- W tym katalogu utwórz plik `.env.local`
- Dodaj swoje dane:
  ```bash
  EMAIL_USER=kontakt@kbsinvestment.pl
  EMAIL_PASS=twoje_haslo_do_konta_exchange
  ```

## ⚠️ Uwagi bezpieczeństwa

- **NIGDY** nie commituj pliku `.env.local` do Git
- Użyj **zwykłego hasła** do konta Exchange (nie wymaga hasła aplikacji)
- Upewnij się, że konto ma włączony dostęp SMTP

## 🧪 Testowanie

Po skonfigurowaniu:
1. Uruchom serwer: `npm run dev`
2. Wypełnij formularz kontaktowy
3. Sprawdź swoją skrzynkę email (mail z zapytaniem)
4. Sprawdź skrzynkę email podaną w formularzu (mail potwierdzający)

## 🔧 Rozwiązywanie problemów

### Błąd "Invalid login"
- Sprawdź poprawność adresu email i hasła
- Upewnij się, że konto ma włączony dostęp SMTP
- Sprawdź czy nie ma blokady przez administratora

### Błąd "Connection timeout"
- Sprawdź połączenie internetowe
- Sprawdź czy port 587 nie jest zablokowany przez firewall
- Spróbuj użyć portu 25 (niezalecane) lub 465 (SSL)

### Błąd "Authentication failed"
- Sprawdź poprawność adresu email
- Sprawdź poprawność hasła
- Upewnij się, że plik `.env.local` jest w tym katalogu
- Sprawdź czy konto nie ma włączonej weryfikacji dwuetapowej

## 🎯 Co zostało zaimplementowane

✅ **API endpoint** `/api/contact` do wysyłania maili  
✅ **Walidacja** danych po stronie serwera  
✅ **Ładne maile HTML** z brandingiem KBS Investment  
✅ **Mail potwierdzający** dla klienta  
✅ **Obsługa błędów** i komunikatów  
✅ **Bezpieczna konfiguracja** przez zmienne środowiskowe  
✅ **Animacje** i lepsze UX w formularzu  

## 📞 Wsparcie

Jeśli masz problemy z konfiguracją:
1. Sprawdź czy wszystkie kroki zostały wykonane
2. Upewnij się, że używasz poprawnego hasła do konta Exchange
3. Sprawdź logi serwera w konsoli
4. Sprawdź czy plik `.env.local` jest w odpowiednim miejscu
5. Sprawdź czy konto ma włączony dostęp SMTP
