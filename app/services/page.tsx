import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ServicesHero from "@/components/services/ServicesHero";
import ServicesIntro from "@/components/services/ServicesIntro";

export default function ServicesPage() {
  return (
    <main className="bg-[#f7f2ec] text-[#171411]">
      <Navbar />

      <ServicesHero />
      <ServicesIntro />

      <Footer />
    </main>
  );
}