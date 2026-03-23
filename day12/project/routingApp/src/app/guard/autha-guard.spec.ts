import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authaGuard } from './autha-guard';

describe('authaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => authaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
