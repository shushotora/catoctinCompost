'use strict';

angular.module('catoctinApp.products', [ 'ngRoute' ]).config(
    [ '$routeProvider', function($routeProvider) {
      $routeProvider.when('/products', {
        templateUrl : 'productsAndServices/productsAndServices.html',
        controller : 'ProductsCtrl'
      });
    } ]).controller('ProductsCtrl',
    [ '$scope', '$http', function($scope, $http) {
      $http.get('productsAndServices/products.json').success(function(data) {
        $scope.products = data;
      });
      $scope.orderProp = 'relevance';
    } ]);