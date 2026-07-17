import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Doctors from "@/components/Doctors";
import BeforeAfter from "@/components/BeforeAfter";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Doctors />
      <BeforeAfter />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
