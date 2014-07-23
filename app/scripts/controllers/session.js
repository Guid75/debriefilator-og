'use strict';

/**
 * @ngdoc function
 * @name debriefilatorApp.controller:SessionCtrl
 * @description
 * # SessionCtrl
 * Controller of the debriefilatorApp
 */
app.controller('SessionCtrl', ['$scope', 'Postit', function ($scope, Postit) {
	$scope.layout = Postit.layout();
}]);
