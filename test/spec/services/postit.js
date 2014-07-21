'use strict';

describe('Service: postit', function () {

  // load the service's module
  beforeEach(module('debriefilatorApp'));

  // instantiate service
  var postit;
  beforeEach(inject(function (_postit_) {
    postit = _postit_;
  }));

  it('should do something', function () {
    expect(!!postit).toBe(true);
  });

});
