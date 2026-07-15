import subprocess, os
os.chdir("C:/Users/刘斌/Documents/Codex/2026-07-13/z/chinassdmanufacturer")
r = subprocess.run(["git", "show", "9bdf2d7:js/i18n.js"], capture_output=True)
c = r.stdout.decode("utf-8")

pt_start = c.index("pt:{")
depth = 1
pos = pt_start + 3
while depth > 0 and pos < len(c):
    if c[pos] == "{": depth += 1
    elif c[pos] == "}": depth -= 1
    pos += 1

de = ',de:{"nav_home":"Start","nav_products":"Produkte","nav_about":"\u00dcber uns","nav_odm":"OEM/ODM","nav_blog":"Blog","nav_contact":"Kontakt","nav_quote":"E-Mail","prod_hero":"Unser Sortiment"},nl:{"nav_home":"Home","nav_products":"Producten","nav_about":"Over ons","nav_odm":"OEM/ODM","nav_blog":"Blog","nav_contact":"Contact","nav_quote":"E-mail","prod_hero":"Ons assortiment"},it:{"nav_home":"Home","nav_products":"Prodotti","nav_about":"Chi siamo","nav_odm":"OEM/ODM","nav_blog":"Blog","nav_contact":"Contatto","nav_quote":"Email","prod_hero":"I nostri prodotti"}'
c = c[:pos] + de + c[pos:]

new_en = ',"feat3_t":"Black 10-Layer PCB","feat3_d":"Premium quality boards","feat4_t":"Complete Certification","feat4_d":"CE, FCC, ROHS, REACH","feat5_t":"Quality Assurance","feat5_d":"100% burn-in test, 3-year warranty","feat6_t":"Flexible MOQ","feat6_d":"From 100 units, trial orders welcome","prod_e100_s":"256GB-2TB, 5000MB/s","prod_e200_s":"512GB-4TB, 7450MB/s","prod_e300_s":"256GB-1TB, Budget","prod_s100_s":"120GB-1.92TB, 550MB/s","prod_s200_s":"480GB-3.84TB, Enterprise","prod_ddr5_s":"8-32GB, DDR5-7200","prod_ddr4_s":"4-32GB, DDR4-3600","prod_ind_s":"32GB-512GB, Industrial","prod_oem_s":"Custom OEM/ODM","about_story_t":"Our Story","about_story1":"Industry since 2013","about_story2":"SSD R&amp;D and manufacturing","about_story3":"Global OEM/ODM partner","odm_white_label":"White label OEM","odm_custom":"Custom ODM design","odm_joint":"Joint development","trust_factory":"Visit Our Factory","trust_docs":"Full Documentation","trust_comm":"Direct Communication","cert_ce":"CE","cert_fcc":"FCC","cert_rohs":"ROHS","cert_reach":"REACH","cert_iso":"ISO 9001","cert_ukca":"UKCA"'
c = c.replace("},zh:{", new_en + "},zh:{", 1)

zh_new = ',"feat3_t":"\u9ed1\u827210\u5c42PCB\u677f","feat3_d":"\u9ad8\u54c1\u8d28\u7535\u8def\u677f","feat4_t":"\u5b8c\u6574\u8ba4\u8bc1\u4f53\u7cfb","feat4_d":"CE/FCC/ROHS/REACH","feat5_t":"\u54c1\u8d28\u4fdd\u969c","feat5_d":"100%\u8001\u5316\u6d4b\u8bd5","feat6_t":"\u7075\u6d3b\u8d77\u8ba2\u91cf","feat6_d":"100\u7247\u8d77\u8ba2","trust_factory":"\u53c2\u89c2\u5de5\u5382","trust_docs":"\u5b8c\u6574\u6587\u6863","trust_comm":"\u76f4\u63a5\u6c9f\u901a"'
c = c.replace("},es:{", zh_new + "},es:{", 1)

c = c.replace("R&amp;D", "R&D")

with open("js/i18n.js", "w", encoding="utf-8") as f:
    f.write(c)
print("Done")
