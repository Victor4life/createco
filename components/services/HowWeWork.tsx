const steps = [
  {
    number: "01",
    title: "Strategy",
    description:
      "We start by understanding your brand, your audience and the problem we're trying to solve.",
  },
  {
    number: "02",
    title: "Create",
    description:
      "We turn the strategy into ideas, stories and creative work people actually want to engage with.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "We bring the work to life and put it in the right places, in front of the right people.",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "We learn from what happens, optimise the work and keep building from there.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-[#211914] text-[#f7f1ea]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 md:py-20 lg:px-16 lg:py-24">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[32%_68%]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c26138]">
              How We Work
            </p>
          </div>

          <div>
            <h2 className="max-w-[720px] font-serif text-[38px] leading-[0.98] tracking-[-0.04em] sm:text-[50px] lg:text-[58px]">
              Good work isn&apos;t
              <br />
              accidental.
            </h2>

            <p className="mt-6 max-w-[520px] text-[12px] leading-[1.7] text-white/60 sm:text-[13px]">
              Every project starts with a clear purpose. We combine
              strategy, creativity and collaboration to turn ideas into
              work that creates real impact.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="mt-14 border-t border-white/15 lg:mt-20">
          <div className="grid lg:grid-cols-4">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className={`
                  border-b border-white/15 py-8
                  lg:border-b-0 lg:border-l lg:px-7 lg:py-9
                  ${index === 0 ? "lg:border-l-0 lg:pl-0" : ""}
                  ${index === steps.length - 1 ? "lg:pr-0" : ""}
                `}
              >
                {/* Number */}
                <span className="font-serif text-[22px] text-[#b85630]">
                  {step.number}
                </span>

                {/* Title */}
                <h3 className="mt-6 font-serif text-[28px] tracking-[-0.025em] sm:text-[32px]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-3 max-w-[230px] text-[11px] leading-5 text-white/55 sm:text-[12px]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}