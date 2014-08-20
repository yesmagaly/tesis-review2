'use strict';

angular.module('mean.panels').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider
        
        .state('panelMentor', {
            url: '/panels/mentor',
            templateUrl: 'panels/views/mentor.html'
        });

    }
]);


