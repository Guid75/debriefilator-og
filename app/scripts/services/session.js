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
		},

		join: function(sessionId) {
			return $http({
				method: 'GET',
				url: '/api/session/' + sessionId
				// TODO add a pool of users for the joining site
			}).then(function(result) {
				this.initCurrent(sessionId, {
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
		}
	};
});
