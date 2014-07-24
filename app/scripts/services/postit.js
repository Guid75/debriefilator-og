'use strict';

/**
 * @ngdoc service
 * @name debriefilatorApp.postit
 * @description
 * # postit
 * Factory in the debriefilatorApp.
 */
app.factory('Postit', function () {
	var
	privateItems = {},
	publicItems = {},
	curLayout;

    // Public API here
    return {
		// init the postit service with a layout
		init: function(layout) {
			curLayout = layout;
			layout.forEach(function(column) {
				privateItems[column.name] = [];
				publicItems[column.name] = [];
			});
		},
		layout: function() {
			return curLayout;
		},
		add: function(column, text, scope) {
			var items = scope === 'public' ? publicItems : privateItems;
			// TODO check the column validity
			items[column].push({
				text: text
			});
		},
		delete: function(column, index, scope) {
			var items = scope === 'public' ? publicItems : privateItems;
			// TODO check the column validity
			items[column].splice(index, 1);
		},
		list: function(column, scope) {
			var items = scope === 'public' ? publicItems : privateItems;
			// TODO check the column validity
			return items[column];
		}
    };
});
