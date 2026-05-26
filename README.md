# Zizou Travel Istanbul - النسخة العربية

Site web d'agence de voyage prestige pour Zizou Travel Istanbul.
موقع وكالة سفر فاخرة لزيزو ترافل إسطنبول.

## Structure du projet / هيكل المشروع

```
zizou_travel_ar/
├── index.html          # Page principale / الصفحة الرئيسية
├── css/
│   └── style.css       # Styles CSS / أنماط CSS
├── js/
│   └── main.js         # Scripts JavaScript / سكريبتات جافاسكريبت
└── images/             # Images (a ajouter) / صور (للإضافة)
```

## Installation / التثبيت

1. Ouvrir le dossier dans VS Code / افتح المجلد في VS Code
2. Installer l'extension "Live Server" (ritwickdey.LiveServer) / ثبت إضافة "Live Server"
3. Clic droit sur index.html -> "Open with Live Server" / اضغط بزر الماوس الأيمن على index.html -> "Open with Live Server"

## Personnalisation / التخصيص

### Changer la video de fond / تغيير الفيديو الخلفي
Dans `index.html`, ligne ~15, remplacez l'URL:
في `index.html`، السطر ~15، استبدل الرابط:
```html
<source src="VOTRE_VIDEO.mp4" type="video/mp4">
```

### Changer les couleurs / تغيير الألوان
Dans `css/style.css`, modifiez les variables CSS:
في `css/style.css`، عدّل متغيرات CSS:
```css
:root {
    --gold-primary: #D4AF37;    /* Or / الذهب */
    --slate-darker: #1A1D2B;    /* Ardoise / الأردواز */
    ...
}
```

### Changer le numero WhatsApp / تغيير رقم واتساب
Dans `index.html`, cherchez `wa.me/` et remplacez.
في `index.html`، ابحث عن `wa.me/` واستبدله.

## Technologies / التقنيات

- HTML5 (RTL - Right to Left)
- CSS3 (Variables, Grid, Flexbox, Animations)
- JavaScript (Vanilla)
- Font Awesome Icons
- Google Fonts (Cairo + Tajawal + Playfair Display + Montserrat)
