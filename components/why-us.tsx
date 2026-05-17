import { Cpu, MapPin, Sparkles, Clock, Hammer } from "lucide-react";
import { Reveal } from "./reveal";

export function WhyUs() {
  return (
    <section
      id="nosotros"
      className="py-20 md:py-28 border-t border-soft"
      style={{ backgroundColor: "#070707" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="flex flex-col items-start md:items-center text-left md:text-center gap-4 mb-12">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Nosotros</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">¿Por qué elegirnos?</h2>
          <p className="text-muted-foreground max-w-xl">
            Tres razones por las que empresas chilenas confían en nosotros para construir su software.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Highlighted card */}
          <Reveal>
            <div className="card-hover rounded-xl border-2 border-primary bg-card p-7 shadow-lg shadow-primary/10 relative h-full">
              <div className="absolute -top-3 left-7 text-[10px] font-semibold text-primary bg-background px-2 py-0.5 rounded-full border border-primary/30 uppercase tracking-wider">
                Lo que más valoran
              </div>
              <div className="w-10 h-10 rounded-lg bg-primary/15 text-primary inline-flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" strokeWidth={1.6} />
              </div>
              <h3 className="font-semibold text-lg">Tecnología moderna</h3>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                Usamos Next.js, React, Flutter, Node.js y las mejores herramientas del mercado.
              </p>
              <div className="mt-5 pt-5 border-t border-softer flex flex-wrap gap-1.5">
                {["Next.js 15", "React 19", "Flutter", "Node"].map((t) => (
                  <span key={t} className="text-[10px] font-mono text-muted-foreground px-2 py-0.5 rounded border border-softer">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Equipo local */}
          <Reveal>
            <div className="card-hover rounded-xl border border-soft bg-card p-7 h-full">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary inline-flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" strokeWidth={1.6} />
              </div>
              <h3 className="font-semibold text-lg">Equipo local</h3>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                Somos un equipo chileno que habla tu idioma, en tu zona horaria.
              </p>
              <div className="mt-5 pt-5 border-t border-softer flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" strokeWidth={1.6} />
                <span className="font-mono">UTC−4 · Santiago, CL</span>
              </div>
            </div>
          </Reveal>

          {/* Soluciones reales */}
          <Reveal>
            <div className="card-hover rounded-xl border border-soft bg-card p-7 h-full">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary inline-flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" strokeWidth={1.6} />
              </div>
              <h3 className="font-semibold text-lg">Soluciones reales</h3>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                No vendemos plantillas: cada proyecto es construido para tu negocio.
              </p>
              <div className="mt-5 pt-5 border-t border-softer flex items-center gap-2 text-xs text-muted-foreground">
                <Hammer className="w-4 h-4 text-primary" strokeWidth={1.6} />
                <span>Código tuyo, para siempre</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
