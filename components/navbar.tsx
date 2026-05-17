"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

const RavenIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M3 14c1.5-3 4-5 8-5 1.5 0 2.4.2 3.5.7l3-3c.5-.5 1.4-.2 1.4.5v3l2 .4c.6.1.7.9.2 1.2l-2 1.2v.5c0 4.4-3.6 8-8 8H6c-1.7 0-3-1.3-3-3v-4.5Z"
      fill="#10b981"
      fillOpacity={0.22}
      stroke="#10b981"
      strokeWidth={1.4}
      strokeLinejoin="round"
    />
    <circle cx="15" cy="11.5" r="1" fill="#10b981" />
  </svg>
);

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#productos", label: "Productos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-soft nav-blur bg-background/75">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="#top" className="flex items-center gap-2.5 group">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-primary/20 border border-primary/25">
            <RavenIcon />
          </span>
          <span className="text-[15px] font-semibold tracking-tight">
            Corvus<span className="text-primary">IT</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-4 py-2 rounded-md transition-colors"
          >
            Solicitar demo
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-md border border-soft text-foreground"
            aria-label="Menú"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-soft bg-background/95">
          <div className="px-6 py-4 flex flex-col gap-3 text-sm">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center bg-primary text-primary-foreground font-medium px-4 py-2 rounded-md"
            >
              Solicitar demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
