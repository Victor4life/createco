import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutMission from "@/components/about/AboutMission";
import AboutValues from "@/components/about/AboutValues";
import AboutTeam from "@/components/about/AboutTeam";
import AboutApproach from "@/components/about/Aboutapproach";
import AboutCTA from "@/components/about/AboutCta";

export default function AboutPage() {
  return (
    <main className="bg-[#f7f2ec] text-[#171411]">
      <Navbar />

      <AboutHero />

      <AboutStory />

      <AboutMission />

      <AboutValues />

      <AboutTeam />

      <AboutApproach />

      <AboutCTA />

      <Footer />
    </main>
  );
}