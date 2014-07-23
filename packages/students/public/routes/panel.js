'use strict';

angular.module('mean.students').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider
        
        .state('home', {
            url: '/',
            templateUrl: 'students/views/panel.html'
        });
    }
]);
