import {
  Download,
  Bookmark,
  Rocket,
  Users,
  ArrowRight,
} from "lucide-react";

const benefits = [
  {
    icon: Download,
    title: "Free to access",
    description: (
      <>
        High-quality resources
        <br />
        created by industry
        <br />
        professionals.
      </>
    ),
  },
  {
    icon: Bookmark,
    title: "Made for creators",
    description: (
      <>
        Practical, actionable
        <br />
        and built for real
        <br />
        creative work.
      </>
    ),
  },
  {
    icon: Rocket,
    title: "Grow your skills",
    description: (
      <>
        Learn, apply and level
        <br />
        up at your own
        <br />
        pace.
      </>
    ),
  },
  {
    icon: Users,
    title: "Community first",
    description: (
      <>
        Resources made
        <br />
        for and by our
        <br />
        creative community.
      </>
    ),
  },
];

export default function ResourcesIntro() {
  return (
    <section className="border-b border-[#ded5cd] bg-[#f7f3ee]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 md:py-20 lg:px-16 lg:py-[74px]">
        <div className="grid lg:grid-cols-[38%_62%]">

          {/* =========================================
              LEFT — INTRODUCTION
          ========================================= */}
          <div className="pr-0 lg:pr-12">
            {/* Eyebrow */}
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9f4827]">
              Learn. Create. Grow.
            </p>

            {/* Heading */}
            <h2 className="max-w-[470px] font-serif text-[38px] leading-[0.98] tracking-[-0.035em] text-[#171411] sm:text-[44px] md:text-[48px]">
              Everything you need
              <br />
              to level up your
              <br />
              <span className="italic text-[#a84e2b]">
                creative journey.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-[390px] text-[13px] leading-[1.65] text-[#514a45] sm:text-[14px]">
              We&apos;ve curated practical resources to help you
              create better, work smarter and build a sustainable
              creative career.
            </p>

            {/* Link */}
            <a
              href="#how-it-works"
              className="group mt-7 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a84e2b]"
            >
              <span>How It Works</span>

              <ArrowRight
                size={15}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* =========================================
              RIGHT — BENEFITS
          ========================================= */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:mt-0 lg:grid-cols-4">

            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className={`
                    relative
                    px-0
                    py-8
                    text-center
                    sm:px-8
                    lg:px-7
                    lg:py-0
                    ${
                      index !== 0
                        ? "border-t border-[#d7cec6] sm:border-t-0 sm:border-l"
                        : ""
                    }
                  `}
                >
                  {/* Icon */}
                  <div className="mx-auto flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#e9ddd2]">
                    <Icon
                      size={26}
                      strokeWidth={1.35}
                      className="text-[#171411]"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-[13px] font-semibold tracking-[-0.01em] text-[#171411] sm:text-[14px]">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-5 text-[12px] leading-[1.7] text-[#514a45] sm:text-[13px]">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}