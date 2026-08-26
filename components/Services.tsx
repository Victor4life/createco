import {
  ArrowUpRight,
  Camera,
  Lightbulb,
  Megaphone,
  PenTool,
  Play,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Content Strategy",
    description:
      "Strategic ideas and content direction designed to help your brand communicate with clarity.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Content Creation",
    description:
      "Reels, TikToks, photography and social content that gives your brand something worth talking about.",
    icon: Camera,
  },
  {
    number: "03",
    title: "Brand Strategy",
    description:
      "Positioning, messaging and creative direction that helps your brand stand apart.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Creator Campaigns",
    description:
      "Connect your brand with the right creators and turn influence into meaningful results.",
    icon: Megaphone,
  },
  {
    number: "05",
    title: "Workshops",
    description:
      "Practical creative workshops designed to help teams and creators develop better skills.",
    icon: Lightbulb,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#f5efe8] px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="grid gap-10 lg:flex lg:gap-10">
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#a94d27]">
              What we do
            </p>

            <h2 className="max-w-xl font-serif text-5xl leading-[0.95] tracking-[-0.03em] text-[#211914] sm:text-6xl lg:text-7xl">
              Creative solutions
              <br />
              for brands that
              <br />
              <span className="italic text-[#a94d27]">want more.</span>
            </h2>
          </div>

<div className="flex flex-col justify-end lg:flex-1">
            <p className="max-w-md text-[15px] leading-7 text-[#211914]/60">
              From strategy to content creation, we help brands communicate
              clearly, connect deeply and grow intentionally.
            </p>

            {/* WATCH OUR STORY */}
            <button
              type="button"
              className="group mt-8 flex w-fit items-center gap-4"
            >
              <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#211914]/25 transition-all duration-500 group-hover:border-[#a94d27] group-hover:bg-[#a94d27] group-hover:text-white">
                <Play
                  size={14}
                  fill="currentColor"
                  className="ml-0.5 transition-transform duration-300 group-hover:scale-110"
                />

                <span className="absolute inset-[-5px] rounded-full border border-[#211914]/10 transition-all duration-500 group-hover:inset-[-8px] group-hover:border-[#a94d27]/20" />
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#211914]">
                Watch Our Story
              </span>

              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#a94d27]"
              />
            </button>
          </div>        </div>

{/* SERVICES */}
        <div className="mt-20 grid gap-px overflow-hidden border border-[#211914]/15 bg-[#211914]/15 md:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative flex min-h-[390px] flex-col justify-between overflow-hidden bg-[#f5efe8] p-7 text-[#211914] transition-all duration-500 hover:bg-[#211914] hover:text-white"
              >
                {/* Decorative background number */}
                <span className="pointer-events-none absolute -right-3 -top-7 font-serif text-[130px] leading-none text-[#211914]/[0.035] transition-all duration-500 group-hover:text-white/[0.04]">
                  {service.number}
                </span>

                <div className="relative z-10">
                  {/* Card top */}
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-[#a94d27]">
                      {service.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#211914]/15 transition-all duration-500 group-hover:border-[#a94d27] group-hover:bg-[#a94d27]">
                      <Icon
                        size={19}
                        strokeWidth={1.4}
                        className="transition-transform duration-500 group-hover:rotate-6"
                      />
                    </div>
                  </div>

                  {/* Small line */}
                  <div className="mt-14 h-px w-10 bg-[#211914]/25 transition-all duration-500 group-hover:w-16 group-hover:bg-white/30" />

                  {/* Title */}
                  <h3 className="mt-7 max-w-[210px] font-serif text-[29px] leading-[1.05] tracking-[-0.02em]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-5 max-w-[230px] text-[13px] leading-6 text-[#211914]/55 transition-colors duration-500 group-hover:text-white/60">
                    {service.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="relative z-10 flex items-end justify-between">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#211914]/30 transition-colors duration-500 group-hover:text-white/30">
                    CreateCo.
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#211914]/15 transition-all duration-500 group-hover:border-white/20">
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.4}
                      className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#a94d27] transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>

        {/* Bottom statement */}
      </div>
    </section>
      );
}