import { TestBed } from '@angular/core/testing';

import { ExpireSessionHandlerService } from './expire-session-handler.service';

describe('ExpireSessionHandlerService', () => {
  let service: ExpireSessionHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpireSessionHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
