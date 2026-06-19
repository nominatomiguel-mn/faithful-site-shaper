import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import spLib from "@/assets/space-library.jpg";
import spPlay from "@/assets/space-playground.jpg";
import spCaf from "@/assets/space-cafeteria.jpg";
import spLab from "@/assets/space-lab.jpg";
import spCourt from "@/assets/space-courtyard.jpg";
import spClass from "@/assets/space-classroom.jpg";
import spPatio from "@/assets/space-patio.jpg";
import spLeitura from "@/assets/space-leitura.jpg";
import spRobotica from "@/assets/space-robotica.jpg";

export const Route = createFileRoute("/espaco")({
  head: () => ({
    meta: [
      { title: "Espaço — Colégio RS" },
      { name: "description", content: "Conheça a estrutura física do Colégio RS: salas, quadra, laboratório, parquinho, sala de leitura, robótica e mais." },
      { property: "og:title", content: "Espaço — Colégio RS" },
      { property: "og:description", content: "Estrutura física do Colégio RS." },
      { property: "og:image", content: spLib },
    ],
  }),
  component: Page,
});

const ITEMS = [
  { img: spLib, l: "Quadra" },
  { img: spClass, l: "Salas modernas" },
  { img: spLab, l: "Laboratório de informática" },
  { img: spCourt, l: "Refeitório 2" },
  { img: spCaf, l: "Refeitório" },
  { img: spPlay, l: "Parquinho" },
  { img: spPatio, l: "Pátio" },
  { img: spLeitura, l: "Sala de leitura" },
  { img: spRobotica, l: "Robótica" },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Espaço" title="Uma estrutura pensada para aprender e ser feliz" tone="sky" />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl grid gap-4 px-6 md:grid-cols-3 md:px-10">
          {ITEMS.map((g) => (
            <figure key={g.l} className="group overflow-hidden rounded-3xl shadow-soft">
              <img src={g.img} alt={g.l} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <figcaption className="bg-card p-5 font-display text-lg font-bold text-primary">{g.l}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
