'use strict';

// The Package is past automatically as first parameter
module.exports = function(Review, app, auth, database) {

    app.get('/review/example/anyone', function(req, res, next) {
        res.send('Anyone can access this');
    });

    app.get('/review/example/auth', auth.requiresLogin, function(req, res, next) {
        res.send('Only authenticated users can access this');
    });

    app.get('/review/example/admin', auth.requiresAdmin, function(req, res, next) {
        res.send('Only users with Admin role can access this');
    });

    app.get('/review/example/render', function(req, res, next) {
        Review.render('index', {
            package: 'review'
        }, function(err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });
};
