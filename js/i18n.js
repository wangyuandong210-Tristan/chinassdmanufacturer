/**
 * ORION Multi-Language System v2
 */
(function() {
  const LANG_KEY = "orion_lang";
  const t = {
    en: {"nav_home":"Home","nav_products":"Products","nav_about":"About Us","nav_odm":"OEM/ODM","nav_blog":"Blog","nav_contact":"Contact","nav_quote":"Email Us","hero_badge":"OEM/ODM Manufacturing Partner","hero_title":"Your Trusted OEM Partner","hero_quote":"Email Us","cat_nvme":"NVMe SSDs","cat_nvme_d":"PCIe 4.0, OEM ready","cat_sata":"SATA SSDs","cat_sata_d":"2.5-inch, OEM","cat_memory":"Memory Modules","cat_memory_d":"DDR4/DDR5, OEM","cat_odm":"OEM/ODM Services","cat_odm_d":"Custom branding, firmware","features_t":"Why Partners Choose ORION","stats_t":"By the Numbers","cta_btn":"Send Email","footer_products":"Products","footer_company":"Company","footer_contact":"Contact","trust_factory":"Visit Our Factory","trust_docs":"Full Documentation","trust_comm":"Direct Communication"},
    zh: {"nav_home":"首页","nav_products":"产品中心","hero_quote":"发送邮件","cta_btn":"发送邮件","footer_products":"产品","footer_company":"公司","footer_contact":"联系"},
    es: {"nav_home":"Inicio","nav_products":"Productos","hero_quote":"Email","cta_btn":"Enviar Email","footer_products":"Productos","footer_company":"Empresa","footer_contact":"Contacto"},
    fr: {"nav_home":"Accueil","nav_products":"Produits","hero_quote":"Email","cta_btn":"Envoyer","footer_products":"Produits","footer_company":"Societe","footer_contact":"Contact"},
    pt: {"nav_home":"Inicio","nav_products":"Produtos","hero_quote":"Email","cta_btn":"Enviar Email","footer_products":"Produtos","footer_company":"Empresa","footer_contact":"Contato"},
    de: {"nav_home":"Start","nav_products":"Produkte","hero_quote":"E-Mail","cta_btn":"E-Mail","footer_products":"Produkte","footer_company":"Unternehmen","footer_contact":"Kontakt"},
    nl: {"nav_home":"Home","nav_products":"Producten","hero_quote":"E-mail","cta_btn":"E-mail","footer_products":"Producten","footer_company":"Bedrijf","footer_contact":"Contact"},
    it: {"nav_home":"Home","nav_products":"Prodotti","hero_quote":"Email","cta_btn":"Email","footer_products":"Prodotti","footer_company":"Azienda","footer_contact":"Contatto"}
  };
  function getLang() { return localStorage.getItem(LANG_KEY) || "en"; }
  function setLang(l) { localStorage.setItem(LANG_KEY, l); document.documentElement.lang = l; }
  window.switchLang = function(lang) {
    if (!t[lang]) return;
    setLang(lang);
    var dict = t[lang] || {};
    var fb = t.en || {};
    document.querySelectorAll("[data-i]").forEach(function(el) {
      var k = el.getAttribute("data-i");
      if (dict[k] !== undefined) el.textContent = dict[k];
      else if (fb[k] !== undefined) el.textContent = fb[k];
    });
    document.querySelectorAll(".lang-item").forEach(function(a) { a.classList.toggle("active", a.getAttribute("data-lang") === lang); });
  };
  document.addEventListener("DOMContentLoaded", function() {
    var nav = document.querySelector(".nav-menu");
    if (!nav) return;
    var li = document.createElement("li");
    li.style.cssText = "margin-left:8px";
    li.innerHTML = '<div class="lang-hover"><button class="lang-btn">🌐</button><div class="lang-dropdown-content">' +
      '<a class="lang-item active" data-lang="en" onclick="switchLang('en')">🇬🇧 English</a>' +
      '<a class="lang-item" data-lang="zh" onclick="switchLang('zh')">🇨🇳 中文</a>' +
      '<a class="lang-item" data-lang="es" onclick="switchLang('es')">🇪🇸 Español</a>' +
      '<a class="lang-item" data-lang="fr" onclick="switchLang('fr')">🇫🇷 Français</a>' +
      '<a class="lang-item" data-lang="pt" onclick="switchLang('pt')">🇧🇷 Português</a>' +
      '<a class="lang-item" data-lang="de" onclick="switchLang('de')">🇩🇪 Deutsch</a>' +
      '<a class="lang-item" data-lang="nl" onclick="switchLang('nl')">🇳🇱 Nederlands</a>' +
      '<a class="lang-item" data-lang="it" onclick="switchLang('it')">🇮🇹 Italiano</a>' +
      '</div></div>';
    nav.appendChild(li);
    switchLang(getLang());
  });
})();
