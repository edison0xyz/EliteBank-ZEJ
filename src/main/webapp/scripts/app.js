'use strict';

angular.module('eletrial', [ 'ngRoute', 'ngResource' ]).config(
		[ '$routeProvider', function($routeProvider) {
			$routeProvider.when('/', {
				templateUrl : 'views/landing.html',
				controller : 'LandingPageController'
			}).when('/Customers', {
				templateUrl : 'views/Customer/search.html',
				controller : 'SearchCustomerController'
			}).when('/Customers/new', {
				templateUrl : 'views/Customer/detail.html',
				controller : 'NewCustomerController'
			}).when('/Customers/edit/:CustomerId', {
				templateUrl : 'views/Customer/detail.html',
				controller : 'EditCustomerController'
			}).when('/Portfolios', {
				templateUrl : 'views/Portfolio/search.html',
				controller : 'SearchPortfolioController'
			}).when('/Portfolios/new', {
				templateUrl : 'views/Portfolio/detail.html',
				controller : 'NewPortfolioController'
			}).when('/Portfolios/edit/:PortfolioId', {
				templateUrl : 'views/Portfolio/detail.html',
				controller : 'EditPortfolioController'
			}).when('/login', {
				templateUrl : 'views/Login/login.html',
				controller : 'LoginController'
			}).when('/secure', {
				templateUrl : 'views/Login/secure.html',
				controller : 'LoginController'
			}).when('/dashboard', {
				templateUrl : 'views/Dashboard/dashboard.html',
				controller : 'DashboardController'
			})
			.otherwise({
				redirectTo : '/'
			});
		} ]).controller('LandingPageController',
		function LandingPageController() {
		}).controller('NavController',
		function NavController($scope, $location) {
			$scope.matchesRoute = function(route) {
				var path = $location.path();
				return (path === ("/" + route) || path.indexOf("/" + route
						+ "/") == 0);
			};
		}).run(function ($rootScope, $location) {
		    // Redirect to login if route requires auth and you're not logged in
		    $rootScope.$on('$routeChangeStart', function (event, next) {
		    	if (!$rootScope.isLoggedIn) {
		            $location.path('/login');
		    	}
		    });
		});
		    
