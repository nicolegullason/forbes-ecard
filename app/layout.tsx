import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Forbes Health — Dr. Lael Elizabeth Forbes, MD, FACS, FASMBS",
  description:
    "Advanced metabolic and surgical weight management led by Dr. Lael Elizabeth Forbes. Serving New York, NY and Armonk, NY.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full`}>
        {/* Global SVG heart clip-path definition */}
        <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <clipPath id="heartClip" clipPathUnits="objectBoundingBox">
              <path d="M0.5,0.9 C0.5,0.9 0.08,0.62 0.08,0.36 C0.08,0.18 0.2,0.06 0.35,0.06 C0.42,0.06 0.47,0.1 0.5,0.16 C0.53,0.1 0.58,0.06 0.65,0.06 C0.8,0.06 0.92,0.18 0.92,0.36 C0.92,0.62 0.5,0.9 0.5,0.9 Z" />
            </clipPath>
          </defs>
        </svg>
        {children}
      </body>
    </html>
  );
}
