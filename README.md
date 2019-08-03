# Youtube Music Downloader::

### npm::
Gonna need npm,
you can download it [here](https://nodejs.org/en/)

Then check if path is installed.

    npm -v
    
### todo::

1.  Clone the code

        git clone https://github.com/Noksit/Music.git

2.  Go into dir

        cd Music

3.  Install dependencies

        npm install

4.  Start

        SET PATH=%PATH%;%cd%\node_modules\ffmpeg-static\bin\win32\x64

        npm start
        
    or

        start RunMe.bat
        

5.  Done !

Now you can go on [http://localhost:8001](http://localhost:8001)

Downloaded music will be stored into ./output folder

### configurations::

You can change path for output

    ./api/controller/apiController.js // line 8

You can change port

    ./server.js // line 6
