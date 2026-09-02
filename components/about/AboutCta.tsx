import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-[#211914]">
      {/* Decorative strokes */}
      <div className="pointer-events-none absolute -left-8 top-1/2 hidden -translate-y-1/2 sm:block">
        <div className="relative h-[160px] w-[150px]">
          <span className="absolute left-0 top-5 h-3 w-36 rotate-[-30deg] bg-[#b6532d]" />
          <span className="absolute -left-4 top-16 h-3 w-40 rotate-[-35deg] bg-[#b6532d]" />
          <span className="absolute left-2 top-28 h-2.5 w-32 rotate-[-40deg] bg-[#b6532d]" />
        </div>
      </div>

      <div className="pointer-events-none absolute -right-8 top-1/2 hidden -translate-y-1/2 sm:block">
        <div className="relative h-[160px] w-[150px]">
          <span className="absolute right-0 top-5 h-3 w-36 rotate-[30deg] bg-[#b6532d]" />
          <span className="absolute -right-4 top-16 h-3 w-40 rotate-[35deg] bg-[#b6532d]" />
          <span className="absolute right-2 top-28 h-2.5 w-32 rotate-[40deg] bg-[#b6532d]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[900px] px-6 py-14 sm:px-10 lg:py-16">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#c05a32]">
              Let&apos;s Build Something Meaningful
            </p>

            <h2 className="mt-3 font-serif text-[36px] leading-[0.95] tracking-[-0.035em] text-[#f7f1ea] sm:text-[44px]">
              Ready to create
              <br />
              what&apos;s next?
            </h2>
          </div>

          <a
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-3 border border-white/40 px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-[#211914]"
          >
            Work With Us

            <ArrowRight
              size={14}
              strokeWidth={1.4}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

        </div>
      </div>
    </section>
  );
}