ECHO %cd%\node_modules\ffmpeg-static\bin\win32\x64\ffmpeg.exe

SET PATH=%PATH%;%cd%\node_modules\ffmpeg-static\bin\win32\x64

ffmpeg --version

cls

npm start