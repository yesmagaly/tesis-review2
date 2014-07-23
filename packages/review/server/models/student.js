'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Article Schema
 */
var StudentSchema = new Schema({
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
StudentSchema.path('names').validate(function(names) {
    return names.length;
}, 'Este  campo es obligatorio');

StudentSchema.path('lastNames').validate(function(title) {
    return title.length;
}, 'Este  campo es obligatorio');
StudentSchema.path('document').validate(function(title) {
    return title.length;
}, 'Este  campo es obligatorio');

StudentSchema.path('code').validate(function(title) {
    return title.length;
}, 'Este  campo es obligatorio');

StudentSchema.path('email').validate(function(title) {
    return title.length;
}, 'Este  campo es obligatorio');



/**
 * Statics
 */
StudentSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('user', 'name username').exec(cb);
};

mongoose.model('Student', StudentSchema);
