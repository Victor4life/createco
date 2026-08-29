export default function CommunityStatement() {
  return (
    <section className="relative h-[300px] overflow-hidden bg-[#211914] sm:h-[330px] lg:h-[360px]">
      {/* Background image */}
      <img
        src="/images/community/communitystatement.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Subtle warm overlay */}
      <div className="absolute inset-0 bg-[#211914]/20" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div>
          <h2 className="font-serif text-[42px] leading-[0.95] tracking-[-0.04em] text-[#f6eee6] sm:text-[52px] lg:text-[58px]">
            Your people.
            <br />
            Your space.
            <br />
            Your{" "}
            <span className="italic text-[#b65c32]">
              growth.
            </span>
          </h2>

          {/* Orange decorative line */}
          <div className="mx-auto mt-5 h-[2px] w-14 bg-[#b65c32]" />
        </div>
      </div>
    </section>
  );
}