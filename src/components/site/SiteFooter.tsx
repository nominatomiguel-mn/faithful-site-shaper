import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, Phone, Mail, Heart } from "lucide-react";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-primary-deep text-white">
      {/* decorative circles */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-orange/15 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-20 right-10 h-80 w-80 rounded-full bg-sky/15 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-4">
        <div>
          <div className="rounded-2xl bg-white/5 p-4 backdrop-blur-sm w-fit">
            <Logo className="[&_span]:!text-white [&_.text-muted-foreground]:!text-white/60 [&_.text-primary]:!text-white" />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/75">
            Educando a futura geração com tradição, cuidado e excelência acadêmica.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full bg-sky text-white transition-transform hover:scale-110"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full bg-coral text-white transition-transform hover:scale-110"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-yellow">
            Endereço
          </h3>
          <p className="mt-4 flex items-start gap-3 text-sm text-white/85">
            <MapPin className="mt-0.5 h-4 w-4 flex-none text-orange" />
            <span>
              Rua Américo Basseto, 265
              <br />
              Jardim Mauá – Mauá/SP
              <br />
              CEP 09340-210
            </span>
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-yellow">
            Contato
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/85">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-green" />
              <a href="tel:+551145765291" className="hover:text-orange">
                (11) 4576-5291
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-green" />
              <a href="tel:+5511947305935" className="hover:text-orange">
                (11) 94730-5935
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-coral" />
              <a href="mailto:secretaria@colegiors.com.br" className="hover:text-orange">
                secretaria@colegiors.com.br
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-yellow">
            Links rápidos
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-white/80">
            {[
              ["A Escola", "/a-escola"],
              ["Espaço", "/espaco"],
              ["COC", "/coc"],
              ["Apoio aos Pais", "/apoio-aos-pais"],
              ["Notícias", "/noticias"],
              ["Contato", "/contato"],
            ].map(([l, t]) => (
              <li key={t}>
                <Link to={t as string} className="hover:text-orange">
                  {l}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/5511947305935?text=Ol%C3%A1!%20Gostaria%20de%20iniciar%20a%20matr%C3%ADcula%20no%20Col%C3%A9gio%20RS."
                target="_blank"
                rel="noreferrer"
                className="hover:text-orange"
              >
                Matrícula
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-white/60 md:flex-row md:px-10">
          <p>© {new Date().getFullYear()} Colégio RS — Todos os direitos reservados.</p>
          <p className="inline-flex items-center gap-1.5">
            Desenvolvido com <Heart className="h-3.5 w-3.5 fill-coral text-coral" /> em Mauá
          </p>
        </div>
      </div>
    </footer>
  );
}
