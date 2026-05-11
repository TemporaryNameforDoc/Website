import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";
import { Clock } from "lucide-react";

export default function Index() {
  const { language, isArabic } = useLanguage();

  return (
    <div className={`bg-white ${isArabic ? "rtl" : "ltr"}`} dir={isArabic ? "rtl" : "ltr"}>
      <Header />

      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-12 md:pb-16 bg-clinic-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="space-y-6 md:space-y-8">
            {/* Main Heading */}
            <h1 className="text-clinic-dark font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              {t(language, "hero_main")}
            </h1>

            {/* Tagline with divider */}
            <div className="space-y-3 md:space-y-4">
              <div className="h-1 w-full bg-clinic-rose rounded-full"></div>
              <h2 className="text-clinic-dark font-serif italic text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
                {t(language, "hero_tagline")}
              </h2>
            </div>

            {/* Hero Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
              {/* Consultation Box */}
              <div className="lg:col-span-1 bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border-2 border-clinic-dark h-fit">
                <p className="text-clinic-burgundy font-serif text-lg sm:text-xl md:text-2xl text-center leading-tight">
                  {t(language, "consultant_title")}
                </p>
              </div>

              {/* Hero Image */}
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-auto lg:col-span-1">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fb23d9c40846d454db59829c2ec1b400b%2F8bac93c5b75f45ef95612264986eda87?format=webp&width=800&height=1200"
                  alt="Dr. Mohamed Abouzekry"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Doctor Info & Hours */}
              <div className="space-y-4 md:space-y-6 lg:col-span-1">
                {/* Consultation Info */}
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-clinic-dark border-opacity-20">
                  <p className="text-clinic-burgundy font-serif text-base md:text-lg font-bold mb-3">
                    Comprehensive Obstetrics and Gynecology care by
                  </p>
                  <p className="text-clinic-dark font-serif text-2xl md:text-3xl">
                    Dr. Abouzekry.
                  </p>
                </div>

                {/* Operating Hours Card */}
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-clinic-dark border-opacity-20">
                  <h3 className="text-clinic-dark font-serif text-lg md:text-xl mb-3 flex items-center gap-2">
                    <Clock size={18} />
                    {t(language, "operating_hours")}
                  </h3>
                  <div className="space-y-2 text-clinic-dark font-newsreader text-xs sm:text-sm">
                    <div>
                      <span className="font-bold">{t(language, "hours_weekdays")}</span>
                      <br />
                      {t(language, "hours_weekdays_time")}
                    </div>
                    <p className="font-bold text-xs">
                      {t(language, "hours_friday")}
                    </p>
                    <div className="pt-2 border-t border-gray-200">
                      <p className="text-xs">{t(language, "registration_call")}</p>
                      <p className="font-bold text-base">
                        {t(language, "phone_number")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-clinic-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Services Title */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-white font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight italic">
              {t(language, "services_title")}
            </h2>
          </div>

          {/* Services Grid with alternating layout */}
          <div className="space-y-8 md:space-y-12">
            {/* Service 1 - Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border-2 border-clinic-dark">
                <h3 className="text-clinic-dark font-serif text-2xl md:text-3xl mb-4">
                  {t(language, "service_1_title")}
                </h3>
                <p className="text-clinic-dark font-newsreader text-sm md:text-base">
                  {t(language, "service_1_desc")}
                </p>
              </div>
              <div className="relative h-64 sm:h-80 md:h-96 hidden lg:block">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fb23d9c40846d454db59829c2ec1b400b%2F683a08d61da74c95862d4c38132d5adc?format=webp&width=800&height=1200"
                  alt="Service"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Service 2 - Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="relative h-64 sm:h-80 md:h-96 hidden lg:block order-2 lg:order-1">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fb23d9c40846d454db59829c2ec1b400b%2F8ee4da0dce46493a9f29143509ec069f?format=webp&width=800&height=1200"
                  alt="Service"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border-2 border-clinic-dark order-1 lg:order-2">
                <h3 className="text-clinic-dark font-serif text-2xl md:text-3xl mb-4">
                  {t(language, "service_2_title")}
                </h3>
                <p className="text-clinic-dark font-newsreader text-sm md:text-base">
                  {t(language, "service_2_desc")}
                </p>
              </div>
            </div>

            {/* Service 3 - Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border-2 border-clinic-dark">
                <h3 className="text-clinic-dark font-serif text-2xl md:text-3xl mb-4">
                  {t(language, "service_3_title")}
                </h3>
                <p className="text-clinic-dark font-newsreader text-sm md:text-base">
                  {t(language, "service_3_desc")}
                </p>
              </div>
              <div className="relative h-64 sm:h-80 md:h-96 hidden lg:block">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fb23d9c40846d454db59829c2ec1b400b%2F683a08d61da74c95862d4c38132d5adc?format=webp&width=800&height=1200"
                  alt="Service"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Service 4 - Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="relative h-64 sm:h-80 md:h-96 hidden lg:block order-2 lg:order-1">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fb23d9c40846d454db59829c2ec1b400b%2F8ee4da0dce46493a9f29143509ec069f?format=webp&width=800&height=1200"
                  alt="Service"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border-2 border-clinic-dark order-1 lg:order-2">
                <h3 className="text-clinic-dark font-serif text-2xl md:text-3xl mb-4">
                  {t(language, "service_4_title")}
                </h3>
                <p className="text-clinic-dark font-newsreader text-sm md:text-base">
                  {t(language, "service_4_desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Doctor Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Doctor Image */}
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-full order-2 lg:order-1">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fb23d9c40846d454db59829c2ec1b400b%2F8ee4da0dce46493a9f29143509ec069f?format=webp&width=800&height=1200"
                alt="Dr. Mohamed Abouzekry"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Doctor Info */}
            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
              <div>
                <h3 className="text-clinic-dark font-serif text-3xl sm:text-4xl md:text-5xl mb-3 md:mb-4">
                  {t(language, "doctor_name")}
                </h3>
                <p className="text-clinic-dark font-newsreader text-base md:text-lg leading-relaxed">
                  {t(language, "doctor_bio")}
                </p>
              </div>

              {/* Qualifications */}
              <div className="bg-clinic-cream p-4 sm:p-6 md:p-8 rounded-lg">
                <h4 className="text-clinic-dark font-serif text-xl md:text-2xl mb-3 md:mb-4">
                  {t(language, "specializations")}
                </h4>
                <ul className="text-clinic-dark font-newsreader text-sm md:text-base space-y-2">
                  <li>✓ {t(language, "spec_1")}</li>
                  <li>✓ {t(language, "spec_2")}</li>
                  <li>✓ {t(language, "spec_3")}</li>
                  <li>✓ {t(language, "spec_4")}</li>
                </ul>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-clinic-dark text-white font-newsreader py-3 md:py-4 rounded-lg hover:bg-clinic-burgundy transition-colors text-base md:text-lg font-bold">
                {t(language, "book_consultation")}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
