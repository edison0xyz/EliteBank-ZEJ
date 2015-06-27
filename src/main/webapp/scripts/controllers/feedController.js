/**
 * Created by zacmac on 22/6/15.
 */
angular.module('eletrial').controller("FeedCtrl",  function ($scope, FeedService) {
    $scope.loadButonText="Load";
    $scope.loadFeed=function(){
        FeedService.parseFeed("http://finance.yahoo.com/rss/topfinstories").then(function(res){
            $scope.feeds=res.data.responseData.feed.entries;
        });
    }
    $scope.loadFeed();
});