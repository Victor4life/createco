import { ArrowRight } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="relative overflow-hidden bg-[#211914]">
      {/* Left decorative lines */}
      <div className="pointer-events-none absolute left-[-35px] top-1/2 hidden -translate-y-1/2 sm:block">
        <div className="relative h-[180px] w-[150px]">
          <span className="absolute left-0 top-[25px] h-[3px] w-[145px] rotate-[-30deg] bg-[#b85630]" />
          <span className="absolute left-[-8px] top-[75px] h-[3px] w-[155px] rotate-[-35deg] bg-[#b85630]" />
        </div>
      </div>

      {/* Right decorative lines */}
      <div className="pointer-events-none absolute right-[-35px] top-1/2 hidden -translate-y-1/2 sm:block">
        <div className="relative h-[180px] w-[150px]">
          <span className="absolute right-0 top-[25px] h-[3px] w-[145px] rotate-[30deg] bg-[#b85630]" />
          <span className="absolute right-[-8px] top-[75px] h-[3px] w-[155px] rotate-[35deg] bg-[#b85630]" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-[1000px] px-6 py-6 text-center sm:px-10 sm:py-24 lg:py-10">
        <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#c26138]">
          Have a project in mind?
        </p>

        <h2 className="mx-auto mt-5 max-w-[760px] font-serif text-[42px] leading-[0.95] tracking-[-0.04em] text-[#f7f1ea] sm:text-[55px] lg:text-[68px]">
          Let&apos;s create something
          <br />
          <span className="italic text-[#b85630]">
            amazing together.
          </span>
        </h2>

        {/* The two dashes */}
        <div className="mt-7 flex items-center justify-center gap-2">
          <span className="h-[2px] w-7 bg-[#b85630]" />
          <span className="h-[2px] w-7 bg-[#b85630]" />
        </div>

        <p className="mx-auto mt-7 max-w-[470px] text-[12px] leading-[1.7] text-white/60 sm:text-[13px]">
          Whether you need a creative partner, a fresh perspective or
          a team to bring your next big idea to life, we&apos;d love to
          hear from you.
        </p>

        <a
          href="/contact"
          className="group mt-8 inline-flex items-center gap-3 bg-[#ad4e29] px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-[#913f21]"
        >
          Work With Us

          <ArrowRight
            size={14}
            strokeWidth={1.4}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </div>
    </section>
  );
}