'use strict';

angular.module('mean.panels').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('panels example page', {
            url: '/panels/example',
            templateUrl: 'panels/views/index.html'
        });
    }
]);
