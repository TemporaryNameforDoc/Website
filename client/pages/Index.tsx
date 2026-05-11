import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clock } from "lucide-react";

export default function Index() {
  return (
    <div className="bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-12 md:pb-16 bg-clinic-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Hero Image */}
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-full order-2 lg:order-1">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fb23d9c40846d454db59829c2ec1b400b%2F8bac93c5b75f45ef95612264986eda87?format=webp&width=800&height=1200"
                alt="Dr. Mohamed Abouzekry"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Hero Content */}
            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
              {/* Consultation Box */}
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border-2 border-clinic-dark">
                <h3 className="text-clinic-burgundy font-serif text-2xl sm:text-3xl md:text-4xl text-center leading-tight mb-4 md:mb-6">
                  Consultant in Obstetrics, Gynecology, Laparoscopy, and ICSI.
                </h3>
              </div>

              {/* Main Heading */}
              <h1 className="text-clinic-dark font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                Trusted Women's Healthcare,
              </h1>

              {/* Tagline with divider */}
              <div className="space-y-3 md:space-y-4">
                <div className="h-1 w-full bg-clinic-rose rounded-full"></div>
                <h2 className="text-clinic-dark font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                  Backed by 30 Years of Experience.
                </h2>
              </div>

              {/* Operating Hours Card */}
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border border-clinic-dark border-opacity-20">
                <h3 className="text-clinic-dark font-serif text-xl md:text-2xl mb-4 md:mb-6 flex items-center gap-2">
                  <Clock size={20} />
                  Operating Hours
                </h3>
                <div className="space-y-2 md:space-y-3 text-clinic-dark font-newsreader text-sm">
                  <p>
                    <span className="font-bold">Saturday – Thursday:</span>
                    <br />
                    9:00 AM - 5:00 PM
                  </p>
                  <p className="font-bold text-sm">
                    Friday: Closed (Emergency Cases Only)
                  </p>
                  <p className="text-base pt-2">
                    For registration call: <br />
                    <span className="font-bold text-lg">0473227027</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-clinic-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Services Title */}
            <div className="lg:col-span-2">
              <h2 className="text-white font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                Offered Specialized Services:
              </h2>
            </div>

            {/* Services Grid */}
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
              {/* Service Card 1 */}
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border-2 border-clinic-dark">
                <h3 className="text-clinic-dark font-serif text-xl md:text-2xl lg:text-3xl text-center">
                  Gynecological Consultations
                </h3>
                <p className="text-clinic-dark font-newsreader text-sm mt-3 md:mt-4">
                  Comprehensive gynecological care and consultations for all
                  women's health concerns.
                </p>
              </div>

              {/* Service Card 2 */}
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border-2 border-clinic-dark">
                <h3 className="text-clinic-dark font-serif text-xl md:text-2xl lg:text-3xl text-center">
                  Obstetrics Services
                </h3>
                <p className="text-clinic-dark font-newsreader text-sm mt-3 md:mt-4">
                  Expert prenatal care, delivery services, and postpartum
                  support.
                </p>
              </div>

              {/* Service Card 3 */}
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border-2 border-clinic-dark">
                <h3 className="text-clinic-dark font-serif text-xl md:text-2xl lg:text-3xl text-center">
                  Laparoscopy Procedures
                </h3>
                <p className="text-clinic-dark font-newsreader text-sm mt-3 md:mt-4">
                  Minimally invasive surgical procedures using advanced
                  laparoscopic techniques.
                </p>
              </div>

              {/* Service Card 4 */}
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border-2 border-clinic-dark">
                <h3 className="text-clinic-dark font-serif text-xl md:text-2xl lg:text-3xl text-center">
                  ICSI Treatment
                </h3>
                <p className="text-clinic-dark font-newsreader text-sm mt-3 md:mt-4">
                  Advanced Intracytoplasmic Sperm Injection for fertility
                  treatment.
                </p>
              </div>
            </div>

            {/* Services Image */}
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-full order-1 lg:order-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fb23d9c40846d454db59829c2ec1b400b%2F683a08d61da74c95862d4c38132d5adc?format=webp&width=800&height=1200"
                alt="Medical consultation"
                className="w-full h-full object-cover rounded-lg"
              />
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
                  Dr. Mohamed Abouzekry
                </h3>
                <p className="text-clinic-dark font-newsreader text-base md:text-lg leading-relaxed">
                  With over 30 years of dedicated experience in obstetrics,
                  gynecology, and reproductive medicine, Dr. Abouzekry is
                  committed to providing compassionate, evidence-based care to
                  women at every stage of life.
                </p>
              </div>

              {/* Qualifications */}
              <div className="bg-clinic-cream p-4 sm:p-6 md:p-8 rounded-lg">
                <h4 className="text-clinic-dark font-serif text-xl md:text-2xl mb-3 md:mb-4">
                  Specializations
                </h4>
                <ul className="text-clinic-dark font-newsreader text-sm md:text-base space-y-2">
                  <li>✓ Obstetrics & Gynecology</li>
                  <li>✓ Laparoscopic Surgery</li>
                  <li>✓ Fertility & ICSI Treatment</li>
                  <li>✓ Women's Health Consultations</li>
                </ul>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-clinic-dark text-white font-newsreader py-3 md:py-4 rounded-lg hover:bg-clinic-burgundy transition-colors text-base md:text-lg font-bold">
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
