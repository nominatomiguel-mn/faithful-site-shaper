import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/ensino")({
  head: () => ({
    meta: [
      { title: "Ensino — Colégio RS" },
      { name: "description", content: "Educação Infantil, Fundamental I e II e Ensino Médio no Colégio RS." },
      { property: "og:title", content: "Ensino — Colégio RS" },
      { property: "og:description", content: "Conheça nossos níveis de ensino." },
    ],
  }),
  component: Layout,
});

const TABS = [
  { to: "/ensino/infantil", label: "Infantil" },
  { to: "/ensino/fundamental-i", label: "Fundamental I" },
  { to: "/ensino/fundamental-ii", label: "Fundamental II" },
  { to: "/ensino/medio", label: "Médio" },
] as const;

function Layout() {
  const loc = useLocation();
  const onIndex = loc.pathname === "/ensino" || loc.pathname === "/ensino/";

  if (onIndex) {
    return (
      <>
        <PageHero
          eyebrow="Ensino"
          title="Um caminho contínuo, do berçário ao vestibular"
          subtitle="Escolha um nível abaixo para conhecer a proposta pedagógica."
        />
        <section className="bg-background py-20">
          <div className="mx-auto grid max-w-5xl gap-4 px-6 md:grid-cols-2 md:px-10">
            {TABS.map((t) => (
              <Link
                key={t.to}
                to={t.to}
                className="rounded-3xl bg-muted p-8 transition-colors hover:bg-orange hover:text-orange-foreground"
              >
                <p className="font-display text-2xl font-bold">{t.label}</p>
                <p className="mt-2 text-sm opacity-80">Saiba mais →</p>
              </Link>
            ))}
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <div className="sticky top-[68px] z-30 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-3 scrollbar-none">
          {TABS.map((t) => (
            <Link
              key={t.to}
              to={t.to}
              className="flex-none rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted"
              activeProps={{ className: "bg-primary text-primary-foreground" }}
            >
              {t.label}
            </Link>
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
}
