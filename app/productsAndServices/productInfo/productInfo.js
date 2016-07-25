'use strict';

angular.module('catoctinApp.productInfo', [ 'ngRoute' ]).config(
    [ '$routeProvider', function($routeProvider) {
      $routeProvider.when('/products/:productId', {
        templateUrl : 'productsAndServices/productInfo/productInfo.html',
        controller : 'ProductsInfoCtrl'
      });
    } ]).controller('ProductsInfoCtrl',
    [ '$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
      $scope.productId = $routeParams.productId;
      $http.get('productsAndServices/products.json').success(function(data) {
        angular.forEach(data, function(product) {
          if (product.id === $scope.productId) {
            $scope.product = product;
          }
        });
      });
      $scope.master = [];

      $scope.update = function(user) {
        angular.forEach(user, function(usr) {
          $scope.master.push({
            id : usr.fieldId,
            value : usr.fieldValue
          });
        })

        var request = $http({
          method : "post",
          url : 'productsAndServices/productInfo/sendMail.php',
          data : {
            email : 'shushotora@gmail.com',
            pass : 'foo'
          },
          headers : {
            'Content-Type' : 'application/x-www-form-urlencoded'
          }
        });

        /* Check whether the HTTP Request is successful or not. */
        request.success(function(data) {
          // document.getElementById("message").textContent = "You have login
          // successfully with email "
          // + data;
          console.log(data);
        });
      };

      $scope.reset = function() {
        $scope.user = {};
      };

      $scope.send = function() {

      }

      $scope.reset();
    } ])