import { ArrowRight } from "lucide-react";

const events = [
  {
    month: "AUG",
    day: "14",
    type: "MASTERCLASS",
    title: "Building a Content Strategy That Actually Works",
    speaker: "With Tola Odunuga",
    image: "/images/community/event-masterclass.jpg",
  },
  {
    month: "AUG",
    day: "28",
    type: "CREATOR SESSION",
    title: "How to Price Your Creative Work",
    speaker: "",
    image: "/images/community/event-creator-session.jpg",
  },
  {
    month: "SEP",
    day: "12",
    type: "COMMUNITY MEETUP",
    title: "CreateCo Creator Hangout",
    speaker: "",
    image: "/images/community/event-meetup.jpg",
  },
];

export default function CommunityEvents() {
  return (
    <section className="bg-[#f7f1ea]">
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 md:py-24 lg:px-16 lg:py-28">
        
        <div className="grid lg:grid-cols-[270px_1fr]">

          {/* LEFT — SECTION INTRO */}
          <div className="border-b border-[#d5cbc1] pb-10 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9d4d2b]">
              What&apos;s Happening
            </p>

            <h2 className="max-w-[280px] font-serif text-[38px] leading-[0.98] tracking-[-0.035em] text-[#171411] sm:text-[44px]">
              There&apos;s always
              <br />
              something
              <br />
              happening.
            </h2>

            <a
              href="#events"
              className="group mt-8 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9d4d2b]"
            >
              View All Events

              <ArrowRight
                size={14}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* RIGHT — HORIZONTAL EVENTS */}
          <div className="grid md:grid-cols-3 lg:pl-10">
            {events.map((event, index) => (
              <article
                key={`${event.month}-${event.day}`}
                className={`
                  flex flex-col
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
                      : index === events.length - 1
                        ? "md:pl-5"
                        : "md:px-5"
                  }
                `}
              >
                {/* DATE */}
                <div className="flex items-start gap-2">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9d4d2b]">
                      {event.month}
                    </p>

                    <p className="mt-1 font-serif text-[32px] leading-none text-[#9d4d2b]">
                      {event.day}
                    </p>
                  </div>

                  <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#9d4d2b]">
                    {event.type}
                  </p>
                </div>

                {/* TITLE */}
                <h3 className="mt-6 min-h-[80px] max-w-[210px] font-serif text-[22px] leading-[1.05] tracking-[-0.02em] text-[#171411]">
                  {event.title}
                </h3>

                {/* SPEAKER */}
                {event.speaker && (
                  <p className="mt-3 text-[10px] text-[#625951]">
                    {event.speaker}
                  </p>
                )}

                {/* CTA */}
                <a
                  href="#event"
                  className="group mt-auto flex items-center gap-2 pt-6 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#9d4d2b]"
                >
                  View Event

                  <ArrowRight
                    size={13}
                    strokeWidth={1.4}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                {/* IMAGE */}
                <div className="mt-6 aspect-[4/3] w-full overflow-hidden bg-[#ded3c8]">
                  <img
                    src={event.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}