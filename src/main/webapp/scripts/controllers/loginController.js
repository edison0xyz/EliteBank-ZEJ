

angular.module('eletrial').controller('LoginController', function($scope, $http, $location, UserResource ) {
	$scope.code = function(user){
		console.log('user',user);
		UserResource.login();
		$location.path('/');
	}
	
	$scope.login = function(user){
		$location.path('/secure');
	}
});