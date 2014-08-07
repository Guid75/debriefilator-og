'use strict';

describe('Directive: focusMe', function () {

  // load the directive's module
  beforeEach(module('debriefilatorApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<focus-me></focus-me>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the focusMe directive');
  }));
});
