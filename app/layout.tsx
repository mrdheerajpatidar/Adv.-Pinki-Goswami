import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/600.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';

export const metadata: Metadata = {
  title: "Adv. Pinki Goswami | Criminal Lawyer – Jodhpur, Rajasthan",
  description:
    "Expert criminal defence lawyer in Jodhpur. Bail applications, NDPS cases, Sessions Court trials, Rajasthan High Court. Criminal lawyer Jodhpur, advocate Pinki Goswami. Call or WhatsApp: +91 70733 18678",
  keywords:
    "criminal lawyer Jodhpur, advocate Pinki Goswami, bail application, NDPS cases, Rajasthan High Court, criminal defence Rajasthan",
  metadataBase: new URL("https://advpinkigoswami.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Adv. Pinki Goswami | Criminal Lawyer – Jodhpur",
    description:
      "Expert criminal defence lawyer in Jodhpur, Rajasthan. Bail, NDPS, Sessions Court trials.",
    type: "website",
    url: "https://advpinkigoswami.com",
    images: [
      {
        url: "/pinki-adv.jpeg",
        width: 1200,
        height: 630,
        alt: "Advocate Pinki Goswami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adv. Pinki Goswami | Criminal Lawyer – Jodhpur",
    description: "Expert criminal defence lawyer in Jodhpur, Rajasthan.",
    images: ["/pinki-adv.jpeg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  name: "Advocate Pinki Goswami",
  description: "Criminal Defence Lawyer in Jodhpur, Rajasthan",
  telephone: "+91-7073318678",
  url: "https://advpinkigoswami.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Foot Planet, Near PNB Bank, Madhuban Basni",
    addressLocality: "Jodhpur",
    addressRegion: "Rajasthan",
    postalCode: "342005",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "State",
    name: "Rajasthan",
  },
  knowsAbout: [
    "Criminal Law",
    "Bail Applications",
    "NDPS Cases",
    "Sessions Court Trials",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
