# 📧 Niestandardowy szablon maila dla Netlify Forms

## 🎨 Jak zmienić wygląd maila

### **Opcja 1: Niestandardowy szablon HTML**

1. **Utwórz plik** `netlify/forms/contact.html` w katalogu `public/`
2. **Dodaj szablon** z własnym designem
3. **Skonfiguruj** w panelu Netlify

### **Opcja 2: Webhook + własny backend**

1. **Skonfiguruj webhook** w Netlify
2. **Stwórz własny endpoint** do wysyłania maili
3. **Użyj biblioteki** jak Nodemailer z własnym szablonem

### **Opcja 3: Integracja z zewnętrznym serwisem**

1. **Zapier** - automatyczne wysyłanie z własnym szablonem
2. **Mailchimp** - profesjonalne szablony
3. **SendGrid** - zaawansowane opcje personalizacji

## 📋 Przykład niestandardowego szablonu HTML

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Nowe zapytanie - KBS Investment</title>
</head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <div style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="margin: 0; font-size: 24px;">Nowe Zapytanie - KBS Investment Sp. z o.o.</h1>
    </div>
    
    <div style="padding: 20px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0 0 10px 10px;">
        <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #1e293b; margin-top: 0;">Szczegóły zapytania:</h2>
            
            <div style="margin-bottom: 15px;">
                <strong style="color: #3b82f6;">Usługa:</strong>
                <span style="color: #475569; margin-left: 10px;">{{service}}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
                <strong style="color: #3b82f6;">Imię i nazwisko:</strong>
                <span style="color: #475569; margin-left: 10px;">{{name}}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
                <strong style="color: #3b82f6;">Email:</strong>
                <span style="color: #475569; margin-left: 10px;">{{email}}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
                <strong style="color: #3b82f6;">Telefon:</strong>
                <span style="color: #475569; margin-left: 10px;">{{phone}}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
                <strong style="color: #3b82f6;">Wiadomość:</strong>
                <div style="color: #475569; margin-top: 10px; padding: 15px; background: #f1f5f9; border-radius: 5px; white-space: pre-wrap;">{{message}}</div>
            </div>
        </div>
        
        <div style="background: #eff6ff; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
                <strong>Data otrzymania:</strong> {{date}}
            </p>
        </div>
        
        <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 12px; margin: 0;">
                To jest automatyczna wiadomość z formularza kontaktowego strony KBS Investment Sp. z o.o.
            </p>
        </div>
    </div>
</body>
</html>
```

## 🔧 Jak skonfigurować niestandardowy szablon

### **Krok 1: Utwórz katalog**
```bash
mkdir -p public/netlify/forms
```

### **Krok 2: Dodaj szablon**
- Skopiuj powyższy kod do `public/netlify/forms/contact.html`
- Dostosuj kolory, logo, teksty

### **Krok 3: Skonfiguruj w Netlify**
1. **Site settings** → **Forms**
2. **Znajdź formularz "contact"**
3. **Settings & usage** → **Form notifications**
4. **Edit notification** → **Custom template**
5. **Wskaż ścieżkę** do szablonu

## 🎯 Zalety niestandardowego szablonu

✅ **Profesjonalny wygląd** - zgodny z brandingiem  
✅ **Więcej informacji** - logo, kolory, dodatkowe dane  
✅ **Lepsze UX** - czytelny layout  
✅ **Spójność** - zgodny z designem strony  

## ⚠️ Uwagi

- **Zmienne** używają podwójnych nawiasów: `{{name}}`
- **HTML** musi być poprawny
- **Testuj** szablon przed wdrożeniem
- **Backup** - zachowaj kopię oryginalnego

## 🚀 Gotowe!

Po skonfigurowaniu otrzymasz profesjonalne maile z własnym designem!
