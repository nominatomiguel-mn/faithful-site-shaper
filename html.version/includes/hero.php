<?php
function render_page_hero($title, $eyebrow='', $subtitle='', $tone='primary'){
  $tones = [
    'primary' => 'from-primary via-primary to-primary-deep',
    'orange'  => 'from-orange to-coral',
    'green'   => 'from-green to-sky',
    'sky'     => 'from-sky to-primary',
    'coral'   => 'from-coral to-orange',
  ];
  $bg = $tones[$tone] ?? $tones['primary'];
  ?>
  <section class="relative overflow-hidden bg-gradient-to-br <?= $bg ?> text-white pt-32 pb-20 md:pt-40 md:pb-28">
    <div class="relative mx-auto max-w-5xl px-6 text-center md:px-10">
      <?php if($eyebrow): ?><p class="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur"><?= htmlspecialchars($eyebrow) ?></p><?php endif; ?>
      <h1 class="font-display text-4xl font-extrabold leading-tight md:text-6xl text-balance"><?= htmlspecialchars($title) ?></h1>
      <?php if($subtitle): ?><p class="mx-auto mt-5 max-w-2xl text-lg text-white/85"><?= htmlspecialchars($subtitle) ?></p><?php endif; ?>
      <div class="mx-auto mt-8 h-1.5 w-32 rounded-full gradient-rainbow"></div>
    </div>
  </section>
<?php }
?>
