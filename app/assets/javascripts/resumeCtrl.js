/* global angular */
(function() {
  angular.module("app").controller("resumeCtrl", function($scope, $http) {
    $scope.setup = function() {
      console.log("setup");
      $http.get("https://pacific-plateau-17386.herokuapp.com/api/v1/students").then(function(response) {
        $scope.resumes = response.data;

  
        console.log($scope.resumes);

        // $http.get().then(function(response) {
        // $scope.individualResume = response.data;
      // });
      });
    };
  window.scope = $scope;
  });
})();