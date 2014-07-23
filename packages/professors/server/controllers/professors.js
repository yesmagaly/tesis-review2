'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'), // importar libreria Mongoose
    Professor = mongoose.model('Professor'),
    _ = require('lodash');


/**
 * Find professor by id
 */
exports.professor = function(req, res, next, id) {
    Professor.load(id, function(err, professor) {
        if (err) return next(err);
        if (!professor) return next(new Error('Failed to load professor ' + id));
        req.professor = professor;
        next();
    });
};

/**
 * Create an professor
 */
exports.create = function(req, res) {
    var professor = new Professor(req.body);
    professor.user = req.user;

    professor.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                professor: professor
            });
        } else {
            res.jsonp(professor);
        }
    });
};

/**
 * Update an professor
 */
exports.update = function(req, res) {
    var professor = req.professor;

    professor = _.extend(professor, req.body);

    professor.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                professor: professor
            });
        } else {
            res.jsonp(professor);
        }
    });
};

/**
 * Delete an professor
 */
exports.destroy = function(req, res) {
    var professor = req.professor;

    professor.remove(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                professor: professor
            });
        } else {
            res.jsonp(professor);
        }
    });
};

/**
 * Show an professor
 */
exports.show = function(req, res) {
    res.jsonp(req.professor);
};

/**
 * List of Professors
 */
exports.all = function(req, res) {
    Professor.find().sort('-created').populate('user', 'name username').exec(function(err, professors) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(professors);
        }
    });
};
