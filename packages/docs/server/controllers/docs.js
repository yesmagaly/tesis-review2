'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'), // importar libreria Mongoose
    Doc= mongoose.model('Doc'),
    _ = require('lodash');


/**
 * Find doc by id
 */
exports.doc = function(req, res, next, id) {
    Doc.load(id, function(err, doc) {
        if (err) return next(err);
        if (!doc) return next(new Error('Failed to load doc ' + id));
        req.doc = doc;
        next();
    });
};

/**
 * Create an doc
 */
exports.create = function(req, res) {
    var doc = new Doc(req.body);
    doc.user = req.user;

    doc.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                doc: doc
            });
        } else {
            res.jsonp(doc);
        }
    });
};

/**
 * Update an doc
 */
exports.update = function(req, res) {
    var doc = req.doc;

    doc = _.extend(doc, req.body);

    doc.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                doc: doc
            });
        } else {
            res.jsonp(doc);
        }
    });
};

/**
 * Delete an doc
 */
exports.destroy = function(req, res) {
    var doc = req.doc;

    doc.remove(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                doc: doc
            });
        } else {
            res.jsonp(doc);
        }
    });
};

/**
 * Show an doc
 */
exports.show = function(req, res) {
    res.jsonp(req.doc);
};

/**
 * List of Docs
 */
exports.all = function(req, res) {
    Doc.find().sort('-created').populate('user', 'name username').exec(function(err, docs) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(docs);
        }
    });
};
