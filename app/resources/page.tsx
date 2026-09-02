import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ResourcesHero from "@/components/resources/ResourcesHero";
import ResourcesIntro from "@/components/resources/ResourcesIntro";
import ResourceCategories from "@/components/resources/ResourceCategories";
import PopularResources from "@/components/resources/PopularResources";
import ResourcesNewsletter from "@/components/resources/ResourcesNewsletter";

export default function ResourcesPage() {
  return (
    <main className="bg-[#f7f1ea] text-[#171411]">
      <Navbar />

      <ResourcesHero />

      <ResourcesIntro />

      <ResourceCategories />

      <PopularResources />

      <ResourcesNewsletter />

      <Footer />
    </main>
  );
}