'use strict';

describe('Controller: LatencyCtrl', function () {

  // load the controller's module
  beforeEach(module('nistSupercloudApp'));

  var LatencyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LatencyCtrl = $controller('LatencyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LatencyCtrl.awesomeThings.length).toBe(3);
  });
});
