import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import ChevronDown from "../components/ChevronDown";

export const metadata: Metadata = {
  title: "Physician Information — Forbes Health",
  description:
    "Partner with Forbes Health for comprehensive obesity and metabolic disease management. Referral information and clinical overview for physicians.",
};

export default function PhysicianInfo() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="bg-swoosh min-h-screen flex flex-col">
        <SiteHeader />
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 pb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-white mt-8">
            Physician Information
          </h1>
        </div>
        <ChevronDown />
      </section>

      {/* ── DEAR FELLOW PHYSICIANS ── */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: "linear-gradient(180deg, #080f24 0%, #0d1b3e 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Dear Fellow Physicians</h2>
          <p className="text-white/85 text-base md:text-lg leading-relaxed">
            Thank you for the opportunity to partner in the care of your patients. Our practice
            focuses on comprehensive obesity and metabolic disease management, integrating
            advanced medical therapy, GLP-1–based pharmacotherapy, and bariatric surgery when
            appropriate. Our team is committed to collaborative care, timely communication, and
            continuity so that your patients remain anchored in your primary oversight while
            receiving specialized metabolic support.
          </p>
        </div>
      </section>

      {/* ── EXPLORE ── */}
      <section className="bg-city py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Explore:</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="#transformative-medicine"
              className="btn-navy block text-xl font-semibold py-5"
            >
              Transformative Medicine
            </a>
            <a
              href="#precision-surgery"
              className="btn-navy block text-xl font-semibold py-5"
            >
              Precision Surgery
            </a>
          </div>
        </div>
      </section>

      {/* ── TRANSFORMATIVE MEDICINE ── */}
      <section
        id="transformative-medicine"
        className="py-20 px-6 text-center bg-swoosh"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Transformative Medicine:</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="service-card text-left">
              <h3 className="text-xl font-semibold text-center mb-5">
                Advanced Medical Obesity Management
              </h3>
              <ul className="space-y-3 text-white/85 text-base">
                <li>• GLP-1/dual incretin pharmacotherapy</li>
                <li>• Combination anti-obesity medication strategies</li>
                <li>• Escalation algorithms for inadequate response</li>
                <li>• Insulin resistance, prediabetes, and T2DM optimization</li>
                <li>• Dyslipidemia and hypertension management</li>
                <li>• Cardiometabolic risk reduction</li>
              </ul>
            </div>
            {/* Card 2 */}
            <div className="service-card text-left">
              <h3 className="text-xl font-semibold text-center mb-5">
                Metabolic &amp; Hormonal Optimization
              </h3>
              <ul className="space-y-3 text-white/85 text-base">
                <li>• Comprehensive metabolic evaluation</li>
                <li>• Endocrine contributors to weight dysregulation</li>
                <li>• Body composition–focused management (muscle preservation)</li>
                <li>• Longitudinal metabolic surveillance</li>
                <li>• Structured physician-supervised weight management</li>
                <li>• Integration with surgical planning when indicated</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRECISION SURGERY ── */}
      <section
        id="precision-surgery"
        className="py-20 px-6 text-center"
        style={{ background: "linear-gradient(180deg, #0a1228 0%, #0d1b3e 100%)" }}
      >
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Precision Surgery:</h2>
          <div className="service-card text-left">
            <ul className="space-y-3 text-white/85 text-base">
              <li>• Laparoscopic and robotic bariatric surgery (SG, RYGB)</li>
              <li>• Revisional and complex bariatric procedures</li>
              <li>• Post-bariatric complication management</li>
              <li>• Ventral, incisional, and complex hernia repair</li>
              <li>• Combined metabolic-surgical management</li>
              <li>• Coordinated perioperative optimization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── APPROPRIATE REFERRALS ── */}
      <section className="bg-city py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Appropriate Referrals</h2>
          <div className="flex justify-center gap-3 mb-8 text-4xl">
            <span>👥</span>
          </div>
          <div className="space-y-3 text-white/90 text-base md:text-lg">
            <p>Obesity with metabolic comorbidities</p>
            <p>Inadequate response to GLP-1 or medical therapy</p>
            <p>Patients considering bariatric surgery</p>
            <p>Weight regain after bariatric surgery</p>
            <p>Complex or recurrent ventral/incisional hernias</p>
            <p>Patients requiring structured, physician-supervised management</p>
          </div>
        </div>
      </section>

      {/* ── ADDITIONAL SERVICES ── */}
      <section
        className="py-20 px-6 text-center bg-swoosh"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Additional Services</h2>
          <div className="grid md:grid-cols-3 gap-6 text-white/85 text-sm">
            <div className="service-card">
              <p className="font-semibold text-white text-base mb-2">Nutrition Counseling</p>
              <p>Personalized, medically aligned nutrition plans by licensed dieticians.</p>
            </div>
            <div className="service-card">
              <p className="font-semibold text-white text-base mb-2">Insurance Advocacy</p>
              <p>Benefits verification, prior auth appeals, and out-of-network support.</p>
            </div>
            <div className="service-card">
              <p className="font-semibold text-white text-base mb-2">Psychological Counseling</p>
              <p>CBT, emotional eating support, and mind–body metabolic care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISIT WEBSITE ── */}
      <section
        className="py-12 px-6 text-center"
        style={{ background: "linear-gradient(180deg, #0d1b3e 0%, #0a1228 100%)" }}
      >
        <div className="max-w-sm mx-auto">
          <a
            href="https://myforbeshealth.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-navy w-full block"
          >
            Visit Our Website
          </a>
        </div>
      </section>

      {/* ── REFERRAL INFORMATION ── */}
      <section className="bg-swoosh py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Referral Information</h2>
          <div className="space-y-1 text-white/90 text-base md:text-lg leading-relaxed">
            <p className="font-semibold text-white">To Make a Referral</p>
            <p>
              Phone:{" "}
              <a href="tel:+12123044331" className="hover:text-white transition-colors">
                (212) 304-4331
              </a>
            </p>
            <p>
              Fax:{" "}
              <a href="tel:+12129473952" className="hover:text-white transition-colors">
                (212) 947-3952
              </a>
            </p>
            <p>Office staff may initiate referrals.</p>
            <p>Relevant labs/imaging helpful but not required.</p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <section
        className="py-10 px-6 text-center"
        style={{ background: "linear-gradient(180deg, #0a1228 0%, #080f24 100%)" }}
      >
        <div className="max-w-xs mx-auto opacity-60">
          {/* Logo watermark */}
          <p className="text-white/40 text-sm tracking-widest uppercase">Forbes Health</p>
        </div>
      </section>
    </main>
  );
}
