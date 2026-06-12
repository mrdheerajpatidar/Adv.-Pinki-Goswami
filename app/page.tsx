import Hero from "@/components/Hero";
import About from "@/components/About";
import Practice from "@/components/Practice";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Practice />
      <Services />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
