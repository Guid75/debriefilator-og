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

	$scope.addRemark = function(type) {
		$scope.remarks[type].push({
			text: 'A remark',
			position: {
				x: 50 + $scope.remarks[type].length * 150,
				y: 50
			}
		});
	};
});
