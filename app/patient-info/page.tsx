import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../ecard/ecard.module.css";

export const metadata: Metadata = {
  title: "Patient Information — Forbes Health",
  description:
    "Advanced, compassionate medical and surgical weight management at Forbes Health. GLP-1 therapy, bariatric surgery, nutrition counseling, and more.",
};

export default function PatientInfo() {
  return (
    <div className={styles.page}>
      <Image src="/logo-white.png" alt="Forbes Health" width={4250} height={2125} className={styles.logo} priority />

      <div className={styles.card}>
        <Link href="/" className={styles.backLink}>← Back to ECard</Link>

        <div className={styles.sectionHeader}>
          <div className={styles.sectionHeaderLine} />
          <span className={styles.sectionHeaderLabel}>Patient Information</span>
          <div className={styles.sectionHeaderLine} />
        </div>

        <p className={styles.bodyText}>
          At Forbes Health, we deliver advanced, compassionate medical and surgical weight
          management through a transformative, whole-body approach to metabolic health. Our
          physician-led care is thoughtfully personalized to restore balance, support sustainable
          weight loss, and promote long-term vitality and longevity.
        </p>

        <div className={styles.sectionHeader} style={{ marginTop: 44 }}>
          <div className={styles.sectionHeaderLine} />
          <span className={styles.sectionHeaderLabel}>How Can We Help You</span>
          <div className={styles.sectionHeaderLine} />
        </div>

        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceTitle}>Transformative Medicine</div>
            <ul className={styles.serviceList}>
              <li>GLP-1 Therapy</li>
              <li>Hormone optimization</li>
              <li>Menopause &amp; PCOS support</li>
              <li>Non-surgical weight loss</li>
              <li>Longevity care</li>
            </ul>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceTitle}>Precision Surgery</div>
            <ul className={styles.serviceList}>
              <li>Bariatric surgery</li>
              <li>Severe obesity treatment</li>
              <li>Hernia surgery</li>
              <li>GI procedures</li>
            </ul>
          </div>
        </div>

        <div className={styles.sectionHeader} style={{ marginTop: 44 }}>
          <div className={styles.sectionHeaderLine} />
          <span className={styles.sectionHeaderLabel}>Additional Services</span>
          <div className={styles.sectionHeaderLine} />
        </div>

        <div className={styles.serviceGrid} style={{ gridTemplateColumns: "1fr" }}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceTitle}>Nutrition Counseling &amp; Support</div>
            <p className={styles.serviceText}>
              One-on-one nutrition counseling is a core part of Forbes Health&apos;s comprehensive
              weight loss and management programs. Our licensed dieticians work closely with Dr.
              Forbes to create personalized, medically aligned nutrition plans.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceTitle}>Insurance Advocacy</div>
            <p className={styles.serviceText}>
              At Forbes Health, we actively advocate for your insurance coverage. We verify
              benefits, review out-of-network options, and pursue every reimbursement opportunity.
              We specialize in navigating prescription approvals, appealing denials, and securing
              access to the medications you need.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceTitle}>Psychological Counseling</div>
            <p className={styles.serviceText}>
              We combine advanced metabolic care with dedicated psychological support to address
              the full mind–body impact of obesity. We incorporate evidence-based strategies such
              as cognitive behavioral therapy, emotional eating support, and counseling alongside
              GLP-1 treatments.
            </p>
          </div>
        </div>

        <a
          href="https://myforbeshealth.com"
          target="_blank"
          rel="noreferrer"
          className={styles.ctaBtn}
          style={{ marginTop: 36 }}
        >
          Schedule a Consultation
        </a>

        <div className={styles.subNav}>
          <div className={styles.subNavLabel}>Explore</div>
          <div className={styles.subNavLinks}>
            <Link href="/" className={styles.subNavLink}>ECard</Link>
            <Link href="/physician-info" className={styles.subNavLink}>Physician Info</Link>
            <a href="https://myforbeshealth.com" target="_blank" rel="noreferrer" className={styles.subNavLink}>Website</a>
          </div>
        </div>
      </div>

      <div className={styles.footer}>Forbes Health &nbsp;·&nbsp; {new Date().getFullYear()}</div>
    </div>
  );
}
