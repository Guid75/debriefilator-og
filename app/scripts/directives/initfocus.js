'use strict';

/**
 * @ngdoc directive
 * @name debriefilatorApp.directive:initfocus
 * @description
 * # initfocus
 */
app.directive('initfocus', function () {
    return {
        restrict: 'A',
        link: function(scope, element) {
			setTimeout(function() {
				element[0].focus();
				document.execCommand('selectAll', false, null);
			}, 0);
        }
    };
});
