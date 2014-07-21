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
	$urlRouterProvider.otherwise('/state1');
	//
	// Now set up the states
	$stateProvider
	    .state('index', {
			url: '',
			views: {
				"remarks-all": {
					controller: 'RemarksCtrl',
					templateUrl: 'partials/remarks-all.html'
				}
				// "negatives": { templateUrl: "partials/remarks.html" },
				// "positives": { templateUrl: "partials/remarks.html" }
			}
		});
});
