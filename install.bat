@echo off
echo ========================================
echo Installazione Eleventy Site
echo ========================================
echo.

echo Verifica Node.js...
node --version
if errorlevel 1 (
    echo.
    echo ERRORE: Node.js non trovato!
    echo Scarica da: https://nodejs.org/
    pause
    exit /b 1
)

echo.
echo Installazione dipendenze npm...
call npm install

if errorlevel 1 (
    echo.
    echo ERRORE: npm install fallito.
    pause
    exit /b 1
)

echo.
echo ========================================
echo Installazione completata!
echo ========================================
echo.
echo Comandi disponibili:
echo   npm start       - Dev server
echo   npm run build   - Build produzione
echo.
pause
