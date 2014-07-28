'use strict';

/**
 * @ngdoc function
 * @name debriefilatorApp.controller:NotesCtrl
 * @description
 * # NotesCtrl
 * Controller of the debriefilatorApp
 */
app.controller('NotesCtrl', function ($scope, $rootScope, Note) {
	$scope.notes = function(column) {
		return Note.list(column, $scope.notesScope);
	};

	$scope.addNote = function(column) {
		Note.add(column, 'Enter your remark here', 1, $scope.notesScope);
	};

	$scope.deleteNote = function(column, noteId) {
		Note.delete(column, noteId, $scope.notesScope);
	};

	$scope.incrementScore = function(column, noteId) {
		Note.incrementScore(column, noteId, $scope.notesScope);
	};

	$scope.decrementScore = function(column, noteId) {
		Note.decrementScore(column, noteId, $scope.notesScope);
	};

	$scope.$on('dropEvent', function(evt, dragged, dropped) {
		var dragData = dragged.split('/');
		var dragId = dragData[0];
		var dragColumn = dragData[1];
		var dragScope = dragData[2];
		var dropColumn = dropped.split('/')[0];
		var dropScope = dropped.split('/')[1];
		if (dropScope !== $scope.notesScope) {
			// TODO dropEvent should be raised here
			return;
		}

		Note.add(dropColumn,
				 Note.getNoteText(dragId, dragScope),
				 Note.getNoteScore(dragId, dragScope),
				 dropScope);
		Note.delete(dragColumn, dragId, dragScope);
        $scope.$apply();
    });
});
