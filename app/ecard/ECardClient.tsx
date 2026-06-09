"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ecard.module.css";

const DR = {
  firstName: "Lael", middle: "E.", lastName: "Forbes",
  suffix: "MD, FACS, FASMBS", title: "Bariatric Surgeon & Metabolic Specialist",
  specialties: ["Transformative Medicine", "Precision Surgery", "Metabolic Health"],
  phone: "(212) 304-4331", phoneTel: "+12123044331", fax: "(212) 947-3952",
  email: "info@myforbeshealth.com", web: "myforbeshealth.com",
  address1: "184 E 70th St. Ste 4", address2: "New York, NY 10021",
  address1Armonk: "5 North Greenwich Road", address2Armonk: "Armonk, NY 10504",
  mapsHref: "https://maps.google.com/?q=184+E+70th+St+Ste+4+New+York+NY+10021",
  mapsHrefArmonk: "https://maps.google.com/?q=5+North+Greenwich+Road+Armonk+NY+10504",
  mapsEmbed: "https://maps.google.com/maps?q=184+E+70th+St,+New+York,+NY+10021&output=embed&z=15",
  mapsEmbedArmonk: "https://maps.google.com/maps?q=5+N+Greenwich+Rd,+Armonk,+NY+10504&output=embed&z=15",
};

function downloadVCard() {
  const lines = [
    "BEGIN:VCARD","VERSION:3.0",
    `N:${DR.lastName};${DR.firstName};${DR.middle};;${DR.suffix}`,
    `FN:${DR.firstName} ${DR.middle} ${DR.lastName}, ${DR.suffix}`,
    `TITLE:${DR.title}`,"ORG:Forbes Health",
    `TEL;TYPE=WORK,VOICE:${DR.phoneTel}`,"TEL;TYPE=FAX:+12129473952",
    `EMAIL;TYPE=INTERNET,WORK:${DR.email}`,`URL:https://${DR.web}`,
    `ADR;TYPE=WORK:;;${DR.address1};New York;NY;10021;USA`,"END:VCARD",
  ].join("\n");
  const url = URL.createObjectURL(new Blob([lines], { type: "text/vcard;charset=utf-8" }));
  const a = Object.assign(document.createElement("a"), { href: url, download: "Lael-Forbes-MD.vcf" });
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function useToast() {
  const [msg, setMsg] = useState<string | null>(null);
  const t = useRef<ReturnType<typeof setTimeout>>(undefined);
  const show = useCallback((m: string) => { setMsg(m); clearTimeout(t.current); t.current = setTimeout(() => setMsg(null), 1900); }, []);
  return { msg, show };
}

const Phone = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.79a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.29-1.29a2 2 0 0 1 2.11-.45c.89.35 1.83.59 2.79.72A2 2 0 0 1 22 16.92z"/></svg>;
const Mail  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>;
const Pin   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>;
const Share = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>;
const Globe = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18"/></svg>;
const CardI = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M14 10h4M14 13h4M5 17h6"/></svg>;

export default function ECardClient() {
  const { msg, show } = useToast();

  const share = async () => {
    const text = `${DR.firstName} ${DR.middle} ${DR.lastName}, ${DR.suffix} — ${DR.title}`;
    try {
      if (navigator.share) await navigator.share({ title: text, text, url: `https://${DR.web}` });
      else { await navigator.clipboard?.writeText(`${text}\nhttps://${DR.web}\n${DR.phone}`); show("Copied to clipboard"); }
    } catch { /* dismissed */ }
  };

  return (
    <div className={styles.page}>
      <Image src="/logo-white.png" alt="Forbes Health" width={4250} height={2125} className={styles.logo} priority unoptimized />

      <div className={styles.card}>

        {/* ── Headshot ── */}
        <div className={styles.photoWrap}>
          <img src="/images/dr-forbes-headshot.png" alt="Dr. Lael E. Forbes" className={styles.photo} />
        </div>

        {/* ── Identity ── */}
        <h1 className={styles.name}>Lael E. Forbes, MD</h1>
        <div className={styles.credentials}>FACS &nbsp;·&nbsp; FASMBS</div>
        <div className={styles.rule} />
        <div className={styles.specialties}>
          {DR.specialties.map((s, i) => (
            <span key={s}>{i > 0 && <span className={styles.dot} />}{s}</span>
          ))}
        </div>

        {/* ── Navigation buttons ── */}
        <div className={styles.navBtns}>
          <Link href="/patient-info" className={styles.navBtn}>Patient Information</Link>
          <Link href="/physician-info" className={styles.navBtn}>Physician Information</Link>
        </div>

        {/* ── Contact ── */}
        <div className={styles.divider} />
        <div className={styles.section}><div className={styles.sectionLabel}>Phone</div><a href={`tel:${DR.phoneTel}`} className={styles.sectionValue}>{DR.phone}</a></div>
        <div className={styles.section}><div className={styles.sectionLabel}>Fax</div><span className={styles.sectionValue}>{DR.fax}</span></div>
        <div className={styles.section}><div className={styles.sectionLabel}>Email</div><a href={`mailto:${DR.email}`} className={styles.sectionValue}>{DR.email}</a></div>
        <div className={styles.section}><div className={styles.sectionLabel}>Website</div><a href={`https://${DR.web}`} target="_blank" rel="noreferrer" className={styles.sectionValue}>{DR.web}</a></div>
        <div className={styles.section}><div className={styles.sectionLabel}>New York</div><a href={DR.mapsHref} target="_blank" rel="noreferrer" className={styles.sectionValue}>{DR.address1}</a><span className={styles.sectionSmall}>{DR.address2}</span></div>
        <div className={styles.section}><div className={styles.sectionLabel}>Armonk</div><a href={DR.mapsHrefArmonk} target="_blank" rel="noreferrer" className={styles.sectionValue}>{DR.address1Armonk}</a><span className={styles.sectionSmall}>{DR.address2Armonk}</span></div>

        {/* ── Save + pills ── */}
        <button className={styles.saveBtn} onClick={() => { downloadVCard(); show("Contact saved"); }}>
          <CardI /> Save Contact
        </button>
        <div className={styles.pills}>
          <a className={styles.pill} href={`tel:${DR.phoneTel}`}><Phone /> Call</a>
          <a className={styles.pill} href={`mailto:${DR.email}`}><Mail /> Email</a>
          <a className={styles.pill} href={DR.mapsHref} target="_blank" rel="noreferrer"><Pin /> Directions</a>
          <a className={styles.pill} href={`https://${DR.web}`} target="_blank" rel="noreferrer"><Globe /> Website</a>
          <button className={styles.pill} onClick={share}><Share /> Share</button>
        </div>

        {/* ── Maps ── */}
        <div className={styles.sectionHeader} style={{ marginTop: 44 }}>
          <div className={styles.sectionHeaderLine} />
          <span className={styles.sectionHeaderLabel}>Office Locations</span>
          <div className={styles.sectionHeaderLine} />
        </div>
        <div className={styles.mapWrap}>
          <div className={styles.mapLabel}>New York, NY</div>
          <div className={styles.mapFrame}><iframe title="New York Office" src={DR.mapsEmbed} height="220" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
          <a href={DR.mapsHref} target="_blank" rel="noreferrer" className={styles.mapLink}>Open in Google Maps →</a>
        </div>
        <div className={styles.mapWrap} style={{ marginTop: 20 }}>
          <div className={styles.mapLabel}>Armonk, NY</div>
          <div className={styles.mapFrame}><iframe title="Armonk Office" src={DR.mapsEmbedArmonk} height="220" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
          <a href={DR.mapsHrefArmonk} target="_blank" rel="noreferrer" className={styles.mapLink}>Open in Google Maps →</a>
        </div>

        {/* ── Footer nav ── */}
        <div className={styles.subNav}>
          <div className={styles.subNavLabel}>Explore</div>
          <div className={styles.subNavLinks}>
            <Link href="/patient-info" className={styles.subNavLink}>Patient Info</Link>
            <Link href="/physician-info" className={styles.subNavLink}>Physician Info</Link>
            <a href={`https://${DR.web}`} target="_blank" rel="noreferrer" className={styles.subNavLink}>Website</a>
          </div>
        </div>
      </div>

      <div className={styles.footer}>Forbes Health &nbsp;·&nbsp; {new Date().getFullYear()}</div>
      <div className={`${styles.toast} ${msg ? styles.toastShow : ""}`}>{msg ?? ""}</div>
    </div>
  );
}
