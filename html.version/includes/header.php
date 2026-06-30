<?php
$WA = 'https://wa.me/5511947305935?text=' . rawurlencode('Olá! Gostaria de iniciar a matrícula no Colégio RS.');
$NAV = [
  ['/a-escola.php','A Escola'],
  ['/espaco.php','Espaço'],
  ['/coc.php','COC'],
  ['/apoio-aos-pais.php','Apoio aos Pais'],
  ['/noticias.php','Notícias'],
  ['/contato.php','Contato'],
];
$ENSINO = [
  ['/ensino/infantil.php','Educação Infantil'],
  ['/ensino/fundamental-i.php','Fundamental I'],
  ['/ensino/fundamental-ii.php','Fundamental II'],
  ['/ensino/medio.php','Ensino Médio'],
];
?>
<header id="site-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
  <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8 md:py-4">
    <a href="/" class="flex items-center gap-2">
      <img src="/assets/img/hero-facade.jpg" onerror="this.style.display='none'" alt="" class="hidden">
      <span class="font-display text-2xl font-extrabold text-primary">Colégio <span class="text-orange">RS</span></span>
    </a>
    <nav class="hidden lg:flex items-center gap-1 text-sm font-semibold text-primary">
      <a href="/a-escola.php" class="rounded-full px-3 py-2 hover:bg-muted">A Escola</a>
      <div class="dropdown">
        <button data-dropdown-trigger class="inline-flex items-center gap-1 rounded-full px-3 py-2 hover:bg-muted">Ensino <span aria-hidden>▾</span></button>
        <div class="dropdown-menu">
          <?php foreach($ENSINO as $e): ?><a href="<?= $e[0] ?>"><?= $e[1] ?></a><?php endforeach; ?>
        </div>
      </div>
      <?php foreach(array_slice($NAV,1) as $n): ?>
        <a href="<?= $n[0] ?>" class="rounded-full px-3 py-2 hover:bg-muted"><?= $n[1] ?></a>
      <?php endforeach; ?>
    </nav>
    <div class="flex items-center gap-2">
      <a href="<?= $WA ?>" target="_blank" rel="noreferrer" class="hidden md:inline-flex items-center justify-center rounded-full bg-orange px-5 py-2.5 text-sm font-bold text-white shadow-orange hover:scale-105 transition-transform">Matricule-se 2026</a>
      <button data-mobile-toggle aria-label="Abrir menu" class="lg:hidden grid h-11 w-11 place-items-center rounded-full bg-muted text-primary">☰</button>
    </div>
  </div>
</header>
<div id="mobile-menu" class="mobile-menu">
  <div class="mobile-menu-panel">
    <div class="flex items-center justify-between">
      <span class="font-display text-xl font-extrabold text-primary">Colégio <span class="text-orange">RS</span></span>
      <button data-mobile-toggle aria-label="Fechar" class="rounded-full bg-muted p-2">✕</button>
    </div>
    <div class="mt-6 flex flex-col gap-1">
      <a href="/a-escola.php" class="rounded-2xl px-4 py-3 font-semibold text-primary hover:bg-muted">A Escola</a>
      <p class="px-4 pt-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">Ensino</p>
      <?php foreach($ENSINO as $e): ?><a href="<?= $e[0] ?>" class="rounded-2xl px-4 py-3 text-sm text-foreground hover:bg-muted"><?= $e[1] ?></a><?php endforeach; ?>
      <div class="my-2 h-px bg-border"></div>
      <?php foreach(array_slice($NAV,1) as $n): ?><a href="<?= $n[0] ?>" class="rounded-2xl px-4 py-3 font-semibold text-primary hover:bg-muted"><?= $n[1] ?></a><?php endforeach; ?>
      <a href="<?= $WA ?>" target="_blank" class="mt-4 inline-flex items-center justify-center rounded-full bg-orange px-5 py-3 font-bold text-white shadow-orange">Matricule-se 2026</a>
    </div>
  </div>
</div>
<main class="min-h-screen pt-0">
