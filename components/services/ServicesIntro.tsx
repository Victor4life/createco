export default function ServicesIntro() {
  return (
    <section className="bg-[#f7f2ec]">
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 md:py-24 lg:px-16 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[32%_68%] lg:gap-16">

          {/* Eyebrow */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9f4827]">
              What We Do
            </p>
          </div>

          {/* Main content */}
          <div className="max-w-[850px]">
            <h2 className="font-serif text-[40px] leading-[0.98] tracking-[-0.04em] text-[#171411] sm:text-[52px] lg:text-[60px]">
              We create work that
              <br />
              makes brands{" "}
              <span className="italic text-[#a84e2b]">
                matter.
              </span>
            </h2>

            <div className="mt-7 grid gap-8 md:grid-cols-[1fr_280px] md:items-end">
              <p className="max-w-[590px] text-[13px] leading-[1.7] text-[#514a45] sm:text-[14px]">
                From content creation and brand strategy to creator campaigns
                and workshops, we help ambitious brands connect with culture,
                build meaningful communities and create work people remember.
              </p>

              <p className="text-[10px] font-medium uppercase leading-[1.7] tracking-[0.12em] text-[#8b7e75]">
                Strategy.
                <br />
                Creativity.
                <br />
                Culture.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}