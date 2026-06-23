import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ArrowRight, Calendar, BookOpen, FileText, Bell } from "lucide-react";

export const Route = createFileRoute("/apoio-aos-pais")({
  head: () => ({
    meta: [
      { title: "Apoio aos Pais — Colégio RS" },
      { name: "description", content: "ACADESC, calendário, comunicados e portal das famílias do Colégio RS." },
      { property: "og:title", content: "Apoio aos Pais — Colégio RS" },
      { property: "og:description", content: "Tudo o que a família precisa em um só lugar." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Apoio aos Pais" title="A família ao lado da escola" tone="sky" />
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2 md:px-10">
          {[
            { icon: BookOpen, t: "ACADESC", b: "Notas, frequência e financeiro online." },
            { icon: Calendar, t: "Calendário escolar", b: "Datas importantes, eventos e provas." },
            { icon: Bell, t: "Comunicados", b: "Recados e avisos da coordenação." },
            { icon: FileText, t: "Documentos", b: "Listas de material, manuais e formulários." },
          ].map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.t} className="flex items-start gap-4 rounded-3xl bg-muted p-7">
                <div className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-sky text-sky-foreground"><Icon className="h-6 w-6" /></div>
                <div>
                  <h3 className="font-display text-xl font-bold text-primary">{c.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.b}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 flex flex-col items-center gap-4">
          <a href="https://apoioaospais.com.br/login.php" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 font-bold text-orange-foreground shadow-orange">
            Acessar ACADESC <ArrowRight className="h-4 w-4" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=acadesc.com.br.acadesc&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-orange px-7 py-3 font-bold text-orange hover:bg-orange hover:text-orange-foreground transition-colors">
            Baixar app ACADESC <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-16 mx-auto max-w-3xl px-6">
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-lg">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/KJI-nZVWong?start=84"
              title="Vídeo ACADESC"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
