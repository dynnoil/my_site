var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state("project", {
    url: "/project",
    views: {
      "contentView": {
        templateUrl: "../templates/project.html",
        controller: "ProjectPageController"
      }
    }
  });

  $stateProvider.state("author", {
    url: "/author",
    views: {
      "contentView": {
        templateUrl: "../templates/author.html"
      }
    }
  });
});