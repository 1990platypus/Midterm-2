angular.module('product', [])
.controller('MainCtrl', [
  '$scope','$http',
  function($scope,$http){
    $scope.products = [];
    $scope.inventory = [];
    $scope.addComment = function() {
      var newproduct = {Name:$scope.formContent,upvotes:0};
      $scope.formContent='';
      $http.post('/product', newproduct).success(function(data){
        $scope.products.push(data);
      });
    };
    $scope.upvote = function(product) {
      return $http.put('/product/' + product._id + '/upvote')
        .success(function(data){
          console.log("upvote worked");
          product.upvotes = data.upvotes;
        });
    };
	$scope.incrementUpvotes = function(product) {
	  $scope.upvote(product);
    };
    $scope.getAll = function() {
      return $http.get('/product').success(function(data){
        angular.copy(data, $scope.products);
      });
    };
    $scope.getAll();
    $scope.delete = function(product) {
      $http.delete('/product/' + product._id )
        .success(function(data){
          console.log("delete worked");
      $scope.getAll();
        });
    };
  }
]);
