'use strict';

// The Package is past automatically as first parameter
module.exports = function(Panels, app, auth, database) {

    app.get('/panels/example/anyone', function(req, res, next) {
        res.send('Anyone can access this');
    });

    app.get('/panels/example/auth', auth.requiresLogin, function(req, res, next) {
        res.send('Only authenticated users can access this');
    });

    app.get('/panels/example/admin', auth.requiresAdmin, function(req, res, next) {
        res.send('Only users with Admin role can access this');
    });

    app.get('/panels/example/render', function(req, res, next) {
        Panels.render('index', {
            package: 'panels'
        }, function(err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });
};
