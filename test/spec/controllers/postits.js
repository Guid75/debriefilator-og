'use strict';

describe('Controller: PostitsCtrl', function () {

  // load the controller's module
  beforeEach(module('debriefilatorApp'));

  var PostitsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostitsCtrl = $controller('PostitsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
