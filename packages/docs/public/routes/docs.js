'use strict';

angular.module('mean.docs').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider
        
        .state('docs example page', {
            url: '/docs/example',
            templateUrl: 'docs/views/index.html'
        })
        
        .state('create doc', {
            url: '/docs/create',
            templateUrl: 'docs/views/create.html'
        })

        .state('all docs', {
            url: '/docs',
            templateUrl: 'docs/views/list.html'            
        })
        .state('edit docs',{
            url: '/docs/edit/:docId',
            templateUrl: 'docs/views/edit.html'
        })
        ;
    }
]);
