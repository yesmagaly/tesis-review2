'use strict';

angular.module('mean.panels').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider
        
        .state('home', {
            url: '/',
            templateUrl: 'panels/views/coordinador.html'
        });
    }
]);
