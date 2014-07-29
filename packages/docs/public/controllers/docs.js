'use strict';

angular.module('mean.docs')
    .controller('DocsController', [
        '$scope', 
        'Global', 
        '$state',
        '$stateParams',
        'Docs',
        'Restangular',
        'DocsLocal',
    function($scope, Global, $state, $stateParams, Docs, Restangular, DocsLocal) {
        
        $scope.global = Global;
        
        $scope.create = function(isValid) {
          var self = this;

          if (isValid) {

            var data = {
              title: this.title,
              code: this.code
            };

            Docs.post(data).then(function (category) {
              // Add category to factoory CategoriesLocal.
             DocsLocal.add(category);
              
              // Clear values.
              self.title = '';
              self.code = '';
              $state.go('all docs');
            });

          } else {
            $scope.submitted = true;
          }
        };


        $scope.find = function() {

        	debugger;
            Docs.getList().then(function(docs) {
                // Add all categories into the factory DocsLocal.
              DocsLocal.set(docs);
              console.log(docs);
              $scope.docs = DocsLocal.all();
              console.log($scope.docs);
            });
        };

        $scope.findOne = function  () {
            var docId = $stateParams.docId;
            Docs.one(docId).get().then(function (doc) {
                $scope.doc = doc;
            });
        }

        $scope.update = function () {
            $scope.doc.customPUT($scope.doc, $scope.doc._id);
            $state.go('all docs');    
        };

        $scope.remove = function(id) {
          
            var doc = DocsLocal.get(id);
            doc.customDELETE(id).then(function () {
              DocsLocal.remove(id);
            });
          
        };

        // Filters

        $scope.orderByValue = function (val) {
            $scope.filterSelected = val;
        }

        $scope.predicate = '-code';
    }
]);
