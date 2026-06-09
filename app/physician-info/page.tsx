import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../ecard/ecard.module.css";

export const metadata: Metadata = {
  title: "Physician Information — Forbes Health",
  description:
    "Partner with Forbes Health for comprehensive obesity and metabolic disease management. Referral information and clinical overview for physicians.",
};

export default function PhysicianInfo() {
  return (
    <div className={styles.page}>
      <Image src="/logo-white.png" alt="Forbes Health" width={4250} height={2125} className={styles.logo} priority />

      <div className={styles.card}>
        <Link href="/" className={styles.backLink}>← Back to ECard</Link>

        <div className={styles.sectionHeader}>
          <div className={styles.sectionHeaderLine} />
          <span className={styles.sectionHeaderLabel}>Physician Information</span>
          <div className={styles.sectionHeaderLine} />
        </div>

        <p className={styles.bodyText}>
          Thank you for the opportunity to partner in the care of your patients. Our practice
          focuses on comprehensive obesity and metabolic disease management, integrating advanced
          medical therapy, GLP-1–based pharmacotherapy, and bariatric surgery when appropriate.
          Our team is committed to collaborative care, timely communication, and continuity so
          that your patients remain anchored in your primary oversight while receiving specialized
          metabolic support.
        </p>

        <div className={styles.sectionHeader} style={{ marginTop: 44 }}>
          <div className={styles.sectionHeaderLine} />
          <span className={styles.sectionHeaderLabel}>Transformative Medicine</span>
          <div className={styles.sectionHeaderLine} />
        </div>

        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceTitle}>Advanced Medical Obesity Management</div>
            <ul className={styles.serviceList}>
              <li>GLP-1/dual incretin pharmacotherapy</li>
              <li>Combination anti-obesity medication strategies</li>
              <li>Escalation algorithms for inadequate response</li>
              <li>Insulin resistance, prediabetes, and T2DM optimization</li>
              <li>Dyslipidemia and hypertension management</li>
              <li>Cardiometabolic risk reduction</li>
            </ul>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceTitle}>Metabolic &amp; Hormonal Optimization</div>
            <ul className={styles.serviceList}>
              <li>Comprehensive metabolic evaluation</li>
              <li>Endocrine contributors to weight dysregulation</li>
              <li>Body composition–focused management (muscle preservation)</li>
              <li>Longitudinal metabolic surveillance</li>
              <li>Structured physician-supervised weight management</li>
              <li>Integration with surgical planning when indicated</li>
            </ul>
          </div>
        </div>

        <div className={styles.sectionHeader} style={{ marginTop: 44 }}>
          <div className={styles.sectionHeaderLine} />
          <span className={styles.sectionHeaderLabel}>Precision Surgery</span>
          <div className={styles.sectionHeaderLine} />
        </div>

        <div className={styles.serviceGrid} style={{ gridTemplateColumns: "1fr" }}>
          <div className={styles.serviceCard}>
            <ul className={styles.serviceList}>
              <li>Laparoscopic and robotic bariatric surgery (SG, RYGB)</li>
              <li>Revisional and complex bariatric procedures</li>
              <li>Post-bariatric complication management</li>
              <li>Ventral, incisional, and complex hernia repair</li>
              <li>Combined metabolic-surgical management</li>
              <li>Coordinated perioperative optimization</li>
            </ul>
          </div>
        </div>

        <div className={styles.sectionHeader} style={{ marginTop: 44 }}>
          <div className={styles.sectionHeaderLine} />
          <span className={styles.sectionHeaderLabel}>Appropriate Referrals</span>
          <div className={styles.sectionHeaderLine} />
        </div>

        <div className={styles.referralList}>
          {[
            "Obesity with metabolic comorbidities",
            "Inadequate response to GLP-1 or medical therapy",
            "Patients considering bariatric surgery",
            "Weight regain after bariatric surgery",
            "Complex or recurrent ventral/incisional hernias",
            "Patients requiring structured, physician-supervised management",
          ].map((item) => (
            <p key={item} className={styles.referralItem}>{item}</p>
          ))}
        </div>

        <div className={styles.subsectionHeader} style={{ marginTop: 32 }}>To Make a Referral</div>
        <div className={styles.referralContact}>
          <a href="tel:+12123044331" className={styles.sectionValue}>Phone: (212) 304-4331</a>
          <span className={styles.sectionSmall}>Fax: (212) 947-3952</span>
          <p className={styles.referralNote}>
            Office staff may initiate referrals. Relevant labs/imaging helpful but not required.
          </p>
        </div>

        <div className={styles.sectionHeader} style={{ marginTop: 44 }}>
          <div className={styles.sectionHeaderLine} />
          <span className={styles.sectionHeaderLabel}>Additional Services</span>
          <div className={styles.sectionHeaderLine} />
        </div>

        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceTitle}>Nutrition Counseling</div>
            <p className={styles.serviceText}>
              Personalized, medically aligned nutrition plans by licensed dieticians.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceTitle}>Insurance Advocacy</div>
            <p className={styles.serviceText}>
              Benefits verification, prior auth appeals, and out-of-network support.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceTitle}>Psychological Counseling</div>
            <p className={styles.serviceText}>
              CBT, emotional eating support, and mind–body metabolic care.
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
          Visit Our Website
        </a>

        <div className={styles.subNav}>
          <div className={styles.subNavLabel}>Explore</div>
          <div className={styles.subNavLinks}>
            <Link href="/" className={styles.subNavLink}>ECard</Link>
            <Link href="/patient-info" className={styles.subNavLink}>Patient Info</Link>
            <a href="https://myforbeshealth.com" target="_blank" rel="noreferrer" className={styles.subNavLink}>Website</a>
          </div>
        </div>
      </div>

      <div className={styles.footer}>Forbes Health &nbsp;·&nbsp; {new Date().getFullYear()}</div>
    </div>
  );
}
