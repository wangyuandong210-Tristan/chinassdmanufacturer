@echo off
echo ========================================
echo   Deploying chinassdmanufacturer.com to GitHub
echo ========================================
echo.
cd /d "%~dp0"
echo This will push the website files to:
echo   https://github.com/wangyuandong210-Tristan/chinassdmanufacturer.git
echo.
echo If your browser asks for login, enter your GitHub credentials.
echo (Username: wangyuandong210-Tristan, Password: use a GitHub token)
echo.
pause
git push -u origin master
echo.
echo ========================================
echo   Deployment complete!
echo   Next step: Go to cloudflare.com to deploy
echo ========================================
pause
