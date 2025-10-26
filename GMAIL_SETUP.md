# 📧 Konfiguracja Gmail App Password

## 🔐 Jak skonfigurować hasło aplikacji Gmail

### **Krok 1: Włącz weryfikację dwuetapową**
1. Idź do [myaccount.google.com](https://myaccount.google.com)
2. **Security** → **2-Step Verification**
3. **Włącz weryfikację dwuetapową** (jeśli nie jest włączona)

### **Krok 2: Wygeneruj hasło aplikacji**
1. **Security** → **App passwords**
2. **Select app** → wybierz "Mail"
3. **Select device** → wybierz "Other" i wpisz "Netlify Functions"
4. **Generate** → skopiuj wygenerowane hasło

### **Krok 3: Skonfiguruj w Netlify**
1. **Netlify Dashboard** → **Site settings** → **Environment variables**
2. **Dodaj zmienne:**
   ```bash
   EMAIL_USER=dominik.dubiel3@gmail.com
   EMAIL_PASS=wygenerowane_haslo_aplikacji
   ```

## ⚠️ Ważne uwagi

- **Nie używaj zwykłego hasła** - tylko hasło aplikacji
- **Hasło aplikacji** to 16-znakowy kod (np. `abcd efgh ijkl mnop`)
- **Bezpieczne** - można je łatwo usunąć/zmienić
- **Działa tylko z weryfikacją dwuetapową**

## 🎯 Przykład konfiguracji

```bash
EMAIL_USER=dominik.dubiel3@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
```

## 🚀 Gotowe!

Po skonfigurowaniu formularz będzie wysyłał maile na `dominik.dubiel3@gmail.com`!
