'use strict';

angular.module('mean.meetings').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('meetings example page', {
            url: '/meetings/example',
            templateUrl: 'meetings/views/index.html'
        });
    }
]);
