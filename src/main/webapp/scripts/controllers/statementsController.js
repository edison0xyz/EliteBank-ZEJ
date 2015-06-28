

angular.module('eletrial').controller('StatementsController', function($scope, $timeout, $interval) {
    function toLocal (date) {
        var local = new Date(date);
        local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
        return local.toJSON().slice(0, 10);
    }
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

    $scope.genLink = null;
    $scope.genStatement = function(start,end){
        $scope.genText = 'Generating statement from ' + toLocal(start) + ' to ' + toLocal(end) + '.';
        $interval(function(){
            $scope.genText += '.';
        }, 1000, 4);

        $timeout(function(){
            $scope.genText = "Your custom report is ready:";
            $scope.genLink = "generated/JIMMY SOH - SIN1798X - GENERATED 1_JUL_2015_1501H Sheet1.pdf";
        }, 4500);


    }
    $scope.statements = [
        {
            portfolio: 'P19023F',
            month: "June",
            link: "generated/JIMMY SOH - SIN1798X - GENERATED 1_JUL_2015_1501H Sheet1.pdf"
        },{
            portfolio: 'P19023F',
            month: "May",
            link: "generated/JIMMY SOH - SIN1798X - GENERATED 1_JUL_2015_1501H Sheet1.pdf"

        },{
            portfolio: 'P19023F',
            month: "April",
            link: "generated/JIMMY SOH - SIN1798X - GENERATED 1_JUL_2015_1501H Sheet1.pdf"
        },{
            portfolio: 'P19023F',
            month: "March",
            link: "generated/JIMMY SOH - SIN1798X - GENERATED 1_JUL_2015_1501H Sheet1.pdf"
        },{
            portfolio: 'P58233F',
            month: "June",
            link: "generated/JIMMY SOH - SIN1798X - GENERATED 1_JUL_2015_1501H Sheet1.pdf"
        },{
            portfolio: 'P58233F',
            month: "May",
            link: "generated/JIMMY SOH - SIN1798X - GENERATED 1_JUL_2015_1501H Sheet1.pdf"
        },{
            portfolio: 'P58233F',
            month: "April",
            link: "generated/JIMMY SOH - SIN1798X - GENERATED 1_JUL_2015_1501H Sheet1.pdf"
        },{
            portfolio: 'P58233F',
            month: "March",
            link: "generated/JIMMY SOH - SIN1798X - GENERATED 1_JUL_2015_1501H Sheet1.pdf"
        }
    ];
});