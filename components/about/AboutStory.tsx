import { ArrowRight } from "lucide-react";

export default function AboutStory() {
  return (
    <section
      id="our-story"
      className="bg-[#f7f2ec]"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 md:py-20 lg:px-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Image */}
          <div className="overflow-hidden">
            <img
              src="/images/about/about-story.jpg"
              alt="CreateCo creative workspace"
              className="aspect-[1.15] h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="max-w-[540px]">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9f4827]">
              Our Story
            </p>

            <h2 className="font-serif text-[38px] leading-[0.98] tracking-[-0.035em] text-[#171411] sm:text-[48px]">
              CreateCo exists because
              <br />
              <span className="italic text-[#a84e2b]">
                we&apos;ve been there.
              </span>
            </h2>

            <div className="mt-7 space-y-5 text-[13px] leading-[1.7] text-[#514a45] sm:text-[14px]">
              <p>
                We started CreateCo from a simple belief: young creators
                deserve more than just likes—they deserve opportunities.
              </p>

              <p>
                We know what it feels like to have ideas but no direction,
                talent but no platform, and passion but no pay. So we built
                the creative home we wish we had.
              </p>

              <p>
                A space where creators can learn, collaborate, get real work,
                and build a life doing what they love.
              </p>
            </div>

            <a
              href="#journey"
              className="group mt-7 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a84e2b]"
            >
              Our Journey

              <ArrowRight
                size={14}
                strokeWidth={1.4}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}