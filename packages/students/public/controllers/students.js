'use strict';

angular.module('mean.students')
    .controller('StudentController', [
        '$scope', 
        '$location',
        '$state',
        '$stateParams',
        'Global', 
        'Students',
        'Restangular',
    function($scope, $location,  $state, $stateParams, Global, Students, Restangular) {
        
        $scope.global = Global;
        $scope.student = {};

        Students.getList().then(function(students) {
            $scope.students = students;
        });

        $scope.create = function() {
           Students.post($scope.student).then(function (student) {
               $state.go('all students');
           })
        };

        $scope.find = function() {
          
        };

        $scope.findOne = function  () {
            var studentId = $stateParams.studentId;
            Students.one(studentId).get().then(function (student) {
                $scope.student = student;
            });
        }

        $scope.update = function () {
            $scope.student.customPUT($scope.student, $scope.student._id);
            $state.go('all students');    
        };

        $scope.predicate = '-code';
    }
]);
