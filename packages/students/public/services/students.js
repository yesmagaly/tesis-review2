
  'use strict';

//Agreements service used for articles REST endpoint
angular.module('mean.students')
  // Factory  Projects
  .service('Students', ['Restangular', function(Restangular) {
    return Restangular.service('students');
  }])
