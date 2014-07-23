'use strict';

/**
 * @ngdoc function
 * @name debriefilatorApp.controller:SessionsCtrl
 * @description
 * # SessionsCtrl
 * Controller of the debriefilatorApp
 */
app.controller('SessionsCtrl', ['$scope', '$modal', '$state', 'Session', 'Postit',
								function ($scope, $modal, $state, Session, Postit) {
	$scope.newSession = function() {
		var modalInstance = $modal.open({
			templateUrl: 'partials/newsession.html',
			controller: ['$scope', 'PostitsLayout', function($scope, PostitsLayout, Postit) {
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
			Postit.init(sessionCfg.layout);
			$state.go('session', null, { reload: true });
		});
	};

	$scope.joinSession = function() {
		$state.transitionTo('sessions');
		Session.list().then(function(sessions) {
			$scope.sessions = sessions;
		});
	};
}]);

app.filter('categoriescaption', function() {
	return function(category) {
		return category.map(function(cat) { return cat.name; }).join('/');
	};
});
