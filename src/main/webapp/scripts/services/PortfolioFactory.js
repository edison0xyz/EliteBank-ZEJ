angular.module('eletrial').factory('PortfolioResource', function($resource){
    var resource = $resource('api/portfolios/:PortfolioId',{PortfolioId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});