/**
 * ORION SSD & Memory - Multi-language Switch (i18n)
 * Loads translations from lang/ directory and updates [data-i] elements.
 */
(function() {
  'use strict';

  var supportedLangs = ['en', 'zh', 'es', 'fr', 'pt'];
  var langLabels = { en: 'EN', zh: '涓枃', es: 'ES', fr: 'FR', pt: 'PT' };
  var defaultLang = 'en';
  var translations = {};
  var currentLang = defaultLang;

  // Detect saved language or browser language
  function detectLang() {
    var saved = localStorage.getItem('orion_lang');
    if (saved && supportedLangs.indexOf(saved) !== -1) return saved;
    var browser = (navigator.language || 'en').split('-')[0];
    if (supportedLangs.indexOf(browser) !== -1) return browser;
    return defaultLang;
  }

  // Determine base path for lang/ directory (works in root or subdirectory)
  function getBasePath() {
    var path = window.location.pathname;
    // Remove filename from path to get directory
    var dir = path.substring(0, path.lastIndexOf('/') + 1);
    // Navigate up from subdirectories until we find lang/
    // Simple approach: if we're in a subdirectory, prepend ../
    var depth = (dir.match(/\//g) || []).length;
    var prefix = '';
    for (var i = 1; i < depth; i++) { prefix += '../'; }
    return prefix + '/lang/';
  }

  // Load JSON translation file
  function loadTranslations(lang, callback) {
    if (translations[lang]) {
      callback(translations[lang]);
      return;
    }
    var xhr = new XMLHttpRequest();
    xhr.open('GET', getBasePath() + lang + '.json', true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        try {
          translations[lang] = JSON.parse(xhr.responseText);
          callback(translations[lang]);
        } catch (e) {
          console.warn('i18n: Failed to parse ' + lang + '.json');
          callback({});
        }
      } else {
        console.warn('i18n: Language file ' + lang + '.json not found (status ' + xhr.status + ')');
        callback({});
      }
    };
    xhr.onerror = function() {
      console.warn('i18n: Failed to load ' + lang + '.json');
      callback({});
    };
    xhr.send();
  }

  // Apply translations to the page
  function applyTranslations(data) {
    var elements = document.querySelectorAll('[data-i]');
    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      var key = el.getAttribute('data-i');
      if (data[key] !== undefined) {
        // Only update text content for inline elements, preserve HTML structure
        // For elements with child nodes, only update direct text
        if (el.children.length === 0) {
          el.textContent = data[key];
        }
      }
    }
  }

  // Switch language
  function switchLang(lang) {
    if (lang === currentLang) return;
    loadTranslations(lang, function(data) {
      currentLang = lang;
      localStorage.setItem('orion_lang', lang);
      applyTranslations(data);
      updateLangButtons();
    });
  }

  // Update language button states
  function updateLangButtons() {
    var container = document.getElementById('langSelector');
    if (!container) return;
    var btns = container.querySelectorAll('.lang-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.toggle('active', btns[i].getAttribute('data-lang') === currentLang);
    }
    // Update html lang attribute
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : currentLang;
  }

  // Build language selector UI
  function buildLangSelector() {
    var container = document.getElementById('langSelector');
    if (!container) return;
    container.innerHTML = '';
    for (var i = 0; i < supportedLangs.length; i++) {
      var lang = supportedLangs[i];
      var btn = document.createElement('a');
      btn.className = 'lang-btn';
      btn.setAttribute('data-lang', lang);
      btn.href = 'javascript:void(0)';
      btn.textContent = langLabels[lang] || lang.toUpperCase();
      btn.onclick = (function(l) {
        return function() { switchLang(l); };
      })(lang);
      container.appendChild(btn);
    }
    updateLangButtons();
  }

  // Initialize on DOM ready
  function init() {
    buildLangSelector();
    var detected = detectLang();
    if (detected !== defaultLang) {
      switchLang(detected);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for external use
  window.ORION_i18n = {
    switchLang: switchLang,
    getCurrentLang: function() { return currentLang; }
  };
})();




