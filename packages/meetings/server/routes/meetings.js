'use strict';

var meetings = require('../controllers/meetings');

// Article authorization helpers
var hasAuthorization = function(req, res, next) {
  if (!req.user.isAdmin && req.meeting.user.id !== req.user.id) {
    return res.send(401, 'User is not authorized');
  }
  next();
};

// The Package is past automatically as first parameter
module.exports = function(Meetings, app, auth, database) {
  
    app.route('/meetings')
      .get(meetings.all)
      .post(auth.requiresLogin, meetings.create);
    /*
    app.route('/meetings/:articleId')
      .get(meetings.show)
      .put(auth.requiresLogin, hasAuthorization, meetings.update)
      .delete(auth.requiresLogin, hasAuthorization, meetings.destroy);
    */
    app.get('/meetings/:calendarId', meetings.showCalendar);
    app.get('/meetings/:calendarId/:eventId',  meetings.showEvent);

    // Finish with setting up the articleId param
    app.param('articleId', meetings.article);

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
