'use strict';

/**
 * @ngdoc function
 * @name debriefilatorApp.controller:PostitsCtrl
 * @description
 * # PostitsCtrl
 * Controller of the debriefilatorApp
 */
app.controller('PostitsCtrl', function ($scope, Postit) {
	var postitType = $scope.$parent.column.name;
	$scope.postits = Postit.list(postitType);

	$scope.addPostit = function() {
		Postit.add(postitType, 'Enter your remark here');
	};

	$scope.deletePostit = function(index) {
		Postit.delete(postitType, index);
	};
});

// the following directive is used to bind contenteditable div with an angular model
app.directive('contenteditable', function() {
	return {
		restrict: 'A', // only activate on element attribute
		require: '?ngModel', // get a hold of NgModelController
		link: function(scope, element, attrs, ngModel) {
			if (!ngModel) {
				return; // do nothing if no ng-model
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

app.directive('initfocus', function() {
    return {
        restrict: 'A', // only activate on element attribute
        link: function(scope, element) {
			setTimeout(function() {
				element.focus();
				document.execCommand('selectAll',false,null);
			}, 0);
        }
    };
});
