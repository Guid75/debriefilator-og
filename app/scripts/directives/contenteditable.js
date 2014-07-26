'use strict';

/**
 * @ngdoc directive
 * @name debriefilatorApp.directive:contenteditable
 * @description
 * # contenteditable
 */
app.directive('contenteditable', function () {
	return {
		restrict: 'A',
		require: '?ngModel',
		link: function(scope, element, attrs, ngModel) {
			if (!ngModel) {
				return;
			}

			// Specify how UI should be updated
			ngModel.$render = function() {
				element.html(ngModel.$viewValue || '');
			};

			// Listen for change events to enable binding
			element.on('blur keyup change', function() {
				scope.$apply(read);
			});

			// Write data to the model
			function read() {
				var html = element.html();
				// When we clear the content editable the browser leaves a <br> behind
				// If strip-br attribute is provided then we strip this out
				if (attrs.stripBr && html === '<br>') {
					html = '';
				}
				ngModel.$setViewValue(html);
			}
		}
	};
});
