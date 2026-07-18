import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBlock from "@/components/TrustBlock";
import Services from "@/components/Services";
import Doctors from "@/components/Doctors";
import BeforeAfter from "@/components/BeforeAfter";
import TreatmentProcess from "@/components/TreatmentProcess";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBlock />
      <Services />
      <Doctors />
      <BeforeAfter />
      <TreatmentProcess />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
