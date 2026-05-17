import { ArrowRight, Check, Coffee } from "lucide-react";
import { Reveal } from "./reveal";

const CalendarMock = () => (
  <div className="w-full max-w-xs font-mono">
    <div className="flex items-center justify-between text-xs mb-2">
      <span className="font-semibold font-sans">Mayo 2026</span>
      <span className="text-muted-foreground">14 reservas</span>
    </div>
    <div className="grid grid-cols-7 gap-1 text-[10px] text-muted-foreground mb-1">
      {["L", "M", "M", "J", "V", "S", "D"].map((d, i) => (
        <span key={i} className="text-center">{d}</span>
      ))}
    </div>
    <div className="grid grid-cols-7 gap-1 text-[11px] mb-3">
      {[
        { n: "11", active: false }, { n: "12", active: false },
        { n: "13", active: true }, { n: "14", active: true, ring: true },
        { n: "15", active: true }, { n: "16", active: true }, { n: "17", active: false },
      ].map(({ n, active, ring }) => (
        <span
          key={n}
          className={`aspect-square rounded grid place-items-center ${
            ring
              ? "bg-primary/30 text-primary ring-1 ring-primary"
              : active
              ? "bg-primary/15 text-primary"
              : "text-muted-foreground"
          }`}
        >
          {n}
        </span>
      ))}
    </div>
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-[11px] px-2 py-1.5 rounded border border-softer">
        <span className="text-muted-foreground">09:30</span>
        <span>Corte + barba</span>
        <span className="text-primary">✓</span>
      </div>
      <div className="flex items-center justify-between text-[11px] px-2 py-1.5 rounded border border-primary/30 bg-primary/5">
        <span className="text-primary">11:00</span>
        <span>Diego R.</span>
        <span className="text-primary animate-pulse-soft">●</span>
      </div>
      <div className="flex items-center justify-between text-[11px] px-2 py-1.5 rounded border border-softer">
        <span className="text-muted-foreground">13:15</span>
        <span>Corte clásico</span>
        <span className="text-muted-foreground">—</span>
      </div>
    </div>
  </div>
);

const TerminalMock = () => (
  <div className="w-full max-w-xs font-mono text-[11px] space-y-1.5">
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">Servicios</span>
      <span className="text-primary">8/8 OK</span>
    </div>
    {[
      { name: "api.prod", status: "ok" },
      { name: "postgres.main", status: "ok" },
      { name: "worker.queue", status: "ok" },
    ].map(({ name, status }) => (
      <div key={name} className="px-2 py-2 rounded border border-softer flex items-center justify-between">
        <span>{name}</span>
        <span className={status === "ok" ? "text-primary" : "text-warn"}>●</span>
      </div>
    ))}
    <div className="px-2 py-2 rounded border border-warn/30 bg-warn/5 flex items-center justify-between">
      <span>cdn.edge-sa</span>
      <span className="text-warn">⚠ lag</span>
    </div>
    <div className="text-muted-foreground text-[10px] pt-1">
      $ uptime --24h <span className="text-foreground">99.97%</span>
    </div>
  </div>
);

const products = [
  {
    name: "CorvusBarber",
    badge: "Barbería",
    badgeClass: "bg-primary/10 text-primary border-primary/20",
    version: "v2.3",
    description:
      "Sistema de reservas y gestión para barberías. Agenda online, control de cajas, fidelización y reportes en tiempo real.",
    features: ["Agenda online", "Caja diaria", "Fidelización", "Reportes"],
    cta: "Ver más",
    mock: <CalendarMock />,
    href: "#",
  },
  {
    name: "CorvusCore",
    badge: "Gestión IT",
    badgeClass: "bg-primary/10 text-primary border-primary/20",
    version: "v1.8",
    description:
      "Dashboard central para administrar sistemas, facturación y costos. Una sola vista para toda tu operación IT.",
    features: ["Multi-cliente", "Facturación electrónica", "Costos en vivo", "Alertas"],
    cta: "Ver más",
    mock: <TerminalMock />,
    href: "#",
  },
  {
    name: "CorvusCoffee",
    badge: "Próximamente",
    badgeClass: "bg-warn/10 text-warn border-warn/20",
    version: "beta privada",
    description:
      "Punto de venta y gestión de inventario para cafeterías independientes. En desarrollo activo — disponible Q3 2026.",
    features: [],
    cta: "Sumarme a la lista",
    mock: (
      <div className="relative text-center">
        <div className="absolute inset-0 grid-overlay opacity-50 rounded-lg" />
        <div className="relative">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 border border-primary/20 grid place-items-center">
            <Coffee className="w-6 h-6 text-primary" strokeWidth={1.6} />
          </div>
          <div className="text-xs text-muted-foreground font-mono mt-3">build 0.4.2 · staging</div>
        </div>
      </div>
    ),
    href: "#contacto",
    dim: true,
  },
];

export function Products() {
  return (
    <section
      id="productos"
      className="py-20 md:py-28 border-t border-soft"
      style={{ backgroundColor: "#070707" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="flex flex-col items-start md:items-center text-left md:text-center gap-4 mb-12">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Productos</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Nuestros productos</h2>
          <p className="text-muted-foreground max-w-xl">
            Soluciones listas para usar, construidas para rubros específicos.
          </p>
        </Reveal>

        <div className="space-y-4">
          {products.map(({ name, badge, badgeClass, version, description, features, cta, mock, href, dim }) => (
            <Reveal key={name}>
              <article className={`card-hover rounded-xl border border-soft bg-card overflow-hidden ${dim ? "opacity-80" : ""}`}>
                <div className="grid grid-cols-1 md:grid-cols-12">
                  <div className="md:col-span-7 p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs px-2 py-1 rounded-full border ${badgeClass}`}>{badge}</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-muted-foreground border border-soft font-mono">
                        {version}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight">{name}</h3>
                    <p className="text-muted-foreground mt-2 max-w-lg leading-relaxed">{description}</p>
                    {features.length > 0 && (
                      <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mt-4 max-w-md">
                        {features.map((f) => (
                          <li key={f} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-primary shrink-0" strokeWidth={2} />
                            {f}
                          </li>
                        ))}
                      </ul>
                    )}
                    <a
                      href={href}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm text-primary hover:gap-2.5 transition-all"
                    >
                      {cta} <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="md:col-span-5 border-t md:border-t-0 md:border-l border-softer bg-[#0d0d0d] p-6 flex items-center justify-center">
                    {mock}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
