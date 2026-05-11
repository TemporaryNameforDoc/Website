import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

export default function Legal() {
  return (
    <div className="bg-white">
      <Header />

      {/* Main Content */}
      <section className="min-h-screen pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-clinic-dark font-serif text-3xl sm:text-4xl md:text-5xl mb-8 md:mb-12 mt-6 md:mt-8">
            Legal & Privacy
          </h1>

          <div className="space-y-6 md:space-y-8 text-clinic-dark font-newsreader text-sm md:text-base leading-relaxed">
            <div>
              <h2 className="text-clinic-dark font-serif text-2xl md:text-3xl mb-3 md:mb-4">
                Privacy Policy
              </h2>
              <p>
                Your privacy is important to us. This page should contain your
                clinic's privacy policy and terms of service.
              </p>
            </div>

            <div>
              <h2 className="text-clinic-dark font-serif text-2xl md:text-3xl mb-3 md:mb-4">
                Terms of Service
              </h2>
              <p>
                This page is a placeholder. Please continue prompting to fill in
                this page content with your actual legal information.
              </p>
            </div>

            <div className="pt-6 md:pt-8">
              <Link
                to="/"
                className="inline-block bg-clinic-dark text-white font-newsreader py-2 md:py-3 px-6 md:px-8 rounded-lg hover:bg-clinic-burgundy transition-colors text-sm md:text-base"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
