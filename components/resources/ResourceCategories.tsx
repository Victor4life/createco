import {
  Camera,
  BarChart3,
  GraduationCap,
  FileText,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    title: "Content Creation",
    description:
      "Tips, guides and templates to help you create content that stands out.",
    image: "/images/resources/content-creation.jpg",
    icon: Camera,
  },
  {
    title: "Business & Strategy",
    description:
      "Resources to help you brand, market and grow your creative business.",
    image: "/images/resources/business-strategy.jpg",
    icon: BarChart3,
  },
  {
    title: "Workshops",
    description:
      "Join live sessions and access workshop replays on key creative topics.",
    image: "/images/resources/workshops.jpg",
    icon: GraduationCap,
  },
  {
    title: "Templates & Tools",
    description:
      "Ready-to-use templates and tools to save you time and work faster.",
    image: "/images/resources/templates-tools.jpg",
    icon: FileText,
  },
];

export default function ResourceCategories() {
  return (
    <section
      id="resources-library"
      className="bg-[#f7f1ea] border-t border-[#ddd2c8]"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 md:py-24 lg:px-16 lg:py-28">

        {/* Heading */}
        <div className="mb-10">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9d4d2b]">
            Explore By Category
          </p>

          <h2 className="font-serif text-[38px] leading-none tracking-[-0.035em] text-[#171411] sm:text-[48px]">
            Find exactly what you{" "}
            <span className="italic text-[#9d4d2b]">
              need.
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <a
                key={category.title}
                href="#"
                className="group relative min-h-[380px] overflow-hidden rounded-[4px] bg-[#211914]"
              >
                {/* Image */}
                <img
                  src={category.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#110d0b] via-[#110d0b]/65 to-black/10" />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-end p-5">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#a94d27]">
                    <Icon
                      size={20}
                      strokeWidth={1.4}
                      className="text-white"
                    />
                  </div>

                  <h3 className="font-serif text-[25px] leading-none text-white">
                    {category.title}
                  </h3>

                  <p className="mt-3 max-w-[220px] text-[11px] leading-5 text-white/70">
                    {category.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.17em] text-[#c36338]">
                    Explore

                    <ArrowRight
                      size={13}
                      strokeWidth={1.4}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}