'use strict';

/**
 * @ngdoc directive
 * @name debriefilatorApp.directive:drag
 * @description
 * # drag
 */
app.directive('drag', function($rootScope) {
	function dragStart(evt, element, dragStyle) {
		element.addClass(dragStyle);
		evt.dataTransfer.setData('id', evt.target.id);
		evt.dataTransfer.effectAllowed = 'move';
	}
	function dragEnd(evt, element, dragStyle) {
		element.removeClass(dragStyle);
	}

	return {
		restrict: 'A',
		link: function(scope, element, attrs)  {
			attrs.$set('draggable', 'true');
			scope.dragData = attrs.dragdata || scope[attrs.drag];
			scope.dragStyle = attrs.dragstyle;
			element.bind('dragstart', function(evt) {
				$rootScope.draggedElement = scope.dragData;
				dragStart(evt, element, scope.dragStyle);
			});
			element.bind('dragend', function(evt) {
				dragEnd(evt, element, scope.dragStyle);
			});
		}
	};
});
