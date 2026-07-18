"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Послуги", href: "#services" },
  { label: "Лікарі", href: "#doctors" },
  { label: "Результати", href: "#results" },
  { label: "Відгуки", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

const BREAKPOINT = 1000;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-slate-border"
          : "bg-white/80 backdrop-blur-xl border-b border-slate-border"
      }`}
    >
      <nav className="mx-auto max-w-[1200px] flex items-center justify-between h-[72px] px-6">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-teal flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C8 2 5 5 5 9c0 3 1 5 2 7l5 6 5-6c1-2 2-4 2-7 0-4-3-7-7-7z" />
              <circle cx="12" cy="9" r="2" />
            </svg>
          </div>
          <span className="text-lg font-semibold tracking-tight text-primary-text">
            SmileDesign
          </span>
        </a>

        {isDesktop && (
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-primary-text hover:text-teal transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {isDesktop && (
          <div className="flex items-center gap-5">
            <a href="tel:+380441234567" className="flex items-center gap-2 text-sm font-medium text-primary-text hover:text-teal transition-colors">
              <Phone size={16} />
              +380 44 123 45 67
            </a>
            <a
              href="#contact"
              className="bg-teal hover:bg-teal-dark text-white font-semibold text-sm rounded-full px-7 py-3 transition-all hover:shadow-lg hover:shadow-teal/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              Записатися
            </a>
          </div>
        )}

        {!isDesktop && (
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-primary-text"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </nav>

      {!isDesktop && mobileOpen && (
        <div className="bg-white border-t border-slate-border">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-base font-medium text-primary-text hover:text-teal transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="tel:+380441234567" className="flex items-center gap-2 text-sm font-medium text-primary-text">
              <Phone size={16} />
              +380 44 123 45 67
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="bg-teal text-white font-semibold text-sm rounded-full px-7 py-3 text-center"
            >
              Записатися
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
