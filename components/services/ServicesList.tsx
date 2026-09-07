"use client";

import { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Content Creation",
    shortDescription:
      "Reels, TikToks, photography and content that connects.",
    description:
      "We create strategic, culturally relevant content that helps brands capture attention, tell better stories and stay top of mind.",
    image: "/images/services/content-creation.jpg",
    deliverables: [
      "Short-form video",
      "Reels & TikToks",
      "Photography",
      "Campaign content",
    ],
  },
  {
    number: "02",
    title: "Brand Strategy & Social Media",
    shortDescription:
      "Strategy and social that gives your brand direction.",
    description:
      "We help brands find their voice, define their positioning and build social strategies that turn attention into meaningful connection.",
    image: "/images/services/brand-strategy.jpg",
    deliverables: [
      "Brand positioning",
      "Content strategy",
      "Social media management",
      "Creative direction",
    ],
  },
  {
    number: "03",
    title: "Creator Campaigns",
    shortDescription:
      "Connecting brands with the right creators and communities.",
    description:
      "We connect brands with creators who genuinely align with their audience, values and goals to build campaigns that feel authentic.",
    image: "/images/services/creator-campaigns.jpg",
    deliverables: [
      "Creator sourcing",
      "Campaign strategy",
      "Creator management",
      "Campaign reporting",
    ],
  },
  {
    number: "04",
    title: "Workshops",
    shortDescription:
      "Practical sessions designed to help teams and creators grow.",
    description:
      "Interactive workshops designed to give creators, teams and organisations the knowledge and tools they need to create better work.",
    image: "/images/services/workshops.jpg",
    deliverables: [
      "Creative workshops",
      "Content training",
      "Brand workshops",
      "Creator education",
    ],
  },
];

export default function ServicesList() {
  const [activeService, setActiveService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setActiveService(activeService === index ? null : index);
  };

  return (
    <section
      id="services"
      className="border-t border-[#ddd3ca] bg-[#f7f2ec]"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 md:py-20 lg:px-16 lg:py-24">

        {/* Section heading */}
        <div className="mb-12 grid gap-6 lg:grid-cols-[32%_68%] lg:mb-16">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9f4827]">
              Our Services
            </p>
          </div>

          <h2 className="max-w-[760px] font-serif text-[38px] leading-[0.98] tracking-[-0.04em] text-[#171411] sm:text-[48px] lg:text-[56px]">
            Everything your brand needs
            <br />
            to{" "}
            <span className="italic text-[#a84e2b]">
              move forward.
            </span>
          </h2>
        </div>

        {/* Services */}
        <div className="border-t border-[#cfc5bc]">
          {services.map((service, index) => {
            const isActive = activeService === index;

            return (
              <div
                key={service.number}
                className="border-b border-[#cfc5bc]"
              >
                {/* Service header */}
                <button
                  type="button"
                  onClick={() => toggleService(index)}
                  className="group flex w-full items-center gap-4 py-7 text-left sm:py-8 lg:py-9"
                  aria-expanded={isActive}
                >
                  {/* Number */}
                  <span className="w-8 shrink-0 font-serif text-[18px] text-[#a84e2b] sm:w-12 sm:text-[21px]">
                    {service.number}
                  </span>

                  {/* Title */}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-[27px] leading-none tracking-[-0.025em] text-[#171411] sm:text-[34px] lg:text-[42px]">
                      {service.title}
                    </h3>

                    <p className="mt-2 max-w-[500px] text-[11px] leading-5 text-[#625951] sm:text-[12px]">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Plus */}
                  <span
                    className={`
                      flex h-9 w-9 shrink-0 items-center justify-center
                      rounded-full border border-[#bfb3a9]
                      transition-all duration-300
                      ${
                        isActive
                          ? "rotate-45 bg-[#a84e2b] text-white border-[#a84e2b]"
                          : "text-[#171411] group-hover:bg-[#e9ddd2]"
                      }
                    `}
                  >
                    <Plus
                      size={17}
                      strokeWidth={1.3}
                    />
                  </span>
                </button>

                {/* Expanded content */}
                <div
                  className={`
                    grid overflow-hidden transition-all duration-500 ease-in-out
                    ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="min-h-0">
                    <div className="grid gap-7 pb-8 pl-12 sm:pl-16 lg:grid-cols-[42%_58%] lg:gap-12 lg:pb-10 lg:pl-16">

                      {/* Image */}
                      <div className="overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="aspect-[1.5] h-full w-full object-cover"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex flex-col justify-center lg:pr-16">
                        <p className="max-w-[550px] text-[13px] leading-[1.7] text-[#514a45] sm:text-[14px]">
                          {service.description}
                        </p>

                        <div className="mt-7">
                          <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9f4827]">
                            What We Can Create
                          </p>

                          <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                            {service.deliverables.map((item) => (
                              <div
                                key={item}
                                className="flex items-center gap-2 text-[11px] text-[#514a45]"
                              >
                                <span className="h-1 w-1 rounded-full bg-[#a84e2b]" />
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>

                        <a
                          href="/contact"
                          className="group mt-8 inline-flex w-fit items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#a84e2b]"
                        >
                          Explore This Service

                          <ArrowRight
                            size={14}
                            strokeWidth={1.4}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </a>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}