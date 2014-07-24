'use strict';

/**
 * @ngdoc function
 * @name debriefilatorApp.controller:PostitsCtrl
 * @description
 * # PostitsCtrl
 * Controller of the debriefilatorApp
 */
app.controller('PostitsCtrl', function ($scope, Postit) {
	$scope.postits = function(column) {
		return Postit.list(column, $scope.postitsScope);
	};

	$scope.addNote = function(column) {
		Postit.add(column, 'Enter your remark here', $scope.postitsScope);
	};

	$scope.deletePostit = function(column, index) {
		Postit.delete(column, index, $scope.postitsScope);
	};
});
