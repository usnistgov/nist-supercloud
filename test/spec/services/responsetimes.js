'use strict';

describe('Service: responseTimes', function () {

  // load the service's module
  beforeEach(module('nistSupercloudApp'));

  // instantiate service
  var responseTimes;
  beforeEach(inject(function (_responseTimes_) {
    responseTimes = _responseTimes_;
  }));

  it('should do something', function () {
    expect(!!responseTimes).toBe(true);
  });

});
