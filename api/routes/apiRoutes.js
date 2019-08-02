'use strict';
module.exports = function (app) {
    let downloader = require('../controller/apiController');
    app.route('/download/:id')
        .get(downloader.download);


    app.route('/').get(
        function (req, res) {
            res.render('home', {
                title: 'Welcome'
            });
        });
};
