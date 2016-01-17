'use strict';

describe('Directive: smoothieGrid', function () {

  // load the directive's module
  beforeEach(module('nistSupercloudApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<smoothie-grid></smoothie-grid>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the smoothieGrid directive');
  }));
});
