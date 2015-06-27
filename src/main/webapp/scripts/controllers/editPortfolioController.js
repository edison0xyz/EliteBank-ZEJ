

angular.module('eletrial').controller('EditPortfolioController', function($scope, $routeParams, $location, PortfolioResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.portfolio = new PortfolioResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/Portfolios");
        };
        PortfolioResource.get({PortfolioId:$routeParams.PortfolioId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.portfolio);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.portfolio.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/Portfolios");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/Portfolios");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.portfolio.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});