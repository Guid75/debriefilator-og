'use strict';

/**
 * @ngdoc directive
 * @name debriefilatorApp.directive:postitLayout
 * @description
 * # postitLayout
 */
app.directive('postitLayout', function () {
	return {
		templateUrl: 'partials/postit-layout.html',
		restrict: 'E',
		scope: {
			postitsScope: '@'
		},
		controller: 'SessionCtrl'
	};
});
