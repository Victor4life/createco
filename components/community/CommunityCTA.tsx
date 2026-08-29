import { ArrowRight } from "lucide-react";

export default function CommunityCTA() {
  return (
    <section
      id="join"
      className="relative overflow-hidden bg-[#211914]"
    >
      {/* Left brush strokes */}
      <div className="pointer-events-none absolute -left-4 top-1/2 hidden -translate-y-1/2 sm:block">
        <div className="relative h-[180px] w-[150px]">
          <span className="absolute left-[-20px] top-[20px] block h-[16px] w-[145px] rotate-[-31deg] bg-[#b6532d]" />
          <span className="absolute left-[-35px] top-[70px] block h-[13px] w-[155px] rotate-[-36deg] bg-[#b6532d]" />
          <span className="absolute left-[-10px] top-[125px] block h-[12px] w-[125px] rotate-[-42deg] bg-[#b6532d]" />
        </div>
      </div>

      {/* Right brush strokes */}
      <div className="pointer-events-none absolute -right-4 top-1/2 hidden -translate-y-1/2 sm:block">
        <div className="relative h-[180px] w-[150px]">
          <span className="absolute right-[-20px] top-[20px] block h-[16px] w-[145px] rotate-[31deg] bg-[#b6532d]" />
          <span className="absolute right-[-35px] top-[70px] block h-[13px] w-[155px] rotate-[36deg] bg-[#b6532d]" />
          <span className="absolute right-[-10px] top-[125px] block h-[12px] w-[125px] rotate-[42deg] bg-[#b6532d]" />
        </div>
      </div>

      {/* CTA content */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-[52px]">
        <div className="mx-auto flex max-w-[950px] flex-col items-start gap-8 md:flex-row md:items-center md:justify-between md:gap-12">

          {/* Heading */}
          <div>
            <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#c36338]">
              Ready to create with us?
            </p>

            <h2 className="font-serif text-[36px] leading-[0.92] tracking-[-0.035em] text-[#f5eee6] sm:text-[44px] md:text-[48px] lg:text-[50px]">
              Find your people.
              <br />
              Build your{" "}
              <span className="italic text-[#b6532d]">
                thing.
              </span>
            </h2>
          </div>

          {/* Button */}
          <a
            href="#join-community"
            className="group inline-flex min-h-[54px] shrink-0 items-center justify-center gap-3 border border-[#cfc4bb] px-7 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#f5eee6] transition-all duration-300 hover:border-[#b6532d] hover:bg-[#b6532d] md:min-w-[220px]"
          >
            Join The Community

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