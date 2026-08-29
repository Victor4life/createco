import {
  GraduationCap,
  CalendarDays,
  Swords,
  Users,
  ArrowRight,
} from "lucide-react";

const benefits = [
  {
    number: "01",
    title: "Masterclasses",
    description:
      "Learn directly from creators, strategists and professionals doing the work right now.",
    icon: GraduationCap,
  },
  {
    number: "02",
    title: "Creator Events",
    description:
      "Meet people, exchange ideas, attend workshops and get yourself in the room.",
    icon: CalendarDays,
  },
  {
    number: "03",
    title: "Mentorship",
    description:
      "Get guidance, feedback and perspective from people further along the journey.",
    icon: Swords,
  },
  {
    number: "04",
    title: "Collaborations",
    description:
      "Find creators to build with, work on projects and create new opportunities together.",
    icon: Users,
  },
];

export default function CommunityBenefits() {
  return (
    <section className="bg-[#f7f1ea]">
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 md:py-24 lg:px-16 lg:py-28">
        
        {/* Heading */}
        <div className="text-center">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9d4d2b]">
            What You Get
          </p>

          <h2 className="mx-auto max-w-5xl font-serif text-[36px] leading-[1] tracking-[-0.035em] text-[#171411] sm:text-[46px] md:text-[52px] lg:text-[56px]">
            Everything you need to{" "}
            <span className="italic text-[#a85532]">grow</span> as a creator.
          </h2>
        </div>

        {/* Benefits */}
        <div className="mt-16 grid border-t border-[#d7cec5] md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.number}
                className={`
                  relative px-5 py-8
                  sm:px-8
                  lg:min-h-[300px]
                  lg:px-7
                  lg:py-0
                  ${
                    index !== 0
                      ? "border-t border-[#d7cec5] md:border-l md:border-t-0"
                      : ""
                  }
                `}
              >
                {/* Number + Icon */}
                <div className="flex items-center justify-between lg:pt-5">
                  <span className="font-serif text-[36px] leading-none text-[#a54e2d]">
                    {benefit.number}
                  </span>

                  <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#eaded2] text-[#171411]">
                    <Icon
                      size={30}
                      strokeWidth={1.35}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-7 text-center lg:mt-7">
                  <h3 className="font-sans text-[16px] font-semibold tracking-[-0.02em] text-[#171411]">
                    {benefit.title}
                  </h3>

                  <p className="mx-auto mt-5 max-w-[220px] text-[13px] leading-[1.65] text-[#302a26]">
                    {benefit.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="mt-7 flex justify-center lg:absolute lg:bottom-3 lg:left-0 lg:right-0">
                  <ArrowRight
                    size={20}
                    strokeWidth={1.4}
                    className="text-[#a54e2d]"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}