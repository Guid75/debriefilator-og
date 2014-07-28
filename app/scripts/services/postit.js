'use strict';

/**
 * @ngdoc service
 * @name debriefilatorApp.postit
 * @description
 * # postit
 * Factory in the debriefilatorApp.
 */
app.factory('Postit', function ($http, Session, uuid4) {
	var
	privateItems = {},
	publicItems = {},
	curLayout;

	function getNote(noteId, scope) {
		var items = scope === 'public' ? publicItems : privateItems;

		for (var column in items) {
			var columnNotes = items[column];
			for (var i = 0; i < columnNotes.length; i++) {
				var note = columnNotes[i];
				if (note.id === noteId) {
					return note;
				}
			}
		}
		return null;
	}

	function getNoteIndex(noteId, scope) {
		var items = scope === 'public' ? publicItems : privateItems;

		for (var column in items) {
			var columnNotes = items[column];
			for (var i = 0; i < columnNotes.length; i++) {
				var note = columnNotes[i];
				if (note.id === noteId) {
					return i;
				}
			}
		}
		return -1;
	}

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
		getNoteId: function(column, index, scope) {
			var items = scope === 'public' ? publicItems : privateItems;
			return items[column][index].id;
		},
		getNoteText: function(noteId, scope) {
			var note = getNote(noteId, scope);
			if (note) {
				return note.text;
			}
			return null;
		},
		getNoteScore: function(noteId, scope) {
			var note = getNote(noteId, scope);
			if (note) {
				return note.score;
			}
			return null;
		},
		add: function(column, text, score, scope) {
			var items = scope === 'public' ? publicItems : privateItems;
			// TODO check the parameters validity

			if (scope === 'public') {
				$http({
					method: 'POST',
					url: 'api/session/' + Session.current().id + '/note/new',
					data: {
						text: text,
						score: score,
						column: column
					}
				}).then(function(result) {
					items[column].push({
						text: text,
						score: score,
						id: result.data.noteId
					});
				});
			} else {
				items[column].push({
					text: text,
					score: score,
					id: uuid4.generate()
				});
			}
		},
		incrementScore: function(column, noteId, scope) {
			var note = getNote(noteId, scope);
			note.score++;
		},
		decrementScore: function(column, noteId, scope) {
			var note = getNote(noteId, scope);
			if (note.score > 1) {
				note.score--;
			}
		},
		delete: function(column, noteId, scope) {
			var items = scope === 'public' ? publicItems : privateItems;
			var index = getNoteIndex(noteId, scope);
			if (index < 0) {
				// TODO raise an error
				return;
			}
			// TODO check the parameters validity
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
			// TODO check the parameters validity
			return items[column];
		}
    };
});
