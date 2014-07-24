'use strict';

/**
 * @ngdoc service
 * @name debriefilatorApp.postit
 * @description
 * # postit
 * Factory in the debriefilatorApp.
 */
app.factory('Session', function ($http, $log) {
	var session;
	// Public API here
	return {
		current: function() {
			return session;
		},

		initCurrent: function(sessionId, sessionCfg) {
			session = {
				id: sessionId,
				name: sessionCfg.name,
				layout: sessionCfg.layout
			};
		},

		add: function(sessionCfg) {
			return $http({
				method: 'POST',
				url: '/api/session/new',
				data: {
					name: sessionCfg.sessionName,
					layout: sessionCfg.layout
				}
			}).then(function(result) {
				return result.data.sessionId;
			});
		},
		delete: function(name) {
			return $http({
				method: 'delete',
				url: '/api/session',
				data: {
					name: name
				}
			});
		}// ,
		// list: function() {
		// 	return $http({
		// 		method: 'get',
		// 		url: '/api/sessions'
		// 	}).then(function (result) {

		// 		this.sessions.splice(0);
		// 		$log.log(result);
		// 		Array.prototype.push.apply(this.sessions, result.data);

		// 		return this.sessions;

		// 	}.bind(this));
		// }
	};
});
