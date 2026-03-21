@echo off
chcp 65001 >nul
cls

:MENU
echo ======================================
echo       AGGIORNAMENTO SITO WEB
echo ======================================
echo.
echo  Premi INVIO per aggiornare il sito
echo  Premi Q + INVIO per uscire
echo.
set SCELTA=
set /p SCELTA="  Scelta: "

if /i "%SCELTA%"=="q" goto FINE

:AGGIORNA
echo.
echo  Aggiornamento in corso, attendere...
echo.
git add .
git commit -m "update"
git push

echo.
echo ======================================
echo       SITO AGGIORNATO!
echo ======================================
echo.
pause
goto MENU

:FINE
exit
