import {
  GraduationCap,
  FileText,
  Users,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Monthly Masterclasses",
    description: "Practical, hands-on training sessions.",
  },
  {
    icon: FileText,
    title: "Resource Library",
    description: "Templates, guides, checklists and more.",
  },
  {
    icon: Users,
    title: "Creator Community",
    description: "Connect and collaborate with like-minded creators.",
  },
];

export default function Community() {
  return (
    <section className="w-full bg-[#f4f0e9] px-4 py-6 md:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[1500px] overflow-hidden bg-[#f4f0e9] lg:grid-cols-2">
        
        {/* IMAGE SIDE */}
        <div className="relative min-h-[420px] overflow-hidden md:min-h-[520px] lg:min-h-[650px]">
          <img
            src="/images/community.jpg"
            alt="CreateCo community workspace"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Optional subtle overlay */}
          <div className="absolute inset-0 bg-black/5" />
        </div>

        {/* CONTENT SIDE */}
        <div className="flex items-center justify-center px-7 py-14 sm:px-10 md:px-14 lg:px-16 xl:px-20">
          <div className="w-full max-w-[650px]">
            
            {/* Eyebrow */}
                        <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#a94d27]">
              CreateCo Community
            </p>

            {/* Heading */}
            <h2 className="font-serif text-[42px] leading-[0.98] tracking-[-0.035em] text-[#201d1a] sm:text-[50px] md:text-[56px] lg:text-[58px] xl:text-[64px]">
              A Community for
              <br />
              people who{" "}
              <span className="italic text-[#a94d27]">create.</span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-[570px] text-[14px] leading-[1.65] text-[#514a43] sm:text-[15px]">
              Learn, grow and build alongside a community of creators,
              entrepreneurs and brand builders who share the same passion.
            </p>

            {/* FEATURES */}
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-5">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="flex flex-col items-center text-center sm:items-center"
                  >
                    {/* Icon circle */}
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#ebe2d7]">
                      <Icon
                        size={25}
                        strokeWidth={1.4}
                        className="text-[#292521]"
                      />
                    </div>

                    {/* Feature title */}
                    <h3 className="text-[12px] font-semibold leading-tight text-[#292521]">
                      {feature.title}
                    </h3>

                    {/* Feature description */}
                    <p className="mt-2 max-w-[155px] text-[11px] leading-[1.5] text-[#625a52]">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-10 flex justify-center">
              <a
                href="#community"
                className="group inline-flex items-center gap-3 bg-[#292521] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#3b3530]"
              >
                Join the Community

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}