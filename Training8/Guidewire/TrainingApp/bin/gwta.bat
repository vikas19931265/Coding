@echo off
TITLE TrainingApp 8.0.0 GA E19(CMD)
call ant -f "%~dp0\..\modules\ant\build.xml" %*
