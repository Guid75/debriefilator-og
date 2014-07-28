'use strict';

app.controller('ChatCtrl', function ($scope, $log, Session) {

	var chat = new SockJS('/chat/');

	$scope.addMessage = function () {
		chat.send(JSON.stringify({
			action: 'chat',
			message: $scope.data.message
		}));
		$scope.data.message = '';
	};

	$scope.data = {
		message: '',
		messages: []
	};

	chat.onopen = function () {
		var currentSession = Session.current();
		chat.send(JSON.stringify({
			action: 'join',
			sessionId: currentSession.id,
			userName: currentSession.username
		}));

	};

	chat.onmessage = function (result) {
		console.log('message', result.data);
		$scope.data.messages.push({
			text: result.data
		});
		$scope.$apply();
	};
});
