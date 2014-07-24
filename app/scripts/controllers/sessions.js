'use strict';

/**
 * @ngdoc function
 * @name debriefilatorApp.controller:SessionsCtrl
 * @description
 * # SessionsCtrl
 * Controller of the debriefilatorApp
 */
app.controller('SessionsCtrl', function ($scope, $modal, $state, Session, Postit) {
	$scope.Session = Session;
	$scope.newSession = function() {
		var modalInstance = $modal.open({
			templateUrl: 'partials/newsession.html',
			controller: ['$scope', 'PostitsLayout', function($scope, PostitsLayout) {
				$scope.layouts = PostitsLayout.all();
				$scope.session = {
					userName: '',
					sessionName: '',
					layout: $scope.layouts[0]
				};
				$scope.dismiss = function() {
					$scope.$dismiss();
				};

				$scope.save = function() {
					$scope.$close($scope.session);
				};

				$scope.clickCat = function(index) {
					$scope.session.layout = $scope.layouts[index];
				};
			}]
		});

		modalInstance.result.then(function (sessionCfg) {
			Session.add(sessionCfg).then(function(sessionId) {
				Session.initCurrent(sessionId, sessionCfg);
				Postit.clear();
				$state.transitionTo('session', null, { reload: true });
			});
		});
		return false;
	};

	$scope.joinSession = function() {
		$state.transitionTo('sessions');
		Session.list();
	};
});
