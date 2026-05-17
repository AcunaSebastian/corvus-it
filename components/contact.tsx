import { Mail, MessageCircle, Clock, ShieldCheck, BadgeCheck } from "lucide-react";
import { Reveal } from "./reveal";

export function Contact() {
  return (
    <section id="contacto" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="relative rounded-2xl border border-primary/30 bg-card overflow-hidden p-8 md:p-14">
            {/* Glow blobs */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/15 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute inset-0 grid-overlay opacity-50 pointer-events-none" />

            <div className="relative grid md:grid-cols-12 gap-8 items-center">
              {/* Left copy */}
              <div className="md:col-span-7">
                <span className="pill">
                  <span className="dot animate-pulse-soft" />
                  Consulta gratuita
                </span>
                <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight max-w-xl leading-tight">
                  ¿Listo para llevar tu empresa al siguiente nivel?
                </h2>
                <p className="mt-4 text-muted-foreground max-w-lg">
                  Cuéntanos tu proyecto. La primera consulta es gratuita y sin compromiso.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="mailto:contacto@corvusit.cl"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-5 py-3 rounded-md transition-colors shadow-lg shadow-primary/30"
                  >
                    <Mail className="w-4 h-4" />
                    Escribirnos
                  </a>
                  <a
                    href="https://wa.me/56900000000"
                    className="inline-flex items-center gap-2 text-foreground font-medium px-5 py-3 rounded-md border border-soft hover:border-primary/40 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-primary" /> Respuesta en menos de 24h
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-primary" /> NDA disponible
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BadgeCheck className="w-3.5 h-3.5 text-primary" /> Boleta o factura
                  </span>
                </div>
              </div>

              {/* Right terminal card */}
              <div className="md:col-span-5">
                <div className="rounded-xl border border-soft bg-background/70 p-5 font-mono text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">contacto@corvusit.cl</span>
                    <span className="text-primary">●</span>
                  </div>
                  <div className="h-px bg-white/5 my-2" />
                  <div className="text-muted-foreground">$ cat proyecto.txt</div>
                  <div className="text-foreground/90 leading-relaxed">
                    <span className="text-primary">&gt;</span> Necesito automatizar la facturación de mi taller
                    <br />
                    <span className="text-primary">&gt;</span> ~ 200 clientes/mes, hoy lo hacemos en Excel
                    <br />
                    <span className="text-primary">&gt;</span> Stack: lo que sirva, urgencia media
                  </div>
                  <div className="text-muted-foreground pt-2">$ corvus reply --eta</div>
                  <div className="text-primary">→ propuesta en 48h</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
