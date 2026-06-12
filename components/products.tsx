import { ArrowRight, Check, Coffee, ImageIcon } from "lucide-react";
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
          className={`aspect-square rounded grid place-items-center ${ring
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

const ProductImageGallery = ({
  name,
  buildLabel,
  images = ["", "", ""],
}: {
  name: string;
  buildLabel: string;
  images?: string[];
}) => (
  <div className="w-full space-y-2">
    <div className="relative rounded-lg overflow-hidden bg-white/[0.03] border border-softer aspect-video">
      {images[0] ? (
        <img
          src={images[0]}
          alt={`${name} - vista principal`}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2">
          <ImageIcon className="w-5 h-5 text-primary/20" strokeWidth={1.4} />
          <span className="text-[10px] text-muted-foreground/40 font-mono">
            Pantalla principal
          </span>
        </div>
      )}
    </div>
    <div className="grid grid-cols-2 gap-2">
      {[0, 1].map((i) => (
        <div
          key={i}
          className="relative rounded border border-softer bg-white/[0.03] aspect-video overflow-hidden"
        >
          {images[i + 1] ? (
            <img
              src={images[i + 1]}
              alt={`${name} - captura ${i + 2}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-[9px] text-muted-foreground/30 font-mono">
                Captura {i + 2}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
    <p className="text-[10px] text-muted-foreground/50 font-mono text-center">
      {buildLabel}
    </p>
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
    href: "https://barber.corvusit.cl/",
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
    href: "https://core.corvusit.cl",
  },
  {
    name: "CorvusCoffee",
    badge: "Cafeteria",
    badgeClass: "bg-primary/10 text-primary border-primary/20",
    version: "beta privada",
    description: "Corvus Coffee no es solo un POS. Es el sistema operativo de tu cafetería: gestiona pedidos, mesas, reservas, staff, contenido y candidatos desde un solo panel. Moderno, en tiempo real y listo para el día a día más exigente.",
    features: ["Menú Digital Interactivo", "Pedidos desde la Mesa con QR", "Plano de Mesas en Tiempo Real", "Dashboard con Métricas en Tiempo Real", "Blog Integrado — \"El Cuaderno\"", "Portal de Empleo Propio", "Acceso por Roles", "y mucho más"],
    cta: "Pronto",
    mock: (
      <ProductImageGallery
        name="CorvusCoffee"
        buildLabel="build 1.0.0 · pre-producción"
        images={[
          "",  // reemplaza con: "/images/corvus-coffee/pantalla-principal.png"
          "",  // reemplaza con: "/images/corvus-coffee/pedidos.png"
          "",  // reemplaza con: "/images/corvus-coffee/mesas.png"
        ]}
      />
    ),
    href: "#contacto",
    dim: true,
  },
  {
    name: "CorvusVet",
    badge: "Veterinaria",
    badgeClass: "bg-orange/10 text-orange border-orange/20",
    version: "beta privada",
    description: "Con CorvusVet puedes  Sistema de gestión y punto de venta para veterinarias independientes. Control total de consultas, vacunas, agenda y stock",
    features: [],
    cta: "Pronto",
    mock: (
      <ProductImageGallery
        name="CorvusVet"
        buildLabel="build 0.4.2 · staging"
        images={[
          "",  // reemplaza con: "/images/corvus-vet/pantalla-principal.png"
          "",  // reemplaza con: "/images/corvus-vet/consultas.png"
          "",  // reemplaza con: "/images/corvus-vet/agenda.png"
        ]}
      />
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
