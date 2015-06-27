
angular.module('eletrial').controller('NewPortfolioController', function ($scope, $location, locationParser, PortfolioResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.portfolio = $scope.portfolio || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Portfolios/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        PortfolioResource.save($scope.portfolio, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Portfolios");
    };
});