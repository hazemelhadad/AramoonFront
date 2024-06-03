import { TestBed } from '@angular/core/testing';

import { TryService } from './try.service';

describe('TryService', () => {
  let service: TryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
