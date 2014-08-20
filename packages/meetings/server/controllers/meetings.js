'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Article = mongoose.model('Article'),
  gcal = require('google-calendar'),
  google = require('googleapis'),
  _ = require('lodash');


/**
 * Find article by id
 */
exports.article = function(req, res, next, id) {
  Article.load(id, function(err, article) {
    if (err) return next(err);
    if (!article) return next(new Error('Failed to load article ' + id));
    req.article = article;
    next();
  });
};

/**
 * Create an article
 */
exports.create = function(req, res) {
  var article = new Article(req.body);
  article.user = req.user;

  article.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot save the article'
      });
    }
    res.json(article);

  });
};

/**
 * Update an article
 */
exports.update = function(req, res) {
  var article = req.article;

  article = _.extend(article, req.body);

  article.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot update the article'
      });
    }
    res.json(article);

  });
};

/**
 * Delete an article
 */
exports.destroy = function(req, res) {
  var article = req.article;

  article.remove(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot delete the article'
      });
    }
    res.json(article);

  });
};

/**
 * Show an article
 */
exports.show = function(req, res) {
  res.json(req.article);
};

/**
 * List of Articles
 */
exports.all = function(req, res) {
  // Verify existing access-auth
  if(!req.session.access_token) return res.redirect('/auth');

  /*
  debugger;
  
  var calendar = google.calendar('v3');
  
  calendar.calendarList.list(function(err, data) {
    if(err) {
      return res.send(500,err);
    }
    return res.send(data);
  });
  */
  
  gcal(req.session.access_token).calendarList.list(function(err, data) {
    debugger;
    if(err) {
      return res.send(500,err);
    }
    return res.send(data);
  });
  
  /*
  Article.find().sort('-created')
    .populate('user', 'name username')
    .exec(function(err, articles) {
      if (err) {
        return res.json(500, {
          error: 'Cannot list the articles'
        });
      }
      res.json(articles);

    });
  */
};


exports.showCalendar = function(req, res){
  
  if(!req.session.access_token) return res.redirect('/auth');
  
  //Create an instance from accessToken
  var accessToken     = req.session.access_token;
  var calendarId      = req.params.calendarId;
  
  gcal(accessToken).events.list(calendarId, {maxResults:1}, function(err, data) {
    if(err) return res.send(500,err);
    
    console.log(data)
    if(data.nextPageToken){
      gcal(accessToken).events.list(calendarId, {maxResults:1, pageToken:data.nextPageToken}, function(err, data) {
        console.log(data.items)
      })
    }
    
    
    return res.send(data);
  });
};


exports.showEvent =  function(req, res){
  
  if(!req.session.access_token) return res.redirect('/auth');
  
  //Create an instance from accessToken
  var accessToken     = req.session.access_token;
  var calendarId      = req.params.calendarId;
  var eventId         = req.params.eventId;
  
  gcal(accessToken).events.get(calendarId, eventId, function(err, data) {
    if(err) return res.send(500,err);
    return res.send(data);
  });
};