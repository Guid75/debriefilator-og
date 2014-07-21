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
		add: function(category, text) {
			if (!postits[category]) {
				console.error('category error');
				return;
			}
			postits[category].push({
				text: text
			});
		},
		delete: function(category, index) {
			if (!postits[category]) {
				console.error('category error');
				return;
			}
			postits[category].splice(index, 1);
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
