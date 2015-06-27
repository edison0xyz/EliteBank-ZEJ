

angular.module('eletrial').controller('DashboardController', function($scope ) {
    $scope.date = new Date();

    $scope.investments = [
        { title: 'Dow Jones Industrial Average (^DJI)', price: '17,946.68' },
        { title: 'S&P 500 (^GSPC)', price: "2,101.49" },
        { title: 'NASDAQ Composite (^IXIC)', price: '5,080.51' }
    ];

    $scope.portfolios = [
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
    $scope.update();
});