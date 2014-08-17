'use strict';

// The Package is past automatically as first parameter
module.exports = function(Meetings, app, auth, database) {

    app.get('/meetings/example/anyone', function(req, res, next) {
        res.send('Anyone can access this');
    });

    app.get('/meetings/example/auth', auth.requiresLogin, function(req, res, next) {
        res.send('Only authenticated users can access this');
    });

    app.get('/meetings/example/admin', auth.requiresAdmin, function(req, res, next) {
        res.send('Only users with Admin role can access this');
    });

    app.get('/meetings/example/render', function(req, res, next) {
        Meetings.render('index', {
            package: 'meetings'
        }, function(err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });
};
