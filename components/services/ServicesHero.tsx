import { ArrowRight } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative min-h-[560px] overflow-hidden bg-[#211914] sm:min-h-[600px]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/services/services-hero.jpg')",
        }}
      />

      {/* Overall overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Stronger overlay behind text */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#211914]/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1440px] items-end px-6 pb-16 sm:min-h-[600px] sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">
        <div className="max-w-[680px]">
          {/* Eyebrow */}
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c26138]">
            The CreateCo Agency
          </p>

          {/* Heading */}
          <h1 className="font-serif text-[48px] leading-[0.92] tracking-[-0.045em] text-[#f8f2eb] sm:text-[62px] md:text-[70px] lg:text-[78px]">
            Creative solutions
            <br />
            for brands that
            <br />
            <span className="italic text-[#b85630]">
              want more.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-[470px] text-[13px] leading-[1.65] text-white/75 sm:text-[15px]">
            We combine strategy, creativity and culture to help brands
            show up differently, connect with their audience and create
            meaningful impact.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-3 bg-[#ad4e29] px-6 py-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-[#913f21]"
            >
              Our Services

              <ArrowRight
                size={14}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 border border-white/45 px-6 py-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-[#211914]"
            >
              Work With Us

              <ArrowRight
                size={14}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}