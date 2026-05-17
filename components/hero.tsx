import { ArrowRight, TrendingUp, Minus } from "lucide-react";
import { Reveal } from "./reveal";

const DashboardMockup = () => (
  <div className="relative rounded-xl border border-soft bg-card shadow-[0_1px_0_rgba(255,255,255,0.03)_inset,0_30px_60px_-40px_rgba(0,0,0,0.8)] overflow-hidden">
    {/* Window chrome */}
    <div className="flex items-center justify-between px-4 py-3 border-b border-softer bg-[#0d0d0d]">
      <div className="flex items-center gap-1.5">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
      </div>
      <div className="text-xs text-muted-foreground font-mono">app.corvusit.cl/dashboard</div>
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-soft" />
        <span className="font-mono">live</span>
      </div>
    </div>

    <div className="grid grid-cols-12 gap-0">
      {/* Sidebar */}
      <aside className="col-span-3 hidden md:flex flex-col border-r border-softer p-4 gap-1 text-sm">
        <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Operación</div>
        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-primary/10 text-primary text-xs">
          <span className="w-4 h-4 grid place-items-center">⊞</span> Resumen
        </div>
        {["Proyectos", "Facturación", "Clientes", "Infraestructura"].map((item) => (
          <div key={item} className="flex items-center gap-2 px-2 py-1.5 rounded-md text-muted-foreground text-xs">
            <span className="w-4 h-4" /> {item}
          </div>
        ))}
        <div className="mt-auto pt-4 border-t border-softer mt-6 flex items-center gap-2 text-xs text-muted-foreground">
          <span className="w-7 h-7 rounded-full bg-primary/20 text-primary inline-flex items-center justify-center font-mono text-[10px]">JC</span>
          <div>
            <div className="text-foreground">J. Castro</div>
            <div>Admin</div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="col-span-12 md:col-span-9 p-4 md:p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">Resumen — Mayo 2026</div>
            <div className="text-lg font-semibold">Producción estable</div>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs">
            {["7d", "30d", "90d"].map((p, i) => (
              <span
                key={p}
                className={`px-2 py-1 rounded-md border font-mono ${i === 1 ? "bg-primary/10 text-primary border-primary/25" : "border-soft text-muted-foreground"}`}
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div className="rounded-lg border border-softer p-3">
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider">MRR</div>
            <div className="text-xl font-mono font-semibold mt-1 tabular">$8.420.000</div>
            <div className="text-[11px] text-primary mt-1 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +12.4%
            </div>
          </div>
          <div className="rounded-lg border border-softer p-3">
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Tickets activos</div>
            <div className="text-xl font-mono font-semibold mt-1 tabular">17</div>
            <div className="text-[11px] text-muted-foreground mt-1 flex items-center gap-1">
              <Minus className="w-3 h-3" /> sin cambios
            </div>
          </div>
          <div className="rounded-lg border border-softer p-3 col-span-2 md:col-span-1">
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Uptime</div>
            <div className="text-xl font-mono font-semibold mt-1 tabular">
              99.97<span className="text-muted-foreground text-base">%</span>
            </div>
            <div className="text-[11px] text-primary mt-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> todos los servicios OK
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="rounded-lg border border-softer p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs text-muted-foreground">Ingresos por proyecto</div>
            <div className="text-[10px] font-mono text-muted-foreground">CLP</div>
          </div>
          <div className="flex items-end gap-1.5 h-24">
            {[30, 45, 38, 60, 52, 70, 64, 82, 76, 90, 88, 100].map((h, i) => (
              <div
                key={i}
                className={`chart-bar rounded-sm flex-1 ${i === 11 ? "ring-1 ring-primary/50" : ""}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const stats = [
  { value: "40+", label: "Proyectos entregados" },
  { value: "12", label: "Industrias" },
  { value: "99.9%", label: "Uptime promedio" },
  { value: "CL", label: "Equipo local" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden mesh-bg">
      <div className="absolute inset-0 grid-overlay pointer-events-none" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <Reveal>
          <span className="pill">
            <span className="dot animate-pulse-soft" />
            Soluciones tecnológicas para tu negocio
          </span>
        </Reveal>

        <Reveal>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] max-w-3xl">
            Transformamos tu negocio con{" "}
            <span className="relative inline-block">
              <span className="text-primary">tecnología</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="6"
                viewBox="0 0 200 6"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M0,3 Q50,0 100,3 T200,3"
                  stroke="#10b981"
                  strokeWidth="1.5"
                  fill="none"
                  opacity={0.6}
                />
              </svg>
            </span>{" "}
            a medida
          </h1>
        </Reveal>

        <Reveal>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Desarrollamos software, sistemas de gestión y aplicaciones que automatizan procesos y hacen crecer empresas chilenas.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-5 py-3 rounded-md transition-colors shadow-lg shadow-primary/20"
            >
              Ver nuestros servicios
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#productos"
              className="inline-flex items-center gap-2 text-foreground/90 hover:text-foreground font-medium px-5 py-3 rounded-md border border-soft hover:border-primary/40 transition-colors"
            >
              Conocer productos
            </a>
          </div>
        </Reveal>

        {/* Stats strip */}
        <Reveal>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] border border-soft rounded-xl overflow-hidden max-w-3xl">
            {stats.map(({ value, label }) => (
              <div key={label} className="bg-card px-5 py-4">
                <div className="text-2xl font-mono font-semibold tabular text-foreground">{value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Dashboard mockup */}
        <Reveal className="mt-16 relative max-w-5xl mx-auto">
          <div className="absolute -inset-6 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
          <DashboardMockup />
          {/* Floating chips */}
          <div className="hidden md:flex absolute -top-4 -right-4 animate-float items-center gap-2 px-3 py-2 rounded-lg bg-card border border-primary/30 shadow-glow text-xs">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
            <span className="font-mono">
              deploy ✓ <span className="text-muted-foreground">2m ago</span>
            </span>
          </div>
          <div className="hidden md:flex absolute -bottom-4 -left-4 animate-float-delay items-center gap-2 px-3 py-2 rounded-lg bg-card border border-soft text-xs">
            <span className="text-primary">⚡</span>
            <span className="font-mono">+18% conversión</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
