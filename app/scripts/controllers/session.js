'use strict';

/**
 * @ngdoc function
 * @name debriefilatorApp.controller:SessionCtrl
 * @description
 * # SessionCtrl
 * Controller of the debriefilatorApp
 */
app.controller('SessionCtrl', function ($scope, Postit, Session) {
	$scope.stepNo = 0;
	$scope.layout = Postit.layout();

	$scope.messages = ['welcome to the chat'];

	$scope.session = Session.current();
	$scope.getWidthStyle = function() {
		return (100 / $scope.layout.length) + '%';
	};
	$scope.nextStep = function() {
		$scope.stepNo++;
	};
	$scope.getDirectLink = function() {
		return document.location.href;
	};
});
