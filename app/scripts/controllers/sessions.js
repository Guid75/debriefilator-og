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
			Postit.init(sessionCfg.layout);
			$state.go('session', null, { reload: true });
		});
	};

	$scope.joinSession = function() {
		$state.transitionTo('sessions');
		Session.list();
	};
});

app.controller('ChatCtrl', function ($scope) {

	/* global: SockJS */
	var chat = new SockJS('/chat');

	$scope.addMessage = function () {
		chat.send($scope.data.message);
		$scope.data.message = '';
	};

	$scope.data = {
		message: '',
		messages: []
	};

	chat.onmessage = function (result) {
		console.log('message', result.data);
		$scope.data.messages.push({
			text: result.data
		});
		$scope.$apply();
	};
});

app.filter('categoriescaption', function() {
	return function(category) {
		return category.map(function(cat) { return cat.name; }).join('/');
	};
});
