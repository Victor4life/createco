"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, X, Menu } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Content Creation", href: "/services" },
      { name: "Brand Strategy", href: "/services" },
      { name: "Social Media Management", href: "/services" },
      { name: "Creator Campaigns", href: "/services" },
      { name: "Workshops", href: "/services" },
    ],
  },
  { name: "Community", href: "/community" },
  {
    name: "Resources",
    href: "/resources",
    children: [
      { name: "Free Resources", href: "/resources" },
      { name: "Templates", href: "/resources" },
      { name: "Guides", href: "/resources" },
    ],
  },
  { name: "Blog", href: "/blog" },
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#17120f]/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      {/* NAVBAR */}
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* LOGO */}
        <a
          href="/"
          onClick={closeMenu}
          className="relative z-[60] font-serif text-[25px] tracking-[-0.04em] text-white"
        >
          CreateCo.
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[9px] font-medium uppercase tracking-[0.1em] text-white/90 transition-colors hover:text-[#c76a3d]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* DESKTOP CTA */}
        <a
          href="#contact"
          className="hidden items-center gap-2 bg-[#a9512b] px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#bd6138] lg:inline-flex"
        >
          Work With Us
          <ArrowUpRight size={13} strokeWidth={1.8} />
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="relative z-[60] flex h-10 w-10 items-center justify-center text-white lg:hidden"
        >
          {menuOpen ? (
            <X size={25} strokeWidth={1.4} />
          ) : (
            <Menu size={25} strokeWidth={1.4} />
          )}
        </button>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 z-40 bg-[#17120f] transition-all duration-500 lg:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >
        <div
          className={`flex h-full flex-col px-6 pb-8 pt-[105px] transition-transform duration-500 ${
            menuOpen ? "translate-y-0" : "-translate-y-8"
          }`}
        >
          {/* NAV LINKS */}
          <div className="flex-1 overflow-y-auto">
            {navLinks.map((link, index) => {
              const hasChildren = link.children?.length;
              const isOpen = openDropdown === link.name;

              return (
                <div key={link.name}>
                  <div
                    className={`flex items-center border-b border-white/10 ${
                      index === 0 ? "border-t" : ""
                    }`}
                  >
                    {/* Number */}
                    <span className="w-10 text-[9px] text-[#a9512b]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Main link */}
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (hasChildren) {
                          e.preventDefault();
                          setOpenDropdown(isOpen ? null : link.name);
                        } else {
                          closeMenu();
                        }
                      }}
                      className="flex flex-1 items-center justify-between py-5 text-[17px] font-medium uppercase tracking-[0.04em] text-[#f5eee6]"
                    >
                      {link.name}

                      {hasChildren ? (
                        <ChevronDown
                          size={18}
                          strokeWidth={1.3}
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      ) : (
                        <ArrowUpRight
                          size={17}
                          strokeWidth={1.3}
                          className="text-white/40"
                        />
                      )}
                    </a>
                  </div>

                  {/* SUBMENU */}
                  {hasChildren && (
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? "max-h-80 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="ml-10 border-b border-white/10 py-3">
                        {link.children?.map((child) => (
                          <a
                            key={child.name}
                            href={child.href}
                            onClick={closeMenu}
                            className="flex items-center justify-between py-3 text-[11px] uppercase tracking-[0.08em] text-[#b9aaa0] transition-colors hover:text-white"
                          >
                            {child.name}

                            <ArrowUpRight
                              size={13}
                              strokeWidth={1.2}
                              className="text-white/30"
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* BOTTOM CTA AREA */}
          <div className="border-t border-white/10 pt-6">

            <p className="mb-4 max-w-[280px] font-serif text-[22px] leading-[1] tracking-[-0.025em] text-[#f5eee6]">
              Let&apos;s create something
              <br />
              <span className="italic text-[#b65c32]">
                amazing together.
              </span>
            </p>

            <a
              href="#contact"
              onClick={closeMenu}
              className="group flex w-full items-center justify-center gap-3 bg-[#a9512b] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#bd6138]"
            >
              Work With Us

              <ArrowUpRight
                size={15}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}