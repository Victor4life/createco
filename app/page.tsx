import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Services from "@/components/Services";
import Community from "@/components/Community";
import FreeResources from "@/components/FreeResources";
import WorkWithUs from "@/components/WorkWithUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Brands />
      <Services />
      <Community />
      <FreeResources />
      <WorkWithUs />
      <Footer />
    </main>
  );
}