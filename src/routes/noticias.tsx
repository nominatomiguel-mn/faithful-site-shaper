import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import spCourt from "@/assets/space-courtyard.jpg";
import spClass from "@/assets/space-classroom.jpg";
import spLab from "@/assets/space-lab.jpg";
import spLib from "@/assets/space-library.jpg";

export const Route = createFileRoute("/noticias")({
  head: () => ({
    meta: [
      { title: "Notícias — Colégio RS" },
      { name: "description", content: "Notícias, eventos e novidades do Colégio RS." },
      { property: "og:title", content: "Notícias — Colégio RS" },
      { property: "og:description", content: "Acompanhe a vida da escola." },
    ],
  }),
  component: Page,
});

const NEWS = [
  { cat: "Eventos", color: "bg-coral text-coral-foreground", date: "12 Mar 2026", title: "Festa da Família 2026", img: spCourt, body: "Uma manhã para celebrar nossa comunidade." },
  { cat: "Pedagógico", color: "bg-green text-green-foreground", date: "28 Fev 2026", title: "Olimpíada de Matemática: 7 medalhas", img: spClass, body: "Resultados de orgulho para todos nós." },
  { cat: "COC", color: "bg-sky text-sky-foreground", date: "10 Fev 2026", title: "Novo simulado nacional COC", img: spLab, body: "Reforça preparação para o ENEM." },
  { cat: "Cultura", color: "bg-yellow text-yellow-foreground", date: "01 Fev 2026", title: "Sarau literário do Fundamental II", img: spLib, body: "Alunos celebram a leitura." },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Atualidades" title="Notícias & Eventos" tone="orange" />
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-3 md:px-10">
          {NEWS.map((n) => (
            <article key={n.title} className="overflow-hidden rounded-3xl bg-card shadow-soft">
              <img src={n.img} alt={n.title} loading="lazy" width={1024} height={640} className="aspect-[16/10] w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${n.color}`}>{n.cat}</span>
                  <span className="text-xs text-muted-foreground">{n.date}</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-primary leading-snug">{n.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{n.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
