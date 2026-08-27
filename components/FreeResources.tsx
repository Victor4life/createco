import { ArrowRight, Folder } from "lucide-react";

const resources = [
  {
    title: "30 Content Ideas\nFor Any Niche",
    image: "/images/resources/book1.jpg",
  },
  {
    title: "Content Planning\nTemplate",
    image: "/images/resources/book2.jpg",
  },
  {
    title: "Real Hook\nSwipe File",
    image: "/images/resources/book3.jpg",
  },
];

export default function FreeResources() {
  return (
    <section className="w-full border-y border-[#292521] bg-[#f5f1ea] px-5 py-8 md:px-8 lg:px-10">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-8 lg:flex-row lg:items-center lg:gap-10">

        {/* LEFT CONTENT */}
        <div className="shrink-0 lg:w-[38%]">
          <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#292521] sm:text-[10px]">
            Free Resources
          </p>

          <h2 className="max-w-[520px] font-serif text-[30px] leading-[0.98] tracking-[-0.035em] text-[#211e1b] sm:text-[36px] md:text-[40px] lg:text-[37px] xl:text-[42px]">
            Tools to help you create better,
            <br />
            smarter and more consistent content.
          </h2>
        </div>

        {/* RIGHT RESOURCE CARDS */}
        <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-4">

          {resources.map((resource) => (
            <a
              key={resource.title}
              href="#"
              className="group relative aspect-[0.82] overflow-hidden rounded-[3px] bg-[#292521]"
            >
              {/* Image */}
              <img
                src={resource.image}
                alt={resource.title.replace("\n", " ")}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5" />

              {/* Title */}
              <div className="absolute bottom-0 left-0 w-full p-3 sm:p-4">
                <h3 className="whitespace-pre-line text-[11px] font-medium leading-[1.15] text-white sm:text-[12px]">
                  {resource.title}
                </h3>
              </div>
            </a>
          ))}

          {/* BROWSE ALL */}
          <a
            href="#resources"
            className="group relative flex aspect-[0.82] flex-col items-center justify-center overflow-hidden rounded-[3px] bg-[#292521] px-4 text-center text-white transition-colors duration-300 hover:bg-[#3a342e]"
          >
            {/* Folder Icon */}
            <Folder
              size={25}
              strokeWidth={1.2}
              className="mb-5 text-white"
            />

            <span className="text-[10px] font-medium leading-[1.25] sm:text-[11px]">
              Browse All
              <br />
              Resources
              <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}