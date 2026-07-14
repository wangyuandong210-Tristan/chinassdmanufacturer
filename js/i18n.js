/**
 * ORION Multi-Language System v2
 * Hover dropdown, inline translations, no external files
 */
(function() {
  const LANG_KEY = 'orion_lang';
  const t = {
    en: {"nav_home":"Home","nav_products":"Products","nav_about":"About Us","nav_odm":"OEM/ODM","nav_blog":"Blog","nav_contact":"Contact","nav_quote":"Email Us","hero_badge":"OEM/ODM Manufacturing Partner","hero_title":"Your Trusted OEM Partner for SSD & Memory","hero_desc":"13+ years of OEM/ODM expertise. Custom branding, firmware, and packaging.","hero_quote":"Email Us","hero_products":"OEM Capabilities","section_products":"Product Categories","section_products_t":"Storage Solutions","section_products_d":"SSDs and memory for every need","cat_nvme":"NVMe SSDs","cat_nvme_d":"PCIe 4.0, 256GB-2TB, OEM ready","cat_sata":"SATA SSDs","cat_sata_d":"2.5-inch, 120GB-1.92TB, OEM","cat_memory":"Memory Modules","cat_memory_d":"DDR4/DDR5, desktop & laptop, OEM","cat_odm":"OEM/ODM Services","cat_odm_d":"Custom branding, firmware, packaging","features_t":"Why Partners Choose ORION","feat1_t":"Custom Branding","feat1_d":"Your logo on every drive","feat2_t":"Full OEM/ODM","feat2_d":"Custom PCB, firmware, packaging","stats_t":"By the Numbers","stat1":"13+ Years","stat1_l":"Industry","stat2":"50M+","stat2_l":"Units","stat3":"500+","stat3_l":"Clients","stat4":"10,000m2","stat4_l":"Factory","process_t":"OEM/ODM Process","process1":"Inquiry","process1_d":"Tell us requirements","process2":"Quote","process2_d":"24hr pricing","process3":"Production","process3_d":"Strict QC","process4":"Delivery","process4_d":"Packaging & shipping","cert_t":"Certifications","cert_t2":"Quality & Compliance","cert_d":"Fully certified for global markets","testimonial_t":"What Partners Say","cta_t":"Start Your OEM Project?","cta_d":"Get a quote within 24 hours","cta_btn":"Send Email","stat_years":"13+ Years","stat_years_l":"Industry Experience","stat_units":"50M+","stat_units_l":"Units Shipped","stat_clients":"500+","stat_clients_l":"B2B Partners","stat_countries":"50+","stat_countries_l":"Export Markets","stat1_l":"Industry","stat2_l":"Units","stat3_l":"Clients","stat4_l":"Factory","footer_products":"Products","footer_company":"Company","footer_contact":"Contact","footer_prod1":"NVMe SSDs","footer_prod2":"SATA SSDs","footer_prod3":"Memory","footer_prod4":"Industrial","footer_prod5":"OEM/ODM","footer_about":"About Us","footer_factory":"Factory","footer_cert":"Certifications","footer_blog":"Blog","footer_rights":"All rights reserved"},
    zh: {"nav_home":"首页","nav_products":"产品中心","nav_about":"关于我们","nav_odm":"OEM/ODM","nav_blog":"博客","nav_contact":"联系我们","nav_quote":"发送邮件","hero_badge":"OEM/ODM制造合作伙伴","hero_title":"值得信赖的SSD与内存OEM合作伙伴","hero_desc":"13年以上OEM/ODM经验，支持定制品牌、固件、包装。","hero_quote":"发送邮件","hero_products":"OEM能力","section_products":"产品类别","section_products_t":"存储解决方案","section_products_d":"满足各种需求的SSD与内存","cat_nvme":"NVMe固态硬盘","cat_nvme_d":"PCIe 4.0，256GB-2TB，OEM就绪","cat_sata":"SATA固态硬盘","cat_sata_d":"2.5英寸，120GB-1.92TB，OEM","cat_memory":"内存模组","cat_memory_d":"DDR4/DDR5，台式及笔记本，OEM","cat_odm":"OEM/ODM服务","cat_odm_d":"定制品牌、固件、包装","features_t":"为什么选择ORION","feat1_t":"定制品牌","feat1_d":"每颗硬盘都有您的品牌","feat2_t":"完整OEM/ODM","feat2_d":"定制PCB、固件、包装","stats_t":"数据说话","stat1":"13+年","stat1_l":"行业经验","stat2":"5000万+","stat2_l":"出货量","stat3":"500+","stat3_l":"客户","stat4":"1万m2","stat4_l":"工厂","process_t":"OEM/ODM流程","process1":"需求沟通","process1_d":"告诉我们需求","process2":"报价打样","process2_d":"24小时报价","process3":"批量生产","process3_d":"严格品控","process4":"物流交付","process4_d":"包装与物流","cert_t":"认证资质","cert_t2":"质量与合规","cert_d":"全系列产品获得全球认证","testimonial_t":"合作伙伴评价","cta_t":"开始OEM项目？","cta_d":"24小时内获取报价","cta_btn":"发送邮件","stat_years":"13+年","stat_years_l":"行业经验","stat_units":"5000万+","stat_units_l":"出货量","stat_clients":"500+","stat_clients_l":"B2B客户","stat_countries":"50+","stat_countries_l":"出口市场","footer_products":"产品","footer_company":"公司","footer_contact":"联系","footer_prod1":"NVMe固态硬盘","footer_prod2":"SATA固态硬盘","footer_prod3":"内存","footer_prod4":"工业级","footer_prod5":"OEM/ODM","footer_about":"关于我们","footer_factory":"工厂","footer_cert":"认证","footer_blog":"博客","footer_rights":"版权所有"},
    es: {"nav_home":"Inicio","nav_products":"Productos","nav_about":"Nosotros","nav_odm":"OEM/ODM","nav_blog":"Blog","nav_contact":"Contacto","nav_quote":"Email","hero_quote":"Email","hero_products":"Capacidades OEM","features_t":"Por qué elegir ORION","cta_t":"¿Listo para su proyecto OEM?","cta_d":"Reciba un presupuesto en 24h","cta_btn":"Enviar Email","footer_products":"Productos","footer_company":"Empresa","footer_contact":"Contacto","footer_about":"Sobre nosotros","footer_blog":"Blog","footer_rights":"Todos los derechos reservados"},
    fr: {"nav_home":"Accueil","nav_products":"Produits","nav_about":"À propos","nav_odm":"OEM/ODM","nav_blog":"Blog","nav_contact":"Contact","nav_quote":"Email","hero_quote":"Email","hero_products":"Services OEM","features_t":"Pourquoi ORION","cta_t":"Prêt pour votre projet OEM?","cta_d":"Devis sous 24h","cta_btn":"Envoyer un Email","footer_products":"Produits","footer_company":"Société","footer_contact":"Contact","footer_about":"À propos","footer_blog":"Blog","footer_rights":"Tous droits réservés"},
    pt: {"nav_home":"Início","nav_products":"Produtos","nav_about":"Sobre","nav_odm":"OEM/ODM","nav_blog":"Blog","nav_contact":"Contato","nav_quote":"Email","hero_quote":"Email","hero_products":"Serviços OEM","features_t":"Por que escolher ORION","cta_t":"Pronto para seu projeto OEM?","cta_d":"Orçamento em 24h","cta_btn":"Enviar Email","footer_products":"Produtos","footer_company":"Empresa","footer_contact":"Contato","footer_about":"Sobre","footer_blog":"Blog","footer_rights":"Todos os direitos reservados"}
  };

  function getLang() { return localStorage.getItem(LANG_KEY) || 'en'; }
  function setLang(l) { localStorage.setItem(LANG_KEY, l); document.documentElement.lang = l; }

  window.switchLang = function(lang) {
    if (!t[lang]) return;
    setLang(lang);
    const dict = t[lang] || {}; const fb = t.en || {};
    document.querySelectorAll('[data-i]').forEach(el => {
      const k = el.dataset.i;
      if (dict[k] !== undefined) el.textContent = dict[k]; else if (fb[k] !== undefined) el.textContent = fb[k];
    });
    // Update active in dropdown
    document.querySelectorAll('.lang-item').forEach(a => a.classList.toggle('active', a.dataset.lang === lang));
  };

  document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav-menu');
    if (!nav) return;
    const li = document.createElement('li');
    li.style.cssText = 'margin-left:8px';
    li.className = 'lang-hover-wrap';
    li.innerHTML = '<div class="lang-hover"><button class="lang-btn" onclick="event.stopPropagation()">🌐</button><div class="lang-dropdown-content">' +
      '<a class="lang-item" data-lang="en" onclick="switchLang(\'en\')">🇬🇧 English</a>' +
      '<a class="lang-item" data-lang="zh" onclick="switchLang(\'zh\')">🇨🇳 中文</a>' +
      '<a class="lang-item" data-lang="es" onclick="switchLang(\'es\')">🇪🇸 Español</a>' +
      '<a class="lang-item" data-lang="fr" onclick="switchLang(\'fr\')">🇫🇷 Français</a>' +
      '<a class="lang-item" data-lang="pt" onclick="switchLang(\'pt\')">🇧🇷 Português</a>' +
      '<a class="lang-item" data-lang="de" onclick="switchLang(\'de\')">🇩🇪 Deutsch</a>' +
      '<a class="lang-item" data-lang="nl" onclick="switchLang(\'nl\')">🇳🇱 Nederlands</a>' +
      '<a class="lang-item" data-lang="it" onclick="switchLang(\'it\')">🇮🇹 Italiano</a>' +
      '</div></div>';
    nav.appendChild(li);
    // Apply current language
    switchLang(getLang());
  });
})();

