import type { Metadata } from "next";
import ECardClient from "./ecard/ECardClient";

export const metadata: Metadata = {
  title: "ECard — Dr. Lael Elizabeth Forbes, MD, FACS, FASMBS",
  description:
    "Electronic business card for Dr. Lael Elizabeth Forbes — Medical Weight Loss, Bariatric Surgery & Metabolic Health, New York, NY.",
};

export default function Home() {
  return <ECardClient />;
}
