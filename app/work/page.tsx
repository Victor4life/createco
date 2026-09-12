import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  {
    number: "01",
    category: "BRAND CAMPAIGN",
    title: "Built for What's Next",
    client: "CreateCo Campaign",
    image: "/images/work/project-1.jpg",
    size: "large",
  },
  {
    number: "02",
    category: "CONTENT CREATION",
    title: "Stories That Move",
    client: "Creative Campaign",
    image: "/images/work/project-2.jpg",
    size: "normal",
  },
  {
    number: "03",
    category: "CREATOR CAMPAIGN",
    title: "Made With Creators",
    client: "Creator Partnership",
    image: "/images/work/project-3.jpg",
    size: "normal",
  },
  {
    number: "04",
    category: "BRAND STRATEGY",
    title: "A Brand With Purpose",
    client: "Brand Strategy",
    image: "/images/work/project-4.jpg",
    size: "normal",
  },
  {
    number: "05",
    category: "CONTENT PRODUCTION",
    title: "Create Something Real",
    client: "Content Production",
    image: "/images/work/project-5.jpg",
    size: "normal",
  },
];

const clients = [
  "ZURI",
  "MONTA SKINCARE",
  "LUXE.",
  "KAY & CO.",
  "SHADE COLLECTION",
  "TIVO MEDIA",
];

export default function WorkPage() {
  return (
    <main className="bg-[#f7f2ec] text-[#211914]">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[650px] overflow-hidden bg-[#211914]">
        {/* Background image */}
        <Image
          src="/images/work/work-hero.jpg"
          alt="CreateCo creative work"
          fill
          priority
          className="object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Warm atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(166,82,42,0.22),transparent_40%)]" />

        <div className="relative z-10 mx-auto flex min-h-[650px] w-full max-w-7xl items-end px-6 pb-20 lg:px-10 lg:pb-24">
          <div className="max-w-4xl">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c7663b]">
              Our Work
            </p>

            <h1 className="font-serif text-5xl leading-[0.94] tracking-[-0.035em] text-white sm:text-6xl lg:text-[76px]">
              Work that makes
              <br />
              people stop, look
              <br />
              and{" "}
              <span className="italic text-[#c7663b]">
                feel something.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
              A selection of campaigns, content and creative work we've built
              with ambitious brands.
            </p>

            <a
              href="#work"
              className="mt-8 inline-flex items-center gap-3 bg-[#a94d27] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#c05d32]"
            >
              Explore Our Work
              <span className="text-sm">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          CATEGORY NAVIGATION
      ========================================================= */}
      <section
        id="work"
        className="border-b border-[#211914]/15 bg-[#f7f2ec]"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-end lg:justify-between lg:px-10">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a94d27]">
              Explore Our Work
            </p>

            <h2 className="mt-3 font-serif text-3xl tracking-[-0.025em] sm:text-4xl">
              Selected projects.
            </h2>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-4 text-[10px] font-semibold uppercase tracking-[0.16em]">
            <button className="border-b border-[#a94d27] pb-2 text-[#a94d27]">
              All
            </button>

            <button className="pb-2 transition hover:text-[#a94d27]">
              Content
            </button>

            <button className="pb-2 transition hover:text-[#a94d27]">
              Brand
            </button>

            <button className="pb-2 transition hover:text-[#a94d27]">
              Campaigns
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED PROJECT
      ========================================================= */}
      <section className="bg-[#f7f2ec] px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex items-center justify-between">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a94d27]">
              Featured Work
            </p>

            <span className="font-serif text-sm text-[#211914]/50">
              01 / 05
            </span>
          </div>

          <div className="group">
            <div className="relative aspect-[16/8] overflow-hidden bg-[#ded5cb]">
              <Image
                src={projects[0].image}
                alt={projects[0].title}
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />

              <div className="absolute bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#a94d27] text-xl text-white opacity-0 transition duration-500 group-hover:opacity-100">
                ↗
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-5 border-b border-[#211914]/20 pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a94d27]">
                  {projects[0].category}
                </p>

                <h3 className="mt-2 font-serif text-3xl tracking-[-0.025em] sm:text-4xl">
                  {projects[0].title}
                </h3>
              </div>

              <div className="flex items-center justify-between gap-10 sm:text-right">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#211914]/45">
                    Client
                  </p>

                  <p className="mt-1 text-sm">{projects[0].client}</p>
                </div>

                <span className="text-xl text-[#a94d27]">↗</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECT GRID
      ========================================================= */}
      <section className="border-t border-[#211914]/10 bg-[#f7f2ec] px-6 pb-20 lg:px-10 lg:pb-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2">
          {projects.slice(1).map((project) => (
            <article key={project.number} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#ded5cb]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#a94d27] text-xl text-white">
                    ↗
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a94d27]">
                    {project.category}
                  </p>

                  <span className="font-serif text-sm text-[#211914]/40">
                    {project.number}
                  </span>
                </div>

                <div className="mt-2 flex items-center justify-between border-b border-[#211914]/20 pb-5">
                  <div>
                    <h3 className="font-serif text-2xl tracking-[-0.02em]">
                      {project.title}
                    </h3>

                    <p className="mt-1 text-xs text-[#211914]/55">
                      {project.client}
                    </p>
                  </div>

                  <span className="text-lg text-[#a94d27]">↗</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================================
          BRAND STATEMENT
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#211914] px-6 py-24 lg:px-10 lg:py-32">
        {/* Decorative lines */}
        <div className="absolute -left-10 bottom-0 h-40 w-2 rotate-[55deg] bg-[#a94d27] opacity-80" />
        <div className="absolute -left-3 bottom-[-30px] h-36 w-2 rotate-[55deg] bg-[#a94d27] opacity-60" />

        <div className="absolute -right-10 top-0 h-40 w-2 rotate-[55deg] bg-[#a94d27] opacity-80" />
        <div className="absolute right-4 top-[-25px] h-36 w-2 rotate-[55deg] bg-[#a94d27] opacity-60" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c7663b]">
            Our Approach
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-[1] tracking-[-0.03em] text-[#f7f2ec] sm:text-5xl lg:text-7xl">
            We don't just make
            <br />
            <span className="italic text-[#c7663b]">content.</span>
          </h2>

          <div className="mx-auto mt-6 flex justify-center gap-2">
            <span className="h-[2px] w-7 bg-[#a94d27]" />
            <span className="h-[2px] w-7 bg-[#a94d27]" />
          </div>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-6 text-white/65 sm:text-base">
            We create work that gives brands a voice, connects with culture
            and stays with people long after they've seen it.
          </p>
        </div>
      </section>

      {/* =========================================================
          CLIENTS
      ========================================================= */}
      <section className="bg-[#f7f2ec] px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 border-b border-[#211914]/15 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a94d27]">
                Trusted By
              </p>

              <h2 className="mt-3 font-serif text-3xl tracking-[-0.025em] sm:text-4xl">
                Brands we've worked with.
              </h2>
            </div>

            <p className="max-w-xs text-xs leading-5 text-[#211914]/55">
              Helping ambitious brands show up with more clarity, creativity
              and purpose.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {clients.map((client, index) => (
              <div
                key={client}
                className={`flex min-h-[100px] items-center justify-center border-b border-[#211914]/10 px-4 text-center font-serif text-sm text-[#211914]/75 ${
                  index % 2 !== 0 ? "border-l" : ""
                } lg:border-l`}
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="bg-[#2b1d17] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c7663b]">
              Let's Build Something Meaningful
            </p>

            <h2 className="mt-4 max-w-xl font-serif text-4xl leading-[0.95] tracking-[-0.03em] text-[#f7f2ec] sm:text-5xl">
              Ready to create
              <br />
              what's next?
            </h2>

            {/* The two dashes */}
            <div className="mt-5 flex gap-2">
              <span className="h-[2px] w-8 bg-[#a94d27]" />
              <span className="h-[2px] w-8 bg-[#a94d27]" />
            </div>
          </div>

          <a
            href="/contact"
            className="inline-flex w-fit items-center gap-3 border border-white/40 px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[#a94d27] hover:bg-[#a94d27]"
          >
            Work With Us
            <span className="text-sm">→</span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}