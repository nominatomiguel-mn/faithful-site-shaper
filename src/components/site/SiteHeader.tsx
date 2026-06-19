import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, ChevronDown, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const NAV = [
  { to: "/a-escola", label: "A Escola" },
  { to: "/espaco", label: "Espaço" },
  { to: "/coc", label: "COC" },
  { to: "/apoio-aos-pais", label: "Apoio aos Pais" },
  { to: "/noticias", label: "Notícias" },
  { to: "/contato", label: "Contato" },
] as const;

const ENSINO = [
  { to: "/ensino/infantil", label: "Educação Infantil" },
  { to: "/ensino/fundamental-i", label: "Fundamental I" },
  { to: "/ensino/fundamental-ii", label: "Fundamental II" },
  { to: "/ensino/medio", label: "Ensino Médio" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg shadow-soft border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8 md:py-4">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1 text-sm font-semibold text-primary">
          <Link
            to="/a-escola"
            className="rounded-full px-3 py-2 transition-colors hover:bg-muted"
            activeProps={{ className: "bg-muted" }}
          >
            A Escola
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-1 rounded-full px-3 py-2 transition-colors hover:bg-muted focus:outline-none">
              Ensino <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="rounded-2xl">
              {ENSINO.map((e) => (
                <DropdownMenuItem key={e.to} asChild>
                  <Link to={e.to} className="cursor-pointer">
                    {e.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {NAV.slice(1).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-3 py-2 transition-colors hover:bg-muted"
              activeProps={{ className: "bg-muted" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href="/#trabalhe-conosco"
            className="rounded-full px-3 py-2 transition-colors hover:bg-muted"
          >
            Trabalhe conosco
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/5511947305935?text=Ol%C3%A1!%20Gostaria%20de%20iniciar%20a%20matr%C3%ADcula%20no%20Col%C3%A9gio%20RS."
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-orange px-5 py-2.5 text-sm font-bold text-orange-foreground shadow-orange transition-transform hover:scale-[1.03]"
          >
            <MessageCircle className="h-4 w-4 mr-1.5" /> Matricule-se 2026
          </a>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden grid h-11 w-11 place-items-center rounded-full bg-muted text-primary"
                aria-label="Abrir menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88%] sm:w-96">
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-1">
                <Link
                  to="/a-escola"
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 font-semibold text-primary hover:bg-muted"
                >
                  A Escola
                </Link>
                <p className="px-4 pt-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Ensino
                </p>
                {ENSINO.map((e) => (
                  <Link
                    key={e.to}
                    to={e.to}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-foreground hover:bg-muted"
                  >
                    {e.label}
                  </Link>
                ))}
                <div className="my-2 h-px bg-border" />
                {NAV.slice(1).map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 font-semibold text-primary hover:bg-muted"
                  >
                    {n.label}
                  </Link>
                ))}
                <a
                  href="/#trabalhe-conosco"
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 font-semibold text-primary hover:bg-muted"
                >
                  Trabalhe conosco
                </a>
                <a
                  href="https://wa.me/5511947305935?text=Ol%C3%A1!%20Gostaria%20de%20iniciar%20a%20matr%C3%ADcula%20no%20Col%C3%A9gio%20RS."
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-orange px-5 py-3 font-bold text-orange-foreground shadow-orange"
                >
                  <MessageCircle className="h-4 w-4 mr-1.5" /> Matricule-se 2026
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
