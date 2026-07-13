=== chinassdmanufacturer.com 部署指南 ===

第1步：推送代码到 GitHub（运行 deploy.bat 即可）
   或者在 PowerShell 里运行：
     cd C:\Users\刘斌\Documents\Codex\2026-07-13\z\chinassdmanufacturer
     git push -u origin master

第2步：去 Cloudflare 部署
   注册 cloudflare.com 免费账号
   添加域名 chinassdmanufacturer.com
   域名注册商处改 Nameserver
   Cloudflare Pages → 连接 GitHub → 选择仓库

第3步：提交给 Google 收录
   search.google.com/search-console 添加网站
   提交 sitemap.xml
