'use strict';

/**
 * @ngdoc function
 * @name debriefilatorApp.controller:PostitsCtrl
 * @description
 * # PostitsCtrl
 * Controller of the debriefilatorApp
 */
app.controller('PostitsCtrl', function ($scope, Postit) {
	var postitType = $scope.$parent.column.postitType;
	$scope.postits = Postit.list(postitType);

	$scope.addPostit = function() {
		Postit.add(postitType, 'A simple remark');
	};

	$scope.deletePostit = function(index) {
		Postit.delete(postitType, index);
	};
});
