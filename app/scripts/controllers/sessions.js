'use strict';

/**
 * @ngdoc function
 * @name debriefilatorApp.controller:SessionsCtrl
 * @description
 * # SessionsCtrl
 * Controller of the debriefilatorApp
 */
app.controller('SessionsCtrl', function ($scope, $modal, $log, $state) {
	$scope.newSession = function() {
		var modalInstance = $modal.open({
			templateUrl: 'partials/newsession.html',
			controller: ['$scope', function($scope) {
				$scope.dismiss = function() {
					$scope.$dismiss();
				};

				$scope.save = function() {
					//							item.update().then(function() {
					$scope.$close(true);
					//							});
				};
			}],
//			controller: ModalInstanceCtrl,
//			size: size,
			resolve: {
				items: function () {
					return $scope.items;
				}
			}
		});

		modalInstance.result.then(function (selectedItem) {
			$state.transitionTo('postits');
			$scope.selected = selectedItem;
		}, function () {
			$log.info('Modal dismissed at: ' + new Date());
		});
	};

	$scope.joinSession = function() {
		
	};
});
