// Header scroll
(function(){
  const header = document.getElementById('site-header');
  if(header){
    const onScroll = () => {
      if(window.scrollY > 12){
        header.classList.add('bg-white/85','backdrop-blur-lg','shadow-soft','border-b','border-gray-200');
      } else {
        header.classList.remove('bg-white/85','backdrop-blur-lg','shadow-soft','border-b','border-gray-200');
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {passive:true});
  }

  // Mobile menu
  const mm = document.getElementById('mobile-menu');
  document.querySelectorAll('[data-mobile-toggle]').forEach(b => b.addEventListener('click', () => mm.classList.toggle('open')));
  if(mm) mm.addEventListener('click', e => { if(e.target === mm) mm.classList.remove('open'); });

  // Dropdown
  document.querySelectorAll('.dropdown').forEach(dd => {
    const trigger = dd.querySelector('[data-dropdown-trigger]');
    if(!trigger) return;
    trigger.addEventListener('click', e => { e.stopPropagation(); dd.classList.toggle('open'); });
  });
  document.addEventListener('click', () => document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open')));

  // Lightbox
  const lb = document.getElementById('lightbox');
  const lbContent = document.getElementById('lightbox-grid');
  const lbTitle = document.getElementById('lightbox-title');
  document.querySelectorAll('[data-gallery]').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('data-title') || '';
      const imgs = JSON.parse(btn.getAttribute('data-gallery'));
      lbTitle.textContent = title;
      lbContent.innerHTML = imgs.map(src => `<img src="${src}" alt="${title}" class="aspect-[4/3] w-full rounded-2xl object-cover" loading="lazy">`).join('');
      lb.classList.add('open');
    });
  });
  if(lb){
    lb.addEventListener('click', e => { if(e.target === lb || e.target.hasAttribute('data-lightbox-close')) lb.classList.remove('open'); });
    document.addEventListener('keydown', e => { if(e.key === 'Escape') lb.classList.remove('open'); });
  }

  // Scroll reveal
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('main section').forEach(s => { if(!s.hasAttribute('data-reveal')) s.setAttribute('data-reveal',''); });
  if(reduce){
    document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ e.target.classList.add('is-visible'); io.unobserve(e.target); } }), {threshold:.12, rootMargin:'0px 0px -8% 0px'});
    document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));
  }
})();
