(function() {

	'use strict';

	angular
		.module('authApp')
		.controller('AuthController', AuthController);


	function AuthController($auth, $state) {

		var vm = this;

		vm.login = function() {

			var credentials = {
				email: vm.email,
				password: vm.password
			}

			$auth.login(credentials).then(function(data) {
				$state.go('users');
			}, function(error) {
				console.log(error);
			});
		}

	}

})();