
  'use strict';

//Agreements service used for articles REST endpoint
angular.module('mean.students')
  // Factory  Projects
  .factory('Professors', ['Restangular', function(Restangular) {
    return Restangular.service('professors');
  }])
