angular.module('MainCtrl', []).controller('MainController', ['$scope', '$http', function($scope, $http) {

    $scope.products = [];
    $http.get("/api/v1/productsJSON")
        .then(function(response) {console.log(response.data);$scope.products = response.data;});

}]);
