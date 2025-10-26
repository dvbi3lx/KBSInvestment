# ✅ Formularz przepisany dla Netlify Forms

## 🔧 Co zostało zmienione

### **1. Walidacja uproszczona**
- Usunięto restrykcyjne regex dla polskich znaków
- Minimalne wymagania: tylko długość tekstu
- Zachowano walidację email i podstawowe sprawdzenia

### **2. Wysyłanie przez FormData**
- Używa `FormData` zamiast JSON
- Kompatybilne z Netlify Forms
- Automatyczne kodowanie danych

### **3. Ukryte pola HTML**
- `form-name="contact"` - identyfikator formularza
- `bot-field` - ochrona przed spamem
- Wszystkie pola mają ukryte odpowiedniki

### **4. Progressive Enhancement**
- `action="/"` i `method="POST"` - fallback bez JavaScript
- Formularz działa nawet gdy JS jest wyłączony

## 📋 Struktura danych wysyłanych

```javascript
FormData {
  'form-name': 'contact',
  'name': 'Jan Kowalski',
  'email': 'jan@example.com',
  'phone': '+48 123 456 789',
  'service': 'gas',
  'message': 'Treść wiadomości...'
}
```

## 🎯 Jak to działa

### **1. Wykrywanie przez Netlify**
- Netlify skanuje stronę podczas buildu
- Znajduje formularz z `data-netlify="true"`
- Tworzy endpoint automatycznie

### **2. Wysyłanie danych**
- JavaScript przechwytuje submit
- Tworzy FormData z danymi
- Wysyła POST na `/`
- Netlify przechwytuje i przetwarza

### **3. Powiadomienia**
- Email na skonfigurowany adres
- Dane w panelu Netlify
- Automatyczna ochrona przed spamem

## 🔒 Bezpieczeństwo

✅ **Honeypot** - pole `bot-field` chroni przed botami  
✅ **Walidacja** - podstawowe sprawdzenia po stronie klienta  
✅ **HTTPS** - bezpieczne połączenie  
✅ **Rate limiting** - Netlify ogranicza spam  

## 📧 Konfiguracja powiadomień

1. **Netlify Dashboard** → **Forms**
2. **Znajdź formularz "contact"**
3. **Settings & usage** → **Form notifications**
4. **Dodaj email:** `kbsinvestment@interia.pl`

## 🎉 Gotowe!

Formularz jest teraz w pełni kompatybilny z Netlify Forms i będzie działał automatycznie po wdrożeniu!
