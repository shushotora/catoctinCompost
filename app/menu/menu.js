'use strict';

angular.module('catoctinApp.menu', []).controller('menuCtrl',
    function($scope, $location) {
      $scope.path = '';

      $scope.$watch(function() {
        $scope.path = $location.path();
        return $location.path();
      }, function(value) {
      });

      $scope.isCurrentPath = function(loc) {
        if ($scope.path.startsWith(loc)) {
          return 1;
        }
        return 0;
      }
    });