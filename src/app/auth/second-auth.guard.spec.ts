import { TestBed } from '@angular/core/testing';

import { SecondAuthGuard } from './second-auth.guard';

describe('SecondAuthGuard', () => {
  let guard: SecondAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SecondAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
