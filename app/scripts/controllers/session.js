'use strict';

/**
 * @ngdoc function
 * @name debriefilatorApp.controller:SessionCtrl
 * @description
 * # SessionCtrl
 * Controller of the debriefilatorApp
 */
app.controller('SessionCtrl', ['$scope', 'Postit', '$stateParams', function ($scope, Postit, $stateParams) {
	$scope.layout = Postit.layout();
	$scope.getWidthStyle = function() {
		return (100 / $scope.layout.length) + '%';
	};
}]);
