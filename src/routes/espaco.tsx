import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
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
import sala1 from "@/assets/sala-aula-1.jpg.asset.json";
import sala2 from "@/assets/sala-aula-2.jpg.asset.json";
import sala3 from "@/assets/sala-aula-3.jpg.asset.json";
import rob1 from "@/assets/robotica-1.jpg.asset.json";
import rob2 from "@/assets/robotica-2.jpg.asset.json";
import rob3 from "@/assets/robotica-3.jpg.asset.json";

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

type Item = { img: string; l: string; gallery?: { src: string; alt: string }[] };

const SALAS_GALLERY = [
  { src: spClass, alt: "Sala de aula" },
  { src: sala1.url, alt: "Sala de aula" },
  { src: sala2.url, alt: "Sala de aula" },
  { src: sala3.url, alt: "Sala de aula" },
];

const ROBOTICA_GALLERY = [
  { src: spRobotica, alt: "Aula de robótica" },
  { src: rob1.url, alt: "Montagem de robótica" },
  { src: rob2.url, alt: "Projeto de robótica" },
  { src: rob3.url, alt: "Alunos usando tablets" },
];

const REFEITORIO_GALLERY = [
  { src: spCaf, alt: "Refeitório" },
  { src: spCourt, alt: "Refeitório 2" },
];

const ITEMS: Item[] = [
  { img: spLib, l: "Quadra" },
  { img: spClass, l: "Salas modernas", gallery: SALAS_GALLERY },
  { img: spLab, l: "Laboratório\u00a0" },
  { img: spCaf, l: "Refeitórios\n\n", gallery: REFEITORIO_GALLERY },
  { img: spPlay, l: "Parque" },
  { img: spPatio, l: "Pátio" },
  { img: spLeitura, l: "Sala de leitura" },
  { img: spRobotica, l: "Robótica", gallery: ROBOTICA_GALLERY },
];

function Page() {
  const [open, setOpen] = useState<Item | null>(null);

  return (
    <>
      <PageHero eyebrow="Espaço" title="Uma estrutura pensada para aprender e ser feliz" tone="sky" />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl grid gap-4 px-6 md:grid-cols-3 md:px-10">
          {ITEMS.map((g) => {
            const clickable = !!g.gallery;
            const Tag = clickable ? "button" : "figure";
            return (
              <Tag
                key={g.l}
                {...(clickable ? { type: "button" as const, onClick: () => setOpen(g) } : {})}
                className="group block w-full text-left overflow-hidden rounded-3xl shadow-soft focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <img src={g.img} alt={g.l} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <figcaption className="bg-card p-5 font-display text-lg font-bold text-primary flex items-center justify-between">
                  <span className="whitespace-pre-wrap">{g.l}</span>
                  {clickable && <span className="text-xs font-medium text-muted-foreground">Ver galeria →</span>}
                </figcaption>
              </Tag>
            );
          })}
        </div>
      </section>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.l}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setOpen(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-card p-6 shadow-soft"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-display text-2xl font-bold text-primary whitespace-pre-wrap">{open.l}</h2>
              <button
                type="button"
                onClick={() => setOpen(null)}
                aria-label="Fechar"
                className="rounded-full p-2 hover:bg-muted"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {open.gallery!.map((g, i) => (
                <img
                  key={i}
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
