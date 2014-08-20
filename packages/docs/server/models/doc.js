'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// -- Fields ---
// title
//created  date
//code-googleDrive

/**
 * Doc Schema
 */
 var DocSchema = new Schema({
 	created: {
 		type: Date,
 		default: Date.now
  	},
  	title: {
  		type: String,
  		default: '',
  		trim: true
  	},
  	code:{
  		type: String,
  		default: '',
  		trim: true
  	},
    area:{
      type: String,
      default: '',
      trim: true
    },
    student: {
      type: Schema.ObjectId,
      ref: 'Student'
    },
  	user: {
  		type: Schema.ObjectId,
  		ref: 'User'
  	}

 });

 /**
 *Validations
 */
 DocSchema.path('title').validate(function (title) {
 	return title.length;
 }, 'Este campo es obligatorio');
  DocSchema.path('code').validate(function (code) {
 	return code.length;
 }, 'Este campo es obligatorio');

 /**
 * Statics
*/
DocSchema.statics.load = function (id, cb) {
	this.findOne({
		_id: id
	}).populate('user', 'name username').exec(cb);
};
mongoose.model('Doc', DocSchema);