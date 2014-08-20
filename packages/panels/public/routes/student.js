'use strict';

angular.module('mean.panels').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider
        
        .state('panelStudent', {
            url: '/panels/student',
            templateUrl: 'panels/views/student.html'
        });

    }
]);


