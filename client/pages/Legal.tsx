import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function Legal() {
  const { language, isArabic } = useLanguage();

  return (
    <div className={`bg-white ${isArabic ? "rtl" : "ltr"}`} dir={isArabic ? "rtl" : "ltr"}>
      <Header />

      {/* Main Content */}
      <section className="min-h-screen pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-clinic-dark font-serif text-3xl sm:text-4xl md:text-5xl mb-8 md:mb-12 mt-6 md:mt-8">
            {t(language, "legal_title")}
          </h1>

          <div className="space-y-6 md:space-y-8 text-clinic-dark font-newsreader text-sm md:text-base leading-relaxed">
            <div>
              <h2 className="text-clinic-dark font-serif text-2xl md:text-3xl mb-3 md:mb-4">
                {t(language, "privacy_policy")}
              </h2>
              <p>
                {t(language, "privacy_desc")}
              </p>
            </div>

            <div>
              <h2 className="text-clinic-dark font-serif text-2xl md:text-3xl mb-3 md:mb-4">
                {t(language, "terms_of_service")}
              </h2>
              <p>
                {t(language, "terms_desc")}
              </p>
            </div>

            <div className="pt-6 md:pt-8">
              <Link
                to="/"
                className="inline-block bg-clinic-dark text-white font-newsreader py-2 md:py-3 px-6 md:px-8 rounded-lg hover:bg-clinic-burgundy transition-colors text-sm md:text-base"
              >
                {t(language, "back_home")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
