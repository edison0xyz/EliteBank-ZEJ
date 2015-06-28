angular.module('eletrial').controller('ResearchController', function ($scope, StockService) {

    var Markit = {};
    Markit.InteractiveChartApi = function (symbol, duration) {
        this.symbol = symbol.toUpperCase();
        this.duration = duration;
        this.PlotChart();
    };
    $scope.title = null;
    Markit.InteractiveChartApi.prototype.PlotChart = function () {

        var params = {
            parameters: JSON.stringify(this.getInputParams())
        };
        var _this = this;
        $scope.title = "Loading...";
        StockService.getHistoricCharts(params).
            success(function (data, status) {
                $scope.title = null;
                _this.render(data);
            }).
            error(function(data, status){
                $scope.title = "Symbol not found";
                setTimeout(function(){
                    $scope.title = null;
                },5000);
            });

    };

    Markit.InteractiveChartApi.prototype.getInputParams = function () {
        return {
            Normalized: false,
            NumberOfDays: this.duration,
            DataPeriod: "Day",
            Elements: [
                {
                    Symbol: this.symbol,
                    Type: "price",
                    Params: ["ohlc"] //ohlc, c = close only
                },
                {
                    Symbol: this.symbol,
                    Type: "volume"
                }
            ]
            //,LabelPeriod: 'Week',
            //LabelInterval: 1
        }
    };

    Markit.InteractiveChartApi.prototype._fixDate = function (dateIn) {
        var dat = new Date(dateIn);
        return Date.UTC(dat.getFullYear(), dat.getMonth(), dat.getDate());
    };

    Markit.InteractiveChartApi.prototype._getOHLC = function (json) {
        var dates = json.Dates || [];
        var elements = json.Elements || [];
        var chartSeries = [];

        if (elements[0]) {

            for (var i = 0, datLen = dates.length; i < datLen; i++) {
                var dat = this._fixDate(dates[i]);
                var pointData = [
                    dat,
                    elements[0].DataSeries['open'].values[i],
                    elements[0].DataSeries['high'].values[i],
                    elements[0].DataSeries['low'].values[i],
                    elements[0].DataSeries['close'].values[i]
                ];
                chartSeries.push(pointData);
            }
            ;
        }
        return chartSeries;
    };

    Markit.InteractiveChartApi.prototype._getVolume = function (json) {
        var dates = json.Dates || [];
        var elements = json.Elements || [];
        var chartSeries = [];

        if (elements[1]) {

            for (var i = 0, datLen = dates.length; i < datLen; i++) {
                var dat = this._fixDate(dates[i]);
                var pointData = [
                    dat,
                    elements[1].DataSeries['volume'].values[i]
                ];
                chartSeries.push(pointData);
            }
            ;
        }
        return chartSeries;
    };

    Markit.InteractiveChartApi.prototype.render = function (data) {
        //console.log(data)
        // split the data set into ohlc and volume
        var ohlc = this._getOHLC(data),
            volume = this._getVolume(data);

        // set the allowed units for data grouping
        var groupingUnits = [[
            'week', // unit name
            [1]                             // allowed multiples
        ], [
            'month',
            [1, 2, 3, 4, 6]
        ]];
        var actualWidth;

        if (navigator.userAgent.match(/Mobi/)) {
            actualWidth = 400;
        } else {
            actualWidth = 1000;
        }
        var _this = this;
        // create the chart
        $scope.chartConfig = {
            useHighStocks: true,
            title: {
                text: _this.symbol + ' Historical Price'
            },
            options: {
                rangeSelector: {
                    selected: 1
                    //enabled: false
                },
                chart: {
                    width: null
                },
                yAxis: [{
                    labels: {
                        align: 'right',
                        x: -3
                    },
                    title: {
                        text: 'OHLC'
                    },
                    height: '65%',
                    lineWidth: 2
                }, {
                    labels: {
                        align: 'right',
                        x: -3
                    },
                    title: {
                        text: 'Volume'
                    },
                    top: '65%',
                    height: '30%',
                    offset: 0,
                    lineWidth: 2
                }],
                credits: {
                    enabled: false
                },
            },
            series: [{
                type: 'candlestick',
                name: _this.symbol,
                data: ohlc,
                dataGrouping: {
                    units: groupingUnits
                }
            },
                {
                    type: 'column',
                    name: 'Volume',
                    data: volume,
                    yAxis: 1,
                    dataGrouping: {
                        units: groupingUnits
                    }
                }]
        }
    };

    $scope.chart = function (symbol) {
        var sym = symbol || 'GOOG';
        new Markit.InteractiveChartApi(sym, 3650);
    }
    $scope.chart();
});


