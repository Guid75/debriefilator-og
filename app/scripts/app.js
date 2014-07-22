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
	$urlRouterProvider.otherwise('/postits');
	//
	// Now set up the states
	$stateProvider
	    .state('postits', {
			url: 'postits',
			views: {
				'main': {
					controller: 'PostitsCategoriesCtrl',
					templateUrl: 'partials/postits-all.html'
				}
			}
		})
		.state('sessions', {
			url: 'sessions',
			views: {
				'main': {
					templateUrl: 'views/sessions.html'
				}
			}
		})
		.state("newsession", {
			url: "new",
			onEnter: function($stateParams, $state, $modal, $resource) {
				$modal.open({
					templateUrl: "partials/newsession.html",
					resolve: {
						item: function() { /*new Item(123).get();*/ }
					},
					controller: ['$scope', 'item', function($scope, item) {
						$scope.dismiss = function() {
							$scope.$dismiss();
						};

						$scope.save = function() {
//							item.update().then(function() {
								$scope.$close(true);
//							});
						};
					}]
				}).result.then(function(result) {
					if (result) {
						return $state.transitionTo("postits");
					}
				});
			}
		});
});
