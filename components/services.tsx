import { Code2, Layers, Smartphone, GitBranch, Compass, LifeBuoy } from "lucide-react";
import { Reveal } from "./reveal";

const services = [
  {
    icon: Code2,
    title: "Desarrollo web a medida",
    description: "Aplicaciones modernas con Next.js, React y tecnologías de vanguardia.",
    tags: ["Next.js", "React", "TS"],
  },
  {
    icon: Layers,
    title: "Software de gestión (ERP/CRM)",
    description: "Sistemas internos que centralizan y automatizan tu operación.",
    tags: ["PostgreSQL", "Node", "SSO"],
  },
  {
    icon: Smartphone,
    title: "Aplicaciones móviles",
    description: "Apps iOS y Android con Flutter para llevar tu negocio al bolsillo.",
    tags: ["Flutter", "iOS", "Android"],
  },
  {
    icon: GitBranch,
    title: "APIs e integraciones",
    description: "Conectamos tus herramientas: pasarelas de pago, ERPs y servicios externos.",
    tags: ["Transbank", "Webpay", "REST"],
  },
  {
    icon: Compass,
    title: "Consultoría IT",
    description: "Asesoría técnica para elegir la tecnología correcta para tu empresa.",
    tags: ["Auditoría", "Stack", "Roadmap"],
  },
  {
    icon: LifeBuoy,
    title: "Soporte y mantención",
    description: "Acompañamiento continuo: hosting, actualizaciones y soporte técnico.",
    tags: ["24/7", "SLA", "Hosting"],
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="flex flex-col items-start md:items-center text-left md:text-center gap-4 mb-12">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Servicios</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">¿Qué hacemos?</h2>
          <p className="text-muted-foreground max-w-xl">
            De la idea al producto en producción. Equipos que combinan diseño, ingeniería y conocimiento del negocio chileno.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(({ icon: Icon, title, description, tags }) => (
            <Reveal key={title}>
              <article className="card-hover rounded-xl border border-soft bg-card p-6 h-full">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary inline-flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" strokeWidth={1.6} />
                </div>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono text-muted-foreground px-2 py-0.5 rounded border border-softer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
