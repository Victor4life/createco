import Community from "@/components/Community";
import CommunityBenefits from "@/components/community/CommunityBenefits";
import CommunityCTA from "@/components/community/CommunityCTA";
import CommunityEvents from "@/components/community/CommunityEvent";
import CommunityIntro from "@/components/community/CommunityIntro";
import CommunityStatement from "@/components/community/CommunityStatement";
import CommunityStories from "@/components/community/CommunityStories";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-[#f5eee6]">
      <Navbar />

      {/* COMMUNITY HERO */}
      <section className="relative flex min-h-[720px] items-end overflow-hidden bg-[#241a15]">
        {/* Background image */}
        <img
          src="/images/community/community-hero.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlays */}
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10 lg:pb-24">
          <div className="max-w-[720px]">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c76a3d]">
              The CreateCo Community
            </p>

            <h1 className="font-serif text-5xl leading-[0.92] tracking-[-0.04em] text-[#f7f0e8] sm:text-6xl lg:text-[76px]">
              Where creators
              <br />
              come to{" "}
              <span className="italic text-[#b65c32]">grow,</span>
              <br />
              <span className="italic">create</span> & connect.
            </h1>

            <p className="mt-7 max-w-[500px] text-sm leading-6 text-white/75 sm:text-base">
              A space for ambitious young creators to learn, collaborate,
              share ideas and build together.
            </p>

            <div className="mt-8">
              <a
                href="#join"
                className="inline-flex items-center gap-3 bg-[#a9512b] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#bd6138]"
              >
                Join The Community
                <span className="text-sm">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#211914]/50 to-transparent" />
      </section>

      <CommunityIntro />
      <CommunityBenefits />
      <CommunityStatement />
      <CommunityEvents />
      <CommunityStories />
      <CommunityCTA />
      <Footer />

      {/* MORE SECTIONS COMING NEXT */}
    </main>
  );
}