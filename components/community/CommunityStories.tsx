import { ArrowRight } from "lucide-react";

const stories = [
  {
    name: "Teni M.",
    role: "Photographer, Lagos",
    quote:
      "CreateCo gave me a space where I could meet people who actually understand what I was trying to build.",
    image: "/images/community/creator-teni.jpg",
  },
  {
    name: "Jason A.",
    role: "Content Creator, Lagos",
    quote:
      "The masterclasses changed how I think about content and business. The community keeps me motivated.",
    image: "/images/community/creator-jason.jpg",
  },
  {
    name: "Dami O.",
    role: "Videographer, Lagos",
    quote:
      "I found collaborators, opportunities and real friendships through CreateCo. It's home.",
    image: "/images/community/creator-dami.jpg",
  },
];

export default function CommunityStories() {
  return (
    <section className="bg-[#f7f1ea]">
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 md:py-24 lg:px-16 lg:py-28">
        <div className="grid lg:grid-cols-[270px_1fr]">

          {/* LEFT — INTRO */}
          <div className="border-b border-[#d5cbc1] pb-10 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9d4d2b]">
              Creator Stories
            </p>

            <h2 className="max-w-[280px] font-serif text-[38px] leading-[0.98] tracking-[-0.035em] text-[#171411] sm:text-[44px]">
              Real people.
              <br />
              Real experiences.
            </h2>

            <a
              href="#stories"
              className="group mt-8 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9d4d2b]"
            >
              View More Stories

              <ArrowRight
                size={14}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* RIGHT — STORIES */}
          <div className="grid md:grid-cols-3 lg:pl-10">
            {stories.map((story, index) => (
              <article
                key={story.name}
                className={`
                  px-0 py-8
                  md:px-5 md:py-0
                  ${
                    index !== 0
                      ? "border-t border-[#d5cbc1] md:border-l md:border-t-0"
                      : ""
                  }
                  ${
                    index === 0
                      ? "md:pr-5"
                      : index === stories.length - 1
                        ? "md:pl-5"
                        : "md:px-5"
                  }
                `}
              >
                {/* CREATOR */}
                <div className="flex items-start gap-4">
                  <div className="h-26 w-26 shrink-0 overflow-hidden rounded-full bg-[#ded3c8]">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="pt-1">
                    <p className="text-[13px] font-semibold text-[#171411]">
                      {story.name}
                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-[#625951]">
                      {story.role}
                    </p>
                  </div>
                </div>

                {/* QUOTE */}
                <blockquote className="mt-6 max-w-[250px] text-[13px] leading-[1.65] text-[#302a26]">
                  “{story.quote}”
                </blockquote>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}