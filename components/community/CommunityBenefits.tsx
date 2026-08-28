import {
  GraduationCap,
  CalendarDays,
  Compass,
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
    icon: Compass,
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
    <section className="w-full bg-[#f8f2eb]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24 lg:px-10 lg:py-28">

        {/* SECTION HEADING */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#9b4f2d]">
            What You Get
          </p>

          <h2 className="font-serif text-[38px] leading-[0.95] tracking-[-0.04em] text-[#211b17] sm:text-[48px] lg:text-[54px]">
            Everything you need to{" "}
            <span className="italic text-[#9b6249]">grow</span> as a creator.
          </h2>
        </div>

        {/* BENEFITS */}
        <div className="grid border-t border-[#d8cec4] md:grid-cols-2 lg:grid-cols-4">

          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.number}
                className={`group border-b border-[#d8cec4] px-6 py-10 md:px-8 lg:border-b-0 lg:py-8 ${
                  index !== 0 ? "lg:border-l" : ""
                }`}
              >
                {/* NUMBER + ICON */}
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-serif text-[27px] text-[#a9512b]">
                    {benefit.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eaded3] text-[#29221d] transition-transform duration-300 group-hover:scale-105">
                    <Icon
                      size={20}
                      strokeWidth={1.35}
                    />
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="font-serif text-[25px] tracking-[-0.025em] text-[#211b17]">
                  {benefit.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-4 text-[12px] leading-[1.7] text-[#625951]">
                  {benefit.description}
                </p>

                {/* ARROW */}
                <div className="mt-7 text-[#a9512b] transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight
                    size={18}
                    strokeWidth={1.4}
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