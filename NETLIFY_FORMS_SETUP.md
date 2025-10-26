# 📧 Netlify Forms - Gotowe rozwiązanie wysyłania maili

## 🚀 Jak to działa

**Netlify Forms** to wbudowane rozwiązanie Netlify, które automatycznie:
- ✅ Odbiera formularze z Twojej strony
- ✅ Wysyła powiadomienia na Twój email
- ✅ Przechowuje zgłoszenia w panelu Netlify
- ✅ Chroni przed spamem (honeypot)
- ✅ Działa bez konfiguracji serwera

## 📋 Co zostało zaimplementowane

### 1. **Formularz z atrybutami Netlify**
```html
<form name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
```

### 2. **Ukryte pole honeypot**
```html
<div style="display: none;">
    <label>Nie wypełniaj tego pola: <input name="bot-field" /></label>
</div>
```

### 3. **Wysyłanie przez JavaScript**
```javascript
const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
        'form-name': 'contact',
        ...formData
    })
});
```

## 🎯 Jak skonfigurować

### **Krok 1: Wdróż na Netlify**
1. Połącz repozytorium z Netlify
2. Wdróż stronę
3. Netlify automatycznie wykryje formularz

### **Krok 2: Skonfiguruj powiadomienia**
1. Idź do **Site settings** → **Forms**
2. Znajdź formularz "contact"
3. Kliknij **Settings & usage**
4. Dodaj swój email w **Form notifications**

### **Krok 3: Testuj**
1. Wypełnij formularz na stronie
2. Sprawdź email z powiadomieniem
3. Sprawdź panel Netlify → **Forms**

## 📊 Co otrzymasz

### **Email powiadomienie zawiera:**
- Imię i nazwisko
- Email kontaktowy
- Telefon (jeśli podany)
- Wybrana usługa
- Treść wiadomości
- Data i czas zgłoszenia

### **Panel Netlify zawiera:**
- Wszystkie zgłoszenia
- Statystyki formularza
- Możliwość eksportu danych
- Zarządzanie spamem

## 🔒 Bezpieczeństwo

✅ **Honeypot** - automatyczna ochrona przed botami  
✅ **Rate limiting** - Netlify ogranicza spam  
✅ **HTTPS** - bezpieczne połączenie  
✅ **Brak danych wrażliwych** - nie przechowujesz haseł  

## 💰 Koszty

- **Netlify Free** - 100 zgłoszeń/miesiąc
- **Netlify Pro** - 1000 zgłoszeń/miesiąc
- **Netlify Business** - nieograniczone

## 🎉 Gotowe!

Formularz jest już skonfigurowany i gotowy do użycia. Po wdrożeniu na Netlify będzie automatycznie działał bez dodatkowej konfiguracji!
