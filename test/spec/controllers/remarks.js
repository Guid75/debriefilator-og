'use strict';

describe('Controller: RemarksCtrl', function () {

  // load the controller's module
  beforeEach(module('debriefilatorApp'));

  var RemarksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RemarksCtrl = $controller('RemarksCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
