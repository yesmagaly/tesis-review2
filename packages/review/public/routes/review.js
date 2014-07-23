'use strict';

angular.module('mean.review').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('review example page', {
            url: '/review/example',
            templateUrl: 'review/views/index.html'
        });
    }
]);
