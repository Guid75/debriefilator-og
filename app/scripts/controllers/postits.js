'use strict';

/**
 * @ngdoc function
 * @name debriefilatorApp.controller:PostitsCtrl
 * @description
 * # PostitsCtrl
 * Controller of the debriefilatorApp
 */
app.controller('PostitsCtrl', function ($scope, Postit) {
	$scope.postits = function(column) {
		return Postit.list(column, $scope.postitsScope);
	};

	$scope.addNote = function(column) {
		Postit.add(column, 'Enter your remark here', $scope.postitsScope);
	};

	$scope.deletePostit = function(column, index) {
		Postit.delete(column, index, $scope.postitsScope);
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
				element[0].focus();
				document.execCommand('selectAll',false,null);
			}, 0);
        }
    };
});

app.filter('luminance', function() {
	return function(hex, lum) {
		// validate hex string
		hex = String(hex).replace(/[^0-9a-f]/gi, '');
		if (hex.length < 6) {
			hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
		}
		lum = lum || 0;
		// convert to decimal and change luminosity
		var rgb = '#', c, i;
		for (i = 0; i < 3; i++) {
			c = parseInt(hex.substr(i*2,2), 16);
			c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
			rgb += ('00'+c).substr(c.length);
		}
		return rgb;
	};
});
