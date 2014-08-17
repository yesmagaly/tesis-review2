'use strict';

angular.module('mean.meetings').controller('MeetingsController', ['$scope', 'Global', 'Meetings',
    function($scope, Global, Meetings) {
        $scope.global = Global;
        $scope.package = {
            name: 'meetings'
        };
    }
]);
