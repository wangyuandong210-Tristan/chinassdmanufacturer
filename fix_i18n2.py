with open('js/i18n.js', 'r', encoding='utf-8') as f:
    c = f.read()
de = ',de:{"nav_home":"Start","nav_products":"Produkte","nav_about":"\u00dcber uns","nav_odm":"OEM/ODM","nav_blog":"Blog","nav_contact":"Kontakt","nav_quote":"E-Mail","prod_hero":"Unser Sortiment","about_hero":"\u00dcber ORION","odm_hero":"OEM/ODM Dienstleistungen","contact_hero":"Kontakt","cta_btn":"E-Mail senden"},nl:{"nav_home":"Home","nav_products":"Producten","nav_about":"Over ons","nav_odm":"OEM/ODM","nav_blog":"Blog","nav_contact":"Contact","nav_quote":"E-mail","prod_hero":"Ons assortiment","about_hero":"Over ORION","odm_hero":"OEM/ODM Diensten","contact_hero":"Contact","cta_btn":"E-mail sturen"},it:{"nav_home":"Home","nav_products":"Prodotti","nav_about":"Chi siamo","nav_odm":"OEM/ODM","nav_blog":"Blog","nav_contact":"Contatto","nav_quote":"Email","prod_hero":"I nostri prodotti","about_hero":"Chi siamo","odm_hero":"Servizi OEM/ODM","contact_hero":"Contatto","cta_btn":"Invia email"}'
pt_end = c.index('pt: {')
close = c.index('}', pt_end) + 1
c = c[:close] + de + c[close:]
new_en = ',"feat3_t":"Black 10-Layer PCB","feat3_d":"Premium quality boards","feat4_t":"Complete Certification","feat4_d":"CE, FCC, ROHS, REACH","feat5_t":"Quality Assurance","feat5_d":"100% burn-in test, 3-year warranty","feat6_t":"Flexible MOQ","feat6_d":"From 100 units, trial orders welcome","prod_e100_s":"256GB-2TB, 5000MB/s","prod_e200_s":"512GB-4TB, 7450MB/s","prod_e300_s":"256GB-1TB, Budget","prod_s100_s":"120GB-1.92TB, 550MB/s","prod_s200_s":"480GB-3.84TB, Enterprise","prod_ddr5_s":"8-32GB, DDR5-7200","prod_ddr4_s":"4-32GB, DDR4-3600","prod_ind_s":"32GB-512GB, Industrial","prod_oem_s":"Custom OEM/ODM","about_story_t":"Our Story","about_story1":"Industry since 2013","about_story2":"SSD research and manufacturing","about_story3":"Global OEM/ODM partner","odm_white_label":"White label OEM","odm_custom":"Custom ODM design","odm_joint":"Joint development","trust_factory":"Visit Our Factory","trust_docs":"Full Documentation","trust_comm":"Direct Communication","cert_ce":"CE","cert_fcc":"FCC","cert_rohs":"ROHS","cert_reach":"REACH","cert_iso":"ISO 9001","cert_ukca":"UKCA",'
en_end = c.index('"lang_pt"')
close_en = c.index('}', en_end)
c = c[:close_en] + new_en + c[close_en:]
with open('js/i18n.js', 'w', encoding='utf-8') as f:
    f.write(c)
print('Done')
