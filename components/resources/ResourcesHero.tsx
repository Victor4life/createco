import { ArrowRight } from "lucide-react";

export default function ResourcesHero() {
  return (
    <section
      id="resources"
      className="relative min-h-[520px] overflow-hidden bg-[#18110d] sm:min-h-[560px] lg:min-h-[580px]"
    >
      {/* =========================================
          BACKGROUND IMAGE
      ========================================= */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/resources/resources-hero.jpg')",
        }}
      />

      {/* =========================================
          DARK IMAGE OVERLAY
      ========================================= */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Stronger darkness on the left for text */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/15" />

      {/* Subtle bottom darkness */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/35 to-transparent" />

      {/* =========================================
          CONTENT
      ========================================= */}
      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-[1440px] items-end px-6 pb-16 sm:min-h-[560px] sm:px-10 sm:pb-20 lg:min-h-[580px] lg:px-16 lg:pb-[72px]">
        <div className="max-w-[600px]">

          {/* Eyebrow */}
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c26138]">
            The CreateCo Resources
          </p>

          {/* Main heading */}
          <h1 className="font-serif text-[46px] leading-[0.94] tracking-[-0.045em] text-[#f8f3ee] sm:text-[58px] md:text-[66px] lg:text-[72px]">
            Tools, templates
            <br />
            & knowledge to
            <br />
            <span className="italic text-[#b95731]">
              help you grow.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[430px] text-[13px] leading-[1.65] text-white/80 sm:text-[14px]">
            Free tools, templates, workshops and guides
            <br className="hidden sm:block" />
            for creators at every stage.
          </p>

          {/* CTA */}
          <a
            href="#resources-library"
            className="group mt-7 inline-flex items-center gap-3 bg-[#ae4f29] px-6 py-[15px] text-[9px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#943f20]"
          >
            <span>Browse All Resources</span>

            <ArrowRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}