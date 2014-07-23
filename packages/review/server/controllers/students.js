'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'), // importar libreria Mongoose
    Student = mongoose.model('Student'),
    _ = require('lodash');


/**
 * Find student by id
 */
exports.student = function(req, res, next, id) {
    Student.load(id, function(err, student) {
        if (err) return next(err);
        if (!student) return next(new Error('Failed to load student ' + id));
        req.student = student;
        next();
    });
};

/**
 * Create an student
 */
exports.create = function(req, res) {
    var student = new Student(req.body);
    student.user = req.user;

    student.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                student: student
            });
        } else {
            res.jsonp(student);
        }
    });
};

/**
 * Update an student
 */
exports.update = function(req, res) {
    var student = req.student;
    
    student = _.extend(student, req.body);

    student.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                student: student
            });
        } else {
            res.jsonp(student);
        }
    });
};

/**
 * Delete an student
 */
exports.destroy = function(req, res) {
    var student = req.student;

    student.remove(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                student: student
            });
        } else {
            res.jsonp(student);
        }
    });
};

/**
 * Show an student
 */
exports.show = function(req, res) {
    res.jsonp(req.student);
};

/**
 * List of Students
 */
exports.all = function(req, res) {
    Student.find().sort('-created').populate('user', 'name username').exec(function(err, students) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(students);
        }
    });
};
