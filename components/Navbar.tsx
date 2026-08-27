"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Community", href: "#community" },
  { name: "Resources", href: "#resources" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent page scrolling while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#17120f]/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* LOGO */}
        <a
          href="#home"
          onClick={closeMenu}
          className="relative z-50 font-serif text-[25px] tracking-[-0.04em] text-white"
        >
          CreateCo.
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-[9px] font-medium uppercase tracking-[0.08em] text-white/90 transition-colors duration-300 hover:text-[#c76a3d]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* DESKTOP CTA */}
        <a
          href="#contact"
          className="hidden items-center gap-2 bg-[#a9512b] px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.1em] text-white transition-colors duration-300 hover:bg-[#bd6138] lg:inline-flex"
        >
          Work With Us
          <ArrowUpRight size={13} strokeWidth={1.8} />
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="relative z-50 flex h-10 w-10 items-center justify-center text-white lg:hidden"
        >
          {menuOpen ? (
            <X size={24} strokeWidth={1.5} />
          ) : (
            <Menu size={24} strokeWidth={1.5} />
          )}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`absolute left-0 top-full w-full overflow-hidden bg-[#17120f] transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[600px] border-t border-white/10 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-8 pt-5">

          {/* MOBILE LINKS */}
          <div className="flex flex-col">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className={`flex items-center justify-between border-b border-white/10 py-4 text-[11px] font-medium uppercase tracking-[0.12em] text-white/90 transition-colors hover:text-[#c76a3d] ${
                  index === 0 ? "border-t border-white/10" : ""
                }`}
              >
                {link.name}

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="text-white/40"
                />
              </a>
            ))}
          </div>

          {/* MOBILE CTA */}
          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-6 flex w-full items-center justify-center gap-2 bg-[#a9512b] px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-white"
          >
            Work With Us
            <ArrowUpRight size={14} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </header>
  );
}