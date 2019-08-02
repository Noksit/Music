'use strict';
let YoutubeMp3Downloader = require('youtube-mp3-downloader');

exports.download = function (req, res) {
    let YD = new YoutubeMp3Downloader({
        "outputPath": "output",    // Where should the downloaded and encoded files be stored?
        "youtubeVideoQuality": "highest",       // What video quality should be used?
    });
    let id = req.params.id;
    console.log("Requete recue pour :: " + id);
    YD.download(id);
    YD.on("finished", function (err, data) {
        if (err) {
            console.log(err);
            res.json({
                Erreur: err
            })
        }
        console.log("Terminée");
        res.json({
            ID: data.videoId,
            Nom: data.videoTitle
        })
    });
};