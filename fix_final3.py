with open('js/i18n.js', 'r', encoding='utf-8') as f:
    c = f.read()
new_keys = ',"feat3_t":"Black 10-Layer PCB","feat3_d":"Premium quality boards","feat4_t":"Complete Certification","feat4_d":"CE, FCC, ROHS, REACH","feat5_t":"Quality Assurance","feat5_d":"100% burn-in test, 3-year warranty","feat6_t":"Flexible MOQ","feat6_d":"From 100 units, trial orders welcome","prod_e100_s":"256GB-2TB, 5000MB/s","prod_e200_s":"512GB-4TB, 7450MB/s","prod_e300_s":"256GB-1TB, Budget","prod_s100_s":"120GB-1.92TB, 550MB/s","prod_s200_s":"480GB-3.84TB, Enterprise","prod_ddr5_s":"8-32GB, DDR5-7200","prod_ddr4_s":"4-32GB, DDR4-3600","prod_ind_s":"32GB-512GB, Industrial","prod_oem_s":"Custom OEM/ODM","about_story_t":"Our Story","about_story1":"Industry since 2013","about_story2":"SSD R&amp;D and manufacturing","about_story3":"Global OEM/ODM partner","odm_white_label":"White label OEM","odm_custom":"Custom ODM design","odm_joint":"Joint development","trust_factory":"Visit Our Factory","trust_docs":"Full Documentation","trust_comm":"Direct Communication","cert_ce":"CE","cert_fcc":"FCC","cert_rohs":"ROHS","cert_reach":"REACH","cert_iso":"ISO 9001","cert_ukca":"UKCA"'
c = c.replace("},zh:{", new_keys + "},zh:{", 1)
zh_keys = ',"feat3_t":"\u9ed1\u827210\u5c42PCB\u677f","feat3_d":"\u9ad8\u54c1\u8d28\u7535\u8def\u677f","feat4_t":"\u5b8c\u6574\u8ba4\u8bc1\u4f53\u7cfb","trust_factory":"\u53c2\u89c2\u5de5\u5382","trust_docs":"\u5b8c\u6574\u6587\u6863","trust_comm":"\u76f4\u63a5\u6c9f\u901a"'
c = c.replace("},es:{", zh_keys + "},es:{", 1)
c = c.replace("R&amp;D", "R&D")
with open('js/i18n.js', 'w', encoding='utf-8') as f:
    f.write(c)
print('Done')
