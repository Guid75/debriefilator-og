'use strict';

/**
 * @ngdoc service
 * @name debriefilatorApp.postit
 * @description
 * # postit
 * Factory in the debriefilatorApp.
 */
app.factory('Session', function ($http) {
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
				layout: sessionCfg.layout,
				notes: sessionCfg.notes
			};
			session.username = sessionCfg.userName ? sessionCfg.userName :'Jon Doe';
		},

		getUserName: function () {
			return this.current().username;
		},

		join: function(session) {
			return $http({
				method: 'GET',
				url: '/api/session/' + session.sessionName 
				// TODO add a pool of users for the joining site
			}).then(function(result) {
				this.initCurrent(session.sessionName, {
					userName: session.userName,
					name: result.data.session.name,
					layout: result.data.session.layout,
					notes: result.data.session.notes
				});
			}.bind(this));
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
				this.initCurrent(result.data.sessionId, sessionCfg);
				return session;
			}.bind(this));
		},
		delete: function(name) {
			return $http({
				method: 'delete',
				url: '/api/session',
				data: {
					name: name
				}
			});
		}
	};
});
