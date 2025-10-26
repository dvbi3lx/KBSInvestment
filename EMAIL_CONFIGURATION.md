# 📧 Konfiguracja wysyłania maili w Netlify Functions

## 🚀 Co zostało zaimplementowane

### **1. Funkcja Netlify z obsługą maili**
- `netlify/functions/contact.js` - wysyła maile przez Nodemailer
- Profesjonalny szablon HTML z brandingiem KBS Investment
- Walidacja danych po stronie serwera
- Logowanie zgłoszeń

### **2. Formularz używa Netlify Functions**
- Wysyła dane na `/netlify/functions/contact`
- Zachowana walidacja po stronie klienta
- Wszystkie animacje i stany UI

## ⚙️ Konfiguracja zmiennych środowiskowych

### **W Netlify Dashboard:**

1. **Site settings** → **Environment variables**
2. **Dodaj zmienne:**

```bash
EMAIL_USER=dominik.dubiel3@gmail.com
EMAIL_PASS=twoje_haslo_aplikacji_gmail
```

### **Lub użyj domyślnych wartości:**
- `EMAIL_USER` - domyślnie `dominik.dubiel3@gmail.com`
- `EMAIL_PASS` - wymagane (hasło aplikacji Gmail)

## 📧 Co otrzymasz w emailu

### **Profesjonalny szablon HTML:**
- Gradient header z logo KBS Investment
- Strukturalne layouty z kolorami brandowymi
- Wszystkie dane z formularza
- Data i czas zgłoszenia
- Wersja tekstowa jako fallback

### **Zawartość maila:**
- **Usługa** - wybrana usługa
- **Imię i nazwisko** - dane kontaktowe
- **Email** - adres do odpowiedzi
- **Telefon** - opcjonalny
- **Wiadomość** - treść zapytania
- **Data** - czas zgłoszenia

## 🔒 Bezpieczeństwo

✅ **Walidacja** po stronie serwera  
✅ **CORS headers** skonfigurowane  
✅ **Error handling** w funkcji  
✅ **Logowanie** zgłoszeń w konsoli  
✅ **Zmienne środowiskowe** - hasła poza kodem  

## 🎯 Jak to działa

1. **Użytkownik wypełnia formularz**
2. **JavaScript wysyła dane** na `/netlify/functions/contact`
3. **Funkcja waliduje dane** po stronie serwera
4. **Nodemailer wysyła email** na `dominik.dubiel3@gmail.com`
5. **Użytkownik otrzymuje potwierdzenie** sukcesu

## 🚀 Gotowe do użycia!

Po skonfigurowaniu zmiennych środowiskowych formularz będzie automatycznie wysyłał maile na Twój adres!
