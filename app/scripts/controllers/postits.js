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
		Postit.add(postitType, '* a simple remark', {
			x: 50 + $scope.postits.length * 150,
			y: 50
		});
	};
});
