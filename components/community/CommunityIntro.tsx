export default function CommunityIntro() {
  return (
    <section className="w-full bg-[#f5eee6]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:px-8 md:py-24 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-28">

        {/* LEFT — CONTENT */}
        <div className="max-w-[520px]">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9b4f2d]">
            More Than A Community
          </p>

          <h2 className="font-serif text-[42px] leading-[0.95] tracking-[-0.04em] text-[#211b17] sm:text-[50px] lg:text-[58px]">
            A place to{" "}
            <span className="italic text-[#9b6249]">belong,</span>
            <br />
            learn and build.
          </h2>

          <p className="mt-7 max-w-[430px] text-[13px] leading-[1.75] text-[#625951] sm:text-[14px]">
            CreateCo Community brings together young creators, storytellers
            and ambitious builders who are figuring things out, sharing what
            they know and creating opportunities together.
          </p>

          <a
            href="#story"
            className="group mt-8 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#a9512b]"
          >
            Our Story

            <span className="text-[#a9512b] transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden bg-[#ded3c8]">
            <img
              src="/images/community/community-intro.jpg"
              alt="CreateCo community members collaborating together"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>

          {/* Small editorial label */}
          <div className="absolute bottom-4 left-4 bg-[#f5eee6]/90 px-4 py-3 backdrop-blur-sm">
            <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#211b17]">
              Create. Grow. Influence.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}