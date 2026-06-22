import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Apple,
  GraduationCap,
  Puzzle,
  ArrowRight,
  MapPin,
  Star,
  Sparkles,
  BookOpen,
  Cpu,
  ClipboardCheck,
  Trophy,
  Heart,
  Quote,
  MessageCircle,
  Briefcase,
} from "lucide-react";
import { CurriculoForm } from "@/components/site/CurriculoForm";
import heroFacade from "@/assets/hero-facade.jpg";
import lvlInfantil from "@/assets/level-infantil.jpg";
import lvlFund1 from "@/assets/level-fund1.jpg";
import lvlFund2 from "@/assets/level-fund2.jpg";
import lvlMedio from "@/assets/level-medio.jpg";
import spLib from "@/assets/space-library.jpg";
import spPlay from "@/assets/space-playground.jpg";
import spCaf from "@/assets/space-cafeteria.jpg";
import spLab from "@/assets/space-lab.jpg";
import spCourt from "@/assets/space-courtyard.jpg";
import spClass from "@/assets/space-classroom.jpg";
import spLeitura from "@/assets/space-leitura.jpg";
import spRobotica from "@/assets/space-robotica.jpg";
import { DecorCircles } from "@/components/site/DecorCircles";
import { RainbowDivider } from "@/components/site/RainbowDivider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Colégio RS — Educando a futura geração em Mauá/SP" },
      {
        name: "description",
        content:
          "Da Educação Infantil ao Ensino Médio em Mauá/SP, com sistema de ensino COC. Matrículas 2026 abertas. Conheça o Colégio RS.",
      },
      { property: "og:title", content: "Colégio RS — Educando a futura geração" },
      {
        property: "og:description",
        content:
          "Educação Infantil, Fundamental I e II e Ensino Médio em Mauá/SP, com sistema COC. Matrículas 2026 abertas.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Colégio RS",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Américo Basseto, 265 — Jardim Mauá",
            addressLocality: "Mauá",
            addressRegion: "SP",
            postalCode: "09340-210",
            addressCountry: "BR",
          },
          telephone: "+551145765291",
          email: "secretaria@colegiors.com.br",
        }),
      },
    ],
  }),
  component: Home,
});

const MVV = [
  {
    icon: Apple,
    title: "Nossa Missão",
    body: "Contribuir no desenvolvimento de conhecimentos e estímulo à criatividade e ao desenvolvimento de cada criança.",
    bg: "bg-yellow",
    fg: "text-yellow-foreground",
    shadow: "shadow-yellow",
  },
  {
    icon: GraduationCap,
    title: "Nossa Visão",
    body: "Cada criança é um mundo. Queremos transformar nossos educandos em adultos produtivos e pensantes.",
    bg: "bg-coral",
    fg: "text-coral-foreground",
    shadow: "shadow-coral",
  },
  {
    icon: Puzzle,
    title: "Nossos Valores",
    body: "Ética, comprometimento, profissionalismo, desenvolvimento de pessoas e cidadania.",
    bg: "bg-yellow",
    fg: "text-yellow-foreground",
    shadow: "shadow-yellow",
  },
] as const;

const LEVELS = [
  {
    to: "/ensino/infantil",
    title: "Educação Infantil",
    age: "2 a 5 anos",
    img: lvlInfantil,
    color: "bg-green",
    border: "border-green",
    text: "Acolhimento, ludicidade e descobertas para os primeiros passos no mundo do conhecimento.",
  },
  {
    to: "/ensino/fundamental-i",
    title: "Fundamental I",
    age: "1º ao 5º ano",
    img: lvlFund1,
    color: "bg-orange",
    border: "border-orange",
    text: "Alfabetização sólida, raciocínio lógico e protagonismo do aluno em sala de aula.",
  },
  {
    to: "/ensino/fundamental-ii",
    title: "Fundamental II",
    age: "6º ao 9º ano",
    img: lvlFund2,
    color: "bg-coral",
    border: "border-coral",
    text: "Aprofundamento das áreas do conhecimento e construção da autonomia.",
  },
  {
    to: "/ensino/medio",
    title: "Ensino Médio",
    age: "1ª a 3ª série",
    img: lvlMedio,
    color: "bg-sky",
    border: "border-sky",
    text: "Preparação ENEM, projeto de vida e os melhores resultados em vestibulares.",
  },
] as const;

const COC_FEATURES = [
  { icon: BookOpen, label: "Material Didático Premium" },
  { icon: Cpu, label: "Plataforma Digital" },
  { icon: ClipboardCheck, label: "Avaliações Nacionais" },
  { icon: Trophy, label: "Preparação ENEM" },
];

const TESTIMONIALS = [
  {
    name: "Mariana Souza",
    role: "Mãe do João, 5º ano",
    text: "O acolhimento que meu filho recebe no Colégio RS faz toda diferença. Cresce feliz e aprendendo de verdade.",
  },
  {
    name: "Carlos Henrique",
    role: "Pai da Beatriz, 9º ano",
    text: "A parceria com o COC é nítida. Excelente material e professores muito preparados. Recomendo de olhos fechados.",
  },
  {
    name: "Ana Paula Lima",
    role: "Ex-aluna, hoje na USP",
    text: "Tudo o que sou hoje começou no RS. A base que recebi me levou direto à universidade dos meus sonhos.",
  },
];

const NEWS = [
  {
    cat: "Eventos",
    color: "bg-coral text-coral-foreground",
    date: "12 Mar 2026",
    title: "Festa da Família 2026: uma manhã para celebrar juntos",
    img: spCourt,
  },
  {
    cat: "Pedagógico",
    color: "bg-green text-green-foreground",
    date: "28 Fev 2026",
    title: "Olimpíada de Matemática: Colégio RS leva 7 medalhas",
    img: spClass,
  },
  {
    cat: "COC",
    color: "bg-sky text-sky-foreground",
    date: "10 Fev 2026",
    title: "Novo simulado nacional COC reforça preparação para o ENEM",
    img: spLab,
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroFacade}
            alt="Fachada do Colégio RS em Mauá/SP"
            className="h-full w-full object-cover animate-ken-burns"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/85 via-primary/55 to-primary/10" />
        </div>
        <DecorCircles />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 md:px-10">
          <div className="max-w-2xl text-white animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-foreground shadow-orange animate-pulse-soft">
              <Sparkles className="h-3.5 w-3.5" /> Matrículas 2026 abertas
            </span>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] md:text-7xl text-balance">
              Educando a <span className="text-yellow">futura geração</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85 md:text-xl">
              Da Educação Infantil ao Ensino Médio em <strong>Mauá – SP</strong>, com o sistema de ensino <strong>COC</strong>.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/5511947305935?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20o%20Col%C3%A9gio%20RS."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 font-bold text-orange-foreground shadow-orange transition-transform hover:scale-[1.04]"
              >
                <MessageCircle className="h-4 w-4" /> Fale conosco
              </a>
              <Link
                to="/a-escola"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-primary"
              >
                Conheça a escola <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* rainbow stripe */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 gradient-rainbow" />
      </section>

      {/* MVV */}
      <section className="relative bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange">Quem somos</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold text-primary md:text-5xl">
              Missão, Visão e Valores
            </h2>
            <RainbowDivider className="mt-5" />
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
            {MVV.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.title}
                  className={`group relative rounded-3xl ${m.bg} ${m.fg} ${m.shadow} px-7 pt-16 pb-8 text-center transition-transform duration-300 hover:-translate-y-2`}
                >
                  <div className="absolute -top-9 left-1/2 -translate-x-1/2 grid h-16 w-16 place-items-center rounded-full bg-white text-primary shadow-soft transition-transform duration-300 group-hover:rotate-[10deg] group-hover:scale-110">
                    <Icon className="h-7 w-7" strokeWidth={2.2} />
                  </div>
                  <h3 className="font-display text-2xl font-bold">{m.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed opacity-90">{m.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEVELS */}
      <section className="bg-muted py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col items-center text-center md:flex-row md:items-end md:justify-between md:text-left">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-coral">Nossa proposta</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold text-primary md:text-5xl">
                Níveis de ensino
              </h2>
            </div>
            <p className="mt-4 max-w-md text-muted-foreground md:mt-0">
              Um projeto pedagógico contínuo, do primeiro abraço aos primeiros passos na universidade.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {LEVELS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`group relative overflow-hidden rounded-3xl bg-card border-t-[6px] ${l.border} shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-orange`}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={l.img}
                    alt={l.title}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3">
                    <span className={`inline-block h-3 w-3 rounded-full ${l.color}`} />
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      {l.age}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold text-primary">{l.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-orange">
                    Saiba mais <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COC */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green/10 via-background to-sky/10 py-24 md:py-32">
        <span className="pointer-events-none absolute right-[-4%] top-1/2 -translate-y-1/2 font-display text-[18rem] font-black text-green/8 leading-none select-none" aria-hidden>
          COC
        </span>
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-green">Parceria</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold text-primary md:text-5xl">
              Sistema de ensino <span className="text-green">COC</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Mais de 50 anos liderando a educação brasileira, agora dentro do Colégio RS — material de referência, plataforma digital e simulados que preparam para os melhores vestibulares do país.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COC_FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.label} className="rounded-2xl bg-card p-6 shadow-soft">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-green text-green-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="mt-4 font-display text-lg font-bold text-primary">{f.label}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10">
            <Link
              to="/coc"
              className="inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 font-bold text-green-foreground shadow-green transition-transform hover:scale-[1.04]"
            >
              Acesse o portal COC <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ACADESC */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-sky/20 p-8 md:p-12">
            <div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-sky/30 blur-2xl" aria-hidden />
            <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-sky">
                  Apoio aos Pais
                </p>
                <h3 className="mt-2 font-display text-3xl font-extrabold text-primary md:text-4xl">
                  ACADESC — Acompanhe a vida escolar do seu filho
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Notas, frequência, comunicados, calendário e financeiro em um só lugar.
                </p>
              </div>
              <a
                href="https://apoioaospais.com.br/login.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 font-bold text-orange-foreground shadow-orange transition-transform hover:scale-[1.04]"
              >
                Acesse o portal <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EMOTIONAL QUOTE */}
      <section className="relative bg-background py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <div className="flex items-center justify-center gap-6">
            <Heart className="h-10 w-10 fill-coral text-coral" />
            <Quote className="h-10 w-10 text-yellow" />
          </div>
          <p className="mt-8 font-hand text-3xl leading-relaxed text-primary md:text-5xl">
            "Seu filho não fica na escola a vida toda…
            <br />
            mas uma boa escola fica na vida dele para sempre."
          </p>
          <div className="mt-10 inline-flex items-baseline gap-1 font-display text-6xl font-black md:text-7xl">
            <span className="text-yellow">2</span>
            <span className="text-coral">0</span>
            <span className="text-green">2</span>
            <span className="text-sky">6</span>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-muted py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky">Espaço</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold text-primary md:text-5xl">
              Conheça nossa estrutura
            </h2>
            <RainbowDivider className="mt-5" />
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {[
              { img: spLib, label: "Quadra" },
              { img: spClass, label: "Salas modernas" },
              { img: spLab, label: "Laboratório" },
              { img: spPlay, label: "Parque" },
              { img: spCaf, label: "Refeitório" },
              { img: spLeitura, label: "Sala de leitura" },
              { img: spRobotica, label: "Robótica" },
            ].map((g) => (
              <figure
                key={g.label}
                className="group relative overflow-hidden rounded-3xl shadow-soft"
              >
                <img
                  src={g.img}
                  alt={g.label}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-deep/90 to-transparent p-5">
                  <span className="font-display text-lg font-bold text-white">{g.label}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-coral">Famílias RS</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold text-primary md:text-5xl">
              O que dizem sobre nós
            </h2>
            <RainbowDivider className="mt-5" />
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <article key={t.name} className="rounded-3xl bg-card p-7 shadow-soft border border-border">
                <div className="flex gap-0.5 text-orange">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 leading-relaxed text-foreground">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-orange font-display text-lg font-bold text-orange-foreground">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-primary">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="bg-muted py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-green">Atualidades</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold text-primary md:text-5xl">
                Notícias & eventos
              </h2>
            </div>
            <Link to="/noticias" className="hidden md:inline-flex items-center gap-1.5 font-bold text-orange">
              Ver todas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {NEWS.map((n) => (
              <Link
                key={n.title}
                to="/noticias"
                className="group overflow-hidden rounded-3xl bg-card shadow-soft transition-transform hover:-translate-y-1"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={n.img}
                    alt={n.title}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${n.color}`}>
                      {n.cat}
                    </span>
                    <span className="text-xs text-muted-foreground">{n.date}</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold text-primary leading-snug">
                    {n.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-orange">
                    Ler mais <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-primary-deep py-24 md:py-32 text-white">
        <DecorCircles />
        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
          <h2 className="font-display text-4xl font-extrabold leading-tight md:text-6xl text-balance">
            Faça parte da família <span className="text-orange">Colégio RS</span>
          </h2>
          <p className="mt-5 text-lg text-white/80">
            Matrículas abertas para 2026. Vagas remanescentes disponíveis.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/5511947305935?text=Ol%C3%A1!%20Gostaria%20de%20iniciar%20a%20matr%C3%ADcula%20no%20Col%C3%A9gio%20RS."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-orange px-8 py-4 font-bold text-orange-foreground shadow-orange transition-transform hover:scale-[1.04]"
            >
              <MessageCircle className="h-4 w-4" /> Iniciar matrícula
            </a>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="bg-background pt-0">
        <div className="mx-auto max-w-7xl px-6 pt-16 md:px-10">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange">Onde estamos</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-primary md:text-4xl">
              Rua Américo Basseto, 265 — Mauá/SP
            </h2>
          </div>
        </div>
        <div className="mt-10 aspect-[21/9] w-full overflow-hidden">
          <iframe
            title="Mapa do Colégio RS"
            src="https://www.google.com/maps?q=Rua+Am%C3%A9rico+Basseto+265+Jardim+Mau%C3%A1+Mau%C3%A1+SP&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* TRABALHE CONOSCO */}
      <section id="trabalhe-conosco" className="bg-muted/40 py-16 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Briefcase className="h-4 w-4 text-primary" />
            <span className="uppercase tracking-[0.2em]">Oportunidades</span>
          </div>
          <CurriculoForm />
        </div>
      </section>
    </>
  );
}
