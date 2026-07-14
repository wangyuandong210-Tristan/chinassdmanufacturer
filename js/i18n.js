/**
 * i18n Multi-language System
 * Supports: English, Chinese, Spanish, French, Portuguese
 */
(function() {
  const LANG_COOKIE = 'orion_lang';
  const SUPPORTED = ['en','zh','es','fr','pt'];
  
  function getLang() { return localStorage.getItem(LANG_COOKIE) || 'en'; }
  function setLang(l) { localStorage.setItem(LANG_COOKIE, l); document.documentElement.lang = l; }
  
  async function loadLang(lang) {
    try {
      const r = await fetch('lang/' + lang + '.json?_=' + Date.now());
      const t = await r.json();
      document.querySelectorAll('[data-i]').forEach(el => {
        const k = el.getAttribute('data-i');
        if (t[k] !== undefined) {
          if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = t[k];
          else if (el.tagName === 'IMG') el.alt = t[k];
          else el.textContent = t[k];
        }
      });
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
      return true;
    } catch(e) { console.warn('Lang load failed:', lang); return false; }
  }
  
  function createSelector() {
    const langs = [
      {code:'en', label:'EN'},
      {code:'zh', label:'中'},
      {code:'es', label:'ES'},
      {code:'fr', label:'FR'},
      {code:'pt', label:'PT'}
    ];
    const current = getLang();
    return langs.map(l =>
      `<a class="lang-btn${l.code===current?' active':''}" data-lang="${l.code}" onclick="switchLang('${l.code}')">${l.label}</a>`
    ).join('');
  }
  
  window.switchLang = async function(lang) {
    if (!SUPPORTED.includes(lang)) return;
    setLang(lang);
    await loadLang(lang);
  };
  
  document.addEventListener('DOMContentLoaded', async () => {
    const nav = document.querySelector('.nav-menu');
    if (nav) {
      const li = document.createElement('li');
      li.className = 'nav-lang';
      li.innerHTML = createSelector();
      nav.appendChild(li);
    }
    await loadLang(getLang());
  });
})();
