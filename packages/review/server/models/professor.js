'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Article Schema
 */
var ProfessorSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    names: {
        type: String,
        default: '',
        trim: true
    },
    lastNames: {
        type: String,
        default: '',
        trim: true
    },
    document: {
        type: Number,
        default: '',
        trim: true
    },
    code: {
        type: Number,
        default: '',
        trim: true
    },
    email: {
        type: String,
        default: '',
        trim: true
    },
    address: {
        type: String,
        default: '',
        trim: true
    },   
    telephone: {
        type: Number,
        default: '',
        trim: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

/**
 * Validations
 */
ProfessorSchema.path('names').validate(function(title) {
    return title.length;
}, 'Este  campo es obligatorio');

ProfessorSchema.path('lastNames').validate(function(title) {
    return title.length;
}, 'Este  campo es obligatorio');
ProfessorSchema.path('document').validate(function(title) {
    return title.length;
}, 'Este  campo es obligatorio');

ProfessorSchema.path('code').validate(function(title) {
    return title.length;
}, 'Este  campo es obligatorio');

ProfessorSchema.path('email').validate(function(title) {
    return title.length;
}, 'Este  campo es obligatorio');



/**
 * Statics
 */
ProfessorSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('user', 'name username').exec(cb);
};

mongoose.model('Professor', ProfessorSchema);
