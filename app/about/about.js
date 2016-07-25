'use strict';

angular.module('catoctinApp.about', [ 'ngRoute' ]).config(
    [ '$routeProvider', function($routeProvider) {
      $routeProvider.when('/about', {
        templateUrl : 'about/about.html',
        controller : 'AboutCtrl'
      });
    } ]).controller('AboutCtrl', [ function() {
} ]);