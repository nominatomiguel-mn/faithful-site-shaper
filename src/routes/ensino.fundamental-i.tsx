import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CheckCircle2, Clock, Users, ArrowRight } from "lucide-react";
import HERO_IMG from "@/assets/level-fund1.jpg";

export const Route = createFileRoute("/ensino/fundamental-i")({
  head: () => ({
    meta: [
      { title: "Fundamental I — Colégio RS" },
      { name: "description", content: "Alfabetização sólida e raciocínio lógico do 1º ao 5º ano." },
      { property: "og:title", content: "Fundamental I — Colégio RS" },
      { property: "og:description", content: "Alfabetização sólida e raciocínio lógico do 1º ao 5º ano." },
      { property: "og:image", content: HERO_IMG },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Ensino" title="Fundamental I" subtitle="Alfabetização sólida e raciocínio lógico do 1º ao 5º ano." tone="orange" />
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:px-10">
          <img src={HERO_IMG} alt="Fundamental I" loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft" />
          <div>
            <h2 className="font-display text-3xl font-bold text-primary">Metodologia</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">No Fundamental I, consolidamos a leitura, escrita e matemática com metodologia COC e protagonismo do aluno.</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-muted p-5">
                <Users className="h-5 w-5 text-orange" />
                <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">Faixa etária</p>
                <p className="font-display text-lg font-bold text-primary">6 a 10 anos</p>
              </div>
              <div className="rounded-2xl bg-muted p-5">
                <Clock className="h-5 w-5 text-green" />
                <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">Período</p>
                <p className="font-display text-lg font-bold text-primary">Manhã&nbsp;</p>
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
