import { ArrowRight } from "lucide-react";

export default function ResourcesHero() {
  return (
    <section
      id="resources"
      className="relative min-h-[620px] overflow-hidden bg-[#211914]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/resources/resources-hero.jpg')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Warm atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1440px] items-end px-6 pb-20 sm:px-10 md:pb-24 lg:px-16 lg:pb-28">
        <div className="max-w-[650px]">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c36338]">
            The CreateCo Resources
          </p>

          <h1 className="font-serif text-[48px] leading-[0.92] tracking-[-0.04em] text-[#f7f1ea] sm:text-[64px] lg:text-[78px]">
            Tools, templates
            <br />
            & knowledge to
            <br />
            <span className="italic text-[#b6532d]">
              help you grow.
            </span>
          </h1>

          <p className="mt-7 max-w-[470px] text-sm leading-6 text-white/75 sm:text-base">
            Free tools, templates, workshops and guides made for creators at
            every stage.
          </p>

          <a
            href="#resources-library"
            className="group mt-8 inline-flex items-center gap-3 bg-[#a94d27] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-[#873c1f]"
          >
            Browse All Resources

            <ArrowRight
              size={15}
              strokeWidth={1.4}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}