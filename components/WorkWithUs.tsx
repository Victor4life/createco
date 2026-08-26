import { ArrowUpRight } from "lucide-react";

export default function WorkWithUs() {
  return (
    <section className="w-full bg-[#2a1810] px-6 py-8 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-7 md:flex-row md:items-center md:justify-between md:gap-10">

        {/* LEFT — HEADING */}
        <div className="relative max-w-[430px]">
          <h2 className="font-serif text-[34px] leading-[0.95] tracking-[-0.035em] text-[#f5eee6] sm:text-[40px] md:text-[43px] lg:text-[46px]">
            Let&apos;s create something
            <br />
            amazing together.
          </h2>

          {/* Decorative strokes */}
          <div className="relative mt-3 h-3 w-full">
            <span className="absolute left-0 top-0 h-[2px] w-[120px] rotate-[-2deg] bg-[#a9512b]" />
            <span className="absolute left-[145px] top-[3px] h-[2px] w-[110px] rotate-[1deg] bg-[#a9512b]" />
          </div>
        </div>

        {/* MIDDLE — DESCRIPTION */}
        <div className="max-w-[400px]">
          <p className="text-[12px] leading-[1.6] text-[#d5c8bd] sm:text-[13px]">
            Whether you&apos;re a growing brand or an ambitious creator,
            CreateCo is here to help you create with strategy, and impact.
          </p>
        </div>

        {/* RIGHT — CTA */}
        <div className="shrink-0">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-[#a9512b] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#bb6037]"
          >
            Work With Us

            <ArrowUpRight
              size={15}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

      </div>
    </section>
  );
}