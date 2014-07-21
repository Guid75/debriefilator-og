/* global app: true */
'use strict';

/**
 * @ngdoc overview
 * @name debriefilatorApp
 * @description
 * # debriefilatorApp
 *
 * Main module of the application.
 */
var app = angular
		.module('debriefilatorApp', [
			'ngAnimate',
			'ngCookies',
			'ngResource',
			'ngRoute',
			'ngSanitize',
			'ngTouch',
			'ui.router'
		]);
		// .config(function ($routeProvider) {
		// 	$routeProvider
		// 		.when('/', {
		// 			templateUrl: 'views/main.html',
		// 			controller: 'MainCtrl'
		// 		})
		// 		.otherwise({
		// 			redirectTo: '/'
		// 		});
		// });

app.config(function($stateProvider, $urlRouterProvider) {
	//
	// For any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise('/index');
	//
	// Now set up the states
	$stateProvider
	    .state('index', {
			url: '',
			views: {
				"postits-all": {
					controller: 'PostitsCategoriesCtrl',
					templateUrl: 'partials/postits-all.html'
				}
			}
		});
});
