@echo off
start "Sito in anteprima" cmd /k npm start
start /b cmd /c "timeout /t 5 /nobreak >nul && start http://localhost:8080"
code .
