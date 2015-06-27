angular.module('eletrial').factory('UserResource', function($rootScope){
    return {
    	login: function(){
    		$rootScope.isLoggedIn = true;
			$rootScope.currentUser = {
				name: 'Jimmy Soh',
				email: 'jimmy@elandium.com',
				occupation: 'Entrepreneur'
			}
    	},
    	logout: function(){
    		$rootScope.isLoggedIn = false;
    	}
    }
});