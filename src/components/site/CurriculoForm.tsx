import { useState, FormEvent, ChangeEvent } from "react";
import { Paperclip, Send, FileText } from "lucide-react";
import { z } from "zod";

const EMAIL = "secretaria@colegiors.com.br";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(80),
  email: z.string().trim().email("E-mail inválido").max(120),
  telefone: z.string().trim().min(8, "Telefone inválido").max(20),
  mensagem: z.string().trim().max(400).optional(),
});

export function CurriculoForm() {
  const [file, setFile] = useState<File | null>(null);
  const [erro, setErro] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  function onFile(e: ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0] ?? null;
    if (f && f.size > 5 * 1024 * 1024) {
      setErro("Arquivo deve ter no máximo 5 MB.");
      setFile(null);
      return;
    }
    setErro(null);
    setFile(f);
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro(null);
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      nome: String(fd.get("nome") ?? ""),
      email: String(fd.get("email") ?? ""),
      telefone: String(fd.get("telefone") ?? ""),
      mensagem: String(fd.get("mensagem") ?? ""),
    });
    if (!parsed.success) {
      setErro(parsed.error.issues[0]?.message ?? "Dados inválidos");
      return;
    }
    setSending(true);
    const { nome, email, telefone, mensagem } = parsed.data;
    const assunto = `Currículo — ${nome}`;
    const corpo =
      `Olá! Gostaria de enviar meu currículo.\n\n` +
      `Nome: ${nome}\n` +
      `E-mail: ${email}\n` +
      `Telefone: ${telefone}\n` +
      (mensagem ? `\nMensagem: ${mensagem}\n` : "") +
      (file ? `\nArquivo: ${file.name} (anexe este arquivo ao e-mail antes de enviar)` : "\nLembre-se de anexar o currículo a este e-mail.");
    const url = `mailto:${EMAIL}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
    window.location.href = url;
    setTimeout(() => setSending(false), 800);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8"
      aria-label="Envio de currículo"
    >
      <div className="mb-5 flex items-center gap-2 text-primary">
        <FileText className="h-5 w-5" />
        <h3 className="font-display text-lg font-bold">Trabalhe conosco</h3>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-foreground">Nome</span>
          <input
            name="nome"
            required
            maxLength={80}
            className="w-full rounded-lg border border-input bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-foreground">E-mail</span>
          <input
            name="email"
            type="email"
            required
            maxLength={120}
            className="w-full rounded-lg border border-input bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40"
          />
        </label>
        <label className="block text-sm md:col-span-2">
          <span className="mb-1 block font-medium text-foreground">Telefone</span>
          <input
            name="telefone"
            type="tel"
            required
            maxLength={20}
            className="w-full rounded-lg border border-input bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40"
          />
        </label>
        <label className="block text-sm md:col-span-2">
          <span className="mb-1 block font-medium text-foreground">Mensagem (opcional)</span>
          <textarea
            name="mensagem"
            rows={3}
            maxLength={400}
            className="w-full rounded-lg border border-input bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40"
          />
        </label>
        <label className="md:col-span-2 inline-flex cursor-pointer items-center gap-2 rounded-lg border border-dashed border-border bg-muted/40 px-3 py-2 text-sm text-muted-foreground hover:bg-muted">
          <Paperclip className="h-4 w-4" />
          <span>{file ? file.name : "Anexar currículo (PDF/DOC, até 5 MB)"}</span>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={onFile}
            className="hidden"
          />
        </label>
      </div>
      {erro && <p className="mt-3 text-sm text-destructive">{erro}</p>}
      <p className="mt-3 text-xs text-muted-foreground">
        Ao enviar, seu cliente de e-mail abrirá com a mensagem pronta para {EMAIL}. Anexe o currículo antes de enviar.
      </p>
      <button
        type="submit"
        disabled={sending}
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03] disabled:opacity-60"
      >
        <Send className="h-4 w-4" /> {sending ? "Enviando..." : "Enviar currículo"}
      </button>
    </form>
  );
}
