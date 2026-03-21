@echo off
echo ========================================
echo Avvio Dev Server Eleventy
echo ========================================
echo.

REM Verifica se node_modules esiste
if not exist "node_modules" (
    echo ERRORE: Dipendenze non installate!
    echo Esegui prima install.bat
    echo.
    pause
    exit /b 1
)

echo Server disponibile su: http://localhost:8080
echo Premi CTRL+C per terminare
echo.
npm start

if errorlevel 1 (
    echo.
    echo ERRORE durante l'avvio del server.
    pause
)
