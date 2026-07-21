/**
 * ORION Multi-Language System
 */
(function() {
  var K = "orion_lang";
  function gl() { return localStorage.getItem(K) || "en"; }
  function sl(l) { localStorage.setItem(K, l); document.documentElement.lang = l; }
  var t = {
    en: {
      nav_home:"Home",nav_products:"Products",nav_about:"About Us",nav_odm:"OEM/ODM",nav_blog:"Blog",nav_contact:"Contact",nav_quote:"Request Quote",
      hero_badge:"OEM/ODM Manufacturing Partner",hero_title:"Your Trusted OEM Partner for SSD & Memory",hero_desc:"13+ years of OEM/ODM expertise. We help businesses launch their own SSD and memory brands with custom branding, firmware, and packaging solutions.",hero_quote:"Request Quote",hero_products:"OEM Capabilities",
      cat_nvme:"NVMe SSDs",cat_nvme_d:"PCIe 4.0, 256GB-2TB, up to 7,000MB/s. OEM ready",cat_sata:"SATA SSDs",cat_sata_d:"2.5-inch, 120GB-1.92TB, industrial & consumer. OEM ready",cat_memory:"Memory Modules",cat_memory_d:"DDR4/DDR5, desktop & laptop. OEM/ODM available",cat_odm:"OEM/ODM Services",cat_odm_d:"Custom branding, firmware, packaging, and specs",
      features_t:"Why OEM/ODM Partners Choose ORION",feat5_t:"Quality Assurance",feat5_d:" - 100% burn-in test, 3-year warranty on all SSD products",
      stats_t:"By the Numbers",process_t:"OEM Process",
      cert_t:"Certifications",cert_t2:"Quality & Compliance Certifications",cert_d:"All products are fully certified for global markets",
      trust_factory:"Visit Our Factory",trust_docs:"Full Documentation",trust_comm:"Direct Communication",
      testimonial_t:"Testimonials",
      section_products:"Product Categories",section_products_t:"Comprehensive Storage Solutions",section_products_d:"From consumer SSDs to industrial-grade memory, we cover all your storage needs",
      cta_btn:"Request Quote",cta_t:"Ready to Start Your OEM/ODM Project?",cta_d:"Send us an email with your requirements. Your inquiry will be answered within 24 hours.",
      footer_products:"Products",footer_company:"Company",footer_contact:"Contact",footer_prod1:"NVMe SSD",footer_prod2:"SATA SSD",footer_prod3:"Memory Modules",footer_prod4:"Industrial SSD",footer_prod5:"OEM/ODM Services",
      footer_about:"About Us",footer_blog:"Blog",footer_desc:"ORION SSD & Memory is a leading China-based SSD and memory module manufacturer, serving global B2B clients with over 13 years of industry experience since 2013.",
      contact_hero:"Contact Our Sales Team",contact_hero_desc:"Send us an email with your requirements. We reply within 24 hours.",
      about_hero:"About ORION SSD & Memory",about_hero_desc:"Your trusted partner in SSD and memory manufacturing since 2013",about_story_t:"Our Story",
      prod_hero:"Our Product Line",prod_hero_desc:"All products available for OEM/ODM with custom branding and packaging",prod_all:"All Products",
      prod_inquire:"Email Us",prod_cta:"Need a Custom Product?",prod_cta_btn:"Contact Sales Team",prod_cta_desc:"We offer full OEM/ODM services. Get in touch with your requirements.",
      odm_hero:"OEM/ODM Manufacturing Services",odm_hero_desc:"From concept to finished product - we bring your storage brand to life",odm_white_label:"Standard products with your brand. Choose from our existing models, add your logo and packaging.",odm_custom:"Custom firmware, specific NAND configuration, unique capacity points, and custom PCB layout.",odm_joint:"Co-develop next-generation products. Share R&D resources and IP.",odm_cta:"Submit Inquiry",
      stat2:"50M+",stat2_l:"SSDs Manufactured",stat3:"500+",stat3_l:"Active B2B Clients",stat_units:"50M+",stat_units_l:"Units Shipped",stat_clients:"500+",stat_clients_l:"B2B Partners",stat_countries:"50+",stat_countries_l:"Export Countries",
      prod_e100:"ORION E100 NVMe SSD",prod_e100_s:"256GB / 512GB / 1TB / 2TB | Read: 5000MB/s | Write: 4500MB/s | Interface: M.2 2280",
      prod_e200:"ORION E200 Pro NVMe SSD",prod_e200_s:"512GB / 1TB / 2TB / 4TB | Read: 7450MB/s | Write: 6900MB/s | DRAM cache, TLC NAND",
      prod_e300:"ORION E300 NVMe SSD",prod_e300_s:"256GB / 512GB / 1TB | Read: 3500MB/s | Write: 3000MB/s | Budget-friendly, high reliability",
      prod_s100:"ORION S100 SATA SSD",prod_s200:"ORION S200 Pro SATA SSD",prod_s200_s:"480GB / 960GB / 1.92TB / 3.84TB | Read: 560MB/s | Write: 530MB/s | Enterprise-grade",
      prod_ddr5:"ORION DDR5 Memory Module",prod_ddr5_s:"8GB / 16GB / 32GB per module | Freq: 4800-7200MHz | XMP 3.0, 1.1V, heat spreader optional",
      prod_ddr4:"ORION DDR4 Memory Module",prod_ddr4_s:"4GB / 8GB / 16GB / 32GB per module | Freq: 2666-3600MHz | 1.2V, compatible with all major platforms",
      prod_ind_sata:"Industrial SATA SSD",prod_ind_s:"32GB - 512GB | M.2 / mSATA / 2.5 inch | SLC/MLC/TLC options, high TBW",
      prod_industrial:"Industrial",prod_oem:"Custom OEM Solutions",prod_oem_s:"Custom labeling, retail packaging, firmware customization | BTO specifications | All certifications included",
      hero_stat_yr:"Years in Industry",hero_stat_fa:"Factory Area",
      cat_consumer:"Consumer SSD",cat_consumer_d:"NVMe PCIe 4.0 & SATA III. 256GB-2TB.",
      cat_enterprise_d:"Data center grade. 512GB-8TB.",
      cat_ddr5_d:"4800-7200MHz. 8GB-32GB.",
      cat_ddr4_d:"2666-3600MHz. 4GB-32GB.",
      cat_industrial_d:"Wide-temperature. 32GB-512GB.",
      cat_odm2:"OEM/ODM Services",cat_odm2_d:"Custom branding, firmware.",
      ind_sol_sub:"Proven Storage Solutions Across Industries",
      ind_sol_desc:"Our SSDs power applications in 50+ countries",
      ind_gaming:"Gaming",ind_gaming_d:"High-speed NVMe SSDs for gaming PCs",
      ind_ipc:"Industrial PC",ind_ipc_d:"Wide-temperature SSDs for embedded systems",
      ind_medical:"Medical",ind_medical_d:"Reliable storage for medical devices",
      ind_ai:"AI & Edge Computing",ind_ai_d:"High-endurance SSDs for AI inference",
      ind_surveillance:"Surveillance",ind_surveillance_d:"High-TBW SSDs for NVR storage",
      ind_server:"Server & Data Center",ind_server_d:"Enterprise eSSD for data center",
      mfg_smt:"SMT Assembly",mfg_smt_d:"6 SMT lines. 50,000+ daily capacity.",
      mfg_burnin:"Aging & Burn-in",mfg_burnin_d:"24-72h burn-in. 100% tested.",
      mfg_qa:"QA Laboratory",mfg_qa_d:"In-house QC lab with thermal testing.",
      mfg_line:"Production Line",mfg_line_d:"End-to-end production. 200+ operators.",
      mfg_wh:"Warehouse & Logistics",mfg_wh_d:"Temp-controlled NAND storage.",
      mfg_capacity:"Production Capacity",mfg_capacity_d:"10M+ units annual capacity.",
      mfg_cta:"Take a Factory Tour",
      adv_mfg:"Manufacturing",adv_mfg_d:"10,000m2 with 6 SMT lines. 10M+ capacity.",
      adv_rd:"R&D Capability",adv_rd_d:"In-house R&D. Firmware, PCB design.",
      adv_supply:"Stable Supply Chain",adv_supply_d:"Branded NAND. Samsung, Kioxia.",
      adv_qc:"Quality Control",adv_qc_d:"100% burn-in. ISO 9001. CE/FCC/ROHS.",
      adv_custom:"Flexible Customization",adv_custom_d:"Custom branding. MOQ 200.",
      adv_global:"Global Delivery",adv_global_d:"DHL/FedEx. 50+ countries.",
      mfg_sub:"10,000m2 Factory, Fully Equipped",
      mfg_desc:"Our facility operates at scale with strict QC",
      adv_sub:"13+ years OEM/ODM expertise",
      cert_ce:"CE",cert_fcc:"FCC",cert_rohs:"ROHS",cert_iso:"ISO 9001",
      cert_reach:"REACH",cert_ukca:"UKCA",
    },
    zh: {
      nav_home:"\u9996\u9875",nav_products:"\u4ea7\u54c1\u4e2d\u5fc3",nav_about:"\u5173\u4e8e\u6211\u4eec",nav_odm:"OEM/ODM",nav_blog:"\u535a\u5ba2",nav_contact:"\u8054\u7cfb\u6211\u4eec",nav_quote:"\u83b7\u53d6\u62a5\u4ef7",
      hero_badge:"OEM/ODM\u5236\u9020\u5408\u4f5c\u4f19\u4f34",hero_title:"\u60a8\u503c\u5f97\u4fe1\u8d56\u7684SSD\u548c\u5185\u5b58OEM\u5408\u4f5c\u4f19\u4f34",hero_desc:"13\u5e74\u4ee5\u4e0aOEM/ODM\u4e13\u4e1a\u7ecf\u9a8c\u3002\u6211\u4eec\u5e2e\u52a9\u5ba2\u6237\u6253\u9020\u81ea\u5df1\u7684SSD\u548c\u5185\u5b58\u54c1\u724c\u3002",hero_quote:"\u83b7\u53d6\u62a5\u4ef7",hero_products:"OEM\u80fd\u529b",
      cat_nvme:"NVMe\u56fa\u6001\u786c\u76d8",cat_nvme_d:"PCIe 4.0, 256GB-2TB\uff0c\u6700\u9ad87000MB/s\u3002OEM\u5c31\u7eea",cat_sata:"SATA\u56fa\u6001\u786c\u76d8",cat_sata_d:"2.5\u82f1\u5bf8\uff0c120GB-1.92TB\uff0c\u5de5\u4e1a\u548c\u6d88\u8d39\u7ea7\u3002OEM\u5c31\u7eea",cat_memory:"\u5185\u5b58\u6a21\u7ec4",cat_memory_d:"DDR4/DDR5\uff0c\u53f0\u5f0f\u673a\u548c\u7b14\u8bb0\u672c\u3002\u652f\u6301OEM/ODM",cat_odm:"OEM/ODM\u670d\u52a1",cat_odm_d:"\u5b9a\u5236\u54c1\u724c\u3001\u56fa\u4ef6\u3001\u5305\u88c5\u548c\u89c4\u683c",
      features_t:"\u4e3a\u4ec0\u4e48OEM/ODM\u5408\u4f5c\u4f19\u4f34\u9009\u62e9ORION",feat5_t:"\u8d28\u91cf\u4fdd\u8bc1",feat5_d:" - 100%\u8001\u5316\u6d4b\u8bd5\uff0c\u6240\u6709\u56fa\u6001\u786c\u76d8\u4ea7\u54c1\u63d0\u4f9b3\u5e74\u8d28\u4fdd",
      stats_t:"\u6570\u636e\u4e00\u89c8",process_t:"OEM\u6d41\u7a0b",
      cert_t:"\u8d44\u8d28\u8ba4\u8bc1",cert_t2:"\u8d28\u91cf\u4e0e\u5408\u89c4\u8ba4\u8bc1",cert_d:"\u6240\u6709\u4ea7\u54c1\u5747\u83b7\u5f97\u5168\u7403\u5e02\u573a\u8ba4\u8bc1",
      trust_factory:"\u53c2\u89c2\u5de5\u5382",trust_docs:"\u5b8c\u6574\u6587\u6863",trust_comm:"\u76f4\u63a5\u6c9f\u901a",
      testimonial_t:"\u5ba2\u6237\u8bc4\u4ef7",
      section_products:"\u4ea7\u54c1\u7c7b\u522b",section_products_t:"\u5168\u9762\u5b58\u50a8\u89e3\u51b3\u65b9\u6848",section_products_d:"\u4ece\u6d88\u8d39\u7ea7SSD\u5230\u5de5\u4e1a\u7ea7\u5185\u5b58\uff0c\u6ee1\u8db3\u60a8\u7684\u6240\u6709\u5b58\u50a8\u9700\u6c42",
      cta_btn:"\u83b7\u53d6\u62a5\u4ef7",cta_t:"\u51c6\u5907\u597d\u5f00\u59cbOEM/ODM\u9879\u76ee\u4e86\u5417\uff1f",cta_d:"\u5c06\u60a8\u7684\u9700\u6c42\u901a\u8fc7\u90ae\u4ef6\u53d1\u9001\u7ed9\u6211\u4eec\u3002\u60a8\u7684\u54a8\u8be2\u5c06\u572824\u5c0f\u65f6\u5185\u56de\u590d\u3002",
      footer_products:"\u4ea7\u54c1\u4e2d\u5fc3",footer_company:"\u516c\u53f8",footer_contact:"\u8054\u7cfb\u65b9\u5f0f",footer_prod1:"NVMe\u56fa\u6001\u786c\u76d8",footer_prod2:"SATA\u56fa\u6001\u786c\u76d8",footer_prod3:"\u5185\u5b58\u6a21\u7ec4",footer_prod4:"\u5de5\u4e1a\u7ea7SSD",footer_prod5:"OEM/ODM\u670d\u52a1",
      footer_about:"\u5173\u4e8e\u6211\u4eec",footer_blog:"\u535a\u5ba2",footer_desc:"ORION SSD & Memory \u662f\u9886\u5148\u7684\u4e2d\u56fdSSD\u548c\u5185\u5b58\u6a21\u7ec4\u5236\u9020\u5546\uff0c\u81ea2013\u5e74\u8d77\u670d\u52a1\u5168\u7403B2B\u5ba2\u6237\u3002",
      contact_hero:"\u8054\u7cfb\u9500\u552e\u56e2\u961f",contact_hero_desc:"\u5c06\u60a8\u7684\u9700\u6c42\u901a\u8fc7\u90ae\u4ef6\u53d1\u9001\u7ed9\u6211\u4eec\u3002\u6211\u4eec\u5c06\u572824\u5c0f\u65f6\u5185\u56de\u590d\u3002",
      about_hero:"\u5173\u4e8eORION SSD & Memory",about_hero_desc:"\u81ea2013\u5e74\u8d77\u503c\u5f97\u4fe1\u8d56\u7684SSD\u548c\u5185\u5b58\u5236\u9020\u5408\u4f5c\u4f19\u4f34",about_story_t:"\u6211\u4eec\u7684\u6545\u4e8b",
      prod_hero:"\u4ea7\u54c1\u7cfb\u5217",prod_hero_desc:"\u6240\u6709\u4ea7\u54c1\u5747\u53efOEM/ODM\uff0c\u652f\u6301\u5b9a\u5236\u54c1\u724c\u548c\u5305\u88c5",prod_all:"\u5168\u90e8\u4ea7\u54c1",
      prod_inquire:"\u53d1\u9001\u90ae\u4ef6",prod_cta:"\u9700\u8981\u5b9a\u5236\u4ea7\u54c1\uff1f",prod_cta_btn:"\u8054\u7cfb\u9500\u552e\u56e2\u961f",prod_cta_desc:"\u6211\u4eec\u63d0\u4f9b\u5168\u9762\u7684OEM/ODM\u670d\u52a1\u3002\u544a\u8bc9\u6211\u4eec\u60a8\u7684\u9700\u6c42\u3002",
      odm_hero:"OEM/ODM\u5236\u9020\u670d\u52a1",odm_hero_desc:"\u4ece\u6982\u5ff5\u5230\u6210\u54c1 - \u5c06\u60a8\u7684\u5b58\u50a8\u54c1\u724c\u53d8\u4e3a\u73b0\u5b9e",odm_white_label:"\u8d34\u724c\u4ea7\u54c1\u3002\u4ece\u6211\u4eec\u7684\u73b0\u6709\u578b\u53f7\u4e2d\u9009\u62e9\uff0c\u6dfb\u52a0\u60a8\u7684\u6807\u5fd7\u548c\u5305\u88c5\u3002",odm_custom:"\u5b9a\u5236\u56fa\u4ef6\u3001\u7279\u5b9aNAND\u914d\u7f6e\u3001\u72ec\u7279\u5bb9\u91cf\u70b9\u548c\u5b9a\u5236PCB\u5e03\u5c40\u3002",odm_joint:"\u5171\u540c\u5f00\u53d1\u4e0b\u4e00\u4ee3\u4ea7\u54c1\u3002\u5171\u4eab\u7814\u53d1\u8d44\u6e90\u548c\u77e5\u8bc6\u4ea7\u6743\u3002",odm_cta:"\u63d0\u4ea4\u8be2\u4ef7",
      stat2:"5000\u4e07+",stat2_l:"SSD\u4ea7\u91cf",stat3:"500+",stat3_l:"\u6d3b\u8dc3B2B\u5ba2\u6237",stat_units:"5000\u4e07+",stat_units_l:"\u53d1\u8d27\u91cf",stat_clients:"500+",stat_clients_l:"B2B\u5408\u4f5c\u4f19\u4f34",stat_countries:"50+",stat_countries_l:"\u51fa\u53e3\u56fd\u5bb6",
      prod_e100:"ORION E100 NVMe\u56fa\u6001\u786c\u76d8",prod_e100_s:"256GB/512GB/1TB/2TB | \u8bfb\u53d6\uff1a5000MB/s | \u5199\u5165\uff1a4500MB/s | M.2 2280",
      prod_e200:"ORION E200 Pro NVMe\u56fa\u6001\u786c\u76d8",prod_e200_s:"512GB/1TB/2TB/4TB | \u8bfb\u53d6\uff1a7450MB/s | \u5199\u5165\uff1a6900MB/s | DRAM\u7f13\u5b58\uff0cTLC NAND",
      prod_e300:"ORION E300 NVMe\u56fa\u6001\u786c\u76d8",prod_e300_s:"256GB/512GB/1TB | \u8bfb\u53d6\uff1a3500MB/s | \u5199\u5165\uff1a3000MB/s | \u9ad8\u6027\u4ef7\u6bd4",
      prod_s100:"ORION S100 SATA\u56fa\u6001\u786c\u76d8",prod_s200:"ORION S200 Pro SATA\u56fa\u6001\u786c\u76d8",prod_s200_s:"480GB/960GB/1.92TB/3.84TB | \u8bfb\u53d6\uff1a560MB/s | \u5199\u5165\uff1a530MB/s | \u4f01\u4e1a\u7ea7",
      prod_ddr5:"ORION DDR5\u5185\u5b58\u6a21\u7ec4",prod_ddr5_s:"8GB/16GB/32GB \u6bcf\u6a21\u7ec4 | \u9891\u7387\uff1a4800-7200MHz | XMP 3.0",
      prod_ddr4:"ORION DDR4\u5185\u5b58\u6a21\u7ec4",prod_ddr4_s:"4GB/8GB/16GB/32GB \u6bcf\u6a21\u7ec4 | \u9891\u7387\uff1a2666-3600MHz | 1.2V",
      prod_ind_sata:"\u5de5\u4e1a\u7ea7SATA\u56fa\u6001\u786c\u76d8",prod_ind_s:"32GB-512GB | M.2/mSATA/2.5\u82f1\u5bf8 | SLC/MLC/TLC\u9009\u9879",
      prod_industrial:"\u5de5\u4e1a\u7ea7",prod_oem:"\u5b9a\u5236OEM\u89e3\u51b3\u65b9\u6848",prod_oem_s:"\u5b9a\u5236\u6807\u7b7e\u3001\u96f6\u552e\u5305\u88c5\u3001\u56fa\u4ef6\u5b9a\u5236 | \u6309\u5355\u5b9a\u5236\u89c4\u683c | \u5305\u542b\u6240\u6709\u8ba4\u8bc1"
    }
  };

  var otherLangs = [
    {
      code:"es",label:"Espa\u00f1ol",flag:"\ud83c\uddea\ud83c\uddf8",
      t:{nav_home:"Inicio",nav_products:"Productos",nav_about:"Nosotros",nav_odm:"OEM/ODM",nav_blog:"Blog",nav_contact:"Contacto",nav_quote:"Email",hero_badge:"Partner OEM/ODM",hero_title:"Su Socio OEM de Confianza",hero_desc:"13+ a\u00f1os de experiencia OEM/ODM.",hero_quote:"Email",hero_products:"Capacidades OEM",cat_nvme:"NVMe SSD",cat_sata:"SATA SSD",cat_memory:"M\u00f3dulos de Memoria",cat_odm:"Servicios OEM/ODM",features_t:"Por Qu\u00e9 Elegir ORION",stats_t:"Cifras",process_t:"Proceso OEM",cta_btn:"Email",cta_t:"Listo para su Proyecto OEM/ODM?",cta_d:"Env\u00edenos un correo.",footer_products:"Productos",footer_company:"Empresa",footer_contact:"Contacto",section_products:"Categor\u00edas",section_products_t:"Soluciones Integrales",testimonial_t:"Testimonios",contact_hero:"Contacte a Ventas",contact_hero_desc:"Env\u00edenos un correo. Respondemos en 24h.",about_hero:"Acerca de ORION",about_hero_desc:"Su socio de confianza desde 2013.",prod_hero:"Nuestros Productos",prod_all:"Todos los Productos",prod_inquire:"Email",odm_hero:"Servicios OEM/ODM",odm_cta:"Enviar Consulta"}
    },
    {
      code:"fr",label:"Fran\u00e7ais",flag:"\ud83c\uddeb\ud83c\uddf7",
      t:{nav_home:"Accueil",nav_products:"Produits",nav_about:"A propos",nav_odm:"OEM/ODM",nav_blog:"Blog",nav_contact:"Contact",nav_quote:"Email",hero_badge:"Partenaire OEM/ODM",hero_title:"Votre Partenaire OEM",hero_desc:"13+ ans d'expertise OEM/ODM.",hero_quote:"Email",hero_products:"Capacit\u00e9s OEM",cat_nvme:"SSD NVMe",cat_sata:"SSD SATA",cat_memory:"Modules M\u00e9moire",cat_odm:"Services OEM/ODM",features_t:"Pourquoi Choisir ORION",stats_t:"Chiffres",process_t:"Processus OEM",cta_btn:"Email",cta_t:"Pr\u00eat pour votre Projet OEM/ODM?",cta_d:"Envoyez-nous un email.",footer_products:"Produits",footer_company:"Soci\u00e9t\u00e9",footer_contact:"Contact",section_products:"Cat\u00e9gories",section_products_t:"Solutions Compl\u00e8tes",testimonial_t:"T\u00e9moignages",contact_hero:"Contactez Ventes",contact_hero_desc:"Envoyez-nous un email. R\u00e9ponse sous 24h.",about_hero:"A propos d'ORION",about_hero_desc:"Votre partenaire depuis 2013.",prod_hero:"Nos Produits",prod_all:"Tous les Produits",prod_inquire:"Email",odm_hero:"Services OEM/ODM",odm_cta:"Soumettre"}
    },
    {
      code:"pt",label:"Portugu\u00eas",flag:"\ud83c\udde7\ud83c\uddf7",
      t:{nav_home:"In\u00edcio",nav_products:"Produtos",nav_about:"Sobre",nav_odm:"OEM/ODM",nav_blog:"Blog",nav_contact:"Contato",nav_quote:"Email",hero_badge:"Parceiro OEM/ODM",hero_title:"Seu Parceiro OEM",hero_desc:"13+ anos de experi\u00eancia OEM/ODM.",hero_quote:"Email",hero_products:"Capacidades OEM",cat_nvme:"SSD NVMe",cat_sata:"SSD SATA",cat_memory:"M\u00f3dulos de Mem\u00f3ria",cat_odm:"Servi\u00e7os OEM/ODM",features_t:"Por Que Escolher ORION",stats_t:"N\u00fameros",process_t:"Processo OEM",cta_btn:"Email",cta_t:"Pronto para seu Projeto OEM/ODM?",cta_d:"Envie-nos um email.",footer_products:"Produtos",footer_company:"Empresa",footer_contact:"Contato",section_products:"Categorias",section_products_t:"Solu\u00e7\u00f5es Completas",testimonial_t:"Depoimentos",contact_hero:"Contato Vendas",contact_hero_desc:"Envie-nos um email. Respondemos em 24h.",about_hero:"Sobre a ORION",about_hero_desc:"Seu parceiro desde 2013.",prod_hero:"Nossos Produtos",prod_all:"Todos os Produtos",prod_inquire:"Email",odm_hero:"Servi\u00e7os OEM/ODM",odm_cta:"Enviar"}
    },
    {
      code:"de",label:"Deutsch",flag:"\ud83c\udde9\ud83c\uddea",
      t:{nav_home:"Start",nav_products:"Produkte",nav_about:"\u00dcber uns",nav_odm:"OEM/ODM",nav_blog:"Blog",nav_contact:"Kontakt",nav_quote:"E-Mail",hero_badge:"OEM/ODM Partner",hero_title:"Ihr OEM-Partner",hero_desc:"13+ Jahre OEM/ODM-Erfahrung.",hero_quote:"E-Mail",hero_products:"OEM-F\u00e4higkeiten",cat_nvme:"NVMe SSD",cat_sata:"SATA SSD",cat_memory:"Speichermodule",cat_odm:"OEM/ODM Dienstleistungen",features_t:"Warum ORION W\u00e4hlen",stats_t:"Zahlen",process_t:"OEM-Prozess",cta_btn:"E-Mail",cta_t:"Bereit f\u00fcr Ihr OEM/ODM-Projekt?",cta_d:"E-Mail senden.",footer_products:"Produkte",footer_company:"Unternehmen",footer_contact:"Kontakt",section_products:"Kategorien",section_products_t:"Komplettl\u00f6sungen",testimonial_t:"Referenzen",contact_hero:"Verkauf Kontaktieren",contact_hero_desc:"E-Mail senden. Antwort in 24h.",about_hero:"\u00dcber ORION",about_hero_desc:"Ihr Partner seit 2013.",prod_hero:"Unsere Produkte",prod_all:"Alle Produkte",prod_inquire:"E-Mail",odm_hero:"OEM/ODM Dienstleistungen",odm_cta:"Anfrage Senden"}
    },
    {
      code:"nl",label:"Nederlands",flag:"\ud83c\uddf3\ud83c\uddf1",
      t:{nav_home:"Home",nav_products:"Producten",nav_about:"Over ons",nav_odm:"OEM/ODM",nav_blog:"Blog",nav_contact:"Contact",nav_quote:"E-mail",hero_badge:"OEM/ODM Partner",hero_title:"Uw OEM-Partner",hero_desc:"13+ jaar OEM/ODM-ervaring.",hero_quote:"E-mail",hero_products:"OEM-Mogelijkheden",cat_nvme:"NVMe SSD",cat_sata:"SATA SSD",cat_memory:"Geheugenmodules",cat_odm:"OEM/ODM Diensten",features_t:"Waarom ORION Kiezen",stats_t:"Cijfers",process_t:"OEM-Proces",cta_btn:"E-mail",cta_t:"Klaar voor uw OEM/ODM Project?",cta_d:"E-mail ons.",footer_products:"Producten",footer_company:"Bedrijf",footer_contact:"Contact",section_products:"Categorie\u00ebn",section_products_t:"Complete Oplossingen",testimonial_t:"Getuigenissen",contact_hero:"Verkoop Contact",contact_hero_desc:"E-mail ons. Antwoord in 24u.",about_hero:"Over ORION",about_hero_desc:"Uw partner sinds 2013.",prod_hero:"Onze Producten",prod_all:"Alle Producten",prod_inquire:"E-mail",odm_hero:"OEM/ODM Diensten",odm_cta:"Aanvraag Indienen"}
    },
    {
      code:"it",label:"Italiano",flag:"\ud83c\uddee\ud83c\uddf9",
      t:{nav_home:"Home",nav_products:"Prodotti",nav_about:"Chi siamo",nav_odm:"OEM/ODM",nav_blog:"Blog",nav_contact:"Contatti",nav_quote:"Email",hero_badge:"Partner OEM/ODM",hero_title:"Il Tuo Partner OEM",hero_desc:"13+ anni di esperienza OEM/ODM.",hero_quote:"Email",hero_products:"Capacit\u00e0 OEM",cat_nvme:"SSD NVMe",cat_sata:"SSD SATA",cat_memory:"Moduli di Memoria",cat_odm:"Servizi OEM/ODM",features_t:"Perch\u00e9 Scegliere ORION",stats_t:"Numeri",process_t:"Processo OEM",cta_btn:"Email",cta_t:"Pronto per il tuo Progetto OEM/ODM?",cta_d:"Inviaci una email.",footer_products:"Prodotti",footer_company:"Azienda",footer_contact:"Contatti",section_products:"Categorie",section_products_t:"Soluzioni Complete",testimonial_t:"Testimonianze",contact_hero:"Contatta Vendite",contact_hero_desc:"Inviaci una email. Rispondiamo in 24h.",about_hero:"Chi \u00e8 ORION",about_hero_desc:"Il tuo partner dal 2013.",prod_hero:"I Nostri Prodotti",prod_all:"Tutti i Prodotti",prod_inquire:"Email",odm_hero:"Servizi OEM/ODM",odm_cta:"Invia Richiesta"}
    }
  ];

  // Deep merge translations for each language
  otherLangs.forEach(function(lang) {
    t[lang.code] = {};
    // Start with English as base
    Object.keys(t.en).forEach(function(k) { t[lang.code][k] = t.en[k]; });
    // Override with language-specific translations
    Object.keys(lang.t).forEach(function(k) { t[lang.code][k] = lang.t[k]; });
  });

  window.switchLang = function(l) {
    if (!t[l]) return;
    sl(l);
    var d = t[l] || {};
    document.querySelectorAll("[data-i]").forEach(function(el) {
      var k = el.getAttribute("data-i");
      if (d[k] !== undefined) el.textContent = d[k];
    });
    document.querySelectorAll(".lang-item").forEach(function(a) {
      a.classList.toggle("active", a.getAttribute("data-lang") === l);
    });
  };

  document.addEventListener("DOMContentLoaded", function() {
    var ls = document.getElementById("langSelector");
    if (!ls) return;
    var cur = gl();
    var items = [
      {c:"en",f:"\ud83c\uddec\ud83c\udde7",l:"English"},
      {c:"zh",f:"\ud83c\udde8\ud83c\uddf3",l:"\u4e2d\u6587"},
      {c:"es",f:"\ud83c\uddea\ud83c\uddf8",l:"Espa\u00f1ol"},
      {c:"fr",f:"\ud83c\uddeb\ud83c\uddf7",l:"Fran\u00e7ais"},
      {c:"pt",f:"\ud83c\udde7\ud83c\uddf7",l:"Portugu\u00eas"},
      {c:"de",f:"\ud83c\udde9\ud83c\uddea",l:"Deutsch"},
      {c:"nl",f:"\ud83c\uddf3\ud83c\uddf1",l:"Nederlands"},
      {c:"it",f:"\ud83c\uddee\ud83c\uddf9",l:"Italiano"}
    ];
    var html = '<div class="lang-hover"><button class="lang-btn">\ud83c\udf10</button><div class="lang-dropdown-content">';
    items.forEach(function(item) {
      html += '<a class="lang-item' + (item.c === cur ? ' active' : '') + '" onclick="switchLang(\'' + item.c + '\')" data-lang="' + item.c + '">' + item.f + ' ' + item.l + '</a>';
    });
    html += '</div></div>';
    ls.innerHTML = html;
    switchLang(cur);
  });
})();
