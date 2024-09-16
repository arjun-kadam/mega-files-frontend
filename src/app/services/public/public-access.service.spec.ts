import { TestBed } from '@angular/core/testing';

import { PublicAccessService } from './public-access.service';

describe('PublicAccessService', () => {
  let service: PublicAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
