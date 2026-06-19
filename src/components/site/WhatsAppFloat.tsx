import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5511947305935?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Col%C3%A9gio%20RS."
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-green text-white shadow-green animate-pulse-soft hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
