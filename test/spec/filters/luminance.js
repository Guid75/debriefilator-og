'use strict';

describe('Filter: luminance', function () {

  // load the filter's module
  beforeEach(module('debriefilatorApp'));

  // initialize a new instance of the filter before each test
  var luminance;
  beforeEach(inject(function ($filter) {
    luminance = $filter('luminance');
  }));

  it('should return the input prefixed with "luminance filter:"', function () {
    var text = 'angularjs';
    expect(luminance(text)).toBe('luminance filter: ' + text);
  });

});
