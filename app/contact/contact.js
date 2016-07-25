'use strict';

angular.module('catoctinApp.contact', [ 'ngRoute' ]).config(
    [ '$routeProvider', function($routeProvider) {
      $routeProvider.when('/contact', {
        templateUrl : 'contact/contact.html',
        controller : 'ContactCtrl'
      });
    } ]).controller('ContactCtrl', [ function() {
} ]);