import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { z } from "zod";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar, FileText, MessageSquare, Sparkles, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/matricula")({
  head: () => ({
    meta: [
      { title: "Matrícula 2026 — Colégio RS" },
      { name: "description", content: "Matrículas abertas para 2026 no Colégio RS. Conheça o passo a passo e faça sua pré-matrícula." },
      { property: "og:title", content: "Matrícula 2026 — Colégio RS" },
      { property: "og:description", content: "Vagas abertas para todos os níveis." },
    ],
  }),
  component: Page,
});

const STEPS = [
  { icon: MessageSquare, t: "Reunião com a coordenação", b: "Tire suas dúvidas e conheça a proposta." },
  { icon: FileText, t: "Documentação", b: "Apresente os documentos do aluno e responsáveis." },
  { icon: Sparkles, t: "Bem-vindo!", b: "Assinatura do contrato e início da jornada." },
];

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  telefone: z.string().trim().min(8, "Informe um telefone").max(20),
  serie: z.string().trim().min(1, "Selecione uma série").max(60),
  mensagem: z.string().trim().max(1000).optional(),
});

function Page() {
  const [done, setDone] = useState(false);
  const [errs, setErrs] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const r = schema.safeParse(data);
    if (!r.success) {
      const o: Record<string, string> = {};
      r.error.issues.forEach((i) => { o[String(i.path[0])] = i.message; });
      setErrs(o);
      return;
    }
    setErrs({});
    setDone(true);
  };

  return (
    <>
      <PageHero eyebrow="Matrículas 2026" title="Faça parte da família Colégio RS" subtitle="Vagas abertas para todos os níveis." tone="orange" />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <h2 className="font-display text-3xl font-bold text-primary">Como funciona</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.t} className="relative rounded-3xl bg-muted p-6">
                  <span className="absolute -top-3 -right-3 grid h-9 w-9 place-items-center rounded-full bg-orange font-display text-sm font-bold text-orange-foreground shadow-orange">{i + 1}</span>
                  <Icon className="h-6 w-6 text-coral" />
                  <p className="mt-3 font-display text-lg font-bold text-primary">{s.t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.b}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:px-10">
          <div>
            <h2 className="font-display text-3xl font-bold text-primary">Documentos necessários</h2>
            <Accordion type="single" collapsible className="mt-6">
              {[
                ["Documentos do aluno", "Certidão de nascimento, RG, CPF, comprovante de vacinação e foto 3x4."],
                ["Documentos dos responsáveis", "RG, CPF e comprovante de residência atualizado."],
                ["Histórico escolar", "Histórico ou declaração de transferência da escola anterior."],
              ].map(([t, b]) => (
                <AccordionItem key={t} value={t} className="rounded-2xl border bg-card mb-3 px-5">
                  <AccordionTrigger className="font-bold text-primary">{t}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{b}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div>
            <h2 className="font-display text-3xl font-bold text-primary">Pré-matrícula</h2>
            {done ? (
              <div className="mt-6 rounded-3xl bg-green/15 p-8 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-green" />
                <p className="mt-3 font-display text-xl font-bold text-primary">Recebemos seus dados!</p>
                <p className="mt-2 text-sm text-muted-foreground">Entraremos em contato em breve.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 space-y-4 rounded-3xl bg-card p-6 shadow-soft" noValidate>
                {[
                  ["nome", "Nome do responsável", "text"],
                  ["email", "E-mail", "email"],
                  ["telefone", "Telefone", "tel"],
                ].map(([n, l, t]) => (
                  <div key={n}>
                    <label className="text-sm font-bold text-primary">{l}</label>
                    <input name={n} type={t} className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-orange" />
                    {errs[n] && <p className="mt-1 text-xs text-destructive">{errs[n]}</p>}
                  </div>
                ))}
                <div>
                  <label className="text-sm font-bold text-primary">Série de interesse</label>
                  <select name="serie" className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-orange">
                    <option value="">Selecione...</option>
                    <option>Educação Infantil</option>
                    <option>Fundamental I</option>
                    <option>Fundamental II</option>
                    <option>Ensino Médio</option>
                  </select>
                  {errs.serie && <p className="mt-1 text-xs text-destructive">{errs.serie}</p>}
                </div>
                <div>
                  <label className="text-sm font-bold text-primary">Mensagem (opcional)</label>
                  <textarea name="mensagem" rows={3} maxLength={1000} className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-orange" />
                </div>
                <button type="submit" className="w-full rounded-full bg-orange px-7 py-3.5 font-bold text-orange-foreground shadow-orange transition-transform hover:scale-[1.02]">
                  Enviar pré-matrícula
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
