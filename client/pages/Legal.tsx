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
      <section className="min-h-screen pt-28 md:pt-32 pb-16 md:pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Logo */}
          <div className="flex justify-center mb-8 md:mb-12">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fb23d9c40846d454db59829c2ec1b400b%2Fb775a28d0af04b6eb0be551651e08a14?format=webp&width=800&height=1200"
              alt="Dr. Mohamed Abouzekry Clinic Logo"
              className="h-32 md:h-40 object-contain"
            />
          </div>

          <h1 className="text-clinic-dark font-serif text-3xl sm:text-4xl md:text-5xl mb-2 md:mb-3 text-center">
            {t(language, "legal_title")}
          </h1>

          {/* Clinic Info Header */}
          <div className="bg-clinic-cream p-6 md:p-8 rounded-lg mb-8 md:mb-12 text-center">
            <h3 className="text-clinic-dark font-serif text-2xl md:text-3xl mb-4">
              {t(language, "clinic_name")}
            </h3>
            <div className="space-y-2 text-clinic-dark font-newsreader text-sm md:text-base">
              <p>
                <strong>Dr. Mohamed Abouzekry</strong>
                <br />
                {language === "en"
                  ? "Consultant in Obstetrics, Gynecology, Laparoscopy, and ICSI"
                  : "استشاري أمراض النساء والتوليد والمنظار والحقن المجهري"}
              </p>
              <p className="pt-2">
                <strong>
                  {language === "en" ? "Phone:" : "الهاتف:"}
                </strong>{" "}
                <a href="tel:+20473227027" className="text-clinic-burgundy hover:underline">
                  +20 47 322 7027
                </a>
              </p>
              <p>
                <strong>
                  {language === "en" ? "Email:" : "البريد الإلكتروني:"}
                </strong>{" "}
                <a
                  href="mailto:contact@abouzekryclinic.com"
                  className="text-clinic-burgundy hover:underline"
                >
                  contact@abouzekryclinic.com
                </a>
              </p>
              <p>
                <strong>
                  {language === "en" ? "Address:" : "العنوان:"}
                </strong>
                <br />
                {language === "en"
                  ? "Kafr El-Sheikh City, Egypt"
                  : "مدينة كفرالشيخ، مصر"}
              </p>
              <p>
                <strong>
                  {language === "en" ? "License No.:" : "رقم الترخيص:"}
                </strong>{" "}
                4W9W+C3F
              </p>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="mb-10 md:mb-14">
            <h2 className="text-clinic-dark font-serif text-2xl md:text-3xl mb-4 md:mb-6">
              {t(language, "privacy_policy")}
            </h2>
            <div className="space-y-4 md:space-y-5 text-clinic-dark font-newsreader text-sm md:text-base leading-relaxed">
              <p>
                {language === "en"
                  ? "At Dr. Mohamed Abouzekry Clinic, we are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website."
                  : "في عيادة الدكتور محمد أبوذكري، نحن ملتزمون بحماية خصوصيتك وضمان تجربة إيجابية على موقعنا الإلكتروني. توضح سياسة الخصوصية هذه كيفية جمع واستخدام والكشف عن حماية معلوماتك عند زيارة موقعنا."}
              </p>

              <div>
                <h4 className="text-clinic-dark font-bold mb-2">
                  {language === "en" ? "1. Information We Collect" : "١. المعلومات التي نجمعها"}
                </h4>
                <p>
                  {language === "en"
                    ? "We may collect information about you in a variety of ways. The information we collect on our site may include but is not limited to: personal identification information, contact information, and any other information you voluntarily provide."
                    : "قد نجمع معلومات عنك بعدة طرق. قد تتضمن المعلومات التي نجمعها على موقعنا على سبيل المثال لا الحصر: معلومات التعريف الشخصية ومعلومات الاتصال وأي معلومات أخرى تقدمها طواعية."}
                </p>
              </div>

              <div>
                <h4 className="text-clinic-dark font-bold mb-2">
                  {language === "en" ? "2. Use of Your Information" : "٢. استخدام معلوماتك"}
                </h4>
                <p>
                  {language === "en"
                    ? "We use the information we collect in the following ways: to personalize your experience, to improve our website, to send promotional communications, to respond to your inquiries, and to operate and maintain our services."
                    : "نستخدم المعلومات التي نجمعها بالطرق التالية: لتخصيص تجربتك، لتحسين موقعنا الإلكتروني، لإرسال اتصالات ترويجية، للرد على استفساراتك، وتشغيل وصيانة خدماتنا."}
                </p>
              </div>

              <div>
                <h4 className="text-clinic-dark font-bold mb-2">
                  {language === "en" ? "3. Protection of Your Information" : "٣. حماية معلوماتك"}
                </h4>
                <p>
                  {language === "en"
                    ? "We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights."
                    : "ننفذ مجموعة متنوعة من تدابير الأمان للحفاظ على سلامة معلوماتك الشخصية. تكون معلوماتك الشخصية محمية بشبكات آمنة ولا يمكن الوصول إليها إلا من قبل عدد محدود من الأشخاص الذين لديهم حقوق وصول خاصة."}
                </p>
              </div>

              <div>
                <h4 className="text-clinic-dark font-bold mb-2">
                  {language === "en" ? "4. Contact Us" : "٤. اتصل بنا"}
                </h4>
                <p>
                  {language === "en"
                    ? "If you have questions or concerns about this Privacy Policy, please contact us at the provided phone number or email address."
                    : "إذا كان لديك أسئلة أو مخاوف حول سياسة الخصوصية هذه، يرجى الاتصال بنا على رقم الهاتف أو عنوان البريد الإلكتروني المقدم."}
                </p>
              </div>
            </div>
          </div>

          {/* Terms of Service */}
          <div className="mb-10 md:mb-14">
            <h2 className="text-clinic-dark font-serif text-2xl md:text-3xl mb-4 md:mb-6">
              {t(language, "terms_of_service")}
            </h2>
            <div className="space-y-4 md:space-y-5 text-clinic-dark font-newsreader text-sm md:text-base leading-relaxed">
              <p>
                {language === "en"
                  ? "These Terms of Service govern your access to and use of the Dr. Mohamed Abouzekry Clinic website. By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement."
                  : "تحكم شروط الخدمة هذه وصولك واستخدامك لموقع عيادة الدكتور محمد أبوذكري. بالوصول إلى هذا الموقع واستخدامه، فإنك توافق على الالتزام بشروط وأحكام هذا الاتفاق."}
              </p>

              <div>
                <h4 className="text-clinic-dark font-bold mb-2">
                  {language === "en" ? "1. License to Use" : "١. ترخيص للاستخدام"}
                </h4>
                <p>
                  {language === "en"
                    ? "We grant you a limited, non-exclusive, and non-transferable license to access and use our website for personal, non-commercial purposes. You agree not to reproduce, duplicate, copy, sell, or resell any portion of this website or its contents."
                    : "نمنحك ترخيصاً محدوداً وغير حصري وغير قابل للنقل للوصول إلى موقعنا واستخدامه لأغراض شخصية وغير تجارية. توافق على عدم تكرار أو نسخ أو بيع أو إعادة بيع أي جزء من موقعنا أو محتوياته."}
                </p>
              </div>

              <div>
                <h4 className="text-clinic-dark font-bold mb-2">
                  {language === "en"
                    ? "2. Disclaimer of Warranties"
                    : "٢. إخلاء المسؤولية عن الضمانات"}
                </h4>
                <p>
                  {language === "en"
                    ? "Our website is provided on an 'as-is' basis. We make no warranties, expressed or implied, regarding the website or the materials contained within. We do not warrant that our website will be uninterrupted or error-free."
                    : "يتم توفير موقعنا الإلكتروني على أساس 'كما هو'. لا نقدم أي ضمانات، صريحة أو ضمنية، فيما يتعلق بالموقع أو المواد الموجودة فيه. لا نضمن أن موقعنا سيكون خالياً من الأخطاء."}
                </p>
              </div>

              <div>
                <h4 className="text-clinic-dark font-bold mb-2">
                  {language === "en"
                    ? "3. Limitation of Liability"
                    : "٣. تحديد المسؤولية"}
                </h4>
                <p>
                  {language === "en"
                    ? "In no event shall Dr. Mohamed Abouzekry Clinic, or any of its officers, directors, or employees, be liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of our website."
                    : "في أي حال من الأحوال، لا تكون عيادة الدكتور محمد أبوذكري أو أي من مسؤوليها أو مديريها أو موظفيها مسؤولين عن أي أضرار غير مباشرة أو عارضة أو خاصة أو تبعية ناشئة عن أو تتعلق باستخدامك لموقعنا."}
                </p>
              </div>

              <div>
                <h4 className="text-clinic-dark font-bold mb-2">
                  {language === "en"
                    ? "4. Medical Disclaimer"
                    : "٤. إخلاء المسؤولية الطبي"}
                </h4>
                <p>
                  {language === "en"
                    ? "The information provided on this website is for educational purposes only and should not be considered as medical advice. Always consult with a qualified healthcare professional before making any medical decisions. Our clinic and Dr. Mohamed Abouzekry do not provide medical advice through this website."
                    : "المعلومات المقدمة على هذا الموقع هي لأغراض تعليمية فقط ولا يجب اعتبارها نصيحة طبية. استشير دائماً مع متخصص رعاية صحية مؤهل قبل اتخاذ أي قرارات طبية. لا توفر عيادتنا والدكتور محمد أبوذكري نصائح طبية من خلال هذا الموقع."}
                </p>
              </div>

              <div>
                <h4 className="text-clinic-dark font-bold mb-2">
                  {language === "en" ? "5. Contact for Inquiries" : "٥. التواصل للاستفسارات"}
                </h4>
                <p>
                  {language === "en"
                    ? "For any questions or concerns regarding these Terms of Service, please contact us at contact@abouzekryclinic.com or call +20 47 322 7027."
                    : "لأي أسئلة أو مخاوف بخصوص شروط الخدمة هذه، يرجى الاتصال بنا على contact@abouzekryclinic.com أو اتصل على +20 47 322 7027."}
                </p>
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div className="bg-clinic-rose bg-opacity-20 p-4 md:p-6 rounded-lg mb-8 md:mb-12 text-center">
            <p className="text-clinic-dark font-newsreader text-xs md:text-sm">
              {language === "en" ? "Last Updated: " : "آخر تحديث: "}
              <strong>May 2026</strong>
            </p>
          </div>

          {/* Back Button */}
          <div className="pt-6 md:pt-8 text-center">
            <Link
              to="/"
              className="inline-block bg-clinic-dark text-white font-newsreader py-2 md:py-3 px-6 md:px-8 rounded-lg hover:bg-clinic-burgundy transition-colors text-sm md:text-base"
            >
              {t(language, "back_home")}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
