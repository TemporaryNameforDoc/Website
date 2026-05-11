import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function Header() {
  const { language, setLanguage, isArabic } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 ${
        isArabic ? "rtl" : "ltr"
      }`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4">
        <nav className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-clinic-dark font-serif text-lg md:text-2xl font-400 whitespace-nowrap"
          >
            {t(language, "clinic_name")}
          </Link>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <Link
              to="/"
              className="text-clinic-dark font-newsreader text-base hover:opacity-70 transition-opacity"
            >
              {t(language, "nav_home")}
            </Link>
            <Link
              to="/legal"
              className="text-clinic-dark font-newsreader text-base hover:opacity-70 transition-opacity"
            >
              {t(language, "nav_legal")}
            </Link>
          </div>

          {/* Language Picker */}
          <div className="relative ml-auto md:ml-0">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 text-clinic-dark font-newsreader text-sm md:text-base whitespace-nowrap"
            >
              <span className="hidden sm:inline">{t(language, "language")}</span>
              <span className="sm:hidden text-xs">{language.toUpperCase()}</span>
              <ChevronDown size={16} />
            </button>
            {isDropdownOpen && (
              <div className={`absolute top-full ${isArabic ? "left-0" : "right-0"} mt-2 bg-white border border-clinic-dark rounded shadow-lg`}>
                <button
                  onClick={() => {
                    setLanguage("en");
                    setIsDropdownOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-clinic-dark hover:bg-clinic-cream"
                  dir="ltr"
                >
                  English
                </button>
                <button
                  onClick={() => {
                    setLanguage("ar");
                    setIsDropdownOpen(false);
                  }}
                  className="block w-full text-right px-4 py-2 text-clinic-dark hover:bg-clinic-cream"
                  dir="rtl"
                >
                  العربية
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
