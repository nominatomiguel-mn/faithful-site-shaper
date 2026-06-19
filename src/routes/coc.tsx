import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { BookOpen, Cpu, ClipboardCheck, Trophy, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/coc")({
  head: () => ({
    meta: [
      { title: "Sistema COC — Colégio RS" },
      { name: "description", content: "Parceria do Colégio RS com o sistema de ensino COC." },
      { property: "og:title", content: "Sistema COC — Colégio RS" },
      { property: "og:description", content: "Material didático COC, plataforma digital e simulados." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Parceria" title="Sistema de ensino COC" subtitle="Mais de 50 anos liderando a educação brasileira." tone="green" />
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4 md:px-10">
          {[
            { icon: BookOpen, l: "Material Didático Premium" },
            { icon: Cpu, l: "Plataforma Digital" },
            { icon: ClipboardCheck, l: "Avaliações Nacionais" },
            { icon: Trophy, l: "Preparação ENEM" },
          ].map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.l} className="rounded-3xl bg-muted p-7">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-green text-green-foreground"><Icon className="h-6 w-6" /></div>
                <p className="mt-4 font-display text-lg font-bold text-primary">{f.l}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <a href="https://portal.coc.com.br" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 font-bold text-green-foreground shadow-green">
            Acessar portal COC <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
