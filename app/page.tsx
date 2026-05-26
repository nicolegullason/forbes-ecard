import Image from "next/image";
import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import ChevronDown from "./components/ChevronDown";

export default function Home() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="bg-swoosh min-h-screen flex flex-col">
        <SiteHeader />
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 pb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-white mt-8">
            Lael Elizabeth Forbes, MD, FACS, FASMBS
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link href="/patient-info" className="btn-navy min-w-[220px]">
              Patient Information
            </Link>
            <Link href="/physician-info" className="btn-navy min-w-[220px]">
              Physician Information
            </Link>
          </div>
        </div>
        <ChevronDown />
      </section>

      {/* ── DR. FORBES BIO ── */}
      <section
        className="py-16 px-6 text-center"
        style={{ background: "linear-gradient(180deg, #0a1228 0%, #0d1b3e 100%)" }}
      >
        <div className="max-w-2xl mx-auto">
          <div
            className="mx-auto mb-8 rounded-full overflow-hidden border-2 border-white/20"
            style={{ width: 200, height: 200 }}
          >
            <Image
              src="/images/dr-forbes.jpg"
              alt="Dr. Lael Elizabeth Forbes"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Dr. Lael Elizabeth Forbes
          </h2>
          <p className="text-white/85 text-base md:text-lg leading-relaxed">
            Meet Lael E. Forbes, MD, FACS, FASMBS—an expert in transformative medicine and
            precision surgery providing innovative, evidence-based care in medical and surgical
            weight-loss, metabolic health, and long-term wellness.
          </p>

          <h3 className="text-xl font-semibold mt-10 mb-4">Contact Information</h3>
          <div className="flex flex-col items-center gap-3 text-white/85 text-base">
            <a
              href="mailto:info@myforbeshealth.com"
              className="flex items-center gap-3 hover:text-white transition-colors"
            >
              <span className="text-xl">✉</span>
              <span className="underline">info@myforbeshealth.com</span>
            </a>
            <a
              href="tel:+12123044331"
              className="flex items-center gap-3 hover:text-white transition-colors"
            >
              <span className="text-xl">📞</span>
              <span>(212) 304-4331</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── OFFICE LOCATIONS ── */}
      <section className="bg-swoosh py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Office Locations</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* New York */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">New York, NY</h3>
              <div className="flex items-start gap-3 text-white/85 mb-4">
                <span className="text-xl mt-0.5">📍</span>
                <p>
                  184 E 70th St. Ste 4 (Buzzer #4, Level B2),<br />
                  New York, NY 10021
                </p>
              </div>
              <div className="rounded-xl overflow-hidden border border-white/15">
                <iframe
                  title="New York Office Map"
                  src="https://maps.google.com/maps?q=184+E+70th+St,+New+York,+NY+10021&output=embed&z=15"
                  width="100%"
                  height="280"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href="https://maps.google.com/?q=184+E+70th+St+Ste+4+New+York+NY+10021"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mt-3 text-white/60 text-sm hover:text-white/90 transition-colors"
              >
                Open in Google Maps →
              </a>
            </div>

            {/* Armonk */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">Armonk, NY</h3>
              <div className="flex items-start gap-3 text-white/85 mb-4">
                <span className="text-xl mt-0.5">📍</span>
                <p>
                  5 North Greenwich Road,<br />
                  Armonk, NY 10504
                </p>
              </div>
              <div className="rounded-xl overflow-hidden border border-white/15">
                <iframe
                  title="Armonk Office Map"
                  src="https://maps.google.com/maps?q=5+N+Greenwich+Rd,+Armonk,+NY+10504&output=embed&z=15"
                  width="100%"
                  height="280"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href="https://maps.google.com/?q=5+North+Greenwich+Road+Armonk+NY+10504"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mt-3 text-white/60 text-sm hover:text-white/90 transition-colors"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM NAV ── */}
      <section
        className="py-16 px-6 text-center"
        style={{ background: "linear-gradient(180deg, #0d1b3e 0%, #080f24 100%)" }}
      >
        <div className="flex flex-col items-center gap-4 max-w-xs mx-auto">
          <Link href="/patient-info" className="btn-navy w-full">
            Patient Information
          </Link>
          <Link href="/physician-info" className="btn-navy w-full">
            Physician Information
          </Link>
        </div>
      </section>
    </main>
  );
}
