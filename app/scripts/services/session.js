'use strict';

/**
 * @ngdoc service
 * @name debriefilatorApp.postit
 * @description
 * # postit
 * Factory in the debriefilatorApp.
 */
app.factory('Session', function ($http, $log) {

  // Public API here
  return {
    sessions: [],
		add: function(name) {
      return $http({
        method: 'put',
        url: '/api/session',
        data: {
          name: name
        }
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
		},
		list: function() {
      return $http({
        method: 'get',
        url: '/api/sessions'
      }).then(function (result) {

        this.sessions.splice(0);
        $log.log(result);
        Array.prototype.push.apply(this.sessions, result.data);

        return this.sessions;

      }.bind(this));
    }
  };
});
