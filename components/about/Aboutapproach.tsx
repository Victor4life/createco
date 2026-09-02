import { ArrowRight } from "lucide-react";

export default function AboutApproach() {
  return (
    <section className="bg-[#f7f2ec] border-t border-[#ddd3ca]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 md:py-20 lg:px-16 lg:py-24">

        <div className="grid items-center gap-10 lg:grid-cols-[30%_70%]">

          {/* Text */}
          <div className="max-w-[370px]">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9f4827]">
              Our Approach
            </p>

            <h2 className="font-serif text-[36px] leading-[0.98] tracking-[-0.035em] text-[#171411] sm:text-[43px]">
              We combine{" "}
              <span className="italic text-[#a84e2b]">
                creativity
              </span>{" "}
              with{" "}
              <span className="italic text-[#a84e2b]">
                strategy
              </span>{" "}
              and{" "}
              <span className="italic text-[#a84e2b]">
                community.
              </span>
            </h2>

            <p className="mt-6 text-[12px] leading-5 text-[#625951]">
              From content and branding to strategy and creator campaigns,
              we help brands connect with culture and creators build
              sustainable careers.
            </p>

            <a
              href="/services"
              className="group mt-7 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a84e2b]"
            >
              See Our Services

              <ArrowRight
                size={14}
                strokeWidth={1.4}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Image */}
          <div className="overflow-hidden">
            <img
              src="/images/about/about-approach.jpg"
              alt="CreateCo team working together"
              className="aspect-[1.8] w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}