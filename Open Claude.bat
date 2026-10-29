@echo off
rem Starts Claude Code with Remote Control in this folder: connect from the Claude mobile app or claude.ai/code
rem (session "portfolio"). Keep this window open; close it or press Ctrl+C to stop remote access.
cd /d "%~dp0"
claude remote-control --name portfolio
pause
