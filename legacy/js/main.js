(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var PREVIEW_TIMEOUT = 4500;
  var nav = document.querySelector('.site-nav');
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');
  var overlay = document.getElementById('mobileOverlay');

  function setMenu(open) {
    if (!hamburger || !mobileMenu || !overlay) return;
    hamburger.classList.toggle('active', open);
    mobileMenu.classList.toggle('open', open);
    overlay.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (!document.getElementById('contactModal') || !document.getElementById('contactModal').classList.contains('open')) {
      document.body.style.overflow = open ? 'hidden' : '';
    }
  }

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      setMenu(!mobileMenu.classList.contains('open'));
    });
  }
  if (overlay) overlay.addEventListener('click', function () { setMenu(false); });
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a, button').forEach(function (el) {
      el.addEventListener('click', function () { setMenu(false); });
    });
  }

  window.addEventListener('scroll', function () {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Scroll reveal
  var reveals = document.querySelectorAll('.reveal');
  if (reduceMotion) {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  } else if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Work filters
  document.querySelectorAll('.filter-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');
      document.querySelectorAll('.filter-btn').forEach(function (b) {
        b.classList.toggle('active', b === btn);
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });
      document.querySelectorAll('.work-card').forEach(function (card) {
        var type = card.getAttribute('data-type');
        card.classList.toggle('hidden', !(filter === 'all' || type === filter));
      });
    });
  });

  function scalePreviews(root) {
    (root || document).querySelectorAll('.live-preview').forEach(function (box) {
      var inner = box.querySelector('.live-preview-inner');
      if (!inner) return;
      var w = box.clientWidth || box.offsetWidth;
      if (!w) return;
      box.style.setProperty('--preview-scale', String(w / 1280));
    });
  }
  scalePreviews();
  window.addEventListener('resize', function () { scalePreviews(); }, { passive: true });

  /* ——— Live preview with screenshot fallback ——— */
  function setPreviewState(box, state) {
    box.classList.remove('is-loading', 'is-live', 'is-fallback');
    if (state) box.classList.add(state);
  }

  function showFallback(box) {
    setPreviewState(box, 'is-fallback');
    if (box._previewTimer) {
      clearTimeout(box._previewTimer);
      box._previewTimer = null;
    }
  }

  function showLive(box) {
    setPreviewState(box, 'is-live');
    if (box._previewTimer) {
      clearTimeout(box._previewTimer);
      box._previewTimer = null;
    }
    scalePreviews(box);
  }

  function loadPreview(box) {
    if (!box || box._previewArmed) return;
    box._previewArmed = true;

    var frame = box.querySelector('iframe[data-src], iframe[src]');
    var liveUrl = box.getAttribute('data-live') || (frame && (frame.getAttribute('data-src') || frame.getAttribute('src')));

    if (!frame) {
      showFallback(box);
      return;
    }

    setPreviewState(box, 'is-loading');

    box._previewTimer = setTimeout(function () {
      if (!box.classList.contains('is-live')) showFallback(box);
    }, PREVIEW_TIMEOUT);

    function onLoad() {
      // Brief settle — if still blocked many browsers still fire load on empty frame.
      // Prefer live when load fires; user can use Open live from overlay on work cards.
      showLive(box);
    }

    function onError() {
      showFallback(box);
    }

    frame.addEventListener('load', onLoad, { once: true });
    frame.addEventListener('error', onError, { once: true });

    var src = frame.getAttribute('data-src') || frame.getAttribute('src');
    if (src && frame.getAttribute('src') !== src) {
      frame.setAttribute('src', src);
    } else if (!frame.getAttribute('src') && src) {
      frame.setAttribute('src', src);
    } else if (frame.getAttribute('src')) {
      // already has src — wait for load or timeout
    } else {
      showFallback(box);
    }

    // Ensure CTA links use live URL
    if (liveUrl) {
      box.querySelectorAll('.preview-shot-cta a, a.preview-open-live').forEach(function (a) {
        a.setAttribute('href', liveUrl);
      });
    }
  }

  function shouldAutoLoad(box) {
    var slide = box.closest('.product-slide');
    if (slide && !slide.classList.contains('active')) return false;
    return true;
  }

  // Contact modal
  var modal = document.getElementById('contactModal');
  var lastFocus = null;

  function openContact() {
    if (!modal) return;
    lastFocus = document.activeElement;
    setMenu(false);
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    var closeBtn = modal.querySelector('.contact-modal-close');
    if (closeBtn) closeBtn.focus();
  }

  function closeContact() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  document.querySelectorAll('[data-open-contact]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      openContact();
    });
  });

  if (modal) {
    var backdrop = modal.querySelector('.contact-modal-backdrop');
    var closeBtn = modal.querySelector('.contact-modal-close');
    if (backdrop) backdrop.addEventListener('click', closeContact);
    if (closeBtn) closeBtn.addEventListener('click', closeContact);
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (modal && modal.classList.contains('open')) closeContact();
      else setMenu(false);
    }
  });

  // Product stage
  var stage = document.getElementById('productStage');
  var tabs = stage ? stage.querySelectorAll('.product-tab') : [];
  var slides = stage ? stage.querySelectorAll('.product-slide') : [];
  var titleEl = document.getElementById('productTitle');
  var descEl = document.getElementById('productDesc');
  var linkEl = document.getElementById('productLink');
  var liveEl = document.getElementById('productLive');
  var progressBar = document.getElementById('productProgress');
  var index = 0;
  var timer = null;
  var progress = 0;
  var duration = 9000;

  var data = [
    { title: 'ArcNotes', desc: 'AI PDF summarization — live product', href: './work/arcnotes.html', live: 'https://arcnotes.pxxl.click' },
    { title: 'SitePulseNg', desc: 'Website audits & SEO for Nigerian businesses', href: './work/sitepulse.html', live: 'https://sitepulseng.pxxl.click' },
    { title: 'PrivateMe', desc: 'Privacy-first media platform', href: './work/privateme.html', live: 'https://privateme-landing-page.pxxl.click' },
    { title: 'DueLog', desc: 'Product shipping live on pxxl', href: 'https://duelog.pxxl.click', live: 'https://duelog.pxxl.click' },
    { title: 'BillWise', desc: 'Product shipping live on pxxl', href: 'https://billwise.pxxl.click', live: 'https://billwise.pxxl.click' }
  ];

  function show(i) {
    if (!stage) return;
    index = (i + data.length) % data.length;
    tabs.forEach(function (t, n) {
      t.classList.toggle('active', n === index);
      t.setAttribute('aria-selected', n === index ? 'true' : 'false');
    });
    slides.forEach(function (s, n) {
      s.classList.toggle('active', n === index);
    });
    var preview = slides[index] && slides[index].querySelector('.live-preview');
    if (preview) loadPreview(preview);

    var d = data[index];
    if (titleEl) titleEl.textContent = d.title;
    if (descEl) descEl.textContent = d.desc;
    if (linkEl) {
      linkEl.href = d.href;
      linkEl.textContent = d.href.indexOf('./work/') === 0 ? 'Case study →' : 'Open live →';
      if (d.href.indexOf('http') === 0) {
        linkEl.setAttribute('target', '_blank');
        linkEl.setAttribute('rel', 'noopener noreferrer');
      } else {
        linkEl.removeAttribute('target');
        linkEl.removeAttribute('rel');
      }
    }
    if (liveEl) {
      liveEl.href = d.live;
      liveEl.textContent = 'Live site ↗';
    }
    progress = 0;
    if (progressBar) progressBar.style.width = '0%';
  }

  function tick() {
    if (reduceMotion || !stage) return;
    progress += 100 / (duration / 100);
    if (progressBar) progressBar.style.width = Math.min(progress, 100) + '%';
    if (progress >= 100) show(index + 1);
  }

  function start() {
    stop();
    if (reduceMotion || !stage) return;
    timer = setInterval(tick, 100);
  }

  function stop() {
    if (timer) clearInterval(timer);
    timer = null;
  }

  if (stage) {
    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () {
        show(i);
        start();
      });
    });
    stage.addEventListener('mouseenter', stop);
    stage.addEventListener('mouseleave', start);
    stage.addEventListener('focusin', stop);
    stage.addEventListener('focusout', start);
    show(0);
    start();
  }

  // Work-card / standalone previews: load when in view
  var previewBoxes = document.querySelectorAll('.live-preview');
  if ('IntersectionObserver' in window) {
    var pIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        if (shouldAutoLoad(entry.target)) loadPreview(entry.target);
        pIo.unobserve(entry.target);
      });
    }, { rootMargin: '140px' });
    previewBoxes.forEach(function (box) {
      if (box.closest('#productStage')) return; // handled by stage
      pIo.observe(box);
    });
  } else {
    previewBoxes.forEach(function (box) {
      if (shouldAutoLoad(box)) loadPreview(box);
    });
  }
})();
