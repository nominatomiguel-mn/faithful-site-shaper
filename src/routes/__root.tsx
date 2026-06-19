import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect } from "react";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Colégio RS — Educando a futura geração em Mauá/SP" },
      {
        name: "description",
        content:
          "Colégio RS — Educação Infantil ao Ensino Médio em Mauá/SP, com sistema de ensino COC. Tradição, cuidado e excelência acadêmica.",
      },
      { name: "author", content: "Colégio RS" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Colégio RS — Educando a futura geração em Mauá/SP" },
      { name: "twitter:title", content: "Colégio RS — Educando a futura geração em Mauá/SP" },
      { name: "description", content: "RS Inspire Hub is a modern, professional website for Colégio RS, offering a welcoming online presence for prospective students and parents." },
      { property: "og:description", content: "RS Inspire Hub is a modern, professional website for Colégio RS, offering a welcoming online presence for prospective students and parents." },
      { name: "twitter:description", content: "RS Inspire Hub is a modern, professional website for Colégio RS, offering a welcoming online presence for prospective students and parents." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b8802a07-6f7b-4500-af26-6574f7d4083d/id-preview-5a6a9e66--9650fa24-b226-476c-a257-991abe1dcc55.lovable.app-1778519534888.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b8802a07-6f7b-4500-af26-6574f7d4083d/id-preview-5a6a9e66--9650fa24-b226-476c-a257-991abe1dcc55.lovable.app-1778519534888.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Caveat:wght@500;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const tag = () => {
      document
        .querySelectorAll<HTMLElement>("main section:not([data-reveal])")
        .forEach((el) => el.setAttribute("data-reveal", ""));
      // Stagger reveal for common grid children inside any tagged section
      document
        .querySelectorAll<HTMLElement>(
          "main section [data-stagger] > *:not([data-reveal])",
        )
        .forEach((el, i) => {
          el.setAttribute("data-reveal", "");
          el.setAttribute("data-delay", String((i % 6) + 1));
        });
      // Auto-stagger direct children of grids/flex rows of cards
      document
        .querySelectorAll<HTMLElement>(
          "main section .grid > .rounded-3xl:not([data-reveal]), main section .grid > article:not([data-reveal]), main section .grid > .card:not([data-reveal])",
        )
        .forEach((el, i) => {
          el.setAttribute("data-reveal", "");
          el.setAttribute("data-delay", String((i % 6) + 1));
        });
    };
    tag();
    if (reduce) {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => io.observe(el));
    const mo = new MutationObserver(() => {
      tag();
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)")
        .forEach((el) => io.observe(el));
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </QueryClientProvider>
  );
}
