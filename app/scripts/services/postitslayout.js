'use strict';

/**
 * @ngdoc service
 * @name debriefilatorApp.PostitsLayout
 * @description
 * # PostitsLayout
 * Factory in the debriefilatorApp.
 */
app.factory('PostitsLayout', function () {
	var layouts = [
		[
			{
				name: 'negative',
				color: '#FDD'
			},
			{
				name: 'positive',
				color: '#DFD'
			}
		],
		[
			{
				name: 'continue',
				color: '#DFD'
			},
			{
				name: 'stop',
				color: '#FDD'
			},
			{
				name: 'progress',
				color: '#DDF'
			}
		]
	];

    return {
		all: function() {
			return layouts;
		}
    };
});
