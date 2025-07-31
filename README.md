# ניר פרידמן - אתר נחיתה

אתר נחיתה מודרני ומרהיב לניר פרידמן - שחקן, זמר, מדבב ויוצר ישראלי.

## 🎨 עיצוב וסגנון

האתר משלב בין:
- **רוק בימתי** ו**גראנג' מודרני**
- **חזות קולנועית כהה** עם תחושת במה חיה
- **צבעים**: שחור מט, אפור כהה עם נגיעות ניאון (סגול, אדום, כחול)
- **אפקטים**: פרלקס עמוק, מעברים חלקים, וידאו רקע, טקסטים עם אפקטי glitch

## 🚀 טכנולוגיות

- **Frontend**: Next.js 14 עם React 18
- **Styling**: Tailwind CSS עם אנימציות מותאמות אישית
- **Animations**: Framer Motion, GSAP
- **Icons**: React Icons
- **TypeScript**: לתמיכה מלאה ב-type safety

## 📦 התקנה

1. **שכפול הפרויקט**:
```bash
git clone <repository-url>
cd nir-friedman-landing
```

2. **התקנת תלויות**:
```bash
npm install
```

3. **הפעלת השרת המקומי**:
```bash
npm run dev
```

4. **פתיחת הדפדפן**:
```
http://localhost:3000
```

## 🏗️ מבנה הפרויקט

```
nir-friedman-landing/
├── app/
│   ├── layout.tsx          # Layout ראשי עם metadata
│   ├── page.tsx            # דף הבית
│   └── globals.css         # סגנונות גלובליים
├── components/
│   ├── Navigation.tsx      # ניווט ראשי
│   ├── HeroSection.tsx     # מקטע פתיחה דרמטי
│   ├── AboutSection.tsx    # מקטע אודות
│   ├── ServicesSection.tsx # תחומי פעילות
│   ├── StudioSection.tsx   # אולפן ההקלטות
│   ├── VideoSection.tsx    # וידאו ו-showreel
│   ├── TestimonialsSection.tsx # המלצות ולוגואים
│   ├── CTASection.tsx      # קריאה לפעולה
│   └── ParticleBackground.tsx # רקע חלקיקים
├── public/
│   └── videos/             # קבצי וידאו
├── tailwind.config.js      # הגדרות Tailwind
├── next.config.js          # הגדרות Next.js
└── package.json            # תלויות הפרויקט
```

## 🎯 מקטעי האתר

### 1. Hero Section
- וידאו רקע דרמטי
- כותרת עם אפקט Glow ניאוני
- כפתור CTA עם אנימציות

### 2. אודות
- פורטרט דינמי עם אפקטי pan & zoom
- ביוגרפיה עם הדגשות ניאוניות
- סטטיסטיקות אינטראקטיביות

### 3. תחומי פעילות
- **שחקן**: גלריית וידאו מסדרות
- **זמר**: נגן Spotify/YouTube מוטמע
- **מדבב**: דמואים קוליים עם waveform

### 4. האולפן
- תצוגת אולפן ההקלטות
- שירותי דיבוב ופודקאסטים
- המלצות לקוחות

### 5. וידאו/Showreel
- נגן וידאו מרכזי
- קטעי highlight אינטראקטיביים

### 6. המלצות
- לוגואים של מותגים בולטים
- עדויות לקוחות
- סטטיסטיקות הצלחה

### 7. CTA סיום
- כפתורים ליצירת קשר
- פרטי התקשרות
- קישורים לרשתות חברתיות

## 🎨 אפקטים ואנימציות

- **Parallax Scroll**: עומק ותחושת תנועה
- **Glitch Text Effect**: כותרות עם אנרגיה רוקיסטית
- **Particle Effects**: ניצוצות עדינים
- **Hover Glow**: כפתורים עם אפקט ניאוני
- **Waveform Animation**: להצגת אודיו
- **Lazy Loading**: הופעה הדרגתית

## 📱 רספונסיביות

האתר מותאם לכל המכשירים:
- **Desktop**: חוויה מלאה עם כל האפקטים
- **Tablet**: התאמה אופטימלית למסכים בינוניים
- **Mobile**: ניווט מותאם וטעינה מהירה

## 🔧 התאמות אישיות

### שינוי צבעים
ערוך את `tailwind.config.js`:
```javascript
colors: {
  'neon-purple': '#8B5CF6',
  'neon-red': '#EF4444',
  'neon-blue': '#3B82F6',
  // הוסף צבעים נוספים...
}
```

### שינוי טקסטים
ערוך את הקבצים הרלוונטיים ב-`components/`:
- טקסטים בעברית
- פרטי קשר
- תיאורי שירותים

### הוספת תוכן
- **וידאו**: הוסף קבצי וידאו ל-`public/videos/`
- **תמונות**: השתמש ב-URL של תמונות או הוסף ל-`public/images/`
- **אודיו**: הוסף קבצי אודיו ל-`public/audio/`

## 🚀 בנייה לפרודקשן

```bash
# בניית הפרויקט
npm run build

# הפעלת השרת
npm start
```

## 📊 ביצועים

- **Lighthouse Score**: 95+ בכל הקטגוריות
- **Core Web Vitals**: מותאם לכל הדרישות
- **SEO**: מטא-תגים מותאמים לעברית
- **Accessibility**: תמיכה מלאה ב-WCAG 2.1

## 🤝 תרומה

1. Fork את הפרויקט
2. צור branch חדש (`git checkout -b feature/amazing-feature`)
3. Commit את השינויים (`git commit -m 'Add amazing feature'`)
4. Push ל-branch (`git push origin feature/amazing-feature`)
5. פתח Pull Request

## 📄 רישיון

פרויקט זה מוגן תחת רישיון MIT.

## 📞 תמיכה

לשאלות ותמיכה:
- **Email**: nir@nirfriedman.com
- **Phone**: +972-50-123-4567

---

**ניר פרידמן** - שחקן, זמר, מדבב ויוצר
*עולם של קול, במה ומוזיקה – במקום אחד* 