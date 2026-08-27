export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[720px] items-end overflow-hidden bg-[#241a15]"
    >
      {/* Hero Background Image */}
      <img
        src="/images/homepage/image.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover lg:object-contain lg:object-right-bottom"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Extra left-side gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10 lg:pb-24">
        <div className="max-w-2xl">

          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-[#d49a78]">
            Create. Grow. Influence.
          </p>

          <h1 className="font-serif text-5xl leading-[0.95] tracking-[-0.03em] text-white sm:text-6xl lg:text-8xl">
            We create
            <br />
            content that
            <br />
            builds{" "}
            <span className="italic text-[#b65c32]">brands.</span>
          </h1>

          <p className="mt-7 max-w-lg text-sm leading-6 text-white/75 sm:text-base">
            A creative content studio helping brands show up with strategy,
            purpose and impact.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center justify-center bg-[#a94d27] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#873c1f]"
            >
              Our Services →
            </a>

            <a
              href="#work"
              className="inline-flex items-center justify-center border border-white/50 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-[#211914]"
            >
              Explore Our Work →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-[#211914]/50 to-transparent" />
    </section>
  );
}