import {
  Pencil,
  Sprout,
  Megaphone,
  Users,
} from "lucide-react";

const values = [
  {
    number: "01",
    icon: Pencil,
    title: "Create",
    description:
      "We champion creativity in all its forms and celebrate originality.",
  },
  {
    number: "02",
    icon: Sprout,
    title: "Grow",
    description:
      "We are committed to continuous learning and levelling up together.",
  },
  {
    number: "03",
    icon: Megaphone,
    title: "Influence",
    description:
      "We believe in using our voice and platform to inspire and create impact.",
  },
  {
    number: "04",
    icon: Users,
    title: "Community",
    description:
      "We build real connections and create space for everyone to belong.",
  },
];

export default function AboutValues() {
  return (
    <section className="bg-[#f7f2ec]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 md:py-20 lg:px-16 lg:py-24">

        <div className="grid lg:grid-cols-[28%_72%]">

          {/* Intro */}
          <div className="pb-12 lg:pr-10 lg:pb-0">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9f4827]">
              Our Values
            </p>

            <h2 className="font-serif text-[38px] leading-[0.98] tracking-[-0.035em] text-[#171411] sm:text-[45px]">
              The values that guide{" "}
              <span className="italic text-[#a84e2b]">
                everything
              </span>{" "}
              we do.
            </h2>
          </div>

          {/* Values */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className={`
                    border-t border-[#d7cec6]
                    px-0 py-7
                    sm:px-6
                    lg:border-t-0 lg:border-l lg:px-7
                    ${index === 0 ? "lg:border-l-0" : ""}
                  `}
                >
                  <span className="font-serif text-[24px] text-[#a84e2b]">
                    {value.number}
                  </span>

                  <div className="mt-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#e9ddd2]">
                    <Icon
                      size={19}
                      strokeWidth={1.4}
                      className="text-[#171411]"
                    />
                  </div>

                  <h3 className="mt-5 text-[13px] font-semibold text-[#171411]">
                    {value.title}
                  </h3>

                  <p className="mt-3 max-w-[170px] text-[11px] leading-5 text-[#625951]">
                    {value.description}
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