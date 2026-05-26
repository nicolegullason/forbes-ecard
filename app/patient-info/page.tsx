import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import ChevronDown from "../components/ChevronDown";
import HeartImage from "../components/HeartImage";

export const metadata: Metadata = {
  title: "Patient Information — Forbes Health",
  description:
    "Advanced, compassionate medical and surgical weight management at Forbes Health. GLP-1 therapy, bariatric surgery, nutrition counseling, and more.",
};

export default function PatientInfo() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="bg-swoosh min-h-screen flex flex-col">
        <SiteHeader />
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 pb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-white mt-8">
            Patient Information
          </h1>
        </div>
        <ChevronDown />
      </section>

      {/* ── WELCOME ── */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: "linear-gradient(180deg, #080f24 0%, #0d1b3e 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome Patients</h2>
          <p className="text-white/85 text-base md:text-lg leading-relaxed mb-10">
            At Forbes Health, we deliver advanced, compassionate medical and surgical weight
            management through a transformative, whole-body approach to metabolic health. Our
            physician-led care is thoughtfully personalized to restore balance, support
            sustainable weight loss, and promote long-term vitality and longevity.
          </p>
          <a
            href="https://myforbeshealth.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-navy inline-block"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* ── HOW CAN WE HELP ── */}
      <section className="bg-city py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            How can we help you today?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="service-card text-left">
              <h3 className="text-xl font-semibold text-center mb-5">
                Transformative Medicine
              </h3>
              <ul className="space-y-2 text-white/85 text-base">
                <li>• GLP-1 Therapy</li>
                <li>• Hormone optimization</li>
                <li>• Menopause &amp; PCOS support</li>
                <li>• Non-surgical weight loss</li>
                <li>• Longevity care</li>
              </ul>
            </div>
            <div className="service-card text-left">
              <h3 className="text-xl font-semibold text-center mb-5">
                Precision Surgery
              </h3>
              <ul className="space-y-2 text-white/85 text-base">
                <li>• Bariatric surgery</li>
                <li>• Severe obesity treatment</li>
                <li>• Hernia surgery</li>
                <li>• GI procedures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADDITIONAL SERVICES ── */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: "linear-gradient(180deg, #0a1228 0%, #0d1b3e 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-14">Additional Services</h2>

          {/* Nutrition */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">Nutrition Counseling &amp; Support</h3>
            <HeartImage src="/images/heart-nutrition.jpg" alt="Nutrition Counseling" />
            <p className="mt-6 text-white/85 text-base md:text-lg leading-relaxed">
              One-on-one nutrition counseling is a core part of Forbes Health&apos;s comprehensive
              weight loss and management programs. Our licensed dieticians work closely with Dr.
              Forbes to create personalized, medically aligned nutrition plans. If interested,
              please visit the &ldquo;Learn More&rdquo; section of our website linked below to learn more
              about the importance of nutrition in every GLP-1 journey.
            </p>
          </div>

          {/* Insurance Advocacy */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">Insurance Advocacy</h3>
            <HeartImage src="/images/heart-insurance.jpg" alt="Insurance Advocacy" />
            <p className="mt-6 text-white/85 text-base md:text-lg leading-relaxed">
              At Forbes Health, we don&apos;t just provide expert medical and surgical care—we
              actively advocate for your insurance coverage. We verify benefits, review
              out-of-network options, and pursue every reimbursement opportunity to help reduce
              your out-of-pocket costs for surgery. We also specialize in navigating prescription
              approvals, appealing denials, and securing access to the medications you need.
              Visit our website to learn more.
            </p>
          </div>

          {/* Psychological Counseling */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-6">Psychological Counseling</h3>
            <HeartImage src="/images/heart-counseling.jpg" alt="Psychological Counseling" />
            <p className="mt-6 text-white/85 text-base md:text-lg leading-relaxed">
              At Forbes Health, we combine advanced metabolic care with dedicated psychological
              support to address the full mind–body impact of obesity. Led by Dr. Lael E. Forbes,
              we incorporate evidence-based strategies such as cognitive behavioral therapy,
              emotional eating support, and counseling alongside GLP-1 treatments to promote
              sustainable weight management and mental well-being.
            </p>
          </div>

          <a
            href="https://myforbeshealth.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-navy inline-block mt-4"
          >
            Visit Our Website
          </a>
        </div>
      </section>
    </main>
  );
}
