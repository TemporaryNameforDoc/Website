# Translation System Documentation

This clinic website includes a complete English/Arabic translation system.

## Overview

The translation system uses:
- **Centralized translations file** (`client/lib/translations.ts`) - Contains all English and Arabic text
- **Language Context** (`client/context/LanguageContext.tsx`) - Manages language state globally
- **Translation function** (`t()`) - Retrieves translated text

## How It Works

### 1. Translation File Structure

The `client/lib/translations.ts` file contains organized translations:

```typescript
export const translations = {
  en: {
    clinic_name: "Abouzekry Clinic",
    hero_main: "Trusted Women's Healthcare,",
    // ... more translations
  },
  ar: {
    clinic_name: "عيادة أبوذكري",
    hero_main: "رعاية صحية موثوقة للمرأة،",
    // ... more translations
  }
}
```

### 2. Using Translations in Components

Import the utilities and use the `t()` function:

```typescript
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function MyComponent() {
  const { language, isArabic } = useLanguage();
  
  return (
    <div dir={isArabic ? "rtl" : "ltr"}>
      <h1>{t(language, "clinic_name")}</h1>
    </div>
  );
}
```

### 3. Language Context

The `useLanguage()` hook provides:
- `language` - Current language ("en" or "ar")
- `setLanguage(lang)` - Change the language
- `isArabic` - Boolean flag for convenience

Example usage:
```typescript
const { language, setLanguage, isArabic } = useLanguage();

// Switch to Arabic
setLanguage("ar");
```

## Adding New Translations

### Step 1: Add to translations file

Open `client/lib/translations.ts` and add your key to both `en` and `ar` objects:

```typescript
export const translations = {
  en: {
    // ... existing translations
    my_new_key: "My English text",
  },
  ar: {
    // ... existing translations
    my_new_key: "نصي بالعربية",
  }
}
```

### Step 2: Use in component

```typescript
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function MyComponent() {
  const { language } = useLanguage();
  
  return (
    <h1>{t(language, "my_new_key")}</h1>
  );
}
```

## RTL (Right-to-Left) Support

The site automatically handles RTL layout when Arabic is selected:

```typescript
const { isArabic } = useLanguage();

return (
  <div dir={isArabic ? "rtl" : "ltr"} className={isArabic ? "rtl" : "ltr"}>
    {/* Content automatically flows RTL */}
  </div>
);
```

## Language Switcher

The header includes a language switcher that allows users to toggle between English and Arabic. The language preference is stored in the app's state and persists across navigation.

To persist across page reloads, you can extend the context to save to localStorage:

```typescript
const [language, setLanguage] = useState<LanguageKey>(
  (localStorage.getItem("language") as LanguageKey) || "en"
);

useEffect(() => {
  localStorage.setItem("language", language);
}, [language]);
```

## Current Translations

The system currently includes translations for:

- **Header & Navigation** - Clinic name, nav links, language picker
- **Hero Section** - Main headings, taglines, consultant title
- **Operating Hours** - Hours info, contact details
- **Services Section** - All 4 service titles and descriptions
- **Doctor Section** - Doctor name, bio, specializations
- **Footer** - Location, contact, copyright notices
- **Legal Page** - Privacy policy and terms of service sections

## Files

- `client/lib/translations.ts` - All translation strings
- `client/context/LanguageContext.tsx` - Language state management
- `client/components/Header.tsx` - Language switcher UI
- `client/pages/Index.tsx` - Homepage with translations
- `client/pages/Legal.tsx` - Legal page with translations
- `client/components/Footer.tsx` - Footer with translations

## Type Safety

The translation system includes TypeScript types for safety:

```typescript
export type LanguageKey = keyof typeof translations; // "en" | "ar"
export type TranslationKey = keyof typeof translations.en;
```

This ensures you can't accidentally reference a non-existent translation key.

## Styling Notes

- Arabic text uses RTL layout with `dir="rtl"` attributes
- All components automatically adjust padding/margins for RTL
- The language context provides `isArabic` boolean for conditional styling
- Font rendering automatically adjusts for Arabic text
