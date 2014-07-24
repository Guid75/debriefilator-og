'use strict';

/**
 * @ngdoc function
 * @name debriefilatorApp.controller:SessionCtrl
 * @description
 * # SessionCtrl
 * Controller of the debriefilatorApp
 */
app.controller('SessionCtrl', function ($scope, Postit) {
	$scope.stepNo = 0;
	$scope.layout = Postit.layout();
	$scope.getWidthStyle = function() {
		return (100 / $scope.layout.length) + '%';
	};
	$scope.nextStep = function() {
		$scope.stepNo++;
	};
});
