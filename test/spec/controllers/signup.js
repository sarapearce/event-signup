import {
    TestBed
} from '@angular/core/testing';

import {
    FormGroup,
    ReactiveFormsModule
} from '@angular/forms';

import { DynamicFormComponent } from './dynamic-form.component';

'use strict';

describe('Controller: SignupCtrl', function () {

  // load the controller's module
  beforeEach(module('fsEventSignupApp'));

  var SignupCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SignupCtrl = $controller('signupCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SignupCtrl.awesomeThings.length).toBe(3);
  });
});
