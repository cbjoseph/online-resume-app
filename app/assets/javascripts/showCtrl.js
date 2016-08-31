/* global angular */
(function() {
  angular.module("app").controller("showCtrl", ['$scope', '$http', function($scope, $http) {
    $scope.setup = function(id) {
      console.log("setup");
      $http.get("https://pacific-plateau-17386.herokuapp.com/api/v1/students/" + id.toString()).then(function(response) {
        $scope.resume = response.data;

  
        console.log($scope.resume);

      });
    };
  window.scope = $scope;
  }]);
})();