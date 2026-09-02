import {
  Target,
  Eye,
  Flag,
} from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To equip and connect young creators with the skills, opportunities and community they need to grow and earn.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "A world where every creator has the freedom, resources and platform to turn their creativity into impact.",
  },
  {
    icon: Flag,
    title: "Our Purpose",
    description:
      "We exist to bridge the gap between creativity and opportunity—for creators and brands.",
  },
];

export default function AboutMission() {
  return (
    <section
      id="journey"
      className="bg-[#211914] text-[#f7f1ea]"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 md:py-20 lg:px-16 lg:py-24">
        <div className="grid lg:grid-cols-[34%_66%]">

          {/* Heading */}
          <div className="pb-12 lg:pr-12 lg:pb-0">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c05a32]">
              Why We Exist
            </p>

            <h2 className="max-w-[400px] font-serif text-[36px] leading-[1] tracking-[-0.035em] sm:text-[44px]">
              To empower the next generation of creators to{" "}
              <span className="italic text-[#b85630]">
                build, influence and thrive.
              </span>
            </h2>
          </div>

          {/* Pillars */}
          <div className="grid sm:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.title}
                  className={`
                    border-t border-white/15 px-0 py-8
                    sm:px-6
                    sm:border-t-0 sm:border-l
                    lg:px-8
                    ${index === 0 ? "sm:border-l-0" : ""}
                  `}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
                    <Icon
                      size={22}
                      strokeWidth={1.4}
                      className="text-[#e4d7cd]"
                    />
                  </div>

                  <h3 className="mt-6 text-[13px] font-semibold">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 max-w-[190px] text-[11px] leading-5 text-white/60">
                    {pillar.description}
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