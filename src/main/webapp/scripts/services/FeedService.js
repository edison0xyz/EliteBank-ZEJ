/**
 * Created by zacmac on 22/6/15.
 */
angular.module('eletrial').factory('FeedService',['$http',function($http){
    return {
        parseFeed : function(url){
            return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=5&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        }
    }
}]);