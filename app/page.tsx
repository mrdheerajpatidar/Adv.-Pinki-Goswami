import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const About = dynamic(() => import("@/components/About"));
const Practice = dynamic(() => import("@/components/Practice"));
const Process = dynamic(() => import("@/components/Process"));
const Contact = dynamic(() => import("@/components/Contact"));
const FloatingWhatsApp = dynamic(() => import("@/components/FloatingWhatsApp"));

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Practice />
      <Process />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
