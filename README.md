# Youtube Music Downloader::

### npm::
Gonna need npm,
you can download it [here](https://nodejs.org/en/)

Then check if path is installed.

    npm -v

### todo::

Clone the code

    git clone https://github.com/Noksit/Music.git

Go into dir

    cd Music

Install dependencies

    npm install

Start

    npm start

Done !

Now you can go on [http://localhost:8001](http://localhost:8001)

Downloaded music will be stored into ./output folder

### Configuration::

You can change path for output

    ./api/controller/apiController.js // line 8

You can change port

    ./server.js // line 6


### Packages

           {
              "cors": "^2.8.5",
              "express": "^4.17.1",
              "ffmpeg-static": "^2.5.0",
              "jade": "^1.11.0",
              "youtube-mp3-downloader": "^0.6.2"
            }