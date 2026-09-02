import { ArrowRight } from "lucide-react";

const resources = [
  {
    type: "Template",
    title: "Content Planner Template",
    description:
      "Plan, organise and stay consistent with your content.",
    meta: "Notion Template",
    price: "Free",
    image: "/images/resources/content-planner.jpg",
  },
  {
    type: "Guide",
    title: "Building Your Personal Brand",
    description:
      "A step-by-step guide to building a brand that opens doors.",
    meta: "PDF Guide",
    price: "Free",
    image: "/images/resources/personal-brand.jpg",
  },
  {
    type: "Workshop",
    title: "How to Pitch Brands",
    description:
      "Learn how to pitch, land and deliver brand deals.",
    meta: "Video Replay",
    price: "Free",
    image: "/images/resources/pitch-brands.jpg",
  },
];

export default function PopularResources() {
  return (
    <section className="bg-[#f7f1ea] border-t border-[#ddd2c8]">
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 md:py-24 lg:px-16 lg:py-28">

        <div className="grid lg:grid-cols-[230px_1fr] lg:gap-10">

          {/* Intro */}
          <div className="mb-10 lg:mb-0">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9d4d2b]">
              Popular Resources
            </p>

            <h2 className="font-serif text-[36px] leading-[0.98] tracking-[-0.035em] text-[#171411] sm:text-[42px]">
              Start learning
              <br />
              and applying
              <br />
              <span className="italic text-[#9d4d2b]">
                today.
              </span>
            </h2>

            <p className="mt-6 max-w-[190px] text-[12px] leading-5 text-[#625951]">
              Handpicked resources our community loves.
            </p>

            <a
              href="#all-resources"
              className="group mt-7 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#9d4d2b]"
            >
              View All Resources

              <ArrowRight
                size={13}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Cards */}
          <div className="grid gap-4 md:grid-cols-3">
            {resources.map((resource) => (
              <article
                key={resource.title}
                className="overflow-hidden border border-[#d5cbc1] bg-[#f2ebe3]"
              >
                {/* Image */}
                <div className="relative aspect-[1.45] overflow-hidden">
                  <img
                    src={resource.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />

                  <span className="absolute left-3 top-3 bg-[#a94d27] px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-white">
                    {resource.type}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-serif text-[21px] leading-[1.05] text-[#171411]">
                    {resource.title}
                  </h3>

                  <p className="mt-3 text-[11px] leading-5 text-[#625951]">
                    {resource.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-[#d5cbc1] pt-4">
                    <span className="text-[8px] font-semibold uppercase tracking-[0.12em] text-[#625951]">
                      {resource.meta}
                    </span>

                    <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#9d4d2b]">
                      {resource.price}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}