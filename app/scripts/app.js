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
			'ui.router',
			'ui.bootstrap'
		]);

app.config(function($stateProvider, $urlRouterProvider) {
	//
	// For any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise('/welcome');
	//
	// Now set up the states
	$stateProvider
		.state('welcome', {
			url: '/welcome',
			template: '<div>Welcome!</div>'
		})
	    .state('session', {
			url: '/session/:sessionid',
			templateUrl: 'views/session.html',
			controller: 'SessionCtrl'
		})
		.state('sessions', {
			url: '/sessions',
			templateUrl: 'views/sessions.html',
			controller: 'SessionsCtrl'
		});
});

app.directive('entervalidation', function() {
    return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			element.bind('keydown keypress', function(event) {
				if(event.which === 13) {
					scope.$apply(function(){
						scope.$eval(attrs.entervalidation, {'event': event});
					});

					event.preventDefault();
				}
			});
		}
    };
});
