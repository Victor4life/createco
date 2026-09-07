import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ServicesHero from "@/components/services/ServicesHero";
import ServicesIntro from "@/components/services/ServicesIntro";
import ServicesList from "@/components/services/ServicesList";
import HowWeWork from "@/components/services/HowWeWork";
import SelectedWork from "@/components/services/SelectedWork";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <main className="bg-[#f7f2ec] text-[#171411]">
      <Navbar />

      <ServicesHero />
      <ServicesIntro />
      <ServicesList />
      <HowWeWork />
      <SelectedWork />
      <ServicesCTA />

      <Footer />
    </main>
  );
}