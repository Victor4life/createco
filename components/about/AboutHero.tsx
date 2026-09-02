import { ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative min-h-[580px] overflow-hidden bg-[#1b130f]">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/about/about-hero.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[580px] max-w-[1440px] items-end px-6 pb-16 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">
        <div className="max-w-[620px]">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c05a32]">
            Our Story
          </p>

          <h1 className="font-serif text-[48px] leading-[0.93] tracking-[-0.045em] text-[#f8f2eb] sm:text-[62px] lg:text-[74px]">
            Built for creators.
            <br />
            Built for
            <br />
            <span className="italic text-[#b85630]">
              what&apos;s next.
            </span>
          </h1>

          <p className="mt-7 max-w-[440px] text-sm leading-6 text-white/75 sm:text-base">
            CreateCo is a creative agency and community helping young
            creators grow, create and get paid for their craft.
          </p>

          <a
            href="#our-story"
            className="group mt-8 inline-flex items-center gap-3 bg-[#ad4e29] px-6 py-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#8f3f21]"
          >
            Join The Movement

            <ArrowRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}