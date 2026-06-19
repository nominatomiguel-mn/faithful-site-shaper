import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Colégio RS" },
      { name: "description", content: "Fale com o Colégio RS em Mauá/SP. Telefone, e-mail, endereço e formulário." },
      { property: "og:title", content: "Contato — Colégio RS" },
      { property: "og:description", content: "Estamos prontos para receber você." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Contato" title="Vamos conversar?" tone="primary" />
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:px-10">
          <div className="space-y-5">
            {[
              { icon: MapPin, t: "Endereço", b: "Rua Américo Basseto, 265 — Jardim Mauá — Mauá/SP — CEP 09340-210" },
              { icon: Phone, t: "Telefones", b: "(11) 4576-5291 · (11) 94730-5935" },
              { icon: Mail, t: "E-mail", b: "secretaria@colegiors.com.br" },
              { icon: Clock, t: "Atendimento", b: "Segunda a Sexta — 7h às 17h" },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.t} className="flex items-start gap-4 rounded-2xl bg-muted p-5">
                  <div className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-orange text-orange-foreground"><Icon className="h-5 w-5" /></div>
                  <div>
                    <p className="font-display text-lg font-bold text-primary">{c.t}</p>
                    <p className="text-sm text-muted-foreground">{c.b}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form onSubmit={(e) => { e.preventDefault(); alert("Mensagem enviada!"); }} className="space-y-4 rounded-3xl bg-card p-6 shadow-soft">
            <input required placeholder="Seu nome" className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-orange" />
            <input required type="email" placeholder="Seu e-mail" className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-orange" />
            <input placeholder="Telefone" className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-orange" />
            <textarea required rows={5} placeholder="Mensagem" className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-orange" />
            <button type="submit" className="w-full rounded-full bg-orange px-7 py-3.5 font-bold text-orange-foreground shadow-orange">Enviar mensagem</button>
          </form>
        </div>
        <div className="mt-16 aspect-[21/9] w-full overflow-hidden">
          <iframe title="Mapa" src="https://www.google.com/maps?q=Rua+Am%C3%A9rico+Basseto+265+Jardim+Mau%C3%A1+Mau%C3%A1+SP&output=embed" className="h-full w-full border-0" loading="lazy" />
        </div>
      </section>
    </>
  );
}
