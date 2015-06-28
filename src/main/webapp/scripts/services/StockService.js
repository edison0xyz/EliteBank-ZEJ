/**
 * Created by zacmac on 22/6/15.
 */
angular.module('eletrial').factory('StockService',['$http',function($http){
    return {
        getQuote : function(symbol){
            return $http.jsonp('//dev.markitondemand.com/Api/v2/Quote/jsonp?callback=JSON_CALLBACK&symbol=' + encodeURIComponent(symbol));
        },
        getHistoricCharts: function(params){
            return $http.jsonp('//dev.markitondemand.com/Api/v2/InteractiveChart/jsonp?callback=JSON_CALLBACK&parameters=' + encodeURIComponent(params.parameters));
        }
    }
}]);