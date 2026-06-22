import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Apple, GraduationCap, Puzzle, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/a-escola")({
  head: () => ({
    meta: [
      { title: "A Escola — Colégio RS" },
      { name: "description", content: "Conheça a história, missão, visão, valores e equipe do Colégio RS em Mauá/SP." },
      { property: "og:title", content: "A Escola — Colégio RS" },
      { property: "og:description", content: "História, missão, visão e valores do Colégio RS." },
    ],
  }),
  component: Page,
});

const TIMELINE = [
  { year: "1996", text: "Fundação do Colégio RS em Mauá,por Danielle e Cristiane." },
  { year: "2001", text: "Expansão para Ensino Fundamental I e II." },
  { year: "2008", text: "Início da parceria com o sistema de ensino COC." },
  { year: "2010", text: "Implantação do Ensino Médio com foco em ENEM." },
  { year: "2026", text: "30 anos formando gerações em Mauá." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="A Escola"
        title="Tradição, cuidado e excelência desde 1996"
        subtitle="Três décadas educando crianças e jovens em Mauá/SP — sempre com proximidade, escuta e resultado."
      />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">Nossa história</h2>
          <ol className="mt-10 relative border-l-2 border-orange/40 pl-6 space-y-8">
            {TIMELINE.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[34px] grid h-6 w-6 place-items-center rounded-full bg-orange text-orange-foreground text-[10px] font-bold">•</span>
                <p className="font-display text-2xl font-bold text-primary">{t.year}</p>
                <p className="mt-1 text-muted-foreground">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h2 className="text-center font-display text-3xl font-bold text-primary md:text-4xl">Missão · Visão · Valores</h2>
          <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-8">
            {[
              { icon: Apple, t: "Missão", c: "bg-yellow text-yellow-foreground", b: "Contribuir no desenvolvimento de conhecimentos e estímulo à criatividade." },
              { icon: GraduationCap, t: "Visão", c: "bg-coral text-coral-foreground", b: "Transformar nossos educandos em adultos produtivos e pensantes." },
              { icon: Puzzle, t: "Valores", c: "bg-green text-green-foreground", b: "Ética, comprometimento, profissionalismo, desenvolvimento de pessoas e cidadania." },
            ].map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.t} className={`relative rounded-3xl ${m.c} px-7 pt-16 pb-8 text-center shadow-soft`}>
                  <div className="absolute -top-9 left-1/2 -translate-x-1/2 grid h-16 w-16 place-items-center rounded-full bg-white text-primary shadow-soft">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-2xl font-bold">Nossa {m.t}</h3>
                  <p className="mt-3 text-sm opacity-90">{m.b}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">Por que o Colégio RS?</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Turmas reduzidas com atenção individual",
              "Sistema de ensino COC — referência nacional",
              "Equipe pedagógica experiente e acolhedora",
              "Estrutura completa: laboratório, biblioteca, parquinho",
              "Atividades extracurriculares variadas",
              "Comunicação direta com as famílias",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3 rounded-2xl bg-muted p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-green" />
                <span className="text-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
