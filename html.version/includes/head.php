<?php
if(!isset($PAGE_TITLE)) $PAGE_TITLE = 'Colégio RS — Educando a futura geração em Mauá/SP';
if(!isset($PAGE_DESC))  $PAGE_DESC  = 'Colégio RS — Educação Infantil ao Ensino Médio em Mauá/SP, com sistema de ensino COC.';
$BASE = '/'; // ajuste se hospedar em subpasta, ex: '/colegio-rs/'
?>
<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title><?= htmlspecialchars($PAGE_TITLE) ?></title>
<meta name="description" content="<?= htmlspecialchars($PAGE_DESC) ?>">
<meta property="og:title" content="<?= htmlspecialchars($PAGE_TITLE) ?>">
<meta property="og:description" content="<?= htmlspecialchars($PAGE_DESC) ?>">
<meta property="og:type" content="website">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Caveat:wght@500;700&display=swap">
<script src="https://cdn.tailwindcss.com"></script>
<script>
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#1B2A5E', deep: '#141F44', foreground: '#ffffff' },
        'primary-deep': '#141F44',
        'primary-foreground': '#ffffff',
        orange: '#F28C28', 'orange-foreground': '#ffffff',
        coral: '#E94B4B', 'coral-foreground': '#ffffff',
        yellow: '#F4C430', 'yellow-foreground': '#141F44',
        green: '#5BB85B', 'green-foreground': '#ffffff',
        sky: '#3BA9D6', 'sky-foreground': '#ffffff',
        background: '#ffffff',
        foreground: '#1B2A5E',
        card: '#ffffff',
        'card-foreground': '#1B2A5E',
        muted: '#F8F9FB',
        'muted-foreground': '#5A6478',
        border: '#E5E7EB',
        destructive: '#dc2626'
      },
      fontFamily: {
        display: ['"Playfair Display"','Georgia','serif'],
        sans: ['"Plus Jakarta Sans"','Inter','system-ui','sans-serif'],
        hand: ['Caveat','cursive']
      }
    }
  }
};
</script>
<link rel="stylesheet" href="<?= $BASE ?>assets/css/style.css">
</head>
<body class="bg-background text-foreground">
