angular.module('MainCtrl', []).controller('MainController', ['$scope', '$http', function($scope, $http) {

    $scope.products = [];


    $scope.product = {
        'status': '',
        'scheduled': '',
        'image': ''
    };

    $scope.error = false;
    //loading is intended to be use for adding a css loader until the command is finished( not required at this level)
    $scope.loading = false;
    $scope.create = function(data) {
        $scope.loading = true;
        $http.post('/api/v1/product', data).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available

            //after delete then update the page without refreshing
            $scope.products = response.data;
            $scope.loading = false;

        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.

            //after delete then update the page without refreshing
            $scope.products = response.data;
            $scope.loading = false;
            $scope.error = true;
        })

    };

    //updating the product
    $scope.update = function(data) {
        $scope.loading = true;
        $http.put('/api/v1/product', data).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available

            //after delete then update the page without refreshing
            $scope.products = response.data;
            $scope.loading = false;
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.


            //after delete then update the page without refreshing
            $scope.products = response.data;
            $scope.loading = false;
            $scope.error = true;
        });
    };




    //calling the delete route
    $scope.deleteProduct = function (productId) {(
        $http.delete("/api/v1/product/" + productId)

            //after delete then update the page without refreshing
            .then(function(response) {$scope.products = response.data;})
    )};
    $http.get("/api/v1/products")
        .then(function(response) {console.log(response.data);$scope.products = response.data;});

}]);
