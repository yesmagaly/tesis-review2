'use strict';

angular.module('mean.professors').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider

        .state('professor example page', {
            url: '/professor/example',
            templateUrl: 'professors/views/index.html'
        })

        .state('create professor', {
            url: '/professors/create',
            templateUrl: 'professors/views/create.html'
        })

        .state('all professor', {
            url: '/professor',
            templateUrl: 'professors/views/list.html'
        })

        .state('edit professors',{
            url: '/professors/edit/:professorId',
            templateUrl: 'professors/views/edit.html'
        })
        ;
    }
]);
