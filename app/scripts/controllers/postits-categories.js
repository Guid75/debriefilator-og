'use strict';

/**
 * @ngdoc function
 * @name debriefilatorApp.controller:PostitsCategoriesCtrl
 * @description
 * # PostitsCategoriesCtrl
 * Controller of the debriefilatorApp
 */
angular.module('debriefilatorApp')
	.controller('PostitsCategoriesCtrl', function ($scope, Postit) {
		$scope.columns = [
			{
				style: {
					backgroundColor: '#FDD'
				},
				postitType: 'negative'
			},
			{
				style: {
					backgroundColor: '#DFD'
				},
				postitType: 'positive'
			}
		];
		Postit.init(['negative', 'positive']);
	});
