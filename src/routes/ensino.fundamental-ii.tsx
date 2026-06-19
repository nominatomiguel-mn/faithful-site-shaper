import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CheckCircle2, Clock, ArrowRight } from "lucide-react";
import HERO_IMG from "@/assets/level-fund2.jpg";

export const Route = createFileRoute("/ensino/fundamental-ii")({
  head: () => ({
    meta: [
      { title: "Fundamental II — Colégio RS" },
      { name: "description", content: "Aprofundamento e autonomia do 6º ao 9º ano." },
      { property: "og:title", content: "Fundamental II — Colégio RS" },
      { property: "og:description", content: "Aprofundamento e autonomia do 6º ao 9º ano." },
      { property: "og:image", content: HERO_IMG },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Ensino" title="Fundamental II" subtitle="Aprofundamento e autonomia do 6º ao 9º ano." tone="coral" />
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:px-10">
          <img src={HERO_IMG} alt="Fundamental II" loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft" />
          <div>
            <h2 className="font-display text-3xl font-bold text-primary">Metodologia</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">Aprofundamos as áreas do conhecimento e desenvolvemos hábitos de estudo que farão a diferença no Ensino Médio.</p>
            <div className="mt-6 grid grid-cols-1 gap-4">
              <div className="rounded-2xl bg-muted p-5">
                <Clock className="h-5 w-5 text-green" />
                <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">Período</p>
                <p className="font-display text-lg font-bold text-primary">Manhã e Tarde</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <h2 className="font-display text-3xl font-bold text-primary">Diferenciais</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {["Material didático COC","Acompanhamento individual","Atividades extracurriculares","Comunicação com a família"].map((b) => (
              <li key={b} className="flex items-start gap-3 rounded-2xl bg-card p-5 shadow-soft">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-green" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/5511947305935?text=Ol%C3%A1!%20Gostaria%20de%20iniciar%20a%20matr%C3%ADcula%20no%20Col%C3%A9gio%20RS."
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 font-bold text-orange-foreground shadow-orange"
          >
            Quero matricular meu filho <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
