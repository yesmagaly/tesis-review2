
  'use strict';

//Agreements service used for articles REST endpoint
angular.module('mean.docs')
  // Factory  Projects
  .service('Docs', ['Restangular', function(Restangular) {
    return Restangular.service('docs');
  }])

  // Factory  Local Projects
  .factory('DocsLocal', function() {
    var _docs = [];
    var _doc = {};
    
    return {
      all: function () {
        return _docs;
      },
      set: function (docs) {
        _docs = docs;
      },
      get: function (id) {
        var _result;
        _docs.forEach(function(doc, index) {
          if(doc._id == id) {
            _result = doc;
          };
        });
        
        console.log(_result);
        return _result;
      },
      add: function (doc) {
        _docs.splice(0, 0, doc);
      },
      remove: function (id) {
        _docs.forEach(function(doc, index) {
          if(doc._id == id) {
            _docs.splice(index, 1);
          };
        });
      },
      update: function(docUpdated) {
        _docs.forEach(function(doc, index) {
          if(doc._id == docUpdated._id) {
            _docs.splice(index, 1, docUpdated);
            currentRule = null;
          };
        });
      }
    };
  })
  ;