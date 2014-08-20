'use strict';

angular.module('mean.students').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider
        
        .state('mentorStudent', {
            url: '/students/mentor',
            templateUrl: 'students/views/mentorstudent.html'
        })
        ;
    }
]);
