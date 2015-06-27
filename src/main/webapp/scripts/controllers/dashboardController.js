angular.module('eletrial').controller('DashboardController', function ($scope, CurrencyService) {
    var investment_value, investment_percent;
    $scope.date = new Date();
    $scope.rate = 1;
    $scope.currencies = [
        'SGD', 'USD', 'EUR', 'JPY', 'GBP', 'CHF', 'AUD', 'CAD', 'NZD'
    ]
    $scope.currency = $scope.currencies[0];

    $scope.changeCurrency = function(cur){
        if(cur != 'SGD'){
            $scope.currency = cur;
            CurrencyService.convertCurrency('SGD',$scope.currency,1).then(function(res){
                console.log(res);
                $scope.rate= res.data[$scope.currency];
                update_view();
            });
        }else{
            $scope.rate = 1;
            update_view();
        }

    }

    $scope.portfolios = [
        {
            title: 'P19023F',
            labels: ["Real Estate", "Direct Investments", "Equities", "Bonds", "Commodities", 'Venture Capital'],
            data: [300, 200, 500, 100, 170, 20],
            price: [120.32, 243.12, 510.12, 130.12, 405.4, 216.20],
            type: 'Pie'
        },
        {
            title: 'P58233F',
            labels: ["Hedge funds", "Precious Metal", "Equities", "Bonds", "Commodities"],
            data: [120, 500, 100, 40, 120],
            price: [512.06, 42.90, 80.06, 34.60, 92.40],
            type: 'Doughnut'
        }
    ];
    $scope.portfolio = $scope.portfolios[0];
    $scope.updatePortfolio = function () {
        $scope.data = $scope.portfolio.data;
        $scope.labels = $scope.portfolio.labels;
        $scope.type = $scope.portfolio.type;
        $scope.price = _.zip($scope.portfolio.price, $scope.portfolio.data);
        $scope.price = _.map($scope.price, function (arr) {
            return arr[0] * arr[1];
        });
        update_view();
    }

    $scope.view = 'Percent';
    $scope.toggle_view = function () {
        $scope.view = $scope.view == 'Value' ? 'Percent' : 'Value';
        $scope.investments = $scope.view == 'Percent' ? investment_percent : investment_value;
    }

    var update_view = function () {
        var total = _.sum($scope.data);
        investment_percent = _.zip($scope.portfolio.labels, $scope.portfolio.data);
        investment_percent = _.map(investment_percent, function (inv) {
            inv[1] = inv[1] / total * 100;
            return inv;
        });
        var foreign_price = _.map($scope.price, function(price){
            return $scope.rate*price;
        })
        investment_value = _.zip($scope.portfolio.labels, foreign_price);
        $scope.investments = $scope.view == 'Percent' ? investment_percent : investment_value;
    }

    $scope.updatePortfolio();
}).filter('percentage', ['$filter', function ($filter) {
    return function (input, decimals) {
        return $filter('number')(input * 100, decimals) + '%';
    };
}]).factory('CurrencyService',['$http',function($http){
    return {
        convertCurrency : function(from, to, amt){
            return $http.jsonp('//devel.farebookings.com/api/curconversor/'+from+'/'+to+'/'+amt+'/json?callback=JSON_CALLBACK');
        }
    }
}]);;