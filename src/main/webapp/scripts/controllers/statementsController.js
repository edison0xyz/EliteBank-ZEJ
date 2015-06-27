

angular.module('eletrial').controller('StatementsController', function($scope ) {
    $scope.date = new Date();

    $scope.statements = [
        {
            title: 'P19023F',
            labels: ["Real Estate", "Direct Investments", "Equities", "Bonds", "Commodities"],
            data: [300, 200, 500, 100, 170],
            type: 'Pie'
        },
        {
            title: 'P58233F',
            labels: ["Hedge funds", "Precious Metal", "Equities", "Bonds", "Commodities"],
            data: [120, 500, 100, 40, 120],
            type: 'Pie'
        }
    ];
    $scope.portfolio = $scope.portfolios[0];
    $scope.update = function () {
        $scope.data = $scope.portfolio.data;
        $scope.labels = $scope.portfolio.labels;
        $scope.type = $scope.portfolio.type;
    }
    $scope.investments = _.zip($scope.portfolio.labels, $scope.portfolio.data);
    $scope.update();
});