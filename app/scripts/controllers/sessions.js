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
				$scope.session = {
					userName: '',
					sessionName: ''
				};
				$scope.dismiss = function() {
					$scope.$dismiss();
				};

				$scope.save = function() {
					$scope.$close($scope.session);
				};
			}]
		});

		modalInstance.result.then(function (sessionCfg) {
			$state.transitionTo('postits');
			console.log(sessionCfg);
		});
	};

	$scope.joinSession = function() {

	};
});
