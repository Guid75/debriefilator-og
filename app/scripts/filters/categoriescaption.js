'use strict';

/**
 * @ngdoc filter
 * @name debriefilatorApp.filter:categoriescaption
 * @function
 * @description
 * # categoriescaption
 * Filter in the debriefilatorApp.
 */
app.filter('categoriescaption', function () {
	return function(category) {
		return category.map(function(cat) { return cat.name; }).join('/');
	};
});
