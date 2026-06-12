import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Adv. Pinki Goswami | Criminal Lawyer – Jodhpur, Rajasthan",
  description:
    "Expert criminal defence lawyer in Jodhpur. Bail, Sessions Court trials, FIR quashing & criminal consultation. Call or WhatsApp: +91 70733 18678",
  keywords: "criminal lawyer Jodhpur, advocate Pinki Goswami, bail application Jodhpur, criminal defence Rajasthan",
  openGraph: {
    title: "Adv. Pinki Goswami | Criminal Lawyer – Jodhpur",
    description: "Expert criminal defence lawyer in Jodhpur, Rajasthan.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
