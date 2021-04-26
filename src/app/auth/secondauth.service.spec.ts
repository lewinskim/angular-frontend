import { TestBed } from '@angular/core/testing';

import { SecondauthService } from './secondauth.service';

describe('SecondauthService', () => {
  let service: SecondauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecondauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
