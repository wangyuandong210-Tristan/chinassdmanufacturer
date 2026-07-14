with open('js/i18n.js', 'r', encoding='utf-8') as f:
    content = f.read()

new_en = ',"feat3_t":"Black 10-Layer PCB","feat3_d":"Premium quality boards","feat4_t":"Complete Certification","feat4_d":"CE, FCC, ROHS, REACH","feat5_t":"Quality Assurance","feat5_d":"100% burn-in test, 3-year warranty","feat6_t":"Flexible MOQ","feat6_d":"From 100 units","prod_e100_s":"256GB-2TB, 5000MB/s","prod_e200_s":"512GB-4TB, 7450MB/s","prod_e300_s":"256GB-1TB, Budget","prod_s100_s":"120GB-1.92TB, 550MB/s","prod_s200_s":"480GB-3.84TB, Enterprise","prod_ddr5_s":"8-32GB, DDR5-7200","prod_ddr4_s":"4-32GB, DDR4-3600","prod_ind_s":"32GB-512GB, Industrial","prod_oem_s":"Custom OEM/ODM","about_story_t":"Our Story","about_story1":"Industry since 2013","about_story2":"SSD R and D and manufacturing","about_story3":"Global OEM/ODM partner","odm_white_label":"White label OEM","odm_custom":"Custom ODM design","odm_joint":"Joint development"}'

pos = content.find('"lang_pt"')
close_pos = content.find('}', pos)
content = content[:close_pos] + new_en + content[close_pos:]

with open('js/i18n.js', 'w', encoding='utf-8') as f:
    f.write(content)
print('Done')
