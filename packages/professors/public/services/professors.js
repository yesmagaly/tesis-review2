
  'use strict';

//Agreements service used for articles REST endpoint
angular.module('mean.professors')
  // Factory  Projects
  .factory('Professors', ['Restangular', function(Restangular) {
    return Restangular.service('professors');
  }])
