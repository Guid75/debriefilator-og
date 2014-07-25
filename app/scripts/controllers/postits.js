'use strict';

/**
 * @ngdoc function
 * @name debriefilatorApp.controller:PostitsCtrl
 * @description
 * # PostitsCtrl
 * Controller of the debriefilatorApp
 */
app.controller('PostitsCtrl', function ($scope, $rootScope, Postit) {
	$scope.notes = function(column) {
		return Postit.list(column, $scope.postitsScope);
	};

	$scope.addNote = function(column) {
		Postit.add(column, 'Enter your remark here', $scope.postitsScope);
	};

	$scope.deleteNote = function(column, noteId) {
		Postit.delete(column, noteId, $scope.postitsScope);
	};

	$scope.$on('dropEvent', function(evt, dragged, dropped) {
		var dragData = dragged.split('/');
		var dragId = dragData[0];
		var dragColumn = dragData[1];
		var dragScope = dragData[2];
		var dropColumn = dropped.split('/')[0];
		var dropScope = dropped.split('/')[1];
		if (dropScope !== $scope.postitsScope) {
			// TODO dropEvent should be raised here
			return;
		}

		Postit.add(dropColumn, Postit.getNoteText(dragId, dragScope), dropScope);
		Postit.delete(dragColumn, dragId, dragScope);
        $scope.$apply();
    });
});
