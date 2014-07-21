'use strict';

/**
 * @ngdoc service
 * @name debriefilatorApp.postit
 * @description
 * # postit
 * Factory in the debriefilatorApp.
 */
app.factory('Postit', function () {
	var postits = {};

    // Public API here
    return {
		// init the postit service with categories
		init: function(categories) {
			categories.forEach(function(cat) {
				postits[cat] = [];
			});
		},
		add: function(category, text, position) {
			if (!postits[category]) {
				console.error('category error');
				return;
			}
			postits[category].push({
				text: text,
				position: position
			});
		},
		list: function(category) {
			if (!postits[category]) {
				console.error('category error');
				return null;
			}
			return postits[category];
		}
    };
});
