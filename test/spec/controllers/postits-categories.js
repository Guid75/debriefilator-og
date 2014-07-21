'use strict';

describe('Controller: PostitsCategoriesCtrl', function () {

  // load the controller's module
  beforeEach(module('debriefilatorApp'));

  var PostitsCategoriesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostitsCategoriesCtrl = $controller('PostitsCategoriesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
