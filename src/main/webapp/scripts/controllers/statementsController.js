

angular.module('eletrial').controller('StatementsController', function($scope ) {

    $scope.datepicker = {
        options : {
            formatYear: 'yy',
            startingDay: 1,
            showWeeks: false,
            initDate: null
        }
    };
    $scope.start_open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.start_opened = !$scope.start_opened;
    };
    $scope.end_open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.end_opened = !$scope.end_opened;
    };


    $scope.statements = [
        {
            title: 'P19023F Statement for',
            labels: ["Real Estate", "Direct Investments", "Equities", "Bonds", "Commodities"],
            date: new Date(),
            type: 'Pie'
        },
        {
            title: 'P58233F',
            labels: ["Hedge funds", "Precious Metal", "Equities", "Bonds", "Commodities"],
            data: [120, 500, 100, 40, 120],
            type: 'Pie'
        }
    ];
});