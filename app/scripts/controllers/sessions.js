'use strict';

/**
 * @ngdoc function
 * @name debriefilatorApp.controller:SessionsCtrl
 * @description
 * # SessionsCtrl
 * Controller of the debriefilatorApp
 */
app.controller('SessionsCtrl', function ($scope, $modal, $state, Session, Note) {
	$scope.Session = Session;
	$scope.newSession = function() {
		var modalInstance = $modal.open({
			templateUrl: 'partials/newsession.html',
			controller: ['$scope', 'NotesLayout', function($scope, NotesLayout) {
				$scope.layouts = NotesLayout.all();
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
			Session.add(sessionCfg).then(function(session) {
				Note.init();
				$state.transitionTo('session', { sessionid: session.id }, { reload: true });
			});
		});
	};

	$scope.joinSession = function() {
		var modalInstance = $modal.open({
			templateUrl: 'partials/joinsession.html',
			controller: function($scope) {
				$scope.session = {
					sessionName: '',
					userName: ''
				};
				$scope.cancel = function() {
					$scope.$dismiss();
				};

				$scope.join = function() {
					$scope.$close($scope.session);
				};
			}
		});

		modalInstance.result.then(function (sessionCfg) {
			Session.join(sessionCfg)
			.then(function() {
				Note.init();
				$state.transitionTo('session', sessionCfg.sessionName, { reload: true });
			}, function() {
				// TODO: display an error
			});
		});
	};
});

