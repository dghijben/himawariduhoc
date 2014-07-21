'use strict';

describe('Controller: FoundersCtrl', function () {

  // load the controller's module
  beforeEach(module('himawariduhocApp'));

  var FoundersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FoundersCtrl = $controller('FoundersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
