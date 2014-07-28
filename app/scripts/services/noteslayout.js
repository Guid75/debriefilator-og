'use strict';

/**
 * @ngdoc service
 * @name debriefilatorApp.NotesLayout
 * @description
 * # NotesLayout
 * Factory in the debriefilatorApp.
 */
app.factory('NotesLayout', function () {
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
