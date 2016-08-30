/* global angular */
(function() {
  angular.module("app").controller("resumeCtrl", function($scope, $http) {
    $scope.setup = function() {
      $http.get().then(function(response) {
        $scope.resumes = response.data;

      $http.get().then(function(response) {
        $scope.individualResume = response.data;
      });
      });
    };
  });
})();