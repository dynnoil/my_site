var myApp = angular.module('myApp');
myApp.controller("AppController", ["$scope", "$rootScope", "$state", function($scope, $rootScope, $state) {
  $state.go("project");
  $rootScope.$on('scrollspy.refresh', function() {
    refresh(attrs);
  });
}]);

myApp.controller("ProjectPageController", ["$scope", "$http", function($scope, $http) {
  $http.get("../ajax/getPageContent.php?page_id=" + 'project').success(function(data) {
    $scope.pageContent = data;
  });
}]);