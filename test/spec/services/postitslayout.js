'use strict';

describe('Service: PostitsLayout', function () {

  // load the service's module
  beforeEach(module('debriefilatorApp'));

  // instantiate service
  var PostitsLayout;
  beforeEach(inject(function (_PostitsLayout_) {
    PostitsLayout = _PostitsLayout_;
  }));

  it('should do something', function () {
    expect(!!PostitsLayout).toBe(true);
  });

});
