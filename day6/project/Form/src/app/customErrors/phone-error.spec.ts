import { TestBed } from '@angular/core/testing';

import { PhoneError } from './phone-error';

describe('PhoneError', () => {
  let service: PhoneError;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneError);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
