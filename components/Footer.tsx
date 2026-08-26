import {
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#17120f] text-[#f5eee6]">

      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-[1500px] px-6 py-10 sm:px-8 md:px-12 lg:px-16 lg:py-12">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.3fr] lg:gap-12">

          {/* BRAND */}
          <div>
            <div className="mb-3 font-serif text-[27px] tracking-[-0.04em]">
              CreateCo.
            </div>

            <p className="text-[8px] font-medium uppercase tracking-[0.18em] text-[#b9aaa0]">
              Create. Grow. Influence.
            </p>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="mb-5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#b9aaa0]">
              Company
            </h3>

            <nav className="flex flex-col gap-2.5">
              <a
                href="#about"
                className="w-fit text-[11px] text-[#eee5dd] transition-colors hover:text-[#b35b35]"
              >
                About Us
              </a>

              <a
                href="#work"
                className="w-fit text-[11px] text-[#eee5dd] transition-colors hover:text-[#b35b35]"
              >
                Our Work
              </a>

              <a
                href="#services"
                className="w-fit text-[11px] text-[#eee5dd] transition-colors hover:text-[#b35b35]"
              >
                Services
              </a>

              <a
                href="#contact"
                className="w-fit text-[11px] text-[#eee5dd] transition-colors hover:text-[#b35b35]"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* COMMUNITY */}
          <div>
            <h3 className="mb-5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#b9aaa0]">
              Community
            </h3>

            <nav className="flex flex-col gap-2.5">
              <a
                href="#masterclasses"
                className="w-fit text-[11px] text-[#eee5dd] transition-colors hover:text-[#b35b35]"
              >
                Masterclasses
              </a>

              <a
                href="#resources"
                className="w-fit text-[11px] text-[#eee5dd] transition-colors hover:text-[#b35b35]"
              >
                Resources
              </a>

              <a
                href="#events"
                className="w-fit text-[11px] text-[#eee5dd] transition-colors hover:text-[#b35b35]"
              >
                Events
              </a>

              <a
                href="#community"
                className="w-fit text-[11px] text-[#eee5dd] transition-colors hover:text-[#b35b35]"
              >
                Join the Community
              </a>
            </nav>
          </div>

          {/* STAY CONNECTED */}
          <div>
            <h3 className="mb-4 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#b9aaa0]">
              Stay Connected
            </h3>

            <p className="mb-5 max-w-[260px] text-[10px] leading-[1.55] text-[#b9aaa0]">
              Get content tips, resources and updates straight to your inbox.
            </p>

            {/* EMAIL FORM */}
            <form className="flex max-w-[280px] border border-[#51453e]">
              <input
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 bg-transparent px-3 py-3 text-[10px] text-white outline-none placeholder:text-[#85766c]"
              />

              <button
                type="submit"
                aria-label="Subscribe"
                className="flex w-10 shrink-0 items-center justify-center bg-[#a9512b] text-white transition-colors hover:bg-[#bd6138]"
              >
                <ArrowUpRight size={15} strokeWidth={1.8} />
              </button>
            </form>

            {/* SOCIAL ICONS */}
{/* SOCIAL ICONS */}
<div className="mt-6 flex items-center gap-4">
  {/* Instagram */}
  <a
    href="#instagram"
    aria-label="Instagram"
    className="text-[#d7ccc4] transition-colors hover:text-[#a9512b]"
  >
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  </a>

  {/* X */}
  <a
    href="#x"
    aria-label="X"
    className="text-[14px] font-medium text-[#d7ccc4] transition-colors hover:text-[#a9512b]"
  >
    𝕏
  </a>

  {/* LinkedIn */}
  <a
    href="#linkedin"
    aria-label="LinkedIn"
    className="text-[#d7ccc4] transition-colors hover:text-[#a9512b]"
  >
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 7.9 2.2 2.2 0 0 1 5.2 3.5ZM3.3 9.5h3.8V21H3.3V9.5Zm6.2 0h3.6v1.6h.1c.5-.9 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.8V21h-3.8v-5.3c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9V21H9.5V9.5Z" />
    </svg>
  </a>

  {/* YouTube */}
  <a
    href="#youtube"
    aria-label="YouTube"
    className="text-[#d7ccc4] transition-colors hover:text-[#a9512b]"
  >
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="4" />
      <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
    </svg>
  </a>
</div>          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-10 border-t border-[#302822]" />

        {/* BOTTOM */}
        <div className="flex flex-col gap-3 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] text-[#81736a]">
            © 2026 CreateCo. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="#privacy"
              className="text-[9px] text-[#81736a] transition-colors hover:text-[#d7ccc4]"
            >
              Privacy Policy
            </a>

            <a
              href="#terms"
              className="text-[9px] text-[#81736a] transition-colors hover:text-[#d7ccc4]"
            >
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}