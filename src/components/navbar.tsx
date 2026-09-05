"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { href: "#features", label: "Recursos" },
  { href: "#how-it-works", label: "Como funciona" },
  { href: "#use-cases", label: "Casos de uso" },
  { href: "#pricing", label: "Planos" },
  { href: "#faq", label: "Dúvidas" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5">
          <Image src="/logo-icon.png" alt="Foji AI" width={32} height={32} className="rounded-lg" />
          <span className="font-bold text-xl tracking-tight">Foji AI</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://app.fojiai.com/login"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
          >
            Entrar
          </a>
          <a
            href="https://app.fojiai.com/signup"
            className="text-sm font-semibold bg-primary text-primary-foreground px-5 py-2.5 rounded-xl hover:brightness-110 transition-all active:scale-[0.98]"
          >
            Começar grátis
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-muted-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border px-6 py-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-muted-foreground hover:text-foreground py-2"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-border space-y-2">
            <a href="https://app.fojiai.com/login" className="block text-sm text-center py-2.5 rounded-xl border border-border hover:bg-muted transition-colors">
              Entrar
            </a>
            <a href="https://app.fojiai.com/signup" className="block text-sm text-center font-semibold bg-primary text-primary-foreground py-2.5 rounded-xl">
              Começar grátis
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
