# Colégio RS — Versão HTML/CSS/JS/PHP

Versão paralela do site em PHP estático, pronta para hospedagem compartilhada (Locaweb etc.) com PHP 7.4+. A versão React/Vite original continua intacta em `src/`.

## Publicar
1. Suba o **conteúdo** desta pasta para `public_html/` (ou `www/`) via FTP.
2. Garanta que `uploads/` exista com permissão de escrita (755).
3. Acesse o domínio — o `.htaccess` cuida do resto.

## Estrutura
- `index.php`, `a-escola.php`, `espaco.php`, `coc.php`, `apoio-aos-pais.php`, `noticias.php`, `contato.php`, `matricula.php`
- `ensino/infantil.php`, `fundamental-i.php`, `fundamental-ii.php`, `medio.php`
- `includes/` — head, header, footer, hero (PHP partials)
- `assets/` — css, js, img
- `enviar-contato.php`, `enviar-matricula.php` — processam formulários via `mail()`

Tailwind via CDN com tokens custom para reproduzir o design da versão React.
