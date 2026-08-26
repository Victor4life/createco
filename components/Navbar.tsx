export default function Navbar() {
  return (
    <>
      <nav className="absolute left-0 top-0 z-20 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          {/* Logo */}
          <a
            href="/"
            className="font-serif text-2xl tracking-tight text-white"
          >
            CreateCo.
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 text-[11px] font-medium uppercase tracking-[0.15em] text-white md:flex">
            <a href="#home" className="transition-opacity hover:opacity-60">
              Home
            </a>
            <a href="#about" className="transition-opacity hover:opacity-60">
              About
            </a>
            <a
              href="#services"
              className="transition-opacity hover:opacity-60"
            >
              Services
            </a>
            <a
              href="#community"
              className="transition-opacity hover:opacity-60"
            >
              Community
            </a>
            <a
              href="#resources"
              className="transition-opacity hover:opacity-60"
            >
              Resources
            </a>
            <a href="#blog" className="transition-opacity hover:opacity-60">
              Blog
            </a>
            <a href="#contact" className="transition-opacity hover:opacity-60">
              Contact
            </a>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden bg-[#a94d27] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#873c1f] md:block"
          >
            Work With Us →
          </a>

          {/* Mobile Menu Button */}
          <button
            className="text-white md:hidden"
            aria-label="Open menu"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}