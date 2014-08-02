'use strict';

/**
 * @ngdoc directive
 * @name debriefilatorApp.directive:note
 * @description
 * # note
 */
angular.module('debriefilatorApp')
	.directive('note', function () {
		return {
			restrict: 'A',
			link: function postLink(scope, element, attrs) {
				element.bind("keypress", function (event) {
					if (event.which === 13 && !event.shiftKey) {
						element[0].blur();

						event.preventDefault();
					}
				});
			}
		};
	});
