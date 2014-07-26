'use strict';

describe('Filter: categoriescaption', function () {

  // load the filter's module
  beforeEach(module('debriefilatorApp'));

  // initialize a new instance of the filter before each test
  var categoriescaption;
  beforeEach(inject(function ($filter) {
    categoriescaption = $filter('categoriescaption');
  }));

  it('should return the input prefixed with "categoriescaption filter:"', function () {
    var text = 'angularjs';
    expect(categoriescaption(text)).toBe('categoriescaption filter: ' + text);
  });

});
