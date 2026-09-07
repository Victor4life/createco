import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Brand Storytelling",
    category: "Content Campaign",
    client: "Client Project",
    image: "/images/services/work-01.jpg",
  },
  {
    title: "Built For Culture",
    category: "Creator Campaign",
    client: "Client Project",
    image: "/images/services/work-02.jpg",
  },
  {
    title: "Made To Move",
    category: "Social Strategy",
    client: "Client Project",
    image: "/images/services/work-03.jpg",
  },
];

export default function SelectedWork() {
  return (
    <section className="bg-[#f7f2ec]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 md:py-20 lg:px-16 lg:py-24">

        {/* Header */}
        <div className="grid gap-6 lg:grid-cols-[32%_68%]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9f4827]">
              Selected Work
            </p>
          </div>

          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <h2 className="max-w-[650px] font-serif text-[40px] leading-[0.96] tracking-[-0.04em] text-[#171411] sm:text-[50px]">
              Work that speaks
              <br />
              for{" "}
              <span className="italic text-[#a84e2b]">
                itself.
              </span>
            </h2>

            <a
              href="/work"
              className="group inline-flex shrink-0 items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#a84e2b]"
            >
              View All Work

              <ArrowUpRight
                size={14}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>

        {/* Projects */}
        <div className="mt-12 grid gap-10 sm:mt-14 lg:grid-cols-[1.4fr_0.8fr] lg:gap-6">

          {/* Main project */}
          <article className="group">
            <a href="/work">
              <div className="relative overflow-hidden bg-[#ddd2c8]">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="aspect-[1.25] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
              </div>

              <div className="mt-4 flex items-start justify-between gap-6">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#9f4827]">
                    {projects[0].category}
                  </p>

                  <h3 className="mt-2 font-serif text-[26px] leading-none tracking-[-0.025em] text-[#171411]">
                    {projects[0].title}
                  </h3>

                  <p className="mt-2 text-[10px] text-[#746960]">
                    {projects[0].client}
                  </p>
                </div>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#c8bdb4] text-[#171411] transition-all duration-300 group-hover:bg-[#a84e2b] group-hover:text-white">
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.4}
                  />
                </span>
              </div>
            </a>
          </article>

          {/* Smaller projects */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
            {projects.slice(1).map((project) => (
              <article
                key={project.title}
                className="group"
              >
                <a href="/work">
                  <div className="overflow-hidden bg-[#ddd2c8]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="aspect-[1.45] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="mt-3 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#9f4827]">
                        {project.category}
                      </p>

                      <h3 className="mt-1 font-serif text-[21px] leading-none tracking-[-0.02em] text-[#171411]">
                        {project.title}
                      </h3>
                    </div>

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.4}
                      className="mt-1 shrink-0 text-[#a84e2b]"
                    />
                  </div>
                </a>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}