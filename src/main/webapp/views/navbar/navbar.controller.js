'use strict';

angular.module('eletrial')
  .controller('NavbarCtrl', function ($scope, $location, $rootScope, UserResource) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = $rootScope.isLoggedIn;
    $scope.currentUser = $rootScope.currentUser;

    $scope.logout = function() {
      UserResource.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });