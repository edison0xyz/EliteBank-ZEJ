angular.module('eletrial').factory('UserResource', function($rootScope, CustomerResource){
    return {
    	login: function(){
    		$rootScope.isLoggedIn = true;
    	},
    	logout: function(){
    		$rootScope.isLoggedIn = false;
    	},
    	getUser: function(){
    		return $rootScope.currentUser;
    	}
    }
});