# Translation System Quick Guide

## Quick Start

The website now has a complete English/Arabic translation system. Here's how to use it:

### In Any Component

```typescript
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function MyComponent() {
  const { language, isArabic } = useLanguage();
  
  return (
    <div dir={isArabic ? "rtl" : "ltr"}>
      <h1>{t(language, "clinic_name")}</h1>
      <p>{t(language, "hero_main")}</p>
    </div>
  );
}
```

## What's Available

All content is translated:
- **Navigation** - Menu items, language switcher
- **Hero Section** - Main title, tagline, consultant info
- **Services** - All 4 service descriptions
- **Doctor Info** - Bio and specializations
- **Footer** - Location, contact, copyright
- **Legal Page** - Privacy and terms sections

## Adding New Content

1. Open `client/lib/translations.ts`
2. Add your key to both `en` and `ar` objects:

```typescript
en: {
  my_button: "Click Me",
},
ar: {
  my_button: "اضغط هنا",
}
```

3. Use in your component:
```typescript
<button>{t(language, "my_button")}</button>
```

## Language Switching

Users can switch languages using the dropdown in the header. The change applies instantly across the entire site.

## Available Languages

- `en` - English (LTR)
- `ar` - العربية (RTL)

## Type Safety

TypeScript will warn you if you try to use a key that doesn't exist. All keys are strictly typed.

## RTL Handling

When Arabic is selected:
- Text direction automatically changes to right-to-left
- Use `isArabic` boolean for conditional styling
- Add `dir="rtl"` to containers that need explicit direction

Example:
```typescript
const { isArabic } = useLanguage();

<div className={isArabic ? "rtl" : "ltr"} dir={isArabic ? "rtl" : "ltr"}>
  Content here
</div>
```

---

For detailed documentation, see `TRANSLATIONS.md` in the root directory.
