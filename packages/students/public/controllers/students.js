'use strict';

angular.module('mean.students')
    .controller('StudentController', [
        '$scope', 
        'Global', 
        '$state',
        '$stateParams',
        'Students',
        'Restangular',
    function($scope, Global, $state, $stateParams, Students, Restangular) {
        
        $scope.global = Global;
        

        $scope.create = function() {
           Students.post($scope.student).then(function (student) {
               $state.go('all students');
           })
        };

        $scope.find = function() {
            Students.getList().then(function(students) {
                $scope.students = students;
            });
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

        $scope.orderByValue = function (val) {
            $scope.filterSelected = val;
        }

    }
]);
