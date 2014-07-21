'use strict';

/**
 * @ngdoc function
 * @name debriefilatorApp.controller:RemarksCtrl
 * @description
 * # RemarksCtrl
 * Controller of the debriefilatorApp
 */
app.controller('RemarksCtrl', function ($scope) {
	$scope.columns = [
		{
			style: {
				backgroundColor: '#FDD'
			},
			remarkType: 'negative'
		},
		{
			style: {
				backgroundColor: '#DFD'
			},
			remarkType: 'positive'
		}
	];

	$scope.remarks = {
		negative: [],
		positive: []
	};

  $scope.newPostit = {
    text: ""
  };

	$scope.addRemark = function(type) {
    if (!$scope.newPostit.text) {
      return;
    }
		$scope.remarks[type].push({
			text: $scope.newPostit
		});
    $scope.newPostit = "";
	};
});
