(function() {

	'use strict';

	angular
		.module('authApp')
		.controller('UserController', UserController);

	function UserController($http) {

		var vm = this;

		vm.users;
		vm.error;

		vm.getUsers = function() {

			// This request will hit the index method in the AuthenticateController
			// on the Laravel side and will return the list of users
			$http.get('api/authenticate').success(function(users) {
				vm.users = users;
			}).error(function(error) {
				vm.error = error;
			});
		}
	}
	
})();