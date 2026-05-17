import Link from "next/link";

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

const footerLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#productos", label: "Productos" },
  { href: "#contacto", label: "Contacto" },
  { href: "#", label: "Política de privacidad" },
];

export function Footer() {
  return (
    <footer className="border-t border-soft py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <Link href="#top" className="flex items-center gap-2.5">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-primary/20 border border-primary/25">
            <RavenIcon />
          </span>
          <span className="text-[15px] font-semibold tracking-tight">
            Corvus<span className="text-primary">IT</span>
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {footerLinks.map((l) => (
            <a key={l.href + l.label} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="text-xs text-muted-foreground font-mono">
          © 2026 Corvus IT. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
