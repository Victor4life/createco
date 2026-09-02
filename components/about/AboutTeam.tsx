import { Mail } from "lucide-react";

const team = [
  {
    name: "Tomi A.",
    role: "Founder & Creative Director",
    image: "/images/about/team/tomi.jpg",
  },
  {
    name: "Dami O.",
    role: "Community Lead",
    image: "/images/about/team/dami.jpg",
  },
  {
    name: "Jason A.",
    role: "Head of Strategy",
    image: "/images/about/team/jason.jpg",
  },
  {
    name: "Kemi O.",
    role: "Brand Partnerships",
    image: "/images/about/team/kemi.jpg",
  },
];

export default function AboutTeam() {
  return (
    <section className="bg-[#f7f2ec] border-t border-[#ddd3ca]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 md:py-20 lg:px-16 lg:py-24">

        <div className="grid lg:grid-cols-[28%_72%]">

          {/* Intro */}
          <div className="mb-10 lg:mb-0 lg:pr-10">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9f4827]">
              The People Behind CreateCo
            </p>

            <h2 className="font-serif text-[38px] leading-[0.98] tracking-[-0.035em] text-[#171411] sm:text-[45px]">
              A team of creators,
              <br />
              builders and dreamers
              <br />
              just like{" "}
              <span className="italic text-[#a84e2b]">
                you.
              </span>
            </h2>

            <a
              href="#team"
              className="mt-7 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a84e2b]"
            >
              Meet The Team →
            </a>
          </div>

          {/* Team */}
          <div
            id="team"
            className="grid grid-cols-2 gap-4 lg:grid-cols-4"
          >
            {team.map((person) => (
              <article key={person.name}>
                <div className="aspect-[0.9] overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <h3 className="mt-4 text-[13px] font-semibold text-[#171411]">
                  {person.name}
                </h3>

                <p className="mt-1 text-[10px] text-[#625951]">
                  {person.role}
                </p>

<div className="mt-3 flex items-center gap-3 text-[#625951]">
  <a
    href="#"
    aria-label={`${person.name} Instagram`}
    className="text-[10px] font-medium transition-colors hover:text-[#a84e2b]"
  >
    IG
  </a>

  <a
    href="#"
    aria-label={`${person.name} LinkedIn`}
    className="text-[10px] font-medium transition-colors hover:text-[#a84e2b]"
  >
    IN
  </a>

  <a
    href="#"
    aria-label={`Email ${person.name}`}
    className="transition-colors hover:text-[#a84e2b]"
  >
    <Mail size={13} strokeWidth={1.4} />
  </a>
</div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}