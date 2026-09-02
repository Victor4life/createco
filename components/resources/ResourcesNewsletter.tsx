import { ArrowRight } from "lucide-react";

export default function ResourcesNewsletter() {
  return (
    <section className="relative overflow-hidden bg-[#211914]">
      {/* Decorative strokes */}
      <div className="pointer-events-none absolute -left-5 top-1/2 hidden -translate-y-1/2 sm:block">
        <div className="relative h-[180px] w-[150px]">
          <span className="absolute left-0 top-5 h-3 w-36 rotate-[-30deg] bg-[#b6532d]" />
          <span className="absolute -left-4 top-16 h-3 w-40 rotate-[-35deg] bg-[#b6532d]" />
          <span className="absolute left-2 top-28 h-2.5 w-32 rotate-[-40deg] bg-[#b6532d]" />
        </div>
      </div>

      <div className="pointer-events-none absolute -right-5 top-1/2 hidden -translate-y-1/2 sm:block">
        <div className="relative h-[180px] w-[150px]">
          <span className="absolute right-0 top-5 h-3 w-36 rotate-[30deg] bg-[#b6532d]" />
          <span className="absolute -right-4 top-16 h-3 w-40 rotate-[35deg] bg-[#b6532d]" />
          <span className="absolute right-2 top-28 h-2.5 w-32 rotate-[40deg] bg-[#b6532d]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1000px] px-6 py-16 sm:px-10 lg:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">

          {/* Text */}
          <div>
            <p className="text-[10px] font-medium text-[#d8cbc0]">
              New resources. Every month.
            </p>

            <h2 className="mt-3 font-serif text-[34px] leading-[0.98] tracking-[-0.035em] text-[#f7f1ea] sm:text-[42px]">
              Get free resources and
              <br />
              insights straight to your{" "}
              <span className="italic text-[#b6532d]">
                inbox.
              </span>
            </h2>
          </div>

          {/* Form */}
          <div>
            <form className="flex w-full">
              <input
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 border border-[#74665d] bg-transparent px-4 py-4 text-xs text-white outline-none placeholder:text-[#9b8d83] focus:border-[#b6532d]"
              />

              <button
                type="submit"
                className="inline-flex shrink-0 items-center gap-2 bg-[#a94d27] px-5 text-[9px] font-semibold uppercase tracking-[0.13em] text-white transition-colors hover:bg-[#873c1f]"
              >
                Subscribe

                <ArrowRight
                  size={14}
                  strokeWidth={1.4}
                />
              </button>
            </form>

            <p className="mt-3 text-[9px] text-[#9b8d83]">
              No spam. Unsubscribe anytime.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}