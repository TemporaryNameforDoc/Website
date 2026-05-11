import { Facebook, Instagram, Youtube } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function Footer() {
  const { language, isArabic } = useLanguage();

  return (
    <footer
      className={`bg-clinic-cream py-12 md:py-16 ${isArabic ? "rtl" : "ltr"}`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Location */}
          <div>
            <h4 className="text-clinic-dark font-serif text-xl md:text-2xl mb-4 md:mb-6">
              {t(language, "location")}
            </h4>
            <div className="space-y-2 text-clinic-dark font-newsreader text-xs sm:text-sm">
              <p>{t(language, "location_city")}</p>
              <p>{t(language, "location_area")}</p>
              <p>{t(language, "location_street")}</p>
              <p className="font-bold">{t(language, "location_code")}</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-clinic-dark font-serif text-xl md:text-2xl mb-4 md:mb-6">
              {t(language, "contact")}
            </h4>
            <div className="space-y-2 text-clinic-dark font-newsreader text-xs sm:text-sm">
              <p>{t(language, "contact_email")}</p>
              <p>{t(language, "contact_phone")}</p>
            </div>
          </div>

          {/* Clinic Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h2 className="text-clinic-dark font-serif text-2xl md:text-4xl mb-3 md:mb-4">
              {t(language, "clinic_name")}
            </h2>
            <p className="text-clinic-dark font-newsreader text-sm md:text-base mb-6 md:mb-8">
              {t(language, "tagline")}
            </p>

            {/* Copyright */}
            <div className="space-y-1 md:space-y-2 text-clinic-dark font-newsreader text-xs sm:text-sm">
              <p className="text-center">{t(language, "copyright_ar")}</p>
              <p className="text-center font-bold">{t(language, "copyright_en")}</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 md:gap-6 py-6 md:py-8 border-t border-clinic-dark border-opacity-20">
          <a
            href="#"
            className="text-clinic-dark hover:text-clinic-burgundy transition-colors"
          >
            <Facebook size={20} className="md:w-6 md:h-6" />
          </a>
          <a
            href="#"
            className="text-clinic-dark hover:text-clinic-burgundy transition-colors"
          >
            <Instagram size={20} className="md:w-6 md:h-6" />
          </a>
          <a
            href="#"
            className="text-clinic-dark hover:text-clinic-burgundy transition-colors"
          >
            <Youtube size={20} className="md:w-6 md:h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
