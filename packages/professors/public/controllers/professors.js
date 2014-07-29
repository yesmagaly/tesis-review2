'use strict';

angular.module('mean.professors')
    .controller('ProfessorController', [
        '$scope', 
        'Global', 
        '$state',
        '$stateParams',
        'Professors',
        'Restangular',
        'ProfessorsLocal',
    function($scope, Global, $state, $stateParams, Professors, Restangular, ProfessorsLocal) {

        $scope.global = Global;

        $scope.professor = {};

        $scope.create = function() {
           Professors.post($scope.professor).then(function (professor) {
               $state.go('all professor');
           })
        };

        $scope.find = function() {
            Professors.getList().then(function(professors) {
                ProfessorsLocal.set(professors);
              $scope.professors = ProfessorsLocal.all();
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
          $scope.remove = function(id) {
          
            var professor = ProfessorsLocal.get(id);
            professor.customDELETE(id).then(function () {
              ProfessorsLocal.remove(id);
            });
          
        };
        $scope.orderByValue = function (val) {
            $scope.filterSelected = val;
        }

        $scope.predicate = '-code';
    }
]);
