var myApp = angular.module("myApp",['ngRoute']);
myApp.config(function($routeProvider){
  $routeProvider
    .otherwise({
      redirectTo: '/'
    })
});