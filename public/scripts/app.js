(function() {

	'use strict';

	angular
		.module('authApp', ['ui.router', 'satellizer'])
		.config(function($stateProvider, $urlRouterProvider, $authProvider) {

			$authProvider.loginUrl = '/api/authenticate';

			$urlRouterProvider.otherwise('/auth');
			
			$stateProvider
				.state('auth', {
					url: '/auth',
					templateUrl: '../views/authView.html',
					controller: 'AuthController as auth'
				})
				.state('users', {
					url: '/users',
					templateUrl: '../views/userView.html',
					controller: 'UserController as user'
				});
		});
})();