'use strict';

angular.module('eletrial', ['ngRoute', 'ngResource', 'ui.bootstrap', 'chart.js', 'highcharts-ng']).config(
    ['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/landing.html',
            controller: 'DashboardController'
        }).when('/Customers', {
            templateUrl: 'views/Customer/search.html',
            controller: 'SearchCustomerController'
        }).when('/Customers/new', {
            templateUrl: 'views/Customer/detail.html',
            controller: 'NewCustomerController'
        }).when('/Customers/edit/:CustomerId', {
            templateUrl: 'views/Customer/detail.html',
            controller: 'EditCustomerController'
        }).when('/Portfolios', {
            templateUrl: 'views/Portfolio/search.html',
            controller: 'SearchPortfolioController'
        }).when('/Portfolios/new', {
            templateUrl: 'views/Portfolio/detail.html',
            controller: 'NewPortfolioController'
        }).when('/Portfolios/edit/:PortfolioId', {
            templateUrl: 'views/Portfolio/detail.html',
            controller: 'EditPortfolioController'
        }).when('/login', {
            templateUrl: 'views/Login/login.html',
            controller: 'LoginController'
        }).when('/secure', {
            templateUrl: 'views/Login/secure.html',
            controller: 'LoginController'
        }).when('/dashboard', {
            templateUrl: 'views/Dashboard/dashboard.html',
            controller: 'DashboardController'
        }).when('/mail', {
            templateUrl: 'views/mailbox/mailbox.html',
            controller: 'MailboxController'
        }).when('/mail/new', {
            templateUrl: 'views/mailbox/compose.html',
            controller: 'MailboxController'
        }).when('/mail/read', {
            templateUrl: 'views/mailbox/read-mail.html',
            controller: 'MailboxController'
        }).when('/statements', {
            templateUrl: 'views/statements/statements.html',
            controller: 'StatementsController'
        }).when('/research', {
            templateUrl: 'views/Research/research.html',
            controller: 'ResearchController'
        })
        .otherwise({
            redirectTo: '/'
        });
    }]).controller('MailboxController', function() {
    }).run(function ($rootScope, $location) {
        // Redirect to login if route requires auth and you're not logged in
        $rootScope.$on('$routeChangeStart', function (event, next) {
            if ($location.path() !== '/secure' && !$rootScope.isLoggedIn) {
                $location.path('/login');
            }
        });
    });

