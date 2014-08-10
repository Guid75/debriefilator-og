'use strict';

/**
 * @ngdoc directive
 * @name debriefilatorApp.directive:noteLayout
 * @description
 * # noteLayout
 */
app.directive('noteLayout', function () {
	return {
		templateUrl: 'partials/note-layout.html',
		restrict: 'E',
		scope: {
			notesScope: '@'
		},
		controller: 'NotesCtrl'
	};
});
