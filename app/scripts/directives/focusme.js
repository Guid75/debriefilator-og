'use strict';

/**
 * @ngdoc directive
 * @name debriefilatorApp.directive:focusMe
 * @description
 * # focusMe
 */
angular.module('debriefilatorApp')
	.directive('focusMe', function () {
		return {
			restrict: 'A',
			link: function postLink(scope, element, attrs) {
				setTimeout(function() {
					if (attrs.focusMe === 'true') {
						element[0].focus();
						document.execCommand('selectAll', false, null);
						element.removeAttr('focus-me');
						scope.note.focusMe = 'false';
					}
				}, 50);
			}
		};
	});
