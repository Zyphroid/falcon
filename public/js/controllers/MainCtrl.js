angular.module('MainCtrl', []).controller('MainController', ['$scope', '$http', function($scope, $http) {

    $scope.products = [];

    //calling the delete route
    $scope.deleteProduct = function (productId) {(
        $http.delete("/api/v1/product/" + productId)

            //after delete then update the page without refreshing
            .then(function(response) {$scope.products = response.data;})
    )};
    $http.get("/api/v1/products")
        .then(function(response) {console.log(response.data);$scope.products = response.data;});

}]);
