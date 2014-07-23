'use strict';

angular.module('mean.professors')
    .controller('ProfessorController', [
        '$scope',
        '$location',
        '$state',
        'Global',
        'Professors',
        '$stateParams',
    function($scope, $location,  $state, Global, Professors, $stateParams) {

        $scope.global = Global;

        $scope.professor = {};

        $scope.create = function() {
           Professors.post($scope.professor).then(function (professor) {
               $state.go('all professor');
           })
        };

        $scope.find = function() {
            Professors.getList().then(function(professors) {
                $scope.professors = professors;
            });
        };

         $scope.findOne = function  () {
            var professorId = $stateParams.professorId;
            Professors.one(professorId).get().then(function (professor) {
                $scope.professor = professor
            });
        }

        $scope.update = function () {
            $scope.professor.customPUT($scope.professor, $scope.professor._id);
            $state.go('all professor');    
        };
    }
]);
