import { Reveal } from "./reveal";

const steps = [
  {
    n: "01",
    title: "Reunión inicial",
    description: "Entendemos tu problema, tu equipo y tus objetivos.",
  },
  {
    n: "02",
    title: "Propuesta técnica",
    description: "Diseñamos la solución y el presupuesto a medida.",
  },
  {
    n: "03",
    title: "Desarrollo ágil",
    description: "Iteraciones rápidas con entregas visibles desde la primera semana.",
  },
  {
    n: "04",
    title: "Entrega y soporte",
    description: "Lanzamos y acompañamos con mantención continua.",
  },
];

export function Process() {
  return (
    <section id="proceso" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="flex flex-col items-start md:items-center text-left md:text-center gap-4 mb-14">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Proceso</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">¿Cómo trabajamos?</h2>
          <p className="text-muted-foreground max-w-xl">
            Cuatro etapas claras, sin sorpresas. Te involucramos desde el día uno.
          </p>
        </Reveal>

        <ol className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
          {steps.map(({ n, title, description }, i) => (
            <Reveal key={n} className={i < steps.length - 1 ? "step-connector" : ""}>
              <li className="relative">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary border border-primary/20 grid place-items-center font-mono font-semibold text-sm">
                  {n}
                </div>
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
