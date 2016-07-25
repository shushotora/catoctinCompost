'use strict';

angular.module(
    'catoctinApp',
    [ 'ngRoute', 'ipsum', 'catoctinApp.home', 'catoctinApp.menu',
        'catoctinApp.products', 'catoctinApp.productInfo', 'catoctinApp.about',
        'catoctinApp.contact' ]).config(
    [ '$locationProvider', '$routeProvider', 
        function($locationProvider, $routeProvider) {
          // $locationProvider.hashPrefix('!');

          $routeProvider.otherwise({
            redirectTo : '/home'
          });
        } ]);