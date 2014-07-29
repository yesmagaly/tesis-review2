
  'use strict';

//Agreements service used for articles REST endpoint
angular.module('mean.professors')
  // Factory  Projects
  .factory('Professors', ['Restangular', function(Restangular) {
    return Restangular.service('professors');
  }])
  // Factory  Local Projects
  .factory('ProfessorsLocal', function() {
    var _professors = [];
    var _professor = {};
    
    return {
      all: function () {
        return _professors;
      },
      set: function (professors) {
        _professors = professors;
      },
      get: function (id) {
        var _result;
        _professors.forEach(function(professor, index) {
          if(professor._id == id) {
            _result = professor;
          };
        });
        
        console.log(_result);
        return _result;
      },
      add: function (professor) {
        _professors.splice(0, 0, professor);
      },
      remove: function (id) {
        _professors.forEach(function(professor, index) {
          if(professor._id == id) {
            _professors.splice(index, 1);
          };
        });
      },
      update: function(professorUpdated) {
        _professors.forEach(function(professor, index) {
          if(professor._id == professorUpdated._id) {
            _professors.splice(index, 1, professorUpdated);
            currentRule = null;
          };
        });
      }
    };
  })
  ;