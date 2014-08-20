'use strict';

angular.module('mean.panels')
	.controller('mentorPanelController', [
		'$scope',
		'Students',
		'Professors',
		'Docs',
		function($scope,Students, Professors, Docs){
			
			$scope.init = function () {
				// lista de estudiantes
				Students.getList().then(function (students) {
					$scope.students = students;
				});

				// Lista de mentores
				Professors.getList().then(function (professors) {
					$scope.professors = professors;
				})
				//Lista de documentos
				Docs.getList().then(function (docs) {
					$scope.docs = docs;
				})

			}
		
	}]);