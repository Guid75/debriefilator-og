'use strict';

/**
 * @ngdoc service
 * @name debriefilatorApp.postit
 * @description
 * # postit
 * Factory in the debriefilatorApp.
 */
app.factory('Postit', function ($http, Session) {
	var
	privateItems = {},
	publicItems = {},
	curLayout;

    // Public API here
    return {
		// init the postit service with a layout
		init: function() {
			curLayout = Session.current().layout;
			// clear private notes
			curLayout.forEach(function(column) {
				privateItems[column.name] = [];
			});
			// fill public notes with the session service ones
			var notes = Session.current().notes;
			curLayout.forEach(function(column) {
				publicItems[column.name] = [].concat(notes && notes[column.name] ? notes[column.name] : []);
			});
		},
		layout: function() {
			return curLayout;
		},
		add: function(column, text, scope) {
			var items = scope === 'public' ? publicItems : privateItems;
			// TODO check the column validity

			if (scope === 'public') {
				$http({
					method: 'POST',
					url: 'api/session/' + Session.current().id + '/note/new',
					data: {
						text: text,
						column: column
					}
				}).then(function(result) {
					items[column].push({
						text: text,
						id: result.data.noteId
					});
				});
			} else {
				items[column].push({
					text: text
				});
			}
		},
		delete: function(column, index, scope) {
			var items = scope === 'public' ? publicItems : privateItems;
			// TODO check the column validity
			if (scope === 'public') {
				var note = items[column][index];
				$http({
					method: 'POST',
					url: 'api/session/' + Session.current().id + '/note/remove/' + note.id
				}).then(function(// result
								) {
					items[column].splice(index, 1);
				});
			} else {
				items[column].splice(index, 1);
			}
		},
		list: function(column, scope) {
			var items = scope === 'public' ? publicItems : privateItems;
			// TODO check the column validity
			return items[column];
		}
    };
});
