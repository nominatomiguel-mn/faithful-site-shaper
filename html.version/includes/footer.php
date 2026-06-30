</main>
<footer class="relative overflow-hidden bg-primary-deep text-white">
  <div class="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-4">
    <div>
      <span class="font-display text-2xl font-extrabold text-white">Colégio <span class="text-orange">RS</span></span>
      <p class="mt-5 max-w-xs text-sm text-white/75">Educando a futura geração com tradição, cuidado e excelência acadêmica.</p>
    </div>
    <div>
      <h3 class="font-display text-sm font-bold uppercase tracking-[0.2em] text-yellow">Endereço</h3>
      <p class="mt-4 text-sm text-white/85">Rua Américo Basseto, 265<br>Jardim Mauá – Mauá/SP<br>CEP 09340-210</p>
    </div>
    <div>
      <h3 class="font-display text-sm font-bold uppercase tracking-[0.2em] text-yellow">Contato</h3>
      <ul class="mt-4 space-y-2 text-sm text-white/85">
        <li><a href="tel:+551145765291" class="hover:text-orange">(11) 4576-5291</a></li>
        <li><a href="tel:+5511947305935" class="hover:text-orange">(11) 94730-5935</a></li>
        <li><a href="mailto:secretaria@colegiors.com.br" class="hover:text-orange">secretaria@colegiors.com.br</a></li>
      </ul>
    </div>
    <div>
      <h3 class="font-display text-sm font-bold uppercase tracking-[0.2em] text-yellow">Links</h3>
      <ul class="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-white/80">
        <li><a href="/a-escola.php" class="hover:text-orange">A Escola</a></li>
        <li><a href="/espaco.php" class="hover:text-orange">Espaço</a></li>
        <li><a href="/coc.php" class="hover:text-orange">COC</a></li>
        <li><a href="/apoio-aos-pais.php" class="hover:text-orange">Apoio aos Pais</a></li>
        <li><a href="/noticias.php" class="hover:text-orange">Notícias</a></li>
        <li><a href="/contato.php" class="hover:text-orange">Contato</a></li>
        <li><a href="/matricula.php" class="hover:text-orange">Matrícula</a></li>
      </ul>
    </div>
  </div>
  <div class="border-t border-white/10">
    <div class="mx-auto max-w-7xl px-6 py-6 text-xs text-white/60 md:px-10 text-center md:text-left">© <?= date('Y') ?> Colégio RS — Todos os direitos reservados.</div>
  </div>
</footer>
<a href="https://wa.me/5511947305935?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Col%C3%A9gio%20RS." target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp" class="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-green text-white shadow-green animate-pulse-soft hover:scale-110 transition-transform">
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
</a>
<div id="lightbox" class="lightbox" role="dialog" aria-modal="true">
  <div class="lightbox-content" onclick="event.stopPropagation()">
    <div class="mb-4 flex items-center justify-between">
      <h2 id="lightbox-title" class="font-display text-2xl font-bold text-primary"></h2>
      <button data-lightbox-close class="rounded-full p-2 hover:bg-muted">✕</button>
    </div>
    <div id="lightbox-grid" class="grid gap-4 sm:grid-cols-2"></div>
  </div>
</div>
<script src="/assets/js/main.js"></script>
</body>
</html>
