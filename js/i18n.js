(function() {
  var LANG_KEY = "orion_lang";
  var t = {
    en: {"nav_home":"Home","nav_products":"Products","nav_about":"About Us","nav_odm":"OEM/ODM","nav_blog":"Blog","nav_contact":"Contact","hero_badge":"OEM/ODM Manufacturing Partner","hero_title":"Your Trusted OEM Partner","hero_quote":"Email Us","cat_nvme":"NVMe SSDs","cat_sata":"SATA SSDs","cat_memory":"Memory Modules","cat_odm":"OEM/ODM Services","cta_btn":"Send Email"},
    zh: {"nav_home":"首页","nav_products":"产品中心","hero_quote":"发送邮件","cta_btn":"发送邮件"},
    es: {"nav_home":"Inicio","nav_products":"Productos","hero_quote":"Email","cta_btn":"Enviar Email"},
    fr: {"nav_home":"Accueil","nav_products":"Produits","hero_quote":"Email","cta_btn":"Envoyer"},
    pt: {"nav_home":"Inicio","nav_products":"Produtos","hero_quote":"Email","cta_btn":"Enviar Email"},
    de: {"nav_home":"Start","nav_products":"Produkte","hero_quote":"E-Mail","cta_btn":"E-Mail"},
    nl: {"nav_home":"Home","nav_products":"Producten","hero_quote":"E-mail","cta_btn":"E-mail"},
    it: {"nav_home":"Home","nav_products":"Prodotti","hero_quote":"Email","cta_btn":"Email"}
  };
  function getLang() { return localStorage.getItem(LANG_KEY) || "en"; }
  function setLang(l) { localStorage.setItem(LANG_KEY, l); }
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
  };
  document.addEventListener("DOMContentLoaded", function() {
    var nav = document.querySelector(".nav-menu");
    if (!nav) return;
    var li = document.createElement("li");
    li.style.cssText = "margin-left:8px;position:relative";
    var btn = document.createElement("button");
    btn.textContent = "\uD83C\uDF10";
    btn.style.cssText = "background:none;border:1px solid #dee2e6;border-radius:6px;padding:4px 8px;cursor:pointer;font-size:18px;line-height:1";
    var dd = document.createElement("div");
    dd.style.cssText = "display:none;position:absolute;top:100%;right:0;margin-top:2px;background:#fff;border:1px solid #dee2e6;border-radius:10px;box-shadow:0 8px 32px rgba(0,0,0,0.15);min-width:165px;z-index:999;padding:4px 0";
    var langs = [
      {c:"en",f:"\uD83C\uDDEC\uD83C\uDDE7",l:"English"},
      {c:"zh",f:"\uD83C\uDDE8\uD83C\uDDF3",l:"\u4E2D\u6587"},
      {c:"es",f:"\uD83C\uDDEA\uD83C\uDDF8",l:"Espa\u00F1ol"},
      {c:"fr",f:"\uD83C\uDDEB\uD83C\uDDF7",l:"Fran\u00E7ais"},
      {c:"pt",f:"\uD83C\uDDE7\uD83C\uDDF7",l:"Portugu\u00EAs"},
      {c:"de",f:"\uD83C\uDDE9\uD83C\uDDEA",l:"Deutsch"},
      {c:"nl",f:"\uD83C\uDDF3\uD83C\uDDF1",l:"Nederlands"},
      {c:"it",f:"\uD83C\uDDEE\uD83C\uDDF9",l:"Italiano"}
    ];
    var current = getLang();
    langs.forEach(function(l) {
      var a = document.createElement("a");
      a.textContent = l.f + " " + l.l;
      a.style.cssText = "display:block;padding:8px 16px;font-size:13px;color:#495057;text-decoration:none;cursor:pointer" + (l.c === current ? ";background:#e8f0fe;color:#0052a0;font-weight:600" : "");
      a.onmouseover = function() { this.style.background = "#e8f0fe"; };
      a.onmouseout = function() { if (l.c !== current) this.style.background = ""; };
      a.onclick = function() { window.switchLang(l.c); dd.style.display = "none"; };
      dd.appendChild(a);
    });
    btn.onclick = function(e) { e.stopPropagation(); dd.style.display = dd.style.display === "none" ? "block" : "none"; };
    document.addEventListener("click", function() { dd.style.display = "none"; });
    li.appendChild(btn);
    li.appendChild(dd);
    nav.appendChild(li);
    switchLang(current);
  });
})();
