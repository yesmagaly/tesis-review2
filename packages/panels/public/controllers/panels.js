'use strict';

angular.module('mean.panels').controller('PanelsController', ['$scope', 'Global', 'Panels',
    function($scope, Global, Panels) {
        $scope.global = Global;
        $scope.package = {
            name: 'panels'
        };
    }
]);
